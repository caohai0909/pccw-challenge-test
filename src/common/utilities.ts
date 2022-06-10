
export class Utilities {

     //#region String
    public static formatString(str: string, ...val: string[]): string {
        for (let index = 0; index < val.length; index++) {
            str = str.replace(`{${index}}`, val[index]);
        }
        return str;
    }

    /**
     * Get current time and Return the yyyy_m_dd_hh_mm_ss
     */
    public static getCurrentDataTimeString():string{
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
export default new Utilities();
