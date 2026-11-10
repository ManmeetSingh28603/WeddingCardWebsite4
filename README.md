# Rangeelo Rajasthani Wedding Card & Digital Invitation

An authentic, regal, and interactive Rajasthani wedding website invitation built with **HTML5, CSS3, and JavaScript**. Replicated from the Saath Studio "Rangeelo" theme with all personal details removed and replaced with clean, customizable placeholder fields.

---

## 🌟 Key Features

1. **Unrolling Haveli Cloth Gesture**:
   - High-definition video opening animation of block-printed royal fabric unfurling down a Rajasthani haveli wall with couple names and auspicious greeting.
2. **Interactive Scratch-off Cards**:
   - Guests scratch off gold foil cards on canvas to reveal the **Day**, **Month**, and **Year** of the wedding.
3. **Traditional Auspicious Invitation Arch**:
   - Sacred Ganesh invocation (`॥ श्री गणेशाय नमः ॥`), parents' blessings, bride & groom details, and venue in royal gold foil typography.
4. **Day & Night Transition Animation**:
   - As guests scroll through the celebrations (Mehendi, Sangeet, Wedding), each painted Rajasthani venue transforms seamlessly from bright daylight into an illuminated night setting.
   - Moving camel and wedding rickshaw pass each other along the lane at the bottom of the timeline.
5. **Live Celebration Countdown**:
   - Real-time countdown timer counting down days, hours, minutes, and seconds until the festivities begin.
6. **Venue, Map & Travel Details**:
   - High-res venue illustration, direct Google Maps link, airport/railway directions, and guest accommodation guidelines.
7. **Dress Code Guide**:
   - Palette suggestions with color swatches for each wedding function.
8. **Bilingual Support (English & हिन्दी)**:
   - One-tap language toggle button in the floating controls bar to switch the entire invite between English and pure Hindi.
9. **Interactive RSVP via WhatsApp**:
   - Guests enter their name, select attendance count for each event using `+` and `-` steppers, and tap **Send on WhatsApp** to automatically launch WhatsApp with a pre-formatted message addressed to your phone number.
10. **Background Music & Royal Monogram**:
    - Floating music player playing royal acoustic background melody (`theme.mp3`).
    - Custom gold seal SVG emblem (`assets/logo.svg`) with monogram initials.

---

## 🚀 How to Run Locally

You can preview the invitation using the built-in local server:

```powershell
node server.cjs
```

Then open your browser at:
👉 **[http://localhost:3000/](http://localhost:3000/)**

*(Or deploy directly to Vercel, Netlify, GitHub Pages, or any static host).*

---

## ✏️ How to Customize Wedding Details

All personal details, couple names, parents' names, dates, venues, and RSVP settings are centralized in **[`config.js`](./config.js)**.

Simply open [`config.js`](./config.js) in your editor and update the fields:

```javascript
her: {
  en: "Bride",
  hi: "दुल्हन",
  full: { en: "Bride Full Name", hi: "दुल्हन का पूरा नाम" }
},
him: {
  en: "Groom",
  hi: "दूल्हा",
  full: { en: "Groom Full Name", hi: "दूल्हे का पूरा नाम" }
},
parents: {
  her: { en: "Smt. ... & Shri ...", hi: "श्रीमती ... एवं श्री ..." },
  him: { en: "Smt. ... & Shri ...", hi: "श्रीमती ... एवं श्री ..." }
},
wedding: "2027-11-28T19:00:00+05:30", // ISO date string for countdown & calendar
rsvpPhone: "919876543210" // Your WhatsApp number for RSVPs (with country code, digits only)
```

---

## 📁 Project Structure

```text
Wedding Card 4/
├── index.html                   # Main invitation webpage
├── config.js                    # Easy-to-edit wedding details & theme config
├── server.cjs                   # Lightweight local static file server
├── assets/
│   ├── engine.css               # Core layout and typography styles
│   ├── engine.js                # Core interactive engine
│   ├── openings.js              # Opening unroll animations & gestures
│   ├── logo.svg                 # Custom Rajasthani gold seal monogram
│   ├── theme.mp3                # Background acoustic theme music
│   ├── layouts/
│   │   ├── keepsake.css         # Keepsake frame layout styles
│   │   ├── keepsake.js          # Keepsake layout logic
│   │   ├── decor-daynight.css   # Day-to-night scroll animation styles
│   │   └── decor-daynight.js   # Camel, rickshaw & night transition logic
│   ├── themes/rangeelo/
│   │   ├── theme.json           # Rangeelo theme definition
│   │   ├── opening.mp4          # Unrolling cloth film
│   │   ├── opening-first.webp   # Unrolled cloth first frame
│   │   ├── opening-last.webp    # Unrolled cloth last frame
│   │   ├── closed.webp          # Haveli entrance painting
│   │   ├── paper.webp           # Cotton handmade paper texture
│   │   ├── divider.webp         # Floral ornamental divider art
│   │   ├── fn-*.webp            # Daytime event paintings
│   │   ├── fn-*-night.webp      # Nighttime event paintings
│   │   ├── camel.webp           # Animated lane camel
│   │   ├── rickshaw.webp        # Animated lane rickshaw
│   │   ├── venue.webp           # Palace venue artwork
│   │   └── dress.webp           # Dress code artwork
│   └── photos/                  # Couple photo gallery portraits (photo-1.webp to 6)
└── README.md                    # Project documentation
```
