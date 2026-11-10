/**
 * Wedding Card Configuration & Customization File
 * ==============================================
 * Shaurya weds Diksha | 01 & 02 December 2026
 * Dayal Gateway, Vibhuti Khand, Gomti Nagar, Lucknow, UP
 */

window.SAATH = {
  root: "./assets/",
  theme: {
    "layout": "keepsake",
    "decor": "daynight",
    "id": "rangeelo",
    "name": "Rangeelo",
    "line": "A painted pink city where kites fill the sky. One tap and a block-printed cloth unrolls down the haveli wall with your names.",
    "story": "Rangeelo is how Rajasthan says full of colour. Our invite is painted in the manner of Mewar and Kishangarh miniatures, flat bright gouache with gold outlines, then let loose on a pink city of kites, marigolds, a camel and a rickshaw. Its pages are block-printed cotton in indigo and madder, and every function gets a painted place of its own, by day and by night.",
    "palette": {
      "ink": "#1F2547",
      "paper": "#F6EBD3",
      "accent": "#B2302A",
      "accent2": "#E9962B",
      "gold": "#B8862B",
      "night": "#1A1D3F"
    },
    "fonts": {
      "script": "Pinyon Script",
      "serif": "Cormorant Garamond",
      "deva": "Tiro Devanagari Hindi",
      "display": "Playfair Display"
    },
    "moods": {
      "haldi": { "accent": "#C9820C", "paper": "#FAEFD2" },
      "mehendi": { "accent": "#4E7A2E", "paper": "#F0F0DC" },
      "sangeet": { "accent": "#C2306E", "paper": "#F8E8EA" },
      "wedding": { "accent": "#B2302A", "paper": "#F7E7D6" },
      "reception": { "accent": "#2E5E8C", "paper": "#EAEFF0" }
    },
    "opening": {
      "type": "keepsake",
      "gesture": "cloth",
      "film": "opening.mp4",
      "first": "opening-first.webp",
      "last": "opening-last.webp",
      "emblem": "logo",
      "aspect": "9 / 16",
      "focus": [0.08, 0.15, 0.92, 0.9],
      "tap": [0.15, 0.2, 0.85, 0.85],
      "from": 0.2,
      "rate": 1.1,
      "writeAt": 4.1,
      "names": {
        "left": 0.31,
        "top": 0.46,
        "right": 0.69,
        "bottom": 0.79
      },
      "tone": "dark",
      "hint": {
        "en": "Tap to unroll the invitation",
        "hi": "निमंत्रण खोलने के लिए छुएँ"
      },
      "edge": {
        "top": "#fee0a4",
        "bottom": "#8c8482"
      }
    },
    "art": {
      "closed": "closed.webp",
      "hero": "hero.webp",
      "paper": "paper.webp",
      "frame": "frame.webp",
      "divider": "divider.webp",
      "corner": "corner.webp",
      "motif": "motif.webp",
      "logo": "logo.png",
      "frameZone": {
        "top": 0.13,
        "bottom": 0.863,
        "left": 0.149,
        "right": 0.85
      },
      "heroCouple": null,
      "cardHero": {
        "file": "closed.webp",
        "focus": [0.5, 0.5]
      },
      "fn": {
        "haldi": "fn-haldi.webp",
        "mehendi": "fn-mehendi.webp",
        "sangeet": "fn-sangeet.webp",
        "wedding": "fn-wedding.webp",
        "reception": "fn-reception.webp",
        "engagement": "fn-engagement.webp"
      },
      "layout": {
        "fn-haldi-night": "fn-haldi-night.webp",
        "fn-mehendi-night": "fn-mehendi-night.webp",
        "fn-sangeet-night": "fn-sangeet-night.webp",
        "fn-wedding-night": "fn-wedding-night.webp",
        "fn-reception-night": "fn-reception-night.webp",
        "fn-engagement-night": "fn-engagement-night.webp",
        "rickshaw": "rickshaw.webp",
        "camel": "camel.webp"
      },
      "venue": "venue.jpg",
      "dress": "dress.webp"
    }
  },

  /* ---------------- WEDDING DATA: SHAURYA & DIKSHA ---------------- */
  data: {
    theme: "rangeelo",
    lang: "en", // Default language: "en" or "hi"
    community: "north-hindu",
    groomFirst: true, // "Shaurya weds Diksha"

    // Invocations
    invocation: "॥ श्री गणेशाय नमः ॥  ॥ श्री पार्वती पतये नमः ॥",
    invocationHi: "॥ श्री गणेशाय नमः ॥  ॥ श्री पार्वती पतये नमः ॥",

    // --- GROOM DETAILS ---
    him: {
      en: "Shaurya",
      hi: "शौर्य",
      full: {
        en: "Shaurya Kapoor",
        hi: "शौर्य कपूर"
      },
      vibe: {
        en: "Charming & Thoughtful",
        hi: "शांत एवं समझदार"
      },
      loves: ["cricket", "code", "tech", "foodie", "mountains"]
    },

    // --- BRIDE DETAILS ---
    her: {
      en: "Diksha",
      hi: "दीक्षा",
      full: {
        en: "Diksha Bhatia",
        hi: "दीक्षा भाटिया"
      },
      vibe: {
        en: "Graceful & Radiant",
        hi: "सौम्य एवं नटखट"
      },
      loves: ["books", "coffee", "travel", "music", "long-walks"]
    },

    // --- PARENTS DETAILS ---
    parents: {
      him: {
        en: "Smt. Shikha & Shri Arun Kapoor",
        hi: "श्रीमती शिखा एवं श्री अरुण कपूर"
      },
      her: {
        en: "Smt. Anita & Late Shri Rajendra Kumar Bhatia",
        hi: "श्रीमती अनीता एवं स्व. श्री राजेंद्र कुमार भाटिया"
      }
    },

    // --- WEDDING DATE & TIME ---
    wedding: "2026-12-02T20:30:00+05:30",

    // --- CITY & VENUE ---
    city: {
      en: "Lucknow",
      hi: "लखनऊ"
    },
    journey: {
      from: {
        en: "Gurgaon",
        hi: "गुड़गाँव"
      }
    },
    venue: {
      name: {
        en: "Dayal Gateway",
        hi: "दयाल गेटवे"
      },
      address: {
        en: "Vibhuti Khand, Gomti Nagar, Lucknow, UP",
        hi: "विभूति खंड, गोमती नगर, लखनऊ, उत्तर प्रदेश"
      },
      photo: "./assets/venue.jpg",
      map: "https://maps.app.goo.gl/6eFMiHWrJnuZPjhZ8"
    },

    // --- TRAVEL & CONVEYANCE ---
    travel: [
      {
        en: "Chaudhary Charan Singh International Airport (LKO) is approx. 30 minutes from the venue.",
        hi: "चौधरी चरण सिंह अंतरराष्ट्रीय हवाई अड्डा (LKO) कार्यक्रम स्थल से लगभग 30 मिनट की दूरी पर है।"
      },
      {
        en: "Lucknow Charbagh Railway Station is approx. 20 minutes away.",
        hi: "लखनऊ चारबाग़ रेलवे स्टेशन लगभग 20 मिनट की दूरी पर है।"
      }
    ],

    // --- ACCOMMODATION / STAY ---
    stay: [
      {
        name: {
          en: "Dayal Gateway & Guest Suites",
          hi: "दयाल गेटवे एवं गेस्ट सूट्स"
        },
        note: {
          en: "Rooms and suites reserved for family and out-of-town guests from 01 to 03 December.",
          hi: "परिवार एवं बाहर से पधारे सभी अतिथियों के लिए 01 से 03 दिसंबर तक आवास की उत्तम व्यवस्था।"
        }
      }
    ],

    // --- CELEBRATIONS & EVENTS ---
    events: [
      {
        id: "sangeet",
        name: {
          en: "Ring Ceremony",
          hi: "रिंग सेरेमनी"
        },
        start: "2026-12-01T19:30:00+05:30",
        end: "2026-12-01T23:59:00+05:30",
        place: {
          en: "Dayal Gateway, Vibhuti Khand, Gomti Nagar, Lucknow",
          hi: "दयाल गेटवे, विभूति खंड, गोमती नगर, लखनऊ"
        },
        dress: {
          en: "Cocktail & Dinner | Evening Glamour",
          hi: "कॉकटेल एवं डिनर | शाम का उत्सव"
        },
        palette: ["#3b2a6b", "#a3122f", "#c9a24a"]
      },
      {
        id: "haldi",
        name: {
          en: "Carnival Haldi",
          hi: "कार्निवल हल्दी"
        },
        start: "2026-12-02T11:30:00+05:30",
        end: "2026-12-02T15:00:00+05:30",
        place: {
          en: "Dayal Gateway, Vibhuti Khand, Gomti Nagar, Lucknow",
          hi: "दयाल गेटवे, विभूति खंड, गोमती नगर, लखनऊ"
        },
        dress: {
          en: "Followed by Lunch | Vibrant Hues of Yellow & Brights",
          hi: "भोजन पश्चात | पीला एवं चटख उत्सव रंग"
        },
        palette: ["#e9962b", "#fee0a4", "#b2302a"]
      },
      {
        id: "wedding",
        name: {
          en: "Wedding Ceremony",
          hi: "शुभ विवाह"
        },
        start: "2026-12-02T20:30:00+05:30",
        end: "2026-12-02T23:59:00+05:30",
        place: {
          en: "Dayal Gateway, Vibhuti Khand, Gomti Nagar, Lucknow",
          hi: "दयाल गेटवे, विभूति खंड, गोमती नगर, लखनऊ"
        },
        dress: {
          en: "Baraat: 8:30 pm followed by Dinner | Traditional Regal Indian",
          hi: "बारात रात 8:30 बजे तत्पश्चात प्रीतिभोज | पारंपरिक शाही परिधान"
        },
        palette: ["#a3122f", "#b8862b", "#f6ebd3"]
      }
    ],

    // --- OUR STORY ---
    story: {
      en: "Joined Jeevansathi in January, matched in February, married in December. Yes, we really don't waste time. 😄\n\nWe found each other on Jeevansathi, and by 2nd February we were already talking non-stop. Three days later, he said yes. Our first date was on Valentine's Day in Gurgaon, with nervous smiles, awkward silences and a lot of \"so... hi.\" Somehow it still felt like we'd known each other forever.",
      hi: "जनवरी में जीवनसाथी पर शुरुआत, फ़रवरी में रिश्ता तय, और दिसंबर में शादी! सच कहें तो हमने बिल्कुल वक़्त ज़ाया नहीं किया। 😄\n\nहम दोनों जीवनसाथी पर मिले, और 2 फ़रवरी तक हमारी बातें कभी ख़त्म ही नहीं होती थीं। बस तीन दिन बाद, उन्होंने 'हाँ' कह दी। 14 फ़रवरी को गुड़गाँव में हमारी पहली मुलाक़ात हुई—शर्मीली मुस्कानें, प्यारी सी चुप्पी और ढेर सारी 'सो... हाय!'। फिर भी ऐसा लगा जैसे हम एक-दूसरे को सदियों से जानते हों।"
    },

    // --- TIMELINE MILESTONES ---
    timeline: [
      {
        when: { en: "January", hi: "जनवरी" },
        what: { en: "Two hopeful hearts, one very lucky algorithm", hi: "दो उम्मीद भरे दिल, और एक बहुत ख़ास एल्गोरिदम" }
      },
      {
        when: { en: "2 February", hi: "2 फ़रवरी" },
        what: { en: "Day one: 'Hi' turned into hours of chatting", hi: "पहला दिन: सिर्फ़ एक 'हाय' से शुरू हुई घंटों की बातें" }
      },
      {
        when: { en: "4 February", hi: "4 फ़रवरी" },
        what: { en: "Day three: he said yes, and she said 'finally!'", hi: "तीसरा दिन: उन्होंने हाँ कहा, और इन्होंने कहा—'फाइनली!'" }
      },
      {
        when: { en: "14 February", hi: "14 फ़रवरी" },
        what: { en: "First meeting in Gurgaon: butterflies, blushing and way too much smiling", hi: "गुड़गाँव में पहली मुलाक़ात: दिल की धड़कनें और चेहरे पर खिली मुस्कान" }
      },
      {
        when: { en: "1 & 2 December", hi: "1 और 2 दिसंबर" },
        what: { en: "Two families, lots of food, and one happily ever after", hi: "दो परिवार, स्वादिष्ट दावत, और ज़िंदगी भर का खूबसूरत साथ" }
      }
    ],

    // --- PHOTO GALLERY CAROUSEL ---
    photos: [
      {
        src: "./assets/photos/photo-1.jpg",
        caption: {
          en: "Golden hour in the city of Nawabs",
          hi: "लखनऊ की सुनहरी शाम"
        }
      },
      {
        src: "./assets/photos/photo-2.jpg",
        caption: {
          en: "Dancing under the Clock Tower",
          hi: "घंटाघर के साए में"
        }
      },
      {
        src: "./assets/photos/photo-3.jpg",
        caption: {
          en: "The look that says forever",
          hi: "मुस्कुराहटें और नटखट लम्हे"
        }
      },
      {
        src: "./assets/photos/photo-4.jpg",
        caption: {
          en: "Late night drives & endless conversations",
          hi: "सफ़र के साथी"
        }
      },
      {
        src: "./assets/photos/photo-5.jpg",
        caption: {
          en: "Rooted in tradition, bound by love",
          hi: "शाही अंदाज़, सदाबहार प्यार"
        }
      }
    ],

    // --- FAMILY BLESSINGS & BEST COMPLIMENTS ---
    family: {
      blessings: [
        {
          en: "Late Smt. Sarojini Kapoor & Late Shri Vishwa Nath Kapoor",
          hi: "स्व. श्रीमती सरोजिनी कपूर एवं स्व. श्री विश्वनाथ कपूर"
        },
        {
          en: "Late Smt. Motia Bhatia & Late Shri Ramesh Chandra Bhatia",
          hi: "स्व. श्रीमती मोतिया देवी भाटिया एवं स्व. श्री रमेश चंद्र भाटिया"
        },
        {
          en: "Late Smt. Asha Bhalla & Sri Vishwanath Bhalla",
          hi: "स्व. श्रीमती आशा भल्ला एवं श्री विश्वनाथ भल्ला"
        },
        {
          en: "Smt. Kanta Sehgal & Late Sri Nand Kishore Sehgal",
          hi: "श्रीमती कांता सहगल एवं स्व. श्री नंद किशोर सहगल"
        }
      ],
      darshanabhilashi: [
        {
          en: "The Kapoor & Bhalla Family",
          hi: "कपूर एवं भल्ला परिवार"
        },
        {
          en: "The Bhatia Family",
          hi: "भाटिया परिवार"
        }
      ],
      swagatotsuk: [
        {
          en: "Saumya & Shivam",
          hi: "सौम्या एवं शिवम"
        }
      ],
      kids: [
        {
          en: "Kapoor & Bhatia Parivar",
          hi: "कपूर एवं भाटिया परिवार"
        }
      ]
    },

    // --- RSVP SETTINGS ---
    rsvp: true,
    rsvpBy: "2026-11-20",
    rsvpPhone: "917895281962", // Update with your WhatsApp number for RSVPs

    // --- OUR SONG (Spotify integration or audio) ---
    song: {
      url: "https://open.spotify.com/track/6tzckBcK66LzeSA1Opnv35",
      title: {
        en: "Raabta",
        hi: "राबता"
      },
      artist: "Arijit Singh, Shreya Ghoshal"
    },

    // --- SIGNOFF & ROYAL LOGO ---
    signoff: {
      en: "With Best Compliments From Kapoor & Bhalla Family\n2/637, Viram Khand, Gomti Nagar, Lucknow",
      hi: "सप्रेम, कपूर एवं भल्ला परिवार\n2/637, विराम खंड, गोमती नगर, लखनऊ"
    },
    logo: {
      family: "custom"
    },
    logoSrc: "./assets/logo.png",
    logoDark: "./assets/logo.png"
  }
};

// --- DYNAMIC VARIANT APPLICATION (Groom / Bride / NRI) ---
(() => {
  const params = new URLSearchParams(typeof location !== "undefined" ? location.search : "");
  const path = typeof location !== "undefined" ? location.pathname.toLowerCase() : "";
  const variant = (
    window.SAATH_VARIANT ||
    params.get("variant") ||
    params.get("side") ||
    (path.includes("bride") ? "bride" : path.includes("nri") ? "nri" : "groom")
  ).toLowerCase();

  const d = window.SAATH.data;

  if (variant === "bride") {
    d.groomFirst = false; // Bride first: Diksha & Shaurya everywhere
    d.music = "./assets/audio/jahaan-acoustic.mp3";
    d.family.blessings = [
      {
        en: "Late Smt. Motia Bhatia & Late Shri Ramesh Chandra Bhatia",
        hi: "स्व. श्रीमती मोतिया देवी भाटिया एवं स्व. श्री रमेश चंद्र भाटिया"
      },
      {
        en: "Smt. Kanta Sehgal & Late Sri Nand Kishore Sehgal",
        hi: "श्रीमती कांता सहगल एवं स्व. श्री नंद किशोर सहगल"
      },
      {
        en: "Late Smt. Sarojini Kapoor & Late Shri Vishwa Nath Kapoor",
        hi: "स्व. श्रीमती सरोजिनी कपूर एवं स्व. श्री विश्वनाथ कपूर"
      },
      {
        en: "Late Smt. Asha Bhalla & Sri Vishwanath Bhalla",
        hi: "स्व. श्रीमती आशा भल्ला एवं श्री विश्वनाथ भल्ला"
      }
    ];
    d.family.darshanabhilashi = [
      {
        en: "The Bhatia Family",
        hi: "भाटिया परिवार"
      },
      {
        en: "The Kapoor & Bhalla Family",
        hi: "कपूर एवं भल्ला परिवार"
      }
    ];
    d.family.swagatotsuk = [
      {
        en: "Esha & Eshant",
        hi: "ईशा एवं ईशांत"
      }
    ];
    d.family.kids = [
      {
        en: "Bhatia & Kapoor Parivar",
        hi: "भाटिया एवं कपूर परिवार"
      }
    ];
  } else if (variant === "nri") {
    d.music = "./assets/audio/christina-perri.mp3";
    d.family.blessings = [
      {
        en: "Late Smt. Sarojini Kapoor & Late Shri Vishwa Nath Kapoor",
        hi: "स्व. श्रीमती सरोजिनी कपूर एवं स्व. श्री विश्वनाथ कपूर"
      },
      {
        en: "Late Smt. Motia Bhatia & Late Shri Ramesh Chandra Bhatia",
        hi: "स्व. श्रीमती मोतिया देवी भाटिया एवं स्व. श्री रमेश चंद्र भाटिया"
      },
      {
        en: "Late Smt. Asha Bhalla & Sri Vishwanath Bhalla",
        hi: "स्व. श्रीमती आशा भल्ला एवं श्री विश्वनाथ भल्ला"
      },
      {
        en: "Smt. Kanta Sehgal & Late Sri Nand Kishore Sehgal",
        hi: "श्रीमती कांता सहगल एवं स्व. श्री नंद किशोर सहगल"
      }
    ];
    d.family.darshanabhilashi = [
      {
        en: "The Kapoor & Bhalla Family",
        hi: "कपूर एवं भल्ला परिवार"
      },
      {
        en: "The Bhatia Family",
        hi: "भाटिया परिवार"
      }
    ];
    d.family.swagatotsuk = [
      {
        en: "Saumya & Shivam",
        hi: "सौम्या एवं शिवम"
      }
    ];
  } else {
    // Groom (default)
    d.music = "./assets/audio/jahaan-acoustic.mp3";
    d.family.blessings = [
      {
        en: "Late Smt. Sarojini Kapoor & Late Shri Vishwa Nath Kapoor",
        hi: "स्व. श्रीमती सरोजिनी कपूर एवं स्व. श्री विश्वनाथ कपूर"
      },
      {
        en: "Late Smt. Motia Bhatia & Late Shri Ramesh Chandra Bhatia",
        hi: "स्व. श्रीमती मोतिया देवी भाटिया एवं स्व. श्री रमेश चंद्र भाटिया"
      },
      {
        en: "Late Smt. Asha Bhalla & Sri Vishwanath Bhalla",
        hi: "स्व. श्रीमती आशा भल्ला एवं श्री विश्वनाथ भल्ला"
      },
      {
        en: "Smt. Kanta Sehgal & Late Sri Nand Kishore Sehgal",
        hi: "श्रीमती कांता सहगल एवं स्व. श्री नंद किशोर सहगल"
      }
    ];
    d.family.darshanabhilashi = [
      {
        en: "The Kapoor & Bhalla Family",
        hi: "कपूर एवं भल्ला परिवार"
      },
      {
        en: "The Bhatia Family",
        hi: "भाटिया परिवार"
      }
    ];
    d.family.swagatotsuk = [
      {
        en: "Saumya & Shivam",
        hi: "सौम्या एवं शिवम"
      }
    ];
  }
})();
