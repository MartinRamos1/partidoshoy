import { formatArgentinaDate } from "../../utilities/time.jsx"
import CalendarIcon from "../../components/Icons/CalendarIcon"
import TvIcon from "../../components/Icons/TvIcon"
import StadiumIcon from "../../components/Icons/StadiumIcon"
import FlagIcon from "../../components/Icons/FlagIcon"


const GameInfo = ({ match }) => {
    return (
        <>
             <div className="flex items-center justify-center gap-1 sm:gap-2 min-w-0">
                    <CalendarIcon />
                    <h3 className="text-center truncate">{formatArgentinaDate(match.start_time)}</h3>
                </div>

                <div className="flex items-center justify-center gap-1 sm:gap-2 min-w-0">
                    <StadiumIcon />
                    <h3 className="text-center truncate max-w-[100px] sm:max-w-[150px] md:max-w-[200px]">{match.game_info[0]?.value || "-"}</h3>
                </div>

                <div className="flex items-center justify-center gap-1 sm:gap-2 min-w-0">
                    <FlagIcon />
                    <h3 className="text-center truncate max-w-[100px] sm:max-w-[150px] md:max-w-[200px]">{match.game_info[2]?.value || "-"}</h3>
                </div>

                <div className="flex items-center justify-center gap-1 sm:gap-2 min-w-0">
                    <TvIcon />
                    <h3 className="text-center truncate max-w-[100px] sm:max-w-[150px] md:max-w-[200px]">{match.game_info[3]?.value || "-"}</h3>
                </div>
        </>
    )
}

export default GameInfo