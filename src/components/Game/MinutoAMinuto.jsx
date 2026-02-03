const MinutoAMinuto = ({ data }) => {
    // Mapeo de tipos de eventos a sus representaciones visuales
    const eventTypes = {
        1: { icon: '⚽', label: 'Gol', color: 'text-green-600' },
        2: { icon: '🟥', label: 'Tarjeta Roja', color: 'text-red-600' },
        3: { icon: '⚽', label: 'Gol (Penal)', color: 'text-green-600' },
        4: { icon: '🟨', label: 'Tarjeta Amarilla', color: 'text-yellow-500' },
        15: { icon: '🔄', label: 'Sustitución', color: 'text-blue-600' }
    };

    const renderEvent = (event, isLeft) => {
        const eventInfo = eventTypes[event.type] || { icon: '•', label: 'Evento', color: 'text-gray-600' };
        
        return (
            <div 
                className={`flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg ${
                    event.team === 1 ? 'bg-blue-50' : 'bg-red-50'
                } ${isLeft ? 'flex-row-reverse text-right' : ''}`}
            >
                <span className={`text-xl sm:text-2xl ${eventInfo.color}`}>{eventInfo.icon}</span>
                <div className="flex-1">
                    <div className={`flex items-center gap-1 sm:gap-2 mb-1 ${isLeft ? 'flex-row-reverse justify-start' : ''}`}>
                        {event.player_jersey_num && (
                            <span className="text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-gray-200 font-mono">
                                #{event.player_jersey_num}
                            </span>
                        )}
                    </div>
                    <div className="text-xs sm:text-sm">
                        {event.type === 15 ? (
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                                <span className="text-green-700">↑ {event.texts[0]}</span>
                                <span className="hidden sm:inline mx-2">→</span>
                                <span className="text-red-700">↓ {event.texts[1]}</span>
                            </div>
                        ) : event.texts.length > 1 ? (
                            <div>
                                <span className="font-semibold">{event.texts[0]}</span>
                                <span className="text-gray-500 ml-1 sm:ml-2 block sm:inline">(Asistencia: {event.texts[1]})</span>
                            </div>
                        ) : (
                            <span className="font-semibold">{event.texts[0]}</span>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-6xl mx-auto p-2 sm:p-4 w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">Minuto a Minuto</h1>
            
            {data && data.map((stage, stageIndex) => (
                <div key={stageIndex} className="mb-6 sm:mb-8">
                    {stage.show_stage_title && (
                        <div className="bg-gray-800 text-white p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
                            <h2 className="text-lg sm:text-xl font-bold">{stage.name}</h2>
                            <div className="flex items-center gap-2 sm:gap-4 mt-2 flex-wrap">
                                <span className="text-xl sm:text-2xl font-bold">
                                    {stage.scores[0]} - {stage.scores[1]}
                                </span>
                                {stage.is_penalties_stage && (
                                    <span className="text-xs sm:text-sm bg-yellow-500 text-black px-2 py-1 rounded">
                                        Penales
                                    </span>
                                )}
                            </div>
                        </div>
                    )}
                    
                    <div className="space-y-4 sm:space-y-6">
                        {stage.rows.map((row, rowIndex) => (
                            <div key={rowIndex} className="relative">
                                {/* Línea de tiempo central */}
                                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2 hidden sm:block"></div>
                                
                                {/* Tiempo en el centro */}
                                <div className="flex justify-center mb-2 sm:mb-3">
                                    <span className="bg-gray-800 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-bold text-xs sm:text-sm z-10 relative">
                                        {row.time}
                                    </span>
                                </div>
                                
                                {/* Grid de dos columnas */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 items-start">
                                    {/* Columna izquierda (Equipo 1) */}
                                    <div className="flex flex-col gap-2">
                                        {row.events
                                            .filter(event => event.team === 1)
                                            .map((event, eventIndex) => (
                                                <div key={eventIndex}>
                                                    {renderEvent(event, true)}
                                                </div>
                                            ))
                                        }
                                    </div>
                                    
                                    {/* Columna derecha (Equipo 2) */}
                                    <div className="flex flex-col gap-2">
                                        {row.events
                                            .filter(event => event.team === 2)
                                            .map((event, eventIndex) => (
                                                <div key={eventIndex}>
                                                    {renderEvent(event, false)}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            
            {(!data || data.length === 0) && (
                <div className="text-center text-gray-500 py-8 sm:py-12 text-sm sm:text-base">
                    No hay eventos disponibles
                </div>
            )}
        </div>
    );
};

export default MinutoAMinuto;