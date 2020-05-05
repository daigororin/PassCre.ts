class Main {
  texts:string[] = [
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
  textCount:number = this.texts.length;
  PassText:string = "";
  outputNum:number = 5 + (Math.random() + 1);
  outputArea:HTMLTextAreaElement;

  constructor() {
      this.outputArea = <HTMLTextAreaElement> document.getElementById("outputArea");
      this.createPassText();
      this.CopyButton();
  }

  private createPassText():void {
      this.PasstText = "";
      for (let i:number = 0; i < this.outputNum; i++) {
          this.PassText += this.getText();

      }
      this.displayOutPutText();
  }

  private getText():string {
      return this.texts[Math.floor(Math.random() * this.textCount)]
  }

  private displayOutPutText():void {
      this.outputArea.value = this.PassText;
  }

  private CreateButtons():void {
      document.getElementById("CreateButton").addEventListener("click", () => this.createPassText());
      document.getElementById("CopyButton").addEventListener("click", () => {this.cop
      });
  }
}

window.addEventListener("DOMContentLoaded", () => new Main());