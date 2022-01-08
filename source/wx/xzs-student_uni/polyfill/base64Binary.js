/*
 * @Author: zhang peng
 * @Date: 2021-08-03 10:57:51
 * @LastEditTime: 2021-08-16 17:25:43
 * @LastEditors: zhang peng
 * @Description:
 * @FilePath: \miniprogram-to-uniapp2\src\project\template\polyfill\base64Binary.js
 *
 * 借鉴自：https://github.com/dankogai/js-base64/blob/main/base64.js
 * 因uniapp没有window，也无法使用Buffer，因此直接使用polyfill
 *
 */
const b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
const b64chs = [...b64ch]
const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/
const b64tab = ((a) => {
    let tab = {}
    a.forEach((c, i) => tab[c] = i)
    return tab
})(b64chs)
const _fromCC = String.fromCharCode.bind(String)

/**
 * polyfill version of `btoa`
 */
const btoaPolyfill = (bin) => {
    // console.log('polyfilled');
    let u32, c0, c1, c2, asc = ''
    const pad = bin.length % 3
    for (let i = 0;i < bin.length;) {
        if ((c0 = bin.charCodeAt(i++)) > 255 ||
            (c1 = bin.charCodeAt(i++)) > 255 ||
            (c2 = bin.charCodeAt(i++)) > 255)
            throw new TypeError('invalid character found')
        u32 = (c0 << 16) | (c1 << 8) | c2
        asc += b64chs[u32 >> 18 & 63]
            + b64chs[u32 >> 12 & 63]
            + b64chs[u32 >> 6 & 63]
            + b64chs[u32 & 63]
    }
    return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc
}

/**
 * polyfill version of `atob`
 */
const atobPolyfill = (asc) => {
    // console.log('polyfilled');
    asc = asc.replace(/\s+/g, '')
    if (!b64re.test(asc))
        throw new TypeError('malformed base64.')
    asc += '=='.slice(2 - (asc.length & 3))
    let u24, bin = '', r1, r2
    for (let i = 0;i < asc.length;) {
        u24 = b64tab[asc.charAt(i++)] << 18
            | b64tab[asc.charAt(i++)] << 12
            | (r1 = b64tab[asc.charAt(i++)]) << 6
            | (r2 = b64tab[asc.charAt(i++)])
        bin += r1 === 64 ? _fromCC(u24 >> 16 & 255)
            : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255)
                : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255)
    }
    return bin
}

/**
 * base64转ArrayBuffer
 */
function base64ToArrayBuffer (base64) {
    const binaryStr = atobPolyfill(base64)
    const byteLength = binaryStr.length
    const bytes = new Uint8Array(byteLength)
    for (let i = 0;i < byteLength;i++) {
        bytes[i] = binary.charCodeAt(i)
    }
    return bytes.buffer
}

/**
 * ArrayBuffer转base64
 */
function arrayBufferToBase64 (buffer) {
    let binaryStr = ""
    const bytes = new Uint8Array(buffer)
    var len = bytes.byteLength
    for (let i = 0;i < len;i++) {
        binaryStr += String.fromCharCode(bytes[i])
    }
    return btoaPolyfill(binaryStr)
}

module.exports = {
    base64ToArrayBuffer,
    arrayBufferToBase64,
}
