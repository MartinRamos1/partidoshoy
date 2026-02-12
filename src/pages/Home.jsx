import Leagues from "../components/Leagues"
import { useState, useEffect } from 'react'
import { formatDateToDDMMYYYY, addDayToDate, subtractDayFromDate, getDateLabel } from '../utilities/time'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const Home = () => {

    const [matchesDate, setMatchesDate] = useState(formatDateToDDMMYYYY(new Date()))

  useEffect(() => {
    const today = formatDateToDDMMYYYY(new Date())
    setMatchesDate(today)
    console.log(matchesDate)
    
  }, [])

  return (
    <main className="min-h-screen text-slate-100">
            <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10">
                <div className="flex items-center justify-center gap-2 sm:gap-4 px-2">
                    <button className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 hover:text-gray-500 cursor-pointer shrink-0" onClick={() => {
                        const newDate = subtractDayFromDate(matchesDate)
                        console.log(newDate)
                        setMatchesDate(newDate)
                    }}><IoIosArrowBack /></button>
                    <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center truncate">{getDateLabel(matchesDate)}</h1>
                    <button className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 hover:text-gray-500 cursor-pointer shrink-0" onClick={() => {
                        const newDate = addDayToDate(matchesDate)
                        console.log(newDate)
                        setMatchesDate(newDate)
                    }}><IoIosArrowForward /></button>
                </div>
                <section className="mt-6 sm:mt-8 md:mt-10 rounded-3xl">

                    <div className="mt-4 sm:mt-6">
                        <Leagues date={matchesDate} />
                    </div>
                </section>
            </div>
        </main>
  )
}

export default Home