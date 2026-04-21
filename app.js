// --- V5 Multi-Lingual Dictionaries (Raw Strings for Memory Efficiency) ---
const rawDicts = {
    'en': {
        fam_f: ['Tree','Water','House','Dog','Car','Book','Chair','Table','Sun','Moon','Boy','Girl','Food','Milk','Bird'],
        fam_nf: ['Syzygy','Defenestrate','Obfuscate','Pejorative','Lugubrious','Pulchritude','Ephemeral','Mendacious','Cacophony','Alacrity','Quixotic','Sycophant','Ubiquitous','Vicarious','Zealot'],
        amb_a: ['Bat','Bark','Bow','Match','Bank','Pitcher','Crane','Date','Tear','Lead','Bass','Minute','Tear','Read','Wind'],
        amb_u: ['Cloud','Apple','Mirror','Laptop','Window','Chair','Blanket','Elephant','Mountain','Guitar','River','Star','Ocean','Desert','Pencil'],
        ldt_r: ['Window','Table','Phone','Plant','Keyboard','Screen','Mouse','Bottle','Sound','Ocean','Picture','Glass','Music','Letter','Paper'],
        ldt_f: ['Pland','Flirp','Clant','Bresh','Drolt','Frump','Glorp','Snart','Trisk','Vlisk','Brolt','Crend','Dramp','Frelp','Grist'],
        prim_r: ['Doctor|Nurse','Bread|Butter','Hand|Foot','Cat|Dog','Day|Night','Hot|Cold','King|Queen','Sun|Moon','Salt|Pepper','Light|Dark','High|Low','Rich|Poor','Fast|Slow','Happy|Sad','Big|Small'],
        prim_u: ['Doctor|Table','Bread|Car','Hand|Moon','Cat|Pencil','Day|Water','Hot|Shoe','King|Tree','Sun|Book','Salt|Window','Light|Fish','High|Apple','Rich|Mirror','Fast|Blanket','Happy|Keyboard','Big|Plant'],
        bcp47: 'en-IN'
    },
    'kn': {
        fam_f: ['ಮರ','ನೀರು','ಮನೆ','ಶಾಲೆ','ಬೆಕ್ಕು','ದಾರಿ','ಊಟ','ಅಮ್ಮ','ನಾಯಿ','ಪುಸ್ತಕ','ಕುರ್ಚಿ','ಸೂರ್ಯ','ಚಂದ್ರ','ಮಳೆ','ಗಾಳಿ'],
        fam_nf: ['ಖದ್ಯೋತ','ಶಿಶಿರ','ಕಿಂಕರ','ಶರಧಿ','ಪಗಡೆ','ತಲ್ಪ','ಅಡವಿ','ಭೃಂಗ','ಮೇದಿನಿ','ಜಲಧಿ','ಕುಸುಮ','ಅನಿಲ','ಅಂಬರ','ಧರಣಿ','ತಾರಕ'],
        amb_a: ['ಕಾಲು','ಅಂಕ','ಭಾವ','ದಳ','ಕರ','ಬೆಲೆ','ತಲೆ','ರಸ','ಕಲೆ','ಮಂತ್ರ','ಸೂತ್ರ','ಪಾತ್ರ','ರಂಗ','ಮಾನ','ಸರಿ'],
        amb_u: ['ಕ್ಯಾಮರಾ','ವಿಮಾನ','ಕನ್ನಡಿ','ರೈಲು','ರಸ್ತೆ','ಗೋಡೆ','ನೆಲ','ಚಾವಣಿ','ಕಿಟಕಿ','ಬಾಗಿಲು','ಮೊಬೈಲ್','ಕಪ್','ಪ್ಲೇಟ್','ಬಟ್ಟೆ','ಚಪ್ಪಲಿ'],
        ldt_r: ['ಗಡಿಯಾರ','ವಾಹನ','ಅಂಗಡಿ','ಕಡಲ','ಸರೋವರ','ಪರ್ವತ','ನದಿ','ಕಾಡು','ಪ್ರಾಣಿ','ಪಕ್ಷಿ','ಬೆಟ್ಟ','ಮರಳು','ಸಮುದ್ರ','ಆಕಾಶ','ഭൂಮಿ'],
        ldt_f: ['ಪ್ಲಾಂಡ್','ಫ್ಲಿರ್ಪ್','ಕ್ಲಾಂಟ್','ಬ್ರೆಶ್','ಡ್ರೋಲ್ಟ್','ಫ್ರಂಪ್','ಗ್ಲೋರ್ಪ್','ಸ್ನಾರ್ಟ್','ಟ್ರಿಸ್ಕ್','ವ್ಲಿಸ್ಕ್','ಬ್ರೋಲ್ಟ್','ಕ್ರೆಂಡ್','ಡ್ರಾಂಪ್','ಫ್ರೆಲ್ಪ್','ಗ್ರಿಸ್ಟ್'],
        prim_r: ['ವೈದ್ಯ|ದಾದಿ','ಬ್ರೆಡ್|ಬೆಣ್ಣೆ','ಕೈ|ಕಾಲು','ಬೆಕ್ಕು|ನಾಯಿ','ಹಗಲು|ರಾತ್ರಿ','ಬಿಸಿ|ತಂಪು','ರಾಜ|ರಾಣಿ','ಸೂರ್ಯ|ಚಂದ್ರ','ಉಪ್ಪು|ಮೆಣಸು','ಬೆಳಕು|ಕತ್ತಲೆ','ಎತ್ತರ|ತಗ್ಗು','ಶ್ರೀಮಂತ|ಬಡವ','ವೇಗ|ನಿಧಾನ','ಖುಷಿ|ದುಃಖ','ದೊಡ್ಡದು|ಚಿಕ್ಕದು'],
        prim_u: ['ವೈದ್ಯ|ಟೇಬಲ್','ಬ್ರೆಡ್|ಕಾರು','ಕೈ|ಚಂದ್ರ','ಬೆಕ್ಕು|ಪೆನ್ಸಿಲ್','ಹಗಲು|ನೀರು','ಬಿಸಿ|ಶೂ','ರಾಜ|ಮರ','ಸೂರ್ಯ|ಪುಸ್ತಕ','ಉಪ್ಪು|ಕಿಟಕಿ','ಬೆಳಕು|ಮೀನು','ಎತ್ತರ|ಸೇಬು','ಶ್ರೀಮಂತ|ಕನ್ನಡಿ','ವೇಗ|ಹೊದಿಕೆ','ಖುಷಿ|ಕೀಬೋರ್ಡ್','ದೊಡ್ಡದು|ಸಸೀ'],
        bcp47: 'kn-IN'
    },
    'hi': {
        fam_f: ['पेड़','पानी','घर','स्कूल','बिल्ली','रास्ता','खाना','माँ','कुत्ता','किताब','कुर्सी','सूरज','चाँद','बारिश','हवा'],
        fam_nf: ['किंचित','मृगतृष्णा','पयोधि','दिवाकर','शर्वरी','मयूख','अकिंचन','व्याकुल','क्षितिज','रश्मि','तिमिर','प्राची','अवनि','विपिन','कुसुमाकर'],
        amb_a: ['तीर','पत्र','कर','कनक','फल','रस','हार','रंग','मान','आम','जल','पद','ताल','दल','कल'],
        amb_u: ['कंप्यूटर','मोबाइल','दर्पण','गाड़ी','सड़क','दीवार','फर्श','छत','खिड़की','दरवाज़ा','प्लेट','कपड़े','जूता','कैमरा','पंखा'],
        ldt_r: ['घड़ी','वाहन','दुकान','समुद्र','झील','पर्वत','नदी','जंगल','जानवर','पक्षी','पहाड़','रेत','आकाश','धरती','तारा'],
        ldt_f: ['प्लांड','फ्लर्प','क्लांट','ब्रेश','ड्रोल्ट','फ्रंप','ग्लोर्प','स्नार्ट','ट्रिस्क','व्लिस्क','ब्रोट','क्रेंड','ड्रैंप','फ्रेल्प','ग्रिस्ट'],
        prim_r: ['डॉक्टर|नर्स','रोटी|मक्खन','हाथ|पैर','बिल्ली|कुत्ता','दिन|रात','गरम|ठंडा','राजा|रानी','सूरज|चाँद','नमक|मिर्च','प्रकाश|अंधेरा','ऊंचा|नीचा','अमीर|गरीब','तेज|धीमा','खुश|उदास','बड़ा|छोटा'],
        prim_u: ['डॉक्टर|मेज','रोटी|कार','हाथ|चाँद','बिल्ली|पेंसिल','दिन|पानी','गरम|जूता','राजा|पेड़','सूरज|किताब','नमक|खिड़की','प्रकाश|मछली','ऊंचा|सेब','अमीर|दर्पण','तेज|कंबल','खुश|कीबोर्ड','बड़ा|पौधा'],
        bcp47: 'hi-IN'
    },
    'te': {
        fam_f: ['చెట్టు','నీరు','ఇల్లు','బడి','పిల్లి','త్రోవ','అన్నం','అమ్మ','కుక్క','పుస్తకం','కుర్చీ','సూర్యుడు','చంద్రుడు','వాన','గాలి'],
        fam_nf: ['శార్దూలము','కింకరుడు','ఖద్యోతము','భాస్కరుడు','రాత్రి','తేజస్సు','దరిద్రుడు','వ్యాకులము','క్షితిజము','కిరణము','చీకటి','తూర్పు','భూమి','అడవి','వసంతము'],
        amb_a: ['అంకం','దళం','రాజు','కారం','పదం','కల','తల','రసం','కర','కళ','సూత్రం','పాత్ర','రంగం','మానం','సరి'],
        amb_u: ['కంప్యూటర్','మొబైల్','అద్దం','బండి','రోడ్డు','గోడ','నేల','పైకప్పు','కిటికీ','తలుపు','ప్లేటు','బట్టలు','చెప్పు','కెమెరా','ఫ్యాన్'],
        ldt_r: ['గడియారం','వాహనం','దుకాణం','సముద్రం','సరస్సు','పర్వతం','నది','అడవి','జంతువు','పక్షి','కొండ','ఇసుక','సంద్రం','ఆకాశం','నక్షత్రం'],
        ldt_f: ['ప్లాండ్','ఫ్లర్ప్','క్లాంట్','బ్రెష్','డ్రోల్ట్','ఫ్రంప్','గ్లోర్ప్','స్నార్ట్','ట్రిస్క్','వ్లిస్క్','బ్రోల్ట్','క్రెండ్','డ్రాంప్','ఫ్రెల్ప్','గ్రిస్ట్'],
        prim_r: ['డాక్టర్|నర్సు','రొట్టె|వెన్న','చెయ్యి|కాలు','పిల్లి|కుక్క','పగలు|రాత్రి','వేడి|చలి','రాజు|రాణి','సూర్యుడు|చంద్రుడు','ఉప్పు|కారం','వెలుగు|చీకటి','ఎత్తు|పల్లం','ధనిక|పేద','వేగం|నెమ్మది','సంతోషం|విచారం','పెద్ద|చిన్న'],
        prim_u: ['డాక్టర్|బల్ల','రొట్టె|కారు','చెయ్యి|చంద్రుడు','పిల్లి|పెన్సిల్','పగలు|నీరు','వేడి|చెప్పు','రాజు|చెట్టు','సూర్యుడు|పుస్తకం','ఉప్పు|కిటికీ','వెలుగు|చేప','ఎత్తు|యాపిల్','ధనిక|అద్దం','వేగం|దుప్పటి','సంతోషం|కీబోర్డు','పెద్ద|మొక్క'],
        bcp47: 'te-IN'
    },
    'ml': {
        fam_f: ['മരം','വെള്ളം','വീട്','സ്കൂൾ','പൂച്ച','വഴി','ഭക്ഷണം','അമ്മ','നായ','പുസ്തകം','കസേര','സൂര്യൻ','ചന്ദ്രൻ','മഴ','കാറ്റ്'],
        fam_nf: ['കിങ്കരൻ','ശിശിരം','ദിവാകരൻ','രാത്രി','പ്രകാശം','ദരിദ്രൻ','ഉത്കണ്ഠ','ചക്രവാളം','കിരണം','ഇരുട്ട്','കിഴക്ക്','ഭൂമി','കാട്','വസന്തം','കടുവ'],
        amb_a: ['തറ','അങ്കം','പടി','തരം','കള','പദം','കല','തല','രസം','കരം','സൂത്രം','പാത്രം','രംഗം','മാനം','ശരി'],
        amb_u: ['കമ്പ്യൂട്ടർ','മൊബൈൽ','കണ്ണാടി','വാഹനം','റോഡ്','മതിൽ','മേൽക്കൂര','ജനറൽ','വാതിൽ','പ്ലേറ്റ്','വസ്ത്രം','ചെരുപ്പ്','ക്യാമറ','ഫാൻ','മേശ'],
        ldt_r: ['വാച്ച്','കപ്പൽ','കട','കടൽ','തടാകം','പർവ്വതം','നദി','മൃഗം','പക്ഷി','മല','മണൽ','ആകാശം','നക്ഷത്രം','ചെടി','പൂവ്'],
        ldt_f: ['പ്ലാൻഡ്','ഫ്ലർപ്','ക്ലാന്റ്','ബ്രെഷ്','ഡ്രോൾട്ട്','ഫ്രമ്പ്','ഗ്ലോർപ്പ്','സ്നാർട്ട്','ട്രിസ്ക്','വ്ലിസ്ക്','ബ്രോൾട്ട്','ക്രെൻഡ്','ഡ്രാമ്പ്','ഫ്രെൽപ്','ഗ്രിസ്റ്റ്'],
        prim_r: ['ഡോക്ടർ|നഴ്സ്','റൊട്ടി|വെണ്ണ','കൈ|കാൽ','പൂച്ച|നായ','പകൽ|രാത്രി','ചൂട്|തണുപ്പ്','രാജാവ്|രാജ്ഞി','സൂര്യൻ|ചന്ദ്രൻ','ഉപ്പ്|കുരുമുളക്','വെളിച്ചം|ഇരുട്ട്','ഉയരം|താഴ്ച','ധനികൻ|ദരിദ്രൻ','വേഗം|പതുക്കെ','സന്തോഷം|സങ്കടം','വലുത്|ചെറുത്'],
        prim_u: ['ഡോക്ടർ|മേശ','റൊട്ടി|കാർ','കൈ|ചന്ദ്രൻ','പൂച്ച|പെൻസിൽ','പകൽ|വെള്ളം','ചൂട്|പുസ്തകം','രാജാവ്|മരം','സൂര്യൻ|ജനൽ','ഉപ്പ്|മത്സ്യം','വെളിച്ചം|ചെരുപ്പ്','ഉയരം|ആപ്പിൾ','ധനികൻ|കണ്ണാടി','വേഗം|പുതപ്പ്','സന്തോഷം|കീബോർഡ്','വലുത്|ചെടി'],
        bcp47: 'ml-IN'
    },
    'ta': {
        fam_f: ['மரம்','நீர்','வீடு','பள்ளி','பூனை','வழி','உணவு','அம்மா','நாய்','புத்தகம்','நாற்காலி','சூரியன்','சந்திரன்','மழை','காற்று'],
        fam_nf: ['சிசிரம்','கிங்கரன்','கதிரவன்','இரவு','ஒளி','வறியவன்','கவலை','அடிவானம்','கதிர்','இருள்','கிழக்கு','பூமி','காடு','வசந்தம்','புலி'],
        amb_a: ['மாலை','அரை','ஆறு','படி','தரம்','களம்','பதம்','கலை','தலை','ரசம்','கரம்','சூத்திரம்','பாத்திரம்','ரங்கம்','அகம்'],
        amb_u: ['கணினி','அலைபேசி','கண்ணாடி','வண்டி','சாலை','சுவர்','தரை','கூரை','ஜன்னல்','கதவு','தட்டு','துணி','செருப்பு','கேமரா','மின்விசிறி'],
        ldt_r: ['கடிகாரம்','வாகனம்','கடை','கடல்','ஏரி','மலை','நதி','விலங்கு','பறவை','மணல்','வானம்','நட்சத்திரம்','செடி','பூ','கல்'],
        ldt_f: ['ப்லாண்ட்','ஃப்லர்ப்','க்லான்ட்','பிரேஷ்','ட்ரோல்ட்','ஃபிரம்ப்','குளோர்ப்','ஸ்னார்ட்','ட்ரிஸ்க்','வ்லிஸ்க்','ப்ரோல்ட்','க்ரெண்ட்','ட்ராம்ப்','ப்ரெல்ப்','க்ரிஸ்ட்'],
        prim_r: ['மருத்துவர்|செவிலியர்','ரொட்டி|வெண்ணெய்','கை|கால்','பூனை|நாய்','பகல்|இரவு','சூடு|குளிர்','அரசன்|அரசி','சூரியன்|சந்திரன்','உப்பு|மிளகு','வெளிச்சம்|இருள்','உயரம்|பள்ளம்','பணக்காரன்|ஏழை','வேகம்|மெதுவாக','மகிழ்ச்சி|சோகம்','பெரிய|சிறிய'],
        prim_u: ['மருத்துவர்|மேஜை','ரொட்டி|கார்','கை|சந்திரன்','பூனை|பென்சில்','பகல்|நீர்','சூடு|செருப்பு','அரசன்|மரம்','சூரியன்|புத்தகம்','உப்பு|ஜன்னல்','வெளிச்சம்|மீன்','உயரம்|ஆப்பிள்','பணக்காரன்|கண்ணாடி','வேகம்|போர்வை','மகிழ்ச்சி|விசைப்பலகை','பெரிய|செடி'],
        bcp47: 'ta-IN'
    }
};

function buildTrials(task, lang) {
    const d = rawDicts[lang] || rawDicts['en'];
    let arr = [];
    
    if (task === 'familiarity') {
        d.fam_f.forEach(w => arr.push({ word: w, category: 'Familiar' }));
        d.fam_nf.forEach(w => arr.push({ word: w, category: 'Non-Familiar' }));
    } else if (task === 'ambiguity') {
        d.amb_a.forEach(w => arr.push({ word: w, category: 'Ambiguous' }));
        d.amb_u.forEach(w => arr.push({ word: w, category: 'Unambiguous' }));
    } else if (task === 'ldt') {
        d.ldt_r.forEach(w => arr.push({ word: w, category: 'Real Word' }));
        d.ldt_f.forEach(w => arr.push({ word: w, category: 'Pseudoword' }));
    } else if (task === 'priming') {
        d.prim_r.forEach(pair => {
            let [p, t] = pair.split('|');
            arr.push({ prime: p, word: t, category: 'Related' });
        });
        d.prim_u.forEach(pair => {
            let [p, t] = pair.split('|');
            arr.push({ prime: p, word: t, category: 'Unrelated' });
        });
    }
    return arr;
}

// --- App State ---
const state = {
    currentTask: null, 
    currentLang: 'kn', 
    trials: [], 
    currentTrialIndex: 0,
    results: [], 
    stimulusStartTime: null,
    phase: 'menu', 
    config: {
        fixationDuration: 1000, 
        primeDuration: 150, 
        primeBlankDuration: 50,
        interTrialInterval: 800,
        keyMapping: { leftKey: 'f', rightKey: 'j' }
    },
    fluency: { recognition: null, isRecording: false, wordCount: 0, finalTranscript: '' }
};

// --- Core Logic ---
const app = {
    init() {
        this.showScreen('menu-screen');
        window.addEventListener('keydown', this.handleKeydown.bind(this));
    },
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.style.display = 'none'; });
        const as = document.getElementById(screenId);
        as.style.display = 'flex';
        setTimeout(() => as.classList.add('active'), 50);
    },
    getLang() { return document.getElementById('language-select').value || 'kn'; },
    
    // Task Setup
    startRTTask(taskType) {
        state.currentLang = this.getLang();
        state.currentTask = taskType;
        state.phase = 'instructions';
        state.trials = this.shuffleArray(buildTrials(taskType, state.currentLang));
        state.currentTrialIndex = 0;
        state.results = [];

        document.getElementById('inst-keys').classList.remove('hidden');
        document.querySelector('.mobile-tap-info').classList.remove('hidden');

        const titleEl = document.getElementById('inst-title');
        const contentEl = document.getElementById('inst-content');
        const fLabel = document.getElementById('key-f-label');
        const jLabel = document.getElementById('key-j-label');
        
        if (taskType === 'familiarity') {
            titleEl.innerText = "Word Familiarity Task";
            contentEl.innerHTML = `
                <p><i class="fa-solid fa-eye" style="color:var(--accent-color)"></i> A target word will appear on the screen.</p>
                <p><i class="fa-solid fa-brain" style="color:var(--accent-color)"></i> Decide if it is a <strong>Familiar</strong> word or a <strong>Non-Familiar</strong> word.</p>
                <p><i class="fa-solid fa-stopwatch" style="color:var(--accent-color)"></i> Answer as quickly and accurately as possible.</p>`;
            fLabel.innerText = "Familiar Word"; jLabel.innerText = "Non-Familiar";
            state.config.expectedF = 'Familiar'; state.config.expectedJ = 'Non-Familiar';
        } else if (taskType === 'ambiguity') {
            titleEl.innerText = "Semantic Ambiguity Task";
            contentEl.innerHTML = `
                <p><i class="fa-solid fa-eye" style="color:var(--accent-color)"></i> A target word will appear on the screen.</p>
                <p><i class="fa-solid fa-arrows-split-up-and-left" style="color:var(--accent-color)"></i> Decide if it has <strong>Multiple Meanings</strong> (Ambiguous) or <strong>One Meaning</strong> (Unambiguous).</p>
                <p><i class="fa-solid fa-stopwatch" style="color:var(--accent-color)"></i> Answer as quickly and accurately as possible.</p>`;
            fLabel.innerText = "Ambiguous"; jLabel.innerText = "Unambiguous";
            state.config.expectedF = 'Ambiguous'; state.config.expectedJ = 'Unambiguous';
        } else if (taskType === 'ldt') {
            titleEl.innerText = "Lexical Decision Task";
            contentEl.innerHTML = `
                <p><i class="fa-solid fa-spell-check" style="color:var(--accent-color)"></i> Letters will appear forming a word.</p>
                <p><i class="fa-solid fa-language" style="color:var(--accent-color)"></i> Decide if it is a <strong>Real Word</strong> in the language, or a <strong>Fake Word</strong> (Pseudoword).</p>
                <p><i class="fa-solid fa-stopwatch" style="color:var(--accent-color)"></i> Answer as quickly and accurately as possible.</p>`;
            fLabel.innerText = "Real Word"; jLabel.innerText = "Fake Word";
            state.config.expectedF = 'Real Word'; state.config.expectedJ = 'Pseudoword';
        } else if (taskType === 'priming') {
            titleEl.innerText = "Semantic Priming Task";
            contentEl.innerHTML = `
                <p><i class="fa-solid fa-bolt" style="color:var(--warning-color)"></i> A 'Prime' word will flash extremely quickly on screen.</p>
                <p><i class="fa-solid fa-bullseye" style="color:var(--accent-color)"></i> Immediately after, the 'Target' word will appear.</p>
                <p><i class="fa-solid fa-link" style="color:var(--accent-color)"></i> Decide if the Prime and Target are <strong>Related</strong> in meaning or <strong>Unrelated</strong>.</p>
                <p><i class="fa-solid fa-stopwatch" style="color:var(--accent-color)"></i> Answer as quickly and accurately as possible.</p>`;
            fLabel.innerText = "Related"; jLabel.innerText = "Unrelated";
            state.config.expectedF = 'Related'; state.config.expectedJ = 'Unrelated';
        }
        
        document.getElementById('ind-left').innerText = fLabel.innerText;
        document.getElementById('ind-right').innerText = jLabel.innerText;
        this.showScreen('instructions-screen');
    },

    startExperiment() {
        if (state.currentTask === 'fluency') {
            this.runFluency();
        } else {
            state.phase = 'experiment';
            this.showScreen('experiment-screen');
            this.runTrial();
        }
    },

    runTrial() {
        if (state.currentTrialIndex >= state.trials.length) {
            this.endRTExperiment();
            return;
        }

        state.phase = 'fixation';
        document.getElementById('word-stimulus').classList.add('hidden');
        document.getElementById('rt-feedback').classList.add('hidden');
        document.getElementById('fixation').classList.remove('hidden');

        setTimeout(() => {
            document.getElementById('fixation').classList.add('hidden');
            if (state.currentTask === 'priming') {
                this.showPrime();
            } else {
                this.showStimulus();
            }
        }, state.config.fixationDuration);
    },

    showPrime() {
        state.phase = 'priming';
        const trial = state.trials[state.currentTrialIndex];
        const stimulusEl = document.getElementById('word-stimulus');
        stimulusEl.innerText = trial.prime; // Flash prime
        stimulusEl.classList.remove('hidden');

        setTimeout(() => {
            stimulusEl.classList.add('hidden'); // Blank screen
            state.phase = 'prime-blank';
            setTimeout(() => { this.showStimulus(); }, state.config.primeBlankDuration);
        }, state.config.primeDuration);
    },

    showStimulus() {
        state.phase = 'stimulus';
        const trial = state.trials[state.currentTrialIndex];
        const stimulusEl = document.getElementById('word-stimulus');
        stimulusEl.innerText = trial.word;
        stimulusEl.classList.remove('hidden');

        requestAnimationFrame(() => { state.stimulusStartTime = performance.now(); });
    },

    // Handlers
    handleTouch(side) {
        if (state.phase !== 'stimulus') return;
        const simulatedKey = (side === 'left') ? state.config.keyMapping.leftKey : state.config.keyMapping.rightKey;
        this.recordResponse(simulatedKey, performance.now() - state.stimulusStartTime);
    },
    handleKeydown(e) {
        if (state.phase === 'instructions' && e.code === 'Space') { this.startExperiment(); return; }
        if (state.phase !== 'stimulus') return;
        const key = e.key.toLowerCase();
        if (key === state.config.keyMapping.leftKey || key === state.config.keyMapping.rightKey) {
            if(e.code === 'Space') e.preventDefault();
            this.recordResponse(key, performance.now() - state.stimulusStartTime);
        }
    },

    recordResponse(keypressed, rt) {
        state.phase = 'inter-trial';
        const trial = state.trials[state.currentTrialIndex];
        
        let userChoice = (keypressed === state.config.keyMapping.leftKey) ? document.getElementById('key-f-label').innerText : document.getElementById('key-j-label').innerText;
        let intendedCategory = (keypressed === state.config.keyMapping.leftKey) ? state.config.expectedF : state.config.expectedJ;
        
        let isCorrect = (intendedCategory === trial.category);

        const rawRt = Math.round(rt);
        // DMDX / E-Prime convention: negative RT signals an incorrect response
        const signedRt = isCorrect ? rawRt : -rawRt;

        state.results.push({
            trialNumber: state.currentTrialIndex + 1,
            word: trial.word,
            prime: trial.prime || 'N/A',
            category: trial.category,
            userChoice: userChoice,
            isCorrect: isCorrect,
            reactionTimeMs: rawRt,
            signedRt: signedRt
        });

        document.getElementById('word-stimulus').classList.add('hidden');
        
        const feedbackEl = document.getElementById('rt-feedback');
        if (isCorrect) {
            feedbackEl.innerHTML = `<span>&#10003;</span> ${rawRt} ms`;
            feedbackEl.style.color = 'var(--success-color)';
        } else {
            // Show negative RT in red for incorrect — industry-standard indicator
            feedbackEl.innerHTML = `<span>&#10007;</span> &minus;${rawRt} ms`;
            feedbackEl.style.color = 'var(--warning-color)';
        }
        feedbackEl.classList.remove('hidden');

        state.currentTrialIndex++;
        setTimeout(() => { this.runTrial(); }, state.config.interTrialInterval);
    },

    endExperimentEarly() {
        if(confirm("End assessment early? Data collected so far will be saved.")){ this.endRTExperiment(); }
    },

    endRTExperiment() {
        state.phase = 'results';
        this.showScreen('results-screen');

        const statsDiv = document.getElementById('results-stats');
        statsDiv.innerHTML = '';
        if (state.results.length === 0) { statsDiv.innerHTML = '<p>No data recorded.</p>'; return; }

        // ── Overall accuracy card (E-Prime / PsychoPy style top-level summary) ──
        const totalItems = state.results.length;
        const totalCorrect = state.results.filter(r => r.isCorrect).length;
        const overallAcc = Math.round((totalCorrect / totalItems) * 100);
        const correctRts = state.results.filter(r => r.isCorrect).map(r => r.reactionTimeMs);
        const incorrectRts = state.results.filter(r => !r.isCorrect).map(r => r.reactionTimeMs);
        const meanCorrectRt = correctRts.length ? Math.round(correctRts.reduce((a,b) => a+b,0) / correctRts.length) : 'N/A';
        const meanErrorRt  = incorrectRts.length ? Math.round(incorrectRts.reduce((a,b) => a+b,0) / incorrectRts.length) : 'N/A';

        // Coloured overall accuracy card
        const accColor = overallAcc >= 80 ? 'var(--success-color)' : overallAcc >= 50 ? '#f59e0b' : 'var(--warning-color)';
        statsDiv.innerHTML = `
            <div class="stat-row overall-acc-card" style="border-color:${accColor};background:rgba(0,0,0,0.4);">
                <span class="stat-label">&#127919; Overall Accuracy</span>
                <span class="stat-value" style="color:${accColor};font-size:1.3rem;">${overallAcc}% &nbsp;(${totalCorrect} / ${totalItems} correct)</span>
            </div>
            <div class="stat-row">
                <span class="stat-label">&#10003; Mean RT — Correct responses</span>
                <span class="stat-value correct-td">${meanCorrectRt === 'N/A' ? 'N/A' : meanCorrectRt + ' ms'}</span>
            </div>
            <div class="stat-row">
                <span class="stat-label">&#10007; Mean RT — Incorrect responses (negative convention)</span>
                <span class="stat-value wrong-td">${meanErrorRt === 'N/A' ? 'N/A' : '\u2212' + meanErrorRt + ' ms'}</span>
            </div>`;

        // ── Per-category breakdown ──
        const categories = {};
        state.results.forEach(res => {
            if (!categories[res.category]) categories[res.category] = { correctRts: [], errorRts: [], count: 0, correct: 0 };
            categories[res.category].count += 1;
            if (res.isCorrect) {
                categories[res.category].correct += 1;
                categories[res.category].correctRts.push(res.reactionTimeMs);
            } else {
                categories[res.category].errorRts.push(res.reactionTimeMs);
            }
        });

        for (const [cat, data] of Object.entries(categories)) {
            const acc = Math.round((data.correct / data.count) * 100);
            const mRT = data.correctRts.length
                ? Math.round(data.correctRts.reduce((a,b) => a+b,0) / data.correctRts.length) + ' ms'
                : 'N/A';
            statsDiv.innerHTML += `<div class="stat-row"><span class="stat-label">${cat} (n=${data.count})</span><span class="stat-value">Acc: ${acc}% &nbsp;|&nbsp; Mean Correct RT: ${mRT}</span></div>`;
        }

        // ── Table ──
        const trH = document.getElementById('table-head-row');
        if (state.currentTask === 'priming') {
            trH.innerHTML = `<th>#</th><th>Prime</th><th>Target</th><th>Category</th><th>Response</th><th>Correct?</th><th>RT (ms) *</th>`;
        } else {
            trH.innerHTML = `<th>#</th><th>Word</th><th>Category</th><th>Response</th><th>Correct?</th><th>RT (ms) *</th>`;
        }

        const tbody = document.getElementById('table-body');
        tbody.innerHTML = '';
        state.results.forEach(r => {
            const tr = document.createElement('tr');
            const accBadge = r.isCorrect
                ? `<span class="acc-badge acc-correct">&#10003; Correct</span>`
                : `<span class="acc-badge acc-wrong">&#10007; Wrong</span>`;
            // Signed RT: negative shown in red for errors (DMDX convention)
            const rtCell = r.isCorrect
                ? `<span class="correct-td">${r.reactionTimeMs}</span>`
                : `<span class="wrong-td">&minus;${r.reactionTimeMs}</span>`;
            tr.className = r.isCorrect ? 'row-correct' : 'row-error';
            if (state.currentTask === 'priming') {
                tr.innerHTML = `<td>${r.trialNumber}</td><td>${r.prime}</td><td>${r.word}</td><td>${r.category}</td><td>${r.userChoice}</td><td>${accBadge}</td><td>${rtCell}</td>`;
            } else {
                tr.innerHTML = `<td>${r.trialNumber}</td><td>${r.word}</td><td>${r.category}</td><td>${r.userChoice}</td><td>${accBadge}</td><td>${rtCell}</td>`;
            }
            tbody.appendChild(tr);
        });

        // footnote
        const container = document.querySelector('.data-table-container');
        const note = container.querySelector('.rt-footnote');
        if (!note) {
            const fn = document.createElement('p');
            fn.className = 'rt-footnote';
            fn.innerHTML = '* Negative RT values indicate <strong style="color:var(--warning-color)">incorrect</strong> responses (DMDX / E-Prime convention).';
            container.appendChild(fn);
        }
    },

    exportToCSV() {
        let csvContent = " \uFEFF"; // Includes BOM for UTF-8 Indian scripts
        
        if (state.currentTask === 'fluency') {
            csvContent += "Language,LexicalCount,Transcript\n";
            let transcriptSafe = state.fluency.finalTranscript.replace(/"/g, '""');
            csvContent += `${dicts[state.currentLang]?.bcp47 || 'en'},${state.fluency.wordCount},"${transcriptSafe}"\n`;
        } else {
            if (state.currentTask === 'priming') {
                 csvContent += "Trial,Prime,Target,IntendedCategory,UserChoice,Correct(1=Yes/0=No),ReactionTimeMs,SignedRT(neg=error)\n";
                 state.results.forEach(res => {
                    csvContent += [res.trialNumber, `"${res.prime}"`, `"${res.word}"`, res.category, res.userChoice, res.isCorrect ? 1 : 0, res.reactionTimeMs, res.signedRt].join(",") + "\n";
                 });
            } else {
                 // SignedRT: negative for incorrect (DMDX / E-Prime convention)
                 csvContent += "Trial,Word,IntendedCategory,UserChoice,Correct(1=Yes/0=No),ReactionTimeMs,SignedRT(neg=error)\n";
                 state.results.forEach(res => {
                    csvContent += [res.trialNumber, `"${res.word}"`, res.category, res.userChoice, res.isCorrect ? 1 : 0, res.reactionTimeMs, res.signedRt].join(",") + "\n";
                 });
            }
        }

        // Universal Mobile Blob Export Fix
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `ClinLingua_${state.currentTask}_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url); // Clean up
    },

    // Fluency App
    startFluencyTask() {
        state.currentTask = 'fluency';
        state.currentLang = this.getLang();
        state.phase = 'instructions';
        state.fluency.isRecording = false; state.fluency.wordCount = 0; state.fluency.finalTranscript = '';
        
        // Hide standard RT instructions UI
        document.getElementById('inst-keys').classList.add('hidden');
        document.querySelector('.mobile-tap-info').classList.add('hidden');

        const titleEl = document.getElementById('inst-title');
        const contentEl = document.getElementById('inst-content');
        
        titleEl.innerText = "Verbal Fluency Measure";
        contentEl.innerHTML = `
            <p><i class="fa-solid fa-microphone-lines" style="color:var(--accent-color)"></i> You will be asked to speak words within a specific semantic or phonemic category.</p>
            <p><i class="fa-solid fa-robot" style="color:var(--accent-color)"></i> Once the test starts, press the microphone button to command the AI to listen.</p>
            <p><i class="fa-solid fa-comment-dots" style="color:var(--accent-color)"></i> Speak clearly, and list as many items as you can until stopped.</p>
        `;

        this.showScreen('instructions-screen');
    },

    runFluency() {
        state.phase = 'fluency';
        document.getElementById('ai-word-count').innerText = "0";
        document.getElementById('live-transcript').innerText = "Your words will appear here naturally...";
        document.getElementById('record-btn').classList.remove('recording');
        document.getElementById('rec-status').innerText = "Ready to Record";

        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert("Your browser does not support the Web Speech API. Please use Google Chrome or Microsoft Edge.");
            this.returnToMenu(); return;
        }

        const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
        state.fluency.recognition = new SpeechRec();
        state.fluency.recognition.lang = rawDicts[state.currentLang]?.bcp47 || 'en-IN';
        state.fluency.recognition.continuous = true;
        state.fluency.recognition.interimResults = true;

        state.fluency.recognition.onresult = (event) => {
            let interimTrans = ''; let finalTrans = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) finalTrans += event.results[i][0].transcript + ' ';
                else interimTrans += event.results[i][0].transcript;
            }
            if(finalTrans.length > 0){
                 state.fluency.finalTranscript += finalTrans;
                 this.updateLexicalCount(state.fluency.finalTranscript);
            }
            document.getElementById('live-transcript').innerHTML = `<span>${state.fluency.finalTranscript}</span><i style="opacity:0.5">${interimTrans}</i>`;
        };
        state.fluency.recognition.onerror = (e) => { if(state.fluency.isRecording) this.toggleRecording(); document.getElementById('rec-status').innerText = "Error: " + e.error; };
        state.fluency.recognition.onend = () => { if(state.fluency.isRecording) { try { state.fluency.recognition.start(); } catch(e){} } };

        document.getElementById('fluency-target').innerText = `Recording Language Check: Set to ${rawDicts[state.currentLang]?.bcp47 || 'en-IN'}`;
        this.showScreen('fluency-screen');
    },

    toggleRecording() {
        const btn = document.getElementById('record-btn');
        const stat = document.getElementById('rec-status');
        if (state.fluency.isRecording) {
            state.fluency.isRecording = false; state.fluency.recognition.stop();
            btn.classList.remove('recording'); btn.innerHTML = '<i class="fa-solid fa-microphone"></i>'; stat.innerText = "Recording Stopped";
        } else {
            state.fluency.isRecording = true;
            try { state.fluency.recognition.start(); } catch(e) {}
            btn.classList.add('recording'); btn.innerHTML = '<i class="fa-solid fa-stop"></i>';
            stat.innerText = "Recording... Speak Now"; document.getElementById('live-transcript').innerHTML = "<i>Listening...</i>";
        }
    },

    updateLexicalCount(text) {
        const words = text.trim().split(/[\s,]+/);
        const count = words.filter(w => w.length > 0).length;
        state.fluency.wordCount = count;
        document.getElementById('ai-word-count').innerText = count;
    },

    endFluencyEarly() {
        if (state.fluency.isRecording) this.toggleRecording();
        state.phase = 'results'; this.showScreen('results-screen');
        
        document.getElementById('results-stats').innerHTML = `<div class="stat-row"><span class="stat-label">AI Lexical Word Count:</span><span class="stat-value">${state.fluency.wordCount} words</span></div>`;
        document.getElementById('table-head-row').innerHTML = `<th>Full AI Lexical Transcription</th>`;
        document.getElementById('table-body').innerHTML = `<tr><td style="padding: 1rem;">${state.fluency.finalTranscript}</td></tr>`;
    },

    returnToMenu() {
        state.phase = 'menu';
        if(state.fluency.isRecording) this.toggleRecording();
        this.showScreen('menu-screen');
    },
    
    shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex); currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }
};

window.onload = () => app.init();
