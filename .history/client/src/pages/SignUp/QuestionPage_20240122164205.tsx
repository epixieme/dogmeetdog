import { Question } from "@/components/features"
import { Button } from "@/components/shared"
import { useState } from "react"
export default function Questions(){
const questionText =['whats your dogs name?', 'whats your dogs name?']

    const [current, setCurrent] = useState(0)


    return (
        <>
        <Question questionText={questionText[current]} />
        <Button route="/question2" btnText={"click me"} onClick={setCurrent(current=>current + 1)}/>
        </>
    )
}