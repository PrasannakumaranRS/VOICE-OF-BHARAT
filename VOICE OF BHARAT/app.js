// app.js
// Voice of Bharat Prototype Logic: Router, Multilingual Localization,
// Visual Soundwaves, AI Recommendation Engine, Interactive Heatmap & Status Checker.

// ==========================================
// 1. LOCALIZATION DICTIONARY
// ==========================================
const TRANSLATIONS = {
  en: {
    title: "Voice of Bharat",
    subtitle: "Consolidating citizen voices with data-driven planning for local development",
    helpTitle: "Help Center",
    citizenPortal: "Citizen Portal",
    mpPortal: "MP Workspace",
    citizenDesc: "Submit development suggestions via voice, text, or photos, and track your request's status.",
    mpDesc: "Analyze citizen demand hotspots, review AI-prioritized projects, and allocate development funds.",
    backToHome: "← Exit Workspace",
    
    // Citizen Panel tabs
    submitFeedbackTab: "Submit Feedback",
    trackStatusTab: "Track Status",
    
    // Form Labels & Placeholders
    fullName: "Full Name (Optional)",
    fullNamePlaceholder: "Enter your name or leave empty for anonymous",
    category: "Development Category",
    location: "Your Location / Village",
    selectLocation: "Select location pin on the map below",
    suggestionText: "Describe your suggestion",
    textPlaceholder: "Write your request here (e.g., 'We need a primary clinic because the nearest one is 10km away...')",
    submitBtn: "Submit Suggestion to MP",
    
    // Input Modes
    modeVoice: "🎙️ Voice Suggestion",
    modeText: "📝 Write Text",
    modePhoto: "📷 Upload Photo",
    modeChat: "💬 WhatsApp Bot",
    
    // Voice Simulator Strings
    clickRecord: "Click to start recording voice suggestion",
    recordingState: "Recording... Speak now. Click again to stop.",
    recordingFinished: "Voice recorded successfully! AI transcribing...",
    voiceSample: "Voice suggestion transcribed:",
    
    // Photo widget
    dragPhoto: "Drag & drop a photo here, or click to upload",
    photoSuccess: "Photo attached successfully!",
    
    // Chat widget
    chatWelcome: "Namaste! I am the Voice of Bharat assistant. Choose a language and send your suggestion or grievance. I will tag your location automatically.",
    chatPlaceholder: "Type your query...",
    
    // Help Box Guide Content
    helpBoxTitle: "How to use Voice of Bharat?",
    helpBoxDesc: "Select your preferred language. You can record a message, upload a photo of a road/school, or type directly.",
    samplePromptLabel: "Suggested templates:",
    sampleVoicePrompt: '"There is no primary school in our village. Children walk 8 km..."',
    faqTitle1: "Who receives my request?",
    faqAns1: "Your Member of Parliament (MP) receives it directly on their dashboard along with AI priority scores.",
    faqTitle2: "How is the priority determined?",
    faqAns2: "Our AI model combines your feedback volume with official census, school enrollment levels, and facility travel distance data to calculate urgency.",
    
    // Status tracking strings
    checkStatusTitle: "Track Your Complaint Status",
    enterTrackId: "Enter Tracking ID (VOB-XXXX)",
    trackBtn: "Track",
    recentSubmissions: "Your Recent Submissions",
    statusTimeline: "Progress Timeline",
    noTrackerData: "Enter a valid tracking ID or select a recent item on the left to see progress.",
    mpOfficialResponse: "MP's Official Response & Actions",
    noMpResponse: "No official response has been written yet. The MP office is evaluating the proposal.",
    
    // Status States
    status_submitted: "Submitted",
    status_review: "Under Review",
    status_sanctioned: "Sanctioned",
    status_wip: "Work In Progress",
    status_completed: "Completed",
    
    // Categories
    cat_education: "Education",
    cat_healthcare: "Healthcare",
    cat_water: "Water & Sanitation",
    cat_transport: "Transport",
    cat_agriculture: "Agriculture",
    cat_employment: "Employment"
  },
  hi: {
    title: "भारत की आवाज़",
    subtitle: "स्थानीय विकास के लिए डेटा-संचालित योजना के साथ नागरिकों की आवाज़ को जोड़ना",
    helpTitle: "सहायता केंद्र",
    citizenPortal: "नागरिक पोर्टल",
    mpPortal: "सांसद डैशबोर्ड",
    citizenDesc: "आवाज, पाठ या फोटो के माध्यम से विकास के सुझाव जमा करें, और अपनी शिकायत की स्थिति को ट्रैक करें।",
    mpDesc: "नागरिक मांग के हॉटस्पॉट का विश्लेषण करें, एआई-प्राथमिकता वाली परियोजनाओं की समीक्षा करें, और निधि आवंटित करें।",
    backToHome: "← बाहर निकलें",
    
    submitFeedbackTab: "सुझाव दर्ज करें",
    trackStatusTab: "स्थिति देखें",
    
    fullName: "पूरा नाम (वैकल्पिक)",
    fullNamePlaceholder: "अपना नाम दर्ज करें या गुप्त रहने के लिए खाली छोड़ें",
    category: "विकास की श्रेणी",
    location: "आपका स्थान / गाँव",
    selectLocation: "नीचे दिए गए मानचित्र पर स्थान का चयन करें",
    suggestionText: "अपने सुझाव का वर्णन करें",
    textPlaceholder: "अपनी मांग यहाँ लिखें (जैसे, 'हमें एक प्राथमिक क्लिनिक की आवश्यकता है क्योंकि निकटतम क्लिनिक 10 किमी दूर है...')",
    submitBtn: "सांसद को सुझाव भेजें",
    
    modeVoice: "🎙️ आवाज सुझाव",
    modeText: "📝 लिखकर भेजें",
    modePhoto: "📷 फोटो अपलोड",
    modeChat: "💬 व्हाट्सएप बोट",
    
    clickRecord: "आवाज सुझाव रिकॉर्ड करना शुरू करने के लिए क्लिक करें",
    recordingState: "रिकॉर्डिंग चालू है... बोलें। रोकने के लिए फिर से क्लिक करें।",
    recordingFinished: "आवाज सफलतापूर्वक रिकॉर्ड की गई! अनुवाद हो रहा है...",
    voiceSample: "अनुवादित आवाज पाठ:",
    
    dragPhoto: "यहाँ फोटो खींच कर लाएँ, या अपलोड करने के लिए क्लिक करें",
    photoSuccess: "फोटो सफलतापूर्वक संलग्न!",
    
    chatWelcome: "नमस्ते! मैं भारत की आवाज़ का सहायक हूँ। अपनी भाषा चुनें और विकास संबंधी सुझाव या शिकायत भेजें। मैं आपके स्थान को स्वचालित रूप से टैग करूँगा।",
    chatPlaceholder: "अपना संदेश लिखें...",
    
    helpBoxTitle: "भारत की आवाज़ का उपयोग कैसे करें?",
    helpBoxDesc: "अपनी मनपसंद भाषा चुनें। आप संदेश रिकॉर्ड कर सकते हैं, सड़क/स्कूल की फोटो अपलोड कर सकते हैं, या सीधे लिख सकते हैं।",
    samplePromptLabel: "सुझाए गए प्रारूप:",
    sampleVoicePrompt: '"हमारे गाँव में कोई प्राथमिक स्कूल नहीं है। बच्चों को 8 किमी पैदल चलना पड़ता है..."',
    faqTitle1: "मेरा अनुरोध किसे मिलता है?",
    faqAns1: "आपके संसद सदस्य (MP) को यह एआई प्राथमिकता स्कोर के साथ सीधे उनके डैशबोर्ड पर प्राप्त होता है।",
    faqTitle2: "प्राथमिकता कैसे तय की जाती है?",
    faqAns2: "हमारा एआई मॉडल तात्कालिकता की गणना करने के लिए आधिकारिक जनगणना, स्कूलों में नामांकन स्तर और यात्रा दूरी के डेटा के साथ आपकी प्रतिक्रिया को जोड़ता है।",
    
    checkStatusTitle: "अपनी शिकायत की स्थिति को ट्रैक करें",
    enterTrackId: "ट्रैकिंग आईडी दर्ज करें (VOB-XXXX)",
    trackBtn: "खोजें",
    recentSubmissions: "आपके हालिया सुझाव",
    statusTimeline: "प्रगति समयरेखा",
    noTrackerData: "प्रगति देखने के लिए एक वैध ट्रैकिंग आईडी दर्ज करें या बाईं ओर हाल की सूची से चुनें।",
    mpOfficialResponse: "सांसद की आधिकारिक प्रतिक्रिया और कार्रवाई",
    noMpResponse: "अभी तक कोई आधिकारिक प्रतिक्रिया नहीं लिखी गई है। सांसद कार्यालय प्रस्ताव का मूल्यांकन कर रहा है।",
    
    status_submitted: "प्रस्तुत किया गया",
    status_review: "समीक्षा के अधीन",
    status_sanctioned: "स्वीकृत",
    status_wip: "कार्य प्रगति पर",
    status_completed: "पूर्ण",
    
    cat_education: "शिक्षा",
    cat_healthcare: "स्वास्थ्य देखभाल",
    cat_water: "जल एवं स्वच्छता",
    cat_transport: "परिवहन",
    cat_agriculture: "कृषि",
    cat_employment: "रोजगार"
  },
  ta: {
    title: "பாரதத்தின் குரல்",
    subtitle: "உள்ளூர் வளர்ச்சிக்காக தரவு சார்ந்த திட்டமிடலுடன் குடிமக்களின் குரல்களை ஒருங்கிணைத்தல்",
    helpTitle: "உதவி மையம்",
    citizenPortal: "குடிமக்கள் தளம்",
    mpPortal: "நாடாளுமன்ற உறுப்பினர் தளம்",
    citizenDesc: "குரல், உரை அல்லது புகைப்படங்கள் மூலம் மேம்பாட்டுப் பரிந்துரைகளைச் சமர்ப்பிக்கவும், உங்கள் கோரிக்கையின் நிலையைக் கண்காணிக்கவும்.",
    mpDesc: "குடிமக்களின் கோரிக்கை அதிகம் உள்ள இடங்களை பகுப்பாய்வு செய்து, முன்னுரிமை பெற்ற திட்டங்களை மதிப்பாய்வு செய்து நிதியை ஒதுக்கவும்.",
    backToHome: "← வெளியேறு",
    
    submitFeedbackTab: "கோரிக்கையைச் சமர்ப்பிக்க",
    trackStatusTab: "நிலை அறிய",
    
    fullName: "முழு பெயர் (விருப்பத்திற்குரியது)",
    fullNamePlaceholder: "உங்கள் பெயரை உள்ளிடவும் அல்லது பெயர் குறிப்பிடாமல் அனுப்ப காலியாக விடவும்",
    category: "வளர்ச்சி வகை",
    location: "உங்கள் இருப்பிடம் / கிராமம்",
    selectLocation: "கீழே உள்ள வரைபடத்தில் இருப்பிட புள்ளியைத் தேர்ந்தெடுக்கவும்",
    suggestionText: "உங்கள் கோரிக்கை விவரம்",
    textPlaceholder: "உங்கள் கோரிக்கையை இங்கே எழுதவும் (எ.கா: 'எங்கள் கிராமத்தில் ஆரம்ப சுகாதார நிலையம் இல்லை, 10 கிமீ பயணிக்க வேண்டியுள்ளது...')",
    submitBtn: "எம்.பி-க்கு பரிந்துரையை அனுப்புக",
    
    modeVoice: "🎙️ குரல் கோரிக்கை",
    modeText: "📝 உரை வடிவில் எழுத",
    modePhoto: "📷 படம் பதிவேற்ற",
    modeChat: "💬 வாட்ஸ்அப் போட்",
    
    clickRecord: "குரல் கோரிக்கையை பதிவு செய்ய கிளிக் செய்யவும்",
    recordingState: "பதிவாகிறது... இப்போது பேசவும். நிறுத்த மீண்டும் கிளிக் செய்யவும்.",
    recordingFinished: "குரல் வெற்றிகரமாக பதிவானது! AI எழுத்துமாற்றம் செய்கிறது...",
    voiceSample: "பதிவிலிருந்து பெறப்பட்ட உரை:",
    
    dragPhoto: "இங்கே ஒரு புகைப்படத்தை இழுத்து விடவும், அல்லது கிளிக் செய்து பதிவேற்றவும்",
    photoSuccess: "படம் வெற்றிகரமாக இணைக்கப்பட்டது!",
    
    chatWelcome: "வணக்கம்! நான் பாரதத்தின் குரல் உதவி செயலி. ஒரு மொழியைத் தேர்ந்தெடுத்து, உங்கள் பரிந்துரை அல்லது குறையை அனுப்பவும். உங்கள் இருப்பிடத்தை நான் தானாகவே குறியிடுவேன்.",
    chatPlaceholder: "உங்கள் செய்தியை தட்டச்சு செய்யவும்...",
    
    helpBoxTitle: "பாரதத்தின் குரல் தளத்தை எவ்வாறு பயன்படுத்துவது?",
    helpBoxDesc: "உங்களுக்கு விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும். நீங்கள் ஒரு செய்தியைப் பதிவு செய்யலாம், சேதமடைந்த சாலை அல்லது பள்ளியின் புகைப்படத்தைப் பதிவேற்றலாம் அல்லது நேரடியாக தட்டச்சு செய்யலாம்.",
    samplePromptLabel: "பரிந்துரைக்கப்பட்ட மாதிரிகள்:",
    sampleVoicePrompt: '"எங்கள் கிராமத்தில் ஆரம்ப பள்ளி இல்லை. குழந்தைகள் 8 கிமீ நடக்க வேண்டியுள்ளது..."',
    faqTitle1: "என் கோரிக்கையை யார் பெறுவார்கள்?",
    faqAns1: "உங்கள் நாடாளுமன்ற உறுப்பினர் (MP) அவர்களின் கட்டுப்பாட்டு அறையில் AI முன்னுரிமை மதிப்பெண்களுடன் நேரடியாகப் பெறுவார்.",
    faqTitle2: "முன்னுரிமை எவ்வாறு தீர்மானிக்கப்படுகிறது?",
    faqAns2: "எங்கள் AI அல்காரிதம் உங்கள் கோரிக்கையின் அடர்த்தியை, அதிகாரப்பூர்வ மக்கள் தொகை, பள்ளி சேர்க்கை மற்றும் பயண தூரத் தரவுகளுடன் ஒப்பிட்டு முன்னுரிமையை நிர்ணயிக்கிறது.",
    
    checkStatusTitle: "உங்கள் புகாரின் நிலையைக் கண்காணிக்கவும்",
    enterTrackId: "கண்காணிப்பு ஐடியை உள்ளிடவும் (VOB-XXXX)",
    trackBtn: "தேடுக",
    recentSubmissions: "உங்கள் சமீபத்திய கோரிக்கைகள்",
    statusTimeline: "முன்னேற்ற காலவரிசை",
    noTrackerData: "முன்னேற்றத்தைக் காண சரியான கண்காணிப்பு ஐடியை உள்ளிடவும் அல்லது இடதுபுறத்தில் உள்ள சமீபத்திய கோரிக்கையைத் தேர்ந்தெடுக்கவும்.",
    mpOfficialResponse: "நாடாளுமன்ற உறுப்பினரின் அதிகாரப்பூர்வ பதில்",
    noMpResponse: "அதிகாரப்பூர்வ பதில் இன்னும் எழுதப்படவில்லை. எம்.பி அலுவலகம் திட்டத்தை ஆய்வு செய்து வருகிறது.",
    
    status_submitted: "சமர்ப்பிக்கப்பட்டது",
    status_review: "மதிப்பாய்வில் உள்ளது",
    status_sanctioned: "அனுமதிக்கப்பட்டது",
    status_wip: "பணி நடக்கிறது",
    status_completed: "நிறைவடைந்தது",
    
    cat_education: "கல்வி",
    cat_healthcare: "சுகாதாரம்",
    cat_water: "குடிநீர் & கழிப்பறை",
    cat_transport: "போக்குவரத்து",
    cat_agriculture: "விவசாயம்",
    cat_employment: "வேலைவாய்ப்பு"
  },
  ml: {
    title: "ഭാരതത്തിന്റെ ശബ്ദം",
    subtitle: "പ്രാദേശിക വികസനത്തിനായി ഡാറ്റാധിഷ്ഠിത ആസൂത്രണവുമായി പൗരന്മാരുടെ ശബ്ദത്തെ സംയോജിപ്പിക്കുന്നു",
    helpTitle: "സഹായ കേന്ദ്രം",
    citizenPortal: "പൗരന്മാരുടെ പോർട്ടൽ",
    mpPortal: "എംപി വർക്ക്സ്പേസ്",
    citizenDesc: "ശബ്ദം, വാചകം അല്ലെങ്കിൽ ഫോട്ടോകൾ വഴി വികസന നിർദ്ദേശങ്ങൾ സമർപ്പിക്കുക, നിങ്ങളുടെ അപേക്ഷയുടെ പുരോഗതി ട്രാക്ക് ചെയ്യുക.",
    mpDesc: "പൗരന്മാരുടെ ആവശ്യങ്ങളുടെ പ്രധാന മേഖലകൾ വിശകലനം ചെയ്യുക, എഐ മുൻഗണന നൽകിയ പ്രോജക്റ്റുകൾ വിലയിരുത്തുക, ഫണ്ട് അനുവദിക്കുക.",
    backToHome: "← പുറത്തുകടക്കുക",
    
    submitFeedbackTab: "അഭിപ്രായം സമർപ്പിക്കുക",
    trackStatusTab: "പുരോഗതി അറിയുക",
    
    fullName: "പൂർണ്ണ നാമം (ഓപ്ഷണൽ)",
    fullNamePlaceholder: "പേര് നൽകുക അല്ലെങ്കിൽ അജ്ഞാതമായി തുടരാൻ ഇത് ഒഴിവാക്കുക",
    category: "വികസന വിഭാഗം",
    location: "നിങ്ങളുടെ സ്ഥലം / ഗ്രാമം",
    selectLocation: "താഴെയുള്ള മാപ്പിൽ ലൊക്കേഷൻ പിൻ തിരഞ്ഞെടുക്കുക",
    suggestionText: "നിങ്ങളുടെ നിർദ്ദേശം വിവരിക്കുക",
    textPlaceholder: "നിങ്ങളുടെ ആവശ്യം ഇവിടെ എഴുതുക (ഉദാഹരണത്തിന്, 'ഏറ്റവും അടുത്തുള്ള ക്ലിനിക് 10 കിലോമീറ്റർ ദൂരെയായതിനാൽ ഞങ്ങൾക്ക് ഒരു പ്രാഥമിക ക്ലിനിക് ആവശ്യമാണ്...')",
    submitBtn: "നിർദ്ദേശം എംപിക്ക് സമർപ്പിക്കുക",
    
    modeVoice: "🎙️ ശബ്ദ നിർദ്ദേശം",
    modeText: "📝 എഴുതി സമർപ്പിക്കുക",
    modePhoto: "📷 ഫോട്ടോ അപ്‌ലോഡ്",
    modeChat: "💬 വാട്സ്ആപ്പ് ബോട്ട്",
    
    clickRecord: "ശബ്ദ സന്ദേശം റെക്കോർഡ് ചെയ്യാൻ ക്ലിക്ക് ചെയ്യുക",
    recordingState: "റെക്കോർഡ് ചെയ്യുന്നു... ഇപ്പോൾ സംസാരിക്കാം. നിർത്താൻ വീണ്ടും ക്ലിക്ക് ചെയ്യുക.",
    recordingFinished: "ശബ്ദം വിജയകരമായി റെക്കോർഡ് ചെയ്തു! AI അക്ഷരമാറ്റുന്നു...",
    voiceSample: "ശബ്ദ സന്ദേശത്തിന്റെ ഉള്ളടക്കം:",
    
    dragPhoto: "ഫോട്ടോ ഇവിടെ ഡ്രാഗ് ചെയ്യുക, അല്ലെങ്കിൽ അപ്‌ലോഡ് ചെയ്യാൻ ക്ലിക്ക് ചെയ്യുക",
    photoSuccess: "ഫോട്ടോ വിജയകരമായി ചേർത്തു!",
    
    chatWelcome: "നമസ്തേ! ഞാൻ ഭാരതത്തിന്റെ ശബ്ദം അസിസ്റ്റന്റാണ്. നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുത്ത് നിർദ്ദേശങ്ങളോ പരാതികളോ അയക്കുക. ഞാൻ നിങ്ങളുടെ സ്ഥലം സ്വയം ടാഗ് ചെയ്യും.",
    chatPlaceholder: "സന്ദേശം ടൈപ്പ് ചെയ്യുക...",
    
    helpBoxTitle: "ഭാരതത്തിന്റെ ശബ്ദം എങ്ങനെ ഉപയോഗിക്കാം?",
    helpBoxDesc: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക. നിങ്ങൾക്ക് ഒരു ശബ്ദ സന്ദേശം റെക്കോർഡ് ചെയ്യാം, റോഡിന്റെയോ സ്കൂളിന്റെയോ ഫോട്ടോകൾ സമർപ്പിക്കാം അല്ലെങ്കിൽ നേരിട്ട് എഴുതാം.",
    samplePromptLabel: "ഉദാഹരണങ്ങൾ:",
    sampleVoicePrompt: '"ഞങ്ങളുടെ ഗ്രാമത്തിൽ പ്രൈമറി സ്കൂളില്ല. കുട്ടികൾ 8 കി.മീ നടക്കുന്നു..."',
    faqTitle1: "ആരാണ് എന്റെ അഭ്യർത്ഥന സ്വീകരിക്കുന്നത്?",
    faqAns1: "നിങ്ങളുടെ പാർലമെന്റ് അംഗത്തിന് (എംപി) അവരുടെ ഡാഷ്‌ബോർഡിൽ നേരിട്ട് എഐ മുൻഗണനാ സ്കോറോടെ ലഭിക്കും.",
    faqTitle2: "മുൻഗണന എങ്ങനെ നിശ്ചയിക്കുന്നു?",
    faqAns2: "വികസനത്തിന്റെ അടിയന്തിരത കണക്കാക്കാൻ നിങ്ങളുടെ ഫീഡ്ബാക്കിന്റെ എണ്ണം ഔദ്യോഗിക സെൻസസ്, സ്കൂൾ പ്രവേശനം, യാത്രാദൂരം എന്നിവയുമായി എഐ സിസ്റ്റം ഒത്തുനോക്കുന്നു.",
    
    checkStatusTitle: "നിങ്ങളുടെ പരാതിയുടെ പുരോഗതി അറിയുക",
    enterTrackId: "ട്രാക്കിംഗ് ഐഡി നൽകുക (VOB-XXXX)",
    trackBtn: "തിരയുക",
    recentSubmissions: "നിങ്ങളുടെ സമീപകാല സമർപ്പിക്കലുകൾ",
    statusTimeline: "പുരോഗതി സമയരേഖ",
    noTrackerData: "പുരോഗതി പരിശോധിക്കുന്നതിന് ട്രാക്കിംഗ് ഐഡി നൽകുക അല്ലെങ്കിൽ ഇടതുവശത്തുള്ള പട്ടികയിൽ നിന്ന് തിരഞ്ഞെടുക്കുക.",
    mpOfficialResponse: "എംപിയുടെ ഔദ്യോഗിക പ്രതികരണം",
    noMpResponse: "ഔദ്യോഗിക മറുപടി ഇതുവരെ നൽകിയിട്ടില്ല. എംപി ഓഫീസ് നിർദ്ദേശം പരിശോധിച്ചുവരികയാണ്.",
    
    status_submitted: "സമർപ്പിച്ചു",
    status_review: "പരിശോധനയിലാണ്",
    status_sanctioned: "അനുമതി നൽകി",
    status_wip: "പണി നടക്കുന്നു",
    status_completed: "പൂർത്തിയായി",
    
    cat_education: "വിദ്യാഭ്യാസം",
    cat_healthcare: "ആരോഗ്യം",
    cat_water: "കുടിവെള്ളം & ശുചിത്വം",
    cat_transport: "ഗതാഗതം",
    cat_agriculture: "കൃഷി",
    cat_employment: "തൊഴിൽ"
  },
  kn: {
    title: "ಭಾರತದ ಧ್ವನಿ",
    subtitle: "ಸ್ಥಳೀಯ ಅಭಿವೃದ್ಧಿಗಾಗಿ ದತ್ತಾಂಶ ಆಧಾರಿತ ಯೋಜನೆಯೊಂದಿಗೆ ನಾಗರಿಕರ ಧ್ವನಿಯನ್ನು ಕ್ರೋಡೀಕರಿಸುವುದು",
    helpTitle: "ಸಹಾಯ ಕೇಂದ್ರ",
    citizenPortal: "ನಾಗರಿಕರ ಪೋರ್ಟಲ್",
    mpPortal: "ಸಂಸದರ ಕಾರ್ಯಕ್ಷೇತ್ರ",
    citizenDesc: "ಧ್ವನಿ, ಪಠ್ಯ ಅಥವಾ ಫೋಟೋಗಳ ಮೂಲಕ ಅಭಿವೃದ್ಧಿ ಸಲಹೆಗಳನ್ನು ಸಲ್ಲಿಸಿ ಮತ್ತು ನಿಮ್ಮ ವಿನಂತಿಯ ಸ್ಥಿತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",
    mpDesc: "ನಾಗರಿಕರ ಬೇಡಿಕೆಯ ಹಾಟ್‌ಸ್ಪಾಟ್‌ಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ, ಎಐ-ಆದ್ಯತೆಯ ಯೋಜನೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಅಭಿವೃದ್ಧಿ ನಿಧಿಯನ್ನು ಹಂಚಿಕೆ ಮಾಡಿ.",
    backToHome: "← ನಿರ್ಗಮಿಸಿ",
    
    submitFeedbackTab: "ಸಲಹೆ ನೀಡಿ",
    trackStatusTab: "ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಿ",
    
    fullName: "ಪೂರ್ಣ ಹೆಸರು (ಐಚ್ಛಿಕ)",
    fullNamePlaceholder: "ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ ಅಥವಾ ಅನಾಮಧೇಯವಾಗಿರಲು ಖಾಲಿ ಬಿಡಿ",
    category: "ಅಭಿವೃದ್ಧಿ ವಿಭಾಗ",
    location: "ನಿಮ್ಮ ಸ್ಥಳ / ಗ್ರಾಮ",
    selectLocation: "ಕೆಳಗಿನ ನಕ್ಷೆಯಲ್ಲಿ ಸ್ಥಳದ ಪಿನ್ ಆಯ್ಕೆಮಾಡಿ",
    suggestionText: "ನಿಮ್ಮ ಸಲಹೆಯನ್ನು ವಿವರಿಸಿ",
    textPlaceholder: "ನಿಮ್ಮ ಬೇಡಿಕೆಯನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ (ಉದಾ: 'ನಮ್ಮ ಹಳ್ಳಿಯಲ್ಲಿ ಪ್ರಾಥಮಿಕ ಚಿಕಿತ್ಸಾ ಕೇಂದ್ರ ಬೇಕು ಏಕೆಂದರೆ ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆ 10 ಕಿಮೀ ದೂರದಲ್ಲಿದೆ...')",
    submitBtn: "ಸಂಸದರಿಗೆ ಸಲಹೆ ಸಲ್ಲಿಸಿ",
    
    modeVoice: "🎙️ ಧ್ವನಿ ಸಲಹೆ",
    modeText: "📝 ಪಠ್ಯ ಬರೆಯಿರಿ",
    modePhoto: "📷 ಫೋಟೋ ಅಪ್‌ಲೋಡ್",
    modeChat: "💬 ವಾಟ್ಸಾಪ್ ಬಾಟ್",
    
    clickRecord: "ಧ್ವನಿ ಸಲಹೆ ದಾಖಲಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
    recordingState: "ರೆಕಾರ್ಡಿಂಗ್ ಜಾರಿಯಲ್ಲಿದೆ... ಈಗ ಮಾತನಾಡಿ. ನಿಲ್ಲಿಸಲು ಮತ್ತೊಮ್ಮೆ ಕ್ಲಿಕ್ ಮಾಡಿ.",
    recordingFinished: "ಧ್ವನಿ ಯಶಸ್ವಿಯಾಗಿ ದಾಖಲಾಗಿದೆ! ಎಐ ಪಠ್ಯೀಕರಿಸುತ್ತಿದೆ...",
    voiceSample: "ಅನುವಾದಿತ ಧ್ವನಿ ಪಠ್ಯ:",
    
    dragPhoto: "ಫೋಟೋವನ್ನು ಇಲ್ಲಿಗೆ ಎಳೆಯಿರಿ, ಅಥವಾ ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
    photoSuccess: "ಫೋಟೋ ಯಶಸ್ವಿಯಾಗಿ ಲಗತ್ತಿಸಲಾಗಿದೆ!",
    
    chatWelcome: "ನಮಸ್ತೆ! ನಾನು ಭಾರತದ ಧ್ವನಿ ಸಹಾಯಕ. ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆರಿಸಿ ಮತ್ತು ಸಲಹೆ ಅಥವಾ ದೂರನ್ನು ಕಳುಹಿಸಿ. ನಾನು ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಟ್ಯಾಗ್ ಮಾಡುತ್ತೇನೆ.",
    chatPlaceholder: "ನಿಮ್ಮ ಸಂದೇಶ ಟೈಪ್ ಮಾಡಿ...",
    
    helpBoxTitle: "ಭಾರತದ ಧ್ವನಿಯನ್ನು ಬಳಸುವುದು ಹೇಗೆ?",
    helpBoxDesc: "ನಿಮಗೆ ಬೇಕಾದ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ನೀವು ಧ್ವನಿ ಸಂದೇಶವನ್ನು ರೆಕಾರ್ಡ್ ಮಾಡಬಹುದು, ರಸ್ತೆ/ಶಾಲೆಯ ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಬಹುದು ಅಥವಾ ನೇರವಾಗಿ ಟೈಪ್ ಮಾಡಬಹುದು.",
    samplePromptLabel: "ಮಾದರಿಗಳು:",
    sampleVoicePrompt: '"ನಮ್ಮ ಹಳ್ಳಿಯಲ್ಲಿ ಪ್ರಾಥಮಿಕ ಶಾಲೆ ಇಲ್ಲ. ಮಕ್ಕಳು 8 ಕಿಮೀ ನಡೆಯುತ್ತಾರೆ..."',
    faqTitle1: "ನನ್ನ ವಿನಂತಿಯನ್ನು ಯಾರು ಸ್ವೀಕರಿಸುತ್ತಾರೆ?",
    faqAns1: "ನಿಮ್ಮ ಸಂಸತ್ ಸದಸ್ಯರಿಗೆ (MP) ಎಐ ಆದ್ಯತೆಯ ಸ್ಕೋರ್‌ಗಳೊಂದಿಗೆ ನೇರವಾಗಿ ಅವರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿ ತಲುಪುತ್ತದೆ.",
    faqTitle2: "ಆದ್ಯತೆಯನ್ನು ಹೇಗೆ ನಿರ್ಧರಿಸಲಾಗುತ್ತದೆ?",
    faqAns2: "ನಮ್ಮ ಎಐ ಮಾದರಿಯು ಸೌಲಭ್ಯಗಳ ಪ್ರಯಾಣದ ದೂರ, ಶಾಲೆಗಳ ದಾಖಲಾತಿ ಪ್ರಮಾಣ ಮತ್ತು ಜನಗಣತಿಯ ದತ್ತಾಂಶಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಬೇಡಿಕೆಗಳ ಸಂಖ್ಯೆಯನ್ನು ಒಟ್ಟುಗೂಡಿಸಿ ತುರ್ತುಸ್ಥಿತಿಯನ್ನು ನಿರ್ಧರಿಸುತ್ತದೆ.",
    
    checkStatusTitle: "ನಿಮ್ಮ ದೂರಿನ ಸ್ಥಿತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
    enterTrackId: "ಟ್ರ್ಯಾಕಿಂಗ್ ಐಡಿ ನಮೂದಿಸಿ (VOB-XXXX)",
    trackBtn: "ಹುಡುಕು",
    recentSubmissions: "ನಿಮ್ಮ ಇತ್ತೀಚಿನ ವಿನಂತಿಗಳು",
    statusTimeline: "ಪ್ರಗತಿಯ ಸಮಯರೇಖೆ",
    noTrackerData: "ಪ್ರಗತಿಯನ್ನು ನೋಡಲು ಮಾನ್ಯವಾದ ಟ್ರ್ಯಾಕಿಂಗ್ ಐಡಿಯನ್ನು ನಮೂದಿಸಿ ಅಥವಾ ಎಡಭಾಗದ ಇತ್ತೀಚಿನ ಪಟ್ಟಿಯಿಂದ ಆರಿಸಿ.",
    mpOfficialResponse: "ಸಂಸದರ ಅಧಿಕೃತ ಪ್ರತಿಕ್ರಿಯೆ",
    noMpResponse: "ಇನ್ನೂ ಯಾವುದೇ ಅಧಿಕೃತ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಬರೆಯಲಾಗಿಲ್ಲ. ಸಂಸದರ ಕಚೇರಿಯು ಪ್ರಸ್ತಾವನೆಯನ್ನು ಪರಿಶೀಲಿಸುತ್ತಿದೆ.",
    
    status_submitted: "ಸಲ್ಲಿಸಲಾಗಿದೆ",
    status_review: "ಪರಿಶೀಲನೆಯಲ್ಲಿದೆ",
    status_sanctioned: "ಮಂಜೂರಾಗಿದೆ",
    status_wip: "ಕೆಲಸ ಪ್ರಗತಿಯಲ್ಲಿದೆ",
    status_completed: "ಪೂರ್ಣಗೊಂಡಿದೆ",
    
    cat_education: "ಶಿಕ್ಷಣ",
    cat_healthcare: "ಆರೋಗ್ಯ ರಕ್ಷಣೆ",
    cat_water: "ನೀರಾವರಿ & ಸ್ವಚ್ಛತೆ",
    cat_transport: "ಸಾರಿಗೆ",
    cat_agriculture: "ಕೃಷಿ",
    cat_employment: "ಉದ್ಯೋಗ"
  }
};

// Simulated mock transcribing voices dictionary
const MOCK_VOICES = {
  en: "We need clean drinking water supply and functional streetlights in our locality.",
  hi: "हमारे गाँव रामपुर में पानी की टंकी बनवाई जाए और सिंचाई के लिए बिजली की व्यवस्था हो।",
  ta: "எங்கள் கிராமத்தில் ஆரம்ப சுகாதார நிலையம் வேண்டும், ஏனெனில் அவசர சிகிச்சைக்கு மக்கள் 10 கிமீ செல்ல வேண்டியுள்ளது.",
  ml: "ഞങ്ങളുടെ പ്രദേശത്ത് കുട്ടികൾക്കായി ഒരു പുതിയ വൊക്കേഷണൽ സ്കിൽ ട്രെയിനിങ് സെന്റർ ആവശ്യമാണ്.",
  kn: "ನಮ್ಮ ಹಳ್ಳಿಯಲ್ಲಿ ಶಾಲೆಗೆ ಹೋಗಲು ನದಿ ದಾಟಲು ಹೊಸ ಸೇತುವೆ ಹಾಗೂ ಬಸ್ ಸೌಲಭ್ಯ ಒದಗಿಸಬೇಕಾಗಿ ವಿನಂತಿ."
};

// ==========================================
// 2. STATE MANAGER & PERSISTENCE
// ==========================================
class StateStore {
  constructor() {
    this.initDatabase();
    this.currentLanguage = localStorage.getItem('vob_lang') || 'en';
    this.currentView = 'landing';
    this.selectedLocation = null;
    this.userRecentSubmissions = JSON.parse(localStorage.getItem('vob_recent_user_subs')) || [];
    this.tempVoiceText = "";
    this.tempPhotoUrl = "";
    this.mpAuthenticated = sessionStorage.getItem('vob_mp_auth') === 'true';
    
    // Voice visualizer timer
    this.visualizerInterval = null;
  }

  initDatabase() {
    if (!localStorage.getItem('vob_submissions')) {
      localStorage.setItem('vob_submissions', JSON.stringify(window.DEFAULT_SUBMISSIONS));
    }
    if (!localStorage.getItem('vob_villages')) {
      localStorage.setItem('vob_villages', JSON.stringify(window.DEFAULT_VILLAGES));
    }
  }

  getSubmissions() {
    return JSON.parse(localStorage.getItem('vob_submissions'));
  }

  saveSubmissions(subs) {
    localStorage.setItem('vob_submissions', JSON.stringify(subs));
  }

  getVillages() {
    return JSON.parse(localStorage.getItem('vob_villages'));
  }

  addSubmission(submission) {
    const subs = this.getSubmissions();
    subs.unshift(submission);
    this.saveSubmissions(subs);
    
    // Store locally to user's recent list
    this.userRecentSubmissions.unshift({
      id: submission.id,
      category: submission.category,
      timestamp: submission.timestamp,
      location: submission.location
    });
    localStorage.setItem('vob_recent_user_subs', JSON.stringify(this.userRecentSubmissions));
  }

  updateSubmissionStatus(id, newStatus, responseNote) {
    const subs = this.getSubmissions();
    const index = subs.findIndex(s => s.id === id);
    if (index !== -1) {
      subs[index].status = newStatus;
      subs[index].mpNote = responseNote;
      this.saveSubmissions(subs);
      return true;
    }
    return false;
  }
}

const store = new StateStore();

// ==========================================
// 3. ROUTER & LOCALIZER
// ==========================================
function switchView(viewName) {
  store.currentView = viewName;
  document.querySelectorAll('.app-screen').forEach(screen => {
    screen.classList.remove('active');
  });
  
  const activeScreen = document.getElementById(`${viewName}-screen`);
  if (activeScreen) {
    activeScreen.classList.add('active');
  }

  // Scroll to top
  window.scrollTo(0, 0);

  // View specific setups
  if (viewName === 'mp') {
    const nameEl = document.getElementById('mp-nav-name');
    const constEl = document.getElementById('mp-nav-constituency');
    if (nameEl) nameEl.innerText = window.MP_PROFILE.name;
    if (constEl) constEl.innerText = `📍 ${window.MP_PROFILE.constituency}`;
    renderMPDashboard();
  } else if (viewName === 'citizen') {
    resetCitizenForm();
    updateCitizenLanguage();
    renderRecentSubmissionsList();
  }
}

function setLanguage(lang) {
  store.currentLanguage = lang;
  localStorage.setItem('vob_lang', lang);
  
  // Update UI language buttons active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  updateCitizenLanguage();
}

function updateCitizenLanguage() {
  const dictionary = TRANSLATIONS[store.currentLanguage];
  if (!dictionary) return;

  // Global elements on Citizen Page
  document.getElementById('c-nav-title').innerText = dictionary.title;
  document.getElementById('c-back-btn').innerText = dictionary.backToHome;
  
  // Tab buttons
  document.getElementById('tab-btn-submit').innerText = dictionary.submitFeedbackTab;
  document.getElementById('tab-btn-track').innerText = dictionary.trackStatusTab;

  // Submit Feedback Panel Labels
  document.getElementById('lbl-fullname').innerText = dictionary.fullName;
  document.getElementById('input-fullname').placeholder = dictionary.fullNamePlaceholder;
  document.getElementById('lbl-category').innerText = dictionary.category;
  document.getElementById('lbl-location').innerText = dictionary.location;
  document.getElementById('lbl-suggestion').innerText = dictionary.suggestionText;
  document.getElementById('input-suggestion-text').placeholder = dictionary.textPlaceholder;
  document.getElementById('btn-submit-feedback').innerText = dictionary.submitBtn;

  // Input Mode switch buttons
  document.getElementById('mode-btn-voice').innerHTML = `<span>🎙️</span> ${dictionary.modeVoice}`;
  document.getElementById('mode-btn-text').innerHTML = `<span>📝</span> ${dictionary.modeText}`;
  document.getElementById('mode-btn-photo').innerHTML = `<span>📷</span> ${dictionary.modePhoto}`;

  // Voice simulator labels
  document.getElementById('voice-record-status-label').innerText = store.voiceRecording ? dictionary.recordingState : dictionary.clickRecord;
  
  // Photo simulator labels
  document.getElementById('photo-upload-text-lbl').innerText = dictionary.dragPhoto;

  // Help box content localization
  document.getElementById('help-box-header').innerText = dictionary.helpBoxTitle;
  document.getElementById('help-box-desc').innerText = dictionary.helpBoxDesc;
  document.getElementById('help-prompt-label').innerText = dictionary.samplePromptLabel;
  document.getElementById('help-voice-prompt').innerText = dictionary.sampleVoicePrompt;
  
  document.getElementById('faq-q1').innerText = dictionary.faqTitle1;
  document.getElementById('faq-a1').innerText = dictionary.faqAns1;
  document.getElementById('faq-q2').innerText = dictionary.faqTitle2;
  document.getElementById('faq-a2').innerText = dictionary.faqAns2;

  // Category Selector items
  const catSelector = document.getElementById('select-category');
  if (catSelector) {
    catSelector.options[0].text = dictionary.cat_education;
    catSelector.options[1].text = dictionary.cat_healthcare;
    catSelector.options[2].text = dictionary.cat_water;
    catSelector.options[3].text = dictionary.cat_transport;
    catSelector.options[4].text = dictionary.cat_agriculture;
    catSelector.options[5].text = dictionary.cat_employment;
  }

  // Status track labels
  document.getElementById('lbl-track-title').innerText = dictionary.checkStatusTitle;
  document.getElementById('input-track-id').placeholder = dictionary.enterTrackId;
  document.getElementById('btn-track-submit').innerText = dictionary.trackBtn;
  document.getElementById('lbl-recent-subs').innerText = dictionary.recentSubmissions;
}

// ==========================================
// 3b. MP LOGIN
// ==========================================
function handleMPLogin() {
  const usernameInput = document.getElementById('mp-login-username');
  const passwordInput = document.getElementById('mp-login-password');
  const errorBox = document.getElementById('mp-login-error');

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const profile = window.MP_PROFILE;

  const validUser = username.length > 0 && username.toLowerCase() === profile.name.toLowerCase();
  const validPass = password.length > 0 && password.toLowerCase() === profile.constituency.toLowerCase();

  if (validUser && validPass) {
    store.mpAuthenticated = true;
    sessionStorage.setItem('vob_mp_auth', 'true');
    errorBox.style.display = 'none';
    usernameInput.value = "";
    passwordInput.value = "";
    switchView('mp');
  } else {
    errorBox.style.display = 'block';
  }
}

function handleMPLogout() {
  store.mpAuthenticated = false;
  sessionStorage.removeItem('vob_mp_auth');
  switchView('landing');
}

// ==========================================
// 4. CITIZEN FORM HANDLING & SIMULATIONS
// ==========================================
function switchCitizenTab(tabName) {
  document.querySelectorAll('.citizen-tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelectorAll('.citizen-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  document.getElementById(`tab-btn-${tabName}`).classList.add('active');
  document.getElementById(`citizen-${tabName}-panel`).classList.add('active');
}

function switchInputMode(modeName) {
  document.querySelectorAll('.mode-tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelectorAll('.mode-container').forEach(container => {
    container.classList.remove('active');
  });

  document.getElementById(`mode-btn-${modeName}`).classList.add('active');
  document.getElementById(`mode-container-${modeName}`).classList.add('active');

  // If text mode, show category/textarea, else hide or style accordingly
  const textGroup = document.getElementById('suggestion-text-group');
  if (modeName === 'voice') {
    textGroup.style.display = 'none';
  } else {
    textGroup.style.display = 'block';
  }
}

// Map app language to a speech-recognition locale
function getSpeechLangCode(lang) {
  const map = { en: 'en-IN', hi: 'hi-IN', ta: 'ta-IN', ml: 'ml-IN', kn: 'kn-IN' };
  return map[lang] || 'en-IN';
}

// Turn a raw spoken transcript into a clean statement (capitalized, punctuated)
function formatAsStatement(rawText) {
  let t = (rawText || "").trim().replace(/\s+/g, ' ');
  if (!t) return "";
  t = t.charAt(0).toUpperCase() + t.slice(1);
  if (!/[.?!]$/.test(t)) t += '.';
  return t;
}

let activeSpeechRecognition = null;

// Live microphone recording + real speech-to-text transcription
function toggleVoiceRecording() {
  const dictionary = TRANSLATIONS[store.currentLanguage];
  const recordBtn = document.getElementById('btn-voice-record');
  const label = document.getElementById('voice-record-status-label');
  const canvas = document.getElementById('audio-visualizer');
  const ctx = canvas.getContext('2d');

  const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!store.voiceRecording) {
    if (!SpeechRecognitionAPI) {
      alert("Voice recording needs microphone + speech recognition support (works best in Chrome). Please use Text mode instead.");
      return;
    }

    // Start real recording
    store.voiceRecording = true;
    recordBtn.classList.add('recording');
    label.innerText = dictionary.recordingState;
    store.tempVoiceText = "";
    document.getElementById('voice-transcription-preview').style.display = 'none';

    // Ambient waveform animation while mic is live
    let step = 0;
    store.visualizerInterval = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let i = 0; i < canvas.width; i++) {
        const amplitude = 15 * Math.sin(i * 0.05 + step) * Math.random();
        const y = canvas.height / 2 + amplitude;
        if (i === 0) ctx.moveTo(i, y);
        else ctx.lineTo(i, y);
      }
      ctx.stroke();
      step += 0.2;
    }, 50);

    let liveTranscript = "";
    activeSpeechRecognition = new SpeechRecognitionAPI();
    activeSpeechRecognition.lang = getSpeechLangCode(store.currentLanguage);
    activeSpeechRecognition.interimResults = true;
    activeSpeechRecognition.continuous = true;

    activeSpeechRecognition.onresult = (event) => {
      let finalChunk = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalChunk += event.results[i][0].transcript;
        }
      }
      if (finalChunk) {
        liveTranscript += (liveTranscript ? " " : "") + finalChunk.trim();
        store.tempVoiceText = liveTranscript;
      }
    };

    activeSpeechRecognition.onerror = (event) => {
      if (event.error === 'not-allowed' || event.error === 'permission-denied') {
        alert("Microphone access was blocked. Please allow microphone permission to record your voice.");
      }
    };

    try {
      activeSpeechRecognition.start();
    } catch (err) {
      console.warn('Speech recognition failed to start:', err);
    }

  } else {
    // Stop recording
    store.voiceRecording = false;
    recordBtn.classList.remove('recording');
    clearInterval(store.visualizerInterval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (activeSpeechRecognition) {
      try { activeSpeechRecognition.stop(); } catch (err) {}
    }

    label.innerText = dictionary.recordingFinished;

    // Give the recognizer a brief moment to flush the final result
    setTimeout(() => {
      const spokenStatement = formatAsStatement(store.tempVoiceText);
      store.tempVoiceText = spokenStatement;

      const preview = document.getElementById('voice-transcription-preview');
      preview.style.display = 'block';
      if (spokenStatement) {
        preview.innerHTML = `<strong>${dictionary.voiceSample}</strong> <br/> "${spokenStatement}"`;
      } else {
        preview.innerHTML = `<em>No speech was captured. Please try again, speak clearly, or switch to Text mode.</em>`;
      }
      label.innerText = dictionary.clickRecord;
    }, 600);
  }
}

// Real device photo upload
function triggerPhotoUpload() {
  const fileInput = document.getElementById('citizen-photo-file-input');
  if (fileInput) fileInput.click();
}

function handlePhotoFileSelected(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    alert('Please choose an image file (jpg, png, etc.).');
    event.target.value = '';
    return;
  }

  const widget = document.getElementById('photo-upload-container');
  const imgElement = document.getElementById('photo-preview');
  const label = document.getElementById('photo-upload-text-lbl');

  const reader = new FileReader();
  reader.onload = function (e) {
    store.tempPhotoUrl = e.target.result; // actual uploaded photo as a data URL
    imgElement.src = store.tempPhotoUrl;
    widget.classList.add('has-file');
    if (label) label.innerText = file.name;
  };
  reader.onerror = function () {
    alert('Could not read that photo. Please try another file.');
  };
  reader.readAsDataURL(file);
}

// Allow dragging a photo file directly onto the upload widget
document.addEventListener('DOMContentLoaded', () => {
  const widget = document.getElementById('photo-upload-container');
  if (!widget) return;
  ['dragover', 'dragenter'].forEach(evt => {
    widget.addEventListener(evt, (e) => { e.preventDefault(); widget.classList.add('has-file'); });
  });
  widget.addEventListener('drop', (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) {
      const fileInput = document.getElementById('citizen-photo-file-input');
      const dt = new DataTransfer();
      dt.items.add(file);
      fileInput.files = dt.files;
      handlePhotoFileSelected({ target: fileInput });
    }
  });
});

// Pinning citizen location on simple grid map
function setupCitizenLocationPicker() {
  const mapElement = document.getElementById('citizen-mock-map');
  const selectBox = document.getElementById('select-village');
  
  mapElement.addEventListener('click', (e) => {
    const rect = mapElement.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    
    // Find closest village coordinate
    const villages = store.getVillages();
    let closestVillage = null;
    let minDistance = Infinity;
    
    villages.forEach(v => {
      // Map coords to element dimensions (rect is roughly scale relative to mock coords 800x600)
      const scaleX = rect.width / 800;
      const scaleY = rect.height / 600;
      
      const vX = v.coords.x * scaleX;
      const vY = v.coords.y * scaleY;
      
      const dist = Math.sqrt(Math.pow(clickX - vX, 2) + Math.pow(clickY - vY, 2));
      if (dist < minDistance) {
        minDistance = dist;
        closestVillage = v;
      }
    });

    if (closestVillage) {
      store.selectedLocation = {
        name: closestVillage.name,
        x: closestVillage.coords.x,
        y: closestVillage.coords.y
      };
      
      // Update Select dropdown
      selectBox.value = closestVillage.name;
      
      // Draw pin
      drawCitizenMapPin(closestVillage.coords.x, closestVillage.coords.y);
    }
  });

  selectBox.addEventListener('change', (e) => {
    const val = e.target.value;
    const villages = store.getVillages();
    const match = villages.find(v => v.name === val);
    if (match) {
      store.selectedLocation = {
        name: match.name,
        x: match.coords.x,
        y: match.coords.y
      };
      drawCitizenMapPin(match.coords.x, match.coords.y);
    }
  });
}

function drawCitizenMapPin(x, y) {
  // Remove existing pins
  const pinsContainer = document.getElementById('citizen-map-pins');
  pinsContainer.innerHTML = "";
  
  // Set percentage coordinates to support responsiveness
  const pctX = (x / 800) * 100;
  const pctY = (y / 600) * 100;
  
  const pin = document.createElement('div');
  pin.className = "map-pin";
  pin.style.left = `calc(${pctX}% - 12px)`;
  pin.style.top = `calc(${pctY}% - 24px)`;
  
  const pulse = document.createElement('div');
  pulse.className = "map-pin-pulse";
  pulse.style.left = `calc(${pctX}% - 10px)`;
  pulse.style.top = `calc(${pctY}% - 5px)`;
  
  pinsContainer.appendChild(pulse);
  pinsContainer.appendChild(pin);
}

function resetCitizenForm() {
  document.getElementById('input-fullname').value = "";
  document.getElementById('input-suggestion-text').value = "";
  document.getElementById('select-category').selectedIndex = 0;
  document.getElementById('select-village').selectedIndex = 0;
  store.selectedLocation = null;
  store.tempVoiceText = "";
  store.tempPhotoUrl = "";
  store.voiceRecording = false;
  
  // Reset tabs
  switchInputMode('voice');
  
  // Reset visual widget states
  document.getElementById('voice-transcription-preview').style.display = 'none';
  document.getElementById('photo-upload-container').classList.remove('has-file');
  document.getElementById('photo-preview').src = "";
  document.getElementById('citizen-map-pins').innerHTML = "";
  const photoFileInput = document.getElementById('citizen-photo-file-input');
  if (photoFileInput) photoFileInput.value = "";
}

// Processing citizens suggestion submission
function handleFeedbackSubmit() {
  const dictionary = TRANSLATIONS[store.currentLanguage];
  const name = document.getElementById('input-fullname').value.trim() || "Anonymous Citizen";
  const category = document.getElementById('select-category').value;
  const villageSelect = document.getElementById('select-village').value;
  
  let textContent = "";
  let submissionType = "text";
  
  // Determine text based on active tab
  const activeMode = document.querySelector('.mode-tab-btn.active').id.replace('mode-btn-', '');
  
  if (activeMode === 'voice') {
    textContent = store.tempVoiceText || "";
    submissionType = "voice";
  } else if (activeMode === 'photo') {
    textContent = document.getElementById('input-suggestion-text').value.trim() || `Submitted photo grievance showing infrastructural gaps.`;
    submissionType = "photo";
  } else {
    textContent = document.getElementById('input-suggestion-text').value.trim();
    submissionType = "text";
  }
  
  if (!textContent) {
    alert("Please provide details/suggestions before submitting.");
    return;
  }
  
  const villageName = store.selectedLocation ? store.selectedLocation.name : villageSelect;
  if (!villageName) {
    alert("Please select a location or village pin.");
    return;
  }
  
  // Generate random VOB ID
  const trackingId = `VOB-${Math.floor(1000 + Math.random() * 9000)}`;
  
  // Simulate simple translation mapping to English for the MP Workspace
  let translationText = textContent;
  if (store.currentLanguage !== 'en') {
    translationText = `[AI Translation from ${store.currentLanguage.toUpperCase()}]: ${textContent} (Concerned location: ${villageName})`;
  }
  
  // Create object
  const newGrievance = {
    id: trackingId,
    name: name,
    language: store.currentLanguage,
    category: category,
    text: textContent,
    translation: translationText,
    type: submissionType,
    imageUrl: store.tempPhotoUrl || null,
    timestamp: new Date().toISOString(),
    location: villageName,
    status: "Submitted",
    mpNote: "",
    urgency: Math.floor(65 + Math.random() * 30), // auto sentiment calculated
    audioDuration: submissionType === 'voice' ? "0:15" : null
  };
  
  store.addSubmission(newGrievance);
  
  // Show Receipt/Success Screen overlay
  document.getElementById('form-card-container').innerHTML = `
    <div class="success-card">
      <div class="success-icon">✓</div>
      <h3>Grievance Submitted!</h3>
      <p>Thank you. Your suggestion has been logged with AI Priority Urgency analysis and routed to the MP. You can track this request at any time using your tracking ID below.</p>
      <div class="tracking-id-box">${trackingId}</div>
      <div class="success-actions">
        <button class="btn-submit" style="width: auto; padding: 0.75rem 2rem;" onclick="reloadCitizenFormPanel()">Submit Another</button>
        <button class="btn-secondary" onclick="viewSubmissionStatus('${trackingId}')">Track Progress</button>
      </div>
    </div>
  `;

  // Render submissions list in Tracker
  renderRecentSubmissionsList();
}

function reloadCitizenFormPanel() {
  document.getElementById('form-card-container').innerHTML = `
    <div class="glass-card">
      <h2 style="display: flex; justify-content: space-between; align-items: center;">
        <span>🗳️ Submit Grievance / Suggestion</span>
      </h2>
      
      <div class="input-mode-tabs">
        <button class="mode-tab-btn active" id="mode-btn-voice" onclick="switchInputMode('voice')">🎙️ Voice</button>
        <button class="mode-tab-btn" id="mode-btn-text" onclick="switchInputMode('text')">📝 Text</button>
        <button class="mode-tab-btn" id="mode-btn-photo" onclick="switchInputMode('photo')">📷 Photo</button>
      </div>

      <!-- Voice container -->
      <div class="mode-container active" id="mode-container-voice">
        <div class="voice-recorder-widget">
          <div class="record-btn-container">
            <button class="record-btn" id="btn-voice-record" onclick="toggleVoiceRecording()">🎙️</button>
            <div class="audio-pulse-ring"></div>
          </div>
          <p id="voice-record-status-label" style="font-size: 0.85rem; color: var(--text-secondary); text-align: center;"></p>
          <canvas id="audio-visualizer" class="audio-visualizer-canvas" width="300" height="60"></canvas>
          <div id="voice-transcription-preview" class="transcription-preview" style="display: none;"></div>
        </div>
      </div>

      <!-- Text Container (is toggle display) -->
      <div class="mode-container" id="mode-container-text">
        <p style="font-size: 0.85rem; color: var(--text-secondary); text-align: center;">Use text box below to write your proposal directly.</p>
      </div>

      <!-- Photo Container -->
      <div class="mode-container" id="mode-container-photo">
        <div class="photo-upload-widget" id="photo-upload-container" onclick="triggerPhotoUpload()">
          <span class="photo-upload-icon">📤</span>
          <span class="photo-upload-text" id="photo-upload-text-lbl">Drag & drop / click to attach photo</span>
          <img id="photo-preview" class="photo-preview-img" src="" alt="preview"/>
        </div>
        <input type="file" id="citizen-photo-file-input" accept="image/*" style="display:none" onchange="handlePhotoFileSelected(event)">
      </div>

      <!-- Shared fields -->
      <div class="form-group" style="margin-top: 1.5rem;">
        <label id="lbl-fullname" for="input-fullname">Full Name (Optional)</label>
        <input type="text" class="form-control" id="input-fullname" placeholder="Enter name">
      </div>

      <div class="form-group">
        <label id="lbl-category" for="select-category">Category</label>
        <select class="form-control" id="select-category">
          <option value="Education">Education</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Water & Sanitation">Water & Sanitation</option>
          <option value="Transport">Transport</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Employment">Employment</option>
        </select>
      </div>

      <div class="form-group" id="suggestion-text-group" style="display: none;">
        <label id="lbl-suggestion" for="input-suggestion-text">Grievance Text</label>
        <textarea class="form-control" id="input-suggestion-text" placeholder="Explain details..."></textarea>
      </div>
      
      <button class="btn-submit" id="btn-submit-feedback" onclick="handleFeedbackSubmit()">Submit Suggestion</button>
    </div>
  `;
  
  resetCitizenForm();
  updateCitizenLanguage();
  setupCitizenLocationPicker();
}

// ==========================================
// 5. CITIZEN STATUS TRACKER
// ==========================================
function renderRecentSubmissionsList() {
  const container = document.getElementById('recent-list-container');
  container.innerHTML = "";
  
  const recents = store.userRecentSubmissions;
  if (recents.length === 0) {
    container.innerHTML = `<p style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; text-align: center; padding: 1rem;">No recent submissions in this session.</p>`;
    return;
  }

  recents.forEach(item => {
    const el = document.createElement('div');
    el.className = "recent-item";
    el.onclick = () => viewSubmissionStatus(item.id);
    
    const formattedDate = new Date(item.timestamp).toLocaleDateString(undefined, {month: 'short', day: 'numeric'});
    el.innerHTML = `
      <div class="recent-item-meta">
        <h4>${item.id}</h4>
        <p>${item.category} • ${item.location}</p>
      </div>
      <span style="font-size: 0.75rem; color: var(--text-muted);">${formattedDate}</span>
    `;
    container.appendChild(el);
  });
}

function searchComplaintStatus() {
  const searchInput = document.getElementById('input-track-id');
  const trackId = searchInput.value.trim().toUpperCase();
  if (!trackId) return;

  viewSubmissionStatus(trackId);
}

function viewSubmissionStatus(trackId) {
  const subs = store.getSubmissions();
  const grievance = subs.find(s => s.id === trackId);
  const detailBox = document.getElementById('tracker-status-details');
  const dictionary = TRANSLATIONS[store.currentLanguage];
  
  if (!grievance) {
    detailBox.className = "glass-card status-card-details";
    detailBox.innerHTML = `
      <span style="font-size: 3rem; margin-bottom: 1rem;">🔍</span>
      <p style="color: #ef4444; font-weight: bold;">Tracking ID not found.</p>
      <p style="font-size: 0.85rem; max-width: 300px; margin-top: 0.5rem;">Please check the spelling (e.g., VOB-4215) or submit a new grievance first.</p>
    `;
    return;
  }

  detailBox.className = "glass-card status-card-details has-data";
  
  // Determine localized category name
  let localCat = grievance.category;
  if (grievance.category === "Education") localCat = dictionary.cat_education;
  else if (grievance.category === "Healthcare") localCat = dictionary.cat_healthcare;
  else if (grievance.category === "Water & Sanitation") localCat = dictionary.cat_water;
  else if (grievance.category === "Transport") localCat = dictionary.cat_transport;
  else if (grievance.category === "Agriculture") localCat = dictionary.cat_agriculture;
  else if (grievance.category === "Employment") localCat = dictionary.cat_employment;

  // Determine active step index
  const statusHierarchy = ["Submitted", "Under Review", "Sanctioned", "Work in Progress", "Completed"];
  const currentIndex = statusHierarchy.indexOf(grievance.status);
  const progressPercent = (currentIndex / (statusHierarchy.length - 1)) * 100;
  
  // Construct Timeline HTML
  let stepsHtml = "";
  statusHierarchy.forEach((step, i) => {
    let stateClass = "";
    if (i < currentIndex) stateClass = "completed";
    else if (i === currentIndex) stateClass = "active";
    
    // Localize step name
    let stepNameKey = "status_" + step.toLowerCase().replace(/ /g, '');
    if (step === "Work in Progress") stepNameKey = "status_wip";
    
    const localizedStepName = dictionary[stepNameKey] || step;

    stepsHtml += `
      <div class="step-node ${stateClass}">
        <div class="step-circle">${i + 1}</div>
        <div class="step-label">${localizedStepName}</div>
      </div>
    `;
  });

  const formattedDate = new Date(grievance.timestamp).toLocaleString();
  const localizedStatusBadge = grievance.status.toLowerCase().replace(/ /g, '');
  const badgeClass = grievance.status === "Work in Progress" ? "wip" : localizedStatusBadge;
  
  let mediaHtml = "";
  if (grievance.imageUrl) {
    mediaHtml = `
      <div class="status-info-row">
        <div class="status-info-label">Photo Attachment</div>
        <div class="status-info-val">
          <img src="${grievance.imageUrl}" style="max-height: 120px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);" alt="attached file"/>
        </div>
      </div>
    `;
  }

  detailBox.innerHTML = `
    <div class="status-header-row">
      <div>
        <h3 style="font-size: 1.35rem; color: white;">ID: ${grievance.id}</h3>
        <p style="font-size: 0.8rem; color: var(--text-muted);">${formattedDate}</p>
      </div>
      <span class="status-badge ${badgeClass}">${dictionary["status_" + badgeClass] || grievance.status}</span>
    </div>

    <!-- Progress Timeline Tracker -->
    <div style="position: relative; margin-bottom: 2rem;">
      <div class="timeline-stepper">
        <div class="timeline-progress-bar" style="width: ${progressPercent}%;"></div>
        ${stepsHtml}
      </div>
    </div>

    <!-- General Details Grid -->
    <div class="status-info-block">
      <div class="status-info-row">
        <div class="status-info-label">Citizen Name</div>
        <div class="status-info-val">${grievance.name}</div>
      </div>
      <div class="status-info-row">
        <div class="status-info-label">Category</div>
        <div class="status-info-val">${localCat}</div>
      </div>
      <div class="status-info-row">
        <div class="status-info-label">Location / Village</div>
        <div class="status-info-val">${grievance.location}</div>
      </div>
      <div class="status-info-row">
        <div class="status-info-label">Grievance Text</div>
        <div class="status-info-val">${grievance.text}</div>
      </div>
      ${mediaHtml}
    </div>

    <!-- Official MP actions reply -->
    <div class="status-mp-response">
      <h4>🛡️ ${dictionary.mpOfficialResponse}</h4>
      <p>${grievance.mpNote ? grievance.mpNote : dictionary.noMpResponse}</p>
    </div>
  `;
  
  // Highlight active item in recent list
  document.querySelectorAll('.recent-item').forEach(el => {
    if (el.querySelector('h4').innerText === trackId) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  // Automatically switch tab view if triggered from receipt
  switchCitizenTab('track');
}

// ==========================================
// 6. MP WORKSPACE & AI RANKING ENGINE
// ==========================================
let currentMapLayer = "hotspots"; // hotspots, schoolGaps, healthGaps, waterIndex

function selectMapLayer(layerName) {
  currentMapLayer = layerName;
  document.querySelectorAll('.map-layer-btn').forEach(btn => {
    if (btn.getAttribute('data-layer') === layerName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  renderDistrictMap();
}

function renderMPDashboard() {
  const subs = store.getSubmissions();
  
  // Calculate metrics
  const total = subs.length;
  const pending = subs.filter(s => s.status === 'Submitted' || s.status === 'Under Review').length;
  const sanctioned = subs.filter(s => s.status === 'Sanctioned' || s.status === 'Work in Progress').length;
  const completed = subs.filter(s => s.status === 'Completed').length;
  
  document.getElementById('mp-metric-total').innerText = total;
  document.getElementById('mp-metric-pending').innerText = pending;
  document.getElementById('mp-metric-sanctioned').innerText = sanctioned;
  document.getElementById('mp-metric-completed').innerText = completed;

  // Run AI Urgency Ranking and populate AI Recommendations table
  calculateAIRecommendations();

  // Draw Heatmap / Gap analysis map
  renderDistrictMap();

  // Populate raw database feed list
  renderMPFeedList();
}

function calculateAIRecommendations() {
  const subs = store.getSubmissions();
  const villages = store.getVillages();
  
  // Aggregate complaints by village & category
  const aggregation = {};
  subs.forEach(s => {
    const key = `${s.location}__${s.category}`;
    if (!aggregation[key]) {
      aggregation[key] = {
        villageName: s.location,
        category: s.category,
        count: 0,
        avgUrgency: 0
      };
    }
    aggregation[key].count += 1;
    aggregation[key].avgUrgency += s.urgency;
  });

  // Build recommendation projects list
  const proposals = [];
  
  for (let key in aggregation) {
    const agg = aggregation[key];
    agg.avgUrgency = Math.round(agg.avgUrgency / agg.count);
    
    // Cross-reference infrastructure gap from village info
    const villageData = villages.find(v => v.name === agg.villageName);
    if (!villageData) continue;
    
    let gapMetric = 0; // scale 0-100
    let proposalTitle = "";
    let proposalDesc = "";
    
    if (agg.category === "Education") {
      gapMetric = (villageData.nearestSchoolKm / 15) * 100; // max distance base is 15km
      proposalTitle = `Establish Secondary School Facility at ${agg.villageName}`;
      proposalDesc = `Nearest school is currently ${villageData.nearestSchoolKm} km away. Resolves daily commute for youth.`;
    } else if (agg.category === "Healthcare") {
      gapMetric = (villageData.nearestClinicKm / 15) * 100;
      proposalTitle = `Construct Primary Health Sub-center in ${agg.villageName}`;
      proposalDesc = `Reduces critical health travel overhead (currently ${villageData.nearestClinicKm} km distance).`;
    } else if (agg.category === "Water & Sanitation") {
      gapMetric = (villageData.waterScarcityIndex / 10) * 100;
      proposalTitle = `Piped Water Grid & Storage System for ${agg.villageName}`;
      proposalDesc = `Tackles severe seasonal water levels (Water Scarcity Index: ${villageData.waterScarcityIndex}/10).`;
    } else if (agg.category === "Transport") {
      gapMetric = 40 + (agg.count * 10);
      proposalTitle = `Constituency Road Connectivity & Bus Upgrades (Route: ${agg.villageName})`;
      proposalDesc = `Public bus schedule adjustment during morning schools rush.`;
    } else if (agg.category === "Employment") {
      gapMetric = (villageData.youthUnemploymentRate / 40) * 100;
      proposalTitle = `Vocational Skills Training Center at ${agg.villageName}`;
      proposalDesc = `Youth unemployment is at ${villageData.youthUnemploymentRate}%. Focuses on agricultural techniques and typing courses.`;
    } else {
      gapMetric = 50;
      proposalTitle = `Agricultural Substation / Mandi Setup in ${agg.villageName}`;
      proposalDesc = `Supports crop logistics and seed subsidy distribution.`;
    }

    // AI priority Urgency formula: (Count factor * 35%) + (Gaps factor * 45%) + (Category average urgency * 20%)
    const countWeight = Math.min((agg.count / 8) * 100, 100); // capped at 8 complaints
    const calculatedAIUrgency = Math.round(
      (countWeight * 0.35) + (gapMetric * 0.45) + (agg.avgUrgency * 0.20)
    );

    proposals.push({
      title: proposalTitle,
      description: proposalDesc,
      village: agg.villageName,
      category: agg.category,
      complaintsCount: agg.count,
      urgency: Math.min(calculatedAIUrgency, 98) // max ceiling
    });
  }

  // Sort proposals by AI urgency descending
  proposals.sort((a, b) => b.urgency - a.urgency);

  // Render to Table
  const tbody = document.getElementById('ai-recom-table-body');
  tbody.innerHTML = "";
  
  if (proposals.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted);">No suggestions logged yet to run AI models.</td></tr>`;
    return;
  }

  proposals.forEach(prop => {
    const tr = document.createElement('tr');
    tr.className = "recom-tr";
    tr.onclick = () => openProjectDraftModal(prop);
    
    const badgeColor = prop.urgency >= 80 ? 'high' : 'medium';
    
    tr.innerHTML = `
      <td>
        <div class="recom-score-badge ${badgeColor}">${prop.urgency}</div>
      </td>
      <td>
        <div class="recom-title-bold">${prop.title}</div>
        <div class="recom-subtitle-dim">${prop.description}</div>
      </td>
      <td style="font-family: var(--font-display); font-weight: 600;">${prop.village}</td>
      <td style="text-align: center; font-weight: bold; color: var(--accent-blue);">${prop.complaintsCount}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Draw constituency interactive vector map (SVG based)
function renderDistrictMap() {
  const container = document.getElementById('mp-district-map-container');
  container.innerHTML = ""; // clear
  
  const villages = store.getVillages();
  const subs = store.getSubmissions();
  
  // Calculate map boundary paths - styling relative to 800x600 size
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 800 600");
  svg.setAttribute("class", "map-svg-element");
  
  // Draw constituency overall outline
  const districtOutline = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  districtOutline.setAttribute("points", "50,100 450,50 780,100 720,550 400,580 80,480");
  districtOutline.setAttribute("class", "svg-district-outline");
  svg.appendChild(districtOutline);
  
  // Overlay data layer indicators
  villages.forEach(v => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "svg-village-node");
    
    // Hover details
    g.addEventListener('mouseenter', (e) => showMapTooltip(e, v));
    g.addEventListener('mouseleave', hideMapTooltip);
    g.addEventListener('click', () => filterFeedByVillage(v.name));

    // Dynamic color matching active layer
    let valStr = "";
    let dataCircleSize = 6;
    let circleColor = "var(--accent-blue)";
    
    if (currentMapLayer === "hotspots") {
      const complaintsCount = subs.filter(s => s.location === v.name).length;
      valStr = `Complaints: ${complaintsCount}`;
      
      // Draw pulsating heat circle if suggestions count > 0
      if (complaintsCount > 0) {
        dataCircleSize = 6 + (complaintsCount * 2);
        circleColor = "var(--accent-saffron)";
        
        const heatRing = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        heatRing.setAttribute("cx", v.coords.x);
        heatRing.setAttribute("cy", v.coords.y);
        heatRing.setAttribute("class", "svg-heat-ring");
        // adjust scale based on count
        heatRing.style.animationDuration = `${3 - Math.min(complaintsCount * 0.3, 2)}s`;
        g.appendChild(heatRing);
      }
    } else if (currentMapLayer === "schoolGaps") {
      valStr = `School Dist: ${v.nearestSchoolKm} km`;
      dataCircleSize = 4 + (v.nearestSchoolKm * 1.5);
      circleColor = v.nearestSchoolKm > 8 ? "var(--accent-saffron)" : "var(--accent-green)";
    } else if (currentMapLayer === "healthGaps") {
      valStr = `Clinic Dist: ${v.nearestClinicKm} km`;
      dataCircleSize = 4 + (v.nearestClinicKm * 1.5);
      circleColor = v.nearestClinicKm > 8 ? "var(--accent-saffron)" : "var(--accent-green)";
    } else if (currentMapLayer === "waterIndex") {
      valStr = `Water Stress: ${v.waterScarcityIndex}/10`;
      dataCircleSize = 4 + (v.waterScarcityIndex * 2);
      circleColor = v.waterScarcityIndex > 7 ? "var(--accent-saffron)" : "var(--accent-green)";
    }

    const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", v.coords.x);
    c.setAttribute("cy", v.coords.y);
    c.setAttribute("r", dataCircleSize);
    c.setAttribute("class", "svg-node-circle");
    c.style.fill = circleColor;
    
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", v.coords.x);
    label.setAttribute("y", v.coords.y - dataCircleSize - 5);
    label.setAttribute("class", "svg-node-label");
    label.textContent = v.name;
    
    g.appendChild(c);
    g.appendChild(label);
    svg.appendChild(g);
  });
  
  container.appendChild(svg);
}

function showMapTooltip(event, village) {
  const tooltip = document.getElementById('map-tooltip');
  const subs = store.getSubmissions();
  const count = subs.filter(s => s.location === village.name).length;
  
  tooltip.innerHTML = `
    <div class="tooltip-header">${village.name}</div>
    <div style="margin-bottom: 2px;">Pop: <strong>${village.population.toLocaleString()}</strong></div>
    <div style="margin-bottom: 2px;">Grievances logged: <strong>${count}</strong></div>
    <div style="margin-bottom: 2px;">Nearest School: <strong>${village.nearestSchoolKm} km</strong></div>
    <div style="margin-bottom: 2px;">Nearest Clinic: <strong>${village.nearestClinicKm} km</strong></div>
    <div style="margin-bottom: 2px;">Water Scarcity Index: <strong>${village.waterScarcityIndex}/10</strong></div>
    <div>Youth Unemployment: <strong>${village.youthUnemploymentRate}%</strong></div>
  `;
  
  tooltip.style.display = "block";
  
  // Position tooltip relative to container bounding client rect
  const mapContainer = document.getElementById('mp-district-map-container');
  const mRect = mapContainer.getBoundingClientRect();
  const toolX = event.clientX - mRect.left + 15;
  const toolY = event.clientY - mRect.top + 15;
  
  tooltip.style.left = `${toolX}px`;
  tooltip.style.top = `${toolY}px`;
}

function hideMapTooltip() {
  document.getElementById('map-tooltip').style.display = "none";
}

function filterFeedByVillage(villageName) {
  document.getElementById('feed-filter-village').value = villageName;
  renderMPFeedList();
  
  // Scroll down to Feed section smoothly
  document.getElementById('mp-feed-section').scrollIntoView({ behavior: 'smooth' });
}

// Raw submissions list render on MP page
function renderMPFeedList() {
  const container = document.getElementById('mp-feed-grid-list');
  container.innerHTML = "";

  const subs = store.getSubmissions();
  
  // Filter variables
  const categoryFilter = document.getElementById('feed-filter-category').value;
  const villageFilter = document.getElementById('feed-filter-village').value;
  const statusFilter = document.getElementById('feed-filter-status').value;
  const searchVal = document.getElementById('feed-search-bar').value.trim().toLowerCase();

  const filtered = subs.filter(item => {
    if (categoryFilter !== 'all' && item.category !== categoryFilter) return false;
    if (villageFilter !== 'all' && item.location !== villageFilter) return false;
    if (statusFilter !== 'all' && item.status !== statusFilter) return false;
    
    if (searchVal) {
      const matchText = (item.text + " " + item.translation + " " + item.id + " " + item.name).toLowerCase();
      if (!matchText.includes(searchVal)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted); font-style: italic;">No citizen submissions match the selected filters.</div>`;
    return;
  }

  filtered.forEach(grievance => {
    const el = document.createElement('div');
    el.className = "feed-item-card";
    el.onclick = () => openGrievanceDetailModal(grievance);

    const localizedStatusBadge = grievance.status.toLowerCase().replace(/ /g, '');
    const badgeClass = grievance.status === "Work in Progress" ? "wip" : localizedStatusBadge;
    const formattedDate = new Date(grievance.timestamp).toLocaleDateString(undefined, {month: 'short', day: 'numeric', year: 'numeric'});
    
    // Tag voice/photo badge
    let mediaBadge = "";
    if (grievance.type === 'voice') mediaBadge = `<span style="font-size:0.75rem; margin-right:5px;">🎙️ Voice</span>`;
    else if (grievance.type === 'photo') mediaBadge = `<span style="font-size:0.75rem; margin-right:5px;">📷 Photo</span>`;
    
    el.innerHTML = `
      <div>
        <div class="feed-item-top">
          <span class="feed-item-id">${grievance.id}</span>
          <span class="feed-item-category">${grievance.category}</span>
        </div>
        <div class="feed-item-text">
          ${grievance.language !== 'en' ? `<strong>(Translated)</strong> ` : ""}${grievance.translation}
        </div>
      </div>
      
      <div class="feed-item-bottom">
        <div class="feed-item-meta">
          <div>By: ${grievance.name}</div>
          <div>${grievance.location} • ${formattedDate}</div>
        </div>
        <div style="display:flex; flex-direction:column; align-items:flex-end; gap:4px;">
          ${mediaBadge}
          <span class="status-badge ${badgeClass}" style="padding: 0.15rem 0.4rem; font-size: 0.65rem;">${grievance.status}</span>
        </div>
      </div>
    `;
    container.appendChild(el);
  });
}

// MP Detail Modal logic
let selectedGrievanceIdForModal = null;

function openGrievanceDetailModal(grievance) {
  selectedGrievanceIdForModal = grievance.id;
  const modal = document.getElementById('mp-detail-modal');
  
  document.getElementById('modal-field-id').innerText = grievance.id;
  document.getElementById('modal-field-name').innerText = grievance.name;
  document.getElementById('modal-field-date').innerText = new Date(grievance.timestamp).toLocaleString();
  document.getElementById('modal-field-location').innerText = grievance.location;
  document.getElementById('modal-field-category').innerText = grievance.category;
  
  // Raw content & translation
  document.getElementById('modal-field-original-lang').innerText = grievance.language.toUpperCase();
  document.getElementById('modal-field-original-text').innerText = grievance.text;
  document.getElementById('modal-field-translation-text').innerText = grievance.translation;
  
  // Audio attachments
  const audioBlock = document.getElementById('modal-audio-block');
  if (grievance.type === 'voice') {
    audioBlock.style.display = 'block';
  } else {
    audioBlock.style.display = 'none';
  }

  // Photo preview
  const photoBlock = document.getElementById('modal-photo-block');
  const imgElement = document.getElementById('modal-photo-preview');
  if (grievance.imageUrl) {
    photoBlock.style.display = 'block';
    imgElement.src = grievance.imageUrl;
  } else {
    photoBlock.style.display = 'none';
  }

  // Set action dropdown inputs
  document.getElementById('modal-action-status').value = grievance.status;
  document.getElementById('modal-action-note').value = grievance.mpNote;
  
  modal.classList.add('active');
}

function closeGrievanceDetailModal() {
  document.getElementById('mp-detail-modal').classList.remove('active');
  selectedGrievanceIdForModal = null;
}

// Save MP modifications back to Database
function submitMPResponse() {
  if (!selectedGrievanceIdForModal) return;
  
  const status = document.getElementById('modal-action-status').value;
  const note = document.getElementById('modal-action-note').value.trim();
  
  store.updateSubmissionStatus(selectedGrievanceIdForModal, status, note);
  
  // Reload details & lists
  renderMPDashboard();
  closeGrievanceDetailModal();
}

// AI Proposal Modal Logic
function openProjectDraftModal(prop) {
  const modal = document.getElementById('mp-detail-modal');
  selectedGrievanceIdForModal = null; // not a raw grievance
  
  document.getElementById('modal-field-id').innerText = "AI PROPOSAL DRAFT";
  document.getElementById('modal-field-name').innerText = "Voice of Bharat AI Engine";
  document.getElementById('modal-field-date').innerText = new Date().toLocaleString();
  document.getElementById('modal-field-location').innerText = prop.village;
  document.getElementById('modal-field-category').innerText = prop.category;
  
  document.getElementById('modal-field-original-lang').innerText = "AI GENERATED";
  document.getElementById('modal-field-original-text').innerText = `Development Project Title: ${prop.title}\n\nProject Scope: This proposal consolidates citizen requests from ${prop.village} related to ${prop.category}. Real-time analytics show a priority urgency score of ${prop.urgency}/100.`;
  document.getElementById('modal-field-translation-text').innerText = `Demographic details: ${prop.description}\n\nActions Recommended:\n1. Commission budget survey\n2. Authorize local panchayat land check\n3. Sanction preliminary project funds.`;
  
  document.getElementById('modal-audio-block').style.display = 'none';
  document.getElementById('modal-photo-block').style.display = 'none';

  // Override Response inputs
  document.getElementById('modal-action-status').value = "Sanctioned";
  document.getElementById('modal-action-note').value = `Consolidated project: "${prop.title}" drafted and sanctioned with preliminary feasibility budget survey.`;
  
  // Custom behavior: save status update to ALL complaints of this village & category!
  const saveBtn = document.querySelector('.response-actions-form button');
  saveBtn.onclick = () => {
    const subs = store.getSubmissions();
    const statusVal = document.getElementById('modal-action-status').value;
    const noteVal = document.getElementById('modal-action-note').value;
    
    subs.forEach(s => {
      if (s.location === prop.village && s.category === prop.category) {
        s.status = statusVal;
        s.mpNote = noteVal;
      }
    });
    
    store.saveSubmissions(subs);
    renderMPDashboard();
    closeGrievanceDetailModal();
    
    // Restore default save handler click binding
    saveBtn.onclick = submitMPResponse;
  };
  
  modal.classList.add('active');
}

// Close modals when clicking outside
window.addEventListener('click', (e) => {
  const modal = document.getElementById('mp-detail-modal');
  if (e.target === modal) {
    closeGrievanceDetailModal();
  }
});

// ==========================================
// 7. INITIALIZATION ON WINDOW LOAD
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
  // Setup click routes
  document.getElementById('portal-citizen').addEventListener('click', () => switchView('citizen'));
  document.getElementById('portal-mp').addEventListener('click', () => {
    switchView(store.mpAuthenticated ? 'mp' : 'mpLogin');
  });
  
  document.getElementById('c-brand-nav').addEventListener('click', () => switchView('landing'));
  document.getElementById('c-back-btn').addEventListener('click', () => switchView('landing'));
  
  document.getElementById('mp-brand-nav').addEventListener('click', () => switchView('landing'));
  document.getElementById('mp-back-btn').addEventListener('click', () => handleMPLogout());

  // Language selectors
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  // Setup citizen subpanels
  setupCitizenLocationPicker();
  
  // FAQ accordion logic
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      q.parentElement.classList.toggle('open');
    });
  });

  // Set default state
  setLanguage(store.currentLanguage);
  switchView('landing');
});
