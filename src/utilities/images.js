const getTeamImage = (teamId) => {
    return `https://api.promiedos.com.ar/images/team/${teamId}/3`
}

const getLeagueImage = (leagueId) => {
    return `https://api.promiedos.com.ar/images/league/${leagueId}/1`
}

export { getTeamImage, getLeagueImage }
