import React from "react";
import { addToast } from "@heroui/react";

// Define types
export type Difficulty = "easy" | "medium" | "hard";
export type Category =
  | "food"
  | "places"
  | "movies"
  | "idioms"
  | "songs"
  | "brands";
export type GameMode = "standard" | "timed";

export interface Puzzle {
  id: string;
  category: Category;
  emojis: string[];
  answer: string;
  hint: string;
  difficulty: Difficulty;
}

interface GameContextType {
  gameStarted: boolean;
  startGame: (
    category: Category,
    difficulty: Difficulty,
    selectedGameMode: GameMode
  ) => void;
  endGame: () => void;
  category: Category | null;
  difficulty: Difficulty | null;
  currentPuzzle: Puzzle | null;
  score: number;
  totalPuzzles: number;
  currentPuzzleIndex: number;
  guess: string;
  setGuess: (guess: string) => void;
  checkAnswer: () => void;
  showHint: () => void;
  hintUsed: boolean;
  nextPuzzle: () => void;
  isCorrect: boolean | null;
  isLoading: boolean;
  gameMode: GameMode;
  setGameMode: (mode: GameMode) => void;
  timeRemaining: number;
  showConfetti: boolean;
  highScores: Record<GameMode, number>;
  bestTime: number | null;
  skipPuzzle: () => void;
  restartGame: () => void;
  showAnswer: () => void;
  answerRevealed: boolean;
}

// Create context
export const GameContext = React.createContext<GameContextType>(
  {} as GameContextType
);

// Sample puzzles data
const puzzles: Record<Category, Record<Difficulty, Puzzle[]>> = {
  food: {
    easy: [
      {
        id: "food-01",
        answer: "Pizza",
        emojis: ["🍕"],
        hint: "Italian cheesy delight",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-02",
        answer: "Burger",
        emojis: ["🍔"],
        hint: "Fast food sandwich",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-03",
        answer: "Sushi",
        emojis: ["🍣", "🐟"],
        hint: "Japanese rice and fish",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-04",
        answer: "Ice Cream",
        emojis: ["🍦"],
        hint: "Cold sweet treat",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-05",
        answer: "Taco",
        emojis: ["🌮"],
        hint: "Mexican folded food",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-06",
        answer: "Hot Dog",
        emojis: ["🌭"],
        hint: "Sausage in a bun",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-07",
        answer: "Spaghetti",
        emojis: ["🍝"],
        hint: "Italian pasta",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-08",
        answer: "Donut",
        emojis: ["🍩"],
        hint: "Ring-shaped sweet",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-09",
        answer: "French Fries",
        emojis: ["🍟"],
        hint: "Crispy potato sticks",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-10",
        answer: "Pancakes",
        emojis: ["🥞"],
        hint: "Breakfast stack",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-11",
        answer: "Apple Pie",
        emojis: ["🍏", "🥧"],
        hint: "Classic American dessert",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-12",
        answer: "Chocolate",
        emojis: ["🍫"],
        hint: "Sweet brown treat",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-13",
        answer: "Caesar Salad",
        emojis: ["🥗", "🧀", "🥓"],
        hint: "Classic salad with dressing",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-14",
        answer: "Pumpkin Spice Latte",
        emojis: ["🎃", "☕", "🍂"],
        hint: "Autumn coffee favorite",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-15",
        answer: "Fried Chicken",
        emojis: ["🍗", "🔥"],
        hint: "Southern comfort food",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-16",
        answer: "Turkey Sandwich",
        emojis: ["🦃", "🍞"],
        hint: "Thanksgiving leftovers favorite",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-17",
        answer: "Nachos",
        emojis: ["🧀", "🌽", "🌶️"],
        hint: "Corn chips with cheese",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-18",
        answer: "Pizza Margherita",
        emojis: ["🍕", "🍅", "🌿"],
        hint: "Italian pizza with tomato, mozzarella, basil",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-19",
        answer: "Ramen",
        emojis: ["🍜", "🥢"],
        hint: "Japanese noodle soup",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-20",
        answer: "Falafel",
        emojis: ["🧆", "🥙"],
        hint: "Middle Eastern chickpea balls",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-21",
        answer: "Burrito",
        emojis: ["🌯"],
        hint: "Wrapped Mexican food",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-22",
        answer: "Quesadilla",
        emojis: ["🫓", "🧀"],
        hint: "Cheesy Mexican snack",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-23",
        answer: "Pad Thai",
        emojis: ["🍜", "🥜", "🍤"],
        hint: "Thai noodle dish",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-24",
        answer: "Pho",
        emojis: ["🍲", "🥢"],
        hint: "Vietnamese noodle soup",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-25",
        answer: "Dim Sum",
        emojis: ["🥟", "🍵"],
        hint: "Chinese bite-sized food",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-26",
        answer: "Croissant",
        emojis: ["🥐"],
        hint: "French flaky pastry",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-27",
        answer: "Bagel",
        emojis: ["🥯"],
        hint: "Ring-shaped bread",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-28",
        answer: "Cupcake",
        emojis: ["🧁"],
        hint: "Mini frosted cake",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-29",
        answer: "Brownie",
        emojis: ["🍫", "🟫"],
        hint: "Chocolate square dessert",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-30",
        answer: "Mac and Cheese",
        emojis: ["🧀", "🍝"],
        hint: "Cheesy pasta comfort food",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-31",
        answer: "Chicken Tikka Masala",
        emojis: ["🍗", "🍛", "🇮🇳"],
        hint: "Indian creamy curry",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-32",
        answer: "Paneer Butter Masala",
        emojis: ["🧀", "🍛", "🇮🇳"],
        hint: "Vegetarian Indian curry",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-33",
        answer: "Dosa",
        emojis: ["🥞", "🇮🇳"],
        hint: "Indian crispy crepe",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-34",
        answer: "Samosa",
        emojis: ["🥟", "🌶️"],
        hint: "Indian fried snack",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-35",
        answer: "Chow Mein",
        emojis: ["🍜", "🥢"],
        hint: "Chinese stir-fried noodles",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-36",
        answer: "Pav Bhaji",
        emojis: ["🍞", "🍛"],
        hint: "Indian street food",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-37",
        answer: "Vada Pav",
        emojis: ["🍔", "🌶️"],
        hint: "Mumbai's spicy burger",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-38",
        answer: "Momo",
        emojis: ["🥟"],
        hint: "Tibetan dumpling",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-39",
        answer: "Kimchi",
        emojis: ["🥬", "🌶️"],
        hint: "Spicy Korean side dish",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-40",
        answer: "Bibimbap",
        emojis: ["🍚", "🥢", "🥕"],
        hint: "Korean rice bowl",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-41",
        answer: "Baklava",
        emojis: ["🥧", "🍯", "🥜"],
        hint: "Layered pastry dessert",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-42",
        answer: "Gelato",
        emojis: ["🍨", "🇮🇹"],
        hint: "Italian ice cream",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-43",
        answer: "Espresso",
        emojis: ["☕", "🇮🇹"],
        hint: "Strong Italian coffee",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-44",
        answer: "Bubble Tea",
        emojis: ["🧋"],
        hint: "Taiwanese drink with pearls",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-45",
        answer: "Poutine",
        emojis: ["🍟", "🧀"],
        hint: "Canadian fries with gravy",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-46",
        answer: "Clam Chowder",
        emojis: ["🦪", "🍲"],
        hint: "Creamy seafood soup",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-47",
        answer: "Sashimi",
        emojis: ["🐟", "🍣"],
        hint: "Thinly sliced raw fish",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-48",
        answer: "Cheesecake",
        emojis: ["🍰", "🧀"],
        hint: "Creamy dessert pie",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-49",
        answer: "Tiramisu",
        emojis: ["🍰", "☕"],
        hint: "Italian coffee dessert",
        category: "food",
        difficulty: "easy",
      },
      {
        id: "food-50",
        answer: "Chili",
        emojis: ["🌶️", "🥩", "🍲"],
        hint: "Spicy stew with beans",
        category: "food",
        difficulty: "easy",
      },
    ],
    medium: [
      {
        id: "food-51",
        answer: "Bouillabaisse",
        emojis: ["🍲", "🐟", "🇫🇷"],
        hint: "French fish stew",
        category: "food",
        difficulty: "medium",
      },
      {
        id: "food-52",
        answer: "Coq au Vin",
        emojis: ["🐓", "🍷", "🇫🇷"],
        hint: "Chicken cooked in wine",
        category: "food",
        difficulty: "medium",
      },
      {
        id: "food-53",
        answer: "Beef Wellington",
        emojis: ["🥩", "🥧"],
        hint: "Filet steak wrapped in pastry",
        category: "food",
        difficulty: "medium",
      },
      {
        id: "food-54",
        answer: "Cassoulet",
        emojis: ["🍲", "🥓", "🍖"],
        hint: "Slow-cooked French casserole",
        category: "food",
        difficulty: "medium",
      },
      {
        id: "food-55",
        answer: "Biryani",
        emojis: ["🍚", "🍗", "🇮🇳"],
        hint: "Spiced rice with meat",
        category: "food",
        difficulty: "medium",
      },
      {
        id: "food-56",
        answer: "Ratatouille",
        emojis: ["🍆", "🍅", "🥒"],
        hint: "French vegetable stew",
        category: "food",
        difficulty: "medium",
      },
      {
        id: "food-57",
        answer: "Ceviche",
        emojis: ["🐟", "🍋", "🇵🇪"],
        hint: "Marinated raw fish dish",
        category: "food",
        difficulty: "medium",
      },
      {
        id: "food-58",
        answer: "Paella",
        emojis: ["🍚", "🦐", "🇪🇸"],
        hint: "Spanish rice with seafood",
        category: "food",
        difficulty: "medium",
      },
      {
        id: "food-59",
        answer: "Gnocchi",
        emojis: ["🍝"],
        hint: "Italian potato dumplings",
        category: "food",
        difficulty: "medium",
      },
      {
        id: "food-60",
        answer: "Shakshuka",
        emojis: ["🍳", "🍅", "🥖"],
        hint: "Eggs poached in spicy tomato sauce",
        category: "food",
        difficulty: "medium",
      },
      {
        id: "food-61",
        answer: "Empanada",
        emojis: ["🥟", "🍖"],
        hint: "Stuffed pastry from Latin America",
        category: "food",
        difficulty: "medium",
      },
    ],
    hard: [
      {
        id: "food-62",
        answer: "Sauerbraten",
        emojis: ["🥩", "🇩🇪", "🍷"],
        hint: "German pot roast marinated in vinegar",
        category: "food",
        difficulty: "hard",
      },
      {
        id: "food-63",
        answer: "Mole Poblano",
        emojis: ["🍗", "🌶️", "🍫"],
        hint: "Mexican chocolate chili sauce",
        category: "food",
        difficulty: "hard",
      },
      {
        id: "food-64",
        answer: "Katsu Curry",
        emojis: ["🍛", "🍗", "🇯🇵"],
        hint: "Japanese fried cutlet with curry",
        category: "food",
        difficulty: "hard",
      },
      {
        id: "food-65",
        answer: "Baba Ganoush",
        emojis: ["🍆", "🥄", "🇱🇧"],
        hint: "Middle Eastern eggplant dip",
        category: "food",
        difficulty: "hard",
      },
      {
        id: "food-66",
        answer: "Chateaubriand",
        emojis: ["🥩", "🍷"],
        hint: "Thick cut tenderloin steak",
        category: "food",
        difficulty: "hard",
      },
      {
        id: "food-67",
        answer: "Peking Duck",
        emojis: ["🦆", "🥢", "🇨🇳"],
        hint: "Crispy Chinese duck dish",
        category: "food",
        difficulty: "hard",
      },
      {
        id: "food-68",
        answer: "Beef Bourguignon",
        emojis: ["🥩", "🍷", "🍲"],
        hint: "French beef stew braised in red wine",
        category: "food",
        difficulty: "hard",
      },
      {
        id: "food-69",
        answer: "Rogan Josh",
        emojis: ["🍛", "🐑", "🇮🇳"],
        hint: "Spiced Indian lamb curry",
        category: "food",
        difficulty: "hard",
      },
      {
        id: "food-70",
        answer: "Soba",
        emojis: ["🍜", "🇯🇵"],
        hint: "Japanese buckwheat noodles",
        category: "food",
        difficulty: "hard",
      },
      {
        id: "food-71",
        answer: "Caponata",
        emojis: ["🍆", "🍅", "🇮🇹"],
        hint: "Sicilian eggplant relish",
        category: "food",
        difficulty: "hard",
      },
      {
        id: "food-72",
        answer: "Tamales",
        emojis: ["🌽", "🍖"],
        hint: "Mexican corn dough parcels",
        category: "food",
        difficulty: "hard",
      },
    ],
  },
  places: {
    easy: [
      {
        id: "place-01",
        category: "places",
        emojis: ["🗼", "🇫🇷"],
        answer: "paris",
        hint: "City of lights and the Eiffel Tower",
        difficulty: "easy",
      },
      {
        id: "place-02",
        category: "places",
        emojis: ["🗽", "🗺️"],
        answer: "new york",
        hint: "Statue of Liberty",
        difficulty: "easy",
      },
      {
        id: "place-03",
        category: "places",
        emojis: ["🎡", "🇬🇧"],
        answer: "london",
        hint: "Big Ben and the Eye",
        difficulty: "easy",
      },
      {
        id: "place-04",
        category: "places",
        emojis: ["🎶", "🏛️", "🇦🇺"],
        answer: "sydney",
        hint: "Opera House and Harbour Bridge",
        difficulty: "easy",
      },
      {
        id: "place-05",
        category: "places",
        emojis: ["🗼", "🍣", "🇯🇵"],
        answer: "tokyo",
        hint: "Skytree and sushi",
        difficulty: "easy",
      },
      {
        id: "place-06",
        category: "places",
        emojis: ["🏛️", "🍕", "🇮🇹"],
        answer: "rome",
        hint: "Colosseum and pizza",
        difficulty: "easy",
      },
      {
        id: "place-07",
        category: "places",
        emojis: ["🗽", "🏖️", "🇧🇷"],
        answer: "rio de janeiro",
        hint: "Christ the Redeemer and Copacabana",
        difficulty: "easy",
      },
      {
        id: "place-08",
        category: "places",
        emojis: ["🎠", "🇷🇺"],
        answer: "moscow",
        hint: "Red Square and Kremlin",
        difficulty: "easy",
      },
      {
        id: "place-09",
        category: "places",
        emojis: ["🏯", "🐉", "🇨🇳"],
        answer: "beijing",
        hint: "Great Wall and Forbidden City",
        difficulty: "easy",
      },
      {
        id: "place-10",
        category: "places",
        emojis: ["🏙️", "🌴", "🇦🇪"],
        answer: "dubai",
        hint: "Burj Khalifa and desert",
        difficulty: "easy",
      },
      {
        id: "place-11",
        category: "places",
        emojis: ["🕌", "🐫", "🇪🇬"],
        answer: "cairo",
        hint: "Pyramids and the Nile",
        difficulty: "easy",
      },
      {
        id: "place-12",
        category: "places",
        emojis: ["🌴", "🎬", "🇺🇸"],
        answer: "los angeles",
        hint: "Hollywood and beaches",
        difficulty: "easy",
      },
      {
        id: "place-13",
        category: "places",
        emojis: ["🧱", "🍻", "🇩🇪"],
        answer: "berlin",
        hint: "Wall and beer",
        difficulty: "easy",
      },
      {
        id: "place-14",
        category: "places",
        emojis: ["🏖️", "⚽", "🇪🇸"],
        answer: "barcelona",
        hint: "Gaudi and the beach",
        difficulty: "easy",
      },
      {
        id: "place-15",
        category: "places",
        emojis: ["🏛️", "🇬🇷"],
        answer: "athens",
        hint: "Acropolis and Greek history",
        difficulty: "easy",
      },
      {
        id: "place-16",
        category: "places",
        emojis: ["🚤", "🌊", "🇮🇹"],
        answer: "venice",
        hint: "Canals and gondolas",
        difficulty: "easy",
      },
      {
        id: "place-17",
        category: "places",
        emojis: ["🕌", "🌉", "🇹🇷"],
        answer: "istanbul",
        hint: "Blue Mosque and Bosphorus",
        difficulty: "easy",
      },
      {
        id: "place-18",
        category: "places",
        emojis: ["🗼", "🍁", "🇨🇦"],
        answer: "toronto",
        hint: "CN Tower and maple leaf",
        difficulty: "easy",
      },
      {
        id: "place-19",
        category: "places",
        emojis: ["⛰️", "🌊", "🇿🇦"],
        answer: "cape town",
        hint: "Table Mountain and two oceans",
        difficulty: "easy",
      },
      {
        id: "place-20",
        category: "places",
        emojis: ["🏯", "🌶️", "🇹🇭"],
        answer: "bangkok",
        hint: "Temples and spicy food",
        difficulty: "easy",
      },
      {
        id: "place-21",
        category: "places",
        emojis: ["🦁", "🌺", "🇸🇬"],
        answer: "singapore",
        hint: "Lion city and gardens",
        difficulty: "easy",
      },
      {
        id: "place-22",
        category: "places",
        emojis: ["🌉", "🚋", "🇺🇸"],
        answer: "san francisco",
        hint: "Golden Gate Bridge",
        difficulty: "easy",
      },
      {
        id: "place-23",
        category: "places",
        emojis: ["🚲", "🌷", "🇳🇱"],
        answer: "amsterdam",
        hint: "Bikes and canals",
        difficulty: "easy",
      },
      {
        id: "place-24",
        category: "places",
        emojis: ["🕌", "✡️", "✝️"],
        answer: "jerusalem",
        hint: "Holy city for three religions",
        difficulty: "easy",
      },
      {
        id: "place-25",
        category: "places",
        emojis: ["🦒", "🌳", "🇰🇪"],
        answer: "nairobi",
        hint: "Kenyan capital with wildlife",
        difficulty: "easy",
      },
      {
        id: "place-26",
        category: "places",
        emojis: ["💃", "🥩", "🇦🇷"],
        answer: "buenos aires",
        hint: "Tango and steak",
        difficulty: "easy",
      },
      {
        id: "place-27",
        category: "places",
        emojis: ["🌊", "🍋", "🇵🇪"],
        answer: "lima",
        hint: "Peruvian capital by the sea",
        difficulty: "easy",
      },
      {
        id: "place-28",
        category: "places",
        emojis: ["⛰️", "🍷", "🇨🇱"],
        answer: "santiago",
        hint: "Andes and Chilean wine",
        difficulty: "easy",
      },
      {
        id: "place-29",
        category: "places",
        emojis: ["🌮", "🏙️", "🇲🇽"],
        answer: "mexico city",
        hint: "Tacos and Aztec ruins",
        difficulty: "easy",
      },
      {
        id: "place-30",
        category: "places",
        emojis: ["🏰", "🍺", "🇨🇿"],
        answer: "prague",
        hint: "Castles and beer",
        difficulty: "easy",
      },
      {
        id: "place-31",
        category: "places",
        emojis: ["🎻", "🍰", "🇦🇹"],
        answer: "vienna",
        hint: "Classical music and cake",
        difficulty: "easy",
      },
      {
        id: "place-32",
        category: "places",
        emojis: ["🏞️", "💰", "🇨🇭"],
        answer: "zurich",
        hint: "Swiss lakes and banks",
        difficulty: "easy",
      },
      {
        id: "place-33",
        category: "places",
        emojis: ["🏰", "🛶", "🇸🇪"],
        answer: "stockholm",
        hint: "Swedish capital on the water",
        difficulty: "easy",
      },
      {
        id: "place-34",
        category: "places",
        emojis: ["🎿", "🌲", "🇳🇴"],
        answer: "oslo",
        hint: "Norwegian fjords and skiing",
        difficulty: "easy",
      },
      {
        id: "place-35",
        category: "places",
        emojis: ["❄️", "🌊", "🇫🇮"],
        answer: "helsinki",
        hint: "Finnish capital by the sea",
        difficulty: "easy",
      },
      {
        id: "place-36",
        category: "places",
        emojis: ["🌋", "❄️", "🇮🇸"],
        answer: "reykjavik",
        hint: "Icelandic capital with volcanoes",
        difficulty: "easy",
      },
      {
        id: "place-37",
        category: "places",
        emojis: ["🌋", "⛵", "🇳🇿"],
        answer: "auckland",
        hint: "City of Sails in New Zealand",
        difficulty: "easy",
      },
      {
        id: "place-38",
        category: "places",
        emojis: ["🌬️", "🎬", "🇳🇿"],
        answer: "wellington",
        hint: "Windy capital of New Zealand",
        difficulty: "easy",
      },
      {
        id: "place-39",
        category: "places",
        emojis: ["🌞", "🏖️", "🇦🇺"],
        answer: "perth",
        hint: "Sunny city in Western Australia",
        difficulty: "easy",
      },
      {
        id: "place-40",
        category: "places",
        emojis: ["🎾", "☕", "🇦🇺"],
        answer: "melbourne",
        hint: "Coffee and tennis in Australia",
        difficulty: "easy",
      },
      {
        id: "place-41",
        category: "places",
        emojis: ["🌞", "🏝️", "🇦🇺"],
        answer: "brisbane",
        hint: "Queensland's river city",
        difficulty: "easy",
      },
      {
        id: "place-42",
        category: "places",
        emojis: ["🏝️", "🏛️", "🇬🇷"],
        answer: "santorini",
        hint: "Greek island with blue domes",
        difficulty: "easy",
      },
      {
        id: "place-43",
        category: "places",
        emojis: ["🐠", "🐟", "🌊", "🇦🇺"],
        answer: "great barrier reef",
        hint: "World's largest coral reef system",
        difficulty: "easy",
      },
      {
        id: "place-44",
        category: "places",
        emojis: ["❄️", "🐧", "🌨️"],
        answer: "antarctica",
        hint: "Southernmost, icy continent",
        difficulty: "easy",
      },
      {
        id: "place-45",
        category: "places",
        emojis: ["🏜️", "🌞", "🐫"],
        answer: "sahara desert",
        hint: "World's largest hot desert",
        difficulty: "easy",
      },
    ],
    medium: [
      {
        id: "place-46",
        category: "places",
        emojis: ["🏞️", "🗻", "🇨🇳"],
        answer: "huangshan",
        hint: "Yellow Mountains in China",
        difficulty: "medium",
      },
      {
        id: "place-47",
        category: "places",
        emojis: ["🏜️", "🛖", "🇲🇦"],
        answer: "marrakech",
        hint: "City of souks and palaces",
        difficulty: "medium",
      },
      {
        id: "place-48",
        category: "places",
        emojis: ["🏛️", "🐪", "🇹🇳"],
        answer: "tunis",
        hint: "Capital of Tunisia",
        difficulty: "medium",
      },
      {
        id: "place-49",
        category: "places",
        emojis: ["🏰", "🎭", "🇨🇿"],
        answer: "cesky krumlov",
        hint: "Medieval town in Czech Republic",
        difficulty: "medium",
      },
      {
        id: "place-50",
        category: "places",
        emojis: ["🌲", "🏔️", "🇨🇭"],
        answer: "interlaken",
        hint: "Swiss adventure town between lakes",
        difficulty: "medium",
      },
      {
        id: "place-51",
        category: "places",
        emojis: ["🌄", "🛶", "🇨🇦"],
        answer: "banff",
        hint: "Canadian Rockies resort",
        difficulty: "medium",
      },
      {
        id: "place-52",
        category: "places",
        emojis: ["🏯", "🌸", "🇯🇵"],
        answer: "kyoto",
        hint: "Temples and cherry blossoms",
        difficulty: "medium",
      },
      {
        id: "place-53",
        category: "places",
        emojis: ["🏞️", "🌉", "🇺🇸"],
        answer: "sedona",
        hint: "Red rocks and vortexes",
        difficulty: "medium",
      },
      {
        id: "place-54",
        category: "places",
        emojis: ["🏜️", "🦎", "🇺🇸"],
        answer: "monument valley",
        hint: "Iconic red sandstone formations",
        difficulty: "medium",
      },
      {
        id: "place-55",
        category: "places",
        emojis: ["🏯", "🎎", "🇯🇵"],
        answer: "nara",
        hint: "Deer park and ancient temples",
        difficulty: "medium",
      },
      {
        id: "place-56",
        category: "places",
        emojis: ["🌋", "🗻", "🇯🇵"],
        answer: "mount fuji",
        hint: "Iconic volcano and sacred mountain",
        difficulty: "medium",
      },
      {
        id: "place-57",
        category: "places",
        emojis: ["🏝️", "🇵🇭"],
        answer: "palawan",
        hint: "Island paradise in the Philippines",
        difficulty: "medium",
      },
      {
        id: "place-58",
        category: "places",
        emojis: ["🕌", "🌴", "🇲🇦"],
        answer: "casablanca",
        hint: "City in Morocco famous from film",
        difficulty: "medium",
      },
      {
        id: "place-59",
        category: "places",
        emojis: ["🌅", "🏜️", "🇺🇸"],
        answer: "sedona",
        hint: "Spiritual red rock town in Arizona",
        difficulty: "medium",
      },
      {
        id: "place-60",
        category: "places",
        emojis: ["🏯", "🌸", "🇯🇵"],
        answer: "hakone",
        hint: "Hot springs and views of Fuji",
        difficulty: "medium",
      },
      {
        id: "place-61",
        category: "places",
        emojis: ["🏜️", "🌵", "🇲🇽"],
        answer: "baja california",
        hint: "Peninsula with beaches and deserts",
        difficulty: "medium",
      },
    ],
    hard: [
      {
        id: "place-62",
        category: "places",
        emojis: ["🗻", "⛩️", "🇯🇵"],
        answer: "mount fuji",
        hint: "Iconic volcano and sacred mountain",
        difficulty: "hard",
      },
      {
        id: "place-63",
        category: "places",
        emojis: ["🌄", "🐫", "🇲🇳"],
        answer: "gobi desert",
        hint: "Vast desert in Mongolia",
        difficulty: "hard",
      },
      {
        id: "place-64",
        category: "places",
        emojis: ["🏜️", "🕍", "🇮🇱"],
        answer: "dead sea",
        hint: "Salt lake below sea level",
        difficulty: "hard",
      },
      {
        id: "place-65",
        category: "places",
        emojis: ["🌋", "🏞️", "🇮🇩"],
        answer: "bromo volcano",
        hint: "Active volcano in Indonesia",
        difficulty: "hard",
      },
      {
        id: "place-66",
        category: "places",
        emojis: ["🏜️", "🐫", "🇳🇪"],
        answer: "niger desert",
        hint: "Desert region in Niger",
        difficulty: "hard",
      },
      {
        id: "place-67",
        category: "places",
        emojis: ["🏯", "🍵", "🇯🇵"],
        answer: "takayama",
        hint: "Historic town in Japan",
        difficulty: "hard",
      },
      {
        id: "place-68",
        category: "places",
        emojis: ["🏞️", "🏔️", "🇳🇵"],
        answer: "annapurna",
        hint: "Himalayan mountain range",
        difficulty: "hard",
      },
    ],
  },
  movies: {
    easy: [
      {
        id: "movie-01",
        answer: "The Lion King",
        emojis: ["🦁", "👑"],
        hint: "Animated African savanna tale",
        category: "movies",
        difficulty: "easy",
      },
      {
        id: "movie-02",
        answer: "Finding Nemo",
        emojis: ["🐠", "🔍"],
        hint: "A clownfish adventure",
        category: "movies",
        difficulty: "easy",
      },
      {
        id: "movie-03",
        answer: "Titanic",
        emojis: ["🚢", "🧊", "💔"],
        hint: "A legendary shipwreck",
        category: "movies",
        difficulty: "easy",
      },
      {
        id: "movie-04",
        answer: "Jurassic Park",
        emojis: ["🦖", "🌴", "⚡"],
        hint: "Dinosaurs run wild",
        category: "movies",
        difficulty: "easy",
      },
      {
        id: "movie-05",
        answer: "Toy Story",
        emojis: ["🤠", "🧸", "🚀"],
        hint: "Toys come to life",
        category: "movies",
        difficulty: "easy",
      },
      {
        id: "movie-06",
        answer: "Frozen",
        emojis: ["❄️", "👸", "⛄"],
        hint: "Let it go!",
        category: "movies",
        difficulty: "easy",
      },
      {
        id: "movie-07",
        answer: "Harry Potter",
        emojis: ["⚡", "🧙‍♂️", "🦉"],
        hint: "The boy who lived",
        category: "movies",
        difficulty: "easy",
      },
      {
        id: "movie-08",
        answer: "Minions",
        emojis: ["🟡", "👓", "🍌"],
        hint: "Yellow henchmen",
        category: "movies",
        difficulty: "easy",
      },
      {
        id: "movie-09",
        answer: "How to Train Your Dragon",
        emojis: ["🐉", "👦", "🦷"],
        hint: "Vikings and dragons",
        category: "movies",
        difficulty: "easy",
      },
      {
        id: "movie-10",
        answer: "Inside Out",
        emojis: ["😃", "😢", "😡", "😱", "😨"],
        hint: "Emotions in your head",
        category: "movies",
        difficulty: "easy",
      },
      {
        id: "movie-13",
        answer: "Back to the Future",
        emojis: ["⏰", "🚗", "⚡"],
        hint: "Time-traveling DeLorean",
        category: "movies",
        difficulty: "easy",
      },
      {
        id: "movie-15",
        answer: "Avatar",
        emojis: ["🔵", "🌳", "🌌"],
        hint: "Blue aliens on Pandora",
        category: "movies",
        difficulty: "easy",
      },
      {
        id: "movie-16",
        answer: "The Avengers",
        emojis: ["🦸‍♂️", "🦸‍♀️", "🛡️"],
        hint: "Earth's mightiest heroes",
        category: "movies",
        difficulty: "easy",
      },
      {
        id: "movie-17",
        answer: "Spider-Man",
        emojis: ["🕷️", "🧑", "🏙️"],
        hint: "Friendly neighborhood superhero",
        category: "movies",
        difficulty: "easy",
      },
      {
        id: "movie-18",
        answer: "Shrek",
        emojis: ["🟩", "👹", "🐴"],
        hint: "An ogre's fairy tale",
        category: "movies",
        difficulty: "easy",
      },
      {
        id: "movie-19",
        answer: "Jaws",
        emojis: ["🦈", "🌊", "😱"],
        hint: "Don't go in the water",
        category: "movies",
        difficulty: "easy",
      },
      {
        id: "movie-20",
        answer: "Rocky",
        emojis: ["🥊", "🇺🇸", "🥇"],
        hint: "Boxing underdog story",
        category: "movies",
        difficulty: "easy",
      },
    ],
    medium: [
      {
        id: "movie-11",
        answer: "Brave",
        emojis: ["🏹", "👩‍🦰", "🐻"],
        hint: "Scottish princess",
        category: "movies",
        difficulty: "medium",
      },
      {
        id: "movie-12",
        answer: "Turning Red",
        emojis: ["🧒", "🦊", "🔴"],
        hint: "Teen transforms into a red panda",
        category: "movies",
        difficulty: "medium",
      },
      {
        id: "movie-14",
        answer: "Forrest Gump",
        emojis: ["🏃", "🍫", "🦐"],
        hint: "Life is like a box of chocolates",
        category: "movies",
        difficulty: "medium",
      },
      {
        id: "movie-26",
        answer: "Monsters Inc",
        emojis: ["👹", "🏢", "👧"],
        hint: "Scaring for energy",
        category: "movies",
        difficulty: "medium",
      },
      {
        id: "movie-41",
        answer: "Soul",
        emojis: ["🎹", "👻", "🎷"],
        hint: "Jazz and the afterlife",
        category: "movies",
        difficulty: "medium",
      },
      {
        id: "movie-21",
        answer: "Moana",
        emojis: ["🌊", "👧", "🛶"],
        hint: "Voyage across the ocean",
        category: "movies",
        difficulty: "medium",
      },
      {
        id: "movie-22",
        answer: "Coco",
        emojis: ["💀", "🎸", "🎶"],
        hint: "Day of the Dead adventure",
        category: "movies",
        difficulty: "medium",
      },
      {
        id: "movie-31",
        answer: "Zootopia",
        emojis: ["🦊", "🐰", "🏙️"],
        hint: "Animals in a big city",
        category: "movies",
        difficulty: "medium",
      },
      {
        id: "movie-32",
        answer: "The Jungle Book",
        emojis: ["🐻", "🐅", "👦"],
        hint: "Boy raised by animals",
        category: "movies",
        difficulty: "medium",
      },
      {
        id: "movie-33",
        answer: "Cinderella",
        emojis: ["👸", "👠", "🎃"],
        hint: "Lost slipper",
        category: "movies",
        difficulty: "medium",
      },
    ],
    hard: [
      {
        id: "movie-48",
        answer: "Lightyear",
        emojis: ["🚀", "👨‍🚀", "🌌"],
        hint: "Origin of a space ranger",
        category: "movies",
        difficulty: "hard",
      },
      {
        id: "movie-49",
        answer: "Elemental",
        emojis: ["🔥", "💧", "🌬️", "🌱"],
        hint: "Animated world of elements",
        category: "movies",
        difficulty: "hard",
      },
      {
        id: "movie-27",
        answer: "Ratatouille",
        emojis: ["🐭", "👨‍🍳", "🍲"],
        hint: "French cooking rat",
        category: "movies",
        difficulty: "hard",
      },
      {
        id: "movie-28",
        answer: "Up",
        emojis: ["🎈", "🏠", "👴"],
        hint: "House lifted by balloons",
        category: "movies",
        difficulty: "hard",
      },
      {
        id: "movie-29",
        answer: "Wall-E",
        emojis: ["🤖", "🌍", "🚀"],
        hint: "Lonely robot on Earth",
        category: "movies",
        difficulty: "hard",
      },
      {
        id: "movie-30",
        answer: "Cars",
        emojis: ["🚗", "🏁", "🏎️"],
        hint: "Racing vehicles",
        category: "movies",
        difficulty: "hard",
      },
      {
        id: "movie-34",
        answer: "Snow White",
        emojis: ["👸", "🍎", "7️⃣"],
        hint: "Seven dwarfs",
        category: "movies",
        difficulty: "hard",
      },
      {
        id: "movie-35",
        answer: "Sleeping Beauty",
        emojis: ["👸", "💤", "🌹"],
        hint: "Pricked by a spindle",
        category: "movies",
        difficulty: "hard",
      },
      {
        id: "movie-36",
        answer: "Mulan",
        emojis: ["👧", "⚔️", "🐉"],
        hint: "Chinese warrior",
        category: "movies",
        difficulty: "hard",
      },
      {
        id: "movie-37",
        answer: "Pocahontas",
        emojis: ["👧", "🍂", "🌊"],
        hint: "Colors of the wind",
        category: "movies",
        difficulty: "hard",
      },
    ],
  },
  idioms: {
    easy: [
      {
        id: "idiom-01",
        answer: "Break the ice",
        emojis: ["💔", "🧊"],
        hint: "Start a conversation",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-02",
        answer: "Piece of cake",
        emojis: ["🧩", "🍰"],
        hint: "Very easy",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-03",
        answer: "Hit the sack",
        emojis: ["👊", "🛏️"],
        hint: "Go to bed",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-04",
        answer: "Let the cat out of the bag",
        emojis: ["🐱", "👜"],
        hint: "Reveal a secret",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-05",
        answer: "Spill the beans",
        emojis: ["💧", "🫘"],
        hint: "Reveal a secret",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-06",
        answer: "Under the weather",
        emojis: ["🌧️", "🤒"],
        hint: "Not feeling well",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-07",
        answer: "Kick the bucket",
        emojis: ["👢", "🪣"],
        hint: "To die",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-08",
        answer: "Cry over spilled milk",
        emojis: ["😭", "🥛", "💧"],
        hint: "Regret something that's done",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-09",
        answer: "Burn the midnight oil",
        emojis: ["🔥", "🌙", "🛢️"],
        hint: "Work late into the night",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-10",
        answer: "Hit the books",
        emojis: ["👊", "📚"],
        hint: "Study hard",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-11",
        answer: "Jump the gun",
        emojis: ["🏃", "🔫"],
        hint: "Start too soon",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-12",
        answer: "Throw in the towel",
        emojis: ["🤾", "🧻"],
        hint: "Give up",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-13",
        answer: "Call it a day",
        emojis: ["📞", "🌞"],
        hint: "Stop working for now",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-14",
        answer: "Down to earth",
        emojis: ["⬇️", "🌍"],
        hint: "Practical and realistic",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-15",
        answer: "Face the music",
        emojis: ["😬", "🎵"],
        hint: "Accept the consequences",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-16",
        answer: "Get cold feet",
        emojis: ["🦶", "❄️"],
        hint: "Lose courage",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-17",
        answer: "Go the extra mile",
        emojis: ["➡️", "🛣️"],
        hint: "Make a special effort",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-18",
        answer: "Hang in there",
        emojis: ["🖐️", "🔗"],
        hint: "Don't give up",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-19",
        answer: "In hot water",
        emojis: ["🔥", "💧"],
        hint: "In trouble",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-20",
        answer: "Keep an eye on",
        emojis: ["👁️", "🕵️"],
        hint: "Watch closely",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-21",
        answer: "Miss the boat",
        emojis: ["🚢", "❌"],
        hint: "Miss an opportunity",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-22",
        answer: "On the ball",
        emojis: ["⚽", "👍"],
        hint: "Alert and efficient",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-23",
        answer: "See eye to eye",
        emojis: ["👁️", "2️⃣", "👁️"],
        hint: "Agree completely",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-24",
        answer: "The best of both worlds",
        emojis: ["🌎", "👍", "🌍"],
        hint: "All advantages",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-25",
        answer: "Up in the air",
        emojis: ["⬆️", "🌬️"],
        hint: "Uncertain",
        category: "idioms",
        difficulty: "easy",
      },
      {
        id: "idiom-26",
        answer: "Your guess is as good as mine",
        emojis: ["🤷‍♂️", "🤷‍♀️"],
        hint: "I don't know either",
        category: "idioms",
        difficulty: "easy",
      },
    ],
    medium: [
      {
        id: "idiom-01",
        answer: "Jump on the bandwagon",
        emojis: ["🤸", "🎺", "🚌"],
        hint: "Join a popular trend",
        category: "idioms",
        difficulty: "medium",
      },
      {
        id: "idiom-02",
        answer: "Sit on the fence",
        emojis: ["🪑", "🚧"],
        hint: "Remain neutral",
        category: "idioms",
        difficulty: "medium",
      },
      {
        id: "idiom-03",
        answer: "Speak of the devil",
        emojis: ["🗣️", "😈"],
        hint: "When someone appears while being talked about",
        category: "idioms",
        difficulty: "medium",
      },
      {
        id: "idiom-04",
        answer: "Cat got your tongue",
        emojis: ["🐱", "👅", "❓"],
        hint: "Why so quiet?",
        category: "idioms",
        difficulty: "medium",
      },
      {
        id: "idiom-05",
        answer: "Devil's advocate",
        emojis: ["😈", "⚖️"],
        hint: "Argue for the sake of argument",
        category: "idioms",
        difficulty: "medium",
      },
      {
        id: "idiom-06",
        answer: "Let sleeping dogs lie",
        emojis: ["🐶", "😴"],
        hint: "Don't stir up old problems",
        category: "idioms",
        difficulty: "medium",
      },
      {
        id: "idiom-07",
        answer: "Take it with a grain of salt",
        emojis: ["🧂", "🤏"],
        hint: "Be skeptical",
        category: "idioms",
        difficulty: "medium",
      },
      {
        id: "idiom-08",
        answer: "Throw caution to the wind",
        emojis: ["🤾", "⚠️", "💨"],
        hint: "Act recklessly",
        category: "idioms",
        difficulty: "medium",
      },
      {
        id: "idiom-09",
        answer: "Barking up the wrong tree",
        emojis: ["🐶", "🌳", "❌"],
        hint: "Pursuing a false lead",
        category: "idioms",
        difficulty: "medium",
      },
      {
        id: "idiom-10",
        answer: "Every cloud has a silver lining",
        emojis: ["☁️", "🥈"],
        hint: "There's hope in every bad situation",
        category: "idioms",
        difficulty: "medium",
      },
      {
        id: "idiom-11",
        answer: "Give someone the cold shoulder",
        emojis: ["🎁", "🧊", "💪"],
        hint: "Ignore someone",
        category: "idioms",
        difficulty: "medium",
      },
      {
        id: "idiom-12",
        answer: "Elephant in the room",
        emojis: ["🐘", "🚪"],
        hint: "Obvious problem no one talks about",
        category: "idioms",
        difficulty: "medium",
      },
    ],
    hard: [
      {
        id: "idiom-01",
        answer: "Bite off more than you can chew",
        emojis: ["🦷", "🍔", "😬"],
        hint: "Take on too much",
        category: "idioms",
        difficulty: "hard",
      },
      {
        id: "idiom-02",
        answer: "Costs an arm and a leg",
        emojis: ["💸", "💪", "🦵"],
        hint: "Very expensive",
        category: "idioms",
        difficulty: "hard",
      },
      {
        id: "idiom-03",
        answer: "Burn bridges",
        emojis: ["🔥", "🌉"],
        hint: "Destroy relationships",
        category: "idioms",
        difficulty: "hard",
      },
      {
        id: "idiom-04",
        answer: "Cut corners",
        emojis: ["✂️", "🔲"],
        hint: "Do something cheaply",
        category: "idioms",
        difficulty: "hard",
      },
      {
        id: "idiom-05",
        answer: "Break a leg",
        emojis: ["💔", "🦵"],
        hint: "Good luck",
        category: "idioms",
        difficulty: "hard",
      },
      {
        id: "idiom-06",
        answer: "Hit the nail on the head",
        emojis: ["🔨", "🧑‍🔧", "👍"],
        hint: "Do something exactly right",
        category: "idioms",
        difficulty: "hard",
      },
    ],
  },
  songs: {
    easy: [
      {
        id: "song-01",
        category: "songs",
        emojis: ["🔵", "👤"],
        answer: "Shape of You",
        hint: "Ed Sheeran's chart-topper",
        difficulty: "easy",
      },
      {
        id: "song-02",
        category: "songs",
        emojis: ["💭", "🎹"],
        answer: "Imagine",
        hint: "John Lennon's peace anthem",
        difficulty: "easy",
      },
      {
        id: "song-03",
        category: "songs",
        emojis: ["🌀", "🌊"],
        answer: "Rolling in the Deep",
        hint: "Adele's powerhouse hit",
        difficulty: "easy",
      },
      {
        id: "song-04",
        category: "songs",
        emojis: ["❄️", "🎶"],
        answer: "Let It Go",
        hint: "Frozen's breakout song",
        difficulty: "easy",
      },
      {
        id: "song-05",
        category: "songs",
        emojis: ["😊", "🎶"],
        answer: "Happy",
        hint: "Pharrell Williams' feel-good hit",
        difficulty: "easy",
      },
      {
        id: "song-06",
        category: "songs",
        emojis: ["🃏", "😐"],
        answer: "Poker Face",
        hint: "Lady Gaga's hit",
        difficulty: "easy",
      },
      {
        id: "song-07",
        category: "songs",
        emojis: ["😈", "🧑"],
        answer: "Bad Guy",
        hint: "Billie Eilish's signature song",
        difficulty: "easy",
      },
      {
        id: "song-08",
        category: "songs",
        emojis: ["🔦", "🌃"],
        answer: "Blinding Lights",
        hint: "The Weeknd's 80s-inspired hit",
        difficulty: "easy",
      },
      {
        id: "song-09",
        category: "songs",
        emojis: ["🏙️", "🛣️", "🐎"],
        answer: "Old Town Road",
        hint: "Lil Nas X country-rap hit",
        difficulty: "easy",
      },
      {
        id: "song-10",
        category: "songs",
        emojis: ["⬆️", "🏙️", "🎺"],
        answer: "Uptown Funk",
        hint: "Mark Ronson & Bruno Mars",
        difficulty: "easy",
      },
      {
        id: "song-11",
        category: "songs",
        emojis: ["🎆", "🎇"],
        answer: "Firework",
        hint: "Katy Perry's explosive hit",
        difficulty: "easy",
      },
      {
        id: "song-12",
        category: "songs",
        emojis: ["🕺", "💃", "🌀"],
        answer: "Shake It Off",
        hint: "Taylor Swift's dance anthem",
        difficulty: "easy",
      },
      {
        id: "song-13",
        category: "songs",
        emojis: ["🧟", "🌕", "🕺"],
        answer: "Thriller",
        hint: "Michael Jackson's Halloween classic",
        difficulty: "easy",
      },
      {
        id: "song-14",
        category: "songs",
        emojis: ["🧑‍🦱", "👖"],
        answer: "Billie Jean",
        hint: "Michael Jackson's moonwalk hit",
        difficulty: "easy",
      },
      {
        id: "song-15",
        category: "songs",
        emojis: ["👋", "🧑"],
        answer: "Hey Jude",
        hint: "The Beatles' singalong",
        difficulty: "easy",
      },
      {
        id: "song-16",
        category: "songs",
        emojis: ["⏳", "🎸"],
        answer: "Yesterday",
        hint: "Beatles song about the past",
        difficulty: "easy",
      },
      {
        id: "song-18",
        category: "songs",
        emojis: ["👊", "🦶", "🎸"],
        answer: "We Will Rock You",
        hint: "Queen's stadium anthem",
        difficulty: "easy",
      },
      {
        id: "song-19",
        category: "songs",
        emojis: ["🙅‍♂️", "🛑", "🙏"],
        answer: "Don't Stop Believin'",
        hint: "Journey's karaoke favorite",
        difficulty: "easy",
      },
      {
        id: "song-20",
        category: "songs",
        emojis: ["🌍", "🌧️", "🎶"],
        answer: "Africa",
        hint: "Toto's continent hit",
        difficulty: "easy",
      },
    ],
    medium: [
      {
        id: "song-17",
        category: "songs",
        emojis: ["👑", "🎸"],
        answer: "Killer Queen",
        hint: "Queen's glam rock hit",
        difficulty: "medium",
      },
      {
        id: "song-35",
        category: "songs",
        emojis: ["💔", "👤"],
        answer: "Someone Like You",
        hint: "Adele's emotional ballad",
        difficulty: "medium",
      },
      {
        id: "song-38",
        category: "songs",
        emojis: ["🚀", "👨‍🚀", "🌕"],
        answer: "Space Oddity",
        hint: "David Bowie's astronaut song",
        difficulty: "medium",
      },
      {
        id: "song-40",
        category: "songs",
        emojis: ["🎶", "🐦", "🏠"],
        answer: "Blackbird",
        hint: "The Beatles' acoustic classic",
        difficulty: "medium",
      },
      {
        id: "song-41",
        category: "songs",
        emojis: ["🌵", "🎶"],
        answer: "Desert Rose",
        hint: "Sting's world music hit",
        difficulty: "medium",
      },
      {
        id: "song-42",
        category: "songs",
        emojis: ["🎤", "🔥", "👊"],
        answer: "Eye of the Tiger",
        hint: "Survivor's fight anthem",
        difficulty: "medium",
      },
      {
        id: "song-43",
        category: "songs",
        emojis: ["🦄", "🎸"],
        answer: "Purple Rain",
        hint: "Prince's classic",
        difficulty: "medium",
      },
      {
        id: "song-44",
        category: "songs",
        emojis: ["🕰️", "🛣️"],
        answer: "Time After Time",
        hint: "Cyndi Lauper's 80s ballad",
        difficulty: "medium",
      },
      {
        id: "song-45",
        category: "songs",
        emojis: ["🐉", "🔥"],
        answer: "Dragonfly",
        hint: "A lesser-known track",
        difficulty: "medium",
      },
      {
        id: "song-46",
        category: "songs",
        emojis: ["🌹", "🎶", "👨‍🎤"],
        answer: "November Rain",
        hint: "Guns N' Roses epic ballad",
        difficulty: "medium",
      },
      {
        id: "song-47",
        category: "songs",
        emojis: ["🎸", "🏜️"],
        answer: "Hotel California",
        hint: "Eagles' classic rock hit",
        difficulty: "medium",
      },
      {
        id: "song-48",
        category: "songs",
        emojis: ["🎹", "🌧️"],
        answer: "Piano Man",
        hint: "Billy Joel's storytelling song",
        difficulty: "medium",
      },
      {
        id: "song-49",
        category: "songs",
        emojis: ["🌊", "🏝️"],
        answer: "Kokomo",
        hint: "The Beach Boys' tropical hit",
        difficulty: "medium",
      },
      {
        id: "song-50",
        category: "songs",
        emojis: ["🍀", "🎶"],
        answer: "Brown Eyed Girl",
        hint: "Van Morrison's classic",
        difficulty: "medium",
      },
      {
        id: "song-39",
        category: "songs",
        emojis: ["🧊", "❤️"],
        answer: "Cold Heart",
        hint: "Elton John & Dua Lipa",
        difficulty: "medium",
      },
    ],
    hard: [
      {
        id: "song-51",
        category: "songs",
        emojis: ["🌪️", "🧙‍♂️", "🏰"],
        answer: "Bohemian Rhapsody",
        hint: "Queen's operatic masterpiece",
        difficulty: "hard",
      },
      {
        id: "song-52",
        category: "songs",
        emojis: ["🌌", "🚀", "👨‍🚀"],
        answer: "Starman",
        hint: "David Bowie's cosmic tune",
        difficulty: "hard",
      },
      {
        id: "song-53",
        category: "songs",
        emojis: ["🕰️", "⏳", "😢"],
        answer: "The Sound of Silence",
        hint: "Simon & Garfunkel's classic",
        difficulty: "hard",
      },
      {
        id: "song-54",
        category: "songs",
        emojis: ["🎩", "🐇", "🎶"],
        answer: "White Rabbit",
        hint: "Jefferson Airplane's psychedelic hit",
        difficulty: "hard",
      },
      {
        id: "song-55",
        category: "songs",
        emojis: ["🌃", "🌠", "🛸"],
        answer: "Space Cowboy",
        hint: "Steve Miller Band's mellow tune",
        difficulty: "hard",
      },
      {
        id: "song-56",
        category: "songs",
        emojis: ["🕷️", "🕸️", "🎸"],
        answer: "Spiderwebs",
        hint: "No Doubt's ska punk hit",
        difficulty: "hard",
      },
      {
        id: "song-57",
        category: "songs",
        emojis: ["🦊", "🎸", "🔥"],
        answer: "Fox on the Run",
        hint: "Sweet's glam rock hit",
        difficulty: "hard",
      },
      {
        id: "song-58",
        category: "songs",
        emojis: ["⚡", "🚀", "🎸"],
        answer: "Rocket Man",
        hint: "Elton John's space anthem",
        difficulty: "hard",
      },
      {
        id: "song-59",
        category: "songs",
        emojis: ["🎤", "🕶️", "🎸"],
        answer: "Black Hole Sun",
        hint: "Soundgarden's grunge classic",
        difficulty: "hard",
      },
      {
        id: "song-60",
        category: "songs",
        emojis: ["🌪️", "🎸", "😡"],
        answer: "Smells Like Teen Spirit",
        hint: "Nirvana's grunge anthem",
        difficulty: "hard",
      },
      {
        id: "song-61",
        category: "songs",
        emojis: ["🌑", "🧙‍♂️", "🎵"],
        answer: "Dark Side of the Moon",
        hint: "Pink Floyd's iconic album",
        difficulty: "hard",
      },
      {
        id: "song-62",
        category: "songs",
        emojis: ["💀", "🎸", "🎤"],
        answer: "Master of Puppets",
        hint: "Metallica's thrash metal classic",
        difficulty: "hard",
      },
      {
        id: "song-63",
        category: "songs",
        emojis: ["🚂", "💨", "🎸"],
        answer: "Runaway Train",
        hint: "Soul Asylum's 90s hit",
        difficulty: "hard",
      },
      {
        id: "song-64",
        category: "songs",
        emojis: ["🌧️", "🎤", "🎹"],
        answer: "November Rain",
        hint: "Guns N' Roses epic ballad (repeated)",
        difficulty: "hard",
      },
      {
        id: "song-65",
        category: "songs",
        emojis: ["🎭", "🎶", "😈"],
        answer: "Sympathy for the Devil",
        hint: "The Rolling Stones classic",
        difficulty: "hard",
      },
      {
        id: "song-66",
        category: "songs",
        emojis: ["👁️‍🗨️", "🎤", "🎸"],
        answer: "Eye in the Sky",
        hint: "The Alan Parsons Project hit",
        difficulty: "hard",
      },
    ],
  },
  brands: {
    easy: [
      {
        id: "brand-01",
        category: "brands",
        emojis: ["🍏", "💻", "📱"],
        answer: "Apple",
        hint: "iPhone and Mac",
        difficulty: "easy",
      },
      {
        id: "brand-02",
        category: "brands",
        emojis: ["👟", "✔️"],
        answer: "Nike",
        hint: "Just do it",
        difficulty: "easy",
      },
      {
        id: "brand-03",
        category: "brands",
        emojis: ["🍔", "🍟", "🍔"],
        answer: "McDonald's",
        hint: "Golden arches",
        difficulty: "easy",
      },
      {
        id: "brand-04",
        category: "brands",
        emojis: ["☕", "🟢", "🧜‍♀️"],
        answer: "Starbucks",
        hint: "Famous for coffee",
        difficulty: "easy",
      },
      {
        id: "brand-05",
        category: "brands",
        emojis: ["🥤", "🔴", "🤍"],
        answer: "Coca-Cola",
        hint: "Classic soda",
        difficulty: "easy",
      },
      {
        id: "brand-06",
        category: "brands",
        emojis: ["🥤", "🔵", "🔴"],
        answer: "Pepsi",
        hint: "Coke's main rival",
        difficulty: "easy",
      },
      {
        id: "brand-08",
        category: "brands",
        emojis: ["🔍", "🌐"],
        answer: "Google",
        hint: "Search engine giant",
        difficulty: "easy",
      },
      {
        id: "brand-09",
        category: "brands",
        emojis: ["🛒", "📦", "🌎"],
        answer: "Amazon",
        hint: "Online shopping behemoth",
        difficulty: "easy",
      },
      {
        id: "brand-10",
        category: "brands",
        emojis: ["📘", "👥"],
        answer: "Facebook",
        hint: "Social network with a blue logo",
        difficulty: "easy",
      },
      {
        id: "brand-11",
        category: "brands",
        emojis: ["🐦", "💬"],
        answer: "Twitter",
        hint: "Microblogging bird",
        difficulty: "easy",
      },
      {
        id: "brand-29",
        category: "brands",
        emojis: ["🖥️", "💻", "💡"],
        answer: "Microsoft",
        hint: "Windows maker",
        difficulty: "easy",
      },
      {
        id: "brand-30",
        category: "brands",
        emojis: ["🍕", "🧀"],
        answer: "Domino's",
        hint: "Pizza chain",
        difficulty: "easy",
      },
      {
        id: "brand-31",
        category: "brands",
        emojis: ["🛍️", "🏷️"],
        answer: "Walmart",
        hint: "Big retail store",
        difficulty: "easy",
      },
      {
        id: "brand-32",
        category: "brands",
        emojis: ["🎥", "🎞️"],
        answer: "Netflix",
        hint: "Streaming service",
        difficulty: "easy",
      },
      {
        id: "brand-34",
        category: "brands",
        emojis: ["🐦", "🔷"],
        answer: "LinkedIn",
        hint: "Professional social network",
        difficulty: "easy",
      },
      {
        id: "brand-35",
        category: "brands",
        emojis: ["📦", "🛍️"],
        answer: "eBay",
        hint: "Online auction",
        difficulty: "easy",
      },
      {
        id: "brand-36",
        category: "brands",
        emojis: ["🍩", "☕"],
        answer: "Dunkin'",
        hint: "Coffee and donuts",
        difficulty: "easy",
      },
      {
        id: "brand-37",
        category: "brands",
        emojis: ["🍫", "🐻"],
        answer: "Haribo",
        hint: "Gummy bears",
        difficulty: "easy",
      },
      {
        id: "brand-38",
        category: "brands",
        emojis: ["🎮", "🕹️"],
        answer: "Nintendo",
        hint: "Video game company",
        difficulty: "easy",
      },
      {
        id: "brand-40",
        category: "brands",
        emojis: ["📦", "🚚"],
        answer: "FedEx",
        hint: "Parcel delivery",
        difficulty: "easy",
      },
    ],
    medium: [
      {
        id: "brand-07",
        category: "brands",
        emojis: ["👟", "⚽"],
        answer: "Adidas",
        hint: "Three stripes sportswear",
        difficulty: "medium",
      },
      {
        id: "brand-12",
        category: "brands",
        emojis: ["📸", "🟣", "🟠"],
        answer: "Instagram",
        hint: "Photo-sharing app",
        difficulty: "medium",
      },
      {
        id: "brand-13",
        category: "brands",
        emojis: ["▶️", "📺"],
        answer: "YouTube",
        hint: "Video platform",
        difficulty: "medium",
      },
      {
        id: "brand-14",
        category: "brands",
        emojis: ["📱", "🖥️", "🇰🇷"],
        answer: "Samsung",
        hint: "Korean electronics giant",
        difficulty: "medium",
      },
      {
        id: "brand-15",
        category: "brands",
        emojis: ["🎮", "🎧"],
        answer: "Sony",
        hint: "PlayStation and Walkman",
        difficulty: "medium",
      },
      {
        id: "brand-18",
        category: "brands",
        emojis: ["🚗", "🇯🇵"],
        answer: "Toyota",
        hint: "Reliable Japanese cars",
        difficulty: "medium",
      },
      {
        id: "brand-19",
        category: "brands",
        emojis: ["🚙", "🏍️"],
        answer: "Honda",
        hint: "Japanese car and bike maker",
        difficulty: "medium",
      },
      {
        id: "brand-20",
        category: "brands",
        emojis: ["🚗", "🇺🇸"],
        answer: "Ford",
        hint: "American automaker",
        difficulty: "medium",
      },
      {
        id: "brand-22",
        category: "brands",
        emojis: ["🚙", "🇰🇷"],
        answer: "Hyundai",
        hint: "Korean car brand",
        difficulty: "medium",
      },
      {
        id: "brand-39",
        category: "brands",
        emojis: ["👕", "🇯🇵"],
        answer: "Uniqlo",
        hint: "Japanese casual wear",
        difficulty: "medium",
      },
      {
        id: "brand-41",
        category: "brands",
        emojis: ["📱", "💰"],
        answer: "PayPal",
        hint: "Online payments",
        difficulty: "medium",
      },
      {
        id: "brand-42",
        category: "brands",
        emojis: ["💡", "🔌"],
        answer: "Philips",
        hint: "Electronics and lighting",
        difficulty: "medium",
      },
      {
        id: "brand-43",
        category: "brands",
        emojis: ["🎬", "🏆"],
        answer: "IMDb",
        hint: "Movie database",
        difficulty: "medium",
      },
      {
        id: "brand-44",
        category: "brands",
        emojis: ["🚀", "🌌"],
        answer: "SpaceX",
        hint: "Space exploration company",
        difficulty: "medium",
      },
      {
        id: "brand-45",
        category: "brands",
        emojis: ["🏪", "🛒"],
        answer: "7-Eleven",
        hint: "Convenience store",
        difficulty: "medium",
      },
      {
        id: "brand-46",
        category: "brands",
        emojis: ["🛫", "🌍"],
        answer: "Airbnb",
        hint: "Home rentals worldwide",
        difficulty: "medium",
      },
      {
        id: "brand-47",
        category: "brands",
        emojis: ["📖", "🔖"],
        answer: "Kindle",
        hint: "Amazon's e-reader",
        difficulty: "medium",
      },
      {
        id: "brand-48",
        category: "brands",
        emojis: ["👔", "🕴️"],
        answer: "Boss",
        hint: "Luxury fashion brand",
        difficulty: "medium",
      },
      {
        id: "brand-49",
        category: "brands",
        emojis: ["🎵", "🍎"],
        answer: "Apple Music",
        hint: "Music streaming by Apple",
        difficulty: "medium",
      },
    ],
    hard: [
      {
        id: "brand-16",
        category: "brands",
        emojis: ["🚗", "🇩🇪"],
        answer: "BMW",
        hint: "German luxury cars",
        difficulty: "hard",
      },
      {
        id: "brand-17",
        category: "brands",
        emojis: ["🚙", "⭐"],
        answer: "Mercedes-Benz",
        hint: "Luxury car with a star logo",
        difficulty: "hard",
      },
      {
        id: "brand-21",
        category: "brands",
        emojis: ["🚗", "🇩🇪"],
        answer: "Volkswagen",
        hint: "People's car from Germany",
        difficulty: "hard",
      },
      {
        id: "brand-23",
        category: "brands",
        emojis: ["🚗", "🇰🇷"],
        answer: "Kia",
        hint: "Another Korean car brand",
        difficulty: "hard",
      },
      {
        id: "brand-24",
        category: "brands",
        emojis: ["🚙", "💎"],
        answer: "Lexus",
        hint: "Toyota's luxury division",
        difficulty: "hard",
      },
      {
        id: "brand-25",
        category: "brands",
        emojis: ["🏎️", "🇩🇪"],
        answer: "Porsche",
        hint: "German sports cars",
        difficulty: "hard",
      },
      {
        id: "brand-26",
        category: "brands",
        emojis: ["🏎️", "🐎", "🇮🇹"],
        answer: "Ferrari",
        hint: "Italian supercars",
        difficulty: "hard",
      },
      {
        id: "brand-27",
        category: "brands",
        emojis: ["🏎️", "🐂", "🇮🇹"],
        answer: "Lamborghini",
        hint: "Luxury Italian sports cars",
        difficulty: "hard",
      },
      {
        id: "brand-28",
        category: "brands",
        emojis: ["👜", "💰", "🇮🇹"],
        answer: "Gucci",
        hint: "Luxury Italian fashion",
        difficulty: "hard",
      },
      {
        id: "brand-33",
        category: "brands",
        emojis: ["⌚", "💎"],
        answer: "Rolex",
        hint: "Luxury watches",
        difficulty: "hard",
      },
      {
        id: "brand-50",
        category: "brands",
        emojis: ["🏰", "🎢"],
        answer: "Disneyland",
        hint: "Theme park empire",
        difficulty: "hard",
      },
    ],
  },
};

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [gameStarted, setGameStarted] = React.useState(false);
  const [category, setCategory] = React.useState<Category | null>(null);
  const [difficulty, setDifficulty] = React.useState<Difficulty | null>(null);
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = React.useState(0);
  const [currentPuzzles, setCurrentPuzzles] = React.useState<Puzzle[]>([]);
  const [score, setScore] = React.useState(0);
  const [guess, setGuess] = React.useState("");
  const [hintUsed, setHintUsed] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState<boolean | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [gameMode, setGameMode] = React.useState<GameMode>("standard");
  const [timeRemaining, setTimeRemaining] = React.useState(60);
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [highScores, setHighScores] = React.useState<Record<GameMode, number>>({
    standard: 0,
    timed: 0,
  });
  const [bestTime, setBestTime] = React.useState<number | null>(null);
  const [answerRevealed, setAnswerRevealed] = React.useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const currentPuzzle = currentPuzzles[currentPuzzleIndex] || null;
  const totalPuzzles = currentPuzzles.length;

  // Load high scores from localStorage
  React.useEffect(() => {
    const savedHighScores = localStorage.getItem("emojiGameHighScores");
    const savedBestTime = localStorage.getItem("emojiGameBestTime");

    if (savedHighScores) {
      setHighScores(JSON.parse(savedHighScores));
    }

    if (savedBestTime) {
      setBestTime(JSON.parse(savedBestTime));
    }
  }, []);

  // Timer effect for timed mode
  React.useEffect(() => {
    if (gameStarted && gameMode === "timed") {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Time's up
            clearInterval(timerRef.current!);
            addToast({
              title: "Time's up!",
              description: `Final score: ${score}`,
              color: "danger",
            });

            setTimeout(() => {
              endGame();
            }, 2000);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [gameStarted, gameMode]);

  const startGame = (
    selectedCategory: Category,
    selectedDifficulty: Difficulty,
    selectedGameMode: GameMode = "standard"
  ) => {
    setIsLoading(true);
    setGameMode(selectedGameMode);

    // Reset timer for timed mode
    if (selectedGameMode === "timed") {
      setTimeRemaining(60);
    }

    // Reset answer revealed state
    setAnswerRevealed(false);

    // Simulate API loading
    setTimeout(() => {
      setCategory(selectedCategory);
      setDifficulty(selectedDifficulty);
      setCurrentPuzzles(puzzles[selectedCategory][selectedDifficulty]);
      setCurrentPuzzleIndex(0);
      setScore(0);
      setGameStarted(true);
      setIsLoading(false);
      setGuess("");
      setHintUsed(false);
      setIsCorrect(null);
    }, 800);
  };

  const endGame = () => {
    // Update high scores
    if (score > highScores[gameMode]) {
      const newHighScores = { ...highScores, [gameMode]: score };
      setHighScores(newHighScores);
      localStorage.setItem(
        "emojiGameHighScores",
        JSON.stringify(newHighScores)
      );

      addToast({
        title: "New High Score!",
        description: `You set a new record: ${score} points`,
        color: "success",
      });
    }

    // Update best time for timed mode
    if (gameMode === "timed" && timeRemaining > 0) {
      const timeUsed = 60 - timeRemaining;
      if (bestTime === null || timeUsed < bestTime) {
        setBestTime(timeUsed);
        localStorage.setItem("emojiGameBestTime", JSON.stringify(timeUsed));

        addToast({
          title: "New Best Time!",
          description: `You completed all puzzles in ${timeUsed} seconds`,
          color: "success",
        });
      }
    }

    // Clear timer if active
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setGameStarted(false);
    setCategory(null);
    setDifficulty(null);
    setCurrentPuzzleIndex(0);
    setCurrentPuzzles([]);
    setScore(0);
    setGuess("");
    setHintUsed(false);
    setIsCorrect(null);
    setShowConfetti(false);
  };

  const checkAnswer = () => {
    if (!currentPuzzle) return;

    const normalizedGuess = guess.trim().toLowerCase();
    const normalizedAnswer = currentPuzzle.answer.toLowerCase();

    const correct = normalizedGuess === normalizedAnswer;
    setIsCorrect(correct);

    if (correct) {
      const pointsEarned = hintUsed ? 5 : 10;
      setScore((prev) => prev + pointsEarned);
      setShowConfetti(true);

      addToast({
        title: "Correct!",
        description: `+${pointsEarned} points${hintUsed ? " (hint used)" : ""}`,
        color: "success",
      });

      // Automatically advance to next puzzle after a slightly longer delay
      // to allow the enhanced confetti animation to be visible
      setTimeout(() => {
        nextPuzzle();
        // Keep confetti visible a bit longer for better effect
        setTimeout(() => {
          setShowConfetti(false);
        }, 500);
      }, 1000);
    } else {
      addToast({
        title: "Not quite right",
        description: "Try again or use a hint",
        color: "warning",
      });
    }
  };

  const showHint = () => {
    if (!hintUsed && currentPuzzle) {
      setHintUsed(true);
      addToast({
        title: "Hint",
        description: currentPuzzle.hint,
        color: "primary",
      });
    }
  };

  const skipPuzzle = () => {
    // Penalize skipping by reducing points
    setScore((prev) => Math.max(0, prev - 2)); // Deduct 2 points for skipping

    addToast({
      title: "Puzzle Skipped",
      description: "-2 points",
      color: "warning",
    });

    // Move to next puzzle
    if (currentPuzzleIndex < totalPuzzles - 1) {
      setCurrentPuzzleIndex((prev) => prev + 1);
      setGuess("");
      setHintUsed(false);
      setIsCorrect(null);
      setAnswerRevealed(false);
    } else {
      // Game over
      addToast({
        title: "Game Complete!",
        description: `Final score: ${score}`,
        color: "primary",
      });

      setTimeout(() => {
        endGame();
      }, 1000);
    }
  };

  const restartGame = () => {
    // Keep the same category and difficulty but restart the game
    if (category && difficulty) {
      startGame(category, difficulty, gameMode);
    } else {
      // If somehow category or difficulty is null, end the game
      endGame();
    }
  };

  const showAnswer = () => {
    if (!answerRevealed && currentPuzzle) {
      setAnswerRevealed(true);

      // Penalize showing answer by reducing points
      setScore((prev) => Math.max(0, prev - 5)); // Deduct 5 points for revealing answer

      addToast({
        title: "Answer Revealed",
        description: `-5 points: "${currentPuzzle.answer}"`,
        color: "danger",
      });
    }
  };

  const nextPuzzle = () => {
    if (currentPuzzleIndex < totalPuzzles - 1) {
      setCurrentPuzzleIndex((prev) => prev + 1);
      setGuess("");
      setHintUsed(false);
      setIsCorrect(null);
      setAnswerRevealed(false);
    } else {
      // Game over
      addToast({
        title: "Game Complete!",
        description: `Final score: ${score}`,
        color: "primary",
      });

      setTimeout(() => {
        endGame();
      }, 1000);
    }
  };

  const value = {
    gameStarted,
    startGame,
    endGame,
    category,
    difficulty,
    currentPuzzle,
    score,
    totalPuzzles,
    currentPuzzleIndex,
    guess,
    setGuess,
    checkAnswer,
    showHint,
    hintUsed,
    nextPuzzle,
    isCorrect,
    isLoading,
    gameMode,
    setGameMode,
    timeRemaining,
    showConfetti,
    highScores,
    bestTime,
    skipPuzzle,
    restartGame,
    showAnswer,
    answerRevealed,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = React.useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
