// Field Map data. Each city: label, dates, center [lat,lng], zoom, home, places.
// Place fields: cat (work|cafe|gym|swim|spa|massage|eat|barber|health), name, lat, lng, pid (Google place id), rating, note, price.
window.MAP_DATA = {
 "cities": {
  "saigon": {
   "label": "Ho Chi Minh City",
   "dates": "14–30 Nov",
   "center": [
    10.7745,
    106.6905
   ],
   "zoom": 15,
   "home": {
    "name": "Larita Saigon",
    "lat": 10.7721712,
    "lng": 106.6786492,
    "pid": "ChIJ0xMn_6AvdTERwVAK0FFBlG4",
    "addr": "449 Điện Biên Phủ, Phường Bàn Cờ, Quận 3, TP. Hồ Chí Minh",
    "note": "Home base, 14–30 Nov"
   },
   "places": [
    {
     "cat": "work",
     "name": "Hôtel des Arts (MGallery)",
     "lat": 10.7824611,
     "lng": 106.6972784,
     "pid": "ChIJSXwyXDYvdTERjIuhQKiCCqM",
     "rating": "4.7 · 4K reviews",
     "note": "Art-deco lobby, Albion for breakfast and coffee. Your best all-day base.",
     "price": "🏨 5★ · 💲💲 coffee ~120–160k VND (~A$7–9)"
    },
    {
     "cat": "work",
     "name": "Park Hyatt Saigon",
     "lat": 10.7776323,
     "lng": 106.7033778,
     "pid": "ChIJN6yML0YvdTERu3qIwePETD0",
     "rating": "4.5 · 4.6K reviews",
     "note": "Calm Park Lounge. The classic work-from-luxury spot.",
     "price": "🏨 5★ · 💲💲💲 coffee ~150–200k VND (~A$9–11)"
    },
    {
     "cat": "work",
     "name": "The Reverie Saigon",
     "lat": 10.7736811,
     "lng": 106.7046523,
     "pid": "ChIJmfcfuUYvdTERoM-VKjTQBLA",
     "rating": "4.6 · 2.2K reviews",
     "note": "Opulent and very quiet lounges. Café Cardinal for coffee.",
     "price": "🏨 5★ · 💲💲💲 coffee ~150–200k VND (~A$9–11)"
    },
    {
     "cat": "work",
     "name": "JW Marriott · The Lounge",
     "lat": 10.7811129,
     "lng": 106.7004389,
     "pid": "ChIJjXnHPFEvdTERmi3NOBWKZuQ",
     "rating": "4.8 · 81 reviews",
     "note": "Polished lobby lounge, opens 7am.",
     "price": "🏨 5★ · 💲💲 coffee ~120–160k VND (~A$7–9)"
    },
    {
     "cat": "work",
     "name": "Mia Saigon · Kitchen by the River",
     "lat": 10.8100904,
     "lng": 106.7508858,
     "pid": "ChIJtxV8ddAndTERKPQ3NQbfrwM",
     "rating": "4.6 · 1.4K reviews",
     "note": "Your riverside favourite in Thảo Điền. Work and lunch day.",
     "price": "🏨 5★ boutique · 💲💲 coffee ~100–150k VND (~A$6–9)"
    },
    {
     "cat": "work",
     "name": "Villa Sông Saigon",
     "lat": 10.8157372,
     "lng": 106.7339184,
     "pid": "ChIJY2bT9RsmdTERe4ivhhtmG4c",
     "rating": "4.4 · 1K reviews",
     "note": "Colonial riverside villa with a pool. Very zen.",
     "price": "🏨 5★ boutique · 💲💲 coffee ~100–130k VND (~A$6–7)"
    },
    {
     "cat": "work",
     "name": "The Myst Dong Khoi",
     "lat": 10.7746987,
     "lng": 106.7054063,
     "pid": "ChIJV3SZhEYvdTERNDgxopXFXdk",
     "rating": "4.5 · 2.3K reviews",
     "note": "Design-led boutique hotel, retro-luxe fit-out, rooftop bar. Very Soho House.",
     "price": "🏨 5★ boutique · 💲💲 coffee ~100–150k VND (~A$6–9)"
    },
    {
     "cat": "swim",
     "name": "The Myst rooftop pool",
     "lat": 10.7747987,
     "lng": 106.7055063,
     "pid": "ChIJV3SZhEYvdTERNDgxopXFXdk",
     "rating": "4.5 · 2.3K reviews",
     "note": "Stylish rooftop pool and bar. Ask about day access.",
     "price": "🏨 5★ boutique · 💲💲💲 ask about day access"
    },
    {
     "cat": "cafe",
     "name": "Shibui Concept",
     "lat": 10.7690992,
     "lng": 106.6910381,
     "pid": "ChIJX0PQX5ovdTERB_OX988uED8",
     "rating": "4.7 · 213 reviews",
     "note": "Japanese-minimal, vinyl and jazz, park views, ceremonial matcha. Calm.",
     "price": "💲 matcha ~75k VND (~A$4)"
    },
    {
     "cat": "cafe",
     "name": "1996 Matcha · Calmette",
     "lat": 10.766558,
     "lng": 106.699914,
     "pid": "ChIJR98MQwAvdTERho9uxP_l2_Q",
     "rating": "4.7 · 501 reviews",
     "note": "Mid-century loft with a skylit upper deck. Quiet mornings, big tables.",
     "price": "💲 coffee/matcha ~60–80k VND (~A$3–5)"
    },
    {
     "cat": "cafe",
     "name": "Miyama · The View",
     "lat": 10.7736943,
     "lng": 106.7010209,
     "pid": "ChIJQclzQUcvdTERK_N0_11vVvo",
     "rating": "4.7 · 1.8K reviews",
     "note": "Japanese café in Saigon Centre with window seats over the city.",
     "price": "💲💲 drinks ~80–120k VND (~A$5–7)"
    },
    {
     "cat": "cafe",
     "name": "Okkio · Phạm Ngọc Thạch",
     "lat": 10.7845491,
     "lng": 106.69325,
     "pid": "ChIJiyfmqrYvdTERFpK50X-rB5Y",
     "rating": "4.5 · 732 reviews",
     "note": "Top pick. Cosy, fancy and remarkably quiet.",
     "price": "💲 coffee ~60–80k VND (~A$3–5)"
    },
    {
     "cat": "cafe",
     "name": "The Workshop Coffee",
     "lat": 10.7734764,
     "lng": 106.7056037,
     "pid": "ChIJdyfroEYvdTER2m7eTz44Bns",
     "rating": "4.4 · 4.2K reviews",
     "note": "Industrial loft, power sockets, laptop crowd.",
     "price": "💲💲 coffee ~80–100k VND (~A$5–6)"
    },
    {
     "cat": "cafe",
     "name": "Bosgaurus · Opera House",
     "lat": 10.7794815,
     "lng": 106.7059074,
     "pid": "ChIJf4AVMzovdTERJKVKdFF8NgI",
     "rating": "4.7 · 1.1K reviews",
     "note": "Minimalist, champion baristas, opens 7am.",
     "price": "💲💲 coffee ~80–110k VND (~A$5–6)"
    },
    {
     "cat": "cafe",
     "name": "Cafe Oshima's",
     "lat": 10.7704271,
     "lng": 106.6852377,
     "pid": "ChIJ94vkUTAvdTEROo4TDI0cMLg",
     "rating": "4.3 · 846 reviews",
     "note": "Japanese-style, peaceful garden seating.",
     "price": "💲 coffee ~50–70k VND (~A$3–4)"
    },
    {
     "cat": "cafe",
     "name": "Tartine Saïgon",
     "lat": 10.7761806,
     "lng": 106.6892501,
     "pid": "ChIJk-2MFoUvdTERP0P-_Qw0uyg",
     "rating": "4.8 · 729 reviews",
     "note": "Quiet air-conditioned upstairs, eggs benny, proper latte.",
     "price": "💲💲 coffee ~70–90k (~A$4–5) · brunch ~200k (~A$11)"
    },
    {
     "cat": "cafe",
     "name": "The Melbourne Cafe",
     "lat": 10.7772497,
     "lng": 106.6890887,
     "pid": "ChIJ08FVva8vdTERTv9aeyveBYU",
     "rating": "4.7 · 3.5K reviews",
     "note": "Aussie brunch and coffee.",
     "price": "💲💲 coffee ~70k (~A$4) · brunch ~200k (~A$11)"
    },
    {
     "cat": "cafe",
     "name": "Every Half Coffee Roasters",
     "lat": 10.782871,
     "lng": 106.6851043,
     "pid": "ChIJ5b1V8PYpdTERjYq-X-hL-Tk",
     "rating": "4.8 · 1.1K reviews",
     "note": "Leafy garden courtyard, great coffee.",
     "price": "💲 coffee ~60–80k VND (~A$3–5)"
    },
    {
     "cat": "cafe",
     "name": "KATINAT Lý Thái Tổ",
     "lat": 10.7682274,
     "lng": 106.6744123,
     "pid": "ChIJ_y6Z_1YvdTERafAgPEiRa-w",
     "rating": "4.0 · 642 reviews",
     "note": "Nearest Katinat. Get the fruit teas, skip the cappuccino.",
     "price": "💲 bubble tea ~45–65k VND (~A$3–4)"
    },
    {
     "cat": "cafe",
     "name": "Starbucks Hà Đô",
     "lat": 10.7756716,
     "lng": 106.6782655,
     "pid": "ChIJARoMMwAvdTERGSO4Bikai0E",
     "rating": "4.7 · 52 reviews",
     "note": "Nearest Starbucks. New, bright, busy on weekends.",
     "price": "💲💲 coffee ~80–110k VND (~A$5–6)"
    },
    {
     "cat": "cafe",
     "name": "Starbucks Signing Store",
     "lat": 10.7701381,
     "lng": 106.6853574,
     "pid": "ChIJZRwJPwAvdTERyv9P-nWz7qA",
     "rating": "4.8 · 239 reviews",
     "note": "Quiet villa in an alley, deaf barista team. Nicer one.",
     "price": "💲💲 coffee ~80–110k VND (~A$5–6)"
    },
    {
     "cat": "gym",
     "name": "California Fitness & Yoga",
     "lat": 10.7768733,
     "lng": 106.6812275,
     "pid": "ChIJwz-LCQAvdTERrQ3s4HdIyFw",
     "rating": "4.4 · 356 reviews",
     "note": "Clean, branded kit. Closest big gym.",
     "price": "💲💲 day pass ~300k VND (~A$17), ask at desk"
    },
    {
     "cat": "gym",
     "name": "The New Gym",
     "lat": 10.7796006,
     "lng": 106.6866045,
     "pid": "ChIJHwSiTYkvdTER5zsAv5PKTFY",
     "rating": "4.1 · 1K reviews",
     "note": "Modern equipment, motivating vibe.",
     "price": "💲 day pass ~100–150k VND (~A$6–9)"
    },
    {
     "cat": "gym",
     "name": "B2FIT Gym Quận 3",
     "lat": 10.7675479,
     "lng": 106.6792667,
     "pid": "ChIJV-MBdh8vdTERPiOfxWZl1S4",
     "rating": "4.9 · 48 reviews",
     "note": "Small, friendly, reasonable prices.",
     "price": "💲 day pass ~100k VND (~A$6)"
    },
    {
     "cat": "gym",
     "name": "Power Up Fitness Q3",
     "lat": 10.7805376,
     "lng": 106.6807831,
     "pid": "ChIJOdHovygvdTERtBE4UE9Zd_k",
     "rating": "4.2 · 60 reviews",
     "note": "Day pass 100k VND (~A$6) incl. water.",
     "price": "💲 day pass 100k VND (~A$6) incl. water"
    },
    {
     "cat": "swim",
     "name": "Social Club · Hôtel des Arts rooftop",
     "lat": 10.7824226,
     "lng": 106.6973331,
     "pid": "ChIJO9BqXjYvdTERVrVlBcU1Ccc",
     "rating": "4.6 · 2.7K reviews",
     "note": "23rd-floor rooftop pool and bar. The Soho House feel. Access via minimum spend.",
     "price": "🏨 5★ · 💲💲💲 pool via min spend ~300–500k VND (~A$17–28)"
    },
    {
     "cat": "swim",
     "name": "Equatorial hotel pool",
     "lat": 10.763075,
     "lng": 106.6791469,
     "pid": "ChIJBUZZeh4vdTERjcZTglYc-B4",
     "rating": "4.4 · 5.3K reviews",
     "note": "Closest proper hotel pool. Ask for a day pass.",
     "price": "🏨 4★ · 💲💲💲 day pass ~300–500k VND (~A$17–28)"
    },
    {
     "cat": "swim",
     "name": "Sheraton Saigon pool",
     "lat": 10.7754461,
     "lng": 106.7038779,
     "pid": "ChIJA0evAkgvdTERLNUql8b4ipU",
     "rating": "4.6 · 9.7K reviews",
     "note": "5-star pool. Day passes often sold on Klook.",
     "price": "🏨 5★ · 💲💲💲💲 day pass ~700k–1M VND (~A$40–57), often on Klook"
    },
    {
     "cat": "swim",
     "name": "Lao Động pool (50m)",
     "lat": 10.7755985,
     "lng": 106.6936451,
     "pid": "ChIJcY3bATovdTERWk65sZrAGHg",
     "rating": "3.8 · 515 reviews",
     "note": "Proper 50m lap pool, 35–40k VND (~A$2).",
     "price": "💲 entry 35–40k VND (~A$2)"
    },
    {
     "cat": "swim",
     "name": "Kỳ Đồng pool",
     "lat": 10.7805614,
     "lng": 106.6807936,
     "pid": "ChIJ-QSUwoAvdTER5RxGsm0KBLs",
     "rating": "3.8 · 577 reviews",
     "note": "Cheap, small outdoor local pool.",
     "price": "💲 entry ~40–50k VND (~A$2–3)"
    },
    {
     "cat": "spa",
     "name": "Sả Spa & Onsen",
     "lat": 10.7730852,
     "lng": 106.6899802,
     "pid": "ChIJrUr-VQAvdTERU-iOxud26qg",
     "rating": "4.9 · 2.3K reviews",
     "note": "Private onsen, saunas and cold plunge. Top pick.",
     "price": "💲💲💲 onsen + 60-min massage ~600k–1M VND (~A$34–57)"
    },
    {
     "cat": "spa",
     "name": "La Maison de L'Apothiquaire",
     "lat": 10.7821523,
     "lng": 106.6843952,
     "pid": "ChIJ298jljovdTERWZQp1RZZogs",
     "rating": "4.8 · 333 reviews",
     "note": "French villa, steam and sauna, half-day packages with lunch.",
     "price": "💲💲💲💲 half-day package ~€125 (~A$200) incl. lunch + pickup"
    },
    {
     "cat": "spa",
     "name": "Aman Spa & Wellness",
     "lat": 10.7737303,
     "lng": 106.6982701,
     "pid": "ChIJeVH4DnUvdTER9Gn-VN-g-uQ",
     "rating": "4.9 · 723 reviews",
     "note": "Reviewers call it the best massage of their life.",
     "price": "💲💲💲 60-min massage ~500–700k VND (~A$28–40)"
    },
    {
     "cat": "spa",
     "name": "Laboho Spa",
     "lat": 10.7694195,
     "lng": 106.6974698,
     "pid": "ChIJ2VdjtYIvdTERHyNKPBdThnc",
     "rating": "4.9 · 3K reviews",
     "note": "Great for gym tightness. 75 min + hair wash 900k VND (~A$51).",
     "price": "💲💲💲 75-min massage + hair wash 900k VND (~A$51)"
    },
    {
     "cat": "massage",
     "name": "Nara Spa Quận 3",
     "lat": 10.7664087,
     "lng": 106.6806794,
     "pid": "ChIJLfHQTlkvdTERRFLsOzNchqk",
     "rating": "4.9 · 1.3K reviews",
     "note": "Body massage and hair spa combos. Close by.",
     "price": "💲💲 60-min massage ~350–500k VND (~A$20–28)"
    },
    {
     "cat": "massage",
     "name": "Mori Spa & Massage",
     "lat": 10.7671889,
     "lng": 106.6895827,
     "pid": "ChIJhw74W8AvdTERrqCIIbm4tv4",
     "rating": "4.9 · 579 reviews",
     "note": "Full body, hair spa, facial.",
     "price": "💲💲 60-min massage ~400–600k VND (~A$23–34)"
    },
    {
     "cat": "massage",
     "name": "Chill Spa",
     "lat": 10.7669461,
     "lng": 106.6921903,
     "pid": "ChIJKfgRV5ovdTERTKrurm_j2C0",
     "rating": "4.9 · 1.1K reviews",
     "note": "Body and foot care. Friendly owners.",
     "price": "💲💲 60-min massage ~300–450k VND (~A$17–26)"
    },
    {
     "cat": "massage",
     "name": "Tỉnh Thức Spa",
     "lat": 10.7903088,
     "lng": 106.679426,
     "pid": "ChIJdd_8-GgvdTERrzhTtANxplM",
     "rating": "4.9 · 876 reviews",
     "note": "Body massage and facials.",
     "price": "💲💲 60-min massage ~400–600k VND (~A$23–34)"
    },
    {
     "cat": "eat",
     "name": "Bếp Cuốn Sài Gòn",
     "lat": 10.7765904,
     "lng": 106.6900581,
     "pid": "ChIJh6b7vxsvdTERnXtN6EfbxMw",
     "rating": "4.9 · 6.3K reviews",
     "note": "Rice-paper rolls and bánh xèo. Local favourite.",
     "price": "💲💲 ~150–250k VND pp (~A$9–14)"
    },
    {
     "cat": "eat",
     "name": "Bánh xèo 335/5",
     "lat": 10.7753263,
     "lng": 106.6825047,
     "pid": "ChIJ-0g4ISQvdTERXXlBgGZjPrY",
     "rating": "4.0 · 593 reviews",
     "note": "No-frills bánh xèo and bánh khọt, around the corner.",
     "price": "💲 ~60–100k VND pp (~A$3–6)"
    },
    {
     "cat": "eat",
     "name": "HOME Saigon",
     "lat": 10.7832942,
     "lng": 106.6896996,
     "pid": "ChIJMfOx7S8vdTERH8b2es5CUq8",
     "rating": "4.8 · 2.7K reviews",
     "note": "Polished Vietnamese in a calm house.",
     "price": "💲💲💲 ~300–500k VND pp (~A$17–28)"
    },
    {
     "cat": "eat",
     "name": "Vi Da Vietnamese Eatery",
     "lat": 10.7725721,
     "lng": 106.6970323,
     "pid": "ChIJ1bD8IAAvdTERSZFXZI_yM18",
     "rating": "4.6 · 136 reviews",
     "note": "Bánh mì with warm baguette and quality pork.",
     "price": "💲 bánh mì ~50–80k VND (~A$3–5)"
    },
    {
     "cat": "eat",
     "name": "Little Hanoi Egg Coffee",
     "lat": 10.7795203,
     "lng": 106.686549,
     "pid": "ChIJOS5psIovdTERBkv_EJ3_WJg",
     "rating": "4.8 · 1.7K reviews",
     "note": "Breakfast and egg coffee, quiet branch on your street.",
     "price": "💲 breakfast + egg coffee ~80–150k VND (~A$5–9)"
    },
    {
     "cat": "barber",
     "name": "Liem Barber Shop",
     "lat": 10.76981,
     "lng": 106.6821069,
     "pid": "ChIJf2ZwXCIvdTERDenW7n-2oYA",
     "rating": "4.3 · 952 reviews",
     "note": "Famous HCMC barber chain, great music and vibe, quick fades.",
     "price": "💲 cut ~100–150k VND (~A$6–9)"
    },
    {
     "cat": "barber",
     "name": "30Shine Tô Hiến Thành",
     "lat": 10.7808082,
     "lng": 106.6694938,
     "pid": "ChIJ_SsUYZovdTERXLY_w4tfWro",
     "rating": "4.7 · 2K reviews",
     "note": "Big national chain, cut plus wash and face care.",
     "price": "💲 cut ~100–200k VND (~A$6–11)"
    },
    {
     "cat": "health",
     "name": "FV Hospital",
     "lat": 10.7325029,
     "lng": 106.7180068,
     "pid": "ChIJJeoQtogvdTERC5kIIDyUWrc",
     "rating": "4.1 · 2.4K reviews",
     "note": "Top international hospital, 24-hour ER, English-speaking.",
     "price": "🏥 GP consult ~1–1.5M VND (~A$57–85). 24h ER"
    },
    {
     "cat": "health",
     "name": "Saigon International (SIG)",
     "lat": 10.7672482,
     "lng": 106.6965177,
     "pid": "ChIJG9TNKj4vdTERuNMZRBNAxZo",
     "rating": "4.4 · 737 reviews",
     "note": "Closest international clinic.",
     "price": "🏥 GP consult ~500k–1M VND (~A$28–57)"
    },
    {
     "cat": "health",
     "name": "American International Hospital",
     "lat": 10.793753,
     "lng": 106.7464724,
     "pid": "ChIJHVmDxwwmdTER-DzmWwSzECA",
     "rating": "4.2 · 1.3K reviews",
     "note": "International hospital in Thủ Đức.",
     "price": "🏥 GP consult ~1–1.5M VND (~A$57–85)"
    }
   ],
   "short": "HCMC",
   "flag": "🇻🇳",
   "country": "Vietnam",
   "blurb": "Saigon, plus day trips like Vũng Tàu"
  },
  "bangkok": {
   "label": "Bangkok",
   "dates": "30 Nov – mid Dec",
   "center": [
    13.74,
    100.555
   ],
   "zoom": 13,
   "home": null,
   "places": [],
   "short": "Bangkok",
   "flag": "🇹🇭",
   "country": "Thailand",
   "blurb": "Plus Hua Hin and day trips"
  }
 }
};
