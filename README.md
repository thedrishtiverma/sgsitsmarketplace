# SGSITS Marketplace

Build a modern, production-quality web application called SGSITS Marketplace.

PRODUCT

SGSITS Marketplace is a student-only academic resource marketplace for students of Shri G. S. Institute of Technology & Science (SGSITS), Indore.

(take all info of college from my clg website - https://sgsits.ac.in/)

The initial version focuses on discovering and sharing academic resources such as:

Lecture notes

Handwritten notes

PDF notes

Previous year question papers

Important questions

Lab manuals

Practical resources

Study guides

The long-term vision is to become a broader student marketplace, but V1 should focus ONLY on academic resources.

BRAND POSITIONING

Primary positioning:

"The student marketplace for SGSITS."

Possible homepage headline:

"Your college. Your notes. One place."

The product should feel student-built, trustworthy, modern and useful rather than like a generic education website.

DESIGN DIRECTION

Create a premium, minimal and highly usable interface.

Design principles:

Clean

Spacious

Modern

Academic but not boring

Mobile-first

Strong typography

Excellent visual hierarchy

Minimal unnecessary decoration

Fast and easy navigation

Avoid:

Generic SaaS gradients

Excessive glassmorphism

Huge unnecessary illustrations

Overly rounded UI everywhere

Excessive animations

Stock-photo-heavy layouts

Use subtle motion only where it improves usability.

REQUIRED PAGES

Create the following pages:

Landing / Home

Explore Resources

Resource Details

Upload Resource

Login

Sign Up

User Profile

Saved Resources

My Uploads

Create placeholder navigation and realistic sample data for the initial UI.

HOME PAGE

Create:

Hero section:

"Your college. Your notes. One place."

Supporting text:

"Find notes, PYQs and academic resources shared by SGSITS students."

Primary CTA:

"Explore Notes"

Secondary CTA:

"Upload Notes"

Then create:

Popular Subjects

Recently Added

Most Downloaded

Browse by Branch

Browse by Semester

Resource Categories

EXPLORE PAGE

Create a marketplace-style resource discovery interface.

Include:

Search bar

Branch filter

Semester filter

Subject filter

Resource type filter

Sort options

Resource cards

Pagination or infinite loading placeholder

Each resource card should show:

Resource title

Subject

Branch

Semester

Resource type

Uploader

Rating

Download count

Save/bookmark action

RESOURCE DETAILS

Create a detailed resource page containing:

Title

Description

Subject

Branch

Semester

Resource type

Uploaded by

Upload date

Rating

Download count

Preview area

Download button

Save button

Report button

Related resources

UPLOAD PAGE

Create a clean upload form containing:

Resource title

Description

Branch

Semester

Subject

Resource type

File upload

Optional thumbnail

Tags

Submit button

Supported resource types:

Notes

Handwritten Notes

PYQ

Important Questions

Lab Manual

Assignment

Study Guide

Other

Show upload progress and success/error states.

AUTHENTICATION

Create polished login and signup screens.

Signup fields:

Name

Email

Password

Branch

Semester

Authentication should be designed so that college-only verification can be added later.

Do not implement payment functionality yet.

PROFILE

Create a student profile page showing:

Name

Branch

Semester

Profile picture

Uploaded resources

Saved resources

Total downloads received

Profile statistics

NAVIGATION

Desktop navigation:

Logo / SGSITS Marketplace

Explore

Upload

Saved

Right side:

Search

Profile

Mobile navigation should be optimized for phone screens.

COMPONENTS

Create reusable components for:

ResourceCard

SearchBar

FilterPanel

SubjectCard

CategoryCard

Rating

BookmarkButton

UploadForm

Navbar

Footer

EmptyState

LoadingState

ErrorState

SAMPLE DATA

Use realistic SGSITS-oriented academic sample data.

Include examples such as:

Design and Analysis of Algorithms

Software Engineering

Digital & Data Communication

Discrete Structures

Economics for Engineering

Use realistic branch and semester values.

Do not present sample data as real uploaded resources. Clearly structure the application so these can later be replaced by Supabase data.

RESPONSIVENESS

The application must work beautifully on:

Desktop

Laptop

Tablet

Mobile

Prioritize mobile usability because students will frequently access resources from phones.

IMPORTANT IMPLEMENTATION RULE

For this first build, focus on creating the complete frontend architecture, navigation, reusable components, page structure, responsive design and realistic mock data.

Do NOT add payments yet.

Do NOT add unnecessary AI features yet.

Do NOT over-engineer the backend before the UI structure is stable.

Keep the code clean, modular and easy to connect to Supabase.

After implementing the UI, explain what has been created and identify the next backend steps required to make uploads, authentication, bookmarks, ratings and downloads fully functional.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sgsitsmarketplace.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bfa7bccf-f025-4e3c-94b2-17efd0878b8f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
