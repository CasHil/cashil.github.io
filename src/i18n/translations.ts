export type Language = "en" | "nl";

export interface TranslationDictionary {
  nav: {
    overview: string;
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
  intro: {
    heroTitle: string;
    bioParagraph1: string;
    bioParagraph2: string;
    bioParagraph3: string;
    exploreWork: string;
    exploreEdu: string;
    getInTouch: string;
    downloadCv: string;
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
    principlesHeading: string;
    principles: {
      number: string;
      title: string;
      description: string;
    }[];
    beyondHeading: string;
    beyondSubtitle: string;
    interests: {
      title: string;
      subtitle: string;
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
        "Fintech & Payment Flows",
        "TypeScript, React, Node.js",
        "AWS, PostgreSQL, Cloud",
        "Data Science & Analytics",
      ],
      year: "Casper Hildebrand • 2026",
      cvDownload: "CV (PDF)",
    },
    intro: {
      heroTitle: "Software engineer building high-throughput merchant payment rails at Tikkie.",
      bioParagraph1:
        "I engineer merchant payment systems for Tikkie Business (ABN AMRO), building resilient settlement workflows and high-throughput APIs powering millions of Dutch transactions.",
      bioParagraph2:
        "Double Master's from TU Delft in Computer Science (Data Science) and Science Education. Thesis researched clickstream telemetry across 175k learners. Co-founded Bitsized.",
      bioParagraph3: "",
      exploreWork: "Explore Work Experience",
      exploreEdu: "Education & Degrees",
      getInTouch: "Get in touch →",
      downloadCv: "Download CV (PDF)",
      featuredHeading: "Selected Work",
      featuredSubtitle: "",
      tikkieTag: "Production Systems",
      tikkieTitle: "Tikkie Business",
      tikkieSubtitle: "Merchant Settlement & Payment Rails",
      tikkieDescription:
        "Resilient merchant payment rails powering millions of Dutch transactions: fault-tolerant settlement pipelines, partner APIs, and zero-downtime reliability.",
      tikkieLink: "View career history →",
      thesisTag: "TU Delft · Research",
      thesisTitle: "Debugging the Divide: 174,988 CS MOOC Learners",
      thesisSubtitle: "Clickstream Telemetry & Vocational Motivation",
      thesisDescription:
        "Empirical thesis analyzing gender participation across TU Delft CS MOOCs. Revealed women enroll with +16.7 pp higher career advancement intent than men, who engage primarily for leisure.",
      thesisLink: "Explore research telemetry →",
      thesisSkills: ["k-Means Clustering", "Clickstream Telemetry", "Python / Pandas"],
      bitsizedTag: "Co-Founder & Lead Engineer",
      bitsizedTitle: "Bitsized",
      bitsizedSubtitle: "Interactive Code Execution Engine",
      bitsizedDescription:
        "Built browser-based code execution sandboxes and interactive CS curriculum tooling adopted by Dutch secondary schools.",
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
        "Production fintech infrastructure at Tikkie, cloud architecture, browser sandboxes, and computer science pedagogy.",
      currentBadge: "Current",
      to: "to",
      filterAll: "All Roles",
      filterEngineering: "Engineering & Systems",
      filterEducation: "Pedagogy & Leadership",
      primaryHeading: "Primary Experience",
      primarySubtitle: "High-throughput fintech and product systems",
      archiveHeading: "Archive & Trajectory",
      archiveSubtitle: "Full chronological index across systems, consulting, and pedagogy",
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
          text: "• **Merchant Infrastructure**: Engineered merchant payment rails powering thousands of Dutch enterprises and millions of real-time transactions.\n• **API Reliability**: Built fault-tolerant settlement pipelines, idempotent partner endpoints, and zero-downtime releases.\n• **Frontend Dashboards**: Developed merchant portals with React, TypeScript, and AWS cloud infrastructure.",
          skills: ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL", "Fintech Scale"],
        },
        {
          title: "Software Engineer | Young Talent",
          subtitle: "Harvest",
          image: {
            uri: "harvest.svg",
            alt: "Harvest Young Talent",
          },
          startDate: "Feb 2026",
          endDate: "Present",
          current: true,
          category: "engineering",
          text: "• **Distributed Architecture**: Selective engineering fellowship running parallel to production at Tikkie.\n• **Resilience Engineering**: Bi-weekly intensive labs on event-driven design, fault isolation, and high-concurrency systems.",
          skills: ["Distributed Systems", "Software Architecture", "Leadership"],
        },
        {
          title: "Computer Science Teacher",
          subtitle: "CSG De Lage Waard",
          startDate: "Feb 2025",
          endDate: "Jul 2025",
          category: "education",
          text: "Directed the CS department across 10 cohorts (~200 students), designing graduation examination standards and mentoring capstone software engineering projects.",
          skills: ["CS Pedagogy", "Curriculum Design", "Examination Standards"],
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
          text: "Taught computer architecture, digital logic, and web foundations (HTML/CSS) for the Master's in Science Education teaching practicum.",
          skills: ["Computer Architecture", "HTML/CSS", "Pedagogy"],
        },
        {
          title: "Platform Co-Founder & Engineer",
          subtitle: "Bitsized",
          image: {
            uri: "bitsized.jpg",
            alt: "Bitsized",
          },
          startDate: "Jan 2023",
          endDate: "Feb 2025",
          category: "engineering",
          text: "Co-founded an interactive educational coding platform used by Dutch secondary school students. Engineered real-time in-browser code execution sandboxes and curriculum management tooling with fellow TU Delft students.",
          skills: ["React", "Node.js", "EdTech Platform", "Product Engineering"],
        },
        {
          title: "Software Analyst",
          subtitle: "Netcompany",
          image: {
            uri: "netcompany.jpg",
            alt: "Netcompany",
          },
          startDate: "Feb 2022",
          endDate: "Jun 2022",
          category: "engineering",
          text: "Re-architected data migration flows and technical specifications for national public sector enterprise applications (Vervangingsfonds, Participatiefonds).",
          skills: ["Systems Analysis", "Requirements Engineering", "Public Sector IT"],
        },
        {
          title: "Software Consultant",
          subtitle: "Netcompany",
          image: {
            uri: "netcompany.jpg",
            alt: "Netcompany",
          },
          startDate: "Sep 2021",
          endDate: "Feb 2022",
          category: "engineering",
          text: "Built full-stack evaluation tools modeling commercial property energy metrics and governmental compliance regulations.",
          skills: ["Full Stack Development", "Governmental IT", "Sustainability Metrics"],
        },
        {
          title: "BSc CS&E Board of Studies Member",
          subtitle: "Delft University of Technology",
          image: {
            uri: "tudelft.jpg",
            alt: "TU Delft",
          },
          startDate: "Oct 2021",
          endDate: "Jun 2022",
          category: "education",
          text: "Evaluated and structured curriculum improvements for the Bachelor's in Computer Science & Engineering in a monthly advisory panel with professors and student representatives.",
          skills: ["Curriculum Quality", "Academic Governance"],
        },
        {
          title: "Frontend Developer",
          subtitle: "Bexter",
          image: {
            uri: "bexter.jpg",
            alt: "Bexter",
          },
          startDate: "Mar 2020",
          endDate: "May 2021",
          category: "engineering",
          text: "Maintained and modernized frontend features across Bexter's three client web portals and marketing platforms.",
          skills: ["Frontend Engineering", "JavaScript", "Web Portals"],
        },
        {
          title: "Developer",
          subtitle: "Muziekweb",
          image: {
            uri: "muziekweb.jpg",
            alt: "Muziekweb",
          },
          startDate: "May 2020",
          endDate: "Jul 2020",
          category: "engineering",
          text: "Automated data ingestion pipeline reconciling 100k+ discography records via the Discogs API with verification UI.",
          skills: ["Discogs API", "Data Ingestion Pipeline", "UI Verification"],
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
          text: "Taught high school computer science cohorts introductory programming principles (variables, control flow, functions, basic algorithms) and visual computing with Tinkercad.",
          skills: ["Introductory CS", "Algorithms", "Tinkercad"],
        },
        {
          title: "Junior Software Developer",
          subtitle: "Bexter",
          image: {
            uri: "bexter.jpg",
            alt: "Bexter",
          },
          startDate: "Sep 2019",
          endDate: "Mar 2020",
          category: "engineering",
          text: "Engineered backend services for TrackOnline, an asset management platform managing reusable logistics assets (containers, roll cages, dollies).",
          skills: ["Backend Development", "Asset Management", "Logistics Systems"],
        },
        {
          title: "Student Ambassador & Teaching Assistant",
          subtitle: "Delft University of Technology",
          image: {
            uri: "tudelft.jpg",
            alt: "TU Delft",
          },
          startDate: "Oct 2018",
          endDate: "Feb 2025",
          category: "education",
          text: "Mentored undergraduate computer science cohorts in algorithms, software testing, and object-oriented programming. Represented CS&E at open days and hosted 40+ shadow students.",
          skills: ["Algorithms", "Software Testing", "Code Review", "Mentorship"],
        },
      ],
    },
    education: {
      title: "Education & Research",
      intro:
        "Double Master's graduate from Delft University of Technology across Computer Science (Data Science specialization) and Science Education & Communication, with international exchange studies at KTH Royal Institute of Technology.",
      thesisTitle: "Academic Milestones",
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
          skills: ["Data Science", "Machine Learning", "Statistical Modeling", "k-Means Clustering", "Python"],
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
          skills: ["Instructional Design", "Computer Science Pedagogy", "Curriculum Development", "Communication"],
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
          skills: ["Machine Learning", "Information Visualization", "HCI"],
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
          skills: ["Data Structures", "Algorithms", "Software Engineering", "Databases"],
        },
      ],
    },
    about: {
      title: "About & Engineering Philosophy",
      paragraph1:
        "I believe the best software engineering is defined by clarity: clear domain models, resilient API contracts, and predictable operational boundaries. At Tikkie, I build financial rails where correctness and zero downtime are table stakes.",
      paragraph2:
        "Holding dual Master's degrees in Computer Science and Science Education gives me a distinctive approach to engineering teams: I treat system architecture and technical communication as the same discipline. Great engineers don't just write robust code; they write crisp documentation, mentor relentlessly, and build shared mental models.",
      paragraph3:
        "Outside production, I study distributed systems, play electric bass, and analyze chess endgames—disciplines rooted in rhythm, invariants, and eliminating unnecessary noise.",
      principlesHeading: "Engineering Principles",
      principles: [
        {
          number: "01",
          title: "Invariants Over Assumptions",
          description:
            "Payment networks and distributed systems fail in creative ways. We enforce strict transactional boundaries, idempotent state transitions, and explicit failure modes over optimistic happy paths.",
        },
        {
          number: "02",
          title: "Communication is System Architecture",
          description:
            "A system's long-term resilience is bounded by how well the team understands it. Crisp interfaces, typed schemas, and lucid documentation prevent architectural drift far better than verbal consensus.",
        },
        {
          number: "03",
          title: "Simplicity Under Pressure",
          description:
            "Avoid premature abstraction. The most robust operational components are small, deterministic, thoroughly tested, and trivial to reason about during a 2 AM production incident.",
        },
      ],
      beyondHeading: "Beyond the Terminal",
      beyondSubtitle:
        "Disciplines and creative pursuits that inform how I approach focus, rhythm, and complex systems.",
      interests: [
        {
          title: "Bass Guitar",
          subtitle: "Groove, Rhythm & Tone",
          description:
            "Playing electric bass guitar has been my primary creative outlet for years. The bassist anchors the ensemble: locking into the pocket, eliminating timing drift, and establishing harmonic foundation.",
        },
        {
          title: "Chess",
          subtitle: "Tactics & Invariant Strategy",
          description:
            "Studying classical opening theory and tactical calculation. Chess rewards patience, disciplined calculation of candidate moves, and strict consideration of downstream consequences.",
        },
        {
          title: "Developer Tooling & Automation",
          subtitle: "Pragmatic Engineering Tooling",
          description:
            "Experimenting with developer tools, automated test suites, and workflow tooling that measurably accelerate real software production without sacrificing verification.",
        },
      ],
    },
    outreach: {
      heading: "Building resilient systems together.",
      subheading:
        "Available for staff engineering, fintech architecture, and technical advisory discussions.",
      emailBtn: "Email Casper",
      cvBtn: "Download Full CV (PDF)",
    },
  },
  nl: {
    nav: {
      overview: "Overzicht",
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
        "Fintech & Betaalinfrastructuur",
        "TypeScript, React, Node.js",
        "AWS, PostgreSQL, Cloud",
        "Data Science & Analytics",
      ],
      year: "Casper Hildebrand • 2026",
      cvDownload: "CV (PDF)",
    },
    intro: {
      heroTitle: "Software engineer voor hoog-volume betaalinfrastructuur bij Tikkie.",
      bioParagraph1:
        "Ik ontwikkel betaalinfrastructuur voor Tikkie Zakelijk (ABN AMRO): veerkrachtige settlement flows en high-throughput API's voor miljoenen Nederlandse transacties.",
      bioParagraph2:
        "Dubbele Master aan de TU Delft in Computer Science (Data Science) en Science Education. Scriptieonderzoek naar telemetrie van 175k cursisten. Mede-oprichter van Bitsized.",
      bioParagraph3: "",
      exploreWork: "Bekijk werkervaring",
      exploreEdu: "Opleidingen & Titels",
      getInTouch: "Neem contact op →",
      downloadCv: "Download CV (PDF)",
      featuredHeading: "Uitgewerkt Werk",
      featuredSubtitle: "",
      tikkieTag: "Productiesystemen",
      tikkieTitle: "Tikkie Zakelijk",
      tikkieSubtitle: "Merchant Settlement & Betaalrails",
      tikkieDescription:
        "Veerkrachtige zakelijke betaalinfrastructuur voor miljoenen Nederlandse transacties: fouttolerante settlement-pipelines, partner-API's en hoge beschikbaarheid.",
      tikkieLink: "Bekijk werkervaring →",
      thesisTag: "TU Delft · Onderzoek",
      thesisTitle: "Debugging the Divide: 174.988 Cursisten",
      thesisSubtitle: "Telemetrie & Beroepsmatige Motivatie",
      thesisDescription:
        "Empirisch onderzoek naar genderverschillen in TU Delft informatica-MOOCs. Vrouwen starten met +16,7 pp hogere loopbaandoelen dan mannen, die primair voor de hobby meedoen.",
      thesisLink: "Bekijk onderzoeksdata →",
      thesisSkills: ["k-Means Clustering", "Clickstream Telemetrie", "Python / Pandas"],
      bitsizedTag: "Mede-oprichter & Lead Engineer",
      bitsizedTitle: "Bitsized",
      bitsizedSubtitle: "Interactieve Code Execution Engine",
      bitsizedDescription:
        "In-browser code execution sandboxes en interactieve informatica-curriculumtools ontwikkeld voor Nederlandse middelbare scholen.",
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
        "Fintech-infrastructuur bij Tikkie, cloudarchitectuur, browser sandboxes en informatica-didactiek.",
      currentBadge: "Huidig",
      to: "tot",
      filterAll: "Alle Functies",
      filterEngineering: "Engineering & Systemen",
      filterEducation: "Onderwijs & Leiderschap",
      primaryHeading: "Primaire Ervaring",
      primarySubtitle: "Hoog-volume fintech en platform architecturen",
      archiveHeading: "Carrière Archief",
      archiveSubtitle: "Volledig chronologisch overzicht over engineering, consulting en onderwijs",
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
          text: "• **Betaalinfrastructuur**: Ontwikkeling van zakelijke betaalinfrastructuur voor duizenden bedrijven en miljoenen transacties via Tikkie Zakelijk.\n• **API Betrouwbaarheid**: Bouwen van veerkrachtige settlement-pipelines, partner-integraties en zero-downtime releases.\n• **Merchant Dashboards**: Ontwikkeling van zakelijke dashboards met React, TypeScript en AWS cloudarchitectuur.",
          skills: ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL", "Fintech Schaal"],
        },
        {
          title: "Software Engineer | Young Talent",
          subtitle: "Harvest",
          image: {
            uri: "harvest.svg",
            alt: "Harvest Young Talent",
          },
          startDate: "feb 2026",
          endDate: "Heden",
          current: true,
          category: "engineering",
          text: "• **Gedistribueerde Architectuur**: Selectief engineering fellowship parallel aan productiewerk bij Tikkie.\n• **Resilience Engineering**: Tweewekelijkse intensieve labs over event-driven architecturen, foutisolatie en concurrency.",
          skills: ["Gedistribueerde Systemen", "Softwarearchitectuur", "Leiderschap"],
        },
        {
          title: "Docent Informatica",
          subtitle: "CSG De Lage Waard",
          startDate: "feb 2025",
          endDate: "jul 2025",
          category: "education",
          text: "Leiding over de informaticasectie over 10 klassen (~200 leerlingen), verantwoordelijk voor examennormen en begeleiding van profielwerkstukken.",
          skills: ["Informatica Didactiek", "Curriculumontwikkeling", "Exameneisen"],
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
          text: "Lesgegeven in computerarchitectuur, digitale logica en webfundamenten (HTML/CSS) voor het praktijkdeel van de masteropleiding tot eerstegraads docent.",
          skills: ["Computerarchitectuur", "HTML/CSS", "Didactiek"],
        },
        {
          title: "Platform Mede-oprichter & Engineer",
          subtitle: "Bitsized",
          image: {
            uri: "bitsized.jpg",
            alt: "Bitsized",
          },
          startDate: "jan 2023",
          endDate: "feb 2025",
          category: "engineering",
          text: "Mede-oprichter van een interactief programmeerplatform voor middelbare scholieren. Bouw van een in-browser code-executieomgeving en docentcurriculum-tools samen met medestudenten van de TU Delft.",
          skills: ["React", "Node.js", "Educatief Platform", "Productontwikkeling"],
        },
        {
          title: "Software Analyst",
          subtitle: "Netcompany",
          image: {
            uri: "netcompany.jpg",
            alt: "Netcompany",
          },
          startDate: "feb 2022",
          endDate: "jun 2022",
          category: "engineering",
          text: "Herontwerp van datamigraties en technische specificaties voor publieke enterprise-applicaties (Vervangingsfonds, Participatiefonds).",
          skills: ["Systeemanalyse", "Requirements Engineering", "Overheids-IT"],
        },
        {
          title: "Software Consultant",
          subtitle: "Netcompany",
          image: {
            uri: "netcompany.jpg",
            alt: "Netcompany",
          },
          startDate: "sep 2021",
          endDate: "feb 2022",
          category: "engineering",
          text: "Full-stack rekentools ontwikkeld voor duurzaamheidsstatistieken en milieuregels voor vastgoedeigenaren.",
          skills: ["Softwareontwikkeling", "Overheids-IT", "Duurzaamheidsdata"],
        },
        {
          title: "Opleidingscommissie BSc Technische Informatica",
          subtitle: "Technische Universiteit Delft",
          image: {
            uri: "tudelft.jpg",
            alt: "TU Delft",
          },
          startDate: "okt 2021",
          endDate: "jun 2022",
          category: "education",
          text: "Maandelijkse kwaliteitsbewaking en curriculumverbetering van het bachelorprogramma Technische Informatica met hoogleraren en studenten.",
          skills: ["Onderwijskwaliteit", "Curriculumevaluatie"],
        },
        {
          title: "Frontend Developer",
          subtitle: "Bexter",
          image: {
            uri: "bexter.jpg",
            alt: "Bexter",
          },
          startDate: "mrt 2020",
          endDate: "mei 2021",
          category: "engineering",
          text: "Onderhoud en ontwikkeling van frontend-functionaliteiten over de drie webportalen en dashboards van Bexter.",
          skills: ["Frontend Engineering", "JavaScript", "Webportalen"],
        },
        {
          title: "Developer",
          subtitle: "Muziekweb",
          image: {
            uri: "muziekweb.jpg",
            alt: "Muziekweb",
          },
          startDate: "mei 2020",
          endDate: "jul 2020",
          category: "engineering",
          text: "Geautomatiseerde data-ingestie pipeline gebouwd die 100k+ discografie-records via de Discogs API verifieerde en importeerde.",
          skills: ["Discogs API", "Data-inname", "UI Verificatie"],
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
          text: "Informaticaonderwijs verzorgd voor middelbare scholieren: basisprincipes programmeren (variabelen, functies, algoritmen) en grafisch programmeren in Tinkercad.",
          skills: ["Inleidende Informatica", "Algoritmen", "Tinkercad"],
        },
        {
          title: "Junior Software Developer",
          subtitle: "Bexter",
          image: {
            uri: "bexter.jpg",
            alt: "Bexter",
          },
          startDate: "sep 2019",
          endDate: "mrt 2020",
          category: "engineering",
          text: "Backend-ontwikkeling aan TrackOnline, een asset management platform voor meermalige logistieke ladingdragers zoals rolcontainers en dollies.",
          skills: ["Backend Ontwikkeling", "Asset Management", "Logistieke Systemen"],
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
          text: "Studenten begeleid bij algoritmen, software testing en objectgeoriënteerd programmeren. Vertegenwoordiger van de opleidingen tijdens open dagen en meeloopdagen voor 40+ scholieren.",
          skills: ["Algoritmen", "Software Testing", "Code Review", "Mentoraat"],
        },
      ],
    },
    education: {
      title: "Opleiding & Onderzoek",
      intro:
        "Dubbele Master aan de Technische Universiteit Delft in Computer Science (Data Science specialisatie) en Science Education & Communication, inclusief uitwisseling aan het KTH Royal Institute of Technology in Stockholm.",
      thesisTitle: "Academische Mijlpalen",
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
          skills: ["Data Science", "Machine Learning", "Statistiek", "k-Means Clustering", "Python"],
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
          skills: ["Onderwijsontwerp", "Informatica Didactiek", "Curriculumontwikkeling", "Communicatie"],
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
          skills: ["Machine Learning", "Informatievisualisatie", "HCI"],
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
          skills: ["Datastructuren", "Algoritmen", "Software Engineering", "Databases"],
        },
      ],
    },
    about: {
      title: "Over mij & Engineering Filosofie",
      paragraph1:
        "De beste software engineering wordt gekenmerkt door helderheid: scherpe domeinmodellen, veerkrachtige API-contracten en voorspelbare operationele grenzen. Bij Tikkie bouw ik aan financiële rails waar correctheid en zero downtime de standaard zijn.",
      paragraph2:
        "Mijn dubbele Master in Computer Science en Science Education geeft mij een duidelijke voorsprong in engineering teams: ik zie systeemarchitectuur en technische communicatie als één discipline. Goede engineers schrijven niet alleen robuuste code; ze schrijven heldere documentatie, begeleiden collega's en bouwen gedeelde mentale modellen.",
      paragraph3:
        "Buiten productie verdiep ik me in gedistribueerde systemen, speel ik elektrische basgitaar en analyseer ik schaakeindspelen—disciplines die draaien om ritme, invarianten en het elimineren van ruis.",
      principlesHeading: "Engineering Principes",
      principles: [
        {
          number: "01",
          title: "Invarianten Boven Aannames",
          description:
            "Betaalnetwerken en gedistribueerde systemen falen onverwacht. We bouwen strikte transactionele grenzen, idempotente statusovergangen en expliciete foutafhandeling in plaats van te hopen op het 'happy path'.",
        },
        {
          number: "02",
          title: "Communicatie is Systeemarchitectuur",
          description:
            "De betrouwbaarheid van een systeem wordt begrensd door het begrip binnen het team. Scherpe interfaces, getypte schema's en heldere documentatie voorkomen architectonische erosie.",
        },
        {
          number: "03",
          title: "Eenvoud Onder Druk",
          description:
            "Vermijd overmatige abstracties. De meest robuuste onderdelen zijn klein, deterministisch, grondig getest en intuïtief te doorgronden tijdens een nachtelijke productie-storing.",
        },
      ],
      beyondHeading: "Buiten de Terminal",
      beyondSubtitle:
        "Disciplines en creatieve bezigheden die invloed hebben op hoe ik denk over focus, ritme en complexe systemen.",
      interests: [
        {
          title: "Basgitaar",
          subtitle: "Groove, Timing & Harmonisch Fundament",
          description:
            "De bassist verankert de band: timing bewaren, harmonische stabiliteit bieden en zorgen dat complexe arrangementen natuurlijk blijven aanvoelen.",
        },
        {
          title: "Schaken",
          subtitle: "Structurele Invarianten & Eindspelen",
          description:
            "Schaken traint strategisch rekenen, discipline in kandidaat-zetten en structurele patroonherkenning onder tijdsdruk.",
        },
        {
          title: "Developer Ervaring & Tooling",
          subtitle: "Ontwikkelsnelheid & Verificatie",
          description:
            "Lokale tools, build-optimalisaties en automatische verificatie die de feedbackcyclus van het team meetbaar verkorten.",
        },
      ],
    },
    outreach: {
      heading: "Samen robuuste systemen bouwen.",
      subheading:
        "Beschikbaar voor staff engineering, fintech architectuur en technisch advies.",
      emailBtn: "E-mail Casper",
      cvBtn: "Download Volledig CV (PDF)",
    },
  },
};
