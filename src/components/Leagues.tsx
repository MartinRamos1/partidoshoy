import { useEffect, useState } from "react"
import getMatches from "../data/matches"
import Match from "./Match.tsx"
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
        <div className="flex w-full flex-col items-center gap-6">
            {allLeagues.map((league: any) => (
                <div key={league.id} className="flex w-full flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-950/60 p-6 shadow-lg">
                    <div className="flex items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
                        <img src={getLeagueImage(league.id)} alt={league.name} className="h-10 w-10 object-contain" />
                        <h2 className="text-xl font-semibold text-slate-100">{league.name}</h2>
                    </div>

                    <div className="flex flex-col divide-y divide-slate-800">
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