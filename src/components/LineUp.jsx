import { getTeamImage } from "../utilities/images"
import { useState } from "react"

const LineUp = ({ match }) => {
    const [selectedTeam, setSelectedTeam] = useState(0)
    
    if (!match?.players?.lineups?.teams) {
        return (
            <div className="flex items-center justify-center w-full text-gray-300 p-8">
                <p>No hay información de alineaciones disponible</p>
            </div>
        )
    }

    const currentTeam = match.players.lineups.teams[selectedTeam]
    const missingPlayers = match.players.missing_players?.[selectedTeam] || []

    return (
        <div className="flex flex-col w-full text-gray-300">
            {/* Selector de equipos */}
            <div className="flex items-center justify-center gap-4 w-full mb-6">
                <button
                    onClick={() => setSelectedTeam(0)}
                    className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${
                        selectedTeam === 0 
                            ? 'bg-[#ffffff1a]' 
                            : 'hover:bg-[#ffffff0d]'
                    }`}
                >
                    <img 
                        src={getTeamImage(match.teams[0].id)} 
                        alt={match.teams[0].name} 
                        className="h-8 w-8 sm:h-10 sm:w-10 object-contain" 
                    />
                    <span className="text-sm sm:text-base md:text-lg font-semibold">{match.teams[0].short_name}</span>
                </button>
                
                <button
                    onClick={() => setSelectedTeam(1)}
                    className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${
                        selectedTeam === 1 
                            ? 'bg-[#ffffff1a]' 
                            : 'hover:bg-[#ffffff0d]'
                    }`}
                >
                    <img 
                        src={getTeamImage(match.teams[1].id)} 
                        alt={match.teams[1].name} 
                        className="h-8 w-8 sm:h-10 sm:w-10 object-contain" 
                    />
                    <span className="text-sm sm:text-base md:text-lg font-semibold">{match.teams[1].short_name}</span>
                </button>
            </div>

            {/* Formación */}
            <div className="text-center mb-4">
                <span className="text-sm sm:text-base text-gray-400">Formación: </span>
                <span className="text-base sm:text-lg font-semibold text-gray-200">{currentTeam.formation}</span>
                <span className="ml-3 text-sm sm:text-base text-green-600 font-semibold">{currentTeam.status}</span>
            </div>

            
            {/* Director Técnico */}
            {currentTeam.staff && currentTeam.staff.length > 0 && (
                <div className="w-full border-t border-b border-gray-700 mb-6">
                    <div className="flex items-center gap-3 py-4 px-2">
                        <span className="text-gray-400 font-semibold text-sm sm:text-base w-6 sm:w-8">DT</span>
                        <div>
                            <span className="text-gray-200 text-sm sm:text-base md:text-lg font-medium">{currentTeam.staff[0].name}</span>             
                        </div>
                    </div>
                </div>
            )}

            {/* Titulares */}
            <div className="w-full mb-6">
                <h3 className="text-sm sm:text-base font-semibold text-gray-400 mb-3">TITULARES</h3>
                <div className="flex flex-col gap-1">
                    {currentTeam.starting.map((player, idx) => (
                        <div key={player.jersey_num || idx} 
                             className="flex items-center gap-3 py-2 px-2 hover:bg-[#ffffff0d] rounded transition-colors">
                            <span className="text-gray-400 font-semibold text-sm sm:text-base w-6 sm:w-8">{player.jersey_num}</span>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-200 text-sm sm:text-base md:text-lg font-medium truncate">{player.name}</span>
                                    {player.is_captain && (
                                        <span className="text-xs sm:text-sm text-gray-400">(C)</span>
                                    )}
                                </div>
                                <div className="text-xs sm:text-sm text-gray-500">{player.formation_position}</div>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                                {player.events?.goals?.goals > 0 && (
                                    <span className="text-green-600 text-xs sm:text-sm font-semibold">⚽ {player.events.goals.goals}</span>
                                )}
                                {player.events?.cards?.yellow && (
                                    <div className="bg-yellow-400 w-2 h-3 sm:w-2.5 sm:h-3.5 rounded-sm"></div>
                                )}
                                {player.events?.cards?.red && (
                                    <div className="bg-red-600 w-2 h-3 sm:w-2.5 sm:h-3.5 rounded-sm"></div>
                                )}
                                {player.events?.substitution?.has_substitution && (
                                    <span className="text-xs sm:text-sm text-gray-500">↓ {player.substitution.time}'</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Suplentes */}
            {currentTeam.bench && currentTeam.bench.length > 0 && (
                <div className="w-full mb-6">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-400 mb-3">SUPLENTES</h3>
                    <div className="flex flex-col gap-1">
                        {currentTeam.bench.map((player, idx) => (
                            <div key={player.jersey_num || idx} 
                                 className="flex items-center gap-3 py-2 px-2 hover:bg-[#ffffff0d] rounded transition-colors">
                                <span className="text-gray-400 font-semibold text-sm sm:text-base w-6 sm:w-8">{player.jersey_num}</span>
                                <div className="flex-1 min-w-0">
                                    <span className="text-gray-300 text-sm sm:text-base md:text-lg truncate block">{player.player_short_name || player.name}</span>
                                    <span className="text-xs sm:text-sm text-gray-500">{player.position}</span>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    {player.substitution?.type === 1 && (
                                        <span className="text-green-600 text-xs sm:text-sm font-semibold">↑ {player.substitution.time}'</span>
                                    )}
                                    {player.events?.goals?.goals > 0 && (
                                        <span className="text-green-600 text-xs sm:text-sm font-semibold">⚽</span>
                                    )}
                                    {player.events?.cards?.yellow && (
                                        <div className="bg-yellow-400 w-2 h-3 sm:w-2.5 sm:h-3.5 rounded-sm"></div>
                                    )}
                                    {player.events?.cards?.red && (
                                        <div className="bg-red-600 w-2 h-3 sm:w-2.5 sm:h-3.5 rounded-sm"></div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Jugadores ausentes */}
            {missingPlayers.length > 0 && (
                <div className="w-full">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-400 mb-3">AUSENTES</h3>
                    <div className="flex flex-col gap-1">
                        {missingPlayers.map((player, idx) => (
                            <div key={player.jersey_num || idx} 
                                 className="flex items-center justify-between gap-3 py-2 px-2 border-l-2 border-red-600 hover:bg-[#ffffff0d] rounded transition-colors">
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <span className="text-gray-400 font-semibold text-sm sm:text-base w-6 sm:w-8">{player.jersey_num}</span>
                                    <div className="flex-1 min-w-0">
                                        <span className="text-gray-300 text-sm sm:text-base md:text-lg truncate block">{player.name}</span>
                                        <span className="text-xs sm:text-sm text-gray-500">{player.position}</span>
                                    </div>
                                </div>
                                <span className="text-xs sm:text-sm text-red-500 shrink-0">{player.missing_details?.reason}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    )
}

export default LineUp