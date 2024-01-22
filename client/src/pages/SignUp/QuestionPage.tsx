import { Question } from "@/components/features"
import { Button } from "@/components/shared"
import { useState } from "react"

export default function Questions(){

const questionText =['whats your dogs name?', 'whats your dogs age?']

    const [currentScreen, setCurrentScreen] = useState(0)
    function nextScreen() {
        if (currentScreen < 3) {
          setCurrentScreen(currentScreen + 1);
        } 
      }
    
      function previousScreen() {
        if (currentScreen > 0) {
          setCurrentScreen(currentScreen - 1);
        }
      }
    

    return (
        <>
        <Question questionText={questionText[currentScreen]} />
        <Button btnText={"click me"} onClick={nextScreen}/>
        </>
    )
}