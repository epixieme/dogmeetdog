import { useState } from "react";

const questionText =['whats your dogs name?', 'whats your dogs Breed?', 'where do you live?','whats your dogs age?', 'whats your dogs personality?' ]
const questionText2 =['Now Tell me about your owner(s)', 'names', 'hobbies' ]
export default function useQuestionHook(){
    
    const [currentScreen, setCurrentScreen] = useState(0)

    function nextScreen() {
        if (currentScreen < questionText.length) {
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
        questionText
      }
}
    
    