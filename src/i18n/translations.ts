export type Language = "en" | "nl";

export interface TranslationDictionary {
  nav: {
    overview: string;
    cv: string;
    workExperience: string;
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
    bioParagraph1: string;
    bioParagraph2: string;
    bioParagraph3: string;
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
    tikkieLink: string;
    thesisTag: string;
    thesisTitle: string;
    thesisSubtitle: string;
    thesisDescription: string;
    thesisLink: string;
    thesisSkills: string[];
    bitsizedTag: string;
    bitsizedTitle: string;
    bitsizedSubtitle: string;
    bitsizedDescription: string;
    bitsizedLink: string;
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
    womenLabel: string;
    menLabel: string;
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
    methodologyTitle: string;
    methodologyText: string;
    authorLabel: string;
    facultyLabel: string;
    repositoryLink: string;
    repositoryText: string;
  };
  workExperience: {
    title: string;
    intro: string;
    currentBadge: string;
    to: string;
    filterAll: string;
    filterEngineering: string;
    filterEducation: string;
    primaryHeading: string;
    primarySubtitle: string;
    archiveHeading: string;
    archiveSubtitle: string;
    earlyEngineeringTitle: string;
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
      bioParagraph1:
        "At Tikkie (ABN AMRO), I build payment infrastructure, idempotent settlement APIs, and real-time merchant portals used daily by thousands of Dutch businesses.",
      bioParagraph2:
        "Double Master's from TU Delft in Computer Science (Data Science) and Science Education. Co-founded Bitsized, built software for the public sector, and published research analyzing 175k online learners.",
      bioParagraph3: "",
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
        "High-throughput payment APIs and merchant portals. Built idempotent settlement workflows, partner webhook infrastructure, and financial reporting tools processing millions in transactions across Dutch enterprises.",
      tikkieLink: "View role details →",
      thesisTag: "TU Delft MSc Thesis · 2024",
      thesisTitle: "Debugging the Divide",
      thesisSubtitle: "Clickstream Telemetry & Engagement Clustering across 175k Learners",
      thesisDescription:
        "Analyzed learning patterns and dropout dynamics across 14 computer science MOOC runs on Open edX. Built unsupervised clustering pipelines (k-means) and regression models in Python to quantify retention differences between men and women.",
      thesisLink: "Explore research telemetry →",
      thesisSkills: ["Python", "Pandas", "Scikit-learn", "Open edX"],
      bitsizedTag: "Co-Founder & Lead Engineer · 2023 – 2025",
      bitsizedTitle: "Bitsized",
      bitsizedSubtitle: "In-Browser Execution Sandboxes for CS Education",
      bitsizedDescription:
        "Browser-based code sandboxes and automated evaluation environments adopted by Dutch secondary school computer science departments. Built client-side test runners, interactive exercises, and teacher management tooling.",
      bitsizedLink: "View platform details →",
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
      womenLabel: "Women",
      menLabel: "Men",
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
      methodologyTitle: "Methodology:",
      methodologyText:
        "k-means clustering across normalized Open edX event logs: session frequency, submission cadence, and video interactions.",
      authorLabel: "Author: Casper W. R. Hildebrand",
      facultyLabel: "TU Delft Faculty of EEMCS / EWI",
      repositoryLink: "https://repository.tudelft.nl/record/uuid/53e18584-6997-4089-94b6-dc7bc4c59f2a",
      repositoryText: "View published thesis at TU Delft Repository ↗",
    },
    workExperience: {
      title: "Work Experience",
      intro:
        "Production engineering at Tikkie, cloud architecture, browser sandbox design, enterprise data migrations, and computer science education.",
      currentBadge: "Current",
      to: "to",
      filterAll: "All Roles",
      filterEngineering: "Engineering & Systems",
      filterEducation: "Education & Teaching",
      primaryHeading: "Software Engineering",
      primarySubtitle: "",
      archiveHeading: "Teaching & Academic Work",
      archiveSubtitle: "",
      earlyEngineeringTitle: "Prior Roles & University Internships",
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
      bioParagraph1:
        "Bij Tikkie (ABN AMRO) ontwikkel ik betaalinfrastructuur, idempotente settlement-API's en dashboards voor duizenden Nederlandse ondernemers.",
      bioParagraph2:
        "Dubbele Master aan de TU Delft in Technische Informatica en Didactiek. Mede-oprichter van Bitsized, ervaring in de publieke sector en auteur van onderzoek onder 175k online cursisten.",
      bioParagraph3: "",
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
        "Bedrijfskritische betaal-API's en dashboards voor Tikkie Zakelijk: bouw van idempotente settlement-workflows, partner-webhooks en financiële rapportagetools voor duizenden ondernemers.",
      tikkieLink: "Bekijk functiedetails →",
      thesisTag: "TU Delft Masterscriptie · 2024",
      thesisTitle: "Debugging the Divide",
      thesisSubtitle: "Klikstream-telemetrie & clustering over 175.000 cursisten",
      thesisDescription:
        "Onderzoek naar leerpatronen en uitvaldynamiek over 14 edities van TU Delft computer science MOOCs op Open edX. Bouwde clustering-pipelines (k-means) en regressiemodellen in Python om retentieverschillen tussen mannen en vrouwen te kwantificeren.",
      thesisLink: "Bekijk onderzoeksdata →",
      thesisSkills: ["Python", "Pandas", "Scikit-learn", "Open edX"],
      bitsizedTag: "Mede-oprichter & Lead Engineer · 2023 – 2025",
      bitsizedTitle: "Bitsized",
      bitsizedSubtitle: "In-Browser Sandboxes voor Informaticaonderwijs",
      bitsizedDescription:
        "Browser-gebaseerde code-sandboxes en realtime evaluatie-omgevingen voor informaticasecties in het voortgezet onderwijs. Ontwikkelde client-side test-runners, automatische opgave-evaluatie en docententools.",
      bitsizedLink: "Bekijk platformdetails →",
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
      womenLabel: "Vrouwen",
      menLabel: "Mannen",
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
      methodologyTitle: "Methodologie:",
      methodologyText:
        "k-means clustering op genormaliseerde Open edX logs: sessiefrequentie, inleverritme en video-interacties.",
      authorLabel: "Auteur: Casper W. R. Hildebrand",
      facultyLabel: "TU Delft Faculteit EWI",
      repositoryLink: "https://repository.tudelft.nl/record/uuid/53e18584-6997-4089-94b6-dc7bc4c59f2a",
      repositoryText: "Bekijk de afstudeerscriptie in de TU Delft Repository ↗",
    },
    workExperience: {
      title: "Werkervaring",
      intro:
        "Productie-engineering bij Tikkie, cloudarchitectuur, browser-sandbox design, enterprise datamigraties en informaticaonderwijs.",
      currentBadge: "Huidig",
      to: "tot",
      filterAll: "Alle Functies",
      filterEngineering: "Engineering & Systemen",
      filterEducation: "Onderwijs & Didactiek",
      primaryHeading: "Softwareontwikkeling",
      primarySubtitle: "",
      archiveHeading: "Onderwijs & Academisch Werk",
      archiveSubtitle: "",
      earlyEngineeringTitle: "Eerdere Functies & Stages",
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
