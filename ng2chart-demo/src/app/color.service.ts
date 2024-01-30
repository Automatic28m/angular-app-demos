import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }

  // Function to generate a random color
  generateRandomColor(): string {
    const randomColor = () => Math.floor(Math.random() * 256);
    return `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 0.3)`;
  }
}
