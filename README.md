**Full-Stack Notes Application**

A clean, responsive Full-Stack web application built with the MERN stack (MongoDB, Express, React, Node.js). 
This project allows users to create, read, update, and delete personal notes, featuring a modern, user-friendly interface.

**Key features**
CRUD Operations: Create, Read, Update, and Delete notes.

Search: Filter notes by title in real-time.

Dynamic UI: Responsive card-based design with professional styling.

Persistent Storage: Data is stored in MongoDB Atlas (Cloud).

Environment Config: Deployment-ready setup using .env files.

🛠️ **Tech Stack**

Frontend
Framework: React.js

HTTP Client: Axios

Styling: CSS3

Backend
Runtime: Node.js

Framework: Express.js

Database: MongoDB with Mongoose

Middleware: CORS, Dotenv

⚙️ **Setup Instructions**
Prerequisites
Node.js installed

MongoDB Atlas Account (or local MongoDB installed)

cd notes-app
2. Backend Setup
Navigate to the backend folder:

Bash
cd backend
Install dependencies:

Bash
npm install
Create a .env file inside backend/ and add:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
CLIENT_URL=http://localhost:3000
Start the server:

Bash
npm run dev

3. Frontend Setup
Navigate to the frontend folder:

Bash
cd ../frontend
Install dependencies:

Bash
npm install
Create a .env file inside frontend/ and add:

Code snippet
REACT_APP_API_URL=http://localhost:5000/api
Start the React app:

Bash
npm start

🚀** How to Use**
Ensure your backend is running on port 5000.

Ensure your frontend is running on port 3000.

Open your browser and visit http://localhost:3000.

Enter a title and body to add a new note.

Use the search bar to find specific notes by title.

Use the "Edit" and "Delete" buttons to manage your notes.
