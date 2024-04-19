import { useEffect, useState } from "react";

export default function useQuestionHook(questionText: string[]) {
  const getCurrentScreenIndex = window.localStorage.getItem(
    "currentIndex"
  ) as string;
  const [currentScreen, setCurrentScreen] = useState(
    JSON.parse(getCurrentScreenIndex) ?? 0
  );

  useEffect(() => {
    window.localStorage.setItem("currentIndex", JSON.stringify(currentScreen));
  });

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
