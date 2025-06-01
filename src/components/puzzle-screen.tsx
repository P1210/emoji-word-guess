import React from "react";
import { Button, Input, Tooltip, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useGame } from "./game-provider";

export const PuzzleScreen: React.FC = () => {
  const {
    currentPuzzle,
    guess,
    setGuess,
    checkAnswer,
    showHint,
    hintUsed,
    isCorrect,
    nextPuzzle,
    gameMode,
    skipPuzzle,
    restartGame,
    showAnswer,
    answerRevealed,
  } = useGame();

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentPuzzle]);

  if (!currentPuzzle) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isCorrect) {
      checkAnswer();
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Game controls */}
      <div className="flex justify-between items-center">
        <Tooltip content="Restart Game" placement="top">
          <Button
            isIconOnly
            variant="light"
            onPress={restartGame}
            className="action-button"
          >
            <Icon icon="lucide:refresh-cw" className="text-primary" />
          </Button>
        </Tooltip>

        <div className="flex items-center gap-1">
          <div className="text-small text-foreground-500 flex items-center gap-1">
            <Icon
              icon={getCategoryIcon(currentPuzzle.category)}
              className="text-primary"
            />
            <span className="font-medium">Category:</span>{" "}
            {currentPuzzle.category.charAt(0).toUpperCase() +
              currentPuzzle.category.slice(1)}
          </div>
          <div className="text-small text-foreground-500 flex items-center gap-1 ml-4">
            <Icon
              icon={gameMode === "timed" ? "lucide:timer" : "lucide:clock"}
              className="text-primary"
            />
            <span className="font-medium">Mode:</span>{" "}
            {gameMode.charAt(0).toUpperCase() + gameMode.slice(1)}
          </div>
        </div>
      </div>

      <div className="emoji-container p-8 flex justify-center relative">
        <motion.div
          className="flex gap-5 items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {currentPuzzle.emojis.map((emoji, index) => (
            <motion.span
              key={index}
              className="emoji"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.15 }}
              whileHover={{ scale: 1.2, rotate: [-5, 5, 0] }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className="flex flex-col gap-4">
        <AnimatePresence mode="wait">
          {isCorrect ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center gap-2 py-3"
            >
              <motion.div
                className="text-center"
                animate={{
                  scale: [1, 1.2, 1],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: 1,
                  repeatType: "reverse",
                }}
              >
                <div className="text-success text-xl font-medium flex items-center justify-center gap-2">
                  <Icon icon="lucide:check-circle" className="text-2xl" />
                  Correct!
                </div>
                <div className="text-foreground mt-1 font-medium">
                  "{currentPuzzle.answer}"
                </div>
              </motion.div>
            </motion.div>
          ) : answerRevealed ? (
            <motion.div
              key="revealed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center gap-2 py-3"
            >
              <motion.div
                className="text-center"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 0.6,
                  repeat: 1,
                  repeatType: "reverse",
                }}
              >
                <div className="text-danger text-xl font-medium flex items-center justify-center gap-2">
                  <Icon icon="lucide:eye" className="text-2xl" />
                  Answer Revealed
                </div>
                <div className="text-foreground mt-1 font-medium">
                  "{currentPuzzle.answer}"
                </div>

                <Button
                  color="primary"
                  className="mt-4"
                  onPress={skipPuzzle}
                  startContent={<Icon icon="lucide:arrow-right" />}
                >
                  Next Puzzle
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="input"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-4"
            >
              <Input
                ref={inputRef}
                label="Your guess"
                placeholder="Type your answer here..."
                value={guess}
                onValueChange={setGuess}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                isClearable
                classNames={{
                  inputWrapper:
                    "bg-content2/50 backdrop-blur-sm border-primary/20",
                }}
              />

              <div className="flex gap-2">
                <Button
                  color="primary"
                  className="flex-1 action-button"
                  onPress={checkAnswer}
                  startContent={<Icon icon="lucide:check" />}
                  variant="shadow"
                >
                  Check Answer
                </Button>
                <Button
                  variant="flat"
                  isDisabled={hintUsed}
                  onPress={showHint}
                  startContent={<Icon icon="lucide:help-circle" />}
                  className={
                    !hintUsed
                      ? "bg-warning/10 text-warning-600 action-button"
                      : ""
                  }
                >
                  Hint
                </Button>
              </div>

              <Divider className="my-2" />

              <div className="flex justify-between gap-2">
                <Tooltip
                  content="Skip this puzzle (-2 points)"
                  placement="bottom"
                >
                  <Button
                    variant="flat"
                    color="warning"
                    onPress={skipPuzzle}
                    startContent={<Icon icon="lucide:skip-forward" />}
                    className="flex-1 action-button"
                    size="sm"
                  >
                    Skip
                  </Button>
                </Tooltip>

                <Tooltip content="Reveal answer (-5 points)" placement="bottom">
                  <Button
                    variant="flat"
                    color="danger"
                    onPress={showAnswer}
                    startContent={<Icon icon="lucide:eye" />}
                    className="flex-1 action-button"
                    size="sm"
                  >
                    Show Answer
                  </Button>
                </Tooltip>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  // Helper function to get category icon
  function getCategoryIcon(category: string): string {
    switch (category) {
      case "food":
        return "lucide:utensils";
      case "places":
        return "lucide:map-pin";
      case "movies":
        return "lucide:film";
      case "idioms":
        return "lucide:package";
      case "songs":
        return "lucide:music";
      case "brands":
        return "lucide:shopping-bag";
      default:
        return "lucide:help-circle";
    }
  }
};
