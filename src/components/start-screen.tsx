import React from "react";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Card,
  CardBody,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useGame, Category, Difficulty, GameMode } from "./game-provider";

export const StartScreen: React.FC = () => {
  const { startGame, highScores, bestTime } = useGame();
  const [selectedCategory, setSelectedCategory] =
    React.useState<Category>("food");
  const [selectedDifficulty, setSelectedDifficulty] =
    React.useState<Difficulty>("easy");
  const [selectedGameMode, setSelectedGameMode] =
    React.useState<GameMode>("standard");

  const categories: { key: Category; label: string; icon: string }[] = [
    { key: "food", label: "Food", icon: "lucide:utensils" },
    { key: "places", label: "Places", icon: "lucide:map-pin" },
    { key: "movies", label: "Movies", icon: "lucide:film" },
    { key: "idioms", label: "Idioms", icon: "lucide:package" },
    { key: "songs", label: "Songs", icon: "lucide:music" },
    { key: "brands", label: "Brands", icon: "lucide:shopping-bag" },
  ];

  const difficulties: { key: Difficulty; label: string; icon: string }[] = [
    { key: "easy", label: "Easy", icon: "lucide:smile" },
    { key: "medium", label: "Medium", icon: "lucide:smile-plus" },
    { key: "hard", label: "Hard", icon: "lucide:brain" },
  ];

  const gameModes: {
    key: GameMode;
    label: string;
    icon: string;
    description: string;
  }[] = [
    {
      key: "standard",
      label: "Standard",
      icon: "lucide:clock",
      description: "Play at your own pace",
    },
    {
      key: "timed",
      label: "Timed",
      icon: "lucide:timer",
      description: "Complete puzzles within 60 seconds",
    },
  ];

  const getCategoryLabel = () => {
    return (
      categories.find((c) => c.key === selectedCategory)?.label ||
      "Select Category"
    );
  };

  const getDifficultyLabel = () => {
    return (
      difficulties.find((d) => d.key === selectedDifficulty)?.label ||
      "Select Difficulty"
    );
  };

  const getCategoryIcon = () => {
    return (
      categories.find((c) => c.key === selectedCategory)?.icon ||
      "lucide:help-circle"
    );
  };

  const getDifficultyIcon = () => {
    return (
      difficulties.find((d) => d.key === selectedDifficulty)?.icon ||
      "lucide:help-circle"
    );
  };

  const getGameModeLabel = () => {
    return (
      gameModes.find((m) => m.key === selectedGameMode)?.label || "Select Mode"
    );
  };

  const getGameModeIcon = () => {
    return (
      gameModes.find((m) => m.key === selectedGameMode)?.icon ||
      "lucide:help-circle"
    );
  };

  const handleStartGame = () => {
    startGame(selectedCategory, selectedDifficulty, selectedGameMode);
  };

  // Helper function to get category emoji
  function getCategoryEmoji(category: Category): string {
    switch (category) {
      case "food":
        return "🍔";
      case "places":
        return "🏝️";
      case "movies":
        return "🎬";
      case "idioms":
        return "🗣️";
      case "songs":
        return "🎶";
      case "brands":
        return "📱";
      default:
        return "❓";
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-6"
    >
      <div className="text-center">
        <motion.div
          className="text-6xl mb-4 inline-block"
          animate={{
            rotate: [0, 5, -5, 0],
            y: [0, -5, 0],
            filter: [
              "drop-shadow(0 0 8px rgba(var(--heroui-primary-rgb), 0.3))",
              "drop-shadow(0 0 12px rgba(var(--heroui-primary-rgb), 0.6))",
              "drop-shadow(0 0 8px rgba(var(--heroui-primary-rgb), 0.3))",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          🎮
        </motion.div>
        <h2 className="text-2xl font-bold mb-2">Emoji Guess</h2>
        <p className="text-foreground-500">
          Guess the word or phrase from the emoji sequence!
        </p>
      </div>

      <Card className="bg-content2/50 backdrop-blur-sm border border-primary/10 shadow-lg">
        <CardBody className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-md font-medium flex items-center gap-1">
                <Icon icon="lucide:trophy" className="text-warning" />
                High Scores
              </h3>
              <div className="text-small text-foreground-500 mt-1">
                <div>Standard: {highScores.standard} points</div>
                <div>Timed: {highScores.timed} points</div>
              </div>
            </div>
            <div>
              <h3 className="text-md font-medium flex items-center gap-1">
                <Icon icon="lucide:timer" className="text-success" />
                Best Time
              </h3>
              <div className="text-small text-foreground-500 mt-1">
                {bestTime ? `${bestTime} seconds` : "Not set"}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2 md:col-span-1">
          <label className="text-small text-foreground-500">Category</label>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="flat"
                startContent={<Icon icon={getCategoryIcon()} />}
                endContent={
                  <Icon icon="lucide:chevron-down" className="text-small" />
                }
                className="w-full justify-between bg-content2/50 backdrop-blur-sm shadow-md"
              >
                {getCategoryLabel()}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Categories"
              onAction={(key) => setSelectedCategory(key as Category)}
              selectedKeys={[selectedCategory]}
              selectionMode="single"
            >
              {categories.map((category) => (
                <DropdownItem
                  key={category.key}
                  startContent={<Icon icon={category.icon} />}
                >
                  {category.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className="space-y-2 md:col-span-1">
          <label className="text-small text-foreground-500">Difficulty</label>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="flat"
                startContent={<Icon icon={getDifficultyIcon()} />}
                endContent={
                  <Icon icon="lucide:chevron-down" className="text-small" />
                }
                className="w-full justify-between bg-content2/50 backdrop-blur-sm shadow-md"
              >
                {getDifficultyLabel()}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Difficulty"
              onAction={(key) => setSelectedDifficulty(key as Difficulty)}
              selectedKeys={[selectedDifficulty]}
              selectionMode="single"
            >
              {difficulties.map((difficulty) => (
                <DropdownItem
                  key={difficulty.key}
                  startContent={<Icon icon={difficulty.icon} />}
                >
                  {difficulty.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className="space-y-2 md:col-span-1">
          <label className="text-small text-foreground-500">Game Mode</label>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="flat"
                startContent={<Icon icon={getGameModeIcon()} />}
                endContent={
                  <Icon icon="lucide:chevron-down" className="text-small" />
                }
                className="w-full justify-between bg-content2/50 backdrop-blur-sm shadow-md"
              >
                {getGameModeLabel()}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Game Mode"
              onAction={(key) => setSelectedGameMode(key as GameMode)}
              selectedKeys={[selectedGameMode]}
              selectionMode="single"
            >
              {gameModes.map((mode) => (
                <DropdownItem
                  key={mode.key}
                  startContent={<Icon icon={mode.icon} />}
                  description={mode.description}
                >
                  {mode.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        {categories.map((category) => (
          <motion.div
            key={category.key}
            className={`p-4 rounded-lg text-center cursor-pointer transition-all shadow-md ${
              selectedCategory === category.key
                ? "bg-primary/15 border border-primary/30 glow"
                : "bg-content2/30 border border-content2/50 hover:bg-content2/50"
            }`}
            onClick={() => setSelectedCategory(category.key)}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="category-icon block">
              {getCategoryEmoji(category.key)}
            </span>
            <span className="font-medium">{category.label}</span>
          </motion.div>
        ))}
      </div>

      <Button
        color="primary"
        size="lg"
        className="mt-2 action-button"
        startContent={<Icon icon="lucide:play" />}
        onPress={handleStartGame}
        variant="shadow"
      >
        Start Game
      </Button>
    </motion.div>
  );
};
