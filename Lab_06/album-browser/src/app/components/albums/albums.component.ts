import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="albums-container">
      <h1>Albums</h1>
      
      <div *ngIf="loading" class="loading">
        <p>Loading albums...</p>
      </div>

      <div *ngIf="!loading && albums.length === 0" class="empty-state">
        <p>No albums found.</p>
      </div>

      <div *ngIf="!loading && albums.length > 0" class="albums-list">
        <div *ngFor="let album of albums" class="album-item">
          <div class="album-info">
            <h3>
              <a [routerLink]="['/albums', album.id]">{{ album.title }}</a>
            </h3>
            <p class="album-id">Album ID: {{ album.id }}</p>
          </div>
          <button (click)="deleteAlbum(album.id)" class="delete-button">Delete</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .albums-container {
      max-width: 900px;
      margin: 30px auto;
      padding: 20px;
    }

    h1 {
      color: #333;
      text-align: center;
      margin-bottom: 30px;
    }

    .loading, .empty-state {
      text-align: center;
      padding: 40px;
      color: #666;
      font-size: 1.1em;
    }

    .albums-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .album-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-color: #f9f9f9;
      transition: background-color 0.3s;
    }

    .album-item:hover {
      background-color: #f0f0f0;
    }

    .album-info {
      flex: 1;
    }

    .album-item h3 {
      margin: 0;
      color: #333;
    }

    .album-item h3 a {
      color: #007bff;
      text-decoration: none;
      cursor: pointer;
    }

    .album-item h3 a:hover {
      text-decoration: underline;
    }

    .album-id {
      margin: 5px 0 0 0;
      color: #999;
      font-size: 0.9em;
    }

    .delete-button {
      background-color: #dc3545;
      color: white;
      padding: 8px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .delete-button:hover {
      background-color: #c82333;
    }
  `]
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.loading = true;
    this.albumService.getAlbums().subscribe({
      next: (albums) => {
        this.albums = albums;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading albums:', error);
        this.loading = false;
      }
    });
  }

  deleteAlbum(id: number): void {
    if (confirm('Are you sure you want to delete this album?')) {
      this.albumService.deleteAlbum(id).subscribe({
        next: () => {
          this.albums = this.albums.filter(album => album.id !== id);
        },
        error: (error) => {
          console.error('Error deleting album:', error);
          alert('Error deleting album');
        }
      });
    }
  }
}
