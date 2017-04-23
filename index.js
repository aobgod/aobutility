var moment = require('moment')

/* GET CURRENT DATE TIME */
exports.getDatetime = datetime => moment(datetime).format('YYYY-MM-DD HH:mm:ss')
/* GET CURRENT DATE */
exports.getDate = datetime => moment(datetime).format('YYYY-MM-DD')
/* GET CURRENT TIME */
exports.getTime = datetime => moment(datetime).format('HH:mm:ss')
/* SET DATE TIME WITH FORMAT STRING */
exports.datetime = (format, datetime) => moment(datetime).format(format)
/* DIFFERENCE DATE */
exports.dateDiff = (start, end) => Math.ceil(Math.abs(new Date(start).getTime() - new Date(end).getTime()) / (1000 * 3600 * 24))
/* CONVERT MINUTES TO YEAR MONTH WEEK DAY HOUR MINUTE */
exports.min2str = value => {
	let result = [],
		units = {
			year: 24 * 60 * 365,
			month: 24 * 60 * 30,
			week: 24 * 60 * 7,
			day: 24 * 60,
			hour: 60,
			minute: 1
		}
	for (let name in units) {
		let p =  Math.floor(value / units[name])
		if (p == 1) result.push(p + " " + name)
		if (p >= 2) result.push(p + " " + name + "s")
		value %= units[name]
	}
	return result
}
/* CONVERT ARRAY TO STRING */
exports.arr2str = (arr, separator) => {
	let result = ""
	for (let index in arr) result += arr[index] + separator
	return result.substring(0, result.length - separator.length)
}

/* EQUIP SINGLE QUOTES */
exports.sQ = str => `'${str}'`
/* EQUIP DOUBLE QUOTES */
exports.dQ = str => `"${str}"`

/* SUBSTRING FROM LEFT TO RIGHT Ex.. subRight('aobgod', 3) = aob */
exports.subRight = (str, n) => {
    if (n <= 0) return ""
    else if (n > String(str).length) return str
    else return String(str).substring(0, n)
}
/* SUBSTRING FROM RIGHT TO LEFT Ex.. subLeft('aobgod', 3) = god */
exports.subLeft = (str, n) => {
    let Len = String(str).length
	if (n <= 0) return ""
    else if (n > Len) return str
    else return String(str).substring(Len, Len - n)
}
/* SUBSTRING FROM START(0) TO END Ex.. sunMid('aobgod', 2, 2) = bg */
exports.subMid = (str, start, len) => {
    let End = String(str).length
    if (start < 0 || len < 0) return ""
    if (start + len <= End) End = start + len
    return String(str).substring(start, End)
}

/* TRIM STRING */
exports.Trim = str => str.replace(/^\s+|\s+$/g, '')
/* DELETE LAST STRING */
exports.Rmend = str => str.substring(0, str.length - 1)
/* REPLACE ALL */
exports.replaceAll = (find, replace, str) => str.replace(new RegExp(find, 'g'), replace)

/* CHECK IF STRING IS EMPTY RETURN VAL */
exports.isEmpty = (str, val) => str == '' ? val : str
/* CHECK IF STRING IS NULL RETURN VAL */
exports.isNull = (str, val) => str === null ? val : str
/* CHECK IF VALUE IS UNDEFINED OR NOT */
exports.isUndefined = (val) => {
	if (typeof val === 'undefined') return true
	else return false
}
/* CHECK IF VALUE IS NUMBER */
exports.isNumber = (val) => {
	if ((undefined === val) || (null === val)) return false
	if (typeof value == 'number') return true
}
/* CHECK IF VALUE IS NUMERIC */
exports.isNumeric = (input) => {
	let RE = /^-{0,1}\d*\.{0,1}\d+$/
	return (RE.test(input))
}

/* CHECK IF STRING START WITH PREFIX */
exports.startWith = (str, prefix) => str.indexOf(prefix) === 0
/* CHECK IF STRING END WITH SUFFIX */
exports.endWith = (str, suffix) => str.match(suffix + "$") == suffix
/* CHECK IF STRING CONTAINS VALUE OR NOT */
exports.Contains = (str, val) => str.indexOf(val) != -1

/* GENERATE NUMERIC FROM XXX TO 000XXX */
exports.zeroPad = (num, places) => {
	let zero = places - num.toString().length + 1
    return Array(+(zero > 0 && zero)).join("0") + num
}

/* ASCII TO HEX */
exports.asc2hex = str => {
	let tempstr = ''
	for (a = 0; a < pStr.length; a = a + 1) { tempstr = tempstr + pStr.charCodeAt(a).toString(16) }
    return tempstr
}
/* HEX TO ASCII */
exports.hex2asc = str => {
	let tempstr = ''
    for (b = 0; b < pStr.length; b = b + 2) { tempstr = tempstr + String.fromCharCode(parseInt(pStr.substr(b, 2), 16)) }
    return tempstr
}

/* BINARY TO DECIMAL */
exports.bin2dec = num => convertBase(num).from(2).to(10)
/* BINARY TO HEXADECIMAL */
exports.bin2hex = num => zeroPad(convertBase(num).from(2).to(16), 4)
/* DECIMAL TO BINARY */
exports.dec2bin = num => convertBase(num).from(10).to(2)
/* DECIMAL TO HEXADECIMAL */
exports.dec2hex = num => convertBase(num).from(10).to(16)
/* HEXADECIMAL TO BINARY */
exports.hex2bin = num => zeroPad(convertBase(num).from(16).to(2), 4)
/* HEXADECIMAL TO DECIMAL */
exports.hex2dec = num => convertBase(num).from(16).to(10)
var convertBase = num => {
	this.from = baseFrom => {
		this.to = baseTo => parseInt(num, baseFrom).toString(baseTo)
	}
}

/* TRIM AND SUBSRTING SIM NUMBER */
exports.subSim = num => {  
	let	sim = num.replace(/^\s+|\s+$/g, '')
	if (sim.indexOf('0') === 0) return sim.substring(1, sim.length)
	else if (sim.indexOf('66') === 0) return sim.substring(2, sim.length)
	else return sim
}