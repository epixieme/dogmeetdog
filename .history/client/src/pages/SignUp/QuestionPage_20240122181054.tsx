import { Question } from "@/components/features"
import { Button } from "@/components/shared"
import { useState } from "react"
import './signUp.css'

export default function Questions(){

const questionText =['whats your dogs name?', 'whats your dogs Breed?', 'where do you live?','whats your dogs age?', 'whats your dogs personality?' ]
const questionText2 =['Now Tell me about your owner(s)', 'names', 'hobbies' ]

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
        <div className='questionText'>
        <Question questionText={questionText[currentScreen]} />
        <Button btnText={"click me"} onClick={nextScreen}/>
        </div>
    )
}