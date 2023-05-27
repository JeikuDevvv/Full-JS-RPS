import { buttonContainer } from "../script.js";
import buttonCSS from "./jscss/buttonCSS.js";
import webformatCSS from "./jscss/webformatCSS.js";

const getChoicesButtonStyles = () => {
    if (!buttonContainer) {
        return;
    }

    const buttons = buttonContainer.querySelectorAll("button");
    const imgs = buttonContainer.querySelectorAll("img");

    buttons.forEach((button) => {
        Object.assign(button.style, buttonCSS.choicesButton);
    });

    imgs.forEach((img) => {
        Object.assign(img.style, buttonCSS.choicesButtonIcon);
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

export const styles = () => {
    getChoicesButtonStyles();
    getWebFormatStyles();
};
