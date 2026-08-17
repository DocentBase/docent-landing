export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleBn: string;
  excerpt: string;
  excerptBn: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "stop-tuition-fee-leakage-coaching-centers",
    slug: "stop-tuition-fee-leakage-coaching-centers",
    title: "How Coaching Centers Lose 15–20% of Monthly Revenue to Fee Leakage (And How to Fix It)",
    titleBn: "কীভাবে কোচিং সেন্টারগুলোতে প্রতি মাসে ১৫-২০% ফি ফাঁকি হয় এবং এর সমাধান কী",
    excerpt: "Manual cash collection, unrecorded grace periods, and awkward verbal fee reminders cost coaching academies tens of thousands of Taka every month. Here is the operational framework to fix it.",
    excerptBn: "ম্যানুয়াল ক্যাশ কালেকশন এবং বিলম্বিত ফি আদায়ের জটিলতা দূর করার প্রমাণিত কৌশল।",
    publishedAt: "August 12, 2026",
    readTime: "7 min read",
    category: "Revenue & Finance",
    tags: ["Fee Collection", "bKash Automation", "Coaching Growth", "Revenue Leakage"],
    featured: true,
    author: {
      name: "Solaman Reza",
      role: "Head of Product, DocentBase",
      avatar: "/logo.png",
    },
    content: `
## The Hidden Crisis in Coaching Center Cash Flow

For most coaching centers and private batch teachers in Bangladesh, tuition fee collection is the single most stressful week of every month. 

Teachers want to focus purely on delivering high-impact lectures, but instead find themselves managing paper registers, reconciling fragmented bKash personal cash-ins, and sending awkward verbal reminders to students before class.

According to our ground operations research across 120+ coaching centers in Dhaka, Chittagong, and Rajshahi:
- **14.8% of monthly tuition dues** are either delayed past 60 days or completely uncollected when students transition batches.
- **Over 18 administrative hours per week** are lost to manual ledger updates, paper receipt writing, and verifying 10-digit transaction IDs.
- **Student-teacher relationships suffer** when teachers are forced to act as debt collectors at the classroom door.

---

## The 3 Root Causes of Fee Leakage

### 1. The "Personal bKash / Nagad" Chaos
When parents send fees to a teacher's personal bKash or Nagad number with vague reference notes like *"Shakil class 10"*, matching that transaction to one of 400 enrolled students becomes a nightmare. Without real-time webhook verification, transactions slip through the cracks.

### 2. Lack of Automated Grace Period Management
Most coaching centers enforce a verbal "pay by the 10th of the month" policy. However, without automated micro-incentives or progressive digital grace period countdowns, payments easily drift into the next billing cycle.

### 3. Disconnected Multi-Batch Enrollments
When a student is enrolled in Physics, Chemistry, and Higher Math across different morning and evening batches, paper bookkeepers frequently record payment for one subject while missing dues for the other two.

---

## The Solution: Automated Fee Engine with 1-Click Digital Receipts

Implementing an automated academic billing infrastructure eliminates fee leakage completely:

1. **Unique Student Identifier (USI)**: Every student receives an institutional USI (e.g. \`DOC-8821\`). Any payment made via bKash, Nagad, or Bank Transfer instantly credits the exact student's ledger.
2. **Instant SMS Confirmation**: As soon as a payment clears, guardians receive an official SMS receipt with remaining balance and transaction timestamp.
3. **Calm Grace Period Warnings**: Rather than embarrassing roll-calls, students receive polite automated notices on their Student Cockpit (\`student.docentbase.com\`) with direct bKash checkout links.

### Measurable Results
Institutions switching to DocentBase's Grace Period Engine report:
- **98.4% fee recovery rate** within the first 10 days of the calendar month.
- **Zero manual TrxID verification hours** for administration staff.
- **100% transparent audit trails** for branch owners and accounting partners.
    `,
  },
  {
    id: "biometric-vs-qr-student-attendance-guide",
    slug: "biometric-vs-qr-student-attendance-guide",
    title: "Biometric Fingerprint vs. USI Barcode: Choosing the Best Attendance System for 500+ Students",
    titleBn: "বায়োমেট্রিক বনাম কিউআর বারকোড: ৫০০+ শিক্ষার্থীর জন্য সেরা উপস্থিতি সিস্টেম",
    excerpt: "A comprehensive hardware and software comparison for high-volume batch coaching centers. Discover how to process 500 students in under 4 minutes without queue bottlenecks.",
    excerptBn: "কোচিং সেন্টারে জটলা ছাড়াই দ্রুত উপস্থিতি নিশ্চিত করার আধুনিক প্রযুক্তি ও হার্ডওয়্যার গাইড।",
    publishedAt: "August 8, 2026",
    readTime: "6 min read",
    category: "Hardware & Ops",
    tags: ["Attendance", "Biometrics", "ZKTeco", "USI Barcode", "Hardware"],
    featured: true,
    author: {
      name: "Tariqul Islam",
      role: "Lead Hardware Engineer, DocentBase",
      avatar: "/logo.png",
    },
    content: `
## The 5:00 PM Bottleneck

Imagine 250 students arriving at your coaching center between 4:55 PM and 5:05 PM for their HSC Physics batch. If your attendance system takes 6 seconds per student, a line of 100 students will take **10 full minutes** to clear, causing students to enter class late and disrupting lectures.

In this guide, we break down the two primary attendance methods for academic institutions in Bangladesh: **ZKTeco Biometric Fingerprint/Face Terminals** vs. **USI Thermal QR / Barcode Card Scanners**.

---

## Comparison Matrix

| Criteria | Biometric Fingerprint (ZKTeco) | USI Thermal Barcode / QR | Web Tap Rapid Attendance |
| :--- | :--- | :--- | :--- |
| **Punch Speed** | 1.8 – 2.5 seconds | **0.4 – 0.8 seconds** | 1.2 seconds per student |
| **Hardware Cost** | ৳12,000 – ৳22,000 per unit | ৳3,500 – ৳6,000 per scanner | **৳0 (Any Phone / Tablet)** |
| **Queue Throughput** | ~25 students/min | **~75 students/min** | ~40 students/min |
| **Failure Rate** | ~3% (Sweat, dry fingers) | **< 0.1%** | 0% |
| **Parent SMS Delay** | Instant (< 3 seconds) | Instant (< 3 seconds) | Instant (< 3 seconds) |

---

## Best Practice Architecture: The Hybrid Model

For coaching academies with more than 300 students, DocentBase recommends a **Hybrid Operational Architecture**:
1. **Primary Entry**: Dual USB 2D Barcode scanners connected to student identity cards for sub-second rapid queue clearing.
2. **Secondary Biometric Terminal**: Dedicated ZKTeco device for faculty and staff attendance.
3. **Teacher Mobile Fallback**: The DocentBase Teacher Cockpit web interface enables instant 1-tap batch attendance marking directly from any mobile browser during power cuts or internet outages.
    `,
  },
  {
    id: "how-to-scale-coaching-academy-to-1000-students",
    slug: "how-to-scale-coaching-academy-to-1000-students",
    title: "The Playbook for Scaling a Coaching Academy from 200 to 1,000+ Students Across Multiple Branches",
    titleBn: "২০০ থেকে ১,০০০+ শিক্ষার্থীর মাল্টি-ব্রাঞ্চ কোচিং একাডেমি গড়ার সম্পূর্ণ রূপরেখা",
    excerpt: "Key organizational systems, role-based access control, routine management, and physical operations needed to expand your coaching business across multiple city locations.",
    excerptBn: "কোচিং সেন্টার সম্প্রসারণ এবং একাধিক শাখা সফলভাবে পরিচালনার কার্যকরী গাইড।",
    publishedAt: "July 28, 2026",
    readTime: "8 min read",
    category: "Management & Growth",
    tags: ["Scaling", "Multi-Branch", "RBAC Roles", "Coaching Business"],
    author: {
      name: "Solaman Reza",
      role: "Head of Product, DocentBase",
      avatar: "/logo.png",
    },
    content: `
## Why Most Coaching Centers Hit a Ceiling at 300 Students

Most brilliant educators start with 20–30 students, grow to 200 through word-of-mouth excellence, and then hit an invisible wall. 

At 300 students:
- Routine clashes between morning and evening shifts multiply.
- Room occupancy and seat allocation become impossible to track manually.
- Absenteeism tracking slips, leading to dropouts that teachers don't notice until it's too late.

To scale past 1,000 students across multiple branches (e.g. Farmgate, Uttara, Mirpur), you need **standardized operating procedures (SOPs)** powered by software that enforces them automatically.

---

## Core Pillars of Multi-Branch Scale

### 1. 8-Tier Role-Based Access Control (RBAC)
Never share single administrative passwords. DocentBase isolates permissions into 8 distinct roles:
- **Super Admin (Owner)**: Financial analytics, profit distribution, master branch overview.
- **Branch Manager**: Daily shift routines, staff scheduling, localized expenses.
- **Teacher**: Marks entry, 10-point daily homework, class routine.
- **Accountant**: Cash collections, fee reconciliations, expense vouchers.
- **Data Entry Associate**: New student registrations, batch transfers.

### 2. Multi-Branch USI Centralization
When a student relocates or enrolls in weekend revision batches at a different branch, their academic history, fee records, and model test rankings persist under a single USI profile.
    `,
  },
  {
    id: "btrc-sms-masking-guidelines-educational-institutions",
    slug: "btrc-sms-masking-guidelines-educational-institutions",
    title: "BTRC Guidelines for Educational SMS Gateways in Bangladesh: Masking vs. Non-Masking",
    titleBn: "বাংলাদেশে শিক্ষাপ্রতিষ্ঠানের এসএমএস নীতিমালা: মাস্কিং বনাম নন-মাস্কিং নির্দেশিকা",
    excerpt: "Everything coaching center owners need to know about BTRC compliance, telco sender IDs, DND registries, and guaranteeing 99.8% SMS delivery for exam results and attendance alerts.",
    excerptBn: "অভিভাবকদের কাছে শতভাগ নিশ্চিত এসএমএস পৌঁছানোর জন্য বিটিআরসি অনুমোদিত নিয়মাবলী।",
    publishedAt: "July 19, 2026",
    readTime: "5 min read",
    category: "Compliance & Telco",
    tags: ["SMS Masking", "BTRC", "Parent Alerts", "Telco"],
    author: {
      name: "Sabbir Ahmed",
      role: "Infrastructure Lead, DocentBase",
      avatar: "/logo.png",
    },
    content: `
## Ensuring 99.8% SMS Delivery for Guardians

Sending an SMS to a guardian when their child is absent or when monthly model test marks are published is the strongest trust-builder an academic institution has.

However, many institutions face blocked SMS alerts or heavy delivery delays due to unregistered sender IDs and non-compliance with Bangladesh Telecommunication Regulatory Commission (BTRC) regulations.

### Key Rules to Follow
1. **Official Sender Masking**: Educational institutions can register their custom 11-character alphanumeric name (e.g. \`EXCELLENCE\`, \`ACADEMY\`).
2. **DND Handling**: Transactional academic alerts (such as fee receipts and absent notifications) are whitelisted through high-priority telco routes.
3. **Template Pre-Approval**: Standardized dynamic templates ensure fast delivery during evening peak hours (7:00 PM – 9:30 PM).
    `,
  },
  {
    id: "homework-grading-10-point-system-student-retention",
    slug: "homework-grading-10-point-system-student-retention",
    title: "How the 10-Point Daily Homework System Increases Student Retention by 40%",
    titleBn: "কীভাবে ১০-পয়েন্ট দৈনিক হোমওয়ার্ক মূল্যায়ন শিক্ষার্থীদের ড্রপআউট ৪০% কমায়",
    excerpt: "The proven pedagogical framework used by top admission coaching centers to build daily study habits, keep parents informed, and eliminate batch dropouts.",
    excerptBn: "শিক্ষার্থীদের প্রতিদিন পড়ার টেবিলে রাখার সহজ ও কার্যকর ১০-পয়েন্ট ট্র্যাকিং পদ্ধতি।",
    publishedAt: "July 10, 2026",
    readTime: "6 min read",
    category: "Pedagogy & Retention",
    tags: ["Homework", "Student Retention", "Parent Engagement", "Academic Growth"],
    author: {
      name: "Solaman Reza",
      role: "Head of Product, DocentBase",
      avatar: "/logo.png",
    },
    content: `
## Why Students Silently Drop Out of Coaching Batches

Students rarely drop out because the teacher's lecture was bad. They drop out because **they fall behind on homework for 2 consecutive weeks**, feel overwhelmed, and become too embarrassed to return to class.

By the time the monthly exam arrives and the student fails, it is too late to intervene.

---

## The 10-Point Daily Feedback Mechanism

Instead of binary pass/fail grading, DocentBase introduces the **10-Point Micro-Evaluation Metric**:
- **0–3 Points**: Critical backlog intervention required (Automated SMS to parent with topic checklist).
- **4–7 Points**: Satisfactory progress (Student receives positive reinforcement).
- **8–10 Points**: Mastery level (Eligible for monthly batch leaderboard recognition).

Teachers or teaching assistants can evaluate an entire batch of 60 students in under **90 seconds** on the Teacher Cockpit by selecting batch scores. Parents receive a weekly summary visual chart on the Student Portal.
    `,
  },
  {
    id: "admission-batch-exam-management-strategies",
    slug: "admission-batch-exam-management-strategies",
    title: "Model Test Scheduling & Percentile Scoring: Operating University Admission Batches at Scale",
    titleBn: "মডেল টেস্ট সূচি ও পার্সেন্টাইল স্কোরিং: বিশ্ববিদ্যালয় ভর্তি কোচিং পরিচালনার কৌশল",
    excerpt: "How to handle rapid question paper generation, negative marking, batch-wise percentile calculation, and SMS result distribution for hundreds of candidates simultaneously.",
    excerptBn: "মেডিকেল ও ইঞ্জিনিয়ারিং ভর্তি কোচিংয়ের মডেল টেস্ট এবং রেজাল্ট শিট তৈরির আধুনিক উপায়।",
    publishedAt: "June 25, 2026",
    readTime: "7 min read",
    category: "Exam Operations",
    tags: ["Model Test", "Admission Coaching", "Percentile Ranking", "Results SMS"],
    author: {
      name: "Tariqul Islam",
      role: "Lead Hardware Engineer, DocentBase",
      avatar: "/logo.png",
    },
    content: `
## The Intensity of Admission Season

During university admission season (Medical, BUET, DU A-Unit, GST), coaching centers conduct 3 to 5 model tests every week. Managing negative marking (e.g. -0.25 per wrong answer), generating rank sheets, and notifying anxious parents before 9:00 PM requires military precision.

### How DocentBase Automates the Full Pipeline:
1. **OMR & Fast Marks Entry**: Teachers or data operators can upload batch CSV sheets or tap input scores in seconds.
2. **Instant Negative Marking & Percentile Computation**: Highest marks, median score, and batch-wise percentile ranks are automatically computed.
3. **Automated SMS Scorecard**: Parents receive an instant breakdown:
   \`\`\`
   DocentBase: Shakil scored 84.75/100 (Physics Model Test 04). Batch Rank: 7/140. Highest: 96.00. Merit: Top 5%.
   \`\`\`
    `,
  },
];
