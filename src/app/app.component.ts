import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  length = 0;
  password = '';
  letters = false;
  symbols = false;
  nums = false;

  onChangeLength(event: Event) {
    const parsedValue = parseInt((event.target as HTMLInputElement).value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onButtonClick(): void {
    const numbers = '123456789';
    const symbols = '!@#$%&*(){}[]/';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let validPassword = '';
    if (this.letters) {
      validPassword += letters;
    }
    if (this.nums) {
      validPassword += numbers;
    }
    if (this.symbols) {
      validPassword += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      let index = Math.floor(Math.random() * validPassword.length);
      generatedPassword += validPassword[index];
    }
    console.log(generatedPassword);
    this.password = generatedPassword;

    const text = `
    Length : ${this.length}
    Use Letters: ${this.letters}
    Use Symbols: ${this.symbols}
    Use Numbers: ${this.nums}
    Password: ${this.password}
    `;
    console.log(text);
  }

  useLetters() {
    this.letters = !this.letters;
  }
  useSymbols() {
    this.symbols = !this.symbols;
  }
  useNumbers() {
    this.nums = !this.nums;
  }
}
