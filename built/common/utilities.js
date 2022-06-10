"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilities = void 0;
class Utilities {
    //#region String
    static formatString(str, ...val) {
        for (let index = 0; index < val.length; index++) {
            str = str.replace(`{${index}}`, val[index]);
        }
        return str;
    }
    /**
     * Get current time and Return the yyyy_m_dd_hh_mm_ss
     */
    static getCurrentDataTimeString() {
        let dateObj = new Date();
        let year = dateObj.getFullYear();
        let month = dateObj.getMonth();
        let date = dateObj.getDate();
        let hour = dateObj.getHours();
        let minute = dateObj.getMinutes();
        let second = dateObj.getSeconds();
        let time = year + "_" + month + "_" + date + "_" + hour + "_" + minute + "_" + second;
        return time;
    }
}
exports.Utilities = Utilities;
exports.default = new Utilities();
//# sourceMappingURL=utilities.js.map