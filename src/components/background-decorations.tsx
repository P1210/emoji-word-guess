import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundDecorations: React.FC = () => {
  // Create decorative emojis for the background
  const decorations = [
    { emoji: '🎮', x: '5%', y: '10%', delay: 0 },
    { emoji: '🎯', x: '90%', y: '15%', delay: 0.5 },
    { emoji: '🎪', x: '80%', y: '80%', delay: 1 },
    { emoji: '🎨', x: '10%', y: '85%', delay: 1.5 },
    { emoji: '🎭', x: '50%', y: '5%', delay: 2 },
    { emoji: '🎲', x: '15%', y: '50%', delay: 2.5 },
    { emoji: '🎪', x: '85%', y: '45%', delay: 3 },
    { emoji: '🎯', x: '40%', y: '90%', delay: 3.5 },
  ];

  // Add floating orbs for enhanced background
  const orbs = [
    { size: 300, x: '10%', y: '20%', color: 'primary', delay: 0 },
    { size: 200, x: '85%', y: '15%', color: 'secondary', delay: 1 },
    { size: 250, x: '75%', y: '80%', color: 'success', delay: 2 },
    { size: 180, x: '15%', y: '70%', color: 'warning', delay: 3 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating orbs */}
      {orbs.map((orb, index) => (
        <motion.div
          key={`orb-${index}`}
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, rgba(var(--heroui-${orb.color}-rgb), 0.6) 0%, rgba(var(--heroui-${orb.color}-rgb), 0) 70%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.2,
            scale: [1, 1.1, 1],
            x: [0, 10, 0],
            y: [0, -15, 0],
          }}
          transition={{ 
            opacity: { duration: 2 },
            scale: { repeat: Infinity, duration: 8 + Math.random() * 4, delay: orb.delay },
            x: { repeat: Infinity, duration: 10 + Math.random() * 5, delay: orb.delay },
            y: { repeat: Infinity, duration: 12 + Math.random() * 6, delay: orb.delay }
          }}
        />
      ))}

      {/* Decorative emojis */}
      {decorations.map((item, index) => (
        <motion.div
          key={`emoji-${index}`}
          className="decoration-emoji absolute"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.15,
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            opacity: { duration: 1 },
            y: { repeat: Infinity, duration: 4 + Math.random() * 2, delay: item.delay },
            rotate: { repeat: Infinity, duration: 6 + Math.random() * 3, delay: item.delay }
          }}
          style={{
            left: item.x,
            top: item.y,
          }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </div>
  );
};