import { buttonContainer } from "../script.js";
import JStyles from "./buttonCSS.js";

export const choicesButtonStyles = () => {
    if (!buttonContainer) {
        return;
    }

    const buttons = buttonContainer.querySelectorAll("button");
    const imgs = buttonContainer.querySelectorAll("img");

    buttons.forEach((button) => {
        Object.assign(button.style, JStyles.choicesButton);
    });

    imgs.forEach((img) => {
        Object.assign(img.style, JStyles.choicesButtonIcon);
    });
};
