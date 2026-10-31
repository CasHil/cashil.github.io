export type Language = "en" | "nl";

export interface TranslationDictionary {
  nav: {
    overview: string;
    cv: string;
    workExperience: string;
    workShort: string;
    education: string;
    about: string;
  };
  sidebar: {
    name: string;
    role: string;
    degrees: string;
    location: string;
    coreDomainsLabel: string;
    coreDomains: string[];
    year: string;
    cvDownload: string;
    copyEmail: string;
    copiedEmail: string;
    timezone: string;
  };
  cv: {
    title: string;
    subtitle: string;
    openNewTab: string;
    downloadPdf: string;
    mobilePrompt: string;
    viewFullscreen: string;
  };
  intro: {
    heroTitle: string;
    statusBadge: string;
    provenanceTag: string;
    bioParagraph1: string;
    bioParagraph2: string;
    bioParagraph3: string;
    signals: {
      tag: string;
      title: string;
      description: string;
    }[];
    exploreWork: string;
    exploreEdu: string;
    getInTouch: string;
    downloadCv: string;
    viewCv: string;
    featuredHeading: string;
    featuredSubtitle: string;
    tikkieTag: string;
    tikkieTitle: string;
    tikkieSubtitle: string;
    tikkieDescription: string;
    tikkieHighlights: string[];
    tikkieLink: string;
    archDiagramTitle: string;
    archDiagramSubtitle: string;
    archNodes: {
      id: string;
      label: string;
      role: string;
      desc: string;
    }[];
    thesisTag: string;
    thesisTitle: string;
    thesisSubtitle: string;
    thesisDescription: string;
    thesisHighlights: string[];
    thesisLink: string;
    thesisSkills: string[];
    bitsizedTag: string;
    bitsizedTitle: string;
    bitsizedSubtitle: string;
    bitsizedDescription: string;
    bitsizedHighlights: string[];
    bitsizedLink: string;
    sandboxInteractiveTitle: string;
    sandboxInteractiveSubtitle: string;
    sandboxRunAction: string;
    sandboxRunning: string;
    sandboxStatusSuccess: string;
    sandboxOutputHeader: string;
  };
  dataExplorer: {
    badge: string;
    title: string;
    subtitle: string;
    statLearners: string;
    statLearnersValue: string;
    statRuns: string;
    statCourses: string;
    statIntent: string;
    statIntentValue: string;
    tabMotivations: string;
    tabClusters: string;
    tabTrajectory: string;
    womenLabel: string;
    menLabel: string;
    statSignificance: string;
    statSignificanceValue: string;
    motivations: {
      careerLabel: string;
      careerDelta: string;
      careerExplanation: string;
      leisureLabel: string;
      leisureDelta: string;
      leisureExplanation: string;
      degreeLabel: string;
      degreeDelta: string;
      degreeExplanation: string;
    };
    researchTakeawayTitle: string;
    researchTakeawayText: string;
    clusters: {
      completersName: string;
      completersBehavior: string;
      completersDesc: string;
      auditorsName: string;
      auditorsBehavior: string;
      auditorsDesc: string;
      samplersName: string;
      samplersBehavior: string;
      samplersDesc: string;
    };
    trajectory: {
      title: string;
      subtitle: string;
      weekPrefix: string;
      allClusters: string;
      retentionLabel: string;
      submissionRateLabel: string;
      activeLabel: string;
      scrubberPrompt: string;
      insightTitle: string;
      insightText: string;
      weeks: {
        week: number;
        samplers: number;
        auditors: number;
        completers: number;
        note: string;
      }[];
    };
    methodologyTitle: string;
    methodologyText: string;
    authorLabel: string;
    facultyLabel: string;
    repositoryLink: string;
    repositoryText: string;
    repositoryTextShort: string;
  };
  workExperience: {
    title: string;
    intro: string;
    currentBadge: string;
    to: string;
    cvBtn: string;
    educationBtn: string;
    filterAll: string;
    filterEngineering: string;
    filterEducation: string;
    primaryHeading: string;
    primarySubtitle: string;
    archiveHeading: string;
    archiveSubtitle: string;
    earlyEngineeringTitle: string;
    earlyEngineeringBadge: string;
    earlyEngineeringSubtitle: string;
    showEarlyEngineering: string;
    hideEarlyEngineering: string;
    academicHeading: string;
    academicBadge: string;
    academicSummary: string;
    showAcademic: string;
    hideAcademic: string;
    collapseBottom: string;
    items: {
      title: string;
      subtitle: string;
      startDate: string;
      endDate: string;
      current?: boolean;
      text: string;
      skills: string[];
      category?: "engineering" | "education";
      tier?: "featured" | "foundational";
      image?: {
        uri: string;
        alt: string;
      };
    }[];
  };
  education: {
    title: string;
    intro: string;
    thesisTitle: string;
    to: string;
    items: {
      title: string;
      subtitle: string;
      startDate: string;
      endDate: string;
      text: string;
      skills: string[];
      image?: {
        uri: string;
        alt: string;
      };
    }[];
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    beyondHeading: string;
    beyondSubtitle: string;
    interests: {
      title: string;
      description: string;
    }[];
  };
  outreach: {
    heading: string;
    subheading: string;
    emailBtn: string;
    cvBtn: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      overview: "Overview",
      cv: "CV",
      workExperience: "Work Experience",
      workShort: "Work",
      education: "Education",
      about: "About",
    },
    sidebar: {
      name: "Casper Hildebrand",
      role: "Full-Stack Engineer · Tikkie",
      degrees: "Double MSc • TU Delft",
      location: "Amsterdam, Netherlands",
      coreDomainsLabel: "Core Domains",
      coreDomains: [
        "Full Stack Engineering",
        "Web & Payment APIs",
        "TypeScript, React, Node.js",
        "AWS, PostgreSQL, Cloud",
        "Data Analytics",
      ],
      year: "© 2026 Casper Hildebrand · Amsterdam",
      cvDownload: "CV (PDF)",
      copyEmail: "Copy email",
      copiedEmail: "Copied!",
      timezone: "Amsterdam · CET (UTC+1)",
    },
    cv: {
      title: "Curriculum Vitae",
      subtitle: "Full-Stack Software Engineer · Amsterdam, Netherlands",
      openNewTab: "Open in New Tab",
      downloadPdf: "Download PDF",
      mobilePrompt: "Viewing on a mobile device? Open fullscreen for the optimal reading experience.",
      viewFullscreen: "View Fullscreen PDF",
    },
    intro: {
      heroTitle: "Full-stack software engineer building payment services and web applications at Tikkie.",
      statusBadge: "Full-Stack Software Engineer · Amsterdam, NL",
      provenanceTag: "ABN AMRO · Double MSc TU Delft",
      bioParagraph1:
        "At Tikkie (ABN AMRO), I engineer payment infrastructure, idempotent settlement workflows, and merchant web applications. I combine distributed systems reliability with clean frontend craft.",
      bioParagraph2:
        "Double Master's graduate from TU Delft in Computer Science (Data Science) and Science Education. Former founder and published researcher analyzing large-scale learning telemetry.",
      bioParagraph3: "",
      signals: [
        {
          tag: "Fintech Production",
          title: "Tikkie (ABN AMRO)",
          description: "High-throughput payment APIs & merchant portals processing enterprise volumes",
        },
        {
          tag: "Academic Rigor",
          title: "Double MSc · TU Delft",
          description: "Computer Science (Data Science) & Didactics with first-degree accreditation",
        },
        {
          tag: "0-to-1 Engineering",
          title: "Co-Founder · Bitsized",
          description: "Browser code execution sandboxes adopted by Dutch secondary CS programs",
        },
        {
          tag: "Empirical Research",
          title: "175k Learner Telemetry",
          description: "Unsupervised k-means clustering & regression on Open edX student cohorts",
        },
      ],
      exploreWork: "Explore Work Experience",
      exploreEdu: "Education & Degrees",
      getInTouch: "Get in touch",
      downloadCv: "Download CV (PDF)",
      viewCv: "Curriculum Vitae",
      featuredHeading: "Selected Work",
      featuredSubtitle: "",
      tikkieTag: "ABN AMRO · 2026 – Present",
      tikkieTitle: "Tikkie Business",
      tikkieSubtitle: "Payment APIs & Merchant Portals",
      tikkieDescription:
        "Production payment APIs and merchant portals supporting thousands of enterprise businesses.",
      tikkieHighlights: [
        "**Payment Infrastructure**: Implemented idempotent settlement pipelines, partner webhooks, and automated reconciliation.",
        "**Merchant Portals**: Engineered responsive real-time analytics and financial dashboards with React, TypeScript, and AWS serverless.",
      ],
      tikkieLink: "View role details",
      archDiagramTitle: "Payment Settlement Architecture",
      archDiagramSubtitle: "High-throughput idempotent processing flow",
      archNodes: [
        { id: "api", label: "Merchant API", role: "Ingestion", desc: "Idempotent payment requests with signature verification" },
        { id: "guard", label: "Idempotency Guard", role: "Deduplication", desc: "Atomic lock validation preventing double charge execution" },
        { id: "worker", label: "Settlement Engine", role: "Worker Tier", desc: "Event-driven asynchronous ledger reconciliation & webhooks" },
        { id: "ledger", label: "Financial Ledger", role: "Persistence", desc: "PostgreSQL ACID transaction records & merchant audit logs" },
      ],
      thesisTag: "TU Delft MSc Thesis · 2024",
      thesisTitle: "Debugging the Divide",
      thesisSubtitle: "Clickstream Telemetry & Engagement Clustering across 175k Learners",
      thesisDescription:
        "Large-scale learning pattern and dropout dynamic analysis across 14 Open edX computer science MOOCs.",
      thesisHighlights: [
        "**Clustering Pipelines**: Unsupervised k-means clustering over interaction logs from 174,988 enrolled learners.",
        "**Statistical Models**: Quantified gender enrollment motivation gaps and behavioral retention indicators in Python.",
      ],
      thesisLink: "Explore research telemetry",
      thesisSkills: ["Python", "Pandas", "Scikit-learn", "Open edX"],
      bitsizedTag: "Co-Founder & Lead Engineer · 2023 – 2025",
      bitsizedTitle: "Bitsized",
      bitsizedSubtitle: "In-Browser Execution Sandboxes for CS Education",
      bitsizedDescription:
        "In-browser execution sandboxes and automated evaluation tools adopted across Dutch CS departments.",
      bitsizedHighlights: [
        "**Browser Runtime**: Architected isolated browser sandboxes with instant test feedback and zero local environment setup.",
        "**Educator Tooling**: Created exercise composition environments and real-time student submission tracking.",
      ],
      bitsizedLink: "View platform details",
      sandboxInteractiveTitle: "In-Browser Sandbox Runtime",
      sandboxInteractiveSubtitle: "Simulated Web Worker code execution environment",
      sandboxRunAction: "Execute Tests",
      sandboxRunning: "Evaluating...",
      sandboxStatusSuccess: "Tests Passed",
      sandboxOutputHeader: "Sandbox Output (Isolated Environment)",
    },
    dataExplorer: {
      badge: "TU Delft · 2024",
      title: "Debugging the Divide · Telemetry",
      subtitle:
        "Telemetry analysis of 174,988 learners across 14 TU Delft Computer Science MOOC runs.",
      statLearners: "Learners analyzed",
      statLearnersValue: "174,988",
      statRuns: "Course iterations",
      statCourses: "TU Delft MOOCs",
      statIntent: "Career transition gap (women vs. men)",
      statIntentValue: "+16.7%",
      tabMotivations: "Enrollment Intent by Gender",
      tabClusters: "Engagement Clusters (k-Means)",
      tabTrajectory: "8-Week Clickstream Trajectory",
      womenLabel: "Women",
      menLabel: "Men",
      statSignificance: "Statistical significance",
      statSignificanceValue: "p < 0.001 (χ² = 284.6)",
      motivations: {
        careerLabel: "Career Advancement & Transition",
        careerDelta: "+16.7% for women (58.2% vs. 41.5%)",
        careerExplanation:
          "Women enrolled with explicit vocational intent to transition into tech roles or upskill for promotions.",
        leisureLabel: "Hobby, Curiosity & Leisure",
        leisureDelta: "+21.0% for men (38.7% vs. 17.7%)",
        leisureExplanation:
          "Men were more than twice as likely to engage as recreational learners without immediate vocational stakes.",
        degreeLabel: "Formal Degree & Coursework Prep",
        degreeDelta: "+4.3% for women (24.1% vs. 19.8%)",
        degreeExplanation:
          "Enrollment as supplementary study material alongside formal university degree coursework.",
      },
      researchTakeawayTitle: "Key Finding:",
      researchTakeawayText:
        "Women predominantly enrolled for career mobility (+16.7%), while men participated as a casual hobby (+21.0%). Retaining female learners requires early course onboarding that connects assignments directly to industry job skills rather than assuming recreational interest.",
      clusters: {
        completersName: "Completers",
        completersBehavior: "Consistent weekly submissions",
        completersDesc:
          "Submitted >90% of assignments on schedule and actively participated in course forums.",
        auditorsName: "Auditors",
        auditorsBehavior: "Video lectures only, no submissions",
        auditorsDesc:
          "Watched lectures and downloaded course materials systematically, but completed zero graded problem sets.",
        samplersName: "Samplers",
        samplersBehavior: "Drop-off after week 1",
        samplersDesc:
          "Enrolled and explored initial modules, but stopped submitting work before week 3.",
      },
      trajectory: {
        title: "Weekly Clickstream & Attrition Dynamics",
        subtitle: "Relative cohort retention across an 8-week curriculum based on 174,988 normalized interaction logs.",
        weekPrefix: "Week",
        allClusters: "All Cohorts",
        retentionLabel: "Active Cohort Retention",
        submissionRateLabel: "Assignment Submission Density",
        activeLabel: "Learners Active",
        scrubberPrompt: "Select a week or drag to inspect the attrition dynamics:",
        insightTitle: "Trajectory Analysis:",
        insightText: "The steepest drop-off occurs between Week 1 and Week 2 for Samplers (-72%). In contrast, Completers demonstrate steady retention (88%+), while Auditors remain active in video consumption through Week 8 despite zero assignment submissions.",
        weeks: [
          { week: 1, samplers: 100, auditors: 100, completers: 100, note: "Initial enrollment & setup phase: high lecture viewing across all cohorts." },
          { week: 2, samplers: 28, auditors: 89, completers: 98, note: "First graded deadline: 72% of Samplers cease activity; Auditors maintain video streaming." },
          { week: 3, samplers: 14, auditors: 78, completers: 95, note: "Core programming topics: steady assignment submissions among Completers." },
          { week: 4, samplers: 8, auditors: 69, completers: 93, note: "Mid-course milestone: Auditor cohort stabilizes at ~70% video consumption." },
          { week: 5, samplers: 5, auditors: 61, completers: 91, note: "Algorithmic complexity modules: high forum activity from Completers." },
          { week: 6, samplers: 4, auditors: 54, completers: 89, note: "Advanced coursework: persistent submission cadence from the top 8.4% cohort." },
          { week: 7, samplers: 3, auditors: 49, completers: 87, note: "Final project preparation: Auditors complete lecture archives without submissions." },
          { week: 8, samplers: 3, auditors: 45, completers: 86, note: "Course completion: 8.4% of total enrolled learners achieve verified completion." },
        ],
      },
      methodologyTitle: "Methodology:",
      methodologyText:
        "k-means clustering across normalized Open edX event logs: session frequency, submission cadence, and video interactions.",
      authorLabel: "Author: Casper W. R. Hildebrand",
      facultyLabel: "TU Delft Faculty of EEMCS / EWI",
      repositoryLink: "https://repository.tudelft.nl/record/uuid/53e18584-6997-4089-94b6-dc7bc4c59f2a",
      repositoryText: "View published thesis at TU Delft Repository ↗",
      repositoryTextShort: "TU Delft Repository ↗",
    },
    workExperience: {
      title: "Work Experience",
      intro:
        "Production engineering at Tikkie, cloud architecture, browser sandbox design, enterprise data migrations, and computer science education.",
      currentBadge: "Current",
      to: "to",
      cvBtn: "View Curriculum Vitae",
      educationBtn: "Education & Research",
      filterAll: "All Roles",
      filterEngineering: "Engineering & Systems",
      filterEducation: "Education & Teaching",
      primaryHeading: "Software Engineering",
      primarySubtitle: "",
      archiveHeading: "Teaching & Academic Work",
      archiveSubtitle: "",
      earlyEngineeringTitle: "Prior Roles & University Internships",
      earlyEngineeringBadge: "2 Roles · 2019–2021",
      earlyEngineeringSubtitle:
        "Foundational software development and data pipelines at Bexter and Muziekweb (2019–2021).",
      showEarlyEngineering: "Show prior engineering roles (2)",
      hideEarlyEngineering: "Hide prior engineering roles",
      academicHeading: "Academic Teaching & University Leadership",
      academicBadge: "5 Positions · 2018–2025",
      academicSummary:
        "Computer science pedagogy across secondary education, undergraduate algorithms instruction at TU Delft, and curriculum quality governance on the BSc CS&E Board of Studies.",
      showAcademic: "Show academic & leadership timeline (5)",
      hideAcademic: "Hide academic timeline",
      collapseBottom: "Collapse academic section ↑",
      items: [
        {
          title: "Full Stack Software Engineer",
          subtitle: "Tikkie (ABN AMRO)",
          image: {
            uri: "tikkie.webp",
            alt: "Tikkie (ABN AMRO)",
          },
          startDate: "Mar 2026",
          endDate: "Present",
          current: true,
          category: "engineering",
          tier: "featured",
          text: "• **Merchant Infrastructure**: Engineered high-throughput payment endpoints and settlement pipelines processing merchant transactions across thousands of Dutch businesses.\n• **API Reliability**: Implemented idempotent payment processing workflows, partner webhooks, and automated error recovery routines.\n• **Merchant Portals**: Developed merchant analytics dashboards and reporting portals with React, TypeScript, Node.js, and AWS serverless infrastructure.",
          skills: ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL"],
        },
        {
          title: "Software Engineer – Talent Program",
          subtitle: "Harvest",
          image: {
            uri: "harvest.webp",
            alt: "Harvest Fellowship",
          },
          startDate: "Feb 2026",
          endDate: "Present",
          current: true,
          category: "engineering",
          tier: "featured",
          text: "Engineering talent program running alongside production work at Tikkie, focusing on distributed systems design, event-driven architecture, and cloud reliability patterns.",
          skills: ["Cloud Architecture", "Distributed Systems", "Event-Driven Design"],
        },
        {
          title: "Co-Founder & Lead Engineer",
          subtitle: "Bitsized",
          image: {
            uri: "bitsized.webp",
            alt: "Bitsized",
          },
          startDate: "Jan 2023",
          endDate: "Feb 2025",
          category: "engineering",
          tier: "featured",
          text: "Co-founded an interactive educational coding platform adopted by Dutch secondary school CS departments. Engineered isolated in-browser code execution sandboxes, real-time code evaluation, and teacher assignment management tooling.",
          skills: ["TypeScript", "React", "Node.js", "Docker"],
        },
        {
          title: "IT Consultant & Software Analyst",
          subtitle: "Netcompany",
          image: {
            uri: "netcompany.webp",
            alt: "Netcompany",
          },
          startDate: "Sep 2021",
          endDate: "Jun 2022",
          category: "engineering",
          tier: "featured",
          text: "Engineered ETL data migration workflows and technical specifications for Dutch public sector enterprise systems (Vervangingsfonds & Participatiefonds), and built full-stack commercial property energy modeling tools.",
          skills: ["C# / .NET", "SQL Server", "Data Migration"],
        },
        {
          title: "Software Developer",
          subtitle: "Bexter",
          image: {
            uri: "bexter.webp",
            alt: "Bexter",
          },
          startDate: "Sep 2019",
          endDate: "May 2021",
          category: "engineering",
          tier: "foundational",
          text: "Engineered backend services and modernized responsive web portals for TrackOnline, an enterprise asset logistics platform managing reusable supply chain packaging.",
          skills: ["C# / .NET", "JavaScript", "REST APIs", "Relational Databases"],
        },
        {
          title: "Software Developer",
          subtitle: "Muziekweb",
          image: {
            uri: "muziekweb.webp",
            alt: "Muziekweb",
          },
          startDate: "May 2020",
          endDate: "Jul 2020",
          category: "engineering",
          tier: "foundational",
          text: "Automated data ingestion pipeline reconciling 100k+ discography records via the Discogs API with verification UI.",
          skills: ["Python", "REST APIs", "Data Pipelines"],
        },
        {
          title: "Computer Science Teacher",
          subtitle: "CSG De Lage Waard",
          startDate: "Feb 2025",
          endDate: "Jul 2025",
          category: "education",
          text: "Taught computer science across senior cohorts (~200 students), designing graduation examination standards and mentoring student software projects.",
          skills: [],
        },
        {
          title: "Computer Science Teacher",
          subtitle: "Stanislascollege",
          image: {
            uri: "sgl.webp",
            alt: "Stanislascollege",
          },
          startDate: "Aug 2024",
          endDate: "Jan 2025",
          category: "education",
          text: "Taught computer architecture, digital logic, and web foundations for the Master's teaching practicum.",
          skills: [],
        },
        {
          title: "Board of Studies Member (BSc CS&E)",
          subtitle: "Delft University of Technology",
          image: {
            uri: "tudelft.webp",
            alt: "TU Delft",
          },
          startDate: "Oct 2021",
          endDate: "Jun 2022",
          category: "education",
          text: "Evaluated and advised on curriculum quality and course improvements for the Bachelor in Computer Science & Engineering alongside faculty and student representatives.",
          skills: [],
        },
        {
          title: "Computer Science Teacher",
          subtitle: "Pieter Groen",
          image: {
            uri: "pietergroen.webp",
            alt: "Pieter Groen",
          },
          startDate: "Aug 2020",
          endDate: "Jan 2021",
          category: "education",
          text: "Taught introductory programming principles to high school students.",
          skills: [],
        },
        {
          title: "Teaching Assistant & Student Ambassador",
          subtitle: "Delft University of Technology",
          image: {
            uri: "tudelft.webp",
            alt: "TU Delft",
          },
          startDate: "Oct 2018",
          endDate: "Feb 2025",
          category: "education",
          text: "Mentored undergraduate students in algorithms, software testing, and object-oriented programming. Guided prospective students during university open days.",
          skills: [],
        },
      ],
    },
    education: {
      title: "Education & Research",
      intro:
        "Double Master's graduate from Delft University of Technology across Computer Science (Data Science specialization) and Science Education & Communication, with international exchange studies at KTH Royal Institute of Technology.",
      thesisTitle: "Degrees & Academic Credentials",
      to: "to",
      items: [
        {
          title: "MSc Computer Science (Data Science)",
          subtitle: "Delft University of Technology",
          image: {
            uri: "tudelft.webp",
            alt: "TU Delft",
          },
          startDate: "Sep 2021",
          endDate: "May 2024",
          text: "Specialized in data science, distributed algorithms, and machine learning. Master's Thesis: 'Debugging the Divide: Exploring Men’s and Women’s Motivations and Engagement in Computer Science MOOCs', analyzing clickstream and survey data across 174,988 learners.",
          skills: ["Python", "Pandas", "Scikit-Learn"],
        },
        {
          title: "MSc Science Education & Communication",
          subtitle: "Delft University of Technology",
          image: {
            uri: "tudelft.webp",
            alt: "TU Delft",
          },
          startDate: "Sep 2021",
          endDate: "May 2024",
          text: "Completed pedagogy, instructional system design, and communication theory alongside the CS Master's. Qualified with a formal Dutch first-degree teaching certification in Computer Science.",
          skills: [],
        },
        {
          title: "Exchange Studies in Computer Science",
          subtitle: "KTH Royal Institute of Technology, Stockholm",
          image: {
            uri: "kth.webp",
            alt: "KTH Royal Institute of Technology",
          },
          startDate: "Aug 2022",
          endDate: "Jan 2023",
          text: "Master's exchange semester focusing on advanced machine learning algorithms, visualization, and human-computer interaction in Stockholm, Sweden.",
          skills: [],
        },
        {
          title: "BSc Computer Science & Engineering",
          subtitle: "Delft University of Technology",
          image: {
            uri: "tudelft.webp",
            alt: "TU Delft",
          },
          startDate: "Sep 2017",
          endDate: "Jul 2021",
          text: "Foundations in data structures, algorithms, operating systems, networking, formal methods, and software engineering team projects.",
          skills: [],
        },
      ],
    },
    about: {
      title: "About",
      paragraph1:
        "I am a full-stack software engineer based in Amsterdam, currently working at Tikkie (ABN AMRO). I build merchant-facing payment infrastructure and business portals where reliability, security, and clear data models matter every day.",
      paragraph2:
        "My second Master's — in Science Education from TU Delft — shapes how I work on engineering teams. I treat API design as a communication problem, invest in explicit type boundaries and clear RFCs, and believe that structured documentation is a force multiplier for team velocity.",
      paragraph3:
        "Prior to Tikkie, I co-founded Bitsized (an interactive coding sandbox for secondary education), built ETL data migrations at Netcompany, and taught computer science across senior secondary school cohorts.",
      beyondHeading: "Outside of Work",
      beyondSubtitle: "",
      interests: [
        {
          title: "Bass Guitar",
          description:
            "Playing electric bass has been my main creative outlet for years. I enjoy playing in bands, locking into a groove, and holding down the low end.",
        },
        {
          title: "Chess",
          description:
            "I enjoy studying classical opening theory, solving tactical puzzles, and playing rapid games online.",
        },
      ],
    },
    outreach: {
      heading: "Get in touch.",
      subheading:
        "Feel free to reach out for software engineering roles, project collaboration, or just a quick chat.",
      emailBtn: "Email Casper",
      cvBtn: "Curriculum Vitae (PDF)",
    },
  },
  nl: {
    nav: {
      overview: "Overzicht",
      cv: "CV",
      workExperience: "Werkervaring",
      workShort: "Werk",
      education: "Opleiding",
      about: "Over mij",
    },
    sidebar: {
      name: "Casper Hildebrand",
      role: "Full-Stack Engineer · Tikkie",
      degrees: "Dubbele Master • TU Delft",
      location: "Amsterdam, Nederland",
      coreDomainsLabel: "Expertises",
      coreDomains: [
        "Full Stack Softwareontwikkeling",
        "Web- & Betaaldiensten",
        "TypeScript, React, Node.js",
        "AWS, PostgreSQL, Cloud",
        "Data Analytics",
      ],
      year: "© 2026 Casper Hildebrand · Amsterdam",
      cvDownload: "CV (PDF)",
      copyEmail: "Kopieer e-mail",
      copiedEmail: "Gekopieerd!",
      timezone: "Amsterdam · CET (UTC+1)",
    },
    cv: {
      title: "Curriculum Vitae",
      subtitle: "Full-Stack Software Engineer · Amsterdam, Nederland",
      openNewTab: "Openen in nieuw tabblad",
      downloadPdf: "Download PDF",
      mobilePrompt: "Bekijk je dit op mobiel? Open op volledig scherm voor de beste leeservaring.",
      viewFullscreen: "Bekijk PDF op volledig scherm",
    },
    intro: {
      heroTitle: "Full-stack software engineer voor zakelijke betaaldiensten en webapplicaties bij Tikkie.",
      statusBadge: "Full-Stack Software Engineer · Amsterdam, Nederland",
      provenanceTag: "ABN AMRO · Dubbele MSc TU Delft",
      bioParagraph1:
        "Bij Tikkie (ABN AMRO) bouw ik betaalinfrastructuur, idempotente settlement-workflows en dashboards voor ondernemers. Ik combineer betrouwbare backend-architectuur met doordachte frontend-ervaringen.",
      bioParagraph2:
        "Dubbele Master van de TU Delft in Technische Informatica en Didactiek. Voormalig mede-oprichter en onderzoeker naar grootschalige klikstream-telemetrie.",
      bioParagraph3: "",
      signals: [
        {
          tag: "Fintech Productie",
          title: "Tikkie (ABN AMRO)",
          description: "High-throughput betaal-API's en dashboards voor duizenden ondernemers",
        },
        {
          tag: "Academisch Fundament",
          title: "Dubbele MSc · TU Delft",
          description: "Technische Informatica (Data Science) & Didactiek met eerstegraads bevoegdheid",
        },
        {
          tag: "0-naar-1 Bouwen",
          title: "Mede-Oprichter · Bitsized",
          description: "In-browser sandboxes voor programmeeronderwijs op Nederlandse scholen",
        },
        {
          tag: "Empirisch Onderzoek",
          title: "175k Cursisten Telemetrie",
          description: "Unsupervised k-means clustering en regressiemodellen op Open edX data",
        },
      ],
      exploreWork: "Bekijk werkervaring",
      exploreEdu: "Opleidingen & Titels",
      getInTouch: "Neem contact op",
      downloadCv: "Download CV (PDF)",
      viewCv: "Curriculum Vitae",
      featuredHeading: "Uitgewerkt Werk",
      featuredSubtitle: "",
      tikkieTag: "ABN AMRO · 2026 – Heden",
      tikkieTitle: "Tikkie Zakelijk",
      tikkieSubtitle: "Betaal-API's & Ondernemersportals",
      tikkieDescription:
        "Bedrijfskritische betaal-API's en dashboards voor duizenden ondernemers.",
      tikkieHighlights: [
        "**Betaalworkflows**: Idempotente settlement-pipelines, partner-webhooks en automatische reconciliatie.",
        "**Ondernemersportals**: Realtime analytics en rapportagetools gebouwd met React, TypeScript en AWS serverless.",
      ],
      tikkieLink: "Bekijk functiedetails",
      archDiagramTitle: "Betaal- en Settlement-architectuur",
      archDiagramSubtitle: "High-throughput idempotente verwerkingspipeline",
      archNodes: [
        { id: "api", label: "Merchant API", role: "Ingestie", desc: "Idempotente betaalverzoeken met cryptografische handtekening" },
        { id: "guard", label: "Idempotentie Guard", role: "Ontdubbeling", desc: "Atomair validatieslot dat dubbele afschrijvingen uitsluit" },
        { id: "worker", label: "Settlement Engine", role: "Worker Tier", desc: "Event-driven asynchrone reconciliatie en partner-webhooks" },
        { id: "ledger", label: "Financieel Ledger", role: "Persistentie", desc: "PostgreSQL ACID transactielogs en audit-dashboards" },
      ],
      thesisTag: "TU Delft Masterscriptie · 2024",
      thesisTitle: "Debugging the Divide",
      thesisSubtitle: "Klikstream-telemetrie & clustering over 175.000 cursisten",
      thesisDescription:
        "Onderzoek naar leerpatronen en uitvaldynamiek over 14 Open edX computer science MOOCs.",
      thesisHighlights: [
        "**Clustering Pipelines**: Unsupervised k-means clustering over interactielogs van 174.988 geregistreerde cursisten.",
        "**Statistische Modellen**: Kwantificeerde instroommotivaties en gedragspatronen tussen mannen en vrouwen in Python.",
      ],
      thesisLink: "Bekijk onderzoeksdata",
      thesisSkills: ["Python", "Pandas", "Scikit-learn", "Open edX"],
      bitsizedTag: "Mede-oprichter & Lead Engineer · 2023 – 2025",
      bitsizedTitle: "Bitsized",
      bitsizedSubtitle: "In-Browser Sandboxes voor Informaticaonderwijs",
      bitsizedDescription:
        "In-browser code-sandboxes en automatische evaluatie voor informatica-afdelingen in het VO.",
      bitsizedHighlights: [
        "**Browser Runtime**: Geïsoleerde code-omgevingen met directe testfeedback zonder lokale installaties.",
        "**Docentendashboards**: Hulpmiddelen voor opgavenbeheer en realtime inzicht in voortgang.",
      ],
      bitsizedLink: "Bekijk platformdetails",
      sandboxInteractiveTitle: "In-Browser Sandbox Runtime",
      sandboxInteractiveSubtitle: "Geïsoleerde code-uitvoering via Web Workers",
      sandboxRunAction: "Tests Uitvoeren",
      sandboxRunning: "Evalueren...",
      sandboxStatusSuccess: "Tests Geslaagd",
      sandboxOutputHeader: "Sandbox Uitvoer (Geïsoleerde Omgeving)",
    },
    dataExplorer: {
      badge: "TU Delft · 2024",
      title: "Debugging the Divide · Telemetrie",
      subtitle:
        "Telemetrie-analyse van 174.988 cursisten over 14 TU Delft Computer Science MOOC-edities.",
      statLearners: "Cursisten geanalyseerd",
      statLearnersValue: "174.988",
      statRuns: "Cursusedities",
      statCourses: "TU Delft MOOCs",
      statIntent: "Loopbaangroei (vrouwen vs. mannen)",
      statIntentValue: "+16,7%",
      tabMotivations: "Instroommotivaties naar Geslacht",
      tabClusters: "Gedragsclusters (k-Means)",
      tabTrajectory: "8-Weken Klikstream Traject",
      womenLabel: "Vrouwen",
      menLabel: "Mannen",
      statSignificance: "Statistische significantie",
      statSignificanceValue: "p < 0,001 (χ² = 284,6)",
      motivations: {
        careerLabel: "Loopbaangroei & Baanswitch",
        careerDelta: "+16,7% bij vrouwen (58,2% vs. 41,5%)",
        careerExplanation:
          "Vrouwen schreven zich in met een expliciet doel: instromen in de techsector of doorgroeien in hun functie.",
        leisureLabel: "Hobby, Nieuwsgierigheid & Vrije tijd",
        leisureDelta: "+21,0% bij mannen (38,7% vs. 17,7%)",
        leisureExplanation:
          "Mannen namen ruim twee keer zo vaak deel uit recreatieve interesse zonder direct loopbaandoel.",
        degreeLabel: "Universitaire Voorbereiding & Studie",
        degreeDelta: "+4,3% bij vrouwen (24,1% vs. 19,8%)",
        degreeExplanation:
          "Deelname ter ondersteuning van een formele universitaire bachelor- of masteropleiding.",
      },
      researchTakeawayTitle: "Kerninzicht:",
      researchTakeawayText:
        "Vrouwen startten met een sterke loopbaanfocus (+16,7% carrièreswitch), terwijl mannen cursussen vaker als vrijblijvende hobby volgden (+21,0%). Om vrouwelijke cursisten te behouden, moet de onboarding vanaf week één direct aansluiten op concrete praktijkvaardigheden.",
      clusters: {
        completersName: "Afronders",
        completersBehavior: "Consistente wekelijkse inlevering",
        completersDesc:
          "Leverde meer dan 90% van de opgaven op tijd in en nam actief deel aan discussieforums.",
        auditorsName: "Toehoorders",
        auditorsBehavior: "Alleen videocolleges, geen opgaven",
        auditorsDesc:
          "Bekeken systematisch videocolleges en downloads, maar maakten geen becijferde opgaven.",
        samplersName: "Verkenners",
        samplersBehavior: "Uitval na week 1",
        samplersDesc:
          "Startte in de introductieweken, maar leverde na week twee geen opgaven meer in.",
      },
      trajectory: {
        title: "Wekelijkse Klikstream & Uitvaldynamiek",
        subtitle: "Cohortretentie over een curriculum van 8 weken op basis van 174.988 genormaliseerde interactielogs.",
        weekPrefix: "Week",
        allClusters: "Alle Cohorten",
        retentionLabel: "Actieve Cohortretentie",
        submissionRateLabel: "Opgaven Inleverdichtheid",
        activeLabel: "Actieve Cursisten",
        scrubberPrompt: "Selecteer een week of sleep om de uitvaldynamiek te inspecteren:",
        insightTitle: "Trajectanalyse:",
        insightText: "De sterkste uitval vindt plaats tussen week 1 en week 2 bij de Verkenners (-72%). Afronders tonen daarentegen een constante retentie (88%+), terwijl Toehoorders tot week 8 consequent video's blijven bekijken zonder opgaven in te leveren.",
        weeks: [
          { week: 1, samplers: 100, auditors: 100, completers: 100, note: "Startfase: hoge videoconsumptie over alle cohorten." },
          { week: 2, samplers: 28, auditors: 89, completers: 98, note: "Eerste inleverdeadline: 72% van de Verkenners haakt af; Toehoorders blijven video's streamen." },
          { week: 3, samplers: 14, auditors: 78, completers: 95, note: "Basis programmeerconcepten: stabiel inleverritme bij Afronders." },
          { week: 4, samplers: 8, auditors: 69, completers: 93, note: "Halverwege de cursus: Toehoorders stabiliseren rond 70% videoconsumptie." },
          { week: 5, samplers: 5, auditors: 61, completers: 91, note: "Algoritmische complexiteit: actieve deelname op discussieforums door Afronders." },
          { week: 6, samplers: 4, auditors: 54, completers: 89, note: "Gevorderde opgaven: consistent inleverpatroon van de bovenste 8,4%." },
          { week: 7, samplers: 3, auditors: 49, completers: 87, note: "Voorbereiding eindproject: Toehoorders ronden videocolleges af zonder inlevering." },
          { week: 8, samplers: 3, auditors: 45, completers: 86, note: "Cursusafronding: 8,4% van de totale inschrijvingen behaalt een officieel certificaat." },
        ],
      },
      methodologyTitle: "Methodologie:",
      methodologyText:
        "k-means clustering op genormaliseerde Open edX logs: sessiefrequentie, inleverritme en video-interacties.",
      authorLabel: "Auteur: Casper W. R. Hildebrand",
      facultyLabel: "TU Delft Faculteit EWI",
      repositoryLink: "https://repository.tudelft.nl/record/uuid/53e18584-6997-4089-94b6-dc7bc4c59f2a",
      repositoryText: "Bekijk de afstudeerscriptie in de TU Delft Repository ↗",
      repositoryTextShort: "TU Delft Repository ↗",
    },
    workExperience: {
      title: "Werkervaring",
      intro:
        "Productie-engineering bij Tikkie, cloudarchitectuur, browser-sandbox design, enterprise datamigraties en informaticaonderwijs.",
      currentBadge: "Huidig",
      to: "tot",
      cvBtn: "Bekijk Curriculum Vitae",
      educationBtn: "Opleiding & Onderzoek",
      filterAll: "Alle Functies",
      filterEngineering: "Engineering & Systemen",
      filterEducation: "Onderwijs & Didactiek",
      primaryHeading: "Softwareontwikkeling",
      primarySubtitle: "",
      archiveHeading: "Onderwijs & Academisch Werk",
      archiveSubtitle: "",
      earlyEngineeringTitle: "Eerdere Functies & Stages",
      earlyEngineeringBadge: "2 Functies · 2019–2021",
      earlyEngineeringSubtitle:
        "Softwareontwikkeling en datapipelines bij Bexter en Muziekweb (2019–2021).",
      showEarlyEngineering: "Bekijk eerdere engineering functies (2)",
      hideEarlyEngineering: "Verberg eerdere engineering functies",
      academicHeading: "Onderwijs & Academisch Leiderschap",
      academicBadge: "5 Posities · 2018–2025",
      academicSummary:
        "Informaticaonderwijs in het voortgezet onderwijs, algoritmenonderwijs aan de TU Delft en kwaliteitsbewaking van het curriculum in de Opleidingscommissie BSc Technische Informatica.",
      showAcademic: "Bekijk academische & onderwijservaring (5)",
      hideAcademic: "Verberg onderwijservaring",
      collapseBottom: "Klap onderwijssectie in ↑",
      items: [
        {
          title: "Full Stack Software Engineer",
          subtitle: "Tikkie (ABN AMRO)",
          image: {
            uri: "tikkie.webp",
            alt: "Tikkie (ABN AMRO)",
          },
          startDate: "mrt 2026",
          endDate: "Heden",
          current: true,
          category: "engineering",
          tier: "featured",
          text: "• **Zakelijke Infrastructuur**: Ontwikkeling van bedrijfskritische betaal-endpoints en verwerkingspipelines voor duizenden aangesloten ondernemingen.\n• **API-Betrouwbaarheid**: Implementatie van idempotente betaalprocessen, partner-webhooks en foutafhandeling.\n• **Ondernemersportals**: Bouw van dashboards en rapportagetools met React, TypeScript, Node.js en AWS serverless infrastructuur.",
          skills: ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL"],
        },
        {
          title: "Software Engineer – Talent Program",
          subtitle: "Harvest",
          image: {
            uri: "harvest.webp",
            alt: "Harvest Fellowship",
          },
          startDate: "feb 2026",
          endDate: "Heden",
          current: true,
          category: "engineering",
          tier: "featured",
          text: "• Professioneel ontwikkelprogramma parallel aan productiewerkzaamheden bij Tikkie, gericht op gedistribueerde systeemarchitectuur, event-driven design en cloudbetrouwbaarheid.",
          skills: ["Cloud Architecture", "Distributed Systems", "Event-Driven Design"],
        },
        {
          title: "Co-Founder & Lead Engineer",
          subtitle: "Bitsized",
          image: {
            uri: "bitsized.webp",
            alt: "Bitsized",
          },
          startDate: "jan 2023",
          endDate: "feb 2025",
          category: "engineering",
          tier: "featured",
          text: "Mede-oprichter van een interactief programmeerplatform voor informaticasecties in het voortgezet onderwijs. Verantwoordelijk voor browser-gebaseerde code-sandboxes, realtime evaluatie en tools voor docenten.",
          skills: ["TypeScript", "React", "Node.js", "Docker"],
        },
        {
          title: "IT Consultant & Software Analyst",
          subtitle: "Netcompany",
          image: {
            uri: "netcompany.webp",
            alt: "Netcompany",
          },
          startDate: "sep 2021",
          endDate: "jun 2022",
          category: "engineering",
          tier: "featured",
          text: "Ontwikkeling van datamigraties en technische specificaties voor publieke organisaties (Vervangingsfonds & Participatiefonds), en bouw van full-stack energielabel-modelleringstools voor commercieel vastgoed.",
          skills: ["C# / .NET", "SQL Server", "Data Migration"],
        },
        {
          title: "Software Developer",
          subtitle: "Bexter",
          image: {
            uri: "bexter.webp",
            alt: "Bexter",
          },
          startDate: "sep 2019",
          endDate: "mei 2021",
          category: "engineering",
          tier: "foundational",
          text: "Ontwikkeling van backend-services en modernisering van webportals voor TrackOnline, een platform voor emballage- en logistiekbeheer.",
          skills: ["C# / .NET", "JavaScript", "REST APIs", "Relational Databases"],
        },
        {
          title: "Software Developer",
          subtitle: "Muziekweb",
          image: {
            uri: "muziekweb.webp",
            alt: "Muziekweb",
          },
          startDate: "mei 2020",
          endDate: "jul 2020",
          category: "engineering",
          tier: "foundational",
          text: "Geautomatiseerde data-ingestie pipeline die meer dan 100.000 discografie-records synchroniseerde via de Discogs API met een verificatie-interface.",
          skills: ["Python", "REST APIs", "Data Pipelines"],
        },
        {
          title: "Docent Informatica",
          subtitle: "CSG De Lage Waard",
          startDate: "feb 2025",
          endDate: "jul 2025",
          category: "education",
          text: "Informaticaonderwijs verzorgd voor eindexamenklassen (~200 leerlingen), exameneisen opgesteld en softwareprojecten begeleid.",
          skills: [],
        },
        {
          title: "Docent Informatica",
          subtitle: "Stanislascollege",
          image: {
            uri: "sgl.webp",
            alt: "Stanislascollege",
          },
          startDate: "aug 2024",
          endDate: "jan 2025",
          category: "education",
          text: "Lesgegeven in computerarchitectuur, digitale logica en webfundamenten tijdens het docentschapspracticum van de Master.",
          skills: [],
        },
        {
          title: "Opleidingscommissie (BSc Technische Informatica)",
          subtitle: "Technische Universiteit Delft",
          image: {
            uri: "tudelft.webp",
            alt: "TU Delft",
          },
          startDate: "okt 2021",
          endDate: "jun 2022",
          category: "education",
          text: "Geëvalueerd en geadviseerd over curriculumverbeteringen voor de Bachelor Technische Informatica in een maandelijks overleg met docenten en studenten.",
          skills: [],
        },
        {
          title: "Docent Informatica",
          subtitle: "Pieter Groen",
          image: {
            uri: "pietergroen.webp",
            alt: "Pieter Groen",
          },
          startDate: "aug 2020",
          endDate: "jan 2021",
          category: "education",
          text: "Introductie in programmeren gegeven aan middelbare scholieren.",
          skills: [],
        },
        {
          title: "Studentambassadeur & Student-assistent",
          subtitle: "Technische Universiteit Delft",
          image: {
            uri: "tudelft.webp",
            alt: "TU Delft",
          },
          startDate: "okt 2018",
          endDate: "feb 2025",
          category: "education",
          text: "Ondersteuning van bachelorstudenten bij vakken over algoritmen, software testing en OOP. Voorlichting gegeven aan studiekiezers tijdens open dagen.",
          skills: [],
        },
      ],
    },
    education: {
      title: "Opleiding & Onderzoek",
      intro:
        "Dubbele Master aan de Technische Universiteit Delft in Computer Science (Data Science specialisatie) en Science Education & Communication, inclusief uitwisseling aan het KTH Royal Institute of Technology in Stockholm.",
      thesisTitle: "Academische Titels & Diploma's",
      to: "tot",
      items: [
        {
          title: "MSc Computer Science (Data Science)",
          subtitle: "Technische Universiteit Delft",
          image: {
            uri: "tudelft.webp",
            alt: "TU Delft",
          },
          startDate: "sep 2021",
          endDate: "mei 2024",
          text: "Gespecialiseerd in data science, gedistribueerde algoritmen en machine learning. Masterscriptie: 'Debugging the Divide: Exploring Men’s and Women’s Motivations and Engagement in Computer Science MOOCs', met een analyse van klik- en enquêtegegevens van 174.988 cursisten.",
          skills: ["Python", "Pandas", "Scikit-Learn"],
        },
        {
          title: "MSc Science Education & Communication",
          subtitle: "Technische Universiteit Delft",
          image: {
            uri: "tudelft.webp",
            alt: "TU Delft",
          },
          startDate: "sep 2021",
          endDate: "mei 2024",
          text: "Didactiek, onderwijsontwerp en communicatiewetenschap gevolgd parallel aan de CS Master. Afgerond met een formele Nederlandse eerstegraads onderwijsbevoegdheid voor het schoolvak Informatica.",
          skills: [],
        },
        {
          title: "Masteruitwisseling Computer Science",
          subtitle: "KTH Royal Institute of Technology, Stockholm",
          image: {
            uri: "kth.webp",
            alt: "KTH Royal Institute of Technology",
          },
          startDate: "aug 2022",
          endDate: "jan 2023",
          text: "Uitwisselingssemester gericht op geavanceerde machine learning algoritmen, datavisualisatie en mens-computer interactie in Stockholm, Zweden.",
          skills: [],
        },
        {
          title: "BSc Technische Informatica",
          subtitle: "Technische Universiteit Delft",
          image: {
            uri: "tudelft.webp",
            alt: "TU Delft",
          },
          startDate: "sep 2017",
          endDate: "jul 2021",
          text: "Fundament in datastructuren, algoritmen, besturingssystemen, computernetwerken, formele methoden en software engineering projecten.",
          skills: [],
        },
      ],
    },
    about: {
      title: "Over mij",
      paragraph1:
        "Ik ben een full-stack software engineer in Amsterdam, momenteel werkzaam bij Tikkie (ABN AMRO). Ik bouw aan zakelijke betaaldiensten en portals voor ondernemers, waar betrouwbaarheid, security en duidelijke datamodellen dagelijks centraal staan.",
      paragraph2:
        "Mijn tweede Master — Didactiek aan de TU Delft — beïnvloedt hoe ik in softwareteams werk. Ik beschouw API-ontwerp als een communicatieprobleem, investeer in expliciete typegrenzen en heldere RFC's, en geloof dat gestructureerde documentatie een krachtige vermenigvuldiger is voor teamsnelheid.",
      paragraph3:
        "Vóór Tikkie richtte ik Bitsized op (een interactieve programmeer-sandbox voor het voortgezet onderwijs), bouwde ik ETL-datamigraties bij Netcompany en gaf ik informatica in de bovenbouw van het voortgezet onderwijs.",
      beyondHeading: "Buiten het werk",
      beyondSubtitle: "",
      interests: [
        {
          title: "Basgitaar",
          description:
            "Elektrische basgitaar spelen is al jaren mijn favoriete creatieve uitlaatklep. Ik speel graag in bands, leg het fundament en bewaak het ritme.",
        },
        {
          title: "Schaken",
          description:
            "Ik verdiep me graag in klassieke openingstheorie, het oplossen van tactische puzzels en snelschaakpartijen online.",
        },
      ],
    },
    outreach: {
      heading: "Contact opnemen.",
      subheading:
        "Neem gerust contact op voor software engineering functies, samenwerking of een kennismaking.",
      emailBtn: "E-mail Casper",
      cvBtn: "Curriculum Vitae (PDF)",
    },
  },
};
