"use strict";
class Main {
    constructor() {
        this.texts = [
            "y",
            "s",
            "K",
            "7",
            "2",
            "l",
            "D",
            "?",
            "s",
            "aj",
            "p"
        ];
        this.textCount = this.texts.length;
        this.PassText = "";
        this.outputNum = 5 + (Math.random() + 1);
        this.outputArea = document.getElementById("outputArea");
        this.createPassText();
        this.CopyButton();
    }
    createPassText() {
        this.PasstText = "";
        for (let i = 0; i < this.outputNum; i++) {
            this.PassText += this.getText();
        }
        this.displayOutPutText();
    }
    getText() {
        return this.texts[Math.floor(Math.random() * this.textCount)];
    }
    displayOutPutText() {
        this.outputArea.value = this.PassText;
    }
    CreateButtons() {
        document.getElementById("CreateButton").addEventListener("click", () => this.createPassText());
        document.getElementById("CopyButton").addEventListener("click", () => {
            this.cop;
        });
    }
}
window.addEventListener("DOMContentLoaded", () => new Main());
