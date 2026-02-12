import { getTeamImage } from "../utilities/images"
import React from "react"


const Team = ({ team, local }) => {
    return (
        <section className={`flex flex-1 items-center gap-1 sm:gap-2 md:gap-3 min-w-0 ${local ? 'justify-end' : 'justify-start'}`}>
            {local ? (
                <>
                    <p className="text-right text-xs sm:text-sm md:text-base font-semibold text-slate-100 truncate min-w-0 max-w-[70px] sm:max-w-[100px] md:max-w-[150px] lg:max-w-[200px]">{team.name}</p>
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center shrink-0">
                        <img src={getTeamImage(team.id)} alt={team.name} className="h-full w-full object-contain" />
                    </div>
                </>
            ) : (
                <>
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center shrink-0">
                        <img src={getTeamImage(team.id)} alt={team.name} className="h-full w-full object-contain" />
                    </div>
                    <p className="text-left text-xs sm:text-sm md:text-base font-semibold text-slate-100 truncate min-w-0 max-w-[70px] sm:max-w-[100px] md:max-w-[150px] lg:max-w-[200px]">{team.name}</p>
                </>
            )}
        </section>
    )
}

export default Team
