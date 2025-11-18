# 🧑‍💼 Job Portal Web Application

A robust, scalable, and production-ready Job Portal Web Application developed using React.js, Node.js, Express.js, and MongoDB Atlas.
This platform provides seamless interaction between Job Seekers, Recruiters with secure role-based access.

# 🏗️ System Overview

The Job Portal consists of two distinct roles, each with dedicated dashboards and capabilities:

## 👨‍💻 1. User (Job Seeker) Panel

Users can discover relevant jobs and manage their career profiles easily.

### User Features

➤ User Registration & Login

➤ Manage User Profile

* Resume upload

* Skills, Experience, Education

➤ Browse Available Jobs

* Filter by Category, Experience, Location

➤ Apply for Jobs

* Submit resume & personal note

➤ View Application Status

* Applied

* Under Review

* Accepted/Rejected

## 🧑‍💼 2. Recruiter (Job Provider) Panel

Recruiters can manage job listings and handle applications seamlessly.

### Recruiter Features

➤ Recruiter Login/Register

➤ View & Edit Recruiter Profile

➤ Post New Job

* Title

* Description

* Requirements

* Salary

* Location

* Job Type

➤ Manage Posted Jobs

* Edit job

* Delete job

* Pause/Activate job

➤ View Applications Per Job

* Applicant Profile

* Resume

* Application status update

➤ Accept/Reject Applicant

# ⚙️ 🛠️ Tech Stack Breakdown
## Frontend

* React.js

* React Router

* HTML5, CSS3, JavaScript (ES6+)

* Axios (for API calls)

* Tailwind Css

* Clerk

## Backend

* Node.js

* Express.js

* JWT Authentication

* mongoose

* Middleware-based role authorization

## Database

* MongoDB Atlas

## Additional

* Bcrypt.js (Password Hashing)

* Multer or Cloudinary (Resume/Profile Image Upload)

* CORS, Rate Limit (Security)

* Nodemailer

* Sentry

# 📁 Project Structure
job-portal/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── user/
│   │   ├── register/
│   │   ├── login/
│   │   ├── profile/
│   │   └── applications/
│   │
│   ├── recruiter/
│   │   ├── login/
│   │   ├── profile/
│   │   ├── add-job/
│   │   ├── manage-jobs/
│   │   └── applications/
│   │
│   ├── shared-components/
│   └── App.js
│
└── README.md

# 🔒 Authentication & Authorization

## This Job Portal uses a full RBAC (Role-Based Access Control) system:
| Role      | Access Level                 |
| --------- | ---------------------------- |
| Recruiter | Job Management, Applications |
| User      | Profile, Job Apply, Tracking |

## Authentication handled using:

* JWT Tokens

* Password Hashing

## Middleware ensures:

* /recruiter/* only accessible to Recruiter

* /user/* only accessible to User

# 🎯 Real-Life Use Cases
✔ Students searching internships

✔ Companies posting job openings

✔ Job seekers applying to multiple companies

✔ Admin managing platform activities

✔ Recruiters reviewing candidate profiles
