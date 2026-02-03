import React from "react"
import { useParams } from "react-router-dom"
import { getMatch } from "../data/matches"
import { useState, useEffect } from "react"
import { getTeamImage } from "../utilities/images"
import MinutoAMinuto from "../components/Game/MinutoAMinuto"

import { getLeagueImage } from "../utilities/images"
import GameInfo from "../components/Game/GameInfo"

const Game = () =>  {
    const { team1, team2, id } = useParams()
    const [match, setMatch] = useState(null)
    useEffect(() =>  {
        getMatch(team1, team2, id).then((data) => {
            setMatch(data)
            console.log(data)
        })
    }, [team1, team2, id])

    if (!match) return <div>Cargando...</div>

    return (
        <div className="flex flex-col items-center justify-center w-full mt-4 md:mt-10 px-2 sm:px-4">   
        <div className="flex items-center justify-center gap-2">
            <img src={getLeagueImage(match.league.id)} alt={match.league.name} className="h-6 w-6 sm:h-8 sm:w-8 object-contain mt-1" />
            <h1 className="text-xl sm:text-2xl font-bold text-center text-gray-300">{match.league.name}</h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full max-w-6xl bg-[#ffffff1a] rounded-lg p-3 sm:p-4 md:p-6 mt-4 md:mt-8">
            
            <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 font-semibold mt-4 md:mt-8 text-xs sm:text-sm md:text-base text-gray-400 w-full">
               <GameInfo match={match} />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold mt-6 md:mt-8 w-full">

                <h2 className="hidden sm:block text-center">{match.teams[0].name}</h2>
                <img src={getTeamImage(match.teams[0].id)} alt={match.teams[0].name} className="h-16 w-16 sm:h-20 sm:w-20 md:h-25 md:w-25 object-contain" />

                <div className="flex items-center justify-center gap-2 sm:gap-4 p-3 sm:p-4 border border-gray-700 rounded-lg">

                    {match.scores?.length > 0 ? (
                        <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-cyan-300">{match.scores[0]} - {match.scores[1]}</span>
                    ) : (
                        <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-cyan-300">-</span>
                    )}

                </div>
                

                <img src={getTeamImage(match.teams[1].id)} alt={match.teams[1].name} className="h-16 w-16 sm:h-20 sm:w-20 md:h-25 md:w-25 object-contain" />
                <h2 className="hidden sm:block text-center">{match.teams[1].name}</h2>           

            </div>

            <div className="flex sm:hidden items-center justify-between gap-4 mt-4 w-full px-4 text-sm font-semibold">
                <h2 className="text-center flex-1">{match.teams[0].name}</h2>
                <h2 className="text-center flex-1">{match.teams[1].name}</h2>
            </div>

            <div className="flex items-center justify-center gap-2 sm:gap-4 p-3 sm:p-4 border border-gray-700 rounded-lg mt-4 w-full max-w-4xl">
                    {/* <MinutoAMinuto data={match.events} /> */}
            </div>

            </div>
        </div>
    )
}

export default Game