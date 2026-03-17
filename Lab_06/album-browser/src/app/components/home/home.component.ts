import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home-container">
      <h1>Welcome to Album Browser</h1>
      <p>Explore a collection of albums and their photos with our interactive album browser application.</p>
      <p>This application allows you to browse albums, view details, and manage your album collection.</p>
      <button routerLink="/albums" class="browse-button">Browse Albums</button>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 800px;
      margin: 50px auto;
      padding: 30px;
      text-align: center;
    }

    h1 {
      color: #333;
      font-size: 2.5em;
      margin-bottom: 20px;
    }

    p {
      color: #666;
      font-size: 1.1em;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .browse-button {
      background-color: #007bff;
      color: white;
      padding: 12px 30px;
      font-size: 1em;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .browse-button:hover {
      background-color: #0056b3;
    }
  `]
})
export class HomeComponent {}
