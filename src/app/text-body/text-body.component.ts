import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-body',
  templateUrl: './text-body.component.html',
  styleUrls: ['./text-body.component.css']
})


export class TextBodyComponent implements OnInit {
  intervalId: any;

  public ngOnInit(): void {
    this.matrix();
  }
  matrix() {
    const canvas = document.getElementById('matrix')! as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';

    const alphabet = katakana + latin + nums;

    const fontSize = 8;
    const columns = canvas.width / fontSize;

    const rainDrops: string | any[] = [];

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      context!.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context!.fillRect(0, 0, canvas.width, canvas.height);

      context!.fillStyle = '#0F0';
      context!.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context!.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    // Clear any existing interval before setting a new one
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    // Set a new interval and store its ID for future reference
    this.intervalId = setInterval(draw, 30);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const canvas = document.getElementById('matrix')! as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    this.matrix(); // Restart the matrix animation after updating the canvas dimensions
  }
}
