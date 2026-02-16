import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Hero = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-slate-800 text-center">
        {currentUser ? (
          <>
            Hello <span className="text-indigo-600">{currentUser.username}</span> 👋😊🔥
          </>
        ) : (
          <>Welcome to TravelGo! Please log in 😊</>
        )}
      </h1>
    </div>
  );
};

export default Hero;
