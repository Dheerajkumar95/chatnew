import { useMemo } from "react";

const AuthImagePattern = ({ title, subtitle }) => {
  const totalBubbles = 40;

   
  const bubbles = useMemo(() => {
    return Array.from({ length: totalBubbles }, () => ({
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
      size: `${Math.random() * 20 + 8}px`,  
      delay: `${Math.random() * 2}s`,
      duration: `${Math.random() * 5 + 3}s`,  
    }));
  }, []);

  return (
    <div className="hidden lg:flex flex-col justify-between items-center bg-base-200 p-12 min-h-screen relative overflow-hidden">
       
      {bubbles.map((bubble, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-accent opacity-100 animate-floating shadow-md shadow-accent/40"

          style={{
            top: bubble.top,
            left: bubble.left,
            height: bubble.size,
            width: bubble.size,
            animationDuration: bubble.duration,
            animationDelay: bubble.delay,
          }}
        />
      ))}

      
      <div className="mt-auto text-center z-10 mb-4">
        <h2 className="text-3xl font-bold mb-3 text-base-content">{title}</h2>
        <p className="text-base text-base-content/70">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
