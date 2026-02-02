import { getTeamImage } from "../utilities/images"
import React from "react"


const Team = ({ team, local }: { team: any, local?: boolean }) => {
    return (
        <section className={`flex flex-1 items-center gap-3 ${local ? 'justify-end' : 'justify-start'}`}>
            {local ? (
                <>
                    <p className="text-right text-base font-semibold text-slate-100">{team.name}</p>
                    <div className="flex h-14 w-14 items-center justify-center">
                        <img src={getTeamImage(team.id)} alt={team.name} className="h-full w-full object-contain" />
                    </div>
                </>
            ) : (
                <>
                    <div className="flex h-14 w-14 items-center justify-center">
                        <img src={getTeamImage(team.id)} alt={team.name} className="h-full w-full object-contain" />
                    </div>
                    <p className="text-left text-base font-semibold text-slate-100">{team.name}</p>
                </>
            )}
        </section>
    )
}

export default Team