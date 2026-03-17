import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-container">
      <h1>About This Application</h1>
      <div class="about-content">
        <h2>Application Information</h2>
        <p><strong>Developer:</strong> Yernazar Altynbekov</p>
        <p><strong>Course:</strong> Angular Development Lab 6</p>
        <p><strong>Project:</strong> Album Browser Application</p>
        
        <h2>Features</h2>
        <ul>
          <li>Browse all available albums</li>
          <li>View detailed information about each album</li>
          <li>Edit album titles</li>
          <li>Delete albums from the collection</li>
          <li>View photos associated with albums</li>
          <li>Responsive grid layout for photo display</li>
        </ul>
        
        <h2>Technology Stack</h2>
        <ul>
          <li>Angular 19+ (standalone components)</li>
          <li>TypeScript</li>
          <li>RxJS for reactive programming</li>
          <li>HttpClient for API communication</li>
          <li>Angular Router for navigation</li>
        </ul>
        
        <h2>Data Source</h2>
        <p>This application uses the JSONPlaceholder API for sample data about albums and photos.</p>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      max-width: 900px;
      margin: 30px auto;
      padding: 30px;
    }

    h1 {
      color: #333;
      text-align: center;
      margin-bottom: 30px;
    }

    h2 {
      color: #555;
      margin-top: 30px;
      margin-bottom: 15px;
      border-bottom: 2px solid #007bff;
      padding-bottom: 10px;
    }

    p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 10px;
    }

    ul {
      margin-left: 20px;
      color: #666;
    }

    li {
      margin-bottom: 8px;
      line-height: 1.6;
    }

    strong {
      color: #333;
    }
  `]
})
export class AboutComponent {}
