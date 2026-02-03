import { useEffect, useState } from "react"
import { getMatches } from "../data/matches"
import Match from "./Match"
import { getLeagueImage } from "../utilities/images"
import React from "react"


const Leagues = () => {
    const [allLeagues, setAllLeagues] = useState([])

    useEffect(() => {
        getMatches().then((data) => {
            setAllLeagues(data)
            console.log(data)   
        })
    }, [])

    
    return (
        <div className="flex w-full flex-col items-center gap-4 sm:gap-6">
            {allLeagues.map((league: any) => (
                <div key={league.id} className="flex w-full flex-col gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl border bg-[#1D1D1D] border-gray-700 p-3 sm:p-4 md:p-6 shadow-lg text-[#EAEAEA]">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-gray-700 bg-[#262626] p-3 sm:p-4">
                        <img src={getLeagueImage(league.id)} alt={league.name} className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
                        <h2 className="text-lg sm:text-xl font-semibold text-slate-100">{league.name}</h2>
                    </div>

                    <div className="flex flex-col divide-y divide-gray-800">
                        {league.games.map((game: any) => (
                            <Match key={game.id} match={game} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Leagues