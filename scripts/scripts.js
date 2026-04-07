
const format = document.getElementById("format");
const button = document.getElementById("generate");
const select = document.getElementById("quantity");
const palette = document.getElementById("palette");


button.addEventListener("click", () => {
    const quantity = parseInt(select.value);
    const type = format.value;

    //Borramos colores viejos para evitar acumulacion
    palette.innerHTML = "";

    for (let i = 0; i < quantity; i++) {
    //Creamos un cuadro para poner el color que se genera aleatoriamente.
        const div = document.createElement("div");

        let backgroundColor;
        let textColor;

    if (type === "hex") {
    backgroundColor = generateRandomColor();
    textColor = backgroundColor;
    div.style.color = getTextColor(backgroundColor);
    } else{
     const {h, s, l} = generateRandomHSL();

     backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
     textColor = hslToHex(h, s, l);

     div.style.color = getTextColor(textColor);
    }
        
            div.style.backgroundColor = backgroundColor;
            div.textContent = textColor;

            div.addEventListener("click", () =>{
                navigator.clipboard.writeText(textColor);
                showToast("Copied: " + textColor);
            });

            palette.appendChild(div);
    }
});

function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() *16);
        color += letters[index];
    }

    return color;
}

/**Con esta funcion vamos a calcular si el color
 * es claro u oscuro y elige el color del texto con base en esto*/

function getTextColor(backgroundColor) {
    const r = parseInt(backgroundColor.substring(1, 3),16);
    const g = parseInt(backgroundColor.substring(3, 5), 16);
    const b = parseInt(backgroundColor.substring(5, 7), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 128 ? "black" : "white";
}

//Con esta funcion vamos a generar aleatoriamente el HSL
function generateRandomHSL () {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);

    return {h, s, l};
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.textContent = message;

    toast.classList.add("toast");

    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 2000);
}

function hslToHex(h,s,l){
    

    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;

    let r = 0, g = 0, b = 0;

    if (h >= 0 && h < 60) {
        r = c; g = x; b = 0;
    } else if (h >= 60 && h < 120) {
        r = x; g = c; b = 0;
    } else if (h >= 120 && h < 180) {
        r = 0; g = c; b = x;
    } else if (h >= 180 && h < 240) {
        r = 0; g = x; b = c;
    } else if (h >= 240 && h < 300) {
        r = x; g = 0; b = c;
    } else {
        r = c; g = 0; b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    const toHex = (value) => value.toString(16).padStart(2, "0").toUpperCase();

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}