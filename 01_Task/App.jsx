import React from "react";
import Card from "./Card";
import "./index.css";

const users = [
  {
    id: 1,
    img: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg",
    name: "Aman Sharma",
    role: "Frontend Developer",
    tech: "Tech Job-Seeker",
    phone: "+91 98760 9876",
    email: "amansharma07@gmail.com",
  },
  {
    id: 2,
    img: "https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    name: "Neha Verma",
    role: "Backend Developer",
    tech: "AI Enthusiast",
    phone: "+91 91234 5678",
    email: "nehaverma@example.com",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQehQovf--u0vmtyRRjJLY10YQoLVhyGh6YPQW2DKXFlxB3Z4ZQC8fxR_nEqgxNanQd16E&usqp=CAU",
    name: "Rohit Singh",
    role: "Full Stack Developer",
    tech: "Blockchain Developer",
    phone: "+91 99887 6655",
    email: "rohitsingh@example.com",
  },
];

const App = () => {
  return (
    <div className="container">
      {users.map((user) => (
        <Card key={user.id} users={user} />
      ))}
    </div>
  );
};

export default App;
