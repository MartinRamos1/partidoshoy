import { useEffect, useState } from "react"
import { getMatches } from "../data/matches"
import Match from "./Match"
import { getLeagueImage } from "../utilities/images"
import React from "react"


const Leagues = ({ date }) => {
    const [allLeagues, setAllLeagues] = useState([])

    useEffect(() => {
        getMatches(date).then((data) => {
            if (data) {
                setAllLeagues(data)
                console.log(data)
            }
        })
    }, [date])

    
    return (
        <div className="flex w-full flex-col items-center gap-4 sm:gap-6 overflow-hidden">
            {allLeagues.map((league) => (
                <div key={league.id} className="flex w-full flex-col gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl bg-[#1D1D1D] p-3 sm:p-4 md:p-6 shadow-lg text-[#EAEAEA] min-w-0">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-[#262626] p-3 sm:p-4 min-w-0">
                        <img src={getLeagueImage(league.id)} alt={league.name} className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain shrink-0" />
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-slate-100 truncate">{league.name}</h2>
                    </div>

                    <div className="flex flex-col divide-y divide-gray-800">
                        {league.games.map((game) => (
                            <Match key={game.id} match={game} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Leagues
