export const getTodayDate = () => {
    const today = new Date( Date.now() );
    return today;
}

export const getCurrentYear = () => {
    const today = getTodayDate();
    const currentYear = today.getFullYear();
    return currentYear;
}

