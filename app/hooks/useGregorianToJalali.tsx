import { useEffect, useState } from "react";
import jalaali from 'jalaali-js';

const useGregorianToJalali = (myDate: any) => {
    const [date, setDate] = useState<any>();
    const isoDate = myDate.split("T")[0];
    const splitDate = isoDate.split("-");
    const gy = splitDate[0];
    const gm = splitDate[1];
    const gd = splitDate[2];

    useEffect(() => {
        if (myDate) {
            const dateObj = new Date(myDate);
            const gy = dateObj.getUTCFullYear();  
            const gm = dateObj.getUTCMonth() + 1; 
            const gd = dateObj.getUTCDate();    

            const jalaliDate = jalaali.toJalaali(gy, gm, gd);

            setDate(`${jalaliDate.jy}-${jalaliDate.jm}-${jalaliDate.jd}`);
        }
    }, [myDate]);
console.log(date);

    return date;
}

export default useGregorianToJalali;