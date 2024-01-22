import { Question } from "@/components/features"
import { Button } from "@/components/shared"
export default function Questions(){

    return (
        <>
        <Question questionText='test'/>
        <Button route="/question2" btnText={"click me"} />
        </>
    )
}