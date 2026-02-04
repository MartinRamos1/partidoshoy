export const getArgentinaTime = (dateString) => {
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

export const formatArgentinaDate = (dateString) => {
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
    const options = {
        timeZone: 'America/Argentina/Buenos_Aires',
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }
    
    const formatter = new Intl.DateTimeFormat('es-AR', options)
    const parts = formatter.formatToParts(date)
    
    // Extraer las partes
    const weekday = parts.find(p => p.type === 'weekday').value
    const dayNum = parts.find(p => p.type === 'day').value
    const monthName = parts.find(p => p.type === 'month').value
    const hour = parts.find(p => p.type === 'hour').value
    const minute = parts.find(p => p.type === 'minute').value
    
    // Formatear como "mar, 3 de febrero, 19:00"
    return `${weekday}, ${dayNum} de ${monthName}, ${hour}:${minute}`
}

export const formatDateToDDMMYYYY = (date) => {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    
    return `${day}-${month}-${year}`
}

export const addDayToDate = (dateString) => {
    // Parsear el string de fecha en formato DD-MM-YYYY
    const [day, month, year] = dateString.split('-')
    
    // Crear fecha
    const date = new Date(
        parseInt(year),
        parseInt(month) - 1, // Mes es 0-indexed
        parseInt(day)
    )
    
    // Sumar un día
    date.setDate(date.getDate() + 1)
    
    // Formatear y devolver
    return formatDateToDDMMYYYY(date)
}

export const subtractDayFromDate = (dateString) => {
    // Parsear el string de fecha en formato DD-MM-YYYY
    const [day, month, year] = dateString.split('-')
    
    // Crear fecha
    const date = new Date(
        parseInt(year),
        parseInt(month) - 1, // Mes es 0-indexed
        parseInt(day)
    )
    
    // Restar un día
    date.setDate(date.getDate() - 1)
    
    // Formatear y devolver
    return formatDateToDDMMYYYY(date)
}

export const addDayToDateObject = (date) => {
    // Crear una nueva fecha para no mutar la original
    const newDate = new Date(date)
    
    // Sumar un día
    newDate.setDate(newDate.getDate() + 1)
    
    return newDate
}

export const subtractDayFromDateObject = (date) => {
    // Crear una nueva fecha para no mutar la original
    const newDate = new Date(date)
    
    // Restar un día
    newDate.setDate(newDate.getDate() - 1)
    
    return newDate
}

export const getDateLabel = (dateString) => {
    // Parsear el string de fecha en formato DD-MM-YYYY
    const [day, month, year] = dateString.split('-')
    
    // Crear fecha seleccionada
    const selectedDate = new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day)
    )
    
    // Crear fecha de hoy a las 00:00
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    // Normalizar la fecha seleccionada
    selectedDate.setHours(0, 0, 0, 0)
    
    // Calcular la diferencia en días
    const diffTime = selectedDate - today
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) {
        return "Hoy"
    } else if (diffDays === -1) {
        return "Ayer"
    } else if (diffDays === 1) {
        return "Mañana"
    } else {
        // Formatear como "viernes 6 de febrero"
        const options = {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
        }
        const formatter = new Intl.DateTimeFormat('es-AR', options)
        const parts = formatter.formatToParts(selectedDate)
        
        const weekday = parts.find(p => p.type === 'weekday').value
        const dayNum = parts.find(p => p.type === 'day').value
        const monthName = parts.find(p => p.type === 'month').value
        
        // Capitalizar el día de la semana
        const weekdayCapitalized = weekday.charAt(0).toUpperCase() + weekday.slice(1)
        
        return `${weekdayCapitalized} ${dayNum} de ${monthName}`
    }
}
