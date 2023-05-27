import { buttonContainer, armContainer } from "../script.js";
import buttonCSS from "./jscss/buttonCSS.js";
import webformatCSS from "./jscss/webformatCSS.js";
import armCSS from "./jscss/armCSS.js";

const getChoicesButtonStyles = () => {
    if (!buttonContainer) {
        return;
    }
    console.log(buttonCSS);
    const container = document.getElementsByClassName("button-container");
    const containerArray = Array.from(container);

    containerArray.forEach((container) => {
        Object.assign(container.style, buttonCSS.ButtonContainer);
    });

    const buttons = buttonContainer.querySelectorAll("button");
    const imgs = buttonContainer.querySelectorAll("img");

    buttons.forEach((button) => {
        Object.assign(button.style, buttonCSS.Button);
    });

    imgs.forEach((img) => {
        Object.assign(img.style, buttonCSS.ButtonIcon);
    });
};

const getWebFormatStyles = () => {
    const body = document.querySelectorAll("*");
    body.forEach((body) => {
        Object.entries(webformatCSS).forEach(([selector, declarations]) => {
            if (body.matches(selector)) {
                Object.entries(declarations).forEach(([property, value]) => {
                    body.style[property] = value;
                });
            }
        });
    });
};

const getArmStyles = () => {
    const container = armContainer;
    const containerArray = Array.from(container);

    containerArray.forEach((container) => {
        Object.assign(container.style, armCSS.ArmContainer);
    });
};

export const styles = () => {
    getChoicesButtonStyles();
    getWebFormatStyles();
};
