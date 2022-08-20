const isLetter = (value) => {
    return (value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122) || (value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90);
}

const formatNumber = (value) => {

    if (value) {
        console.log(value);
        let result
        value = String(value)
        let lastChar = value.slice(-1);

        if (lastChar.charCodeAt(0) != 46) {
            if (!isLetter(lastChar)) {
                result = value ? Number(value.replaceAll(" ", "")).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$& ').replaceAll('.0', '') : ''
            }
        } else {
            result = value ? Number(value.replaceAll(" ", "")).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$& ').replaceAll('.0', '.') : ''

        }
        if (value.toString().includes('.')) {
            result = result + value ? value : ''
            result = Number(value.replaceAll(" ", "")).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ')

        }
        if (result == 'Infinity' || result == 'NaN') {
            result = null
        }

        return result
    }


}
const checkNumber = (value) => {
    if (value) {
        if (typeof value == "string") {
            return +value.replaceAll(" ", "")
        }
        else {
            return +value
        }
    } else {
        return null
    }
}

export { formatNumber, checkNumber, isLetter }
