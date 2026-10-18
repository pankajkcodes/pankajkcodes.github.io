// Systems dataset & UI interactions

const systems = [
  // ==========================================
  // PERSONAL PRODUCTS (12 Apps)
  // ==========================================

  // --- STEM & Science Reference ---
  {
      id: "math-formula",
      name: "Math Formula",
      tagline: "Mathematical Formula Library & Computation Engine",
      category: "EdTech & Reference",
      type: "mobile",
      scope: "personal",
      scopeLabel: "Independent Product",
      clientDomain: "Mathematical Computation & Utilities",
      clientType: "Personal Product (Pankaj Kumar)",
      rating: 4.5,
      downloads: "23K+",
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-math-formula.webp",
      play: "https://play.google.com/store/apps/details?id=com.examtest.formula.app",
      stack: ["Flutter", "Dart", "Offline-First", "AdMob SDK", "Hive Storage"],
      problem: "Math formulas and equations are hard to look up quickly on mobile, especially in lecture halls or study areas with poor connectivity.",
      architecture: "Offline-first SQLite and Hive database with on-device LaTeX formula rendering, instant sub-50ms search across 1,000+ formulas, and low battery consumption.",
      keyFeatures: [
        "Sub-50ms instant formula search & category navigation",
        "Full offline caching with zero-network calculation support",
        "AdMob SDK mediation integration with non-intrusive placement",
        "Mathematical expression parsing with custom layout rules"
      ]
    },
  {
      id: "physics-formulas",
      name: "Physics Formulas Solve & Learn",
      tagline: "Physics Equation Directory, SI Unit Converter & Dimensional Analysis",
      category: "EdTech & Reference",
      type: "mobile",
      scope: "personal",
      scopeLabel: "Independent Product",
      clientDomain: "Scientific Reference & Education",
      clientType: "Personal Product (Pankaj Kumar)",
      rating: 4.6,
      downloads: "1K+",
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-physics.webp",
      play: "https://play.google.com/store/apps/details?id=com.examtest.physics.app",
      stack: ["Flutter", "Dart", "LaTeX Rendering", "Offline-First", "Hive Storage"],
      problem: "Memorizing hundreds of physics equations, SI unit conversions, and sign conventions is overwhelming without a structured offline lookup tool.",
      architecture: "Offline physics equation library in Flutter with on-device LaTeX formula rendering, SI unit converters, and instant local search.",
      keyFeatures: [
        "Comprehensive equation database with SI units, dimensional formulas, and constants",
        "Ray optics sign convention guides and right-hand rule visual cheatsheets",
        "Instant full-text equation search indexed locally via Hive",
        "Completely offline reference requiring zero network permissions"
      ]
    },
  {
      id: "chemistry-formula",
      name: "Chemistry Formula Offline",
      tagline: "Chemical Equation Reference, Reaction Mechanisms & Periodic Trends",
      category: "EdTech & Reference",
      type: "mobile",
      scope: "personal",
      scopeLabel: "Independent Product",
      clientDomain: "Chemical Sciences & Engineering Prep",
      clientType: "Personal Product (Pankaj Kumar)",
      rating: 4.6,
      downloads: "1K+",
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-chemistry.webp",
      play: "https://play.google.com/store/apps/details?id=com.examtest.chemistry.app",
      stack: ["Flutter", "Dart", "LaTeX Formula Engine", "Offline Database", "Hive"],
      problem: "Quick revision of organic reaction mechanisms, IUPAC naming, and periodic trends is difficult with heavy textbooks during daily study.",
      architecture: "Offline chemistry reference app in Flutter covering balanced equations, molecular weights, organic reaction mechanisms, and periodic table trends.",
      keyFeatures: [
        "High-yield Organic Chemistry named reactions with reagents and mechanisms",
        "Periodic table reference with electronegativity, atomic radius, and oxidation states",
        "Inorganic formula and salt analysis color test reference guides",
        "100% offline access with zero reliance on cloud connectivity"
      ]
    },

  // --- Competitive Exam & Academic Preparation ---
  {
      id: "ssc-gd-prep",
      name: "SSC GD Mock Test & PYQ Hindi",
      tagline: "Computer-Based Exam Simulator & Bilingual Question Bank",
      category: "EdTech & Exam Prep",
      type: "mobile",
      scope: "personal",
      scopeLabel: "Independent Product",
      clientDomain: "Competitive Exam Simulation",
      clientType: "Personal Product (Pankaj Kumar)",
      rating: 4.6,
      downloads: "2K+",
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-sscgd.webp",
      play: "https://play.google.com/store/apps/details?id=com.exam_test.sscgdexam",
      stack: ["Flutter", "Dart", "Offline-First", "SQLite", "AdMob SDK", "State Flow"],
      problem: "Aspirants in rural regions require dependable, low-connectivity tools that simulate actual government computer-based examination conditions.",
      architecture: "Faithful recreation of the official TCS-iON computer-based test (CBT) environment in Flutter. Features timed countdown controllers, color-coded question state palettes, bilingual question rendering, and instant offline scoring.",
      keyFeatures: [
        "Accurate CBT examination interface replication with section timers and negative marking",
        "Bilingual Hindi & English test banks with complete stepwise solution breakdowns",
        "Instant offline result generation with accuracy metrics across syllabus subjects",
        "Full offline functionality requiring zero active data connection during mock tests"
      ]
    },
  {
      id: "up-police-prep",
      name: "UP Police PYQ & Mock Test",
      tagline: "Police Constable CBT Exam Simulator & 10-Year Solved Papers",
      category: "EdTech & Exam Prep",
      type: "mobile",
      scope: "personal",
      scopeLabel: "Independent Product",
      clientDomain: "State Police Recruitment Prep",
      clientType: "Personal Product (Pankaj Kumar)",
      rating: 4.6,
      downloads: "1K+",
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-uppolice.webp",
      play: "https://play.google.com/store/apps/details?id=com.exam_test.up_practice",
      stack: ["Flutter", "Dart", "Offline-First", "SQLite", "AdMob SDK", "State Flow"],
      problem: "Aspirants preparing for UP Police recruitment exams lack structured offline question banks covering official 150-question (300 marks) exam patterns.",
      architecture: "Offline practice environment replicating the official UPPRPB test interface. Features timed sectional tests, UP Special GK modules, negative marking calculation, and instant scorecards with category analytics.",
      keyFeatures: [
        "10-year solved shift papers with detailed Hindi explanations",
        "Specialized UP GK (Uttar Pradesh General Knowledge) question bank",
        "Timed mock test simulator with negative marking calculation",
        "Full offline mode requiring zero mobile data during test attempts"
      ]
    },
  {
      id: "scholarship-alerts",
      name: "Scholarship Exam Info & Alerts",
      tagline: "National Scholarship Directory & Instant Eligibility Engine",
      category: "EdTech & Exam Alerts",
      type: "mobile",
      scope: "personal",
      scopeLabel: "Independent Product",
      clientDomain: "Higher Education & Gov Grants",
      clientType: "Personal Product (Pankaj Kumar)",
      rating: 4.5,
      downloads: "18K+",
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-scholarship.webp",
      play: "https://play.google.com/store/apps/details?id=com.examtest.scholarship",
      stack: ["Flutter", "Dart", "Firebase FCM", "Cloud Firestore", "AdMob SDK", "Hive Storage"],
      problem: "Students across India miss state and national scholarship deadlines due to fragmented, confusing official portals.",
      architecture: "Scholarship search and alert engine with multi-criteria eligibility filters, high-priority FCM deadline alerts, and offline Hive caching for application guides.",
      keyFeatures: [
        "Targeted multi-tier eligibility filtering across 500+ active scholarship programs",
        "High-priority FCM notification channels for impending application deadlines",
        "Offline checklist and document requirement guides with Hive local persistence",
        "Low-latency search with real-time category aggregation"
      ]
    },

  // --- FinTech & Quantitative Calculation ---
  {
      id: "candlescope",
      name: "CandleScope: AI Chart Analysis",
      tagline: "Computer Vision Candlestick Pattern Recognition & Market Scanner",
      category: "FinTech & AI",
      type: "mobile",
      scope: "personal",
      scopeLabel: "Independent Product",
      clientDomain: "FinTech & Technical Analysis",
      clientType: "Personal Product (Pankaj Kumar)",
      rating: 4.6,
      downloads: "1K+",
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-candlescope.webp",
      play: "https://play.google.com/store/apps/details?id=com.ai.chart.analysisapp",
      stack: ["Flutter", "Dart", "Computer Vision AI", "CustomPainter", "Hive Storage", "REST APIs"],
      problem: "Retail traders struggle to quickly identify multi-candle formations and key support/resistance zones during fast-moving market volatility.",
      architecture: "Technical analysis tool combining on-device computer vision with CustomPainter overlays to scan chart screenshots for 30+ candlestick patterns with automated risk-to-reward metrics.",
      keyFeatures: [
        "On-device visual pattern detection pipeline for 30+ technical candlestick patterns",
        "Interactive CustomPainter HUD overlay highlighting entry, stop-loss, and target levels",
        "Automated risk-to-reward calculator and position sizing simulator",
        "Offline visual trading glossary and historical pattern reliability metrics"
      ]
    },
  {
      id: "emi-calculator",
      name: "EMI Calculator Loan & Interest",
      tagline: "Financial Computation Engine, Loan Comparison & Amortization Schedules",
      category: "FinTech & Utilities",
      type: "mobile",
      scope: "personal",
      scopeLabel: "Independent Product",
      clientDomain: "Financial Mathematics & Banking",
      clientType: "Personal Product (Pankaj Kumar)",
      rating: 4.6,
      downloads: "1K+",
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-emicalc.webp",
      play: "https://play.google.com/store/apps/details?id=com.finance.emical.app",
      stack: ["Flutter", "Dart", "fl_chart", "Mathematical Algorithms", "Hive Storage"],
      problem: "Borrowers find it difficult to visualize total interest outflow, prepayment impacts, and comparative terms across different loans.",
      architecture: "Pure Dart financial computation engine. Generates interactive amortization charts with fl_chart, side-by-side loan comparisons, and instant PDF schedules in under 10ms.",
      keyFeatures: [
        "Sub-10ms calculation of monthly EMI, total interest, and gross payback amount",
        "Interactive amortization schedule showing monthly principal vs interest split",
        "Dual-loan comparison tool for evaluating interest rate and tenure variations",
        "Instant PDF export of complete repayment schedules for bank negotiation"
      ]
    },
  {
      id: "typing-coach",
      name: "Typing Coach: Speed Test",
      tagline: "Govt Exam Typing Simulator & Real-Time WPM Accuracy Telemetry",
      category: "EdTech & Skill Prep",
      type: "mobile",
      scope: "personal",
      scopeLabel: "Independent Product",
      clientDomain: "Typing Examination Simulation",
      clientType: "Personal Product (Pankaj Kumar)",
      rating: 4.6,
      downloads: "1K+",
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-typingcoach.webp",
      play: "https://play.google.com/store/apps/details?id=com.examtest.typingcoach",
      stack: ["Flutter", "Dart", "Hardware Keyboard Interop", "Real-Time Telemetry"],
      problem: "Candidates preparing for official government typing examinations lack mobile practice tools that support external hardware keyboards and official net speed formulas.",
      architecture: "On-device typing skill simulator supporting USB/OTG physical keyboards. Computes real-time WPM, net accuracy, and error penalties according to official exam rubrics.",
      keyFeatures: [
        "Official government typing exam rubric simulation (backspace penalties & net speed)",
        "Bilingual English and Hindi (Mangal & Kruti Dev font) typing passages",
        "Physical USB/Bluetooth keyboard input support via native Flutter key events",
        "Step-by-step keystroke error heatmap identifying character bottleneck keys"
      ]
    },

  // --- Health, Productivity & Daily Utilities ---
  {
      id: "nutribite",
      name: "NutriBite: Protein & Calorie",
      tagline: "Low-Friction Macronutrient Tracker & Daily Caloric Counter",
      category: "HealthTech & Utilities",
      type: "mobile",
      scope: "personal",
      scopeLabel: "Independent Product",
      clientDomain: "HealthTech & Nutrition Tracking",
      clientType: "Personal Product (Pankaj Kumar)",
      rating: 4.6,
      downloads: "1K+",
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-nutribite.webp",
      play: "https://play.google.com/store/apps/details?id=com.m.nutrition.tracker.app",
      stack: ["Flutter", "Dart", "SQLite", "fl_chart", "Hydration Alarms"],
      problem: "Fitness enthusiasts abandon calorie tracking apps because logging meals requires too many taps, complex weighing, and mandatory cloud logins.",
      architecture: "Two-tap meal logging app using local SQLite storage. Features reactive progress rings, daily hydration reminders, and complete offline privacy.",
      keyFeatures: [
        "Rapid 2-tap food and macro logging with custom favorite presets",
        "Daily protein, carb, and fat distribution target visualizations",
        "100% on-device data persistence ensuring biometric and health privacy",
        "Hydration reminder scheduling using localized device notifications"
      ]
    },
  {
      id: "biodata-maker",
      name: "Biodata Maker for Marriage",
      tagline: "Custom Matrimonial Profile Builder & High-Res PDF Generator",
      category: "Productivity & Utilities",
      type: "mobile",
      scope: "personal",
      scopeLabel: "Independent Product",
      clientDomain: "Matrimonial Document Generation",
      clientType: "Personal Product (Pankaj Kumar)",
      rating: 4.6,
      downloads: "1K+",
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-biodata.webp",
      play: "https://play.google.com/store/apps/details?id=com.m.biodatamaker.app",
      stack: ["Flutter", "Dart", "PDF Generation", "Custom Themes", "Hive Storage"],
      problem: "Users struggle to format professional matrimonial biodatas on mobile without expensive desktop software or complicated word processors.",
      architecture: "Offline document rendering app in Flutter using custom PDF layout canvases. Supports multi-language fields, custom themes, and vector PDF export without cloud upload.",
      keyFeatures: [
        "Instant vector PDF generation with customized typography and borders",
        "10+ professional matrimonial templates tailored for different communities",
        "100% offline data entry ensuring personal and family details remain private",
        "Instant WhatsApp and email PDF sharing via native platform intent channels"
      ]
    },
  {
      id: "quotes-maker",
      name: "Quotes with picture | Maker",
      tagline: "Visual Typography Studio & Social Graphic Rendering Engine",
      category: "Media & Creative Tools",
      type: "mobile",
      scope: "personal",
      scopeLabel: "Independent Product",
      clientDomain: "Digital Content & Typography",
      clientType: "Personal Product (Pankaj Kumar)",
      rating: 4.6,
      downloads: "1K+",
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-quotes.webp",
      play: "https://play.google.com/store/apps/details?id=com.lifequotes.motivational.app",
      stack: ["Flutter", "Dart", "CustomPainter", "RepaintBoundary", "Image Processing"],
      problem: "Content creators need a lightweight mobile tool to overlay elegant typography onto curated photos without complex design apps or watermarks.",
      architecture: "Typography graphic editor using Flutter CustomPainter and RepaintBoundary. Features 60 FPS canvas rendering, custom font styling, and lossless PNG export.",
      keyFeatures: [
        "Multi-layer canvas editor with real-time text scaling, shadow, and font styling",
        "Lossless image rasterization with RepaintBoundary for high-res social exports",
        "Curated offline library of 2,000+ motivational and philosophical quotes",
        "Native platform sharing intent bypassing disk storage latency"
      ]
    },

  // ==========================================
  // CLIENT PRODUCTION SYSTEMS (21 Apps)
  // ==========================================

  // --- Quick Commerce & Hyperlocal Delivery ---
  {
      id: "taazacart",
      name: "TaazaCart",
      tagline: "Hyperlocal Farm-Fresh Produce & Grocery Delivery Platform",
      category: "Quick Commerce & Logistics",
      type: "mobile",
      scope: "client",
      scopeLabel: "Client Product",
      clientDomain: "Quick Commerce & Grocery Supply Chain",
      clientType: "Client Product (Kaatkut Pvt. Ltd.)",
      rating: 4.5,
      downloads: null,
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-taazacart.webp",
      play: "https://play.google.com/store/apps/details?id=com.taazacart.app",
      appstore: "https://apps.apple.com/in/app/taaza-it/id6770504046",
      stack: ["Flutter", "Dart", "BLoC", "REST APIs", "Razorpay", "Geolocation"],
      problem: "Urban customers wanted scheduled deliveries for farm-fresh groceries without out-of-stock cancellations or incorrect doorstep drops.",
      architecture: "Reactive grocery delivery client built with Flutter and BLoC. Features local inventory caching, GPS doorstep pin verification, and Razorpay checkout with webhook confirmation.",
      keyFeatures: [
        "Geospatial store discovery with sub-second catalog indexing",
        "Real-time cart state synchronization with quantity increment rules",
        "Multi-slot scheduled delivery engine with live rider tracking",
        "Secure digital checkout supporting UPI, NetBanking, and COD"
      ]
    },
  {
      id: "arocart",
      name: "Arocart",
      tagline: "On-Demand Grocery, Food & Daily Essentials Delivery",
      category: "Quick Commerce & Logistics",
      type: "mobile",
      scope: "client",
      scopeLabel: "Client Product",
      clientDomain: "Hyperlocal E-Commerce & Logistics",
      clientType: "Client Product (AROCART PRIVATE LIMITED)",
      rating: 4.5,
      downloads: null,
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-arocart.webp",
      play: "https://play.google.com/store/apps/details?id=com.arocart.app",
      appstore: null,
      stack: ["Flutter", "BLoC Pattern", "REST APIs", "Geolocation", "Payment Gateway"],
      problem: "Urban customers faced delayed deliveries and inaccurate local inventory when ordering daily groceries and essentials on fragmented delivery apps.",
      architecture: "On-demand delivery app in Flutter featuring local catalog search, cart persistence, geofenced store allocation, and multi-mode checkout.",
      keyFeatures: [
        "Sub-second grocery item search with category filtering & cart caching",
        "Geofenced vendor allocation ensuring hyper-local delivery fulfillment",
        "Automated cart synchronization with active stock validation",
        "Secure multi-mode checkout supporting UPI, cards, and Cash on Delivery"
      ]
    },
  {
      id: "meatbeats",
      name: "MeatBeats",
      tagline: "Hyperlocal Fresh Meat Delivery & Order Orchestration",
      category: "Hyperlocal E-Commerce",
      type: "mobile",
      scope: "client",
      scopeLabel: "Commercial Client",
      clientDomain: "Cold-Chain Hyperlocal Logistics",
      clientType: "Commercial Client Build",
      rating: null,
      downloads: null,
      status: "Production Deployment",
      icon: "assets/img/portfolio/portfolio-meatbeats.webp",
      play: null,
      stack: ["Flutter", "Node.js", "Express", "MongoDB Geospatial", "Google Maps API"],
      problem: "Perishable food delivery requires strict time windows, accurate store inventory, and hyper-local driver dispatch.",
      architecture: "Full-stack mobile client backed by Node.js microservices. Uses MongoDB geospatial queries ($nearSphere) for nearest-hub assignment, live courier GPS tracking via Google Maps, and atomic stock reservation.",
      keyFeatures: [
        "Geospatial nearest-hub assignment with real-time ETA calculation",
        "Live courier GPS tracking with smooth interpolation animations",
        "Razorpay payment gateway with automatic retry mechanism",
        "Real-time store inventory sync preventing out-of-stock orders"
      ]
    },

  // --- Food, Supply Chain & Re-Commerce ---
  {
      id: "popli-sweets",
      name: "Popli Sweets & Snacks",
      tagline: "Restaurant Pre-Ordering, Takeaway & Table Pickup Platform",
      category: "Food & Hospitality",
      type: "mobile",
      scope: "client",
      scopeLabel: "Client Product",
      clientDomain: "Restaurant Takeaway & E-Commerce",
      clientType: "Client Product (Apple App Store)",
      rating: 4.8,
      downloads: null,
      status: "App Store Release",
      icon: "assets/img/portfolio/portfolio-popli-sweets.webp",
      play: null,
      appstore: "https://apps.apple.com/in/app/popli-sweets-snacks/id6785895296",
      stack: ["Flutter", "Dart", "iOS", "State Management", "Payment Gateway"],
      problem: "Diners and takeaway customers experienced peak-hour restaurant counter queues, long wait times for freshly made sweets, and order pickup confusion.",
      architecture: "Takeaway pre-ordering app in Flutter, allowing customers to customize dishes, schedule pickup slots, and skip counter wait times with digital tokens.",
      keyFeatures: [
        "Advance takeaway scheduling with live kitchen preparation status updates",
        "Rich visual menu catalog with dish customization, portion sizing, and ingredient notes",
        "Digital takeaway token system eliminating queue wait times during rush hours",
        "Secure digital payments supporting UPI, Apple Pay, and local cards"
      ]
    },
  {
      id: "spatto",
      name: "Spatto",
      tagline: "B2B Logistics, Merchant Ordering & Regional Distribution",
      category: "Supply Chain & B2B",
      type: "mobile",
      scope: "client",
      scopeLabel: "Client Product",
      clientDomain: "B2B E-Commerce & Fleet Logistics",
      clientType: "Client Product (RSS INFOTECH PVT LTD)",
      rating: 4.5,
      downloads: null,
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-spatto.webp",
      play: "https://play.google.com/store/apps/details?id=com.spatto",
      appstore: null,
      stack: ["Flutter", "BLoC", "REST APIs", "Payment Gateway", "Hive"],
      problem: "Retail store owners and rural distributors faced supply stockouts and lack of credit transparency when purchasing wholesale FMCG stock.",
      architecture: "B2B wholesale ordering platform supporting tiered volume pricing, offline catalog caching, merchant credit ledger tracking, and delivery dispatch.",
      keyFeatures: [
        "Tiered bulk wholesale pricing engine with automated quantity discount calculation",
        "Offline catalog caching enabling shop owners to create purchase orders without internet",
        "Integrated merchant ledger tracking outstanding credit and repayment installments",
        "End-to-end dispatch notification and order tracking for warehouse shipments"
      ]
    },
  {
      id: "blank",
      name: "Blank: Live Again",
      tagline: "Automated Device Diagnostics & Smartphone Re-Commerce",
      category: "Re-Commerce Platform",
      type: "mobile",
      scope: "client",
      scopeLabel: "Enterprise Client",
      clientDomain: "Smartphone Re-Commerce & Diagnostics",
      clientType: "Enterprise Client Contract",
      rating: null,
      downloads: null,
      status: "Enterprise Client",
      icon: "assets/img/portfolio/portfolio-blank.webp",
      play: null,
      stack: ["Flutter", "Dart", "Node.js", "Express", "Razorpay SDK", "MongoDB"],
      problem: "Trade-in valuations for smartphones were slow, manual, and prone to subjective grading disputes at the counter.",
      architecture: "Automated 12-point diagnostic test suite verifying touchscreen health, sensors, microphone, and battery condition in under 60 seconds, calculating fair trade-in value with instant Razorpay payout.",
      keyFeatures: [
        "Automated 12-point hardware sensor diagnostic test suite",
        "Dynamic algorithmic valuation engine based on hardware condition",
        "Secure instant payout integration via Razorpay SDK",
        "Doorstep pickup dispatch coordination with push alerts"
      ]
    },

  // --- Real-Time Communication & Media Streaming ---
  {
      id: "vaktaa",
      name: "Vaktaa",
      tagline: "Low-Latency Realtime Audio & Social Communication",
      category: "Realtime & RTC",
      type: "realtime",
      scope: "client",
      scopeLabel: "Startup Client",
      clientDomain: "Realtime Voice & Social RTC",
      clientType: "Client Production Contract",
      rating: null,
      downloads: null,
      status: "Client Production",
      icon: "assets/img/portfolio/portfolio-vaktaa.webp",
      play: null,
      stack: ["Agora RTC", "WebSockets", "Flutter", "Node.js", "Redis"],
      problem: "Standard VoIP apps suffered from audio lag, jitter, and dropped connections on congested mobile networks.",
      architecture: "Low-latency (<120ms) multi-user voice rooms powered by Agora RTC and Redis/WebSocket signaling. Features dynamic channel tokens, acoustic echo cancellation, and adaptive bitrate scaling for weak mobile networks.",
      keyFeatures: [
        "Sub-120ms glass-to-glass audio latency across multi-user rooms",
        "Secure ephemeral token minting backend in Node.js",
        "Active speaker detection with real-time audio waveform visualizers",
        "Dual-channel background audio support using native platform channels"
      ]
    },
  {
      id: "simhasth-tv",
      name: "Simhasth TV",
      tagline: "Spiritual Tourism, Cultural Heritage & Festival Media Streaming",
      category: "Media & Live Streaming",
      type: "mobile",
      scope: "client",
      scopeLabel: "Client Product",
      clientDomain: "Cultural Heritage & Live Video",
      clientType: "Client Product (Apple App Store)",
      rating: 4.9,
      downloads: null,
      status: "App Store Release",
      icon: "assets/img/portfolio/portfolio-simhasth-tv.webp",
      play: null,
      appstore: "https://apps.apple.com/in/app/simhasth-tv/id6755063015",
      stack: ["Flutter", "HLS Video Streaming", "AVPlayer", "REST APIs", "CDN"],
      problem: "Millions of pilgrims unable to attend sacred festivals and heritage ceremonies needed buffer-free live streaming on mobile, even over congested mobile networks.",
      architecture: "Low-latency live video streaming app in Flutter using native iOS AVPlayer bindings, HLS adaptive bitrate streaming, and CDN distribution.",
      keyFeatures: [
        "Adaptive bitrate HLS video playback ensuring continuous streaming even on 3G connections",
        "Curated video catalog covering sacred festivals, Kumbh Mela rituals, and spiritual tourism",
        "Background audio playback support with lock-screen media center controls",
        "Clean, distraction-free playback interface with full-screen orientation lock"
      ]
    },
  {
      id: "viralhoga",
      name: "ViralHoga",
      tagline: "Digital Media Assets & Content Marketplace Platform",
      category: "Media & Digital Content",
      type: "mobile",
      scope: "client",
      scopeLabel: "Client Product",
      clientDomain: "Digital Media & Creator Economy",
      clientType: "Client Product (Voyage Partner)",
      rating: 4.1,
      downloads: null,
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-viralhoga.webp",
      play: "https://play.google.com/store/apps/details?id=com.viralhoga",
      stack: ["Flutter", "Dart", "Node.js", "Express.js", "MongoDB", "Cloud Storage"],
      problem: "Mobile content creators struggle to quickly preview, license, and download video assets without jumping between desktop tools.",
      architecture: "Digital media delivery app in Flutter featuring chunked media caching, streaming video previews, dynamic watermarking, and secure licensing token validation.",
      keyFeatures: [
        "Instant media catalog search with category & platform filtering",
        "Dynamic watermarked preview player with low-bandwidth optimization",
        "Automated digital asset licensing and secure high-speed downloads",
        "Creator dashboard with multi-resolution video asset delivery"
      ]
    },

  // --- Live Astrology & Spiritual Services ---
  {
      id: "bookmyastro",
      name: "BookMyAstro",
      tagline: "Real-Time Astrologer Consultation & Audio/Chat Marketplace",
      category: "Live Consulting & RTC",
      type: "realtime",
      scope: "client",
      scopeLabel: "Client Product",
      clientDomain: "Live Consultation Marketplace",
      clientType: "Client Build",
      rating: 4.0,
      downloads: null,
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-bookmyastro.webp",
      play: "https://play.google.com/store/apps/details?id=com.bookmyastro.app",
      stack: ["Flutter", "Agora RTC", "WebSockets", "Node.js", "In-App Wallet", "Firebase"],
      problem: "Consultation clients needed private 1-on-1 audio calling and encrypted chat with verified practitioners, backed by transparent per-minute wallet billing.",
      architecture: "Real-time consultation system with 1:1 voice calling via Agora RTC, encrypted WebSocket chat, atomic per-minute wallet balance deductions, and high-priority FCM call alerts.",
      keyFeatures: [
        "Sub-120ms latency 1:1 audio calling via Agora RTC engine",
        "Encrypted real-time private chat with attachment support",
        "Dynamic in-app wallet balance tracking with automated call termination",
        "Multilingual Kundli generation and verified astrologer directory"
      ]
    },
  {
      id: "jyotisuser",
      name: "Astro Mukti",
      tagline: "Vedic Astrology Consultation & Kundli Matching Platform",
      category: "Live Consulting & RTC",
      type: "realtime",
      scope: "client",
      scopeLabel: "Client Product",
      clientDomain: "Vedic Astrology & Live Advice",
      clientType: "Client Product (The Acharya Mukti)",
      rating: 4.4,
      downloads: null,
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-jyotish.webp",
      play: "https://play.google.com/store/apps/details?id=com.jyotisuser",
      stack: ["Flutter", "Dart", "Agora Audio", "Cloud Firestore", "FCM", "REST APIs"],
      problem: "Astrology seekers suffered from dropped calls on slow networks and sluggish astrological chart calculations on budget phones.",
      architecture: "Astrology consultation client with on-device planetary chart rendering, live Agora voice calling, and real-time astrologer availability tracked through Cloud Firestore.",
      keyFeatures: [
        "Real-time astrologer live status with queue position monitor",
        "High-fidelity planetary chart and Kundli rendering engine",
        "1:1 encrypted voice call bridge with background connection recovery",
        "Automated recharge packages with instant session booking"
      ]
    },
  {
      id: "astrohanumanta",
      name: "AstroHanumanta",
      tagline: "Spiritual Consultations, Puja Bookings & Religious E-Commerce",
      category: "Spiritual Services & E-Commerce",
      type: "mobile",
      scope: "client",
      scopeLabel: "Client Product",
      clientDomain: "Spiritual Consultation & Puja Marketplace",
      clientType: "Client Build",
      rating: 5.0,
      downloads: null,
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-astrohanumanta.webp",
      play: "https://play.google.com/store/apps/details?id=com.astrohanumanta.app",
      appstore: "https://apps.apple.com/in/app/astro-hanumanta/id6761292882",
      stack: ["Flutter", "Dart", "BLoC", "REST APIs", "Razorpay Escrow", "Firebase"],
      problem: "Booking authentic religious ceremonies and verified spiritual items is often fragmented across unverified local vendors with no clear pricing.",
      architecture: "Omnichannel spiritual service app in Flutter using BLoC, featuring ritual calendar scheduling, real-time puja updates, and an e-commerce catalog with Razorpay payments.",
      keyFeatures: [
        "Personalized Puja & Yagna booking engine with date picker & priest allocation",
        "E-commerce catalog for energized spiritual and religious items",
        "Direct astrologer consultation booking with appointment reminders",
        "Secure online payment gateway integration supporting UPI & cards"
      ]
    },

  // --- Emergency, Transit & Mobility Dispatch ---
  {
      id: "free-ambulance",
      name: "Free Ambulance",
      tagline: "Emergency Medical Dispatch & Fleet Geolocation",
      category: "Healthcare & Mission-Critical",
      type: "mobile",
      scope: "client",
      scopeLabel: "Mission-Critical Client",
      clientDomain: "Emergency Healthcare Fleet Dispatch",
      clientType: "Healthcare Network Contract",
      rating: null,
      downloads: null,
      status: "Live Emergency Network",
      icon: "assets/img/portfolio/portfolio-free-ambulance.webp",
      play: null,
      stack: ["Flutter", "High-Priority FCM", "Geolocation", "Cloud Firestore"],
      problem: "During medical emergencies, slow dispatch notifications and lost signals can delay life-saving care.",
      architecture: "Emergency dispatch pipeline using High-Priority FCM push notifications with wake-lock triggers, background GPS streaming, and live two-way Firestore sync between drivers and dispatchers.",
      keyFeatures: [
        "One-tap SOS dispatch routing to nearest active emergency vehicle",
        "High-priority FCM bypass for do-not-disturb and battery optimization",
        "Continuous background driver location streaming",
        "Hospital triage notification with patient preliminary status"
      ]
    },
  {
      id: "kalinga-taxi",
      name: "Kalinga Taxi",
      tagline: "On-Demand Vehicle Booking & Regional Transit Network",
      category: "Ride-Hailing & Transit",
      type: "mobile",
      scope: "client",
      scopeLabel: "Client Product",
      clientDomain: "Urban Transit & Cab Booking",
      clientType: "Client Product (Apple App Store)",
      rating: 4.8,
      downloads: null,
      status: "App Store Release",
      icon: "assets/img/portfolio/portfolio-kalinga-taxi.webp",
      play: null,
      appstore: "https://apps.apple.com/in/app/kalinga-taxi/id6758887092",
      stack: ["Flutter", "iOS (Swift)", "Google Maps API", "WebSockets", "CoreLocation"],
      problem: "Regional travelers and daily commuters often face unpredictable ride cancellations, lack of driver tracking, and surge pricing confusion.",
      architecture: "Cross-platform cab booking app with real-time driver GPS tracking, route-based upfront fare calculation, and WebSocket dispatch coordination.",
      keyFeatures: [
        "Live vehicle dispatch map with real-time driver GPS tracking and ETA calculations",
        "Dynamic upfront fare estimator preventing surge price ambiguity for passengers",
        "Native iOS CoreLocation integration optimized for minimal battery drain during rides",
        "Multi-vehicle tier selection ranging from point-to-point autos to outstation cabs"
      ]
    },
  {
      id: "bike9pro",
      name: "Bike9Pro",
      tagline: "Two-Wheeler Lifecycle, Maintenance & Parts Dispatch",
      category: "Automotive Services",
      type: "mobile",
      scope: "client",
      scopeLabel: "Commercial Client",
      clientDomain: "Automotive Maintenance & Dispatch",
      clientType: "Commercial Client Contract",
      rating: null,
      downloads: null,
      status: "Production App",
      icon: "assets/img/portfolio/portfolio-bike9pro.webp",
      play: null,
      stack: ["Flutter", "REST APIs", "Node.js", "MySQL", "Bloc Pattern"],
      problem: "Motorcycle owners lacked transparency in service history, spare parts authenticity, and doorstep mechanic scheduling.",
      architecture: "Structured with Flutter BLoC clean architecture separating UI logic from repositories. Features automated service milestone tracking, offline parts catalog caching, and SMS/push service reminders.",
      keyFeatures: [
        "Automated service milestone calculator based on vehicle mileage",
        "OEM spare parts catalog with instant availability check",
        "Doorstep mechanic booking with real-time slot reservation",
        "Digital service history booklet with invoice generation"
      ]
    },

  // --- On-Demand Services & Local Platforms ---
  {
      id: "prashant-bhardwaj-services",
      name: "Prashant Bhardwaj Services",
      tagline: "On-Demand Home Services & Technician Dispatch",
      category: "On-Demand Services",
      type: "mobile",
      scope: "client",
      scopeLabel: "Client Product",
      clientDomain: "Home Maintenance & Municipal Dispatch",
      clientType: "Client Product (Apple App Store)",
      rating: 4.7,
      downloads: null,
      status: "App Store Release",
      icon: "assets/img/portfolio/portfolio-prashant-bhardwaj.webp",
      play: null,
      appstore: "https://apps.apple.com/in/app/prashant-bhardwaj-services-app/id6756782807",
      stack: ["Flutter", "iOS (Swift)", "REST APIs", "Form Validation", "Push Notifications"],
      problem: "Homeowners needing urgent domestic repairs (electricians, plumbers, water supply) faced long phone wait times and lost service requests.",
      architecture: "Home maintenance dispatch app built in Flutter and Swift. Automatically routes repair requests to local technicians with push alerts and real-time ticket tracking.",
      keyFeatures: [
        "Structured multi-category request forms with image upload and urgent priority flags",
        "Automated backend technician routing based on municipal zone and job specialization",
        "End-to-end service milestone tracking from ticket generation to technician arrival",
        "In-app technician call trigger and user feedback rating submission"
      ]
    },
  {
      id: "xuseme",
      name: "XuseMe",
      tagline: "Location-Based Hyperlocal Vendor & Customer Service Network",
      category: "Local Services & Marketplace",
      type: "mobile",
      scope: "client",
      scopeLabel: "Client Product",
      clientDomain: "Location-Based Vendor Marketplace",
      clientType: "Client Product (RSS INFOTECH PVT LTD)",
      rating: 4.4,
      downloads: null,
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-xuseme.webp",
      play: "https://play.google.com/store/apps/details?id=com.xuseme.app",
      appstore: null,
      stack: ["Flutter", "Dart", "Google Maps SDK", "REST APIs", "FCM"],
      problem: "Local customers and neighborhood technicians lacked a direct, zero-commission way to discover, call, and negotiate on-demand services.",
      architecture: "Hyperlocal vendor discovery platform with GPS proximity matching, categorized service listings, and direct customer inquiry alerts dispatched via FCM.",
      keyFeatures: [
        "Real-time GPS proximity matching connecting users with nearby verified service providers",
        "Category-indexed service directories covering repair, maintenance, and trade labor",
        "One-tap vendor direct inquiry with instant Firebase Cloud Messaging dispatch",
        "Optimized list virtualization handling high merchant density without frame drops"
      ]
    },
  {
      id: "tg-education",
      name: "TG Education",
      tagline: "Science, Emerging Tech & Scientific Innovations Learning Platform",
      category: "EdTech & Knowledge",
      type: "mobile",
      scope: "client",
      scopeLabel: "Client Product",
      clientDomain: "Science & Emerging Technology Education",
      clientType: "Client Product (RSS INFOTECH PVT LTD)",
      rating: 4.6,
      downloads: null,
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-tgeducation.webp",
      play: "https://play.google.com/store/apps/details?id=com.tgeducation.app",
      appstore: null,
      stack: ["Flutter", "Dart", "REST APIs", "Offline Caching", "Push Notifications"],
      problem: "Following breakthroughs in AI, aerospace, and medical technology is difficult when scientific news is buried in dense journals and fragmented blogs.",
      architecture: "Educational science feed engineered with multimedia content delivery, topic exploration, offline Hive bookmarking, and low-latency API sync.",
      keyFeatures: [
        "Curated daily breakthroughs across Artificial Intelligence, space, and medical science",
        "Offline article reading with local persistent caching using Hive",
        "Topic-specific categorization with instant tag filtering and keyword search",
        "Automated push alerts for high-impact scientific discoveries and technological releases"
      ]
    },

  // --- AI Intelligence, HealthTech & Social Discovery ---
  {
      id: "ai-vitofit",
      name: "AI VITOFIT",
      tagline: "AI Workout Intelligence & Movement Telemetry",
      category: "HealthTech & AI",
      type: "realtime",
      scope: "client",
      scopeLabel: "Commercial Product",
      clientDomain: "HealthTech & Computer Vision AI",
      clientType: "Commercial Startup Contract",
      rating: null,
      downloads: null,
      status: "Production App",
      icon: "assets/img/portfolio/portfolio-ai-vitofit.webp",
      play: null,
      stack: ["Flutter", "Riverpod", "On-Device AI Models", "Firebase", "WebSockets"],
      problem: "Athletes working out at home lacked real-time form correction and rep tracking.",
      architecture: "On-device computer vision models running inside background Dart isolates to track joint angles and count exercise reps in real time, keeping the Riverpod UI rendering smoothly at 60 FPS.",
      keyFeatures: [
        "Real-time rep counting and posture alignment analysis",
        "Background isolate execution preventing camera frame dropping",
        "Personalized adaptive nutrition planning engine",
        "Encrypted cloud synchronization of health telemetry"
      ]
    },
  {
      id: "vibes-wellbeing",
      name: "Vibes: Emotional Wellbeing",
      tagline: "Empathetic Audio Consultation & Mental Wellness Platform",
      category: "Mental HealthTech",
      type: "realtime",
      scope: "client",
      scopeLabel: "Client Product",
      clientDomain: "Mental Health & Real-Time Audio",
      clientType: "Client Product (RSS INFOTECH PVT LTD)",
      rating: 4.6,
      downloads: null,
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-vibes.webp",
      play: "https://play.google.com/store/apps/details?id=vibes.user.app",
      appstore: null,
      stack: ["Flutter", "Agora RTC", "WebSockets", "Node.js", "Firebase"],
      problem: "Individuals seeking private emotional support struggled to find anonymous, non-judgmental listeners available 24/7.",
      architecture: "Private peer-to-peer audio platform using Agora RTC and WebSockets. Features anonymous aliases, per-minute wallet billing, and automated listener routing.",
      keyFeatures: [
        "Anonymous 1-on-1 crystal-clear audio sessions powered by Agora RTC",
        "Real-time listener availability matching with zero-wait automated routing",
        "In-app digital coin wallet with per-minute talk time deduction",
        "End-to-end encrypted session signaling ensuring zero listener metadata leaks"
      ]
    },
  {
      id: "gadfly",
      name: "GadFly Dating",
      tagline: "Smart Dating & Authentic Social Discovery Platform",
      category: "Social Discovery",
      type: "mobile",
      scope: "client",
      scopeLabel: "Client Product",
      clientDomain: "Social Networking & Dating",
      clientType: "Client Product (RSS INFOTECH PVT LTD)",
      rating: 4.4,
      downloads: null,
      status: "Production Store",
      icon: "assets/img/portfolio/portfolio-gadfly.webp",
      play: "https://play.google.com/store/apps/details?id=com.app.gadfly",
      appstore: null,
      stack: ["Flutter", "Dart", "Firebase", "WebSockets", "Geolocation"],
      problem: "Dating apps are overrun with superficial swiping and spam profiles, frustrating users who want shared interests and verified identity.",
      architecture: "Dating client with 60 FPS gesture-based profile decks, real-time WebSocket chat, proximity distance filters, and photo selfie verification.",
      keyFeatures: [
        "Smooth gesture-based card discovery with 60 FPS profile deck transitions",
        "Real-time bidirectional chat with read receipts, typing indicators, and media sharing",
        "Proximity-based discovery filters with fine-grained distance preference sliders",
        "Automated account verification protecting against spam and illegitimate profiles"
      ]
    }
];

let activeFilter = 'personal'; // Default to 'personal' | 'client'

function renderSystems() {
  const grid = document.getElementById('systems-grid');
  if (!grid) return;

  const filtered = systems.filter(sys => {
    if (activeFilter === 'personal') return sys.scope === 'personal';
    if (activeFilter === 'client') return sys.scope === 'client';
    return true;
  });

  // Empty state
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center text-white/50 font-mono text-sm">
        <div class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 mb-3 text-white/40">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        </div>
        <p class="text-white/70">No systems matching this specific filter.</p>
        <button type="button" id="reset-filters-btn" class="mt-3 inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 underline font-sans">
          Reset all filters to view all systems
        </button>
      </div>
    `;
    document.getElementById('reset-filters-btn')?.addEventListener('click', resetFilters);
    return;
  }

  grid.innerHTML = filtered.map(sys => {
    const isPersonal = sys.scope === 'personal';
    return `
      <article class="system-card group" data-id="${sys.id}">
        <div class="card-body flex-1 flex flex-col">
          <!-- Main Identity Block -->
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-3 min-w-0">
              <img src="${sys.icon}" 
                   alt="${sys.name} icon" 
                   width="48" 
                   height="48" 
                   loading="lazy" 
                   decoding="async" 
                   class="system-icon shrink-0" />
              <div class="min-w-0">
                <h3 class="font-display font-bold text-white text-[1.05rem] leading-tight tracking-tight group-hover:text-cyan-400 transition truncate">
                  ${sys.name}
                </h3>
                <p class="text-[11px] font-mono text-cyan-400/90 mt-1 truncate">
                  ${sys.category}
                </p>
              </div>
            </div>
            <span class="text-[10px] font-mono uppercase tracking-wider text-white/50 px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 shrink-0 self-start mt-0.5">
              ${sys.type}
            </span>
          </div>

          <!-- Tagline (Full Width, Clean Alignment) -->
          <p class="mt-3 text-xs text-white/85 font-medium leading-relaxed line-clamp-2">
            ${sys.tagline}
          </p>

          <!-- Metrics Row (Full Width, Perfectly Aligned) -->
          <div class="mt-2.5 flex items-center gap-2 text-xs font-mono text-white/70">
            ${(() => {
              if (isPersonal) {
                return `
                  <span class="text-emerald-400 font-semibold flex items-center gap-1">
                    ${sys.rating ? `${sys.rating} ★` : 'Live'}
                  </span>
                  <span class="text-white/25">·</span>
                  <span class="text-white/80">${sys.downloads}</span>
                  <span class="text-white/25">·</span>
                  <span class="text-white/60 truncate">Organic</span>
                `;
              } else {
                // Client products: zero download count
                const hasPlay = sys.play && sys.play.includes('play.google.com');
                const hasAppStore = sys.appstore && sys.appstore.includes('apps.apple.com');
                const isStoreLive = hasPlay || hasAppStore;

                return `
                  <span class="inline-flex items-center gap-1.5 ${isStoreLive ? 'text-emerald-400' : 'text-cyan-300'} font-medium">
                    <span class="w-1.5 h-1.5 rounded-full ${isStoreLive ? 'bg-emerald-400' : 'bg-cyan-400'}" aria-hidden="true"></span>
                    ${isStoreLive ? (sys.rating ? `${sys.rating} ★ Store Release` : 'Store Release') : 'Client Build'}
                  </span>
                  <span class="text-white/25">·</span>
                  <span class="text-white/80">${sys.scopeLabel || 'Client Contract'}</span>
                  <span class="text-white/25">·</span>
                  <span class="text-white/60 truncate">${sys.status || (isStoreLive ? 'Production' : 'NDA Protected')}</span>
                `;
              }
            })()}
          </div>

          <!-- Problem & Architectural Synopsis -->
          <p class="mt-3.5 text-sm text-white/75 leading-relaxed line-clamp-3 flex-1">
            ${sys.architecture}
          </p>

          <!-- Tech Stack Chips -->
          <div class="mt-3.5 flex flex-wrap gap-1.5">
            ${sys.stack.slice(0, 4).map(tech => `
              <span class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-white/80">
                ${tech}
              </span>
            `).join('')}
            ${sys.stack.length > 4 ? `
              <span class="text-[11px] font-mono px-1.5 py-0.5 rounded-md bg-white/[0.02] border border-white/5 text-white/60">
                +${sys.stack.length - 4}
              </span>
            ` : ''}
          </div>
        </div>

        <!-- Action Bar (Consistent Footer Baseline) -->
        <div class="system-card-footer">
          <button type="button" 
                  class="btn-open-specs btn-specs"
                  data-sys-id="${sys.id}">
            <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
            <span>System Specs</span>
          </button>

          ${(() => {
            const hasPlay = sys.play && sys.play.includes('play.google.com');
            const hasAppStore = sys.appstore && sys.appstore.includes('apps.apple.com');
            if (hasPlay) {
              return `
                <a href="${sys.play}" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label="View ${sys.name} on Google Play Store"
                   class="btn-ext-link">
                  <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3.6 2.3 C3.2 2.6 3 3.1 3 3.7 V20.3 C3 20.9 3.2 21.4 3.6 21.7 L13.1 12 Z" fill="#00b3ff"/>
                    <path d="M16.4 8.4 13.1 12 16.4 15.6 20.6 13.2 C21.3 12.8 21.3 11.2 20.6 10.8 Z" fill="#ffce3a"/>
                    <path d="M3.6 21.7 C3.9 21.9 4.3 21.9 4.7 21.7 L16.4 15.6 13.1 12 Z" fill="#00d96b"/>
                    <path d="M3.6 2.3 C3.9 2.1 4.3 2.1 4.7 2.3 L16.4 8.4 13.1 12 Z" fill="#ff3a44"/>
                  </svg>
                  <span>Play Store</span>
                </a>
              `;
            } else if (hasAppStore) {
              return `
                <a href="${sys.appstore}" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label="View ${sys.name} on Apple App Store"
                   class="btn-ext-link">
                  <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 7.15c.66-.8 1.11-1.92.99-3.04-.96.04-2.11.64-2.8 1.44-.61.7-.87 1.83-.99 2.97 1.07.08 2.15-.57 2.8-1.37z"/>
                  </svg>
                  <span>App Store</span>
                </a>
              `;
            } else {
              return `
                <span class="badge-nda">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true" style="width:13px;height:13px;min-width:13px;min-height:13px;flex-shrink:0;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  <span>Client NDA</span>
                </span>
              `;
            }
          })()}
        </div>
      </article>
    `;
  }).join('');

  // Specs modal triggers
  grid.querySelectorAll('.btn-open-specs').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.sysId;
      openSpecsModal(id);
    });
  });
}

function resetFilters() {
  activeFilter = 'personal';

  document.querySelectorAll('[data-filter]').forEach(b => {
    const isPersonal = b.dataset.filter === 'personal';
    b.classList.toggle('is-active', isPersonal);
    b.setAttribute('aria-pressed', isPersonal ? 'true' : 'false');
  });

  renderSystems();
}

function openSpecsModal(id) {
  const modal = document.getElementById('specs-modal');
  const sys = systems.find(s => s.id === id);
  if (!modal || !sys) return;

  const isPersonal = sys.scope === 'personal';
  const contentContainer = document.getElementById('specs-modal-content');
  if (contentContainer) {
    contentContainer.innerHTML = `
      <div class="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
        <div class="flex items-center gap-4">
          <img src="${sys.icon}" alt="${sys.name}" width="64" height="64" class="rounded-xl ring-1 ring-white/15 bg-[#12141f] object-cover system-icon" />
          <div>
            <div class="flex items-center gap-2.5 flex-wrap">
              <h2 class="text-2xl font-display font-bold text-white">${sys.name}</h2>
              ${isPersonal ? `
                <span class="origin-tag-personal">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true"></span>
                  Personal Product · Store Release
                </span>
              ` : `
                <span class="origin-tag-client">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400" aria-hidden="true"></span>
                  ${sys.scopeLabel} · NDA
                </span>
              `}
              <span class="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/75">
                ${sys.category}
              </span>
            </div>
            <p class="text-sm text-white/75 mt-1">${sys.tagline}</p>
          </div>
        </div>
        <button type="button" 
                id="modal-close-btn"
                aria-label="Close modal" 
                class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition border border-white/10">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>

      <div class="mt-6 space-y-6">
        <!-- Key Metrics Strip -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
            <div class="text-[11px] font-mono text-white/70 uppercase tracking-wider">Project Origin</div>
            <div class="text-sm font-bold ${isPersonal ? 'text-emerald-400' : 'text-cyan-400'} mt-1 truncate">
              ${isPersonal ? 'Personal Product' : 'Client Contract'}
            </div>
          </div>
          <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
            <div class="text-[11px] font-mono text-white/70 uppercase tracking-wider">Sector / Scope</div>
            <div class="text-sm font-bold text-white mt-1 truncate">${sys.clientDomain}</div>
          </div>
          <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
            <div class="text-[11px] font-mono text-white/70 uppercase tracking-wider">
              ${isPersonal ? 'User Traction' : 'Deployment Scope'}
            </div>
            <div class="text-sm font-bold text-emerald-400 mt-1 truncate">
              ${isPersonal
                ? `${sys.downloads} (${sys.rating} ★)`
                : (() => {
                    const hasPlay = sys.play && sys.play.includes('play.google.com');
                    const hasAppStore = sys.appstore && sys.appstore.includes('apps.apple.com');
                    if (hasPlay && hasAppStore) return 'Google Play & App Store';
                    if (hasPlay) return `Google Play ${sys.rating ? `(${sys.rating} ★)` : 'Live'}`;
                    if (hasAppStore) return `Apple App Store ${sys.rating ? `(${sys.rating} ★)` : 'Live'}`;
                    return 'Enterprise Client Delivery';
                  })()}
            </div>
          </div>
          <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
            <div class="text-[11px] font-mono text-white/70 uppercase tracking-wider">Status</div>
            <div class="text-sm font-bold text-white mt-1">${sys.status}</div>
          </div>
        </div>

        <!-- Problem & Solution -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">The Problem</h4>
          <p class="text-sm text-white/80 leading-relaxed bg-white/[0.02] p-3.5 rounded-xl border border-white/5">${sys.problem}</p>
        </div>

        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">Architecture &amp; Implementation</h4>
          <p class="text-sm text-white/80 leading-relaxed bg-white/[0.02] p-3.5 rounded-xl border border-white/5">${sys.architecture}</p>
        </div>

        <!-- Key Engineering Features -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">Key Highlights</h4>
          <ul class="space-y-2 text-sm text-white/80">
            ${sys.keyFeatures.map(f => `
              <li class="flex items-start gap-2.5">
                <span class="text-cyan-400 mt-0.5" aria-hidden="true">▹</span>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Tech Stack -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">Technologies &amp; Tools</h4>
          <div class="flex flex-wrap gap-2">
            ${sys.stack.map(tech => `
              <span class="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                ${tech}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Project Context -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-white/70 font-semibold mb-2">Project Context</h4>
          <div class="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/75 leading-relaxed">
            ${isPersonal ? `
              Built and shipped independently by Pankaj Kumar. Live in production on the Google Play Store with organic user growth and active maintenance.
            ` : `
              Built under client contract. Source code and private credentials are protected under non-disclosure agreements (NDA). System architecture and technical highlights are shown with client approval.
            `}
          </div>
        </div>

        <!-- Modal Footer Actions -->
        <div class="pt-4 border-t border-white/10 flex items-center justify-between gap-3 flex-wrap">
          ${(() => {
            const hasPlay = sys.play && sys.play.includes('play.google.com');
            const hasAppStore = sys.appstore && sys.appstore.includes('apps.apple.com');
            if (hasPlay || hasAppStore) {
              return `
                <div class="flex items-center gap-2.5 flex-wrap">
                  ${hasPlay ? `
                    <a href="${sys.play}" target="_blank" rel="noopener noreferrer" 
                       class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition min-h-[44px]">
                      <span>View on Google Play</span>
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  ` : ''}
                  ${hasAppStore ? `
                    <a href="${sys.appstore}" target="_blank" rel="noopener noreferrer" 
                       class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition border border-white/15 min-h-[44px]">
                      <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 7.15c.66-.8 1.11-1.92.99-3.04-.96.04-2.11.64-2.8 1.44-.61.7-.87 1.83-.99 2.97 1.07.08 2.15-.57 2.8-1.37z"/></svg>
                      <span>View on App Store</span>
                    </a>
                  ` : ''}
                </div>
              `;
            } else {
              return `
                <span class="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300/80 bg-cyan-500/10 border border-cyan-500/20 px-3 py-2 rounded-lg">
                  <svg width="14" height="14" class="w-3.5 h-3.5 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" style="width:14px;height:14px;flex-shrink:0;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Commercial Client Build · Code Protected by NDA
                </span>
              `;
            }
          })()}
          <button type="button" id="modal-footer-close" class="px-4 py-2 text-sm text-white/80 hover:text-white transition min-h-[44px]">
            Close
          </button>
        </div>
      </div>
    `;

    document.getElementById('modal-close-btn')?.addEventListener('click', () => modal.close());
    document.getElementById('modal-footer-close')?.addEventListener('click', () => modal.close());
  }

  document.body.style.overflow = 'hidden';
  modal.showModal();
}

document.addEventListener('DOMContentLoaded', () => {
  // Read URL query params
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const requestedFilter = urlParams.get('filter');
    const requestedApp = urlParams.get('app');

    if (requestedFilter && ['personal', 'client'].includes(requestedFilter)) {
      activeFilter = requestedFilter;
      const filterButtons = document.querySelectorAll('[data-filter]');
      filterButtons.forEach(b => {
        if (b.dataset.filter === requestedFilter) {
          b.classList.add('is-active');
          b.setAttribute('aria-pressed', 'true');
        } else {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        }
      });
    }

    renderSystems();

    if (requestedApp) {
      const target = systems.find(s => s.id === requestedApp);
      if (target) {
        setTimeout(() => openSpecsModal(requestedApp), 50);
      }
    }
  } catch (err) {
    console.error('Error handling URL params:', err);
    renderSystems();
  }

  // Filter tabs
  const filterButtons = document.querySelectorAll('[data-filter]');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');
      activeFilter = btn.dataset.filter;
      renderSystems();
    });
  });

  // Mobile drawer
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('hidden');
      mobileToggle.setAttribute('aria-expanded', !isOpen);
      mobileToggle.classList.toggle('bg-white/15');
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.classList.remove('bg-white/15');
      });
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.classList.remove('bg-white/15');
        mobileToggle.focus();
      }
    });
  }

  // Desktop nav scrollspy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#desktop-nav a[href^="#"]');
  if (sections.length && navLinks.length) {
    const navIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('text-white', 'bg-white/10');
              link.classList.remove('text-white/70');
            } else {
              link.classList.remove('text-white', 'bg-white/10');
              link.classList.add('text-white/70');
            }
          });
        }
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    sections.forEach(s => navIo.observe(s));
  }

  // Copy email
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('pankajkcodes@gmail.com').then(() => {
        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = `
          <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span class="text-emerald-400">Copied to Clipboard!</span>
        `;
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
        }, 2500);
      }).catch(() => {});
    });
  }

  // Backdrop click
  const modal = document.getElementById('specs-modal');
  if (modal) {
    modal.addEventListener('close', () => {
      document.body.style.overflow = '';
    });
    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height
        && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
      if (!isInDialog) {
        modal.close();
      }
    });
  }

  // Current year
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Auto-open modal or scroll to target
  const urlParams = new URLSearchParams(window.location.search);
  const sysId = urlParams.get('id');
  if (sysId) {
    openSpecsModal(sysId);
  }
  const jumpTo = urlParams.get('jump');
  if (jumpTo) {
    const el = document.getElementById(jumpTo);
    if (el) {
      el.scrollIntoView({ behavior: 'instant' });
      window.scrollTo(0, el.offsetTop);
    }
  }
});
