// Regression checks for CSV BOM, fluency export, and anticipatory-response handling.
// Run: node tests/verify.js   (no dependencies)
const fs = require('fs'), vm = require('vm'), path = require('path'), assert = require('assert');
const src = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
const el = () => ({ classList: { add(){}, remove(){} }, innerText: '', innerHTML: '', style: {}, setAttribute(){}, click(){}, appendChild(){}, removeChild(){}, querySelector: () => ({}) });
const els = {}; let blobs = []; let rafQueue = []; let now = 1000; const timers = [];
const ctx = {
  console, Math, Date, JSON, Object, Array, String, Number,
  document: { getElementById: id => (els[id] ||= el()), createElement: el, querySelector: () => el(), body: el(), addEventListener(){} },
  window: {}, navigator: {}, localStorage: { getItem: () => null, setItem(){} },
  performance: { now: () => now },
  requestAnimationFrame: cb => rafQueue.push(cb),
  setTimeout: (cb) => { timers.push(cb); return 1; }, clearTimeout(){},
  Blob: function (parts) { blobs.push(parts.join('')); },
  URL: { createObjectURL: () => 'blob:x', revokeObjectURL(){} },
  confirm: () => true, alert(){},
};
vm.createContext(ctx);
vm.runInContext(src + '\n;globalThis.__app = app; globalThis.__state = state;', ctx);
const app = ctx.__app, state = ctx.__state;
els['key-f-label'] = Object.assign(el(), { innerText: 'Word' });
els['key-j-label'] = Object.assign(el(), { innerText: 'Nonword' });
let pass = 0; const ok = (name, fn) => { fn(); pass++; console.log('ok -', name); };

ok('fluency CSV export does not throw and starts with BOM only', () => {
  state.currentTask = 'fluency'; state.currentLang = 'en';
  state.fluency.finalTranscript = 'cat dog'; state.fluency.wordCount = 2;
  blobs = []; app.exportToCSV();
  const csv = blobs[0];
  assert.strictEqual(csv.charCodeAt(0), 0xFEFF, 'first char must be BOM');
  assert.strictEqual(Buffer.from(csv, 'utf8').subarray(0, 3).toString('hex'), 'efbbbf');
  assert.ok(csv.slice(1).startsWith('Language,'), 'header right after BOM');
});

ok('anticipatory response before first onset frame is flagged, not timed from stale stamp', () => {
  state.currentTask = 'lexical'; state.results = []; state.currentTrialIndex = 0;
  state.config.expectedF = 'Word'; state.config.expectedJ = 'Nonword';
  state.trials = [{ word: 'apple', category: 'Word' }, { word: 'blick', category: 'Nonword' }];
  state.stimulusStartTime = 5; // stale stamp from an earlier run
  rafQueue = []; app.showStimulus();
  assert.strictEqual(state.stimulusStartTime, null, 'onset reset at target');
  now = 2000; app.handleTouch('left'); // before rAF fires
  const r = state.results[0];
  assert.strictEqual(r.anticipatory, true); assert.strictEqual(r.reactionTimeMs, null); assert.strictEqual(r.isCorrect, false);
  // next trial: normal response timed from its own onset
  rafQueue = []; app.showStimulus(); now = 3000; rafQueue.forEach(f => f()); now = 3450; app.handleTouch('right');
  const r2 = state.results[1];
  assert.strictEqual(r2.anticipatory, false); assert.strictEqual(r2.reactionTimeMs, 450); assert.strictEqual(r2.isCorrect, true);
  blobs = []; app.exportToCSV();
  const lines = blobs[0].slice(1).trim().split('\n');
  assert.strictEqual(blobs[0].charCodeAt(0), 0xFEFF); assert.notStrictEqual(blobs[0][0], ' ');
  assert.ok(lines[0].endsWith('Anticipatory(1=Yes)'));
  assert.ok(lines[1].endsWith(',0,,,1'), lines[1]);
  assert.ok(lines[2].endsWith(',1,450,450,0'), lines[2]);
});
console.log(`${pass} checks passed`);
