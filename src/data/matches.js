const getMatches = async (dateMatches) => {
    try {
        const response = await fetch(`https://api-partidos-cursor.vercel.app/api/games/${dateMatches}`)
        if (!response.ok) {
            console.error(`Error en la API: ${response.status}`)
            return []
        }
        const data = await response.json()
        console.log(data.leagues)
        return data.leagues
    } catch (error) {
        console.error(error)
        return []
    }
}

const getMatch = async (team1, team2, id) => {
    try {
        const response = await fetch(`https://api-partidos-cursor.vercel.app/api/game/${team1}-vs-${team2}/${id}`)
        const data = await response.json()
        return data.game
    } catch (error) {
        console.error(error)
    }
}

export { getMatches, getMatch }