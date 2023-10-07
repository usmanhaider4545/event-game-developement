export const BackupRecovery = [
  {
    category: "Number of backup softwares to be supported",
    features: [
      {
        name: "One backup and recovery software",
        manDays: "30+50+50 Man Days",
        totalManDays: 130,
        numResources: 3,
        devRequired: ["Frontend", "Backend", "DesktopAppDev"],
      },
      {
        name: "Additional 2nd backup and recovery software",
        manDays: "20+30+50 Man Days",
        totalManDays: 100,
        numResources: 3,
        devRequired: ["Frontend", "Backend", "DesktopAppDev"],
      },
      {
        name: "Additional 3rd backup and recovery software",
        manDays: "20+30+50 Man Days",
        totalManDays: 100,
        numResources: 3,
        devRequired: ["Frontend", "Backend", "DesktopAppDev"],
      },
    ],
  },
  {
    category: "Disaster recovery management",
    features: [
      {
        name: "Recovery to on-premise",
        manDays: "50+50+100 Man Days",
        totalManDays: 200,
        numResources: 3,
        devRequired: ["Frontend", "Backend", "DesktopAppDev"],
      },
      {
        name: "Recovery to a cloud provider",
        manDays: "50+50+100 Man Days",
        totalManDays: 200,
        numResources: 3,
        devRequired: ["Frontend", "Backend", "DesktopAppDev"],
      },
      {
        name: "Recovery to an additional 2nd cloud provider",
        manDays: "25+25+100 Man Days",
        totalManDays: 150,
        numResources: 3,
        devRequired: ["Frontend", "Backend", "DesktopAppDev"],
      },
      {
        name: "Recovery to an additional 3rd cloud provider",
        manDays: "25+25+100 Man Days",
        totalManDays: 150,
        numResources: 3,
        devRequired: ["Frontend", "Backend", "DesktopAppDev"],
      },
    ],
  },
  {
    category: "Recovery types",
    features: [
      {
        name: "File",
        manDays: "20+20+20 Man Days",
        totalManDays: 60,
        numResources: 3,
        devRequired: ["Frontend", "Backend", "DesktopAppDev"],
      },
      {
        name: "VMs",
        manDays: "20+20+20 Man Days",
        totalManDays: 60,
        numResources: 3,
        devRequired: ["Frontend", "Backend", "DesktopAppDev"],
      },
    ],
  },
  {
    category: "Web application",
    features: [
      {
        name: "Multi-tenant",
        manDays: "20+20 Man Days",
        totalManDays: 40,
        numResources: 2,
        devRequired: ["Frontend", "Backend"],
      },
      {
        name: "Reports (5-20)",
        manDays: "45+45 Man Days",
        totalManDays: 90,
        numResources: 2,
        devRequired: ["Frontend", "Backend"],
      },
      {
        name: "Events and alerts",
        manDays: "50+80 Man Days",
        totalManDays: 130,
        numResources: 2,
        devRequired: ["Frontend", "Backend"],
      },
      {
        name: "Ticketing system",
        manDays: "75+75 Man Days",
        totalManDays: 150,
        numResources: 2,
        devRequired: ["Frontend", "Backend"],
      },
      {
        name: "Integration with 3rd party ticketing system",
        manDays: "10+30 Man Days",
        totalManDays: 40,
        numResources: 2,
        devRequired: ["Frontend", "Backend"],
      },
      {
        name: "User management",
        manDays: "10+10 Man Days",
        totalManDays: 20,
        numResources: 2,
        devRequired: ["Frontend", "Backend"],
      },
      {
        name: "Group management",
        manDays: "10+10 Man Days",
        totalManDays: 20,
        numResources: 2,
        devRequired: ["Frontend", "Backend"],
      },
      {
        name: "Billing and invoice management",
        manDays: "30+30 Man Days",
        totalManDays: 60,
        numResources: 2,
        devRequired: ["Frontend", "Backend"],
      },
      {
        name: "Multiple themes",
        manDays: "20+10 Man Days",
        totalManDays: 30,
        numResources: 2,
        devRequired: ["Frontend", "Backend"],
      },
      {
        name: "Automated recovery tests",
        manDays: "40+70+40 Man Days",
        totalManDays: 150,
        numResources: 3,
        devRequired: ["Frontend", "Backend", "DesktopAppDev"],
      },
      {
        name: "Remotely controlling clients",
        manDays: "5+5+20 Man Days",
        totalManDays: 30,
        numResources: 3,
        devRequired: ["Frontend", "Backend", "DesktopAppDev"],
      },
      {
        name: "Client health status",
        manDays: "5+5+5 Man Days",
        totalManDays: 15,
        numResources: 3,
        devRequired: ["Frontend", "Backend", "DesktopAppDev"],
      },
      {
        name: "Scheduling reports emailing",
        manDays: "15+25 Man Days",
        totalManDays: 40,
        numResources: 2,
        devRequired: ["Frontend", "Backend"],
      },
    ],
  },
  {
    category: "Client agent software",
    features: [
      {
        name: "With graphical user interface",
        manDays: "40 Man Days",
        totalManDays: 40,
        numResources: 1,
        devRequired: ["DesktopAppDev"],
      },
      {
        name: "Multiplatform support",
        manDays: "30 Man Days",
        totalManDays: 30,
        numResources: 1,
        devRequired: ["DesktopAppDev"],
      },
    ],
  },
  {
    category: "Mobile application",
    features: [
      {
        name: "Reporting",
        manDays: "25+5 Man Days",
        totalManDays: 30,
        numResources: 2,
        devRequired: ["MobileAppDev", "Backend"],
      },
      {
        name: "Alerting",
        manDays: "15+5 Man Days",
        totalManDays: 20,
        numResources: 2,
        devRequired: ["MobileAppDev", "Backend"],
      },
      {
        name: "Ticket management",
        manDays: "25+5 Man Days",
        totalManDays: 30,
        numResources: 2,
        devRequired: ["MobileAppDev", "Backend"],
      },
      {
        name: "All other features available on the web application",
        manDays: "60+20 Man Days",
        totalManDays: 80,
        numResources: 2,
        devRequired: ["MobileAppDev", "Backend"],
      },
    ],
  },
];

export const BackupRecoveryResources = [
  {
    role: "Frontend Developer",
    skills: ["React", "TypeScript", "JavaScript"],
  },
  {
    role: "Backend Developer",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      ".NET",
      "SQL Server",
      "PostgreSQL",
    ],
  },
  {
    role: "Desktop App Developer",
    skills: ["C#", ".NET", "WPF", ".NET MAUI"],
  },
  {
    role: "Mobile App Developer",
    skills: ["iOS native", "Android native", "React native"],
  },
  {
    role: "Project Manager",
    skills: ["Project Management"],
  },
  {
    role: "QA",
    skills: ["Quality Assurance"],
  },
  {
    role: "UI/UX Designer",
    skills: ["UI/UX Design", "Prototyping"],
  },
];

// Recommended tech stack for the Digital Signage project
export const RecommendedTechStack = [
  ".NET",
  "React",
  "TypeScript",
  "SQL Server",
  "Mongo DB",
  "MongoDB",
  "Docker",
  "Kubernetes",
  "WPF",
];
