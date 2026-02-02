import { getArgentinaTime } from "../utilities/time"
import React from "react"
import Team from "./Team"

const Match = ({ match }: { match: any }) => {
    return (
        <div className="py-4 first:pt-0 last:pb-0">
            <div className="flex items-center justify-center gap-6 ">

                {match.status.enum != 1 && (
                    <div className="">
                        <h3 className="text-2xl font-semibold text-green-600">{match.game_time_status_to_display}</h3>
                    </div>
                )}


                {/* Equipo Local */}

                <Team team={match.teams[0]} local={true} />

                {match.scores?.length > 0 ? (
                    <div className="flex min-w-[120px] flex-col items-center justify-center px-4 py-3">
                        <span className="text-2lg font-bold text-cyan-300">{match.scores[0]} - {match.scores[1]}</span>
                    </div>
                ) : (
                    <div className="flex min-w-[120px] flex-col items-center justify-center px-4 py-3">
                        <span className="text-lg font-bold text-cyan-300">{getArgentinaTime(match.start_time)}</span>
                    </div>
                )}
                
                
                

                {/* Equipo Visitante */}
                <Team team={match.teams[1]} local={false} />

            </div>
        </div>
    )
}

export default Match