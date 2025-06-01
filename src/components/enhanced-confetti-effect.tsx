import React from 'react';
import { motion } from 'framer-motion';

interface SparkleProps {
  size: number;
  color: string;
  style: React.CSSProperties;
}

const Sparkle: React.FC<SparkleProps> = ({ size, color, style }) => {
  return (
    <motion.div
      className="sparkle"
      style={{
        ...style,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0) 70%)`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0]
      }}
      transition={{ 
        duration: Math.random() * 1 + 0.5,
        repeat: 1,
        repeatType: "reverse"
      }}
    />
  );
};

export const EnhancedConfettiEffect: React.FC = () => {
  const [sparkles, setSparkles] = React.useState<React.ReactNode[]>([]);
  
  React.useEffect(() => {
    // Create sparkles
    const newSparkles = [];
    const colors = [
      'rgba(255, 215, 0, 0.8)',  // Gold
      'rgba(255, 255, 255, 0.8)', // White
      'rgba(255, 105, 180, 0.8)', // Pink
      'rgba(135, 206, 235, 0.8)', // Sky Blue
      'rgba(50, 205, 50, 0.8)',   // Lime Green
    ];
    
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 15 + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
      };
      
      newSparkles.push(
        <Sparkle key={i} size={size} color={color} style={style} />
      );
    }
    
    setSparkles(newSparkles);
    
    // Cleanup
    return () => {
      setSparkles([]);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {sparkles}
    </div>
  );
};