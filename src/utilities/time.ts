export const getArgentinaTime = (dateString: string): string => {
    // Parsear el string de fecha en formato DD-MM-YYYY HH:mm
    const [datePart, timePart] = dateString.split(' ')
    const [day, month, year] = datePart.split('-')
    const [hours, minutes] = timePart.split(':')
    
    // Crear fecha interpretando la hora como UTC-6 (añadiendo 6 horas para convertir a UTC)
    const date = new Date(Date.UTC(
        parseInt(year),
        parseInt(month) - 1, // Mes es 0-indexed
        parseInt(day),
        parseInt(hours) + 6, // Sumar 6 horas porque la entrada está en UTC-6
        parseInt(minutes)
    ))
    
    // Convertir a zona horaria de Argentina
    const argentinaTime = date.toLocaleTimeString('es-AR', {
        timeZone: 'America/Argentina/Buenos_Aires',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })
    
    return argentinaTime
}
