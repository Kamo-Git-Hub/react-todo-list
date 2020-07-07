export const requairedFild = (value) => {
    if (value) return undefined
    return "Required Field"
}

//title input validation
export const maxLengthCreater = (maxLength) => (value) => {
    if (value.length > maxLength) return `Maximal Length Is ${maxLength}`
    return undefined
}

//name input validation
export const minLengthCreater = (minLength) => (value) => {
    if (value.length < minLength) return 'Minimal Length Is 4 Symbol'
    return undefined
}