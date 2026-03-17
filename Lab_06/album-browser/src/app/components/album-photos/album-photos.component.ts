import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="photos-container">
      <div class="photos-header">
        <h1>Album Photos</h1>
        <button (click)="goBack()" class="back-button">← Back to Album</button>
      </div>

      <div *ngIf="loading" class="loading">
        <p>Loading photos...</p>
      </div>

      <div *ngIf="!loading && photos.length === 0" class="empty-state">
        <p>No photos found for this album.</p>
      </div>

      <div *ngIf="!loading && photos.length > 0" class="photos-grid">
        <div *ngFor="let photo of photos; let i = index" class="photo-item" [title]="photo.title">
          <img [src]="getPhotoUrl(i)" [alt]="photo.title" class="photo-thumbnail" (error)="handleImageError($event)" />
          <p class="photo-title">{{ photo.title }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .photos-container {
      max-width: 1200px;
      margin: 30px auto;
      padding: 20px;
    }

    .photos-header {
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

    .loading, .empty-state {
      text-align: center;
      padding: 40px;
      color: #666;
      font-size: 1.1em;
    }

    .photos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
    }

    .photo-item {
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 5px;
      overflow: hidden;
      transition: transform 0.3s, box-shadow 0.3s;
      cursor: pointer;
    }

    .photo-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .photo-thumbnail {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .photo-title {
      padding: 10px;
      margin: 0;
      color: #333;
      font-size: 0.9em;
      line-height: 1.4;
      min-height: 40px;
      display: flex;
      align-items: center;
      text-align: center;
      border-top: 1px solid #eee;
    }

    @media (max-width: 768px) {
      .photos-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 15px;
      }

      .photo-thumbnail {
        height: 150px;
      }
    }

    @media (max-width: 480px) {
      .photos-grid {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 10px;
      }

      .photo-thumbnail {
        height: 120px;
      }

      .photo-title {
        font-size: 0.8em;
        padding: 8px;
      }
    }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  loading = true;
  albumId: number = 0;

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.albumId = +params['id'];
      this.loadPhotos(this.albumId);
    });
  }

  loadPhotos(albumId: number): void {
    this.loading = true;
    this.albumService.getAlbumPhotos(albumId).subscribe({
      next: (photos) => {
        this.photos = photos;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading photos:', error);
        this.loading = false;
      }
    });
  }

  getPhotoUrl(index: number): string {
    // Используем picsum.photos для красивых реальных фотографий
    const photoId = (this.albumId * 100 + index);
    return `https://picsum.photos/200/200?random=${photoId}`;
  }

  handleImageError(event: any): void {
    // Если изображение не загрузилось, используем Unsplash
    event.target.src = `https://source.unsplash.com/200x200/?nature,landscape&random=${Math.random()}`;
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}
