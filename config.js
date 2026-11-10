/* =====================================================================
   YOUR PORTFOLIO CONTENT  —  edit this file, nothing else.
   =====================================================================
   This is the ONLY file you need to change for normal edits.
   The page reads everything below and builds itself from it.

   New here? Open the website and read the friendly "Start here" box at
   the top — it walks you through the first steps. (You can hide that box
   later: see GUIDE below.)

   How this file works:
     • Lines starting with //  are comments (notes to you). They are
       ignored by the website. You can read them or delete them.
     • Each setting looks like   key: "value",
       Change the text inside the "quotes". Keep the quotes and the
       comma at the end.
     • A 👉 EDIT marker means "this is a thing you'll probably change".

   If something breaks after an edit, you most likely deleted a quote,
   a comma, or a curly brace { }. Undo your last change and try again.
   (Tip: edit in VS Code — it's free and colours the text, so a missing
   quote is easy to spot.)
   ===================================================================== */


/* =====================================================================
   ⭐ QUICK START — edit these 6 things first (5 minutes)
   ---------------------------------------------------------------------
   1. your name ........... HERO → name
   2. your tagline ........ HERO → tagline
   3. your photo .......... ABOUT → photo  (drop a file in /assets/img)
   4. one project ......... PROJECTS → first item in the list
   5. your email .......... CONTACT → email   (and SOCIAL → mail)
   6. the accent colour ... THEME → palette   ("slate" "forest" "sunset" "violet" "rose" "ocean" "mono")
      (and try THEME → style  "soft" or "flat"  for a whole different look)

   The example content below is GENERIC on purpose — it fits anyone
   (student, designer, writer, maker, career-changer…). Replace it with
   your own. Everything already looks finished, so take your time.
   ===================================================================== */


const SITE = {

  /* ===================================================================
     ===== THEME (colours & font) =====================================
     ===================================================================
     Pick ONE palette name below. To preview another, change the word
     and refresh — OR just click the colour buttons in the "Start here"
     box on the website. Want fully custom colours? Open css/styles.css
     and edit the variables at the very top — the README shows you how. */
  theme: {
    palette: "rose",        // 👉 EDIT — colour: "slate" "forest" "sunset" "violet" "rose" "ocean" "mono"
    style: "flat",           // 👉 EDIT — the "look": "soft" (rounded, default) or "flat" (squared/editorial)
    defaultMode: "auto",     // "auto" follows the visitor's device · or force "light" / "dark"
    font: "Jetbrains Mono",          // "system" (fast, no download) or a Google Font name — see README
  },

  /* ===================================================================
     ===== GUIDE (the "Start here" help box on the website) ===========
     ===================================================================
     A friendly box at the top of your site that teaches you what to do.
     Only YOU really need it. When you're finished setting up, set
     show: false to remove it for good. (Visitors can also click ✕ to
     hide it in their own browser.) */
  guide: {
    show: false,              // 👉 EDIT — set to false when you're done setting up
  },

  /* ===================================================================
     ===== COMMUNITY  (where this template comes from) ================
     ===================================================================
     A friendly link to the portfolio community — a place to find more
     templates, get help, and share the site you build. It appears in
     the "Start here" box while you set up. Set show: false to hide it. */
  community: {
    show: false,
    label: "Portfolio Community",
    url: "https://example.com/portfolio-community",   // 👉 EDIT — the community's web address
  },

  /* ===================================================================
     ===== SITE / SEO  (how your site looks in Google & when shared) ==
     ===================================================================
     Fill these in once your site is online. The url is the address
     people will visit (you get it from GitHub Pages — see the README). */
  site: {
    url: "https://www.denzelvw.dev/",   // 👉 EDIT — your live web address
    title: "Denzel Vassallo Wright - Portfolio",              // 👉 EDIT — shows in the browser tab & Google
    description:                                          // 👉 EDIT — 1 sentence Google shows under your title
      "Welcome to my personal portfolio — my projects, my story, and how to get in touch.",
    ogImage: "assets/img/og-image.svg",   // 👉 EDIT — the picture shown when your link is shared (1200×630)
    locale: "en",                          // language code, e.g. "en", "pt", "da"
  },

  /* ===================================================================
     ===== NAVBAR  (the bar pinned to the top) ========================
     =================================================================== */
  nav: {
    brand: "DenzelVW",       // 👉 EDIT — your name or logo text (top-left)
    showThemeToggle: true,   // the light/dark switch
    showDotRail: true,       // the little dots on the right that show which section you're in (set false to hide)
    commandPalette: true,    // the quick search (press Ctrl/⌘ + K or "/") — jump anywhere, switch theme, copy email
  },

  /* ===================================================================
     ===== HERO  (the big first screen — your headline moment) ========
     =================================================================== */
  hero: {
    statusText: "Available for new opportunities",  // 👉 EDIT — e.g. "Based in your city" or "Open to freelance"
    statusOpen: true,                  // true = green dot, false = grey dot
    eyebrow: "Hi, my name is",         // the small line above your name
    name: "Denzel Vassallo Wright",                  // 👉 EDIT — your full name
    nameHighlight: "",              // part of your name to underline in the accent colour ("" for none)
    tagline:                           // 👉 EDIT — one or two sentences about you
      "Welcome to my corner of the web. I love anything Tech: Programming, Robotics, Python, Ai, the list goes on.",
    typewriter: true,                 // OPTIONAL typing animation on the name (off under reduced-motion)

    // The two buttons under your tagline. The "href" jumps to a section.
    primaryCta:   { label: "View my work", href: "#projects" },  // 👉 EDIT
    secondaryCta: { label: "About me",     href: "#about" },     // 👉 EDIT

    // "Download CV" button → put your real PDF at assets/cv.pdf (keep the name).
    // Not got a CV? Set show: false to hide the button.
    cv: { show: false, label: "Download CV", file: "assets/cv.pdf" },

    // The "At a glance" card on the right. Each row scrolls to a section.
    // icon names: user · briefcase · graduation · wrench · folder · pen · map-pin · mail
    glanceTitle: "Jump To...",
    glance: [
      { icon: "map-pin",   label: "Based in",   value: "Your City",   href: "#about" },      // 👉 EDIT
      { icon: "user",      label: "About",      value: "Who I am",    href: "#about" },      // 👉 EDIT
      { icon: "briefcase", label: "Experience", value: "My journey",  href: "#experience" }, // 👉 EDIT
      { icon: "folder",    label: "Projects",   value: "See my work", href: "#projects" },   // 👉 EDIT
    ],
  },

  /* ===================================================================
     ===== SECTION ORDER & VISIBILITY  (the "section registry") =======
     ===================================================================
     This single list controls which sections appear AND their order.
       • To HIDE a section:    change show: true  →  show: false
       • To REORDER sections:  move a whole line up or down
       • To RENAME a nav link: change the "nav" text
     The "id" must stay the same (the code matches content to it). */
  sections: [
    { id: "about",        nav: "About",        show: true  },
    { id: "now",          nav: "Now",          show: true  },  // safe to delete
    { id: "stats",        nav: "Highlights",   show: false },  // safe to delete · "by the numbers" — set true to show
    { id: "experience",   nav: "Experience",   show: true  },
    { id: "education",    nav: "Education",     show: true  },
    { id: "skills",       nav: "Skills",       show: true  },
    { id: "projects",     nav: "Projects",     show: true  },
    { id: "gallery",      nav: "Gallery",      show: true  },  // safe to delete · photo grid
    { id: "writing",      nav: "Writing",      show: true  },  // safe to delete
    { id: "testimonials", nav: "References",   show: true  },  // safe to delete
    { id: "contact",      nav: "Contact",      show: true  },
  ],

  /* ===================================================================
     ===== ABOUT ======================================================
     =================================================================== */
  about: {
    intro: "A little about me",                 // the short line under the section title
    photo: "assets/img/portrait.svg",           // 👉 EDIT — your photo (square works best, ~600×600)
    photoAlt: "A photo of me, hi :)",            // 👉 EDIT — describe the photo (for screen readers)
    // Each item in this list becomes a paragraph. Write a few genuine
    // sentences about yourself. Add or remove paragraphs freely.
    paragraphs: [
      "Hello there! I'm Denzel! I'm a computer geek who loves anything tech, cute animals (Honorable mention: Guinea Pigs) and learning new things!",
      "I love experimenting and messing around with things like linux, self hosting interesting programs, and have an interest in projects that combine hardware and software to create something special and innovative.",
      "Thanks for reading!.",
    ],
    interests: ["Cybersecurity", "Programming", "Linux", "Self-Hosting", "Networking", "Databases", "Hardware", "Electronics", "3D Printing", "Gaming", "Automation", "Open Source", "Raspberry Pi", "Homelabbing"], // 👉 EDIT — your tag chips
    // Optional quick facts. Delete a line to hide it, or set quickFacts: [] to hide all.
    quickFacts: [
      { label: "Location",  value: "Ħad-Dingli, Malta" },  // 👉 EDIT
      { label: "Languages", value: "English, Maltese" },             // 👉 EDIT
      { label: "Email",     value: "denvass2020@gmail.com" },   // 👉 EDIT
    ],
  },

  /* ===================================================================
     ===== NOW  (what you're up to right now) — safe to delete ========
     ===================================================================
     A friendly "currently" list. icon names: wrench · pen · folder · user */
  now: {
    intro: "What I'm up to right now",
    items: [
      { icon: "folder", text: "Building random projects with Python, SQL, and whatever else catches my interest." },
      { icon: "pen", text: "Studying Computer Systems and Networks at MCAST, learning something new every day." },
      { icon: "wrench", text: "Tinkering with Linux servers, self-hosted services, and my homelab (and occasionally breaking things)." },
      { icon: "user", text: "Exploring cybersecurity and working towards turning my passion for tech into a career." },
    ],
  },

  /* ===================================================================
     ===== HIGHLIGHTS / STATS  ("by the numbers") — safe to delete ====
     ===================================================================
     A row of big numbers that gently count up when scrolled into view.
     OFF by default — set the "stats" line in the section list above to
     show: true to switch it on.
       value · any text — "5+", "100%", "30"
       label · what the number means */
/*  stats: {
    intro: "A few highlights",
    items: [
      { value: "5+",   label: "Years doing what I love" }, // 👉 EDIT
      { value: "30",   label: "Projects completed" },      // 👉 EDIT
      { value: "12",   label: "Happy collaborators" },     // 👉 EDIT
      { value: "100%", label: "Made with care" },          // 👉 EDIT
    ],
  }, /*

  /* ===================================================================
     ===== EXPERIENCE  (your history — a timeline) ====================
     ===================================================================
     This works for ANY field — jobs, internships, volunteering, clubs.
     Copy a whole { ... } block to add another entry. Each block:
       title  · your role / position
       org    · the place (company, school, group…)
       dates  · any text, e.g. "2022 — Present"
       logo   · OPTIONAL small image path, or "" for none
       bullets· 1–3 short lines about what you did (a list) */


  experience: {
    intro: "Where I've spent my time",
    items: [
      {
        title: "Advanced Diploma in IT (Computer Systems and Networks)",
        org: "MCAST",
        dates: "2026 — Present",
        logo: "",
        bullets: [
          "Studying networking, programming, databases, and computer systems.",
          "Developing practical skills through coursework and hands-on projects.",
          "Working towards pursuing a degree in cybersecurity.",
        ],
      },
      {
        title: "Homelab & Self-Hosting Enthusiast",
        org: "Personal Projects",
        dates: "Ongoing",
        logo: "",
        bullets: [
          "Managing Linux servers and Raspberry Pi devices.",
          "Deploying and maintaining services using Docker and Portainer.",
          "Experimenting with networking, DNS, remote access, and system administration.",
        ],
      },
      {
        title: "Programming & Software Development",
        org: "Independent Learning",
        dates: "Ongoing",
        logo: "",
        bullets: [
          "Building projects and solving programming challenges using Python.",
          "Designing relational databases using SQL and PostgreSQL.",
          "Exploring automation, scripting, and new technologies through experimentation.",
        ],
      },
      {
        title: "Cybersecurity Enthusiast",
        org: "Personal Security Lab",
        dates: "Ongoing",
        logo: "",
        bullets: [
          "Exploring cybersecurity concepts through hands-on virtual labs.",
          "Practising network reconnaissance and vulnerability assessment using tools such as Nmap.",
          "Learning about system vulnerabilities, exploitation techniques, and defensive security.",
        ],
      },
      {
        title: "Bartender",
        org: "Il-Veduta Restaurant",
        dates: "Summer 2026",
        logo: "",
        bullets: [
          "Prepared and served beverages in a busy restaurant environment.",
          "Worked closely with colleagues to ensure smooth and efficient service.",
          "Developed communication, teamwork, and time management skills.",
          "Learned to stay organised and work efficiently under pressure.",
        ],
      },
    ],
  },



  /* ===================================================================
     ===== EDUCATION  (same timeline pattern, simpler) ================
     =================================================================== */

  education: {
    intro: "Where I've studied and what I've learned",
    items: [
      {
        title: "Advanced Diploma in IT (Computer Systems and Networks)",
        org: "MCAST",
        dates: "2026 — Present",
        logo: "",
        bullets: [
          "Studying computer systems, networking, programming, and databases.",
          "Gaining practical experience through hands-on assignments and projects.",
          "Planning to pursue a Bachelor's degree in Cybersecurity.",
        ],
      },
      {
        title: "Python in Practice",
        org: "ShipThatCode",
        dates: "November 2026",
        logo: "",
        bullets: [
          "Completed an intermediate-level Python programming course.",
          "Developed practical programming and problem-solving skills.",
        ],
      },
      {
        title: "Python Fundamentals",
        org: "ShipThatCode",
        dates: "November 2026",
        logo: "",
        bullets: [
          "Completed a course covering core Python programming concepts.",
          "Practised functions, data structures, and programming fundamentals.",
        ],
      },
      {
        title: "SQL Fundamentals",
        org: "ShipThatCode",
        dates: "November 2026",
        logo: "",
        bullets: [
          "Learned SQL querying and relational database fundamentals.",
          "Practised filtering, joins, aggregation, and working with data.",
        ],
      },
      {
        title: "Secondary Education — O-Levels",
        org: "St Nicholas College, Dingli Secondary School",
        dates: "Completed 2026",
        logo: "",
        bullets: [
          "Completed secondary education and MATSEC examinations.",
          "Subjects included Mathematics, English Language, Maltese, Physics, Computing, and Biology.",
          "Also studied English Literature, Environmental Studies, and Religious Knowledge.",
        ],
      },
      {
        title: "ICT C3 — MQF Level 3",
        org: "St Nicholas College, Dingli Secondary School",
        dates: "July 2026",
        logo: "",
        bullets: [
          "Achieved Grade A in ICT at MQF Level 3.",
          "Developed foundational knowledge and practical ICT skills.",
        ],
      },
    ],
  },


  /* ===================================================================
     ===== SKILLS / TOOLKIT  (grouped tags) ===========================
     ===================================================================
     Group your skills however makes sense for YOU. Rename the groups,
     add your own. Each group has a "name" and a list of "items". */

  skills: {
    intro: "Technologies, tools, and skills I've picked up along the way",
    groups: [
      {
        name: "Programming & Databases",
        items: ["Python", "SQL", "PostgreSQL", "SQL Server", "Bash", "Git"],
      },
      {
        name: "Operating Systems",
        items: ["Linux", "Debian", "Ubuntu", "Kali Linux", "Windows", "Windows Server"],
      },
      {
        name: "Networking & Cybersecurity",
        items: ["TCP/IP", "DNS", "DHCP", "VPNs", "Nmap", "Metasploit", "Wireshark", "Network Troubleshooting"],
      },
      {
        name: "Self-Hosting & Infrastructure",
        items: ["Docker", "Docker Compose", "Portainer", "Pi-hole", "Unbound", "Tailscale", "Uptime Kuma", "Raspberry Pi"],
      },
      {
        name: "Development Tools",
        items: ["GitHub", "VS Code", "PyCharm", "DBeaver", "SSMS", "Oracle SQL Developer Data Modeler", "VMware"],
      },
      {
        name: "Hardware & Electronics",
        items: ["PC Building", "Hardware Troubleshooting", "3D Printing", "Raspberry Pi", "Bambu Studio"],
      },
      {
        name: "Soft Skills",
        items: ["Problem-Solving", "Teamwork", "Communication", "Adaptability", "Time Management", "Independent Learning"],
      },
      {
        name: "Interests",
        items: ["Cybersecurity", "Programming", "Linux", "Homelabbing", "Open Source", "Automation", "Gaming"],
      },
    ],
  },


  /* ===================================================================
     ===== PROJECTS  (your work — the star of the show) ===============
     ===================================================================
     "Projects" can be anything you've made or done — paid or personal,
     big or small. Copy a whole { ... } block to add one. Each block:
       featured · true makes the card big & wide (use for your best one)
       title, description · what it is
       image · a picture path, or "" to show a neutral placeholder
       tags  · a few short labels (skills, topics — your call)
       links · buttons on the card. Set a url to "" to hide that button.
               type can be "demo", "source", or any label you like. */

  projects: {
    filters: true,
    intro: "A collection of things I've built, broken, and experimented with.",
    items: [
      {
        featured: true,
        title: "Self-Hosted Homelab",
        description:
          "My personal homelab running across Linux servers and Raspberry Pi devices. I use Docker to host and manage services like Pi-hole, Unbound, Portainer, Uptime Kuma, and Tailscale. It's where I experiment with networking, system administration, and self-hosting.",
        image: "assets/img/project-1.svg",
        tags: ["Linux", "Docker", "Networking", "Self-Hosting"],
        links: [
          { type: "demo", label: "Live Demo", url: "" },
          { type: "source", label: "Documentation", url: "" },
        ],
      },
      {
        featured: false,
        title: "CyberIntel Database",
        description:
          "A cybersecurity-focused relational database built using PostgreSQL and Docker. Designed to organise CVE vulnerabilities, affected software, version ranges, and exploit references while maintaining data integrity through relational constraints.",
        image: "assets/img/cyberintel-architecture.svg",
        tags: ["PostgreSQL", "SQL", "Docker", "Cybersecurity"],
        links: [
          { type: "demo", label: "Live Demo", url: "" },
          { type: "source", label: "Source Code", url: "" },
        ],
      },
      {
        featured: false,
        title: "Cybersecurity Practice Lab",
        description:
          "An isolated virtual environment using Kali Linux and Metasploitable 2 to explore network reconnaissance, vulnerability assessment, and penetration testing concepts. Experimenting with tools such as Nmap and Metasploit to better understand system security.",
        image: "assets/img/cybersecurity-lab.svg",
        tags: ["Cybersecurity", "Linux", "VMware", "Nmap"],
        links: [
          { type: "demo", label: "Lab Writeups", url: "" },
          { type: "source", label: "Documentation", url: "" },
        ],
      },
      {
        featured: false,
        title: "Python Programming Projects",
        description:
          "A growing collection of Python scripts, programming challenges, and experiments. Exploring automation, data processing, functions, and problem-solving while improving my programming skills.",
        image: "assets/img/python-projects.svg",
        tags: ["Python", "Programming", "Automation"],
        links: [
          { type: "demo", label: "View Projects", url: "" },
          { type: "source", label: "GitHub", url: "" },
        ],
      },
    ],
  },


  /* ===================================================================
     ===== GALLERY  (a photo grid) — safe to delete ===================
     ===================================================================
     Click a photo to enlarge it (a simple built-in lightbox). Drop your
     images in /assets/img and list them here. Square-ish photos look best.
       image   · the picture path
       caption · OPTIONAL — shown under the photo and in the viewer ("" hides it) */
 /* gallery: {
    intro: "A few moments & visuals",
    items: [
      { image: "assets/img/gallery-1.svg", caption: "Add a caption — or leave it blank" }, // 👉 EDIT
      { image: "assets/img/gallery-2.svg", caption: "Click a photo to enlarge it" },
      { image: "assets/img/gallery-3.svg", caption: "" },
      { image: "assets/img/gallery-4.svg", caption: "Swap these for your own pictures" },
      { image: "assets/img/gallery-5.svg", caption: "" },
      { image: "assets/img/gallery-6.svg", caption: "Add or remove as many as you like" },
    ],
  },/*

  /* ===================================================================
     ===== WRITING  (optional blog/notes teasers) — safe to delete ====
     ===================================================================
     These are just static cards for now. The GROWING.md guide explains
     how to load real posts from a blog or notes app later. */
  /*writing: {
    intro: "Notes & things I've written",
    items: [
      {
        title: "What I learned starting something new",   // 👉 EDIT
        date: "2024-11-02",                                // 👉 EDIT — YYYY-MM-DD
        blurb: "A few honest reflections on beginning a project from scratch — the nerves, the small wins, and what I'd do differently.",
        url: "https://example.com/post-one",               // 👉 EDIT
      },
      {
        title: "On staying motivated",
        date: "2024-08-19",
        blurb: "Simple habits that help me keep going when a project gets hard or the excitement wears off.",
        url: "https://example.com/post-two",
      },
      {
        title: "My favourite tools this year",
        date: "2024-05-30",
        blurb: "A short, friendly round-up of the apps and gear that made my year a little easier.",
        url: "https://example.com/post-three",
      },
    ],
  },/*

  /* ===================================================================
     ===== TESTIMONIALS / REFERENCES  — safe to delete ================
     =================================================================== */
  /*testimonials: {
    intro: "Kind words",
    items: [
      {
        quote: "A pleasure to work with — thoughtful, dependable, and always willing to help. I'd happily team up again.", // 👉 EDIT
        name: "Sam Rivera",          // 👉 EDIT
        role: "Colleague",           // 👉 EDIT
      },
      {
        quote: "Brings good energy and real care to everything they do. The kind of person who makes a team better.",
        name: "Jordan Lee",
        role: "Mentor",
      },
    ],
  },

  /* ===================================================================
     ===== CONTACT ====================================================
     =================================================================== */
  contact: {
    intro: "Say hello",
    heading: "Let's connect",                       // 👉 EDIT
    text: "I'm always happy to chat — about work, ideas, or just to say hi. Drop me a line and I'll get back to you.", // 👉 EDIT
    email: "denvass2020@gmail.com",                     // 👉 EDIT — your email address
    emailButtonLabel: "Send me an email",

    // OPTIONAL contact form (an add-on). It is OFF by default because it
    // needs a free third-party service to receive messages.
    // To turn it on:
    //   1. Make a free form at https://formspree.io  (or use Netlify Forms)
    //   2. They give you an address like  https://formspree.io/f/abcwxyz
    //   3. Paste it into formAction below and set form: true
    // See the README "Turn on the contact form" recipe for details.
    form: false,                                    // 👉 EDIT — true to show the form
    formAction: "https://formspree.io/f/your-id",   // 👉 EDIT — your Formspree (or other) endpoint
  },

  /* ===================================================================
     ===== FOOTER =====================================================
     =================================================================== */
  footer: {
    tagline: "Thanks for stopping by.",     // 👉 EDIT
    // A small link in the footer — e.g. a friendly nudge to your GitHub
    // repo so visitors can see the code or give it a ⭐. Set url to "" to hide.
    repo: {
      label: "View the code on GitHub",     // 👉 EDIT
      url: "https://github.com/DenzelVW-xyz/portfolio-starter-kit",  // 👉 EDIT — your repo (or "" to hide)
    },
    showCredit: true,   // the small "Built with the Starter portfolio template" line — set false to remove
  },

  /* ===================================================================
     ===== SOCIAL LINKS  (used in the hero, contact, and footer) ======
     ===================================================================
     Add, remove, or reorder. Set a url to "" to hide that icon.
     Available icon names:
       github · linkedin · x (twitter) · instagram · dribbble · mastodon
       bluesky · youtube · codepen · globe (website) · mail (email)
     For "mail", write the address with mailto:  — see below. */
  social: [
    { icon: "github",   label: "GitHub",   url: "https://github.com/DenzelVW-xyz" },   // 👉 EDIT
    { icon: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/denzel-vassallo-wright" },  // 👉 EDIT
    { icon: "instagram",label: "Instagram",url: "https://instagram.com/denzelvassallowright" },  // 👉 EDIT
    { icon: "globe",    label: "Website",  url: "" },                                    // 👉 EDIT (add a url to show)
    //{ icon: "mail",     label: "Email",    url: "mailto:hello@example.com" },            // 👉 EDIT
  ],

};

/* Make the config available to the page. (Leave this line alone.) */
window.SITE = SITE;
