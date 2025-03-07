## 📦 Install Dependencies

### 1️⃣ Install all dependencies  
Run the following command to install all dependencies listed in `package.json`:  

```sh
npm install
```
### 2️⃣ Install dependencies manually
```sh
npm install @testing-library/jest-dom @testing-library/react @testing-library/user-event axios bootstrap chart.js cors qrcode.react react react-chartjs-2 react-dom react-icons react-qr react-router-dom react-scripts react-toastify toastify web-vitals
```
## 🛠 Database Setup (MongoDB)
### 1️⃣ Start MongoDB Server
Ensure MongoDB is running on your system before proceeding.
```sh
cd backend
node server.js
```

### 2️⃣ Open MongoDB Compass
- Connect to mongodb://localhost:27017/
- Open the Hostel database
- Navigate to the admins collection
  
### 3️⃣ Insert Admin User(mandate)
Open MongoDB Shell and run the following command to create an admin user:

```sh
use hostel
db.admins.insertOne({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "password123"
})
