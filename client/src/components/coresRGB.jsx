import { useState, useEffect } from 'react';
import chroma from "chroma-js";

const cores = ["#99CCFF", "#CC9966", "#33FF99"];
let index = 0;

const CoresRGB = () => {

    const escalaCor = chroma.scale(cores).mode('lab').colors(100);
    const [cor, setcor] = useState(escalaCor[0]);
    // console.log("ok", escalaCor);

    useEffect(() => {
        const interval = setInterval(() => {
            index = (index + 1) % escalaCor.length;
            setcor(escalaCor[index]);
            // console.log(index, escalaCor[index]);
        }, 25);

        return () => clearInterval(interval);
    });

    return cor;

}

export default CoresRGB;