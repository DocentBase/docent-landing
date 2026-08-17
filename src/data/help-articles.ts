export type PortalType = "admin" | "student" | "all";

export interface TroubleshootingStep {
  title: string;
  description: string;
  codeOrCommand?: string;
  actionUrl?: string;
  actionText?: string;
}

export interface TroubleshootingFlow {
  id: string;
  problem: string;
  problemBn: string;
  category: string;
  portal: PortalType;
  symptoms: string[];
  rootCauses: string[];
  steps: TroubleshootingStep[];
  escalationTip: string;
}

export interface HelpArticle {
  id: string;
  slug: string;
  title: string;
  titleBn: string;
  category: string;
  categoryName: string;
  portal: PortalType;
  readTime: string;
  lastUpdated: string;
  summary: string;
  summaryBn: string;
  keywords: string[];
  sections: {
    heading: string;
    content: string;
    steps?: string[];
    callout?: {
      type: "tip" | "important" | "warning" | "note";
      text: string;
    };
    codeBlock?: {
      language: string;
      code: string;
    };
  }[];
  relatedSlugs: string[];
}

export interface HelpCategory {
  id: string;
  name: string;
  nameBn: string;
  description: string;
  portal: PortalType;
  iconName: string;
  articleCount: number;
}

export const HELP_CATEGORIES: HelpCategory[] = [
  {
    id: "getting-started",
    name: "Getting Started & Setup",
    nameBn: "শুরু করা এবং সেটআপ",
    description: "Initialize your coaching institution, invite teachers, and configure basic settings.",
    portal: "all",
    iconName: "Rocket",
    articleCount: 3,
  },
  {
    id: "student-management",
    name: "Student Directory & USI",
    nameBn: "শিক্ষার্থী ও ইউএসআই ব্যবস্থাপনা",
    description: "Manage student enrollments, batch transfers, and universal student ID (USI) cross-tracking.",
    portal: "admin",
    iconName: "Users",
    articleCount: 2,
  },
  {
    id: "attendance-system",
    name: "Rapid Attendance & Ratings",
    nameBn: "দ্রুত উপস্থিতি ও রেটিং",
    description: "3-second tap logging, 10-point homework rating, and cross-batch session swapping.",
    portal: "admin",
    iconName: "CheckCircle2",
    articleCount: 2,
  },
  {
    id: "billing-payments",
    name: "Fees & Payment Gateways",
    nameBn: "ফি এবং পেমেন্ট গেটওয়ে",
    description: "Monthly tuition collection, grace periods, automated bKash/Nagad and SSLCommerz routing.",
    portal: "all",
    iconName: "CreditCard",
    articleCount: 3,
  },
  {
    id: "parent-reporting",
    name: "SMS & Parent Progress",
    nameBn: "এসএমএস এবং অভিভাবক রিপোর্ট",
    description: "Automated monthly report cards, WhatsApp dispatches, and emergency broadcast notices.",
    portal: "admin",
    iconName: "MessageSquare",
    articleCount: 2,
  },
  {
    id: "student-portal",
    name: "Student & Parent Cockpit",
    nameBn: "শিক্ষার্থী ও অভিভাবক পোর্টাল",
    description: "Using student.docentbase.com to view routines, results, attendance, and pay dues.",
    portal: "student",
    iconName: "GraduationCap",
    articleCount: 4,
  },
  {
    id: "team-roles",
    name: "Team & 8 RBAC Roles",
    nameBn: "টিম এবং ৮টি রোল পারমিশন",
    description: "Inviting staff, configuring permissions (Admin, Manager, Teacher, Accountant, Receptionist).",
    portal: "admin",
    iconName: "ShieldCheck",
    articleCount: 2,
  },
  {
    id: "white-glove",
    name: "White-Glove Support",
    nameBn: "হোয়াইট-গ্লোভ সহায়তা সেবা",
    description: "500+ student data entry service, on-site engineer visits, and direct WhatsApp hotline.",
    portal: "all",
    iconName: "Headphones",
    articleCount: 1,
  },
];

export const HELP_ARTICLES: HelpArticle[] = [
  {
    id: "admin-quickstart",
    slug: "admin-quickstart",
    title: "DocentBase Admin Portal Quick Start Guide",
    titleBn: "ডোসেন্টবেস অ্যাডমিন পোর্টাল শুরু করার গাইড",
    category: "getting-started",
    categoryName: "Getting Started & Setup",
    portal: "admin",
    readTime: "4 min read",
    lastUpdated: "August 2026",
    summary: "A complete step-by-step walkthrough to get your coaching center live on admin.docentbase.com in under 10 minutes.",
    summaryBn: "মাত্র ১০ মিনিটের মধ্যে admin.docentbase.com-এ আপনার কোচিং সেন্টার চালুর পূর্ণাঙ্গ নির্দেশিকা।",
    keywords: ["admin", "setup", "onboarding", "quickstart", "coaching center", "get started"],
    sections: [
      {
        heading: "1. Accessing Your Dashboard Shell",
        content: "Navigate to `admin.docentbase.com` and authenticate with your registered owner credentials. Upon first sign-in, the Organization Setup Wizard will prompt you to enter your institution details.",
        callout: {
          type: "tip",
          text: "You can manage multiple coaching branches under a single DocentBase account by creating separate Organizations in the switcher.",
        },
      },
      {
        heading: "2. Setting Up Academic Batches",
        content: "Batches are the core operational units in DocentBase. Each batch holds a specific class, subject, schedule, assigned teacher, and monthly fee amount.",
        steps: [
          "Open Batches & Classes from the sidebar navigation or press ⌘B.",
          "Click '+ Create New Batch' in the top right header.",
          "Define Batch Name (e.g., 'HSC 2027 Physics Batch A'), Schedule Days (Sun/Tue/Thu), and Class Time.",
          "Assign a Lead Teacher and specify the standard Monthly Tuition Fee in BDT.",
        ],
      },
      {
        heading: "3. Generating Your Center's Join Code",
        content: "DocentBase provides a secure 6-character Join Code (e.g. `DOC-9421`) allowing students and staff to find and request enrollment in your center without manual link sharing.",
        callout: {
          type: "note",
          text: "You can customize or regenerate your Join Code anytime under Organization Settings > Join Code.",
        },
      },
    ],
    relatedSlugs: ["student-enrollment", "batch-scheduling", "team-and-roles"],
  },
  {
    id: "student-enrollment",
    slug: "student-enrollment",
    title: "Enrolling Students & Universal Student ID (USI)",
    titleBn: "শিক্ষার্থী ভর্তি এবং ইউনিভার্সাল স্টুডেন্ট আইডি (USI)",
    category: "student-management",
    categoryName: "Student Directory & USI",
    portal: "admin",
    readTime: "5 min read",
    lastUpdated: "August 2026",
    summary: "Learn how to register single students, bulk upload 500+ records via CSV, and utilize USI for cross-batch tracking.",
    summaryBn: "একক ও বাল্ক সিএসভি ফাইল দিয়ে শিক্ষার্থী ভর্তি এবং ইউএসআই ট্র্যাকিং পদ্ধতি।",
    keywords: ["student", "enrollment", "bulk upload", "csv", "usi", "directory", "guardian"],
    sections: [
      {
        heading: "1. Single Student Registration",
        content: "To add an individual student, navigate to Student Directory (`/students`) and click '+ Add Student'. Required fields include: Full Name, Guardian Mobile Number (for automated SMS), Assigned Batch, and Roll Number.",
      },
      {
        heading: "2. Bulk Enrollment via CSV Template",
        content: "When migrating from Excel or paper registers, download our standard CSV template. Ensure the mobile numbers are in standard 11-digit format (e.g. `01711XXXXXX`).",
        callout: {
          type: "important",
          text: "Need help migrating large paper rosters? Request our complimentary 'Data Entry as a Service' under White-Glove Support!",
        },
      },
      {
        heading: "3. What is Universal Student ID (USI)?",
        content: "DocentBase generates a unique cryptographic USI for every enrolled student across Bangladesh. When a student attends an alternate morning shift or swaps batches, their USI QR or barcode automatically resolves their profile and credits attendance to their parent batch.",
      },
    ],
    relatedSlugs: ["rapid-attendance", "admin-quickstart", "monthly-payments"],
  },
  {
    id: "batch-scheduling",
    slug: "batch-scheduling",
    title: "Batch Management & Multi-Shift Scheduling",
    titleBn: "ব্যাচ পরিচালনা ও মাল্টি-শিফট শিডিউলিং",
    category: "student-management",
    categoryName: "Student Directory & USI",
    portal: "admin",
    readTime: "3 min read",
    lastUpdated: "August 2026",
    summary: "Organize coaching shifts, set student capacity caps, assign teachers, and configure automated routine syncing.",
    summaryBn: "কোচিং শিফট তৈরি, আসন সংখ্যা নির্ধারণ এবং শিক্ষক বণ্টন নিয়ম।",
    keywords: ["batches", "routine", "shifts", "classes", "teacher assignment", "capacity"],
    sections: [
      {
        heading: "1. Configuring Capacity & Class Timing",
        content: "Set maximum capacity limits on each batch to prevent classroom overcrowding. When a batch reaches 100% capacity, the system displays a warning badge during new student allocations.",
      },
      {
        heading: "2. Linking Batches with Student Portals",
        content: "Once a batch is scheduled, the class timetable automatically updates on the Student Dashboard (`student.docentbase.com/routine`) for all enrolled students.",
      },
    ],
    relatedSlugs: ["admin-quickstart", "student-enrollment", "rapid-attendance"],
  },
  {
    id: "rapid-attendance",
    slug: "rapid-attendance",
    title: "Rapid 3-Second Attendance & 10-Point Homework Ratings",
    titleBn: "৩-সেকেন্ডের দ্রুত উপস্থিতি ও ১০-পয়েন্ট হোমওয়ার্ক রেটিং",
    category: "attendance-system",
    categoryName: "Rapid Attendance & Ratings",
    portal: "admin",
    readTime: "4 min read",
    lastUpdated: "August 2026",
    summary: "Log an entire 60-student batch in under 90 seconds, rate daily homework performance, and handle cross-batch session swaps.",
    summaryBn: "মাত্র ৯০ সেকেন্ডে ৬০ জন শিক্ষার্থীর উপস্থিতি ও বাড়ির কাজের মান যাচাই করার নিয়ম।",
    keywords: ["attendance", "present", "absent", "homework rating", "usi swap", "daily log"],
    sections: [
      {
        heading: "1. Tap-to-Log Attendance Workflow",
        content: "From the sidebar, select 'Rapid Attendance'. The active batch roster opens in a high-density tactile grid. Tap once to mark Present (emerald) or Absent (rose). Quick-action buttons allow marking 'All Present' with a single tap.",
      },
      {
        heading: "2. 10-Point Homework Rating",
        content: "Beside each student name, rate their daily homework from 1 to 10. These daily ratings automatically compute the Monthly Academic Consistency Score sent to guardians at month-end.",
        callout: {
          type: "tip",
          text: "Consistently low homework scores (<5/10) trigger an optional automated alert to the guardian's WhatsApp.",
        },
      },
      {
        heading: "3. Handling Cross-Batch Swaps (USI Detection)",
        content: "If a student from Batch B attends Batch A today due to school timing conflicts, simply scan their USI QR or search their name. DocentBase logs their attendance for today while notifying their primary batch teacher.",
      },
    ],
    relatedSlugs: ["parent-reports-sms", "student-enrollment", "troubleshoot-attendance-offline"],
  },
  {
    id: "monthly-payments",
    slug: "monthly-payments",
    title: "Monthly Tuition Fee Collection & Grace Period Automation",
    titleBn: "মাসিক বেতন আদায় এবং গ্রেস পিরিয়ড অটোমেশন",
    category: "billing-payments",
    categoryName: "Fees & Payment Gateways",
    portal: "admin",
    readTime: "5 min read",
    lastUpdated: "August 2026",
    summary: "Manage monthly fee cycles, configure auto-unpaid grace periods (10th/15th/20th), track partial payments, and schedule reminders.",
    summaryBn: "কোচিং ফি সংগ্রহ, গ্রেস পিরিয়ড নির্ধারণ এবং বকেয়া নোটিশ পাঠানোর নিয়মাবলী।",
    keywords: ["fees", "tuition", "payment", "grace period", "unpaid list", "receipts", "bKash"],
    sections: [
      {
        heading: "1. Automated Monthly Billing Generation",
        content: "On the 1st of every calendar month, DocentBase generates digital fee invoices for all active students according to their batch rate and scholarship discounts.",
      },
      {
        heading: "2. Setting Up Grace Periods (10th / 15th / 20th)",
        content: "Under Payment Settings, select your center's grace period. For example, if set to the 10th, students who have not cleared their fee by the 11th automatically move into the 'Overdue / Unpaid' list.",
        callout: {
          type: "note",
          text: "You can trigger bulk 'Polite Fee Reminder' SMS to all overdue parents with a single click.",
        },
      },
      {
        heading: "3. Logging Offline Cash & Manual bKash Payments",
        content: "When a student pays at the reception counter, open the Payment Hub, search by Roll or Name, and click '[Paid]'. The student's digital receipt is instantly generated and SMS sent to the guardian.",
      },
    ],
    relatedSlugs: ["payment-gateways", "parent-reports-sms", "troubleshoot-bkash-pending"],
  },
  {
    id: "payment-gateways",
    slug: "payment-gateways",
    title: "Configuring bKash, Nagad & SSLCommerz Payment Automation",
    titleBn: "বিকাশ, নগদ ও SSLCommerz পেমেন্ট গেটওয়ে সেটআপ",
    category: "billing-payments",
    categoryName: "Fees & Payment Gateways",
    portal: "admin",
    readTime: "6 min read",
    lastUpdated: "August 2026",
    summary: "Set up direct student online fee payments with automated webhook clearance and next-day bank settlements.",
    summaryBn: "অনলাইন পেমেন্ট গেটওয়ে সংযুক্ত করে স্বয়ংক্রিয় ফি ক্লিয়ারেন্স ও ব্যাংক ট্রান্সফারের নিয়ম।",
    keywords: ["bKash", "Nagad", "SSLCommerz", "gateway", "webhook", "merchant", "settlement"],
    sections: [
      {
        heading: "1. Mode A: Manual Verification (Personal Numbers)",
        content: "Display your institution's bKash or Nagad personal/merchant number. Students upload transaction TrxID on their portal for one-click admin verification.",
      },
      {
        heading: "2. Mode B: Full Automated Gateway (Recommended)",
        content: "Connect your DocentBase Merchant Gateway. When students pay via bKash, Nagad, Rocket, or Visa/Mastercard on `student.docentbase.com`, the fee is instantly marked as PAID in your system without any human effort.",
        callout: {
          type: "important",
          text: "Automated settlements are disbursed to your linked coaching bank account every business day morning.",
        },
      },
    ],
    relatedSlugs: ["monthly-payments", "student-fee-payment", "troubleshoot-bkash-pending"],
  },
  {
    id: "parent-reports-sms",
    slug: "parent-reports-sms",
    title: "Parent Monthly Progress Cards & Automated SMS Dispatch",
    titleBn: "অভিভাবকদের মাসিক অগ্রগতি কার্ড ও স্বয়ংক্রিয় এসএমএস",
    category: "parent-reporting",
    categoryName: "SMS & Parent Progress",
    portal: "admin",
    readTime: "4 min read",
    lastUpdated: "August 2026",
    summary: "Generate comprehensive monthly report cards combining attendance %, homework scores, and model test rankings with 1-click SMS/WhatsApp dispatch.",
    summaryBn: "মাসিক প্রগ্রেস রিপোর্ট তৈরি ও এক ক্লিকে অভিভাবকদের এসএমএস ও হোয়াটসঅ্যাপে পাঠানোর নিয়ম।",
    keywords: ["sms", "whatsapp", "parent report", "progress card", "report card", "bangla sms"],
    sections: [
      {
        heading: "1. The Monthly Report Card Formula",
        content: "DocentBase automatically aggregates: (1) Total Classes Attended vs Held, (2) Average Homework Rating, (3) Model Test Exam Marks, and (4) Tuition Clearance Status into an elegant printable PDF and digital card.",
      },
      {
        heading: "2. Single-Tap SMS & WhatsApp Dispatch",
        content: "At month-end, click 'Dispatch All Reports'. The system queues delivery over official telco masking routes. Guardians receive a secure short-link to inspect their child's detailed analytics.",
      },
    ],
    relatedSlugs: ["rapid-attendance", "monthly-payments", "troubleshoot-sms-not-delivered"],
  },
  {
    id: "team-and-roles",
    slug: "team-and-roles",
    title: "Managing Staff & The 8 Custom RBAC Permission Roles",
    titleBn: "কর্মী ব্যবস্থাপনা এবং ৮টি কাস্টম রোল পারমিশন",
    category: "team-roles",
    categoryName: "Team & 8 RBAC Roles",
    portal: "admin",
    readTime: "5 min read",
    lastUpdated: "August 2026",
    summary: "Understand the 8 specialized roles in DocentBase: Admin, Manager, Teacher, Receptionist, Accountant, Website Manager, Viewer, and Member.",
    summaryBn: "ডোসেন্টবেসের ৮টি ব্যবহারকারী রোল ও তাদের নির্দিষ্ট ক্ষমতা ও সুরক্ষার বিবরণ।",
    keywords: ["roles", "rbac", "permissions", "team", "invite", "teacher", "accountant", "receptionist"],
    sections: [
      {
        heading: "1. The 8 Role Breakdown",
        content: "Every team member has granular access tailored to their operational duty:",
        steps: [
          "Owner / Admin (org:admin): Full control over billing, settings, staff, and records.",
          "Operations Manager (org:manager): Batch planning, student directory, attendance overrides.",
          "Academic Teacher (org:teacher): Taking attendance, rating homework, entering exam marks for assigned batches.",
          "Receptionist (org:receptionist): Student check-in, guardian inquiries, join-request reviews.",
          "Accountant (org:accountant): Payment hub, fee receipts, offline cash logging, expense exports.",
          "Website Manager (org:website_manager): Public notices, institution landing page banners.",
          "Read-Only Viewer (org:viewer): Read access to stats and reports without edit capabilities.",
          "General Staff (org:member): Basic internal notices access.",
        ],
      },
      {
        heading: "2. Inviting Staff Members",
        content: "Navigate to Team & Users (`/users`), click '+ Invite Member', enter their email address, and pick their designated role.",
      },
    ],
    relatedSlugs: ["admin-quickstart", "join-code-guide", "troubleshoot-join-code-expired"],
  },
  {
    id: "white-glove-support",
    slug: "white-glove-support",
    title: "DocentBase White-Glove Support: Data Entry & On-Site Visits",
    titleBn: "ডোসেন্টবেস হোয়াইট-গ্লোভ সাপোর্ট: ডাটা এন্ট্রি ও অন-সাইট সেবা",
    category: "white-glove",
    categoryName: "White-Glove Support",
    portal: "all",
    readTime: "3 min read",
    lastUpdated: "August 2026",
    summary: "Learn how our dedicated support engineers assist coaching centers with complete paper roster digitisation, biometric setup, and 24/7 hotline care.",
    summaryBn: "ফ্রি ডাটা এন্ট্রি সার্ভিস এবং বায়োমেট্রিক হার্ডওয়্যার সেটআপ সহায়তা পাওয়ার উপায়।",
    keywords: ["white glove", "support", "data entry", "on-site engineer", "biometric", "hotline", "whatsapp"],
    sections: [
      {
        heading: "1. Free Data Entry as a Service",
        content: "If you have handwritten student registers or complex spreadsheets, take clear photos and upload them in the Support section. Our in-house data ops team enters and validates up to 1,000 students within 24 hours.",
      },
      {
        heading: "2. Requesting an On-Site Engineering Visit",
        content: "For coaching centers with biometric fingerprint scanners (ZKTeco), local Wi-Fi networks, or barcode turnstiles, our Dhaka & divisional engineers visit on-site for direct hardware configuration.",
      },
    ],
    relatedSlugs: ["admin-quickstart", "student-enrollment", "troubleshoot-attendance-offline"],
  },
  {
    id: "join-code-guide",
    slug: "join-code-guide",
    title: "How Students & Staff Join Using the 6-Digit Join Code",
    titleBn: "৬-সংখ্যার জয়েন কোড ব্যবহার করে যুক্ত হওয়ার নিয়ম",
    category: "student-portal",
    categoryName: "Student & Parent Cockpit",
    portal: "student",
    readTime: "3 min read",
    lastUpdated: "August 2026",
    summary: "Step-by-step guide for students and teachers to join their coaching center on DocentBase without complex invites.",
    summaryBn: "সহজ জয়েন কোড দিয়ে স্টুডেন্ট পোর্টালে কোচিং খুঁজে যুক্ত হওয়ার উপায়।",
    keywords: ["join code", "student join", "self service", "enrollment code", "request join"],
    sections: [
      {
        heading: "1. Finding Your Coaching Center",
        content: "Ask your coaching center for their unique Join Code (e.g. `DOC-8192`). Go to `student.docentbase.com` and click 'Join an Organization'.",
      },
      {
        heading: "2. Submitting Your Request",
        content: "Enter your Student Name, Guardian Phone Number, and desired Batch. Once submitted, your coaching admin receives an instant notification to approve your profile.",
      },
    ],
    relatedSlugs: ["student-portal-guide", "student-fee-payment", "troubleshoot-join-code-expired"],
  },
  {
    id: "student-portal-guide",
    slug: "student-portal-guide",
    title: "Student & Parent Cockpit Overview (student.docentbase.com)",
    titleBn: "শিক্ষার্থী ও অভিভাবক পোর্টাল পরিচিতি",
    category: "student-portal",
    categoryName: "Student & Parent Cockpit",
    portal: "student",
    readTime: "4 min read",
    lastUpdated: "August 2026",
    summary: "Discover all features available to students and parents: routines, attendance percentages, monthly dues, and exam progress.",
    summaryBn: "রুটিন, উপস্থিতি, মাসিক ফি ও পরীক্ষার ফলাফল দেখার সম্পূর্ণ গাইড।",
    keywords: ["student portal", "dashboard", "parent", "routine", "results", "attendance", "exams"],
    sections: [
      {
        heading: "1. The Student Dashboard Overview",
        content: "The student portal at `student.docentbase.com` provides a clean, distraction-free view of all upcoming classes, live notices, fee status, and monthly progress charts.",
      },
      {
        heading: "2. Multi-Coaching Switching",
        content: "If a student attends Physics at one academy and Chemistry at another, both coaching centers appear in the top selector for instant one-click switching.",
      },
    ],
    relatedSlugs: ["student-fee-payment", "student-attendance-check", "student-routine-exams"],
  },
  {
    id: "student-fee-payment",
    slug: "student-fee-payment",
    title: "Paying Monthly Tuition via bKash & Downloading Digital Receipts",
    titleBn: "বিকাশ দিয়ে মাসিক বেতন পরিশোধ ও ডিজিটাল রসিদ ডাউনলোড",
    category: "student-portal",
    categoryName: "Student & Parent Cockpit",
    portal: "student",
    readTime: "3 min read",
    lastUpdated: "August 2026",
    summary: "Clear monthly tuition dues instantly from your smartphone using bKash, Nagad, or debit cards and get official receipts.",
    summaryBn: "মোবাইল থেকে সরাসরি বিকাশ বা নগদে বেতন পরিশোধ ও রসিদ ডাউনলোড।",
    keywords: ["pay fees", "bKash pay", "digital receipt", "student fees", "tuition online"],
    sections: [
      {
        heading: "1. One-Click bKash Payment",
        content: "Open the 'Fees & Dues' tab. Click 'Pay Now with bKash'. Complete the secure PIN prompt on bKash gateway. Your status turns green ('PAID') immediately.",
      },
      {
        heading: "2. Downloading Your Official Stamp Receipt",
        content: "Click 'Download Receipt' under paid invoices to get a PDF receipt featuring your coaching center's official header and digital QR verification.",
      },
    ],
    relatedSlugs: ["student-portal-guide", "payment-gateways", "troubleshoot-bkash-pending"],
  },
  {
    id: "student-attendance-check",
    slug: "student-attendance-check",
    title: "Checking Attendance Percentage, Logs & Leave Notices",
    titleBn: "উপস্থিতির শতকরা হার, ইন-আউট সময় এবং ছুটির নোটিশ",
    category: "student-portal",
    categoryName: "Student & Parent Cockpit",
    portal: "student",
    readTime: "3 min read",
    lastUpdated: "August 2026",
    summary: "Monitor daily check-in timestamps, monthly attendance rates, and submit leave requests online.",
    summaryBn: "দৈনিক উপস্থিতির সময় ও মাসিক শতকরা হার যাচাই করার নিয়ম।",
    keywords: ["student attendance", "absent", "leave notice", "check in time", "punctuality"],
    sections: [
      {
        heading: "1. Monthly Attendance Calendar",
        content: "The calendar highlights days as Present (emerald), Late (amber), or Absent (rose). Maintaining >85% attendance earns a Punctuality Badge.",
      },
    ],
    relatedSlugs: ["student-portal-guide", "rapid-attendance", "student-routine-exams"],
  },
  {
    id: "student-routine-exams",
    slug: "student-routine-exams",
    title: "Accessing Class Routines, Model Test Schedules & Results",
    titleBn: "ক্লাস রুটিন, মডেল টেস্ট সূচি এবং পরীক্ষার ফলাফল",
    category: "student-portal",
    categoryName: "Student & Parent Cockpit",
    portal: "student",
    readTime: "4 min read",
    lastUpdated: "August 2026",
    summary: "View interactive weekly class routines, room allocations, upcoming model tests, and subject-wise scorecards.",
    summaryBn: "সাপ্তাহিক রুটিন, রুম নম্বর এবং পরীক্ষার রেজাল্ট কার্ড দেখার পদ্ধতি।",
    keywords: ["routine", "exam", "results", "model test", "marksheet", "schedule"],
    sections: [
      {
        heading: "1. Real-Time Routine Updates",
        content: "Any class rescheduling made by the coaching admin reflects in real time on your routine calendar with a clear alert tag.",
      },
      {
        heading: "2. Model Test Scorecards & Performance Graphs",
        content: "Track your marks across chapters and view your percentile standing within your batch.",
      },
    ],
    relatedSlugs: ["student-portal-guide", "student-attendance-check"],
  },
];

export const TROUBLESHOOTING_FLOWS: TroubleshootingFlow[] = [
  {
    id: "bkash-pending",
    problem: "bKash / Nagad payment made but fee status still shows Pending",
    problemBn: "বিকাশ বা নগদে টাকা পাঠানো হয়েছে কিন্তু স্ট্যাটাস এখনও পেন্ডিং দেখাচ্ছে",
    category: "Billing & Gateways",
    portal: "all",
    symptoms: [
      "Money was deducted from the student's bKash account.",
      "The student dashboard still says 'Unpaid' or 'Pending Verification'.",
      "Admin fee collection tally hasn't updated.",
    ],
    rootCauses: [
      "Manual Payment Mode was used and the admin has not yet clicked 'Approve TrxID'.",
      "Network delay between bKash webhook notification and Cloudflare Edge.",
      "Incorrect TrxID entered by the student during manual cash-in.",
    ],
    steps: [
      {
        title: "Step 1: Check Payment Mode (Automated vs Manual)",
        description: "If your center uses Manual Mode, open Admin Portal > Payment Hub > 'Pending TrxID Reviews' and verify the 10-character transaction code.",
        actionUrl: "/help/articles/payment-gateways",
        actionText: "View Gateway Setup Guide",
      },
      {
        title: "Step 2: Verify TrxID in bKash Merchant Statement",
        description: "Log in to your bKash Merchant portal or check the SMS confirmation from bKash (16247). Ensure the sender number and BDT amount match.",
      },
      {
        title: "Step 3: Force Instant Fee Clearance",
        description: "If verified, click the green 'Clear Fee' button in the Admin Payment Hub to instantly issue the official digital receipt.",
      },
    ],
    escalationTip: "If the transaction is not appearing after 30 minutes, contact our 24/7 White-Glove Hotline with the bKash TrxID.",
  },
  {
    id: "join-code-invalid",
    problem: "Join Code says 'Invalid Code' or 'Request Blocked'",
    problemBn: "জয়েন কোড দিলে 'Invalid Code' বা 'Request Blocked' দেখাচ্ছে",
    category: "Access & Onboarding",
    portal: "student",
    symptoms: [
      "Student enters code (e.g. DOC-1234) and gets an error message.",
      "Join button remains disabled.",
      "Teacher cannot find the organization.",
    ],
    rootCauses: [
      "The coaching admin regenerated a new Join Code, invalidating previous codes.",
      "The student account was previously marked as 'Blocked' by an admin.",
      "A typo in prefix or numbers (codes are case-insensitive but must have 6 chars).",
    ],
    steps: [
      {
        title: "Step 1: Verify the Active Code in Admin Settings",
        description: "Coaching Admins should navigate to Organization Settings > Join Code to confirm the current active 6-character code.",
        actionUrl: "/help/articles/join-code-guide",
        actionText: "Join Code Guide",
      },
      {
        title: "Step 2: Check Organization Join Requests & Blocklist",
        description: "In the Admin Portal under Team & Users > Join Requests, verify if the user's email was accidentally placed in the Blocklist.",
      },
      {
        title: "Step 3: Send Direct Invite Link",
        description: "Admins can copy the direct URL `student.docentbase.com/join?code=YOUR_CODE` and send it directly via WhatsApp.",
      },
    ],
    escalationTip: "Admins can reset the join code anytime from Settings > Join Code > Regenerate Code.",
  },
  {
    id: "attendance-device-offline",
    problem: "Biometric attendance scanner or cross-batch sync is not logging",
    problemBn: "বায়োমেট্রিক ডিভাইস বা ক্রস-ব্যাচ উপস্থিতি সিঙ্ক হচ্ছে না",
    category: "Attendance & Devices",
    portal: "admin",
    symptoms: [
      "Fingerprint punches are not appearing in real-time on the dashboard.",
      "Student USI scan shows 'Student Not Found'.",
    ],
    rootCauses: [
      "Local Wi-Fi connection to ZKTeco/Hikvision device dropped.",
      "Student has not yet been assigned a USI barcode in the student directory.",
      "Browser cache requires a quick refresh.",
    ],
    steps: [
      {
        title: "Step 1: Check Local Network & Device IP",
        description: "Ensure the biometric terminal is connected to your center's router and can reach the internet (LAN cable green light solid).",
      },
      {
        title: "Step 2: Use Instant Web Tap Attendance as Fallback",
        description: "While troubleshooting hardware, teachers can open `admin.docentbase.com` on their mobile or tablet to mark attendance in under 3 seconds.",
        actionUrl: "/help/articles/rapid-attendance",
        actionText: "Open Rapid Attendance Guide",
      },
      {
        title: "Step 3: Request On-Site Hardware Dispatch",
        description: "Click 'Request On-Site Engineer' under White-Glove Support for hardware diagnostics.",
      },
    ],
    escalationTip: "Our hardware engineering team provides remote AnyDesk and on-site physical support across Dhaka and major divisional cities.",
  },
  {
    id: "sms-delivery-failed",
    problem: "Guardian SMS or Monthly Report Card is not received",
    problemBn: "অভিভাবকের কাছে এসএমএস বা মাসিক রিপোর্ট পৌঁছায়নি",
    category: "Notifications & SMS",
    portal: "admin",
    symptoms: [
      "SMS broadcast shows 'Failed' or 'Undelivered'.",
      "Guardian reports not receiving attendance alerts.",
    ],
    rootCauses: [
      "Guardian mobile number entered without 11 digits (e.g., missing leading 0).",
      "Guardian number is registered with BTRC Do Not Disturb (DND) registry.",
      "Telco masking route congestion during peak evening hours (7 PM - 9 PM).",
    ],
    steps: [
      {
        title: "Step 1: Validate Student Phone Number Format",
        description: "Ensure the guardian phone number follows the standard Bangladesh format (e.g., `017XXXXXXXX` or `018XXXXXXXX` without spaces or dashes).",
      },
      {
        title: "Step 2: Check DocentBase SMS Balance",
        description: "Verify your institution's SMS credit balance under Organization Settings > SMS & Notifications.",
      },
      {
        title: "Step 3: Dispatch via WhatsApp as Fallback",
        description: "Use the 1-click 'Share via WhatsApp' button on the student's profile to send the digital report card link directly.",
        actionUrl: "/help/articles/parent-reports-sms",
        actionText: "Parent Reports Guide",
      },
    ],
    escalationTip: "All DocentBase SMS routes utilize official BTRC-approved non-masking and masking gateways for maximum delivery rate.",
  },
];
