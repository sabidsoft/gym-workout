const addBreakTimeToLocalStorage = time => {
    localStorage.setItem('break-time', time)
}

const getBreakTimeFromLocalStorage = () => {
    let storedData = localStorage.getItem('break-time')
    if(storedData){
        return storedData
    }else{
        storedData = 0
        return storedData
    }
}

export {
    addBreakTimeToLocalStorage,
    getBreakTimeFromLocalStorage
}