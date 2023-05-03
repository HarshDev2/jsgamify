export class Game {
    constructor(canvas) {
      if (!(canvas instanceof HTMLCanvasElement)) {
        throw new Error('Invalid argument: canvas must be a canvas element');
      }
      this.ctx = canvas.getContext('2d');
      document.addEventListener('keydown', () => this.onSpaceKeyPressed);
    }
  
    addImage(imageUrl) {
      const img = new Image();

      img.src = imageUrl;
      img.onload = () => {
        this.ctx.drawImage(img, 0, 0); // draw the image on the canvas
      };
    }

    onSpaceKeyPressed(callback){
        if (typeof callback === 'function') {
            console.log("he")
        }
    }
  }
  