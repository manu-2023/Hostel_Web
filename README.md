# 🍽️ Hostel Food Management System (MERN)

This project is a **MERN stack** web application for managing hostel food services. It allows students to book meals, and the warden and kitchen department to track attendance.

## 👥 User Roles & Features

### **1️⃣ Admin**
- Adds **Students, Wardens, and Kitchen Staff** to the system.
- Generates **login credentials** and sends them via **email**.

### **2️⃣ Student**
- Logs in using credentials received via email.
- Books meals for the **current week**.
- Cancels meals if they do not wish to eat.

### **3️⃣ Warden**
- Views **total number of students** who have booked meals for the next day.

### **4️⃣ Kitchen Department**
- Views **total number of students** who will eat the next day.
- Prepares food accordingly.

## 🛠️ Tech Stack
- **Frontend**: React.js  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Email Service**: Nodemailer (for sending login credentials)

## 🔑 Environment Variables (`.env`)
A `.env` file has already been created in the **backend** folder. Just replace the placeholder values with your own credentials:

```env
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
SMTP_USERNAME=your_email@example.com  # Replace with same email
SMTP_PASSWORD=your_email_password  # Replace with same password
```
## 🚀 Setup Instructions

### Read MAIN.md 

   
### **1️⃣ Clone the Repository**
   https://github.com/manu-2023/Hostel_Web
   
### 2️⃣ Start the Frontend
```sh
cd my-app
npm install
npm start
```
### 3️⃣ Start the Backend
Open a new terminal:
```sh
cd backend
node server.js
```
### 4️⃣ Pre-requisites
Ensure the following are installed:
- Node.js.
- MongoDB.
- React.

### 📖 Please Read MAIN.md

 -  For detailed information on setup, usage, and additional notes, please read the MAIN.md file.


❓ Any Problem?<br>
📧 Contact: mcmanu368@gmail.com
