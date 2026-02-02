import React from "react"
import { useParams } from "react-router-dom"
import { getMatch } from "../data/matches"
import { useState, useEffect } from "react"
import { getTeamImage } from "../utilities/images"

const Game = () =>  {
    const { team1, team2, id } = useParams()
    const [match, setMatch] = useState(null)
    useEffect(() =>  {
        getMatch(team1, team2, id).then((data) => {
            setMatch(data)
            console.log(data)
        })
    }, [team1, team2, id])

    if (!match) return <div>Cargando...</div>

    return (
        <div>
            <div className="flex items-center justify-center gap-4  text-5xl font-semibold mt-8">

                <h2>{match.teams[0].name}</h2>
                <img src={getTeamImage(match.teams[0].id)} alt={match.teams[0].name} className="h-25 w-25 object-contain" />

                <div className="flex items-center justify-center gap-4 p-4 border border-slate-500 rounded-lg mx-2">

                    {match.scores?.length > 0 ? (
                        <span className="text-5xl font-semibold text-cyan-300">{match.scores[0]} - {match.scores[1]}</span>
                    ) : (
                        <span className="text-5xl font-semibold text-cyan-300">-</span>
                    )}

                </div>
                

                <img src={getTeamImage(match.teams[1].id)} alt={match.teams[1].name} className="h-25 w-25 object-contain" />
                <h2>{match.teams[1].name}</h2>

            </div>
        </div>
    )
}

export default Game