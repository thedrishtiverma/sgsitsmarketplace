// MOCK DATA ONLY — placeholder content for UI development.
// Replace each export with a Lovable Cloud query when the backend lands.
// Nothing here represents a real uploaded file.

import type {
  Branch,
  Resource,
  ResourceType,
  Semester,
  Subject,
  UserProfile,
} from "./types";

export const BRANCHES: { code: Branch; name: string; resourceCount: number }[] = [
  { code: "CSE", name: "Computer Science & Engineering", resourceCount: 128 },
  { code: "IT", name: "Information Technology", resourceCount: 96 },
  { code: "ECE", name: "Electronics & Telecommunication", resourceCount: 74 },
  { code: "EE", name: "Electrical Engineering", resourceCount: 58 },
  { code: "ME", name: "Mechanical Engineering", resourceCount: 61 },
  { code: "CE", name: "Civil Engineering", resourceCount: 48 },
  { code: "BME", name: "Biomedical Engineering", resourceCount: 22 },
  { code: "IPE", name: "Industrial & Production Engineering", resourceCount: 19 },
];

export const SEMESTERS: Semester[] = [1, 2, 3, 4, 5, 6, 7, 8];

export const RESOURCE_TYPES: ResourceType[] = [
  "Notes",
  "Handwritten Notes",
  "PYQ",
  "Important Questions",
  "Lab Manual",
  "Assignment",
  "Study Guide",
  "Other",
];

export const SORT_OPTIONS = [
  "Most recent",
  "Most downloaded",
  "Highest rated",
  "A–Z",
] as const;

export type SortOption = (typeof SORT_OPTIONS)[number];

export const SUBJECTS: Subject[] = [
  { id: "daa", name: "Design and Analysis of Algorithms", code: "CS 6001", branch: "CSE", semester: 6, resourceCount: 42, avgRating: 4.8 },
  { id: "se", name: "Software Engineering", code: "CS 5002", branch: "CSE", semester: 5, resourceCount: 38, avgRating: 4.5 },
  { id: "ddc", name: "Digital & Data Communication", code: "EC 4003", branch: "ECE", semester: 4, resourceCount: 31, avgRating: 4.6 },
  { id: "ds", name: "Discrete Structures", code: "CS 3002", branch: "CSE", semester: 3, resourceCount: 29, avgRating: 4.7 },
  { id: "econ", name: "Economics for Engineering", code: "HU 3001", branch: "ME", semester: 3, resourceCount: 24, avgRating: 4.3 },
  { id: "dsa", name: "Data Structures", code: "IT 4001", branch: "IT", semester: 4, resourceCount: 35, avgRating: 4.9 },
  { id: "os", name: "Operating Systems", code: "CS 5003", branch: "CSE", semester: 5, resourceCount: 27, avgRating: 4.6 },
  { id: "tos", name: "Theory of Computation", code: "CS 6002", branch: "CSE", semester: 6, resourceCount: 18, avgRating: 4.4 },
  { id: "ntm", name: "Network Theory & Machines", code: "EE 4002", branch: "EE", semester: 4, resourceCount: 16, avgRating: 4.2 },
  { id: "tom", name: "Theory of Machines", code: "ME 4004", branch: "ME", semester: 4, resourceCount: 21, avgRating: 4.4 },
];

export const CATEGORIES: { type: ResourceType; blurb: string; count: number }[] = [
  { type: "Notes", blurb: "Typed and printed lecture notes", count: 214 },
  { type: "Handwritten Notes", blurb: "Scanned class notebooks", count: 168 },
  { type: "PYQ", blurb: "Previous year question papers", count: 142 },
  { type: "Important Questions", blurb: "Exam-focused question banks", count: 88 },
  { type: "Lab Manual", blurb: "Experiments, code and readings", count: 76 },
  { type: "Study Guide", blurb: "Revision guides and summaries", count: 54 },
];

export const CURRENT_USER: UserProfile = {
  id: "u-1",
  name: "Aarav Raghav",
  initials: "AR",
  branch: "CSE",
  semester: 6,
  email: "aarav.raghav@sgsits.ac.in",
  joinedOn: "2025-08-14",
  totalDownloads: 2148,
  uploadsCount: 6,
  avgRating: 4.7,
};

const u = (
  id: string,
  name: string,
  initials: string,
  branch: Branch,
  semester: Semester,
) => ({ id, name, initials, branch, semester });

export const RESOURCES: Resource[] = [
  {
    id: "r-1",
    title: "Design & Analysis of Algorithms — Solved PYQs",
    description:
      "Twelve years of SGSITS CSE end-semester papers, solved step by step with complexity analysis for every question. Includes a topic-wise frequency table so you know what actually repeats.",
    subject: "Design and Analysis of Algorithms",
    branch: "CSE",
    semester: 6,
    type: "PYQ",
    uploader: u("u-2", "Rahul Khanna", "RK", "CSE", 6),
    uploadedOn: "2026-08-21",
    rating: 4.8,
    ratingCount: 96,
    downloads: 486,
    pages: 118,
    fileSize: "14.2 MB",
    tags: ["greedy", "dynamic programming", "np-complete", "end sem"],
  },
  {
    id: "r-2",
    title: "Digital & Data Communication Notes",
    description:
      "Full-semester typed notes covering modulation schemes, multiplexing, error control coding and channel capacity, with the derivations written out in full.",
    subject: "Digital & Data Communication",
    branch: "ECE",
    semester: 4,
    type: "Notes",
    uploader: u("u-3", "Priya Agarwal", "PA", "ECE", 4),
    uploadedOn: "2026-08-30",
    rating: 4.7,
    ratingCount: 64,
    downloads: 312,
    pages: 86,
    fileSize: "9.8 MB",
    tags: ["modulation", "multiplexing", "error control"],
  },
  {
    id: "r-3",
    title: "Discrete Structures — Handwritten Notes",
    description:
      "Neat handwritten notes from class: Boolean algebra, propositional logic, relations, lattices and graph theory with plenty of solved examples.",
    subject: "Discrete Structures",
    branch: "IT",
    semester: 3,
    type: "Handwritten Notes",
    uploader: u("u-4", "Vikram Singh", "VS", "IT", 3),
    uploadedOn: "2026-09-01",
    rating: 4.9,
    ratingCount: 121,
    downloads: 528,
    pages: 64,
    fileSize: "22.4 MB",
    tags: ["logic", "graphs", "lattices"],
  },
  {
    id: "r-4",
    title: "Software Engineering Lab Manual",
    description:
      "Lab file with all ten experiments: UML diagrams, SDLC documentation templates, test plans and a sample mini-project write-up.",
    subject: "Software Engineering",
    branch: "CSE",
    semester: 5,
    type: "Lab Manual",
    uploader: u("u-5", "Ananya Nair", "AN", "CSE", 5),
    uploadedOn: "2026-08-12",
    rating: 4.6,
    ratingCount: 41,
    downloads: 194,
    pages: 52,
    fileSize: "7.1 MB",
    tags: ["uml", "sdlc", "testing"],
  },
  {
    id: "r-5",
    title: "Economics for Engineering — PYQ Set",
    description:
      "Previous year papers with model answers for cost analysis, demand forecasting and market structures. Useful for the short-answer section.",
    subject: "Economics for Engineering",
    branch: "ME",
    semester: 3,
    type: "PYQ",
    uploader: u("u-6", "Jyoti Deshmukh", "JD", "ME", 3),
    uploadedOn: "2026-07-28",
    rating: 4.5,
    ratingCount: 33,
    downloads: 271,
    pages: 40,
    fileSize: "5.4 MB",
    tags: ["cost", "demand", "market"],
  },
  {
    id: "r-6",
    title: "Important Questions — DAA",
    description:
      "Forty questions that cover almost every unit weight in the DAA paper, arranged by unit with hints and expected marks.",
    subject: "Design and Analysis of Algorithms",
    branch: "CSE",
    semester: 6,
    type: "Important Questions",
    uploader: u("u-7", "Sneha Nair", "SN", "CSE", 6),
    uploadedOn: "2026-09-03",
    rating: 4.8,
    ratingCount: 88,
    downloads: 640,
    pages: 18,
    fileSize: "2.2 MB",
    tags: ["exam", "revision", "unit-wise"],
  },
  {
    id: "r-7",
    title: "Data Structures — Complete Notes",
    description:
      "Trees, hashing, heaps and dynamic programming explained with C implementations and dry runs for every algorithm.",
    subject: "Data Structures",
    branch: "IT",
    semester: 4,
    type: "Notes",
    uploader: u("u-8", "Aditya Kulkarni", "AK", "IT", 4),
    uploadedOn: "2026-08-25",
    rating: 4.9,
    ratingCount: 143,
    downloads: 792,
    pages: 132,
    fileSize: "16.9 MB",
    tags: ["trees", "hashing", "dp"],
  },
  {
    id: "r-8",
    title: "Operating Systems — Unit 3 & 4 Notes",
    description:
      "Memory management, paging, virtual memory and file systems, condensed into a revision-friendly format with diagrams.",
    subject: "Operating Systems",
    branch: "CSE",
    semester: 5,
    type: "Study Guide",
    uploader: u("u-9", "Kunal Verma", "KV", "CSE", 5),
    uploadedOn: "2026-08-08",
    rating: 4.4,
    ratingCount: 29,
    downloads: 221,
    pages: 44,
    fileSize: "6.3 MB",
    tags: ["paging", "virtual memory", "file systems"],
  },
  {
    id: "r-9",
    title: "Theory of Computation — Assignment Solutions",
    description:
      "Worked solutions for all four assignments: finite automata, regular expressions, pushdown automata and Turing machines.",
    subject: "Theory of Computation",
    branch: "CSE",
    semester: 6,
    type: "Assignment",
    uploader: u("u-10", "Meera Joshi", "MJ", "CSE", 6),
    uploadedOn: "2026-07-19",
    rating: 4.3,
    ratingCount: 22,
    downloads: 158,
    pages: 36,
    fileSize: "4.8 MB",
    tags: ["automata", "turing machines"],
  },
  {
    id: "r-10",
    title: "Network Theory & Machines — Handwritten Notes",
    description:
      "Complete handwritten set for network theorems, transient analysis and DC machines, copied from the topper's notebook with permission.",
    subject: "Network Theory & Machines",
    branch: "EE",
    semester: 4,
    type: "Handwritten Notes",
    uploader: u("u-11", "Harsh Patel", "HP", "EE", 4),
    uploadedOn: "2026-08-17",
    rating: 4.6,
    ratingCount: 37,
    downloads: 189,
    pages: 71,
    fileSize: "25.1 MB",
    tags: ["theorems", "transients", "dc machines"],
  },
  {
    id: "r-11",
    title: "Theory of Machines — Formula Sheet",
    description:
      "Two-page formula sheet for kinematics of mechanisms, cams, gears and governors. Print it and keep it in your file.",
    subject: "Theory of Machines",
    branch: "ME",
    semester: 4,
    type: "Study Guide",
    uploader: u("u-12", "Ishaan Bhatt", "IB", "ME", 4),
    uploadedOn: "2026-09-02",
    rating: 4.2,
    ratingCount: 18,
    downloads: 143,
    pages: 2,
    fileSize: "0.9 MB",
    tags: ["formulas", "gears", "cams"],
  },
  {
    id: "r-12",
    title: "Software Engineering — Mid Sem PYQ Bundle",
    description:
      "Mid-semester papers from the last six years with a short answer key for the repeated questions.",
    subject: "Software Engineering",
    branch: "CSE",
    semester: 5,
    type: "PYQ",
    uploader: u("u-13", "Tanvi Shukla", "TS", "CSE", 5),
    uploadedOn: "2026-06-30",
    rating: 4.5,
    ratingCount: 45,
    downloads: 305,
    pages: 28,
    fileSize: "3.7 MB",
    tags: ["mid sem", "answer key"],
  },
];

export const getResourceById = (id: string) =>
  RESOURCES.find((r) => r.id === id);

export const getRelatedResources = (resource: Resource, limit = 3) =>
  RESOURCES.filter(
    (r) =>
      r.id !== resource.id &&
      (r.subject === resource.subject || r.branch === resource.branch),
  ).slice(0, limit);

export const RECENTLY_ADDED = [...RESOURCES]
  .sort((a, b) => b.uploadedOn.localeCompare(a.uploadedOn))
  .slice(0, 6);

export const MOST_DOWNLOADED = [...RESOURCES]
  .sort((a, b) => b.downloads - a.downloads)
  .slice(0, 3);

export const MY_UPLOADS = RESOURCES.slice(0, 3);
export const SAVED_RESOURCES = [RESOURCES[2], RESOURCES[5], RESOURCES[6]];
