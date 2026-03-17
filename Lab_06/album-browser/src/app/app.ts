import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="navbar-brand">Album Browser</div>
      <ul class="navbar-menu">
        <li>
          <a 
            routerLink="/home" 
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            class="nav-link"
          >
            Home
          </a>
        </li>
        <li>
          <a 
            routerLink="/about" 
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            class="nav-link"
          >
            About
          </a>
        </li>
        <li>
          <a 
            routerLink="/albums" 
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            class="nav-link"
          >
            Albums
          </a>
        </li>
      </ul>
    </nav>

    <main class="content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background-color: #fff;
    }

    .navbar {
      background-color: #333;
      padding: 0;
      display: flex;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .navbar-brand {
      color: white;
      font-size: 1.5em;
      font-weight: bold;
      padding: 15px 20px;
      flex: 0 0 auto;
    }

    .navbar-menu {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 0;
      flex: 1;
      justify-content: flex-end;
      padding-right: 20px;
    }

    .navbar-menu li {
      margin: 0;
    }

    .nav-link {
      color: white;
      text-decoration: none;
      padding: 15px 20px;
      display: block;
      transition: background-color 0.3s;
    }

    .nav-link:hover {
      background-color: #555;
    }

    .nav-link.active {
      background-color: #007bff;
      font-weight: bold;
    }

    .content {
      min-height: calc(100vh - 60px);
    }

    @media (max-width: 768px) {
      .navbar {
        flex-wrap: wrap;
      }

      .navbar-menu {
        justify-content: flex-start;
        padding-right: 0;
        width: 100%;
      }

      .nav-link {
        padding: 12px 15px;
      }
    }
  `]
})
export class App {}
