const CryptoJS = require('crypto-js')
const sha1 = require('crypto-js/sha1')

module.exports = {
  createHashSha1: object => sha1(JSON.stringify(object)).toString(),
  encryptText: string => CryptoJS.AES.encrypt(string, process.env.HASS_KEY).toString(),
  decryptText: string => CryptoJS.AES.decrypt(string, process.env.HASS_KEY).toString(CryptoJS.enc.Utf8)
}
