Book Review API
A RESTful API built with Node.js, Express, MongoDB, and JWT for a basic book review system. Users can sign up, log in, post books, and leave reviews.

🚀 Features
JWT-based authentication

CRUD operations for books and reviews

Pagination and filtering support

Search books by title or author

One review per user per book

🏗️ Tech Stack
Node.js + Express

MongoDB + Mongoose

JWT for authentication

dotenv for environment config

🔧 Project Setup Instructions
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/Goutham-H-A/book-review-api.git
cd book-review-api
2. Install dependencies
bash
Copy
Edit
npm install
3. Create .env file
env
Copy
Edit
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bookreviewdb
JWT_SECRET=your_jwt_secret_key
Replace the MongoDB URI and secret key as needed.

4. Run the server
bash
Copy
Edit
npm start
Server will run at: http://localhost:5000

📬 API Endpoints
🔐 Auth
Register
bash
Copy
Edit
POST /auth/signup
Body:

json
Copy
Edit
{
  "username": "john_doe",
  "password": "password123"
}
Login
bash
Copy
Edit
POST /auth/login
Body:

json
Copy
Edit
{
  "username": "john_doe",
  "password": "password123"
}
Returns:

json
Copy
Edit
{
  "token": "your_jwt_token"
}
📚 Books
Add Book (Auth required)
bash
Copy
Edit
POST /books
Headers:

makefile
Copy
Edit
Authorization: Bearer <token>
Body:

json
Copy
Edit
{
  "title": "1984",
  "author": "George Orwell",
  "genre": "Dystopia",
  "description": "A dystopian social science fiction novel."
}
Get All Books (Pagination + Filters)
bash
Copy
Edit
GET /books?page=1&limit=10&author=George Orwell&genre=Dystopia
Get Book by ID
bash
Copy
Edit
GET /books/:id
✍️ Reviews
Submit Review (One per user/book)
bash
Copy
Edit
POST /books/:id/reviews
Body:

json
Copy
Edit
{
  "rating": 5,
  "comment": "A timeless masterpiece."
}
Update Review
bash
Copy
Edit
PUT /reviews/:id
Body:

json
Copy
Edit
{
  "rating": 4,
  "comment": "Edited comment"
}
Delete Review
bash
Copy
Edit
DELETE /reviews/:id
🔍 Search
Search Books by Title or Author
bash
Copy
Edit
GET /books/search?q=orwell
📐 Database Schema
🧑 User
js
Copy
Edit
{
  username: String,
  password: String (hashed)
}
📘 Book
js
Copy
Edit
{
  title: String,
  author: String,
  genre: String,
  description: String,
  createdBy: ObjectId (User)
}
✍️ Review
js
Copy
Edit
{
  book: ObjectId (Book),
  user: ObjectId (User),
  rating: Number (1-5),
  comment: String
}
💡 Design Decisions & Assumptions
One user can only leave one review per book.

Ratings are on a 1 to 5 scale.

Users must be authenticated to add books or reviews.

Reviews are automatically tied to the authenticated user.

JWT is stored in the Authorization header as Bearer <token>.

🧪 Testing Tools
You can test endpoints using:

Postman

curl via command line

