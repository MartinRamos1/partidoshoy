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
        <div className="flex items-center justify-center gap-2 px-4">
            <img src={getLeagueImage(match.league.id)} alt={match.league.name} className="h-6 w-6 sm:h-8 sm:w-8 object-contain mt-1 shrink-0" />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-300 truncate">{match.league.name}</h1>
        </div>
            <h3 className="text-center text-sm md:text-base font-semibold text-gray-300 truncate mt-4 ">{match.stage_round_name || "-"}</h3>
        <div className="flex flex-col items-center justify-center w-full max-w-6xl bg-[#ffffff1a] rounded-lg p-3 sm:p-4 md:p-6 mt-4 md:mt-5">
            
            <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 font-semibold mt-4 md:mt-8 text-xs sm:text-sm md:text-base text-gray-400 w-full">
               <GameInfo match={match} />
            </div>

            <div className="flex flex-row items-center justify-center gap-1 sm:gap-2 md:gap-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-6 md:mt-8 w-full min-w-0">

                <div className="flex flex-row items-center gap-1 sm:gap-2 md:gap-3 flex-1 justify-end min-w-0">
                    <h2 className="text-right text-gray-200 truncate text-sm sm:text-base md:text-xl lg:text-4xl max-w-[80px] sm:max-w-[120px] md:max-w-[180px] lg:max-w-[250px]">{match.teams[0].name}</h2>
                    <img src={getTeamImage(match.teams[0].id)} alt={match.teams[0].name} className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain shrink-0" />
                </div>

                <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 p-1 sm:p-2 md:p-4 min-w-[60px] sm:min-w-[80px] md:min-w-[120px] shrink-0">
                    {match.scores?.length > 0 ? (
                        <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-100 whitespace-nowrap"> <span className="text-green-700 text-xl sm:text-xl md:text-3xl lg:text-4xl">{match.status.symbol_name == "Pen" ? "(" + match.penalties[0] + ")" : ""}</span> {match.scores[0]} - {match.scores[1]} <span className="text-green-700 text-xl sm:text-lg md:text-3xl lg:text-4xl">{match.status.symbol_name == "Pen" ? "(" + match.penalties[1] + ")" : ""}</span></span>
                    ) : (
                        <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-100">-</span>
                    )}
                </div>
                
                <div className="flex flex-row items-center gap-1 sm:gap-2 md:gap-3 flex-1 justify-start min-w-0">
                    <img src={getTeamImage(match.teams[1].id)} alt={match.teams[1].name} className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain shrink-0" />
                    <h2 className="text-left text-gray-200 truncate text-sm sm:text-base md:text-xl lg:text-4xl max-w-[80px] sm:max-w-[120px] md:max-w-[180px] lg:max-w-[250px]">{match.teams[1].name}</h2>           
                </div>

            </div>

            <div className="w-full mt-6 overflow-hidden">
            {match.scores?.length > 0 && (match.teams[0].goals?.length > 0 || match.teams[1].goals?.length > 0) && (
                
                <div className="flex items-start justify-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base font-semibold w-full min-w-0">
                    {/* Goles equipo local */}
                    <div className="flex-1 flex flex-col gap-2 items-end pr-2 sm:pr-3 min-w-0">
                        {match.teams[0].goals?.map((goal, index) => (
                            <div key={index} className="flex items-center gap-1 sm:gap-2 text-gray-300 min-w-0">
                                <span className="text-right truncate">{goal.player_sname} <span className="text-gray-300 truncate">
                        {goal.goal_type == "Pen" ? "(P)" : goal.goal_type == "E.C" ? "(E.C)" : ""}
                      </span></span>
                                <span className="text-green-500 font-bold shrink-0">{goal.time_to_display}</span>
                            </div>
                        ))}
                    </div>
                    
                    {/* Línea divisoria - alineada con el guion del marcador */}
                    <div className="flex min-w-[100px] sm:min-w-[120px] md:min-w-[140px] justify-center items-center shrink-0">
                        <div className="w-px bg-gray-600 min-h-[40px] h-full"></div>
                    </div>
                    
                    {/* Goles equipo visitante */}
                    <div className="flex-1 flex flex-col gap-2 items-start pl-2 sm:pl-3 min-w-0">
                        {match.teams[1].goals?.map((goal, index) => (
                            <div key={index} className="flex items-center gap-1 sm:gap-2 text-gray-300 min-w-0">
                                <span className="text-green-500 font-bold shrink-0">{goal.time_to_display}</span>
                                <span className="text-left truncate">{goal.player_sname} <span className="text-gray-300 truncate">
                        {goal.goal_type == "Pen" ? "(P)" : goal.goal_type == "E.C" ? "(E.C)" : ""}
                      </span></span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            </div>

            <div className="flex items-center justify-center gap-2 sm:gap-4 p-2 sm:p-3 md:p-4 border border-gray-700 rounded-lg mt-4 w-full max-w-4xl overflow-hidden">
                     <MinutoAMinuto data={match.events} /> 
            </div>

            </div>
        </div>
    )
}

export default Game