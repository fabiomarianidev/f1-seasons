export const getTodayDate = () => {
    const today = new Date( Date.now() );
    return today;
}

export const getCurrentYear = () => {
    const today = getTodayDate();
    const currentYear = today.getFullYear();
    return currentYear;
}

/*export function formatDate(date, format) {
    const getMonthText = (month) => {
        switch (month) {
            case 1: return("Jan")
            case 2: return("Feb")
            case 3: return("Mar")
            case 4: return("Apr")
            case 5: return("May")
            case 6: return("Jun")
            case 7: return("Jul")
            case 8: return("Aug")
            case 9: return("Sep")
            case 10: return("Oct")
            case 11: return("Nov")
            case 12: return("Dec")
        }
    }

    const map = {
        mm: getMonthText(date.getMonth() + 1),
        dd: date.getDate(),
        yyyy: date.getFullYear()
    }

    return format.replace(/mm|dd|yyyy/gi, matched => map[matched]);
}*/

const getMonthText = (month) => {
    switch (month) {
        case "01": return("January")
        case "02": return("February")
        case "03": return("March")
        case "04": return("April")
        case "05": return("May")
        case "06": return("June")
        case "07": return("July")
        case "08": return("August")
        case "09": return("September")
        case "10": return("October")
        case "11": return("November")
        case "12": return("December")
    }
}

export const formatDate = (date) => {

    const year = date.slice(0, 4);
    const month = getMonthText(date.slice(5, 7));
    const day = date.slice(8);

    return(`${month} ${day}, ${year}`);    
} 

