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
                        <h3 className={`text-sm sm:text-lg md:text-2xl font-semibold text-green-700 text-center ${match.status.enum == 3 ? "text-red-700" : ""}`}>{match.status.enum != 1 ? match.game_time_status_to_display : ""}</h3>
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

            
             <div className="">
             {match.scores?.length > 0 && (match.teams[0].goals?.length > 0 || match.teams[1].goals?.length > 0) && (
                <div className="flex items-start justify-center gap-2 sm:gap-4 md:gap-6 px-2 sm:px-4 mt-4">
                    
                    {/* Espaciador izquierdo - mismo ancho que el tiempo */}
                    <div className="min-w-[40px] sm:min-w-[60px]"></div>

                    {/* Goles equipo local */}
                    <div className="flex flex-col gap-2 flex-1 items-end pr-2 sm:pr-3 md:pr-4">
                        {match.teams[0].goals?.map((goal, index) => (
                            <div key={index} className="flex justify-end items-center text-xs sm:text-sm">
                                <span className="text-gray-300">{goal.player_sname}</span>
                                <span className="text-green-600 font-bold ml-2">{goal.time_to_display}</span>
                            </div>
                        ))}
                    </div>
                    
                    {/* Línea divisoria - mismo ancho que el marcador */}
                    <div className="flex min-w-[80px] sm:min-w-[100px] md:min-w-[120px] justify-center px-2 sm:px-3 md:px-4">
                        <div className="w-px bg-gray-600 min-h-[40px] h-full"></div>
                    </div>
                    
                    {/* Goles equipo visitante */}
                    <div className="flex flex-col gap-2 flex-1 items-start pl-2 sm:pl-3 md:pl-4">
                        {match.teams[1].goals?.map((goal, index) => (
                            <div key={index} className="flex items-center text-xs sm:text-sm">
                                <span className="text-gray-300">{goal.player_sname}</span>
                                <span className="text-green-600 font-bold ml-2">{goal.time_to_display}</span>
                            </div>
                        ))}
                    </div>

                    {/* Espaciador derecho - para equilibrar */}
                    <div className="min-w-0"></div>
                </div>
            )}
                
                
            </div>   
           
        </div>
    )
}

export default Match
