import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="album-detail-container">
      <div *ngIf="loading" class="loading">
        <p>Loading album details...</p>
      </div>

      <div *ngIf="!loading && album" class="album-detail">
        <div class="detail-header">
          <h1>Album Details</h1>
          <button (click)="goBack()" class="back-button">← Back to Albums</button>
        </div>

        <div class="detail-content">
          <div class="detail-row">
            <label>Album ID:</label>
            <span>{{ album.id }}</span>
          </div>

          <div class="detail-row">
            <label>User ID:</label>
            <span>{{ album.userId }}</span>
          </div>

          <div class="detail-row">
            <label>Title:</label>
            <div class="edit-section">
              <input 
                [(ngModel)]="album.title" 
                type="text" 
                class="title-input"
                placeholder="Enter album title"
              />
            </div>
          </div>

          <div class="action-buttons">
            <button (click)="saveAlbum()" class="save-button">Save Changes</button>
            <button [routerLink]="['/albums', album.id, 'photos']" class="view-photos-button">
              View Photos
            </button>
          </div>

          <div *ngIf="savedMessage" class="success-message">
            {{ savedMessage }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .album-detail-container {
      max-width: 700px;
      margin: 30px auto;
      padding: 20px;
    }

    .loading {
      text-align: center;
      padding: 40px;
      color: #666;
      font-size: 1.1em;
    }

    .detail-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }

    h1 {
      color: #333;
      margin: 0;
    }

    .back-button {
      background-color: #6c757d;
      color: white;
      padding: 8px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .back-button:hover {
      background-color: #5a6268;
    }

    .detail-content {
      background-color: #f9f9f9;
      padding: 25px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }

    .detail-row {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
    }

    label {
      font-weight: bold;
      color: #333;
      margin-bottom: 8px;
      font-size: 1em;
    }

    span {
      color: #666;
      padding: 8px;
      background-color: white;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    .edit-section {
      display: flex;
    }

    .title-input {
      flex: 1;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1em;
    }

    .title-input:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.25);
    }

    .action-buttons {
      display: flex;
      gap: 10px;
      margin-top: 25px;
    }

    .save-button, .view-photos-button {
      flex: 1;
      padding: 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1em;
      transition: background-color 0.3s;
    }

    .save-button {
      background-color: #28a745;
      color: white;
    }

    .save-button:hover {
      background-color: #218838;
    }

    .view-photos-button {
      background-color: #007bff;
      color: white;
    }

    .view-photos-button:hover {
      background-color: #0056b3;
    }

    .success-message {
      margin-top: 15px;
      padding: 12px;
      background-color: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
      border-radius: 4px;
      text-align: center;
    }
  `]
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;
  savedMessage = '';

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadAlbumDetail(id);
    });
  }

  loadAlbumDetail(id: number): void {
    this.loading = true;
    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        this.album = { ...album };
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading album:', error);
        this.loading = false;
      }
    });
  }

  saveAlbum(): void {
    if (this.album) {
      this.albumService.updateAlbum(this.album).subscribe({
        next: (updatedAlbum) => {
          this.album = updatedAlbum;
          this.savedMessage = '✓ Album saved successfully!';
          setTimeout(() => {
            this.savedMessage = '';
          }, 3000);
        },
        error: (error) => {
          console.error('Error saving album:', error);
          this.savedMessage = '✗ Error saving album';
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
