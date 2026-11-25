import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Bookmark,
  BookmarkCheck,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  Compass,
  Cpu,
  Database,
  FileText,
  GitBranch,
  HeartPulse,
  Camera,
  LayoutTemplate,
  Lightbulb,
  Menu,
  MessageSquareText,
  Microscope,
  Moon,
  Palette,
  PenTool,
  Search,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  TrendingUp,
  Users,
  WalletCards,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Career = {
  id: string;
  name: string;
  category: string;
  description: string;
  skills: string[];
  education: string[];
  roadmap: string[];
  salaryRange: string;
  relatedCareers: string[];
  overview: string;
  whereTheyWork: string;
  whyImportant: string;
  jobRoles: string[];
  icon: LucideIcon;
};

type QuizQuestion = {
  id: string;
  prompt: string;
  options: { label: string; value: string; matches: string[] }[];
};

type Recommendation = {
  careerId: string;
  percentage: number;
  reason: string;
};

type SkillItem = {
  title: string;
  description: string;
  learningPath: string[];
  projects: string[];
  careers: string[];
  icon: LucideIcon;
};

const careers: Career[] = [
  {
    id: 'software-developer',
    name: 'Software Developer',
    category: 'Technology',
    description: 'Build websites, applications and software using programming and problem-solving.',
    skills: ['JavaScript', 'Python', 'Problem Solving'],
    education: ['12th', 'B.Tech/B.Sc in CS', 'Skills', 'Projects', 'Internship', 'Entry-level job'],
    roadmap: ['Learn programming basics', 'Learn HTML/CSS/JavaScript', 'Build small projects', 'Learn Git/GitHub', 'Build portfolio', 'Apply for internships'],
    salaryRange: '₹4L–₹18L per year',
    relatedCareers: ['Frontend Developer', 'Backend Developer', 'QA Engineer'],
    overview: 'Software developers design, build, test, and improve digital tools that people use every day.',
    whereTheyWork: 'IT companies, startups, product teams, consulting firms, and remote teams.',
    whyImportant: 'They create systems that power communication, commerce, learning, healthcare, and daily life.',
    jobRoles: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Mobile App Developer'],
    icon: Code2,
  },
  {
    id: 'data-analyst',
    name: 'Data Analyst',
    category: 'Technology',
    description: 'Turn raw data into useful information that helps organizations make smarter decisions.',
    skills: ['Excel', 'SQL', 'Data Visualization'],
    education: ['12th', 'B.Sc/B.Com/B.E.', 'Statistics/Excel', 'SQL', 'Visualization projects', 'Internship'],
    roadmap: ['Learn Excel and statistics', 'Practice SQL', 'Learn Python/R', 'Build dashboards', 'Create case studies', 'Apply for internships'],
    salaryRange: '₹3L–₹14L per year',
    relatedCareers: ['Business Analyst', 'Data Scientist', 'BI Analyst'],
    overview: 'Data analysts study business or technical data, spot patterns, and share insights with teams.',
    whereTheyWork: 'Banks, e-commerce companies, analytics teams, consulting firms, and product teams.',
    whyImportant: 'They help organizations understand trends, risks, and performance using evidence instead of guesswork.',
    jobRoles: ['Business Analyst', 'Reporting Analyst', 'BI Analyst', 'Operations Analyst'],
    icon: BarChart3,
  },
  {
    id: 'ui-ux-designer',
    name: 'UI/UX Designer',
    category: 'Design',
    description: 'Design digital experiences that feel smooth, intuitive, and engaging for users.',
    skills: ['Figma', 'Research', 'Wireframing'],
    education: ['12th', 'Design degree or diploma', 'UX basics', 'Design projects', 'Portfolio building', 'Internship'],
    roadmap: ['Study design basics', 'Learn Figma', 'Practice user research', 'Create wireframes', 'Build portfolio', 'Apply for UX roles'],
    salaryRange: '₹3L–₹15L per year',
    relatedCareers: ['Product Designer', 'Visual Designer', 'Researcher'],
    overview: 'UI/UX designers shape how products look and how people move through them.',
    whereTheyWork: 'Startups, design agencies, product companies, SaaS businesses, and digital studios.',
    whyImportant: 'Good design reduces confusion, speeds learning, and helps products reach more users successfully.',
    jobRoles: ['Product Designer', 'Visual Designer', 'UX Researcher', 'Interaction Designer'],
    icon: Palette,
  },
  {
    id: 'embedded-systems-engineer',
    name: 'Embedded Systems Engineer',
    category: 'Engineering',
    description: 'Design smart electronic systems used in devices, machines, and connected products.',
    skills: ['C Programming', 'Electronics', 'Microcontrollers'],
    education: ['12th (Physics, Maths)', 'B.E./B.Tech in ECE/EEE', 'Microcontrollers', 'Embedded projects', 'Internship'],
    roadmap: ['Learn electronics basics', 'Study C programming', 'Explore microcontrollers', 'Build sensor-based projects', 'Practice debugging', 'Apply for internships'],
    salaryRange: '₹4L–₹20L per year',
    relatedCareers: ['IoT Engineer', 'Electronics Engineer', 'Firmware Engineer'],
    overview: 'Embedded engineers create hardware-software systems that operate within devices and machines.',
    whereTheyWork: 'Automotive companies, robotics labs, consumer electronics firms, medical device makers, and automation companies.',
    whyImportant: 'These systems power real-world devices that must be reliable, efficient, and safe.',
    jobRoles: ['Firmware Engineer', 'IoT Engineer', 'Electronics Design Engineer', 'Automation Engineer'],
    icon: Cpu,
  },
  {
    id: 'cybersecurity-analyst',
    name: 'Cybersecurity Analyst',
    category: 'Technology',
    description: 'Protect systems, networks and sensitive information from digital threats and attacks.',
    skills: ['Networking', 'Security', 'Risk Analysis'],
    education: ['12th', 'B.Tech/B.Sc in IT/Cybersecurity', 'Networking', 'Security tools', 'Certifications', 'Internship'],
    roadmap: ['Learn networking basics', 'Understand security principles', 'Practice digital forensics', 'Use tools and labs', 'Build projects', 'Apply for internships'],
    salaryRange: '₹5L–₹18L per year',
    relatedCareers: ['Ethical Hacker', 'Security Engineer', 'SOC Analyst'],
    overview: 'Cybersecurity analysts monitor systems, identify vulnerabilities, and reduce digital risks.',
    whereTheyWork: 'Banks, IT firms, government organizations, healthcare providers, and cloud services.',
    whyImportant: 'They safeguard data, systems, and trust in a world that depends on digital technology.',
    jobRoles: ['SOC Analyst', 'Security Engineer', 'Threat Analyst', 'Incident Responder'],
    icon: ShieldCheck,
  },
  {
    id: 'doctor',
    name: 'Doctor',
    category: 'Healthcare',
    description: 'Diagnose illnesses, provide care, and help patients improve their health and wellbeing.',
    skills: ['Empathy', 'Medical Knowledge', 'Communication'],
    education: ['12th (Biology)', 'NEET', 'MBBS', 'Internship', 'Specialization', 'Residency'],
    roadmap: ['Strong science fundamentals', 'Prepare for NEET', 'Study medicine', 'Clinical rotations', 'Build patient skills', 'Specialize'],
    salaryRange: '₹8L–₹30L+ per year',
    relatedCareers: ['Surgeon', 'Pediatrician', 'Public Health Specialist'],
    overview: 'Doctors assess patients, diagnose conditions, and guide treatment plans based on evidence and care.',
    whereTheyWork: 'Hospitals, private clinics, community health centers, research institutes, and public health organizations.',
    whyImportant: 'They help people stay healthy, recover from illness, and manage long-term conditions with compassion.',
    jobRoles: ['General Physician', 'Surgeon', 'Pediatrician', 'Psychiatrist'],
    icon: HeartPulse,
  },
  {
    id: 'civil-engineer',
    name: 'Civil Engineer',
    category: 'Engineering',
    description: 'Plan and build roads, bridges, buildings, and other essential infrastructure.',
    skills: ['Design', 'Project Planning', 'Problem Solving'],
    education: ['12th (Maths)', 'B.E./B.Tech in Civil', 'Drafting', 'Site work', 'Internship'],
    roadmap: ['Learn maths and mechanics', 'Study structural basics', 'Practice AutoCAD', 'Work on projects', 'Internship', 'Entry-level role'],
    salaryRange: '₹3L–₹16L per year',
    relatedCareers: ['Structural Engineer', 'Construction Manager', 'Surveyor'],
    overview: 'Civil engineers design and supervise the construction of vital infrastructure and public facilities.',
    whereTheyWork: 'Construction firms, infrastructure companies, government agencies, urban planning departments, and consulting firms.',
    whyImportant: 'Their work creates safe roads, water systems, bridges, and buildings that support everyday life.',
    jobRoles: ['Site Engineer', 'Structural Engineer', 'Project Engineer', 'Town Planner'],
    icon: Building2,
  },
  {
    id: 'digital-marketer',
    name: 'Digital Marketer',
    category: 'Business',
    description: 'Promote brands and products online through content, campaigns, and data-driven marketing.',
    skills: ['Content Strategy', 'SEO', 'Analytics'],
    education: ['12th', 'Marketing or communications', 'Digital marketing basics', 'Campaign projects', 'Portfolio'],
    roadmap: ['Learn marketing fundamentals', 'Study SEO and social media', 'Practice ad campaigns', 'Build case studies', 'Internship', 'Entry-level role'],
    salaryRange: '₹3L–₹16L per year',
    relatedCareers: ['SEO Specialist', 'Social Media Manager', 'Marketing Analyst'],
    overview: 'Digital marketers help businesses reach the right audience and grow online through strategy and content.',
    whereTheyWork: 'Agencies, e-commerce brands, startups, media companies, and corporate marketing teams.',
    whyImportant: 'They connect products with the people who need them and help organizations grow in a digital world.',
    jobRoles: ['SEO Specialist', 'Social Media Manager', 'Performance Marketer', 'Brand Strategist'],
    icon: TrendingUp,
  },
  {
    id: 'financial-analyst',
    name: 'Financial Analyst',
    category: 'Finance',
    description: 'Study financial data to guide investments, budgeting, and business planning decisions.',
    skills: ['Accounting', 'Excel', 'Decision Making'],
    education: ['12th (Commerce/Maths)', 'B.Com/BBA/BFSI studies', 'Excel and finance', 'Projects', 'Internship'],
    roadmap: ['Study finance fundamentals', 'Learn Excel and financial models', 'Practice valuation basics', 'Work on datasets', 'Internship', 'Entry-level role'],
    salaryRange: '₹4L–₹20L per year',
    relatedCareers: ['Investment Analyst', 'Risk Analyst', 'Accountant'],
    overview: 'Financial analysts evaluate performance, trends, and risk to inform planning and investments.',
    whereTheyWork: 'Banks, investment firms, consulting firms, corporate finance departments, and insurance companies.',
    whyImportant: 'They help organizations allocate resources wisely and plan for future growth with confidence.',
    jobRoles: ['Investment Analyst', 'Budget Analyst', 'Corporate Finance Analyst', 'Risk Analyst'],
    icon: WalletCards,
  },
  {
    id: 'biotechnologist',
    name: 'Biotechnologist',
    category: 'Science',
    description: 'Use biology and technology to develop solutions in healthcare, agriculture, and research.',
    skills: ['Biology', 'Experimentation', 'Research'],
    education: ['12th (Biology)', 'B.Sc/B.Tech in Biotechnology', 'Lab work', 'Research projects', 'Internship'],
    roadmap: ['Learn biology basics', 'Study lab techniques', 'Practice experiments', 'Build mini research projects', 'Internship', 'Research job'],
    salaryRange: '₹4L–₹18L per year',
    relatedCareers: ['Research Scientist', 'Lab Technician', 'Biochemist'],
    overview: 'Biotechnologists apply scientific methods to improve health, food, and industrial processes.',
    whereTheyWork: 'Pharma companies, research labs, agricultural biotech firms, healthcare and testing labs.',
    whyImportant: 'They contribute to vaccines, food innovation, environmental solutions, and scientific discovery.',
    jobRoles: ['Research Associate', 'Quality Analyst', 'Bioprocess Engineer', 'Lab Scientist'],
    icon: Microscope,
  },
  {
    id: 'robotics-engineer',
    name: 'Robotics Engineer',
    category: 'Engineering',
    description: 'Design machines and automated systems that can sense, move, and perform tasks intelligently.',
    skills: ['Programming', 'Electronics', 'Automation'],
    education: ['12th (Maths/Physics)', 'B.E./B.Tech in Robotics/EEE/ECE', 'C++/Python', 'Projects', 'Internship'],
    roadmap: ['Study electronics and coding', 'Learn microcontrollers', 'Build simple robots', 'Add sensors and AI basics', 'Portfolio', 'Internship'],
    salaryRange: '₹5L–₹22L per year',
    relatedCareers: ['Automation Engineer', 'Mechatronics Engineer', 'AI Engineer'],
    overview: 'Robotics engineers design systems that blend hardware, software, and control logic.',
    whereTheyWork: 'Manufacturing units, automation companies, research labs, logistics and healthcare technology firms.',
    whyImportant: 'They help create smarter systems for manufacturing, healthcare, agriculture, and exploration.',
    jobRoles: ['Automation Engineer', 'Mechatronics Engineer', 'Robot Programmer', 'Controls Engineer'],
    icon: Bot,
  },
  {
    id: 'content-creator',
    name: 'Content Creator',
    category: 'Media',
    description: 'Create engaging videos, posts, and stories that inform, entertain, and inspire audiences.',
    skills: ['Storytelling', 'Video Editing', 'Communication'],
    education: ['12th', 'Portfolio building', 'Content skills', 'Social media practice', 'Freelance work'],
    roadmap: ['Choose a niche', 'Learn storytelling and editing', 'Post consistently', 'Study engagement', 'Build portfolio', 'Collaborate'],
    salaryRange: '₹2L–₹12L per year',
    relatedCareers: ['Social Media Manager', 'Video Editor', 'Brand Strategist'],
    overview: 'Content creators turn ideas into stories, visuals, and media that connect with audiences online.',
    whereTheyWork: 'Media companies, agencies, startups, creators’ studios, and freelance communities.',
    whyImportant: 'They shape public conversations, build communities, and help brands communicate more clearly.',
    jobRoles: ['Video Editor', 'Social Media Creator', 'Digital Storyteller', 'Brand Content Lead'],
    icon: PenTool,
  },
];

const categories = ['All', 'Technology', 'Engineering', 'Healthcare', 'Business', 'Design', 'Science', 'Finance', 'Media'];

const quizQuestions: QuizQuestion[] = [
  {
    id: 'enjoy-most',
    prompt: 'What do you enjoy most?',
    options: [
      { label: 'Building things', value: 'build', matches: ['software-developer', 'embedded-systems-engineer', 'robotics-engineer', 'civil-engineer'] },
      { label: 'Solving problems', value: 'problem', matches: ['software-developer', 'cybersecurity-analyst', 'data-analyst', 'doctor'] },
      { label: 'Helping people', value: 'people', matches: ['doctor', 'digital-marketer', 'content-creator', 'ui-ux-designer'] },
      { label: 'Creating designs', value: 'design', matches: ['ui-ux-designer', 'content-creator', 'digital-marketer'] },
      { label: 'Working with numbers', value: 'numbers', matches: ['financial-analyst', 'data-analyst', 'civil-engineer'] },
      { label: 'Communicating ideas', value: 'communication', matches: ['digital-marketer', 'content-creator', 'ui-ux-designer'] },
    ],
  },
  {
    id: 'activity',
    prompt: 'Which activity sounds most interesting?',
    options: [
      { label: 'Coding an application', value: 'coding', matches: ['software-developer', 'cybersecurity-analyst'] },
      { label: 'Designing a product', value: 'product-design', matches: ['ui-ux-designer', 'digital-marketer'] },
      { label: 'Conducting an experiment', value: 'experiment', matches: ['biotechnologist', 'doctor'] },
      { label: 'Analyzing data', value: 'analysis', matches: ['data-analyst', 'financial-analyst'] },
      { label: 'Managing a project', value: 'project', matches: ['civil-engineer', 'digital-marketer', 'financial-analyst'] },
      { label: 'Helping someone solve a problem', value: 'helping', matches: ['doctor', 'content-creator', 'ui-ux-designer'] },
    ],
  },
  {
    id: 'quality',
    prompt: 'What is your strongest quality?',
    options: [
      { label: 'Logical thinking', value: 'logic', matches: ['software-developer', 'data-analyst', 'cybersecurity-analyst', 'embedded-systems-engineer'] },
      { label: 'Creativity', value: 'creativity', matches: ['ui-ux-designer', 'content-creator', 'digital-marketer'] },
      { label: 'Communication', value: 'communication-strong', matches: ['doctor', 'digital-marketer', 'content-creator'] },
      { label: 'Curiosity', value: 'curiosity', matches: ['biotechnologist', 'robotics-engineer', 'doctor'] },
      { label: 'Leadership', value: 'leadership', matches: ['financial-analyst', 'digital-marketer', 'civil-engineer'] },
      { label: 'Patience', value: 'patience', matches: ['doctor', 'biotechnologist', 'embedded-systems-engineer'] },
    ],
  },
  {
    id: 'environment',
    prompt: 'What type of work environment do you prefer?',
    options: [
      { label: 'Working with technology', value: 'tech-env', matches: ['software-developer', 'cybersecurity-analyst', 'robotics-engineer'] },
      { label: 'Working with people', value: 'people-env', matches: ['doctor', 'digital-marketer', 'content-creator'] },
      { label: 'Working independently', value: 'independent', matches: ['data-analyst', 'financial-analyst', 'software-developer'] },
      { label: 'Working in a laboratory', value: 'lab', matches: ['biotechnologist', 'doctor'] },
      { label: 'Working creatively', value: 'creative-env', matches: ['ui-ux-designer', 'content-creator'] },
      { label: 'Working in a business environment', value: 'business-env', matches: ['financial-analyst', 'digital-marketer', 'civil-engineer'] },
    ],
  },
  {
    id: 'subject',
    prompt: 'Which school or college subject interests you most?',
    options: [
      { label: 'Mathematics', value: 'math', matches: ['data-analyst', 'financial-analyst', 'software-developer'] },
      { label: 'Computer Science', value: 'cs', matches: ['software-developer', 'cybersecurity-analyst', 'robotics-engineer'] },
      { label: 'Biology', value: 'biology', matches: ['doctor', 'biotechnologist'] },
      { label: 'Physics', value: 'physics', matches: ['embedded-systems-engineer', 'civil-engineer', 'robotics-engineer'] },
      { label: 'Commerce', value: 'commerce', matches: ['financial-analyst', 'digital-marketer'] },
      { label: 'Arts / Design', value: 'arts', matches: ['ui-ux-designer', 'content-creator'] },
    ],
  },
  {
    id: 'problem-type',
    prompt: 'What type of problems do you enjoy solving?',
    options: [
      { label: 'Technical problems', value: 'technical', matches: ['software-developer', 'embedded-systems-engineer', 'cybersecurity-analyst'] },
      { label: 'Human problems', value: 'human', matches: ['doctor', 'ui-ux-designer'] },
      { label: 'Business problems', value: 'business', matches: ['financial-analyst', 'digital-marketer'] },
      { label: 'Scientific problems', value: 'scientific', matches: ['biotechnologist', 'doctor'] },
      { label: 'Creative problems', value: 'creative', matches: ['ui-ux-designer', 'content-creator'] },
    ],
  },
  {
    id: 'create',
    prompt: 'What would you like to create?',
    options: [
      { label: 'Software', value: 'software-create', matches: ['software-developer', 'cybersecurity-analyst'] },
      { label: 'Machines', value: 'machines', matches: ['robotics-engineer', 'embedded-systems-engineer'] },
      { label: 'Designs', value: 'designs', matches: ['ui-ux-designer', 'content-creator'] },
      { label: 'Businesses', value: 'businesses', matches: ['digital-marketer', 'financial-analyst'] },
      { label: 'Scientific solutions', value: 'science-solutions', matches: ['biotechnologist', 'doctor'] },
      { label: 'Social impact', value: 'impact', matches: ['doctor', 'digital-marketer', 'content-creator'] },
    ],
  },
  {
    id: 'motivation',
    prompt: 'What motivates you most?',
    options: [
      { label: 'Innovation', value: 'innovation', matches: ['software-developer', 'robotics-engineer', 'embedded-systems-engineer'] },
      { label: 'Helping people', value: 'help-people', matches: ['doctor', 'digital-marketer', 'content-creator'] },
      { label: 'Financial growth', value: 'finance-growth', matches: ['financial-analyst', 'digital-marketer'] },
      { label: 'Creativity', value: 'creativity-motivation', matches: ['ui-ux-designer', 'content-creator'] },
      { label: 'Learning', value: 'learning', matches: ['data-analyst', 'biotechnologist', 'cybersecurity-analyst'] },
      { label: 'Leadership', value: 'leadership-motivation', matches: ['civil-engineer', 'digital-marketer', 'financial-analyst'] },
    ],
  },
];

const skillCards: SkillItem[] = [
  {
    title: 'Programming',
    description: 'Writing code to solve problems and build useful tools.',
    learningPath: ['Start with Python or JavaScript', 'Practice small exercises', 'Build a mini project', 'Review logic and debugging'],
    projects: ['Calculator app', 'To-do tracker', 'Quiz game'],
    careers: ['Software Developer', 'Cybersecurity Analyst', 'Robotics Engineer'],
    icon: Code2,
  },
  {
    title: 'Communication',
    description: 'Explaining ideas clearly helps in teamwork, leadership and customer-facing roles.',
    learningPath: ['Practice speaking clearly', 'Learn active listening', 'Write short summaries', 'Present ideas'],
    projects: ['Short presentation', 'Team pitch', 'Personal intro video'],
    careers: ['Doctor', 'Digital Marketer', 'Content Creator'],
    icon: MessageSquareText,
  },
  {
    title: 'Problem Solving',
    description: 'Breaking down challenges and finding practical solutions is valuable in almost every career.',
    learningPath: ['Identify the issue', 'Brainstorm options', 'Test the solution', 'Improve the result'],
    projects: ['Logic puzzle', 'Bug fix challenge', 'Case study analysis'],
    careers: ['Software Developer', 'Data Analyst', 'Doctor'],
    icon: BrainCircuit,
  },
  {
    title: 'Data Analysis',
    description: 'Reading patterns and numbers helps leaders make informed decisions.',
    learningPath: ['Learn Excel basics', 'Practice statistics', 'Try SQL queries', 'Build a dashboard'],
    projects: ['School performance dashboard', 'Sales report', 'Trend analysis'],
    careers: ['Data Analyst', 'Financial Analyst', 'Business Analyst'],
    icon: Database,
  },
  {
    title: 'Leadership',
    description: 'Leadership means guiding teams, setting direction, and staying organized.',
    learningPath: ['Take initiative', 'Learn planning', 'Practice delegation', 'Reflect on team feedback'],
    projects: ['School event planning', 'Group project coordination', 'Volunteer duty'],
    careers: ['Civil Engineer', 'Digital Marketer', 'Project Manager'],
    icon: Users,
  },
  {
    title: 'Design',
    description: 'Design connects function and beauty, shaping user experiences and visual communication.',
    learningPath: ['Learn design basics', 'Practice layouts and colors', 'Use Figma', 'Create a portfolio'],
    projects: ['Poster design', 'App screen mockup', 'Brand board'],
    careers: ['UI/UX Designer', 'Content Creator', 'Brand Strategist'],
    icon: LayoutTemplate,
  },
  {
    title: 'Teamwork',
    description: 'Working well with others makes projects smoother and outcomes stronger.',
    learningPath: ['Listen actively', 'Share ideas', 'Divide tasks', 'Give feedback respectfully'],
    projects: ['Group presentation', 'Team project plan', 'Peer mentoring'],
    careers: ['Doctor', 'Civil Engineer', 'Software Developer'],
    icon: Users,
  },
  {
    title: 'Critical Thinking',
    description: 'Questioning assumptions leads to better decisions and stronger reasoning.',
    learningPath: ['Evaluate evidence', 'Compare options', 'Look for patterns', 'Summarize conclusions'],
    projects: ['Case study discussion', 'Debate on a topic', 'Research summary'],
    careers: ['Cybersecurity Analyst', 'Financial Analyst', 'Research Scientist'],
    icon: Lightbulb,
  },
];

const roadmapExamples = [
  {
    title: 'Software Development',
    steps: ['Interest', 'Programming Basics', 'Web Development', 'Projects', 'GitHub', 'Internship', 'Job'],
    icon: Code2,
  },
  {
    title: 'Data Analytics',
    steps: ['Mathematics', 'Excel', 'SQL', 'Python', 'Data Visualization', 'Projects', 'Internship'],
    icon: Database,
  },
  {
    title: 'UI/UX Design',
    steps: ['Design Basics', 'Figma', 'UX Research', 'Wireframing', 'Projects', 'Portfolio', 'Internship'],
    icon: Palette,
  },
  {
    title: 'Embedded Systems',
    steps: ['Electronics Basics', 'C Programming', 'Microcontrollers', 'Sensors', 'Embedded Projects', 'Internship'],
    icon: Cpu,
  },
];

const resourceCards = [
  { title: 'Free Courses', type: 'Learn', icon: BookOpen },
  { title: 'Projects', type: 'Build', icon: Code2 },
  { title: 'Certifications', type: 'Validate', icon: ShieldCheck },
  { title: 'Books', type: 'Read', icon: FileText },
  { title: 'Practice Platforms', type: 'Sharpen', icon: Target },
  { title: 'Internship Preparation', type: 'Prepare', icon: BriefcaseBusiness },
];

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('careerpath-theme');
    return stored === 'dark' ? 'dark' : 'light';
  });
  const [savedCareers, setSavedCareers] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem('careerpath-saved');
    return stored ? JSON.parse(stored) : [];
  });
  const [quizResults, setQuizResults] = useState<Recommendation[]>(() => {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem('careerpath-results');
    return stored ? JSON.parse(stored) : [];
  });
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizStep, setQuizStep] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [selectedComparison, setSelectedComparison] = useState<string[]>(['software-developer', 'data-analyst', 'ui-ux-designer']);
  const [activeSkill, setActiveSkill] = useState('Programming');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [contactError, setContactError] = useState('');

  const currentQuestion = quizQuestions[quizStep];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('careerpath-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('careerpath-saved', JSON.stringify(savedCareers));
  }, [savedCareers]);

  useEffect(() => {
    localStorage.setItem('careerpath-results', JSON.stringify(quizResults));
  }, [quizResults]);

  const filteredCareers = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return careers.filter((career) => {
      const matchesCategory = activeCategory === 'All' || career.category === activeCategory;
      const matchesSearch =
        !term ||
        career.name.toLowerCase().includes(term) ||
        career.description.toLowerCase().includes(term) ||
        career.skills.some((skill) => skill.toLowerCase().includes(term));
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  const skillData = skillCards.find((skill) => skill.title === activeSkill) ?? skillCards[0];

  const toggleSaveCareer = (careerId: string) => {
    setSavedCareers((current) =>
      current.includes(careerId)
        ? current.filter((id) => id !== careerId)
        : [...current, careerId],
    );
  };

  const openCareer = (careerId: string) => {
    const found = careers.find((career) => career.id === careerId) ?? careers[0];
    setSelectedCareer(found);
  };

  const handleAnswer = (answerValue: string) => {
    const nextAnswers = { ...quizAnswers, [currentQuestion.id]: answerValue };
    setQuizAnswers(nextAnswers);

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep((current) => current + 1);
      return;
    }

    const computed = calculateMatches(nextAnswers);
    setQuizResults(computed);
    setQuizStep(quizQuestions.length);
  };

  const calculateMatches = (answers: Record<string, string>): Recommendation[] => {
    const scoreMap: Record<string, number> = {};
    Object.values(answers).forEach((value) => {
      const matched = Object.entries(optionMatches).find(([key]) => key === value)?.[1] ?? [];
      matched.forEach((careerId) => {
        scoreMap[careerId] = (scoreMap[careerId] ?? 0) + 2;
      });
    });

    const maxValue = Math.max(...Object.values(scoreMap), 1);
    const final = Object.entries(scoreMap)
      .map(([careerId, score]) => {
        const career = careers.find((item) => item.id === careerId);
        return {
          careerId,
          percentage: Math.min(96, Math.max(52, Math.round((score / maxValue) * 100))),
          reason: career?.name === 'Software Developer'
            ? 'Your answers indicate strong interest in technology, logical thinking and problem solving.'
            : career?.name === 'Data Analyst'
              ? 'Your interest in mathematics, patterns and analytical thinking matches this career.'
              : career?.name === 'UI/UX Designer'
                ? 'Your creativity and interest in designing experiences may make this career interesting to explore.'
                : `Your answers suggest curiosity and strengths that align well with ${career?.name ?? 'this path'}.`,
        };
      })
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 5);

    return final;
  };

  const goToPreviousQuestion = () => {
    if (quizStep === 0) return;
    setQuizStep((current) => current - 1);
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({});
    setQuizResults([]);
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!contact.name.trim() || !contact.email.trim() || !contact.message.trim()) {
      setContactError('Please fill in all fields before sending your message.');
      return;
    }
    setContactError('');
    setContact({ name: '', email: '', message: '' });
  };

  const careerStats = [
    { label: 'Careers Explored', value: '12', icon: Compass },
    { label: 'Saved Careers', value: String(savedCareers.length), icon: BookmarkCheck },
    { label: 'Quiz Completed', value: quizResults.length ? '1' : '0', icon: Target },
    { label: 'Skills Explored', value: '8', icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-600 shadow-sm ring-1 ring-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:ring-indigo-500/30">
              <Compass className="h-5 w-5" />
            </div>
            CareerPath
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex dark:text-slate-300">
            <a href="#home" className="transition hover:text-indigo-600 dark:hover:text-indigo-300">Home</a>
            <a href="#explore" className="transition hover:text-indigo-600 dark:hover:text-indigo-300">Explore Careers</a>
            <a href="#quiz" className="transition hover:text-indigo-600 dark:hover:text-indigo-300">Career Quiz</a>
            <a href="#roadmaps" className="transition hover:text-indigo-600 dark:hover:text-indigo-300">Roadmaps</a>
            <a href="#about" className="transition hover:text-indigo-600 dark:hover:text-indigo-300">About</a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500/40 dark:hover:text-indigo-300" aria-label="Search careers">
              <Search className="h-4 w-4" />
            </button>
            <button
              className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500/40 dark:hover:text-indigo-300"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href="#quiz" className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500">Take Career Quiz</a>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-sm md:hidden dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
              <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
              <a href="#explore" onClick={() => setMobileOpen(false)}>Explore Careers</a>
              <a href="#quiz" onClick={() => setMobileOpen(false)}>Career Quiz</a>
              <a href="#roadmaps" onClick={() => setMobileOpen(false)}>Roadmaps</a>
              <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
              <button
                className="mt-2 rounded-full bg-indigo-600 px-4 py-2.5 text-white"
                onClick={() => setMobileOpen(false)}
              >
                Take Career Quiz
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_50%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-200">
                <Sparkles className="h-3.5 w-3.5" />
                Explore your future with confidence
              </div>
              <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                Discover a Career That Fits You
              </h1>
              <p className="mt-5 max-w-xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
                Explore career paths, understand your strengths, and discover what you can learn to build the future you want.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#quiz" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500">
                  Take the Career Quiz
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#explore" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500/40 dark:hover:text-indigo-300">
                  Explore Careers
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
                {['Interest-based guidance', 'Beginner-friendly career information', 'Personalized career suggestions'].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
                    <Check className="h-4 w-4 text-emerald-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-12 h-28 w-28 rounded-full bg-violet-400/30 blur-3xl" />
              <div className="absolute -right-8 bottom-8 h-32 w-32 rounded-full bg-indigo-400/25 blur-3xl" />
              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(79,70,229,0.12)] dark:border-slate-800 dark:bg-slate-900">
                <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#eef2ff,#f8fafc_50%,#eef2ff)] p-5 dark:bg-[linear-gradient(135deg,#1e1b4b,#0f172a_50%,#172554)]">
                  <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white px-4 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-800/80">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Career Compass</p>
                      <p className="mt-1 text-lg font-bold text-slate-800 dark:text-white">Explore pathways</p>
                    </div>
                    <div className="rounded-xl bg-indigo-600 p-2 text-white shadow-sm">
                      <Compass className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 dark:bg-slate-800/80 dark:ring-slate-700">
                      <div className="flex items-center justify-between">
                        <div className="rounded-xl bg-indigo-100 p-2 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                          <BriefcaseBusiness className="h-4 w-4" />
                        </div>
                        <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">Top match</span>
                      </div>
                      <div className="mt-3">
                        <p className="text-2xl font-extrabold text-slate-900 dark:text-white">92%</p>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Software Developer</p>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-indigo-600 p-4 text-white shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="rounded-xl bg-white/10 p-2">
                          <Code2 className="h-4 w-4" />
                        </div>
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                      <div className="mt-3">
                        <p className="text-2xl font-extrabold">8</p>
                        <p className="mt-1 text-sm text-indigo-100">Career clusters</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl bg-white p-4 ring-1 ring-slate-100 dark:bg-slate-800/80 dark:ring-slate-700">
                    <div className="mb-3 flex items-center justify-between text-sm font-medium text-slate-600 dark:text-slate-300">
                      <span>Path interest</span>
                      <span>72%</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                      <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500" />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-slate-500 dark:text-slate-400">
                      <div className="rounded-xl bg-slate-100 p-2 dark:bg-slate-700/80">Logic</div>
                      <div className="rounded-xl bg-slate-100 p-2 dark:bg-slate-700/80">Creativity</div>
                      <div className="rounded-xl bg-slate-100 p-2 dark:bg-slate-700/80">Impact</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_15px_40px_rgba(15,23,42,0.06)] dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">Quick Career Search</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">What career are you curious about?</h2>
              </div>
              <div className="relative w-full max-w-xl">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search careers like Software Developer, Doctor, Designer..."
                  className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm text-slate-800 outline-none transition focus:border-indigo-400 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    activeCategory === category
                      ? 'border-indigo-600 bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-indigo-500/40 dark:hover:text-indigo-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="explore" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">Career Explorer</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Explore Career Paths</h2>
            </div>
            <div className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              {filteredCareers.length} careers available
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCareers.map((career) => {
              const Icon = career.icon;
              const saved = savedCareers.includes(career.id);

              return (
                <article
                  key={career.id}
                  className="group rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_15px_35px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(79,70,229,0.12)] dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 shadow-sm dark:bg-indigo-500/10 dark:text-indigo-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <button
                      className="rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-600 transition hover:border-indigo-200 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                      onClick={() => toggleSaveCareer(career.id)}
                      aria-label={`${saved ? 'Remove' : 'Save'} ${career.name}`}
                    >
                      {saved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
                    </button>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{career.name}</h3>
                    <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                      {career.category}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{career.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {career.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <button
                      onClick={() => openCareer(career.id)}
                      className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500"
                    >
                      Explore Career
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{career.salaryRange}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="quiz" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">Career Quiz</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Find Your Career Direction</h2>
              <p className="mt-3 text-slate-300">Answer a few questions and discover career paths that may match your interests.</p>
            </div>

            {quizResults.length > 0 ? (
              <div className="space-y-6 rounded-[2rem] border border-slate-700 bg-slate-950/80 p-6 shadow-2xl shadow-indigo-950/30">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-indigo-300">Your Career Matches</p>
                    <h3 className="mt-2 text-2xl font-bold">Based on your answers, you may enjoy exploring...</h3>
                  </div>
                  <button onClick={resetQuiz} className="rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-200 transition hover:border-indigo-400 hover:text-white">
                    Retake Quiz
                  </button>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  {quizResults.map((result) => {
                    const career = careers.find((item) => item.id === result.careerId);
                    if (!career) return null;
                    return (
                      <div key={career.id} className="rounded-[1.5rem] border border-slate-700 bg-slate-900 p-5">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-3xl font-black text-white">{result.percentage}%</p>
                            <h4 className="mt-1 text-xl font-bold text-white">{career.name}</h4>
                          </div>
                          <button onClick={() => openCareer(career.id)} className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500">Explore Career</button>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-300">{result.reason}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
                  These are exploration suggestions, not a final career decision.
                </div>
              </div>
            ) : (
              <div className="rounded-[2rem] border border-slate-700 bg-slate-950/80 p-6 shadow-2xl shadow-indigo-950/30">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-indigo-300">Question {Math.min(quizStep + 1, quizQuestions.length)} of {quizQuestions.length}</p>
                    <p className="mt-2 text-sm text-slate-400">{currentQuestion.prompt}</p>
                  </div>
                  <div className="text-sm text-slate-400">{Math.round(((quizStep + 1) / quizQuestions.length) * 100)}%</div>
                </div>

                <div className="mb-6 h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500"
                    style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="rounded-2xl border border-slate-700 bg-slate-900 p-4 text-left text-slate-100 transition hover:border-indigo-500 hover:bg-slate-800"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    onClick={goToPreviousQuestion}
                    disabled={quizStep === 0}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </button>
                  <div className="text-sm text-slate-400">
                    {quizStep === quizQuestions.length - 1 ? 'Final question' : 'Next'}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section id="roadmaps" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">Career Roadmaps</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Learn Your Way Into a Career</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {roadmapExamples.map((roadmap) => {
              const Icon = roadmap.icon;
              return (
                <div key={roadmap.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_15px_35px_rgba(15,23,42,0.04)] dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{roadmap.title}</h3>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {roadmap.steps.map((step, index) => (
                      <div key={step} className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-bold text-white">{index + 1}</span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-slate-100/80 py-20 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">Skills Explorer</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Build Skills That Matter</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="grid gap-3 sm:grid-cols-2">
                {skillCards.map((skill) => {
                  const Icon = skill.icon;
                  const active = activeSkill === skill.title;
                  return (
                    <button
                      key={skill.title}
                      onClick={() => setActiveSkill(skill.title)}
                      className={`rounded-[1.4rem] border p-4 text-left transition ${
                        active
                          ? 'border-indigo-500 bg-indigo-600 text-white shadow-xl shadow-indigo-500/20'
                          : 'border-slate-200 bg-white text-slate-700 shadow-sm hover:border-indigo-200 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500/40 dark:hover:text-indigo-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${active ? 'bg-white/10 text-white' : 'bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300'}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <ArrowRight className="h-4 w-4 opacity-70" />
                      </div>
                      <p className="mt-4 text-lg font-bold">{skill.title}</p>
                    </button>
                  );
                })}
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_15px_35px_rgba(15,23,42,0.05)] dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                    {(() => {
                      const Icon = skillData.icon;
                      return <Icon className="h-5 w-5" />;
                    })()}
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">Skill focus</p>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{skillData.title}</h3>
                  </div>
                </div>

                <p className="mt-5 text-slate-600 dark:text-slate-300">{skillData.description}</p>

                <div className="mt-6 grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Beginner learning path</h4>
                    <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                      {skillData.learningPath.map((step) => (
                        <li key={step} className="flex gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Example projects</h4>
                    <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                      {skillData.projects.map((project) => (
                        <li key={project} className="flex gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Related careers</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {skillData.careers.map((careerName) => (
                      <span key={careerName} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">{careerName}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">Student Dashboard</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Welcome back! 👋</h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {careerStats.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-2xl font-black text-slate-900 dark:text-white">{item.value}</span>
                  </div>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{item.label}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_15px_35px_rgba(15,23,42,0.04)] dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Your Career Journey</h3>
            <div className="mt-6 space-y-5">
              {[
                { label: 'Career Quiz', value: 80 },
                { label: 'Career Exploration', value: 60 },
                { label: 'Skills', value: 50 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-200">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">Saved Careers</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">My Saved Careers</h2>
          </div>

          {savedCareers.length === 0 ? (
            <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              No saved careers yet. Explore careers and bookmark the ones you're interested in.
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {savedCareers.map((careerId) => {
                const career = careers.find((item) => item.id === careerId);
                if (!career) return null;
                const Icon = career.icon;
                return (
                  <div key={career.id} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <button onClick={() => toggleSaveCareer(career.id)} className="rounded-full border border-slate-200 p-2 text-slate-600 dark:border-slate-700 dark:text-slate-200">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{career.name}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{career.description}</p>
                    <button onClick={() => openCareer(career.id)} className="mt-4 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500">
                      Open details
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <section className="bg-slate-100/80 py-20 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">Career Comparison</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Compare Careers</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {selectedComparison.map((careerId, index) => (
                <select
                  key={`${careerId}-${index}`}
                  value={careerId}
                  onChange={(event) => {
                    const next = [...selectedComparison];
                    next[index] = event.target.value;
                    setSelectedComparison(next);
                  }}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                >
                  {careers.map((career) => (
                    <option key={career.id} value={career.id}>{career.name}</option>
                  ))}
                </select>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {selectedComparison.map((careerId) => {
                const career = careers.find((item) => item.id === careerId);
                if (!career) return null;
                return (
                  <div key={career.id} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                        <career.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{career.category}</p>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{career.name}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{career.description}</p>
                    <div className="mt-5 space-y-5 text-sm text-slate-700 dark:text-slate-200">
                      <div><span className="font-semibold">Skills:</span> {career.skills.join(' · ')}</div>
                      <div><span className="font-semibold">Education:</span> {career.education.join(' → ')}</div>
                      <div><span className="font-semibold">Work environment:</span> {career.whereTheyWork}</div>
                      <div><span className="font-semibold">Approximate salary:</span> {career.salaryRange}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">Start Learning</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Start Learning</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {resourceCards.map((resource) => {
              const Icon = resource.icon;
              return (
                <div key={resource.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{resource.title}</h3>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-700 dark:bg-slate-800 dark:text-slate-200">{resource.type}</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Curated learning options to help you build confidence and practical experience.</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="about" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">About</p>
              <h2 className="mt-3 text-3xl font-bold">CareerPath</h2>
            </div>
            <p className="mx-auto max-w-3xl text-center text-base leading-7 text-slate-300">
              CareerPath is designed to help students explore career possibilities, understand the skills required for different professions, and discover learning paths that can help them move toward their goals.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { title: 'Explore', detail: 'Browse careers and understand what each role involves.' },
                { title: 'Understand', detail: 'Learn the skills, subjects, and pathways needed for each career.' },
                { title: 'Build', detail: 'Follow clear roadmaps and create a practical plan for your future.' },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-slate-700 bg-slate-950/60 p-6 text-center">
                  <p className="text-2xl font-black text-indigo-300">{item.title}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.05)] dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">Contact</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Get in touch</h2>
            </div>

            <form className="grid gap-5" onSubmit={handleContactSubmit} noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                  Name
                  <input
                    value={contact.name}
                    onChange={(event) => setContact((current) => ({ ...current, name: event.target.value }))}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email
                  <input
                    type="email"
                    value={contact.email}
                    onChange={(event) => setContact((current) => ({ ...current, email: event.target.value }))}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                Message
                <textarea
                  value={contact.message}
                  onChange={(event) => setContact((current) => ({ ...current, message: event.target.value }))}
                  rows={5}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  placeholder="Tell us what you're curious about..."
                />
              </label>

              {contactError && <p className="text-sm text-rose-500">{contactError}</p>}

              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3 font-bold text-slate-900 dark:text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                <Compass className="h-5 w-5" />
              </div>
              CareerPath
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-300">
              Helping students explore possibilities and build their future.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li><a href="#home">Home</a></li>
              <li><a href="#explore">Careers</a></li>
              <li><a href="#quiz">Career Quiz</a></li>
              <li><a href="#roadmaps">Roadmaps</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Social</h3>
            <div className="mt-4 flex gap-3 text-slate-600 dark:text-slate-300">
              <a href="https://www.linkedin.com" className="rounded-full border border-slate-200 p-2.5 transition hover:border-indigo-200 hover:text-indigo-600 dark:border-slate-700 dark:hover:border-indigo-500/40 dark:hover:text-indigo-300"><BriefcaseBusiness className="h-4 w-4" /></a>
              <a href="https://www.instagram.com" className="rounded-full border border-slate-200 p-2.5 transition hover:border-indigo-200 hover:text-indigo-600 dark:border-slate-700 dark:hover:border-indigo-500/40 dark:hover:text-indigo-300"><Camera className="h-4 w-4" /></a>
              <a href="https://github.com" className="rounded-full border border-slate-200 p-2.5 transition hover:border-indigo-200 hover:text-indigo-600 dark:border-slate-700 dark:hover:border-indigo-500/40 dark:hover:text-indigo-300"><GitBranch className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 bg-slate-50 py-5 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
          © 2026 CareerPath. All rights reserved.
        </div>
      </footer>

      {selectedCareer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                  <selectedCareer.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">{selectedCareer.category}</p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{selectedCareer.name}</h3>
                </div>
              </div>
              <button onClick={() => setSelectedCareer(null)} className="rounded-full border border-slate-200 p-2 text-slate-600 dark:border-slate-700 dark:text-slate-200">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Career Overview</h4>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">{selectedCareer.overview}</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/70">
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Where do they work?</p>
                      <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{selectedCareer.whereTheyWork}</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/70">
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Why is it important?</p>
                      <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{selectedCareer.whyImportant}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Skills Required</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedCareer.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-200">{skill}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Education Path</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedCareer.education.map((step, index) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">{step}</span>
                        {index < selectedCareer.education.length - 1 && <ChevronRight className="h-4 w-4 text-slate-400" />}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Beginner Roadmap</h4>
                  <ol className="mt-4 space-y-3">
                    {selectedCareer.roadmap.map((step, index) => (
                      <li key={step} className="flex gap-3 text-sm text-slate-700 dark:text-slate-200">
                        <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-semibold text-white">{index + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/80">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Common Job Roles</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedCareer.jobRoles.map((role) => (
                      <span key={role} className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-200">{role}</span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/80">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Salary Information</h4>
                  <p className="mt-3 text-lg font-bold text-slate-900 dark:text-white">{selectedCareer.salaryRange}</p>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Approximate range — varies by location, company, skills and experience.</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/80">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Related Careers</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedCareer.relatedCareers.map((careerName) => (
                      <span key={careerName} className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-200">{careerName}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const optionMatches: Record<string, string[]> = {
  build: ['software-developer', 'embedded-systems-engineer', 'robotics-engineer', 'civil-engineer'],
  problem: ['software-developer', 'cybersecurity-analyst', 'data-analyst', 'doctor'],
  people: ['doctor', 'digital-marketer', 'content-creator', 'ui-ux-designer'],
  design: ['ui-ux-designer', 'content-creator', 'digital-marketer'],
  numbers: ['financial-analyst', 'data-analyst', 'civil-engineer'],
  communication: ['digital-marketer', 'content-creator', 'ui-ux-designer'],
  coding: ['software-developer', 'cybersecurity-analyst'],
  'product-design': ['ui-ux-designer', 'digital-marketer'],
  experiment: ['biotechnologist', 'doctor'],
  analysis: ['data-analyst', 'financial-analyst'],
  project: ['civil-engineer', 'digital-marketer', 'financial-analyst'],
  helping: ['doctor', 'content-creator', 'ui-ux-designer'],
  logic: ['software-developer', 'data-analyst', 'cybersecurity-analyst', 'embedded-systems-engineer'],
  creativity: ['ui-ux-designer', 'content-creator', 'digital-marketer'],
  'communication-strong': ['doctor', 'digital-marketer', 'content-creator'],
  curiosity: ['biotechnologist', 'robotics-engineer', 'doctor'],
  leadership: ['financial-analyst', 'digital-marketer', 'civil-engineer'],
  patience: ['doctor', 'biotechnologist', 'embedded-systems-engineer'],
  'tech-env': ['software-developer', 'cybersecurity-analyst', 'robotics-engineer'],
  'people-env': ['doctor', 'digital-marketer', 'content-creator'],
  independent: ['data-analyst', 'financial-analyst', 'software-developer'],
  lab: ['biotechnologist', 'doctor'],
  'creative-env': ['ui-ux-designer', 'content-creator'],
  'business-env': ['financial-analyst', 'digital-marketer', 'civil-engineer'],
  math: ['data-analyst', 'financial-analyst', 'software-developer'],
  cs: ['software-developer', 'cybersecurity-analyst', 'robotics-engineer'],
  biology: ['doctor', 'biotechnologist'],
  physics: ['embedded-systems-engineer', 'civil-engineer', 'robotics-engineer'],
  commerce: ['financial-analyst', 'digital-marketer'],
  arts: ['ui-ux-designer', 'content-creator'],
  technical: ['software-developer', 'embedded-systems-engineer', 'cybersecurity-analyst'],
  human: ['doctor', 'ui-ux-designer'],
  business: ['financial-analyst', 'digital-marketer'],
  scientific: ['biotechnologist', 'doctor'],
  creative: ['ui-ux-designer', 'content-creator'],
  'software-create': ['software-developer', 'cybersecurity-analyst'],
  machines: ['robotics-engineer', 'embedded-systems-engineer'],
  designs: ['ui-ux-designer', 'content-creator'],
  businesses: ['digital-marketer', 'financial-analyst'],
  'science-solutions': ['biotechnologist', 'doctor'],
  impact: ['doctor', 'digital-marketer', 'content-creator'],
  innovation: ['software-developer', 'robotics-engineer', 'embedded-systems-engineer'],
  'help-people': ['doctor', 'digital-marketer', 'content-creator'],
  'finance-growth': ['financial-analyst', 'digital-marketer'],
  'creativity-motivation': ['ui-ux-designer', 'content-creator'],
  learning: ['data-analyst', 'biotechnologist', 'cybersecurity-analyst'],
  'leadership-motivation': ['civil-engineer', 'digital-marketer', 'financial-analyst'],
};

export default App;
