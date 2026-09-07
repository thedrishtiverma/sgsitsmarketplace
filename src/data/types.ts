// Domain types for SGSITS Marketplace.
// These mirror the shape the backend (Lovable Cloud) will return later,
// so swapping mock data for real queries only touches src/data/*.

export type Branch =
  | "CSE"
  | "IT"
  | "ECE"
  | "EE"
  | "ME"
  | "CE"
  | "BME"
  | "IPE";

export type Semester = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type ResourceType =
  | "Notes"
  | "Handwritten Notes"
  | "PYQ"
  | "Important Questions"
  | "Lab Manual"
  | "Assignment"
  | "Study Guide"
  | "Other";

export interface UserProfile {
  id: string;
  name: string;
  initials: string;
  branch: Branch;
  semester: Semester;
  email: string;
  joinedOn: string;
  totalDownloads: number;
  uploadsCount: number;
  avgRating: number;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  subject: string;
  branch: Branch;
  semester: Semester;
  type: ResourceType;
  uploader: Pick<UserProfile, "id" | "name" | "initials" | "branch" | "semester">;
  uploadedOn: string;
  rating: number;
  ratingCount: number;
  downloads: number;
  pages: number;
  fileSize: string;
  tags: string[];
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  branch: Branch;
  semester: Semester;
  resourceCount: number;
  avgRating: number;
}
