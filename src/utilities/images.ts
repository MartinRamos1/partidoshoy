const getTeamImage = (teamId: string) => {
    return `https://api.promiedos.com.ar/images/team/${teamId}/3`
}

const getLeagueImage = (leagueId: string) => {
    return `https://api.promiedos.com.ar/images/league/${leagueId}/1`
}

export { getTeamImage, getLeagueImage }

