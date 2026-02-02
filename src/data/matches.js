const getMatches = async () => {
    try {
        const response = await fetch('https://api-partidos-cursor.vercel.app/api/matches')
        const data = await response.json()
        console.log(data.leagues)
        return data.leagues
    } catch (error) {
        console.error(error)
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