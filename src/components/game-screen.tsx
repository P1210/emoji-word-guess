import React from 'react';
import { Button, Spinner, Progress, Badge } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useGame } from './game-provider';
import { StartScreen } from './start-screen';
import { PuzzleScreen } from './puzzle-screen';
import { motion } from 'framer-motion';
import { Confetti } from './confetti';
import { EnhancedConfettiEffect } from './enhanced-confetti-effect';

export const GameScreen: React.FC = () => {
  const { 
    gameStarted, 
    isLoading,
    currentPuzzleIndex,
    totalPuzzles,
    score,
    gameMode,
    timeRemaining,
    showConfetti,
    highScores
  } = useGame();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, repeatType: "reverse" }
          }}
          className="text-6xl mb-6"
        >
          🎮
        </motion.div>
        <Spinner size="lg" color="primary" />
        <p className="mt-4 text-foreground-500">Loading game...</p>
      </div>
    );
  }

  if (!gameStarted) {
    return <StartScreen />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-6"
    >
      {showConfetti && (
        <>
          <Confetti />
          <EnhancedConfettiEffect />
        </>
      )}
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ scale: score > 0 ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-warning/20 p-1.5 rounded-full shadow-md">
              <Icon icon="lucide:zap" className="text-warning" />
            </div>
          </motion.div>
          <span className="font-medium">{score} points</span>
          {score > 0 && score >= highScores[gameMode] && (
            <Badge color="success" variant="flat" size="sm" className="animate-pulse">High Score!</Badge>
          )}
        </div>
        
        <div className="flex items-center gap-3">
          {gameMode === 'timed' && (
            <motion.div 
              className={`flex items-center gap-1 ${timeRemaining <= 10 ? 'text-danger' : ''}`}
              animate={timeRemaining <= 10 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5, repeat: timeRemaining <= 10 ? Infinity : 0 }}
            >
              <div className={`bg-${timeRemaining <= 10 ? 'danger' : 'primary'}/20 p-1 rounded-full shadow-md`}>
                <Icon icon="lucide:timer" className={timeRemaining <= 10 ? 'text-danger' : 'text-primary'} />
              </div>
              <span className="font-medium">{timeRemaining}s</span>
            </motion.div>
          )}
          <div className="text-foreground-500 text-small bg-content2/50 px-2 py-1 rounded-md shadow-sm">
            Puzzle {currentPuzzleIndex + 1} of {totalPuzzles}
          </div>
        </div>
      </div>

      <Progress 
        value={(currentPuzzleIndex / totalPuzzles) * 100} 
        color="primary"
        size="sm"
        className="mb-2"
        classNames={{
          track: "bg-content2/50",
          indicator: "bg-gradient-to-r from-primary to-secondary glow"
        }}
      />

      <PuzzleScreen />
    </motion.div>
  );
};