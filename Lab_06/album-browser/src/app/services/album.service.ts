import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  private LOCAL_STORAGE_KEY = 'album_browser_data';

  constructor(private http: HttpClient) {
    this.initializeStorage();
  }

  private initializeStorage(): void {
    // Инициализируем localStorage если его нет
    if (!localStorage.getItem(this.LOCAL_STORAGE_KEY)) {
      localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify({
        albums: [],
        deletedIds: [],
        lastUpdate: new Date().toISOString()
      }));
    }
  }

  private getStorageData(): any {
    try {
      const data = localStorage.getItem(this.LOCAL_STORAGE_KEY);
      return data ? JSON.parse(data) : { albums: [], deletedIds: [], lastUpdate: null };
    } catch (error) {
      console.error('Error reading storage:', error);
      return { albums: [], deletedIds: [], lastUpdate: null };
    }
  }

  private saveToStorage(albums: Album[], deletedIds: number[]): void {
    try {
      localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify({
        albums: albums,
        deletedIds: deletedIds,
        lastUpdate: new Date().toISOString()
      }));
    } catch (error) {
      console.error('Error saving to storage:', error);
    }
  }

  private mergeAlbums(apiAlbums: Album[], localAlbums: Album[], deletedIds: number[]): Album[] {
    const albumMap = new Map<number, Album>();

    for (const album of apiAlbums) {
      albumMap.set(album.id, album);
    }

    for (const album of localAlbums) {
      albumMap.set(album.id, album);
    }

    return Array.from(albumMap.values()).filter(album => !deletedIds.includes(album.id));
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl).pipe(
      map(apiAlbums => {
        const storageData = this.getStorageData();
        const localAlbums = storageData.albums || [];
        const deletedIds = storageData.deletedIds || [];

        return this.mergeAlbums(apiAlbums, localAlbums, deletedIds);
      })
    );
  }

  getAlbum(id: number): Observable<Album> {
    const storageData = this.getStorageData();
    
    // Проверяем есть ли в локальном хранилище
    const localAlbum = storageData.albums.find((a: Album) => a.id === id);
    if (localAlbum) {
      return new Observable(observer => {
        observer.next(localAlbum);
        observer.complete();
      });
    }
    
    return this.http.get<Album>(`${this.apiUrl}/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/${album.id}`, album).pipe(
      map(updatedAlbum => {
        const storageData = this.getStorageData();
        const albums = storageData.albums || [];
        
        // Ищем альбом в локальном хранилище
        const index = albums.findIndex((a: Album) => a.id === updatedAlbum.id);
        
        if (index >= 0) {
          // Обновляем существующий
          albums[index] = updatedAlbum;
        } else {
          // Добавляем новый
          albums.push(updatedAlbum);
        }
        
        // Сохраняем
        this.saveToStorage(albums, storageData.deletedIds || []);
        
        return updatedAlbum;
      })
    );
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      map(() => {
        const storageData = this.getStorageData();
        const albums = (storageData.albums || []).filter((a: Album) => a.id !== id);
        const deletedIds = storageData.deletedIds || [];
        
        if (!deletedIds.includes(id)) {
          deletedIds.push(id);
        }
        
        // Сохраняем
        this.saveToStorage(albums, deletedIds);
        
        return undefined as any;
      })
    );
  }

  clearStorage(): void {
    localStorage.removeItem(this.LOCAL_STORAGE_KEY);
    this.initializeStorage();
  }
}
