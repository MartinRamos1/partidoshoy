

const Stats = ({ match }) => {

    if (!match?.statistics) {
        return (
            <div className="flex items-center justify-center w-full text-gray-300 p-8">
                <p>No hay estadísticas disponibles</p>
            </div>
        )
    }
    return (
        <div>

            <div className="flex flex-col gap-4 items-center justify-center">
                {match.statistics.map((stat) => (
                    <div key={Math.random()} className="flex flex-row gap-4 font-semibold border-b border-gray-700 items-center justify-center w-full">
                        <p className="text-lg text-gray-300 justify-start py-2">{stat.values[0]}</p>
                        <h2 className="text-2xl text-gray-200 py-2 justify-center">{stat.name}</h2>
                        <p className="text-lg text-gray-300 justify-end py-2">{stat.values[1]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stats