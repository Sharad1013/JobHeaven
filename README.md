# JobHeaven

**Your Career Partner - Where Opportunities and Talent Align!**

JobHeaven is a job portal web application designed to connect recruiters and job seekers efficiently. Users can register as either a student or a recruiter, and the platform provides various features to streamline job search, application, and management processes.

## Features

### For Students
- **Apply for Jobs**: Students can browse and apply for available jobs based on role and location.
- **Profile Management**: Update skills, upload resumes, and track job application statuses directly from the profile page.
- **Application Tracking**: Students can see the list of jobs they've applied for and check the status.
- **Filtered Job Search**: Filter and browse jobs based on specific criteria like role and location.
- **Application Restrictions**: A user cannot apply for the same job multiple times.

### For Admins
- **Company Management**: View, add, and edit registered companies.
- **Job Management**: Create new job listings, view all applicants, and update the status of applications (accept/reject).
- **Applicant Management**: Admins have the ability to view and manage applications submitted by students.

## Technologies Used

- **Frontend**: React, Shadcn UI, Tailwind CSS, Redux Toolkit, React Router DOM, Framer Motion
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Authentication**: JWT (JSON Web Tokens) and bcrypt for secure user authentication
- **File Uploads**: Multer for handling file uploads and Cloudinary for storing resumes
- **API Handling**: Axios for making API calls

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/jobheaven.git
   ```

2. Navigate to the project directory:
  ```bash
  cd jobheaven
  ```

3. Install dependencies for both client and server:
   ```bash
   npm install
   cd frontend or backend
   npm install
   ```
4. Set up environment variables:
   Create a .env file in the root and add your MongoDB URI, Cloudinary credentials, and JWT secret.

5. Start the development server:
   For the backend:
   ```bash
   npm run dev
  For the frontend:
  ```bash
  cd frontend
  npm run dev
  ```

## Contact
For any inquiries or feedback, please reach out at [sharadsinha8789@gmail.com].


