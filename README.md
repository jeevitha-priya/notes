**Full Stack Notes Application**

The **Notes App** is a full-stack web application designed to help users efficiently create, manage, and organize their personal notes in one place. It provides a clean and intuitive interface where users can quickly add ideas, edit existing notes, and delete unwanted ones. The application is built with a focus on simplicity, speed, and usability, making it suitable for daily productivity and task management.


📌**Project Description**

In today’s fast-paced digital world, managing information effectively is essential. The Notes App solves this by providing a lightweight yet powerful platform to store personal notes securely and access them anytime.

This application follows the **CRUD (Create, Read, Update, Delete)** operations concept, allowing users to fully manage their notes. It is designed using a **modern full-stack architecture**, separating frontend and backend for better scalability and maintainability.

The frontend ensures a smooth user experience with responsive design, while the backend handles data storage, API requests, and database operations efficiently. The system can also be extended with authentication, cloud storage, and advanced search features.


🚀** Key Features**

- 📝 Create new notes instantly
- 📚 View all saved notes in a structured layout
- ✏️ Edit existing notes anytime
- ❌ Delete unwanted notes easily
- 🔍 Simple and clean user interface
- 📱 Responsive design for mobile and desktop
- ⚡ Fast performance with optimized API calls

CRUD Operations: Create, Read, Update, and Delete notes.

Search: Filter notes by title in real-time.

Dynamic UI: Responsive card-based design with professional styling.

Persistent Storage: Data is stored in MongoDB Atlas (Cloud).

Environment Config: Deployment-ready setup using .env files.

🛠️** Tech Stack**

*Frontend:

Framework: React.js 

HTTP Client: Axios

Styling: CSS3

*Backend:

Runtime: Node.js

Framework: Express.js

Database: MongoDB with Mongoose

Middleware: CORS, Dotenv

⚙️** Setup Instructions**

Prerequisites
Node.js installed

MongoDB Atlas Account (or local MongoDB installed)

1. Clone the repository
Bash
git clone <your-repo-url>
cd notes-app

3. Backend Setup
Navigate to the backend folder:
Bash
cd backend
Install dependencies:
Bash
npm install

🔐**Environment Variables**

Code snippet:

PORT=5000

MONGO_URI=mongodb://jeevithapriyadbio210_db_user:notes@ac-efgcrtn-shard-00-00.fa8o48r.mongodb.net:27017,ac-efgcrtn-shard-00-01.fa8o48r.mongodb.net:27017,ac-efgcrtn-shard-00-02.fa8o48r.mongodb.net:27017/?ssl=true&replicaSet=atlas-v0id4z-shard-0&authSource=admin&appName=Cluster0

CLIENT_URL=http://localhost:3000

Start the server: Mongodb Connected.

Sample Referance (data stores in DB):
<img width="1325" height="662" alt="image" src="https://github.com/user-attachments/assets/d13edd88-b676-43c2-8c47-a7c41ac1e2b1" />



3. Frontend Setup:

Navigate to the frontend folder:

cd ../frontend
Install dependencies:

npm install

Create an .env file inside frontend/ and add:

**Code snippet**

REACT_APP_API_URL=http://localhost:5000/api/notes

Start the React app:

npm start

🚀** How to Use**

Ensure your backend is running on port 5000.

Ensure your frontend is running on port 3000.

Open your browser and visit(Output) http://localhost:3000.

Enter a title and body to add a new note.

Use the search bar to find specific notes by title.

Use the "Edit" and "Delete" buttons to manage your notes.

📂 Project Structure
Plaintext
notes-app/
├── backend/
│   ├── config/ # Database connection
│   ├── controllers/  # API logic
│   ├── models/       # MongoDB schema
│   ├── routes/       # API endpoints
│   └── server.js     # Entry point
└── frontend/
    ├── src/
    │   ├── components/ # React components
    │   ├── api.js      # Axios instance
    │   └── App.js      # Main App logic
    └── package.json

🌟**Future Enhancements**

🔑 User authentication (Login & Signup system)

☁️ Cloud-based note storage

🔎 Advanced search and filtering system

🏷️ Tags and categories for notes

📲 Progressive Web App (PWA) support

🌙 Dark mode UI support

🤝 Contribution Guide


THANK YOU
