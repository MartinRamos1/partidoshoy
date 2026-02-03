import { getArgentinaTime } from "../utilities/time.jsx"
import React from "react"
import Team from "./Team"
import { useNavigate } from "react-router-dom"

const Match = ({ match }) => {
    const navigate = useNavigate()
    return (
        <div className="py-3 sm:py-4 first:pt-0 last:pb-0 rounded-lg hover:bg-[#ffffff1a] " onClick={() => navigate(`/game/${match.teams[0].url_name}-vs-${match.teams[1].url_name}/${match.id}`)}>
            <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 cursor-pointer p-2 sm:p-4">

                    <div className="min-w-[40px] sm:min-w-[60px]">
                        <h3 className="text-sm sm:text-lg md:text-2xl font-semibold text-green-600 text-center">{match.status.enum != 1 ? match.game_time_status_to_display : ""}</h3>
                    </div>


                {/* Equipo Local */}

                <Team team={match.teams[0]} local={true} />

                {match.scores?.length > 0 ? (
                    <div className="flex min-w-[80px] sm:min-w-[100px] md:min-w-[120px] flex-col items-center justify-center px-2 sm:px-3 md:px-4 py-2 sm:py-3">
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-300">{match.scores[0]} - {match.scores[1]}</span>
                    </div>
                ) : (
                    <div className="flex min-w-[80px] sm:min-w-[100px] md:min-w-[120px] flex-col items-center justify-center px-2 sm:px-3 md:px-4 py-2 sm:py-3">
                        <span className="text-sm sm:text-base md:text-xl font-bold text-gray-300">{getArgentinaTime(match.start_time)}</span>
                    </div>
                )}   
                

                {/* Equipo Visitante */}
                <Team team={match.teams[1]} local={false} />

            </div>

            {match.scores?.length > 0 && (match.teams[0].goals?.length > 0 || match.teams[1].goals?.length > 0) && (
                <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-6 px-2 sm:px-4 mt-2">
                    <div className="flex-1 w-1/2 ">
                        {match.teams[0].goals?.map((goal, index) => (
                            <div key={index} className="flex justify-center items-center text-xs sm:text-sm">
                                {goal.player_sname} {goal.time_to_display}
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex-1 text-left w-1/2">
                        {match.teams[1].goals?.map((goal, index) => (
                            <div key={index} className="flex justify-center items-center text-xs sm:text-sm">
                                {goal.player_sname} {goal.time_to_display}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Match
