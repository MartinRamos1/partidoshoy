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

export default getMatches