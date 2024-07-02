import { useState } from "react"
import { TimeCard } from "../components/parts/timeCard"

type Time = {
    id: string
    title: string
    category?: string
    description?: string
    start?: Date
    end?: Date
}

type TimerList = Time[]

export const TimerPage = () => {
    const [timerList] = useState<TimerList | undefined>(
        [
            {   
                category: "string",
                title: "string",
                description: "string",
                start: undefined,
                end: undefined,
                id: "string",
            }
        ]
    )

    // const [selecting, setSelecting] = useState<Time | undefined>(undefined)

    return (
        <div>
            <TimeCard />
            <p>{JSON.stringify(timerList)}</p>
        </div>
    )
}