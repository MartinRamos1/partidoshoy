import { formatArgentinaDate } from "../../utilities/time.jsx"
import CalendarIcon from "../../components/Icons/CalendarIcon"
import TvIcon from "../../components/Icons/TvIcon"
import StadiumIcon from "../../components/Icons/StadiumIcon"
import FlagIcon from "../../components/Icons/FlagIcon"


const GameInfo = ({ match }) => {
    return (
        <>
             <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <CalendarIcon />
                    <h3 className="text-center">{formatArgentinaDate(match.start_time)}</h3>
                </div>

                <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3">
                    <StadiumIcon />
                    <h3 className="text-center truncate max-w-[120px] sm:max-w-none">{match.game_info[0].value}</h3>
                </div>

                <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3">
                    <FlagIcon />
                    <h3 className="text-center truncate max-w-[120px] sm:max-w-none">{match.game_info[2].value}</h3>
                </div>

                <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3">
                    <TvIcon />
                    <h3 className="text-center truncate max-w-[120px] sm:max-w-none">{match.game_info[3].value}</h3>
                </div>
        </>
    )
}

export default GameInfo