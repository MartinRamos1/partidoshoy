import { getTeamImage } from "../utilities/images"
import { formatArgentinaDate } from "../utilities/time"

const Datos = ({ match }) => {
  const getResultColor = (result) => {
    if (result === 2) return "bg-[#6FAA54]";
    if (result === 1) return "bg-[#FFC61A]";
    return "bg-[#FF4848]";
  };

  const getResultText = (result) => {
    if (result === 2) return "V";
    if (result === 1) return "E";
    return "D";
  };

  if (!match?.standings || !match?.recent_form || !match?.head_to_head) {
    return (
      <div className="flex items-center justify-center w-full text-gray-300 p-8">
        <p>No hay información disponibles</p>
      </div>
    )
  }

  return (
    <div className="p-4 space-y-6 w-full">
      {/* Posiciones */}
      {match.standings && (
        <div className="border border-gray-700 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4 text-gray-200">Posiciones</h2>
          <div className="space-y-2">
            {/* Encabezados */}
            <div className="flex items-center justify-between py-2 px-2 border-b-2 border-gray-600">
              <div className="flex items-center gap-3">
                <span className="font-bold text-gray-400 w-8 text-center text-xs">
                  #
                </span>
                <span className="font-semibold text-gray-400 text-xs">
                  EQUIPO
                </span>
              </div>
              <div className="flex gap-4 text-xs text-gray-400 font-semibold">
                <div className="text-center min-w-[28px]">PTS</div>
                <div className="text-center min-w-[28px]">J</div>
                <div className="text-center min-w-[28px]">+/-</div>
              </div>
            </div>
            
            {match.standings.rows.map((row) => (
              <div
                key={row.num}
                className="flex items-center justify-between py-2 px-2 border-b border-gray-700 hover:bg-[#ffffff0a] transition-colors rounded"
              >
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-400 w-8 text-center">
                    {row.num}°
                  </span>
                  <span className="font-semibold text-gray-300">
                    {row.entity.object.short_name}
                  </span>
                </div>
                <div className="flex gap-4 text-sm text-gray-400">
                  {row.values.map((value) => (
                    <div key={value.key} className="text-center min-w-[28px]">
                      <div
                        className={value.key === "points" ? "font-bold text-green-500" : ""}
                      >
                        {value.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Forma Reciente */}
      <div className="border border-gray-700 rounded-lg p-4 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-4 text-gray-200">Últimos partidos</h2>

        <div className="space-y-4">
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-semibold mb-3 text-gray-300">{match.teams[0].short_name}</h3>
            <div className="flex gap-2">
              {match.recent_form.home.map((result, index) => (
                <div
                  key={index}
                  className={`w-9 h-9 ${getResultColor(result)} text-black flex items-center justify-center rounded font-bold hover:opacity-80 transition-opacity`}
                >
                  {getResultText(result)}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="font-semibold mb-3 text-gray-300">{match.teams[1].short_name}</h3>
            <div className="flex gap-2">
              {match.recent_form.away.map((result, index) => (
                <div
                  key={index}
                  className={`w-9 h-9 ${getResultColor(result)} text-black flex items-center justify-center rounded font-bold hover:opacity-80 transition-opacity`}
                >
                  {getResultText(result)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enfrentamientos Directos */}
      <div className="border border-gray-700 rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4 text-gray-200">Historial de Enfrentamientos</h2>

        <div className="flex justify-around mb-6 text-center">
          <div>
            <div className="text-3xl font-bold text-green-500">
              {match.head_to_head.home_wins}
            </div>
            <div className="text-sm text-gray-400 mt-1">Victorias de {match.teams[0].short_name}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-400">
              {match.head_to_head.draws}
            </div>
            <div className="text-sm text-gray-400 mt-1">Empates</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-500">
              {match.head_to_head.away_wins}
            </div>
            <div className="text-sm text-gray-400 mt-1">Victorias de {match.teams[1].short_name}</div>
          </div>
        </div>

        <div className="space-y-2">
          {match.head_to_head.games.slice(0, 5).map((game) => (
            <div
              key={game.id}
              className="flex justify-between items-center py-3 px-2 border-b border-gray-700 hover:bg-[#ffffff0a] transition-colors rounded"
            >
             
              <div className="flex items-center gap-3">
                <img src={getTeamImage(game.teams[0].id)} alt={game.teams[0].name} className="h-6 w-6 object-contain" />

                <span className="bg-[#ffffff1a] px-3 py-1 rounded font-bold text-gray-200">
                  {game.scores[0]} - {game.scores[1]}
                </span>
                <img src={getTeamImage(game.teams[1].id)} alt={game.teams[1].name} className="h-6 w-6 object-contain" />

              </div>
              <div className="text-sm text-gray-400">{game.start_time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Datos;
