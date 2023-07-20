
const colorInput = document.querySelectorAll(".colors input");
const gradientBox = document.querySelector(".gradient-box");
const selectDirection = document.querySelector(".select-box select");
const textarea = document.querySelector("textarea");

console.log(colorInput,gradientBox,selectDirection);

const generateRandom = () =>{
    // grenerate random hexadecimal color values
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom) =>{
    if( isRandom){
        colorInput[0].value = generateRandom();
        colorInput[1].value = generateRandom();
    }

    console.log("color updated");

    const gradient = `linear-gradient(${selectDirection.value}, ${colorInput[0].value}, ${colorInput[1].value})`;

    console.log(gradient);

    gradientBox.style.background = `${gradient}`;

    // document.body.style.background = `${gradient}`;

    textarea.value = `background: ${gradient};`;
}

colorInput.forEach( (input) => {
    // calling generateGradient function on color input clicks
    input.addEventListener("input", ()=>{
        generateGradient(false);
    });
});

selectDirection.addEventListener("change", () =>{
    generateGradient(false);
});

const refreshBtn = document.querySelector(".refresh");

refreshBtn.addEventListener("click", ()=>{
    generateGradient(true);
});

const copyBtn = document.querySelector(".copy");

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = "Code Copied";

    setTimeout( () => {
        copyBtn.innerText = "Copy Code"
    },1700);
});