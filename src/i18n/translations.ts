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
    items: {
      title: string;
      subtitle: string;
      startDate: string;
      endDate: string;
      current?: boolean;
      text: string;
      skills: string[];
      category?: "engineering" | "education";
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
      subtitle: "Single-Page ATS Format • Full-Stack Software Engineer",
      openNewTab: "Open in New Tab",
      downloadPdf: "Download PDF",
      mobilePrompt: "Viewing on a mobile device? Open fullscreen for the optimal reading experience.",
      viewFullscreen: "View Fullscreen PDF",
    },
    intro: {
      heroTitle: "Full-stack software engineer building payment services and web applications at Tikkie.",
      bioParagraph1:
        "Full-stack software engineer at Tikkie (ABN AMRO), developing merchant payment APIs and business portals used across the Netherlands.",
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
      tikkieTag: "Production Systems",
      tikkieTitle: "Tikkie Business",
      tikkieSubtitle: "Merchant Payment Services & Portals",
      tikkieDescription:
        "Merchant payment APIs and business dashboards for Tikkie Business: idempotent partner endpoints, payment status webhooks, and reporting tools for Dutch enterprises.",
      tikkieLink: "View career history →",
      thesisTag: "TU Delft · Research",
      thesisTitle: "Debugging the Divide: 174,988 CS MOOC Learners",
      thesisSubtitle: "Student Engagement & Learning Patterns",
      thesisDescription:
        "Large-scale study analyzing learning patterns and engagement trajectories across 174,988 Open edX students using clustering and statistical regression in Python and Pandas.",
      thesisLink: "Explore research telemetry →",
      thesisSkills: ["Python", "Pandas", "Scikit-learn", "Open edX"],
      bitsizedTag: "Co-Founder & Lead Engineer",
      bitsizedTitle: "Bitsized",
      bitsizedSubtitle: "Interactive Code Execution Engine",
      bitsizedDescription:
        "Browser-based execution sandboxes and interactive curriculum tools adopted by Dutch secondary school computer science departments.",
      bitsizedLink: "View experience →",
    },
    dataExplorer: {
      badge: "TU Delft • 2024",
      title: "Debugging the Divide · Telemetry",
      subtitle:
        "Telemetry analysis of 174,988 learners across 14 TU Delft Computer Science MOOC runs.",
      statLearners: "Learners analyzed",
      statLearnersValue: "174,988",
      statRuns: "Course iterations",
      statCourses: "TU Delft MOOCs",
      statIntent: "Women career intent",
      statIntentValue: "+16.7 pp",
      tabMotivations: "1. Motivations by Gender",
      tabClusters: "2. Engagement Clusters (k-Means)",
      womenLabel: "Women",
      menLabel: "Men",
      motivations: {
        careerLabel: "Career Advancement & Transition",
        careerDelta: "+16.7 pp for women",
        careerExplanation:
          "Women enrolled with explicit vocational intent to transition into tech roles or upskill for promotions.",
        leisureLabel: "Hobby, Curiosity & Leisure",
        leisureDelta: "+21.0 pp for men",
        leisureExplanation:
          "Men were more than twice as likely to engage as recreational learners without immediate vocational stakes.",
        degreeLabel: "Formal Degree & Coursework Prep",
        degreeDelta: "+4.3 pp for women",
        degreeExplanation:
          "Enrollment as supplementary study material alongside formal university degree coursework.",
      },
      researchTakeawayTitle: "Key Finding:",
      researchTakeawayText:
        "Women enrolled with high vocational urgency (+16.7 pp career transition), whereas men engaged recreationally (+21.0 pp hobby). Early course onboarding must scaffold explicit career pathways.",
      clusters: {
        completersName: "Completers",
        completersBehavior: "High submission density",
        completersDesc:
          "Consistent weekly engagement, 90%+ problem attempts, active forum participation.",
        auditorsName: "Auditors & Viewers",
        auditorsBehavior: "High video / Low assessment",
        auditorsDesc:
          "Systematic lecture video viewing and resource downloads with minimal graded submissions.",
        samplersName: "Samplers & Drop-ins",
        samplersBehavior: "Front-loaded exploration",
        samplersDesc:
          "High activity during initial weeks or specific technical modules before disengaging.",
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
        "Software engineering at Tikkie, cloud architecture, browser sandboxes, and computer science education.",
      currentBadge: "Current",
      to: "to",
      filterAll: "All Roles",
      filterEngineering: "Engineering & Systems",
      filterEducation: "Education & Teaching",
      primaryHeading: "Featured Experience",
      primarySubtitle: "Production software and platforms",
      archiveHeading: "Prior Experience",
      archiveSubtitle: "Chronological history across engineering, consulting, and education",
      items: [
        {
          title: "Full Stack Software Engineer",
          subtitle: "Tikkie (ABN AMRO)",
          image: {
            uri: "tikkie.svg",
            alt: "Tikkie (ABN AMRO)",
          },
          startDate: "Mar 2026",
          endDate: "Present",
          current: true,
          category: "engineering",
          text: "• **Merchant Infrastructure**: Engineered merchant payment endpoints and services powering thousands of Dutch enterprises.\n• **API Reliability**: Implemented idempotent payment processing workflows, partner webhooks, and automated error recovery routines.\n• **Merchant Portals**: Developed merchant analytics dashboards and reporting portals with React, TypeScript, Node.js, and AWS serverless infrastructure.",
          skills: ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL"],
        },
        {
          title: "Software Engineer – Talent Program",
          subtitle: "Harvest",
          image: {
            uri: "harvest.svg",
            alt: "Harvest Fellowship",
          },
          startDate: "Feb 2026",
          endDate: "Present",
          current: true,
          category: "engineering",
          text: "• Engineering development program running alongside production work at Tikkie.\n• Completed practical modules covering cloud architecture, event-driven design, and system reliability.",
          skills: ["Cloud Architecture", "Distributed Systems", "Event-Driven Design"],
        },
        {
          title: "Platform Co-Founder & Lead Engineer",
          subtitle: "Bitsized",
          image: {
            uri: "bitsized.jpg",
            alt: "Bitsized",
          },
          startDate: "Jan 2023",
          endDate: "Feb 2025",
          category: "engineering",
          text: "Co-founded an interactive educational coding platform adopted by Dutch secondary school CS departments. Engineered isolated in-browser code execution sandboxes, real-time code evaluation, and teacher assignment management tooling.",
          skills: ["TypeScript", "React", "Node.js", "Docker"],
        },
        {
          title: "IT Consultant & Software Analyst",
          subtitle: "Netcompany",
          image: {
            uri: "netcompany.jpg",
            alt: "Netcompany",
          },
          startDate: "Sep 2021",
          endDate: "Jun 2022",
          category: "engineering",
          text: "Engineered ETL data migration workflows and technical specifications for Dutch public sector enterprise systems (Vervangingsfonds & Participatiefonds), and built full-stack commercial property energy modeling tools.",
          skills: ["C# / .NET", "SQL Server", "Data Migration"],
        },
        {
          title: "Software Developer",
          subtitle: "Bexter",
          image: {
            uri: "bexter.jpg",
            alt: "Bexter",
          },
          startDate: "Sep 2019",
          endDate: "May 2021",
          category: "engineering",
          text: "Engineered backend services and modernized responsive web portals for TrackOnline, an enterprise asset logistics platform managing reusable supply chain packaging.",
          skills: ["C# / .NET", "JavaScript", "REST APIs", "Relational Databases"],
        },
        {
          title: "Software Developer",
          subtitle: "Muziekweb",
          image: {
            uri: "muziekweb.jpg",
            alt: "Muziekweb",
          },
          startDate: "May 2020",
          endDate: "Jul 2020",
          category: "engineering",
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
            uri: "sgl.jpg",
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
            uri: "tudelft.jpg",
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
            uri: "pietergroen.jpg",
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
            uri: "tudelft.jpg",
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
            uri: "tudelft.jpg",
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
            uri: "tudelft.jpg",
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
            uri: "kth.png",
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
            uri: "tudelft.jpg",
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
        "I am a full-stack software engineer based in Amsterdam, currently working at Tikkie (ABN AMRO). I build merchant-facing payment services and business portals where reliability, security, and clear data models matter every day.",
      paragraph2:
        "With a double Master's degree from TU Delft in Computer Science and Science Education, I bridge technical depth with clear communication. In software teams, I prioritize readable code, well-typed API boundaries, thorough reviews, and accessible documentation.",
      paragraph3:
        "Prior to Tikkie, I co-founded Bitsized (an interactive coding sandbox for secondary education), worked as an IT consultant on public sector data systems, and taught computer science in high schools.",
      beyondHeading: "Outside of Work",
      beyondSubtitle:
        "Interests and creative pursuits outside software engineering.",
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
        {
          title: "Synthesizers & Audio",
          description:
            "In my spare time, I experiment with hardware and software synthesizers, sound design, and audio production.",
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
      subtitle: "Enkelzijdig ATS-Formaat • Full-Stack Software Engineer",
      openNewTab: "Openen in nieuw tabblad",
      downloadPdf: "Download PDF",
      mobilePrompt: "Bekijk je dit op mobiel? Open op volledig scherm voor de beste leeservaring.",
      viewFullscreen: "Bekijk PDF op volledig scherm",
    },
    intro: {
      heroTitle: "Full-stack software engineer voor zakelijke betaaldiensten en webapplicaties bij Tikkie.",
      bioParagraph1:
        "Full-stack software engineer bij Tikkie (ABN AMRO), waar ik werk aan zakelijke betaal-API's en portals voor ondernemers in Nederland.",
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
      tikkieTag: "Productiesystemen",
      tikkieTitle: "Tikkie Zakelijk",
      tikkieSubtitle: "Zakelijke Betaaldiensten & Portals",
      tikkieDescription:
        "Betaal-API's en dashboards voor Tikkie Zakelijk: idempotente partner-endpoints, webhook-notificaties en rapportagetools voor ondernemers.",
      tikkieLink: "Bekijk werkervaring →",
      thesisTag: "TU Delft · Onderzoek",
      thesisTitle: "Debugging the Divide: 174.988 Cursisten",
      thesisSubtitle: "Betrokkenheid & Leerpatronen",
      thesisDescription:
        "Grootschalig onderzoek naar leerpatronen en betrokkenheid onder 174.988 Open edX-cursisten via clustering en regressieanalyse in Python en Pandas.",
      thesisLink: "Bekijk onderzoeksdata →",
      thesisSkills: ["Python", "Pandas", "Scikit-learn", "Open edX"],
      bitsizedTag: "Mede-oprichter & Lead Engineer",
      bitsizedTitle: "Bitsized",
      bitsizedSubtitle: "Interactieve Code Execution Engine",
      bitsizedDescription:
        "In-browser code-executie sandboxes en interactieve lesmaterialen ontworpen voor informaticasecties in het voortgezet onderwijs.",
      bitsizedLink: "Bekijk ervaring →",
    },
    dataExplorer: {
      badge: "TU Delft • 2024",
      title: "Debugging the Divide · Telemetrie",
      subtitle:
        "Telemetrie-analyse van 174.988 cursisten over 14 TU Delft Computer Science MOOC-edities.",
      statLearners: "Cursisten geanalyseerd",
      statLearnersValue: "174.988",
      statRuns: "Cursusedities",
      statCourses: "TU Delft MOOCs",
      statIntent: "Vrouwen loopbaanfocus",
      statIntentValue: "+16,7 pp",
      tabMotivations: "1. Motivaties naar Geslacht",
      tabClusters: "2. Gedragsclusters (k-Means)",
      womenLabel: "Vrouwen",
      menLabel: "Mannen",
      motivations: {
        careerLabel: "Loopbaangroei & Baanswitch",
        careerDelta: "+16,7 pp bij vrouwen",
        careerExplanation:
          "Vrouwen schreven zich in met een expliciet beroepsdoel: instromen in de techsector of doorgroeien in hun functie.",
        leisureLabel: "Hobby, Nieuwsgierigheid & Vrije tijd",
        leisureDelta: "+21,0 pp bij mannen",
        leisureExplanation:
          "Mannen namen meer dan twee keer zo vaak deel uit recreatieve interesse zonder direct professioneel belang.",
        degreeLabel: "Universitaire Voorbereiding & Studie",
        degreeDelta: "+4,3 pp bij vrouwen",
        degreeExplanation:
          "Deelname ter ondersteuning van een formele universitaire bachelor- of masteropleiding.",
      },
      researchTakeawayTitle: "Kerninzicht:",
      researchTakeawayText:
        "Vrouwen starten met een hoge beroepsmatige urgentie (+16,7 pp loopbaanswitch), terwijl mannen recreatief deelnemen (+21,0 pp hobby). Cursus-onboarding dient gerichte loopbaanpaden te bieden.",
      clusters: {
        completersName: "Afronders",
        completersBehavior: "Hoge inleverfrequentie",
        completersDesc:
          "Consistente wekelijkse inzet, 90%+ opgaven ingeleverd en actieve bijdragen op het forum.",
        auditorsName: "Toehoorders & Kijkers",
        auditorsBehavior: "Veel video / Weinig toetsen",
        auditorsDesc:
          "Systematisch bekijken van videocolleges en downloads zonder deelname aan becijferde toetsen.",
        samplersName: "Verkenners & Oriënteerders",
        samplersBehavior: "Kortstondige verkenning",
        samplersDesc:
          "Hoge activiteit in de eerste collegeweken of bij specifieke modules, waarna de deelname stopt.",
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
        "Softwareontwikkeling bij Tikkie, cloudarchitectuur, browser sandboxes en informaticaonderwijs.",
      currentBadge: "Huidig",
      to: "tot",
      filterAll: "Alle Functies",
      filterEngineering: "Engineering & Systemen",
      filterEducation: "Onderwijs & Didactiek",
      primaryHeading: "Uitgelichte Ervaring",
      primarySubtitle: "Productiesoftware en platforms",
      archiveHeading: "Eerdere Ervaring",
      archiveSubtitle: "Chronologisch overzicht van functies in softwareontwikkeling, consultancy en onderwijs",
      items: [
        {
          title: "Full Stack Software Engineer",
          subtitle: "Tikkie (ABN AMRO)",
          image: {
            uri: "tikkie.svg",
            alt: "Tikkie (ABN AMRO)",
          },
          startDate: "mrt 2026",
          endDate: "Heden",
          current: true,
          category: "engineering",
          text: "• **Zakelijke Infrastructuur**: Ontwikkeling van zakelijke betaal-API's en diensten voor duizenden Nederlandse ondernemers.\n• **API-Betrouwbaarheid**: Implementatie van idempotente betaalprocessen, partner-webhooks en foutafhandeling.\n• **Ondernemersportals**: Bouw van dashboards en rapportagetools met React, TypeScript, Node.js en AWS serverless infrastructuur.",
          skills: ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL"],
        },
        {
          title: "Software Engineer – Talent Program",
          subtitle: "Harvest",
          image: {
            uri: "harvest.svg",
            alt: "Harvest Fellowship",
          },
          startDate: "feb 2026",
          endDate: "Heden",
          current: true,
          category: "engineering",
          text: "• Professioneel ontwikkelprogramma parallel aan werkzaamheden bij Tikkie.\n• Praktijkgerichte modules afgerond in cloudarchitectuur, event-driven design en systeembetrouwbaarheid.",
          skills: ["Cloud Architecture", "Distributed Systems", "Event-Driven Design"],
        },
        {
          title: "Platform Mede-oprichter & Lead Engineer",
          subtitle: "Bitsized",
          image: {
            uri: "bitsized.jpg",
            alt: "Bitsized",
          },
          startDate: "jan 2023",
          endDate: "feb 2025",
          category: "engineering",
          text: "Mede-oprichter van een interactief programmeerplatform voor informaticasecties in het voortgezet onderwijs. Verantwoordelijk voor browser-gebaseerde code-sandboxes, realtime evaluatie en tools voor docenten.",
          skills: ["TypeScript", "React", "Node.js", "Docker"],
        },
        {
          title: "IT Consultant & Software Analyst",
          subtitle: "Netcompany",
          image: {
            uri: "netcompany.jpg",
            alt: "Netcompany",
          },
          startDate: "sep 2021",
          endDate: "jun 2022",
          category: "engineering",
          text: "Ontwikkeling van datamigraties en technische specificaties voor publieke organisaties (Vervangingsfonds & Participatiefonds), en bouw van full-stack energielabel-modelleringstools voor commercieel vastgoed.",
          skills: ["C# / .NET", "SQL Server", "Data Migration"],
        },
        {
          title: "Software Developer",
          subtitle: "Bexter",
          image: {
            uri: "bexter.jpg",
            alt: "Bexter",
          },
          startDate: "sep 2019",
          endDate: "mei 2021",
          category: "engineering",
          text: "Ontwikkeling van backend-services en modernisering van webportals voor TrackOnline, een platform voor emballage- en logistiekbeheer.",
          skills: ["C# / .NET", "JavaScript", "REST APIs", "Relational Databases"],
        },
        {
          title: "Software Developer",
          subtitle: "Muziekweb",
          image: {
            uri: "muziekweb.jpg",
            alt: "Muziekweb",
          },
          startDate: "mei 2020",
          endDate: "jul 2020",
          category: "engineering",
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
            uri: "sgl.jpg",
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
            uri: "tudelft.jpg",
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
            uri: "pietergroen.jpg",
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
            uri: "tudelft.jpg",
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
            uri: "tudelft.jpg",
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
            uri: "tudelft.jpg",
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
            uri: "kth.png",
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
            uri: "tudelft.jpg",
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
        "Dankzij mijn dubbele Master aan de TU Delft in Technische Informatica en Didactiek combineer ik technische diepgang met heldere communicatie. Binnen softwareteams hecht ik veel waarde aan leesbare code, goed getypte API's, grondige reviews en duidelijke documentatie.",
      paragraph3:
        "Vóór Tikkie richtte ik Bitsized op (een interactieve programmeer-sandbox voor het voortgezet onderwijs), werkte ik als IT-consultant aan datasystemen in de publieke sector en gaf ik informatica op de middelbare school.",
      beyondHeading: "Buiten het werk",
      beyondSubtitle:
        "Interesses en creatieve bezigheden buiten softwareontwikkeling.",
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
        {
          title: "Synthesizers & Audio",
          description:
            "In mijn vrije tijd experimenteer ik met analoge en digitale synthesizers, geluidsontwerp en audioproductie.",
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
