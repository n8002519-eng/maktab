/**
 * O'zbekiston Tarixiy Joylari - Asosiy JavaScript kodi
 * Maktab loyihasi uchun toza Vanilla JS
 */

// ==========================================================================
// 1. TARIXIY JOYLAR MA'LUMOTLAR BAZASI (ARRAY)
// ==========================================================================
const LANDMARKS_DATA = [
  {
    id: "registon",
    name: "Registon maydoni",
    city: "Samarqand",
    period: "XV – XVII asrlar",
    shortDesc: "Sharq me'morchiligining eng buyuk yodgorliklaridan biri bo'lib, uchta ulug'vor madrasa — Ulug'bek, Sherdor va Tillakoridan tashkil topgan markaziy maydon.",
    fullDesc: "Registon — qadimiy Samarqand shahrining yuragi hisoblanadi. Maydon dastlab bozor va hunarmandchilik markazi bo'lgan, keyinchalik Mirzo Ulug'bek davrida ilm-fan va madaniyat markaziga aylantirilgan. Maydondagi Ulug'bek madrasasi (1417–1420), Sherdor madrasasi (1619–1636) va Tillakori madrasasi (1646–1660) o'zaro mukammal me'moriy ansambl hosil qiladi.",
    architecture: "Muazzam peshtoqlar, nafis koshinlar, zangori gumbazlar va oltin suvi yuritilgan koshin bezaklar (Tillakori nomi shundan olingan).",
    funFact: "Sherdor madrasasi peshtoqida quyosh ortidagi sher va kiyik tasviri tushirilgan bo'lib, bu Sharq islom me'morchiligida tirik jonivorlar tasviri kam uchrashi nuqtai nazaridan noyob sanaladi.",
    badge: "🏛️ Ansambl",
    themeGradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #0f172a 100%)",
    icon: "🏛️"
  },
  {
    id: "shohi-zinda",
    name: "Shohi Zinda majmuasi",
    city: "Samarqand",
    period: "XI – XIX asrlar",
    shortDesc: "Moviy va feruza koshinlar bilan bezatilgan qadimiy maqbaralar xiyoboni. Bu yerda Temuriylar sulolasi vakillari va mashhur sarkardalar dafn etilgan.",
    fullDesc: "Shohi Zinda ('Tirik shoh') — Samarqanddagi eng sirli va maftunkor ziyoratgohlardan biridir. Majmua markazida payg'ambarimiz Muhammad (s.a.v.)ning amakivachchalari Qusam ibn Abbos dafn etilgan deb ishoniladi. Majmua 11 dan ortiq bir-biriga tutashgan go'zal maqbaralardan iborat bo'lib, 8 asrdan ortiq vaqt mobaynida shakllangan.",
    architecture: "Noyob sirlangan koshinlar, o'yma ganchkorlik va mozaikali bezaklarning cho'qqisi hisoblanadi. Hech bir koshin nusxasi bir-birini takrorlamaydi.",
    funFact: "Majmua zinalarini sanab chiqish bo'yicha mashhur an'ana bor: zinalar soni chiqishda va tushishda bir xil chiqsa, insonning niyati tozaligiga ishora qilinadi.",
    badge: "✨ Ziyoratgoh",
    themeGradient: "linear-gradient(135deg, #0d9488 0%, #0891b2 50%, #1e1b4b 100%)",
    icon: "✨"
  },
  {
    id: "gori-amir",
    name: "Go'ri Amir maqbarasi",
    city: "Samarqand",
    period: "1404 – XV asr",
    shortDesc: "Buyuk sarkarda va davlat arbobi Sohibqiron Amir Temur hamda uning avlodlari (Ulug'bek, Shohrux, Mironshoh) mangu orom topgan daxma.",
    fullDesc: "Dastlab Amir Temurning sevimli nabirasi Muhammad Sulton vafotidan so'ng unga atab qurilgan. Keyinchalik 1405-yilda Amir Temur vafot etgach, u ham shu maqbaraga dafn etildi. Maqbaraning 64 qobirg'ali moviy gumbazi uzoq masofalardan ham yaqqol ko'zga tashlanadi.",
    architecture: "Moviy gofrirovka qilingan gumbaz, baland silindrik poygumbaz, ichki bezaklarda oltin suvi va quyuq ko'k bo'yoqlardan foydalanilgan hashamatli naqshlar.",
    funFact: "Amir Temurning qabri ustidagi tosh quyuq yashil rangli nefrit toshidan yasalgan bo'lib, u Mo'g'ulistondan keltirilgan tarixiy yodgorlikdir.",
    badge: "👑 Maqbara",
    themeGradient: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #1e1b4b 100%)",
    icon: "👑"
  },
  {
    id: "bibixonim",
    name: "Bibixonim masjidi",
    city: "Samarqand",
    period: "1399 – 1404 yillar",
    shortDesc: "Amir Temur Hindiston yurishidagi g'alabasidan so'ng bunyod ettirgan o'z davrining eng ulkan va mahobatli jome masjidi.",
    fullDesc: "Masjid qurilishida 500 dan ortiq tosh yo'nuvchi va Sharqning eng mohir ustalari qatnashgan, toshlarni tashish uchun esa Hindistondan 95 ta jangovar fil keltirilgan. Masjid o'z davrida butun Islom olamidagi eng yirik ibodatxonalardan biri bo'lgan.",
    architecture: "Balandligi 40 metrdan ortiq bo'lgan ulkan kirish peshtog'i, marmar ustunlar va zangori koshinli gumbaz.",
    funFact: "Masjid hovlisida Mirzo Ulug'bek tomonidan o'rnatilgan ulkan marmar lavh (Qur'oni Karim qo'yiladigan kursi) bugungi kunda ham saqlanib qolgan.",
    badge: "🕌 Jome masjidi",
    themeGradient: "linear-gradient(135deg, #0369a1 0%, #0284c7 50%, #312e81 100%)",
    icon: "🕌"
  },
  {
    id: "poyi-kalon",
    name: "Poyi Kalon ansambli",
    city: "Buxoro",
    period: "XII – XVI asrlar",
    shortDesc: "Buxoroning bosh me'moriy ramzi bo'lib, Minorai Kalon, Kalon masjidi va Mir Arab madrasasini o'z ichiga olgan qadimiy maydon.",
    fullDesc: "Poyi Kalon so'zi 'Ulug' poygoh' degan ma'noni anglatadi. Markazda qad rostlagan Minorai Kalon 1127-yilda Qoraxoniylar hukmdori Arslonxon tomonidan pishiq g'ishtdan qurilgan. U 900 yildan ortiq vaqt davomida zilzilalar va Chingizxon bosqinidan omon qolgan kam sonli yodgorliklardan biridir.",
    architecture: "G'isht terishning o'nlab betakror uslublari, qolipaki bezaklar, geometrik shakllar va 46 metr balandlikka ega qadimiy minora.",
    funFact: "Chingizxon Buxoroni bosib olib shaharni yondirganda, Minorai Kalonning mahobatidan hayratga tushib, faqatgina uni buzmaslikka buyruq bergan.",
    badge: "🗼 Ansambl",
    themeGradient: "linear-gradient(135deg, #b45309 0%, #d97706 50%, #451a03 100%)",
    icon: "🗼"
  },
  {
    id: "ark-qalasi",
    name: "Ark qal'asi",
    city: "Buxoro",
    period: "V – XX asr boshlari",
    shortDesc: "Buxoro amirlarining qariyb 1500 yillik tarixga ega mustahkam qarorgohi va davlatchilik ramzi bo'lgan mahobatli saroy-qal'a.",
    fullDesc: "Ark baland tepalik ustiga qurilgan haqiqiy 'shahar ichidagi shahar'dir. Qal'a ichida amir saroyi, taxt xonasi, zarbxona, zargarlik ustaxonalari, jome masjidi, qurol-aslaha omborlari va amaldorlar xonalari joylashgan bo'lgan. Qadimiy afsonalarga ko'ra, qal'a poydevori Siyovush tomonidan qo'yilgan.",
    architecture: "Baland va egri chiziqli qalin mudofaa devorlari, ikki minorali ulkan yog'och darvoza va osma ko'prik yo'lagi.",
    funFact: "Qal'a ichidagi kutubxonada Abu Ali ibn Sino, Rudakiy va Firdavsiy kabi buyuk allomalar ilmiy tadqiqotlar bilan shug'ullanishgan.",
    badge: "🏰 Qal'a",
    themeGradient: "linear-gradient(135deg, #9a3412 0%, #c2410c 50%, #431407 100%)",
    icon: "🏰"
  },
  {
    id: "chor-minor",
    name: "Chor Minor madrasasi",
    city: "Buxoro",
    period: "1807-yil",
    shortDesc: "To'rtta har xil bezakli minoraga ega bo'lgan noyob me'moriy yodgorlik. Boy savdogar Xalifa Niyozqul mablag'iga qurilgan.",
    fullDesc: "Chor Minor ('To'rt minora') — o'zining ixcham va noodatiy tuzilishi bilan Buxoroning eng mashhur binolaridan biridir. Bino aslida katta madrasaning darvozaxonasi (darvazasi) vazifasini bajargan bo'lib, to'rtta burchagida mustaqil gumbazli minoralar qad rostlagan.",
    architecture: "Markaziy gumbazli ikki qavatli xona va to'rt burchakdagi moviy gumbazli minoralar. Har bir minora o'ziga xos geometrik naqsh bilan ziynatlangan.",
    funFact: "Rivoyatlarga ko'ra, to'rtta minora bezagi dunyodagi to'rtta yirik madaniyat va din ramzlarini o'zida uyg'unlashtirgan degan tushuncha mavjud.",
    badge: "🕌 Madrasa",
    themeGradient: "linear-gradient(135deg, #047857 0%, #059669 50%, #064e3b 100%)",
    icon: "🕌"
  },
  {
    id: "ichan-qala",
    name: "Ichan Qal'a qo'riqxonasi",
    city: "Xiva",
    period: "XIV – XX asrlar",
    shortDesc: "O'rta Osiyoda yaxlit saqlanib qolgan ochiq osmon ostidagi shahar-muzey. YUNESKO Butunjahon merosiga kiritilgan birinchi mintaqaviy obida.",
    fullDesc: "Ichan Qal'a — Xivaning ichki shahar qismi bo'lib, baland paxsa devorlar bilan o'ralgan. Uning ichida 50 dan ortiq qadimiy tarixiy yodgorliklar va 250 dan ortiq qadimiy turar joylar jamlangan. Shahar ichida Kalta Minor, Juma masjidi, Ko'hna Ark va Toshhovli kabi mo''jizalar saqlanadi.",
    architecture: "Loy va xom gishtdan ishlangan qalin mudofaa devorlari, o'ymakor yog'och ustunlar, xorazmcha feruza mayolika bezaklari.",
    funFact: "Ichan Qal'a 1990-yilda Butunjahon merosi ro'yxatiga kiritilgan O'rta Osiyodagi birinchi tarixiy yodgorlik hisoblanadi.",
    badge: "🏺 Ochiq muzey",
    themeGradient: "linear-gradient(135deg, #c2410c 0%, #ea580c 50%, #7c2d12 100%)",
    icon: "🏺"
  },
  {
    id: "islom-xoja",
    name: "Islom Xo'ja minorasi",
    city: "Xiva",
    period: "1908 – 1910 yillar",
    shortDesc: "Xivadagi eng baland me'moriy obida (56.6 metr). Xiva xonligi bosh vaziri Islom Xo'ja tashabbusi bilan bunyod etilgan.",
    fullDesc: "Bu minora o'zining ingichkalashib boruvchi go'zal proporsiyasi bilan ajralib turadi. Minora yuqorisida joylashgan kuzatuv maydonchasidan butun Xiva shahri va Qoraqum sahrosi kaftdek ko'rinadi. Minora yonida unga uyg'un Islom Xo'ja madrasasi ham mavjud.",
    architecture: "Yaltiroq feruza va oq koshinli halqasimon tasmalar bilan bezatilgan pishiq g'ishtli konus shaklidagi minora.",
    funFact: "Minora me'mori usta Xudoybergan Hoji bo'lib, u o'z davrida Minora balandligini Buxorodagi Minorai Kalondan ham balandroq qilib qurishga muvaffaq bo'lgan.",
    badge: "🗼 Minora",
    themeGradient: "linear-gradient(135deg, #0e7490 0%, #06b6d4 50%, #164e63 100%)",
    icon: "🗼"
  },
  {
    id: "hazrati-imom",
    name: "Hazrati Imom (Hastimom)",
    city: "Toshkent",
    period: "XVI – XXI asrlar",
    shortDesc: "Toshkentning eng yirik diniy va madaniy majmuasi. Bu yerda dunyodagi eng qadimiy kitoblardan biri — Hazrati Usmon Qur'oni saqlanadi.",
    fullDesc: "Majmua Toshkentning dastlabki imomi va buyuk olim Abu Bakr Muhammad Qaffol Shoshiy sharafiga bunyod etilgan. Majmua tarkibiga Qaffol Shoshiy maqbarasi, Baraqxon madrasasi, Mo'yi Muborak madrasasi va yangi hashamatli Hazrati Imom jome masjidi kiradi.",
    architecture: "Milliy yog'och o'ymakorligi an'analari asosida ishlangan sandal yog'ochli ustunlar, ikki moviy gumbaz va moviy koshinlar.",
    funFact: "Mo'yi Muborak madrasasida saqlanayotgan VII asrga oid kiyik terisiga yozilgan Usmon Qur'oni (Mushafi Usmon) YUNESKO 'Jahon xotirasi' ro'yxatiga kiritilgan.",
    badge: "📜 Madaniy meros",
    themeGradient: "linear-gradient(135deg, #15803d 0%, #16a34a 50%, #14532d 100%)",
    icon: "📜"
  }
];

// ==========================================================================
// 2. MINI VIKTORINA SAVOLLARI
// ==========================================================================
const QUIZ_QUESTIONS = [
  {
    question: "Samarqanddagi Registon maydonida dastlab qaysi buyuk alloma va hukmdor davrida birinchi madrasa qurilgan?",
    options: [
      "Amir Temur",
      "Mirzo Ulug'bek",
      "Alisher Navoiy",
      "Zahiriddin Muhammad Bobur"
    ],
    correctIndex: 1,
    explanation: "Registon maydonidagi dastlabki va eng qadimiy madrasa 1417–1420 yillarda buyuk munajjim va hukmdor Mirzo Ulug'bek tomonidan barpo etilgan."
  },
  {
    question: "YUNESKO Butunjahon madaniy merosi ro'yxatiga O'rta Osiyoda birinchi bo'lib kiritilgan shahar-qal'a qaysi?",
    options: [
      "Ichan Qal'a (Xiva)",
      "Ark qal'asi (Buxoro)",
      "Afrosiyob (Samarqand)",
      "Varaxsha shaharchasi"
    ],
    correctIndex: 0,
    explanation: "Xivadagi Ichan Qal'a 1990-yilda O'rta Osiyo mintaqasida birinchi bo'lib YUNESKO ro'yxatiga kiritilgan."
  },
  {
    question: "Buxoroda joylashgan va to'rtta bir-biridan farq qiluvchi naqshli minoralarga ega mashhur bino qaysi?",
    options: [
      "Minorai Kalon",
      "Chor Minor madrasasi",
      "Ismoil Somoniy maqbarasi",
      "Vobkent minorasi"
    ],
    correctIndex: 1,
    explanation: "Chor Minor madrasasi 1807-yilda Xalifa Niyozqul tomonidan to'rtta moviy gumbazli minoralar bilan barpo etilgan."
  },
  {
    question: "Samarqanddagi muazzam Go'ri Amir maqbarasida qaysi buyuk davlat arbobi dafn etilgan?",
    options: [
      "Jaloliddin Manguberdi",
      "Amir Temur",
      "Abu Rayhon Beruniy",
      "Al-Xorazmiy"
    ],
    correctIndex: 1,
    explanation: "Go'ri Amir maqbarasida Sohibqiron Amir Temur, uning o'g'illari Shohrux va Mironshoh, suyukli nabirasi Mirzo Ulug'bek dafn etilgan."
  },
  {
    question: "Toshkentdagi Hazrati Imom majmuasida saqlanayotgan VII asrga oid jahon ahamiyatidagi noyob yodgorlik nima?",
    options: [
      "Amir Temur tuzuklari asl qo'lyozmasi",
      "Hazrati Usmon Mushafi (Qur'oni)",
      "Boburnoma miniatyuralari to'plami",
      "Al-Farg'oniy astrolyabiyasi"
    ],
    correctIndex: 1,
    explanation: "Mo'yi Muborak muzey-kutubxonasida VII asrga oid, xalifa Usmon davrida kiyik terisiga bitilgan qadimiy Qur'oni Karim nusxasi saqlanmoqda."
  }
];

// ==========================================================================
// 3. ILOVANING HOLATI (STATE)
// ==========================================================================
let currentCityFilter = "all";
let currentSearchQuery = "";
let currentQuizIndex = 0;
let userScore = 0;
let quizAnswered = false;

// DOM elementlari
const galleryGrid = document.getElementById("galleryGrid");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const filterButtons = document.querySelectorAll(".filter-btn");
const cardsCountEl = document.getElementById("cardsCount");
const noResultsEl = document.getElementById("noResults");

// Modal elementlari
const landmarkModal = document.getElementById("landmarkModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalCity = document.getElementById("modalCity");
const modalPeriod = document.getElementById("modalPeriod");
const modalBadge = document.getElementById("modalBadge");
const modalDesc = document.getElementById("modalDesc");
const modalArch = document.getElementById("modalArch");
const modalFact = document.getElementById("modalFact");
const modalHeaderBg = document.getElementById("modalHeaderBg");
const modalIcon = document.getElementById("modalIcon");

// Viktorina elementlari
const quizCard = document.getElementById("quizCard");
const quizQuestionText = document.getElementById("quizQuestionText");
const quizOptionsContainer = document.getElementById("quizOptionsContainer");
const quizCurrentNum = document.getElementById("quizCurrentNum");
const quizTotalNum = document.getElementById("quizTotalNum");
const quizProgressBar = document.getElementById("quizProgressBar");
const quizFeedback = document.getElementById("quizFeedback");
const quizNextBtn = document.getElementById("quizNextBtn");
const quizResultBox = document.getElementById("quizResultBox");
const quizScoreText = document.getElementById("quizScoreText");
const quizResultBadge = document.getElementById("quizResultBadge");
const quizRestartBtn = document.getElementById("quizRestartBtn");

// Mavzu (Dark/Light) tugmasi
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = document.getElementById("themeIcon");

// Mobil menyu
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

// ==========================================================================
// 4. TUNGI / KUNDUZGI REJIM FUNKSIYALARI
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem("ozb_history_theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeIcon.textContent = "☀️";
    themeToggleBtn.setAttribute("aria-label", "Kunduzgi rejimga o'tish");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeIcon.textContent = "🌙";
    themeToggleBtn.setAttribute("aria-label", "Tungi rejimga o'tish");
  }
}

themeToggleBtn.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("ozb_history_theme", "light");
    themeIcon.textContent = "🌙";
    themeToggleBtn.setAttribute("aria-label", "Tungi rejimga o'tish");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("ozb_history_theme", "dark");
    themeIcon.textContent = "☀️";
    themeToggleBtn.setAttribute("aria-label", "Kunduzgi rejimga o'tish");
  }
});

// ==========================================================================
// 5. GALEREYANI CHIZISH VA FILTRLASH
// ==========================================================================
function renderLandmarks() {
  const filtered = LANDMARKS_DATA.filter(item => {
    const matchCity = currentCityFilter === "all" || item.city.toLowerCase() === currentCityFilter.toLowerCase();
    const query = currentSearchQuery.trim().toLowerCase();
    
    if (!query) return matchCity;

    const matchText = 
      item.name.toLowerCase().includes(query) ||
      item.city.toLowerCase().includes(query) ||
      item.period.toLowerCase().includes(query) ||
      item.shortDesc.toLowerCase().includes(query) ||
      item.fullDesc.toLowerCase().includes(query);

    return matchCity && matchText;
  });

  galleryGrid.innerHTML = "";

  if (filtered.length === 0) {
    noResultsEl.classList.remove("hidden");
    cardsCountEl.textContent = "0 ta joy topildi";
    return;
  }

  noResultsEl.classList.add("hidden");
  cardsCountEl.textContent = `${filtered.length} ta tarixiy obida ko'rsatilmoqda`;

  filtered.forEach(item => {
    const card = document.createElement("article");
    card.className = "landmark-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${item.name}, ${item.city}. Batafsil bilish uchun bosing.`);

    card.innerHTML = `
      <div class="card-visual" style="background: ${item.themeGradient}">
        <span class="card-icon" aria-hidden="true">${item.icon}</span>
        <span class="card-badge">${item.badge}</span>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="meta-city">📍 ${item.city}</span>
          <span class="meta-period">⏳ ${item.period}</span>
        </div>
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${item.shortDesc}</p>
        <div class="card-footer">
          <span class="read-more-link">
            Batafsil ma'lumot
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    `;

    // Bosilganda modal oynani ochish
    card.addEventListener("click", () => openModal(item));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(item);
      }
    });

    galleryGrid.appendChild(card);
  });
}

// Filtr tugmalari hodisasi
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCityFilter = btn.getAttribute("data-city");
    renderLandmarks();
  });
});

// Qidiruv input hodisasi
searchInput.addEventListener("input", (e) => {
  currentSearchQuery = e.target.value;
  if (currentSearchQuery.length > 0) {
    clearSearchBtn.classList.remove("hidden");
  } else {
    clearSearchBtn.classList.add("hidden");
  }
  renderLandmarks();
});

// Qidiruvni tozalash tugmasi
clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  currentSearchQuery = "";
  clearSearchBtn.classList.add("hidden");
  searchInput.focus();
  renderLandmarks();
});

// ==========================================================================
// 6. MODAL OYNA BOSHQARUVI
// ==========================================================================
let lastFocusedElement = null;

function openModal(item) {
  lastFocusedElement = document.activeElement;

  modalTitle.textContent = item.name;
  modalCity.textContent = `📍 Shahar: ${item.city}`;
  modalPeriod.textContent = `⏳ Davr: ${item.period}`;
  modalBadge.textContent = item.badge;
  modalIcon.textContent = item.icon;
  modalHeaderBg.style.background = item.themeGradient;

  modalDesc.textContent = item.fullDesc;
  modalArch.textContent = item.architecture;
  modalFact.textContent = item.funFact;

  landmarkModal.classList.remove("hidden");
  landmarkModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Orqa fon aylanishini to'xtatish

  closeModalBtn.focus();
}

function closeModal() {
  landmarkModal.classList.add("hidden");
  landmarkModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

closeModalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

// ESC tugmasi orqali yopish
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !landmarkModal.classList.contains("hidden")) {
    closeModal();
  }
});

// ==========================================================================
// 7. MINI VIKTORINA MANTIQI
// ==========================================================================
function initQuiz() {
  currentQuizIndex = 0;
  userScore = 0;
  quizTotalNum.textContent = QUIZ_QUESTIONS.length;
  quizResultBox.classList.add("hidden");
  quizCard.classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  quizAnswered = false;
  quizFeedback.classList.add("hidden");
  quizFeedback.className = "quiz-feedback hidden";
  quizFeedback.innerHTML = "";
  quizNextBtn.classList.add("hidden");

  const q = QUIZ_QUESTIONS[currentQuizIndex];
  quizCurrentNum.textContent = currentQuizIndex + 1;
  quizQuestionText.textContent = q.question;

  // Progress bar
  const progressPercent = ((currentQuizIndex) / QUIZ_QUESTIONS.length) * 100;
  quizProgressBar.style.width = `${progressPercent}%`;

  // Variantlarni chiqarish
  quizOptionsContainer.innerHTML = "";
  q.options.forEach((optText, index) => {
    const optBtn = document.createElement("button");
    optBtn.className = "quiz-option-btn";
    optBtn.type = "button";
    optBtn.innerHTML = `
      <span class="opt-prefix">${String.fromCharCode(65 + index)}</span>
      <span class="opt-text">${optText}</span>
    `;
    optBtn.addEventListener("click", () => handleSelectOption(index, optBtn));
    quizOptionsContainer.appendChild(optBtn);
  });
}

function handleSelectOption(selectedIndex, selectedBtn) {
  if (quizAnswered) return;
  quizAnswered = true;

  const q = QUIZ_QUESTIONS[currentQuizIndex];
  const allOptionBtns = quizOptionsContainer.querySelectorAll(".quiz-option-btn");

  allOptionBtns.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correctIndex) {
      btn.classList.add("correct");
    }
  });

  if (selectedIndex === q.correctIndex) {
    userScore++;
    selectedBtn.classList.add("correct");
    quizFeedback.className = "quiz-feedback feedback-correct";
    quizFeedback.innerHTML = `<strong>To'g'ri javob! 🎉</strong> ${q.explanation}`;
  } else {
    selectedBtn.classList.add("incorrect");
    quizFeedback.className = "quiz-feedback feedback-incorrect";
    quizFeedback.innerHTML = `<strong>Noto'g'ri! ❌</strong> ${q.explanation}`;
  }

  quizFeedback.classList.remove("hidden");
  quizNextBtn.classList.remove("hidden");

  // Oxirgi savol bo'lsa tugma matnini o'zgartirish
  if (currentQuizIndex === QUIZ_QUESTIONS.length - 1) {
    quizNextBtn.textContent = "Natijani ko'rish 🏆";
  } else {
    quizNextBtn.textContent = "Keyingi savol ➔";
  }
}

quizNextBtn.addEventListener("click", () => {
  if (currentQuizIndex < QUIZ_QUESTIONS.length - 1) {
    currentQuizIndex++;
    loadQuestion();
  } else {
    showQuizResults();
  }
});

function showQuizResults() {
  quizCard.classList.add("hidden");
  quizResultBox.classList.remove("hidden");
  quizProgressBar.style.width = "100%";

  quizScoreText.textContent = `${QUIZ_QUESTIONS.length} ta savoldan ${userScore} tasiga to'g'ri javob berdingiz!`;

  if (userScore === 5) {
    quizResultBadge.textContent = "🌟 A'lo natija! Siz O'zbekiston tarixi bo'yicha haqiqiy bilimdonsiz!";
    quizResultBadge.className = "quiz-result-badge badge-excellent";
  } else if (userScore >= 3) {
    quizResultBadge.textContent = "👍 Yaxshi natija! Tariximiz bo'yicha bilimlaringiz mustahkam.";
    quizResultBadge.className = "quiz-result-badge badge-good";
  } else {
    quizResultBadge.textContent = "📖 Yana ozroq o'rganing! Saytimizdagi ma'lumotlar bilan tanishib, qayta sinab ko'ring.";
    quizResultBadge.className = "quiz-result-badge badge-learn";
  }
}

quizRestartBtn.addEventListener("click", initQuiz);

// ==========================================================================
// 8. MOBIL MENYU VA SILLIQ HARAKATLANISH
// ==========================================================================
if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", () => {
    const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
    mobileMenuBtn.setAttribute("aria-expanded", !isExpanded);
    navLinks.classList.toggle("nav-open");
  });

  // Menyu havolasini bosganda menyuni yopish
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// ==========================================================================
// 9. ILOVANI ISHGA TUSHIRISH (DOM READY)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderLandmarks();
  initQuiz();
});

