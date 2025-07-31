import { colors } from "../data/colors.js";


const pink = colors[0].base;
console.log(pink);

const convertTriadicColors = (colorBase) => {
    const hex = colorBase.slice(1);
    const r = hex.slice(0, 2);
    const g = hex.slice(2, 4);
    const b = hex.slice(4, 6);

    const rInt = parseInt(r, 16);
    const gInt = parseInt(g, 16);
    const bInt = parseInt(b, 16);

    const rNorm = rInt / 255;
    const gNorm = gInt / 255;
    const bNorm = bInt / 255;

    const valueMax = Math.max(rNorm, gNorm, bNorm);
    const valueMin = Math.min(rNorm, gNorm, bNorm);
    const valueDelta = valueMax - valueMin;

    const luminance = (valueMax + valueMin) / 2;
    const saturation = valueDelta === 0 ? 0 : valueDelta / (1 - Math.abs(2 * luminance - 1));
    
    let HUE
    if(valueMax === rNorm) HUE = 60 * (((gNorm - bNorm) / valueDelta) % 6);
    if(valueMax === gNorm) HUE = 60 * (((bNorm - rNorm) / valueDelta) + 2);
    if(valueMax === bNorm) HUE = 60 * (((rNorm - gNorm) / valueDelta) + 4);
    if(HUE < 0) HUE = (HUE + 360) % 360;

    const HSL = [HUE, saturation, luminance];

    const triadicA = (HUE + 120) % 360;
    const triadicB = (HUE - 120) % 360;

    const hexTriadicA = hslToHex(triadicA, saturation, luminance);
    const hexTriadicB = hslToHex(triadicB, saturation, luminance);

    return console.log(hexTriadicA, hexTriadicB);
};

const hslToHex = (h, s, l) => {
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const hPrime = h / 60;
    const x = c * (1 - Math.abs((hPrime % 2) - 1));
    const m = l - c / 2;

    let r1, g1, b1;
    if (0 <= hPrime && hPrime < 1) {
      r1 = c; g1 = x; b1 = 0;
    } else if (1 <= hPrime && hPrime < 2) {
      r1 = x; g1 = c; b1 = 0;
    } else if (2 <= hPrime && hPrime < 3) {
      r1 = 0; g1 = c; b1 = x;
    } else if (3 <= hPrime && hPrime < 4) {
      r1 = 0; g1 = x; b1 = c;
    } else if (4 <= hPrime && hPrime < 5) {
      r1 = x; g1 = 0; b1 = c;
    } else if (5 <= hPrime && hPrime < 6) {
      r1 = c; g1 = 0; b1 = x;
    }

    const r = Math.round((r1 + m) * 255);
    const g = Math.round((g1 + m) * 255);
    const b = Math.round((b1 + m) * 255);

    const rHex = r.toString(16).padStart(2, "0");
    const gHex = g.toString(16).padStart(2, "0");
    const bHex = b.toString(16).padStart(2, "0");

    return `#${rHex}${gHex}${bHex}`;
};

convertTriadicColors(pink)