import { getTeamImage } from "../utilities/images"
import React from "react"


const Team = ({ team, local }: { team: any, local?: boolean }) => {
    return (
        <section className={`flex flex-1 items-center gap-1 sm:gap-2 md:gap-3 ${local ? 'justify-end' : 'justify-start'}`}>
            {local ? (
                <>
                    <p className="text-right text-xs sm:text-sm md:text-base font-semibold text-slate-100 truncate max-w-[80px] sm:max-w-[120px] md:max-w-none">{team.name}</p>
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center shrink-0">
                        <img src={getTeamImage(team.id)} alt={team.name} className="h-full w-full object-contain" />
                    </div>
                </>
            ) : (
                <>
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center shrink-0">
                        <img src={getTeamImage(team.id)} alt={team.name} className="h-full w-full object-contain" />
                    </div>
                    <p className="text-left text-xs sm:text-sm md:text-base font-semibold text-slate-100 truncate max-w-[80px] sm:max-w-[120px] md:max-w-none">{team.name}</p>
                </>
            )}
        </section>
    )
}

export default Team