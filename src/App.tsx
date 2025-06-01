import React from "react";
import { Card, CardBody, Button, Input, Tabs, Tab, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, addToast } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ThemeSwitcher } from "./components/theme-switcher";
import { GameScreen } from "./components/game-screen";
import { StartScreen } from "./components/start-screen";
import { GameProvider } from "./components/game-provider";
import { BackgroundDecorations } from "./components/background-decorations";

export default function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden animated-gradient-bg">
      <BackgroundDecorations />
      
      <header className="w-full py-2 px-2 border-b border-divider/30 backdrop-blur-md relative z-10">
        <div className="max-w-4xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary/20 p-2 rounded-full shadow-lg">
              <Icon icon="lucide:puzzle" className="text-primary text-2xl" />
            </div>
            <h1 className="text-xl font-semibold text-foreground">Emoji Guess</h1>
          </div>
          <ThemeSwitcher />
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center relative z-10">
        <GameProvider>
          <div className="w-full max-w-lg">
            <Card className="shadow-xl card-gradient">
              <CardBody className="p-6">
                <GameScreen />
              </CardBody>
            </Card>
          </div>
        </GameProvider>
      </main>
      
      <footer className="py-4 text-center text-small text-foreground-400 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto">
          Emoji Guess Game &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}