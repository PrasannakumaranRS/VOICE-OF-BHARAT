// mock_data.js
// Initial mock dataset for the "Voice of Bharat" prototype

const DEFAULT_VILLAGES = [
  {
    name: "Rampur",
    population: 4800,
    nearestSchoolKm: 8.5,
    nearestClinicKm: 6.2,
    waterScarcityIndex: 8.5,
    youthUnemploymentRate: 24,
    coords: { x: 200, y: 150 }
  },
  {
    name: "Kallupatti",
    population: 3200,
    nearestSchoolKm: 12.0,
    nearestClinicKm: 3.1,
    waterScarcityIndex: 4.2,
    youthUnemploymentRate: 18,
    coords: { x: 120, y: 320 }
  },
  {
    name: "Mararikulam",
    population: 5500,
    nearestSchoolKm: 3.2,
    nearestClinicKm: 9.8,
    waterScarcityIndex: 3.0,
    youthUnemploymentRate: 29,
    coords: { x: 420, y: 250 }
  },
  {
    name: "Devanahalli Rural",
    population: 6100,
    nearestSchoolKm: 2.1,
    nearestClinicKm: 1.5,
    waterScarcityIndex: 7.8,
    youthUnemploymentRate: 15,
    coords: { x: 300, y: 400 }
  },
  {
    name: "Sukhdev Nagar",
    population: 2900,
    nearestSchoolKm: 6.4,
    nearestClinicKm: 11.2,
    waterScarcityIndex: 6.0,
    youthUnemploymentRate: 32,
    coords: { x: 550, y: 180 }
  },
  {
    name: "Vellore Outer",
    population: 7200,
    nearestSchoolKm: 9.0,
    nearestClinicKm: 5.0,
    waterScarcityIndex: 9.2,
    youthUnemploymentRate: 21,
    coords: { x: 680, y: 330 }
  },
  {
    name: "Gandhi Gram",
    population: 1800,
    nearestSchoolKm: 14.5,
    nearestClinicKm: 15.0,
    waterScarcityIndex: 5.5,
    youthUnemploymentRate: 35,
    coords: { x: 500, y: 480 }
  },
  {
    name: "Bhagatpura",
    population: 3900,
    nearestSchoolKm: 4.5,
    nearestClinicKm: 4.0,
    waterScarcityIndex: 2.1,
    youthUnemploymentRate: 27,
    coords: { x: 750, y: 120 }
  },
  {
    name: "Palani Hills",
    population: 2600,
    nearestSchoolKm: 10.8,
    nearestClinicKm: 13.4,
    waterScarcityIndex: 5.8,
    youthUnemploymentRate: 22,
    coords: { x: 100, y: 480 }
  },
  {
    name: "Chinnakuppam",
    population: 4400,
    nearestSchoolKm: 5.9,
    nearestClinicKm: 7.6,
    waterScarcityIndex: 6.7,
    youthUnemploymentRate: 30,
    coords: { x: 620, y: 470 }
  }
];

const DEFAULT_SUBMISSIONS = [
  {
    id: "VOB-9831",
    name: "Ramanathan K.",
    language: "tamil",
    category: "Education",
    text: "எங்கள் கிராமத்தில் மேல்நிலைப்பள்ளி இல்லை. மாணவர்கள் 12 கிமீ பயணம் செய்ய வேண்டும். தயவுசெய்து பள்ளி கட்டித்தரவும்.",
    translation: "There is no higher secondary school in our village. Students have to travel 12 km. Please build a school.",
    type: "voice",
    timestamp: "2026-07-06T10:15:00Z",
    location: "Kallupatti",
    status: "Under Review",
    mpNote: "We have noted this issue. Cross-referencing school capacity data in Kallupatti to assess a new high school proposal.",
    urgency: 88,
    audioDuration: "0:24"
  },
  {
    id: "VOB-4215",
    name: "Sunita Devi",
    language: "hindi",
    category: "Water & Sanitation",
    text: "रामपुर में पीने के पानी की भारी कमी है। नल के कनेक्शन हैं पर पानी हफ़्ते में सिर्फ एक बार आता है। महिलाएँ बहुत परेशान हैं।",
    translation: "There is an acute shortage of drinking water in Rampur. There are tap connections but water comes only once a week. Women are highly distressed.",
    type: "text",
    timestamp: "2026-07-06T08:30:00Z",
    location: "Rampur",
    status: "Submitted",
    mpNote: "",
    urgency: 92,
    audioDuration: null
  },
  {
    id: "VOB-7290",
    name: "Anjali Krishna",
    language: "malayalam",
    category: "Healthcare",
    text: "പ്രാഥമിക ആരോഗ്യ കേന്ദ്രം ഇവിടെ ഒൻപത് കിലോമീറ്റർ അകലെയാണ്. അടിയന്തര സാഹചര്യങ്ങളിൽ ആളുകൾക്ക് ജീവൻ നഷ്ടപ്പെടുന്നു. ഒരു മൊബൈൽ ക്ലിനിക് എങ്കിലും വേണം.",
    translation: "The primary health center here is 9 km away. People lose lives in emergencies. We need at least a mobile clinic facility.",
    type: "photo",
    imageUrl: "https://images.unsplash.com/photo-1584515901407-4b65eae35429?auto=format&fit=crop&w=400&q=80",
    timestamp: "2026-07-05T16:45:00Z",
    location: "Mararikulam",
    status: "Sanctioned",
    mpNote: "Fund allocation of Rs. 8 Lakhs approved for establishing a weekly mobile health camp serving Mararikulam and nearby hamlets starting next month.",
    urgency: 85,
    audioDuration: null
  },
  {
    id: "VOB-1102",
    name: "Manjunatha Gowda",
    language: "kannada",
    category: "Transport",
    text: "ದೇವನಹಳ್ಳಿ ಗ್ರಾಮೀಣ ಭಾಗದಲ್ಲಿ ಬಸ್ ಸೇವೆ ಸಮರ್ಪಕವಾಗಿಲ್ಲ. ಬೆಳಿಗ್ಗೆ ಶಾಲಾ ಸಮಯಕ್ಕೆ ಒಂದೂ ಬಸ್ ಇಲ್ಲ, ಮಕ್ಕಳು ನಡೆದುಕೊಂಡು ಹೋಗಬೇಕಾಗಿದೆ.",
    translation: "Bus service in Devanahalli rural is inadequate. There is no bus in the morning school hours, children have to walk all the way.",
    type: "text",
    timestamp: "2026-07-05T11:20:00Z",
    location: "Devanahalli Rural",
    status: "Work in Progress",
    mpNote: "Contacted regional transport authority (KSRTC). Two additional shuttle trips have been provisioned during morning and evening school hours.",
    urgency: 74,
    audioDuration: null
  },
  {
    id: "VOB-3847",
    name: "Rajesh Kumar",
    language: "english",
    category: "Employment",
    text: "We need a skill development and vocational training center in Sukhdev Nagar. Many youth are unemployed after high school with no jobs nearby.",
    translation: "We need a skill development and vocational training center in Sukhdev Nagar. Many youth are unemployed after high school with no jobs nearby.",
    type: "text",
    timestamp: "2026-07-04T09:10:00Z",
    location: "Sukhdev Nagar",
    status: "Submitted",
    mpNote: "",
    urgency: 71,
    audioDuration: null
  },
  {
    id: "VOB-5210",
    name: "Arumugam P.",
    language: "tamil",
    category: "Agriculture",
    text: "வேலூர் வெளிப்பகுதியில் உள்ள விவசாய நிலங்களுக்கு நீர் பாசனம் செய்ய மின்சாரம் 3 மணி நேரம் மட்டுமே கிடைக்கிறது. பயிர்கள் காய்கின்றன.",
    translation: "Electricity for irrigating agricultural lands in Vellore outer is only available for 3 hours. Crops are drying up.",
    type: "voice",
    timestamp: "2026-07-03T14:35:00Z",
    location: "Vellore Outer",
    status: "Completed",
    mpNote: "Electricity board has regularized 3-phase supply to 7 hours/day for agricultural feeders in this sector. Issue resolved.",
    urgency: 81,
    audioDuration: "0:45"
  },
  {
    id: "VOB-6029",
    name: "Savita Patil",
    language: "kannada",
    category: "Healthcare",
    text: "ನಮ್ಮ ಹಳ್ಳಿಯಲ್ಲಿ ಹೆರಿಗೆ ಆಸ್ಪತ್ರೆ ಇಲ್ಲ. ತುರ್ತು ಹೆರಿಗೆಗಳಿಗೆ ಪಟ್ಟಣಕ್ಕೆ ಓಡಬೇಕು. ದಯವಿಟ್ಟು ವ್ಯವಸ್ಥೆ ಮಾಡಿ.",
    translation: "There is no maternity clinic in our village. For emergency deliveries, we have to run to the town. Please make arrangements.",
    type: "photo",
    imageUrl: "https://images.unsplash.com/photo-1517120026326-d87759a7b63b?auto=format&fit=crop&w=400&q=80",
    timestamp: "2026-07-02T10:05:00Z",
    location: "Gandhi Gram",
    status: "Under Review",
    mpNote: "Added to the priority list for state-funded CHC (Community Health Center) setups in the next fiscal planning cycle.",
    urgency: 90,
    audioDuration: null
  },
  {
    id: "VOB-8813",
    name: "Muthulakshmi R.",
    language: "tamil",
    category: "Education",
    text: "பழநி மலைப் பகுதியில் உள்ள எங்கள் குடியிருப்புகளுக்கு அருகில் மேல்நிலைப் பள்ளி இல்லை. மாணவர்கள் மலை இறங்கி 10 கிமீ பயணிக்க வேண்டியுள்ளது.",
    translation: "There is no higher secondary school near our settlements in the Palani Hills area. Students must descend the hills and travel 10 km.",
    type: "voice",
    timestamp: "2026-07-07T09:40:00Z",
    location: "Palani Hills",
    status: "Submitted",
    mpNote: "",
    urgency: 79,
    audioDuration: "0:31"
  },
  {
    id: "VOB-4471",
    name: "Karthik Selvam",
    language: "tamil",
    category: "Employment",
    text: "சின்னகுப்பம் பகுதியில் இளைஞர்களுக்கு வேலைவாய்ப்பு இல்லை. ஒரு தொழிற்பயிற்சி மையம் அமைத்தால் பலருக்கு உதவும்.",
    translation: "There are no jobs for youth in Chinnakuppam. Setting up a vocational training centre would help many people.",
    type: "text",
    timestamp: "2026-07-07T15:12:00Z",
    location: "Chinnakuppam",
    status: "Submitted",
    mpNote: "",
    urgency: 76,
    audioDuration: null
  }
];

// MP account used for the MP Workspace login gate.
// Login rule: username = MP's name, password = MP's constituency name (case-insensitive).
const MP_PROFILE = {
  name: "Arvind Menon",
  constituency: "Bharat Constituency 4",
  designation: "Member of Parliament"
};

// Export to window object for access in frontend SPA
window.DEFAULT_VILLAGES = DEFAULT_VILLAGES;
window.DEFAULT_SUBMISSIONS = DEFAULT_SUBMISSIONS;
window.MP_PROFILE = MP_PROFILE;
