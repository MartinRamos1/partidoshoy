import { getArgentinaTime } from "../utilities/time.jsx";
import React from "react";
import Team from "./Team";
import { useNavigate } from "react-router-dom";

const Match = ({ match }) => {
  const navigate = useNavigate();
  return (
    <div
      className="py-3 sm:py-4 first:pt-0 last:pb-0 rounded-lg hover:bg-[#ffffff1a] "
      onClick={() =>
        navigate(
          `/game/${match.teams[0].url_name}-vs-${match.teams[1].url_name}/${match.id}`,
        )
      }
    >
      <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 cursor-pointer p-2 sm:p-3 md:p-4">
        <div className="min-w-[35px] sm:min-w-[50px] md:min-w-[60px] shrink-0">
          <h3
            className={`text-xs sm:text-base md:text-xl font-semibold text-green-700 text-center ${match.status.enum == 3 ? "text-red-700" : ""}`}
          >
            {match.status.enum != 1 ? match.game_time_status_to_display : ""}
          </h3>
        </div>

        {/* Equipo Local */}

        <Team team={match.teams[0]} local={true} />

        {match.scores?.length > 0 ? (
          <div className="flex min-w-[60px] sm:min-w-[80px] md:min-w-[100px] flex-col items-center justify-center px-1 sm:px-2 md:px-3 py-2 shrink-0">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-300 whitespace-nowrap">
              <span className="text-green-700 text-xs sm:text-sm md:text-base">
                {" "}
                {match.status.symbol_name == "Pen"
                  ? "(" + match.penalties[0] + ")"
                  : ""}{" "}
              </span>
              {match.scores[0]} - {match.scores[1]}{" "}
              <span className="text-green-700 text-xs sm:text-sm md:text-base">
                {" "}
                {match.status.symbol_name == "Pen"
                  ? "(" + match.penalties[1] + ")"
                  : ""}{" "}
              </span>
            </p>
          </div>
        ) : (
          <div className="flex min-w-[60px] sm:min-w-[80px] md:min-w-[100px] flex-col items-center justify-center px-1 sm:px-2 md:px-3 py-2 shrink-0">
            <p className="text-xs sm:text-sm md:text-base font-bold text-gray-300 whitespace-nowrap">
              {getArgentinaTime(match.start_time)}
            </p>
          </div>
        )}

        {/* Equipo Visitante */}
        <Team team={match.teams[1]} local={false} />
      </div>

      <div className="w-full overflow-hidden">
        {match.scores?.length > 0 &&
          (match.teams[0].goals?.length > 0 ||
            match.teams[1].goals?.length > 0) && (
            <div className="flex items-start justify-center gap-1 sm:gap-2 md:gap-4 px-2 sm:px-3 md:px-4 mt-3 sm:mt-4">
              {/* Espaciador izquierdo - mismo ancho que el tiempo */}
              <div className="min-w-[35px] sm:min-w-[50px] md:min-w-[60px] shrink-0"></div>

              {/* Goles equipo local */}
              <div className="flex flex-col gap-1 sm:gap-2 flex-1 items-end pr-1 sm:pr-2 min-w-0">
                {match.teams[0].goals?.map((goal, index) => (
                  <div
                  key={index}
                  className="flex items-center text-xs sm:text-sm gap-1 sm:gap-2 min-w-0"
                >
                  <span className="text-green-600 font-bold shrink-0">
                    {goal.time_to_display}
                  </span>
                  <span className="text-gray-300 truncate">
                    {goal.player_sname}{" "}
                    <span className="text-gray-300 truncate">
                      {goal.goal_type == "Pen" ? "(P)" : goal.goal_type == "E.C" ? "(E.C)" : ""}
                    </span>
                  </span>
                </div>
              ))}
            </div>

              {/* Línea divisoria - mismo ancho que el marcador */}
              <div className="flex min-w-[60px] sm:min-w-[80px] md:min-w-[100px] justify-center px-1 sm:px-2 shrink-0">
                <div className="w-px bg-gray-600 min-h-[40px] h-full"></div>
              </div>

              {/* Goles equipo visitante */}
              <div className="flex flex-col gap-1 sm:gap-2 flex-1 items-start pl-1 sm:pl-2 min-w-0">
                {match.teams[1].goals?.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-center text-xs sm:text-sm gap-1 sm:gap-2 min-w-0"
                  >
                    <span className="text-green-600 font-bold shrink-0">
                      {goal.time_to_display}
                    </span>
                    <span className="text-gray-300 truncate">
                      {goal.player_sname}{" "}
                      <span className="text-gray-300 truncate">
                        {goal.goal_type == "Pen" ? "(P)" : goal.goal_type == "E.C" ? "(E.C)" : ""}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              {/* Espaciador derecho - para equilibrar */}
              <div className="min-w-0"></div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Match;
