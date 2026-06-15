# 💬 Linkd

<div align="center">

### Real-Time Chat Application built with the MERN Stack

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)]()
[![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)]()
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)]()
[![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge\&logo=socketdotio\&logoColor=white)]()
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge\&logo=jsonwebtokens\&logoColor=white)]()

<br>

🚀 **Live Demo:** https://linkd-ochre.vercel.app

</div>

---

## ✨ Features

✅ Secure Authentication using JWT & HTTP-only Cookies

✅ Real-Time Messaging with Socket.IO

✅ Online / Offline Presence Tracking

✅ Profile Picture Uploads via Cloudinary

✅ Cross-Device Communication

✅ Persistent Login Sessions

✅ Zustand State Management

✅ Responsive Modern UI

✅ Protected Routes

✅ Arcjet Security Integration


---

## 🏗️ Architecture

```text
React + Vite
      │
      ▼
 Axios + Zustand
      │
      ▼
Express + Node.js
      │
 ┌────┴────┐
 ▼         ▼
MongoDB   Socket.IO
 Atlas    Real-Time Layer
      │
      ▼
 Cloudinary
```

## 🛠 Tech Stack

### Frontend

| Technology       | Purpose                 |
| ---------------- | ----------------------- |
| React            | UI Development          |
| Vite             | Build Tool              |
| Zustand          | State Management        |
| Tailwind CSS     | Styling                 |
| DaisyUI          | UI Components           |
| Axios            | API Calls               |
| Socket.IO Client | Real-Time Communication |

### Backend

| Technology    | Purpose             |
| ------------- | ------------------- |
| Node.js       | Runtime             |
| Express.js    | Backend Framework   |
| MongoDB Atlas | Database            |
| Mongoose      | ODM                 |
| Socket.IO     | Real-Time Messaging |
| JWT           | Authentication      |
| bcryptjs      | Password Hashing    |
| Cookie Parser | Cookie Management   |

### Cloud Services

| Service    | Usage            |
| ---------- | ---------------- |
| Cloudinary | Image Storage    |
| Resend     | Email Service    |
| Render     | Backend Hosting  |
| Vercel     | Frontend Hosting |
| Arcjet     | Security         |

---

## 🚀 Deployment

### Frontend

Hosted on **Vercel**

```bash
npm run build
```

### Backend

Hosted on **Render**

```bash
npm start
```

---

## ⚙️ Environment Variables

### Backend

```env
PORT=
MONGODB_URI=
JWT_SECRET=
CLIENT_URL=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RESEND_API_KEY=

ARCJET_KEY=
```

### Frontend

```env
VITE_API_URL=
```

---

## 📂 Project Structure

```bash
Linkd
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── store
│   │   └── lib
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── models
│   ├── lib
│   └── emails
│
└── README.md
```

---

## 🎯 Future Improvements

* 📌 Group Chats
* 📌 Message Reactions
* 📌 Read Receipts
* 📌 Voice Messages
* 📌 Video Calling
* 📌 Push Notifications

---

## 👨‍💻 Author

**Shashwat Chauhan**

Engineering Student

GitHub: https://github.com/akashashwatgit

---

<div align="center">

⭐ If you like this project, consider starring the repository!

</div>
