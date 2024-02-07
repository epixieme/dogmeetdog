import { useState } from "react";

export default function useQuestionHook(questionText: string[]) {
  const [currentScreen, setCurrentScreen] = useState(0);

  function nextScreen() {
    if (currentScreen < questionText.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  }

  function previousScreen() {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  }

  return {
    currentScreen,
    nextScreen,
    previousScreen,
  };
}
