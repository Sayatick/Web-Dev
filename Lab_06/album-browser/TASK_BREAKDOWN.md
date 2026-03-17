# Подробный разбор выполнения задания

Этот файл подробно объясняет:

- что именно требовалось в каждой части задания;
- в каких файлах это реализовано;
- какой код за это отвечает;
- как этот код работает;
- насколько текущая реализация соответствует формулировке задания.

Документ написан как пояснение к проекту `album-browser`.

---

## 1. Общая идея проекта

По заданию нужно было создать Angular-приложение для просмотра альбомов и фотографий с использованием JSONPlaceholder API.

Основные возможности, которые требовались:

- настроить маршрутизацию между страницами;
- сделать сервис для работы с HTTP-запросами;
- реализовать 5 компонентов:
  - Home
  - About
  - Albums
  - AlbumDetail
  - AlbumPhotos
- получать список альбомов с API;
- открывать детали одного альбома;
- редактировать название альбома;
- удалять альбом из интерфейса;
- показывать фотографии выбранного альбома;
- использовать типы `Album` и `Photo`;
- не обращаться к `HttpClient` напрямую в компонентах;
- показать loading state и empty state;
- оформить проект аккуратно и разделить ответственность между файлами.

В проекте это сделано через standalone-компоненты Angular 19.

---

## 2. Структура проекта и роль файлов

Ниже перечислены основные файлы, которые участвуют в решении задания.

### Корневые конфигурационные файлы

#### `package.json`

Этот файл нужен для описания проекта и зависимостей.

Здесь находятся:

- имя проекта;
- версии Angular-пакетов;
- RxJS;
- TypeScript;
- команды запуска:
  - `npm start`
  - `npm build`

Пример из файла:

```json
"scripts": {
  "ng": "ng",
  "start": "ng serve",
  "build": "ng build"
}
```

Как это работает:

- `npm start` запускает dev server Angular;
- `npm build` собирает production-версию проекта;
- зависимости определяют, какие библиотеки использует приложение.

#### `angular.json`

Этот файл управляет Angular CLI.

Он задает:

- где находится точка входа;
- где лежит `index.html`;
- где лежат глобальные стили;
- куда складывать собранный проект;
- как запускать `serve` и `build`.

Ключевые поля:

```json
"index": "src/index.html",
"main": "src/main.ts",
"styles": [
  "src/styles.css"
],
"outputPath": "dist/album-browser"
```

Как это работает:

- Angular берет `src/main.ts` как старт приложения;
- подключает `src/index.html`;
- применяет глобальные стили из `src/styles.css`;
- при сборке кладет результат в `dist/album-browser`.

#### `tsconfig.json` и `tsconfig.app.json`

Это настройки TypeScript.

Они задают:

- режим компиляции;
- target (`ES2022`);
- подключение DOM API;
- базовые правила типизации;
- файлы, которые компилируются в приложении.

Они не содержат бизнес-логику, но без них TypeScript-проект не работал бы корректно.

---

## 3. Часть задания: настройка маршрутизации

### Что требовалось по заданию

Нужно было настроить Angular Router со следующими маршрутами:

- `""` -> редирект на `/home`
- `/home` -> `HomeComponent`
- `/about` -> `AboutComponent`
- `/albums` -> `AlbumsComponent`
- `/albums/:id` -> `AlbumDetailComponent`
- `/albums/:id/photos` -> `AlbumPhotosComponent`

Также требовалось:

- сделать навигационное меню, видимое на всех страницах;
- использовать `routerLink`;
- выделять активный пункт через `routerLinkActive`;
- разместить `<router-outlet>` в корневом компоненте.

### В каких файлах это реализовано

- `src/app/app.routes.ts`
- `src/app/app.ts`
- `src/app/app.config.ts`
- `src/main.ts`

---

### 3.1. Файл `src/app/app.routes.ts`

Это основной файл маршрутизации.

Код:

```ts
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent },
  { path: '**', redirectTo: '/home' }
];
```

Разбор:

- `path: ''` означает корневой URL.
- `redirectTo: '/home'` перенаправляет пользователя на домашнюю страницу.
- `pathMatch: 'full'` говорит Angular, что нужно срабатывать только на точное совпадение пустого пути.
- `path: 'home'` подключает `HomeComponent`.
- `path: 'about'` подключает `AboutComponent`.
- `path: 'albums'` открывает список альбомов.
- `path: 'albums/:id'` открывает страницу конкретного альбома.
- `:id` является параметром маршрута.
- `path: 'albums/:id/photos'` открывает страницу фотографий конкретного альбома.
- `path: '**'` ловит неизвестные адреса и отправляет пользователя на `/home`.

Именно этот файл выполняет основную часть требования по маршрутам.

---

### 3.2. Файл `src/app/app.ts`

Это корневой standalone-компонент приложения.

Он отвечает за:

- верхнее меню;
- ссылки между страницами;
- отображение нужной страницы через `<router-outlet>`.

Ключевой код:

```ts
imports: [RouterOutlet, RouterLink, RouterLinkActive]
```

Это означает:

- `RouterOutlet` нужен, чтобы Angular вставлял текущую страницу;
- `RouterLink` нужен для навигации;
- `RouterLinkActive` нужен для подсветки активной ссылки.

Ключевой HTML-код:

```html
<a 
  routerLink="/home" 
  routerLinkActive="active"
  [routerLinkActiveOptions]="{ exact: true }"
  class="nav-link"
>
  Home
</a>
```

Такая же логика используется и для `About`, и для `Albums`.

Разбор:

- `routerLink="/home"` задает переход;
- `routerLinkActive="active"` добавляет CSS-класс `active`, когда ссылка соответствует текущему пути;
- `[routerLinkActiveOptions]="{ exact: true }"` нужен, чтобы `/home` считался активным только на точном маршруте `/home`, а не на вложенных путях.

Ключевой участок для отображения страниц:

```html
<router-outlet></router-outlet>
```

Как это работает:

- пользователь нажимает на ссылку;
- Angular Router определяет нужный маршрут;
- соответствующий компонент вставляется в `router-outlet`.

То есть файл `app.ts` реализует требование меню и общего контейнера для маршрутов.

---

### 3.3. Файл `src/app/app.config.ts`

В этом файле подключается роутер и HTTP.

Код:

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};
```

Разбор:

- `provideRouter(routes)` подключает маршруты, объявленные в `app.routes.ts`;
- `provideHttpClient()` делает `HttpClient` доступным для внедрения в сервис.

Без этого:

- роутинг бы не работал;
- `AlbumService` не смог бы использовать HTTP-запросы.

---

### 3.4. Файл `src/main.ts`

Это точка входа приложения.

Код:

```ts
bootstrapApplication(App, appConfig).catch(err => console.error(err));
```

Разбор:

- Angular запускает `App` как главный компонент;
- одновременно подключает `appConfig`, в котором уже есть роутер и HTTP.

Итог:

- маршрутизация полностью подключается именно через `main.ts` + `app.config.ts`.

---

## 4. Часть задания: создать AlbumService и работу с HTTP

### Что требовалось по заданию

Нужно было:

- создать `AlbumService`;
- внедрить туда `HttpClient`;
- реализовать методы:
  - `getAlbums()`
  - `getAlbum(id)`
  - `getAlbumPhotos(id)`
  - `updateAlbum(album)`
  - `deleteAlbum(id)`
- все методы должны возвращать `Observable`;
- компоненты не должны работать с `HttpClient` напрямую;
- нужно вынести типы `Album` и `Photo` в отдельные файлы.

### В каких файлах это реализовано

- `src/app/services/album.service.ts`
- `src/app/models/album.model.ts`
- `src/app/models/photo.model.ts`

---

### 4.1. Файл `src/app/services/album.service.ts`

Это главный сервис приложения.

Именно здесь собрана вся работа с API и локальным хранением изменений.

#### Подключение зависимостей

```ts
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';
```

Разбор:

- `HttpClient` делает HTTP-запросы;
- `Observable` используется как реактивный тип результата;
- `map` нужен для преобразования ответа;
- `Album` и `Photo` дают типизацию.

#### Объявление сервиса

```ts
@Injectable({
  providedIn: 'root'
})
```

Разбор:

- `providedIn: 'root'` означает, что Angular создает один общий экземпляр сервиса для всего приложения.

#### Базовый адрес API

```ts
private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
```

Разбор:

- все запросы к альбомам строятся от этого адреса;
- для деталей и фото к нему добавляются нужные части пути.

#### Локальное хранилище

```ts
private LOCAL_STORAGE_KEY = 'album_browser_data';
```

Это нужно, потому что JSONPlaceholder не сохраняет изменения по-настоящему.  
`PUT` и `DELETE` возвращают успешный ответ, но если заново запросить данные с API, ты получишь старое состояние.

Чтобы интерфейс все равно вел себя так, будто изменение сохранилось, в сервисе используется `localStorage`.

---

### 4.2. Инициализация localStorage

Код:

```ts
private initializeStorage(): void {
  if (!localStorage.getItem(this.LOCAL_STORAGE_KEY)) {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify({
      albums: [],
      deletedIds: [],
      lastUpdate: new Date().toISOString()
    }));
  }
}
```

Разбор:

- если по ключу `album_browser_data` еще ничего нет;
- создается объект с пустыми массивами;
- `albums` хранит локально измененные альбомы;
- `deletedIds` хранит id удаленных альбомов;
- `lastUpdate` просто фиксирует дату последнего изменения.

Этот код вызывается в конструкторе сервиса:

```ts
constructor(private http: HttpClient) {
  this.initializeStorage();
}
```

То есть при первом использовании сервиса хранилище сразу подготавливается.

---

### 4.3. Получение данных из localStorage

Код:

```ts
private getStorageData(): any {
  try {
    const data = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    return data ? JSON.parse(data) : { albums: [], deletedIds: [], lastUpdate: null };
  } catch (error) {
    console.error('Error reading storage:', error);
    return { albums: [], deletedIds: [], lastUpdate: null };
  }
}
```

Разбор:

- метод берет строку из `localStorage`;
- преобразует ее из JSON в объект;
- если произошла ошибка чтения, возвращает безопасное значение по умолчанию.

Это важно для устойчивости приложения: даже если хранилище повреждено, приложение не падает.

---

### 4.4. Сохранение данных в localStorage

Код:

```ts
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
```

Разбор:

- сохраняется новый набор локально измененных альбомов;
- сохраняется список удаленных id;
- фиксируется время изменения.

---

### 4.5. Объединение API-данных и локальных изменений

Этот метод появился для корректной работы редактирования.

Код:

```ts
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
```

Разбор по шагам:

1. Создается `Map`, где ключом будет `album.id`.
2. Сначала туда складываются альбомы из API.
3. Потом туда складываются локально измененные альбомы.
4. Если `id` совпадает, локальный альбом перезаписывает API-версию.
5. В конце удаляются все альбомы, чьи `id` находятся в `deletedIds`.

Почему это важно:

- раньше после редактирования одного альбома в `localStorage` хранился только он;
- список начинал строиться только из этого локального массива;
- остальные альбомы исчезали;
- теперь локальные данные не заменяют весь список, а только обновляют нужные записи.

Именно этот метод исправил баг с исчезновением альбомов после редактирования.

---

### 4.6. Метод `getAlbums()`

Код:

```ts
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
```

Что требовалось:

- получить все альбомы;
- вернуть `Observable<Album[]>`.

Как это работает:

- `this.http.get<Album[]>(this.apiUrl)` отправляет `GET /albums`;
- ответ приходит как массив `Album[]`;
- через `pipe(map(...))` массив дополнительно обрабатывается;
- к API-данным применяются локальные изменения и локальные удаления;
- наружу возвращается уже итоговый список.

Почему это соответствует заданию:

- используется `HttpClient`;
- возвращается `Observable<Album[]>`;
- логика находится в сервисе, а не в компоненте.

---

### 4.7. Метод `getAlbum(id: number)`

Код:

```ts
getAlbum(id: number): Observable<Album> {
  const storageData = this.getStorageData();

  const localAlbum = storageData.albums.find((a: Album) => a.id === id);
  if (localAlbum) {
    return new Observable(observer => {
      observer.next(localAlbum);
      observer.complete();
    });
  }

  return this.http.get<Album>(`${this.apiUrl}/${id}`);
}
```

Что требовалось:

- получить один альбом по id;
- вернуть `Observable<Album>`.

Как это работает:

- сначала сервис проверяет, есть ли локально измененная версия этого альбома;
- если есть, она сразу возвращается;
- если нет, выполняется `GET /albums/:id`.

Почему это полезно:

- если пользователь уже изменил название альбома, то на странице деталей он увидит новое название, а не старое из API.

---

### 4.8. Метод `getAlbumPhotos(id: number)`

Код:

```ts
getAlbumPhotos(id: number): Observable<Photo[]> {
  return this.http.get<Photo[]>(`${this.apiUrl}/${id}/photos`);
}
```

Что требовалось:

- получить фотографии альбома;
- вернуть `Observable<Photo[]>`.

Как это работает:

- выполняется запрос `GET /albums/:id/photos`;
- сервер возвращает список фотографий;
- список типизируется как `Photo[]`.

Это полностью соответствует заданию.

---

### 4.9. Метод `updateAlbum(album: Album)`

Код:

```ts
updateAlbum(album: Album): Observable<Album> {
  return this.http.put<Album>(`${this.apiUrl}/${album.id}`, album).pipe(
    map(updatedAlbum => {
      const storageData = this.getStorageData();
      const albums = storageData.albums || [];

      const index = albums.findIndex((a: Album) => a.id === updatedAlbum.id);

      if (index >= 0) {
        albums[index] = updatedAlbum;
      } else {
        albums.push(updatedAlbum);
      }

      this.saveToStorage(albums, storageData.deletedIds || []);

      return updatedAlbum;
    })
  );
}
```

Что требовалось:

- обновить альбом через `PUT /albums/:id`;
- вернуть `Observable<Album>`.

Как это работает:

1. Выполняется `PUT` запрос на API.
2. Сервер возвращает объект альбома как будто обновление успешно прошло.
3. После этого сервис обновляет локальное хранилище:
   - ищет альбом по `id`;
   - если альбом уже есть в локальных изменениях, заменяет его;
   - если нет, добавляет.
4. Сохраняет обновленные данные в `localStorage`.

Почему это нужно:

- JSONPlaceholder не хранит изменения реально;
- поэтому локальное хранилище нужно, чтобы пользователь видел сохраненное название даже после перехода между страницами.

---

### 4.10. Метод `deleteAlbum(id: number)`

Код:

```ts
deleteAlbum(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
    map(() => {
      const storageData = this.getStorageData();
      const albums = (storageData.albums || []).filter((a: Album) => a.id !== id);
      const deletedIds = storageData.deletedIds || [];

      if (!deletedIds.includes(id)) {
        deletedIds.push(id);
      }

      this.saveToStorage(albums, deletedIds);

      return undefined as any;
    })
  );
}
```

Что требовалось:

- удалить альбом;
- вернуть `Observable<void>`;
- интерфейс должен обновиться так, будто удаление успешно сохранилось.

Как это работает:

1. Отправляется `DELETE /albums/:id`.
2. После успешного ответа:
   - альбом удаляется из локального массива измененных альбомов;
   - его `id` записывается в `deletedIds`.
3. Потом `getAlbums()` больше не покажет этот альбом, потому что фильтрует его по `deletedIds`.

Это соответствует заданию: API только имитирует удаление, а интерфейс реально меняется за счет локальной логики.

---

### 4.11. Метод `clearStorage()`

Код:

```ts
clearStorage(): void {
  localStorage.removeItem(this.LOCAL_STORAGE_KEY);
  this.initializeStorage();
}
```

Этот метод не был прямо указан в задании, но полезен для отладки.

Что он делает:

- удаляет локально сохраненные изменения;
- создает новое чистое хранилище.

Это удобно, если нужно вернуть приложение в исходное состояние.

---

## 5. Часть задания: модели Album и Photo

### Что требовалось по заданию

Нужно было определить TypeScript-интерфейсы:

- `Album`
- `Photo`

Причем в отдельных файлах.

### В каких файлах это реализовано

- `src/app/models/album.model.ts`
- `src/app/models/photo.model.ts`

---

### 5.1. Файл `src/app/models/album.model.ts`

Код:

```ts
export interface Album {
  userId: number;
  id: number;
  title: string;
}
```

Разбор:

- `userId` показывает, какому пользователю принадлежит альбом;
- `id` это идентификатор альбома;
- `title` это название альбома.

Почему это важно:

- сервис и компоненты понимают точную структуру объекта;
- TypeScript подсказывает ошибки на этапе разработки;
- код становится чище и понятнее.

---

### 5.2. Файл `src/app/models/photo.model.ts`

Код:

```ts
export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
```

Разбор:

- `albumId` показывает, к какому альбому относится фото;
- `id` это идентификатор фотографии;
- `title` это подпись;
- `url` это полная картинка;
- `thumbnailUrl` это миниатюра.

По заданию именно `thumbnailUrl` желательно использовать в сетке фотографий.

---

## 6. Часть задания: реализовать 5 компонентов

### Что требовалось по заданию

Нужно было сделать ровно 5 компонентов:

- `HomeComponent`
- `AboutComponent`
- `AlbumsComponent`
- `AlbumDetailComponent`
- `AlbumPhotosComponent`

### В каких файлах это реализовано

- `src/app/components/home/home.component.ts`
- `src/app/components/about/about.component.ts`
- `src/app/components/albums/albums.component.ts`
- `src/app/components/album-detail/album-detail.component.ts`
- `src/app/components/album-photos/album-photos.component.ts`

---

## 7. Разбор `HomeComponent`

### Что просилось

Нужно было:

- сделать статическую приветственную страницу;
- показать название приложения и краткое описание;
- добавить кнопку или ссылку "Browse Albums", ведущую на `/albums`.

### Файл

- `src/app/components/home/home.component.ts`

### Ключевой код

```ts
imports: [RouterLink]
```

Разбор:

- компонент использует `RouterLink`, потому что кнопка внутри шаблона должна вести на другую страницу.

HTML-шаблон:

```html
<h1>Welcome to Album Browser</h1>
<p>Explore a collection of albums and their photos with our interactive album browser application.</p>
<button routerLink="/albums" class="browse-button">Browse Albums</button>
```

Разбор:

- `<h1>` выводит главный заголовок;
- `<p>` объясняют назначение приложения;
- `<button routerLink="/albums">` делает переход к списку альбомов.

Стили находятся в этом же файле внутри `styles`.

Почему это соответствует заданию:

- страница статическая;
- есть приветствие;
- есть переход к списку альбомов.

---

## 8. Разбор `AboutComponent`

### Что просилось

Нужно было:

- сделать статическую страницу "About";
- указать имя студента;
- указать курс;
- добавить информацию о приложении.

### Файл

- `src/app/components/about/about.component.ts`

### Ключевой код

HTML:

```html
<p><strong>Developer:</strong> Yernazar Altynbekov</p>
<p><strong>Course:</strong> Angular Development Lab 6</p>
<p><strong>Project:</strong> Album Browser Application</p>
```

Разбор:

- выводится имя разработчика;
- выводится название курса;
- указывается название проекта.

Также в шаблоне есть блоки:

- `Features`
- `Technology Stack`
- `Data Source`

Это делает страницу более содержательной и соответствует смыслу задания.

Почему это соответствует заданию:

- страница статическая;
- содержит информацию о проекте;
- содержит имя и курс.

---

## 9. Разбор `AlbumsComponent`

### Что просилось

Нужно было:

- получить список альбомов через `AlbumService`;
- показать `id` и `title`;
- сделать переход на `/albums/:id`;
- сделать кнопку удаления;
- показывать индикатор загрузки;
- обрабатывать пустое состояние.

### Файл

- `src/app/components/albums/albums.component.ts`

### Подключения

```ts
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';
```

Разбор:

- `CommonModule` нужен для `*ngIf` и `*ngFor`;
- `RouterLink` нужен для перехода по клику;
- `AlbumService` дает доступ к данным;
- `Album` используется для типизации массива.

### Поля компонента

```ts
albums: Album[] = [];
loading = true;
```

Разбор:

- `albums` хранит текущий список альбомов;
- `loading` управляет отображением индикатора загрузки.

### Загрузка данных

```ts
ngOnInit(): void {
  this.loadAlbums();
}
```

Разбор:

- после создания компонента вызывается `loadAlbums()`.

Сам метод:

```ts
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
```

Как это работает:

1. Включается индикатор загрузки.
2. Компонент обращается к сервису.
3. Когда данные приходят, список записывается в `this.albums`.
4. Загрузка выключается.
5. Если произошла ошибка, она выводится в консоль.

Это полностью выполняет требование загрузки данных через сервис.

### Шаблон списка

```html
<div *ngFor="let album of albums" class="album-item">
  <div class="album-info">
    <h3>
      <a [routerLink]="['/albums', album.id]">{{ album.title }}</a>
    </h3>
    <p class="album-id">Album ID: {{ album.id }}</p>
  </div>
  <button (click)="deleteAlbum(album.id)" class="delete-button">Delete</button>
</div>
```

Разбор:

- `*ngFor` выводит все альбомы;
- `[routerLink]="['/albums', album.id]"` формирует путь вида `/albums/5`;
- на экране видны `title` и `id`;
- кнопка `Delete` вызывает удаление.

### Loading и empty state

Код:

```html
<div *ngIf="loading" class="loading">
  <p>Loading albums...</p>
</div>

<div *ngIf="!loading && albums.length === 0" class="empty-state">
  <p>No albums found.</p>
</div>
```

Разбор:

- если идет загрузка, показывается `Loading albums...`;
- если загрузка завершена и список пустой, показывается `No albums found.`

Это соответствует UX-требованиям задания.

### Удаление альбома

Код:

```ts
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
```

Разбор:

- сначала пользователь подтверждает удаление;
- затем компонент вызывает сервис;
- после успешного ответа альбом удаляется из массива на экране;
- если есть ошибка, показывается `alert`.

Почему это соответствует заданию:

- удаление запускается через сервис;
- UI обновляется после удаления;
- компоненты не обращаются к HTTP напрямую.

---

## 10. Разбор `AlbumDetailComponent`

### Что просилось

Нужно было:

- считать `:id` из URL;
- загрузить один альбом;
- показать `id`, `title`, `userId`;
- сделать поле ввода с названием;
- сделать кнопку сохранения;
- сделать кнопку/ссылку просмотра фото;
- сделать кнопку назад;
- использовать `ActivatedRoute`.

### Файл

- `src/app/components/album-detail/album-detail.component.ts`

### Подключения

```ts
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
```

Разбор:

- `FormsModule` нужен для `[(ngModel)]`;
- `ActivatedRoute` нужен для чтения `:id`;
- `Router` нужен для перехода назад;
- `RouterLink` нужен для кнопки просмотра фотографий.

### Поля компонента

```ts
album: Album | null = null;
loading = true;
savedMessage = '';
```

Разбор:

- `album` хранит текущий альбом;
- `loading` показывает состояние загрузки;
- `savedMessage` хранит текст о результате сохранения.

### Чтение параметра маршрута

Код:

```ts
ngOnInit(): void {
  this.route.params.subscribe(params => {
    const id = +params['id'];
    this.loadAlbumDetail(id);
  });
}
```

Разбор:

- `this.route.params` дает доступ к параметрам URL;
- `params['id']` получает `id` как строку;
- `+params['id']` преобразует строку в число;
- после этого вызывается загрузка альбома.

Это полностью соответствует требованию использовать `ActivatedRoute`.

### Загрузка одного альбома

Код:

```ts
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
```

Разбор:

- вызывается метод сервиса `getAlbum(id)`;
- когда данные приходят, создается копия объекта через `{ ...album }`;
- это удобно, чтобы редактировать локальную версию объекта в форме;
- при ошибке загрузка выключается.

### Отображение деталей

Код:

```html
<span>{{ album.id }}</span>
<span>{{ album.userId }}</span>
```

И для названия:

```html
<input 
  [(ngModel)]="album.title" 
  type="text" 
  class="title-input"
  placeholder="Enter album title"
/>
```

Разбор:

- `album.id` и `album.userId` просто выводятся;
- `[(ngModel)]="album.title"` связывает поле ввода с объектом;
- когда пользователь печатает, `album.title` обновляется автоматически.

Это и есть реализация редактируемого title.

### Сохранение

Код:

```ts
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
```

Разбор:

- компонент вызывает `updateAlbum(...)` у сервиса;
- если ответ успешный, обновляет локальный объект;
- показывает сообщение об успехе;
- через 3 секунды сообщение убирается;
- при ошибке выводит сообщение об ошибке.

Это реализует update-операцию из задания.

### Переход к фото

Код:

```html
<button [routerLink]="['/albums', album.id, 'photos']" class="view-photos-button">
  View Photos
</button>
```

Разбор:

- строится путь `/albums/:id/photos`;
- Angular Router открывает компонент фотографий.

### Кнопка назад

Код:

```ts
goBack(): void {
  this.router.navigate(['/albums']);
}
```

Разбор:

- при нажатии пользователь возвращается к списку альбомов.

---

## 11. Разбор `AlbumPhotosComponent`

### Что просилось

Нужно было:

- считать `:id` из URL;
- загрузить фото выбранного альбома;
- показать их сеткой;
- вывести `title`;
- использовать `thumbnailUrl`;
- сделать кнопку назад на страницу альбома.

### Файл

- `src/app/components/album-photos/album-photos.component.ts`

### Поля компонента

```ts
photos: Photo[] = [];
loading = true;
albumId: number = 0;
```

Разбор:

- `photos` хранит список фотографий;
- `loading` отвечает за индикатор загрузки;
- `albumId` сохраняет id текущего альбома.

### Чтение параметра маршрута

Код:

```ts
ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.albumId = +params['id'];
    this.loadPhotos(this.albumId);
  });
}
```

Разбор:

- из URL берется `id`;
- преобразуется в число;
- загружаются фотографии.

### Загрузка фотографий

Код:

```ts
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
```

Разбор:

- компонент обращается к `AlbumService`;
- получает `Observable<Photo[]>`;
- сохраняет фотографии в массив `photos`;
- выключает loading после ответа.

### Отображение сетки

Код:

```html
<div *ngIf="!loading && photos.length > 0" class="photos-grid">
  <div *ngFor="let photo of photos; let i = index" class="photo-item" [title]="photo.title">
    <img [src]="getPhotoUrl(i)" [alt]="photo.title" class="photo-thumbnail" (error)="handleImageError($event)" />
    <p class="photo-title">{{ photo.title }}</p>
  </div>
</div>
```

Разбор:

- `*ngFor` создает карточку для каждой фотографии;
- `photo.title` выводится под изображением;
- `[title]="photo.title"` добавляет tooltip при наведении;
- `class="photos-grid"` включает CSS Grid.

### Адаптивная сетка

В стилях компонента есть:

```css
.photos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
```

Разбор:

- используется CSS Grid;
- колонки создаются автоматически;
- сетка адаптируется под размер экрана.

Также есть media queries для уменьшения размера карточек на планшетах и телефонах.

### Кнопка назад

Код:

```ts
goBack(): void {
  this.router.navigate(['/albums', this.albumId]);
}
```

Разбор:

- пользователь возвращается на страницу деталей текущего альбома.

### Важное замечание по соответствию заданию

Здесь есть одно отклонение от формулировки задания.

По условию лучше использовать:

```ts
photo.thumbnailUrl
```

Но в текущей версии компонента используется собственный метод:

```ts
getPhotoUrl(index: number): string {
  const photoId = (this.albumId * 100 + index);
  return `https://picsum.photos/200/200?random=${photoId}`;
}
```

И обработка ошибки изображения:

```ts
handleImageError(event: any): void {
  event.target.src = `https://source.unsplash.com/200x200/?nature,landscape&random=${Math.random()}`;
}
```

Что это значит:

- страница фотографий работает;
- сетка работает;
- title отображается;
- переходы работают;
- но источник изображения не соответствует условию буквально.

Если нужно строго подогнать под задание, здесь лучше заменить:

- `[src]="getPhotoUrl(i)"`

на:

- `[src]="photo.thumbnailUrl"`

Тогда реализация будет полностью соответствовать требованиям.

---

## 12. Часть задания: запрет на прямое использование HttpClient в компонентах

### Что просилось

Компоненты не должны сами делать HTTP-запросы.  
Все API-вызовы должны идти через `AlbumService`.

### Как это выполнено

Если посмотреть на компоненты:

- `AlbumsComponent`
- `AlbumDetailComponent`
- `AlbumPhotosComponent`

то в них нет `HttpClient`.

Вместо этого используется `AlbumService`, например:

```ts
constructor(private albumService: AlbumService) {}
```

и далее:

```ts
this.albumService.getAlbums()
this.albumService.getAlbum(id)
this.albumService.getAlbumPhotos(albumId)
this.albumService.updateAlbum(this.album)
this.albumService.deleteAlbum(id)
```

Почему это важно:

- компоненты отвечают за отображение и поведение интерфейса;
- сервис отвечает за данные;
- код становится чище;
- легче тестировать и поддерживать проект.

Это правильное разделение ответственности и полное соответствие заданию.

---

## 13. Часть задания: loading states и empty states

### Что просилось

Нужно было:

- показывать индикатор загрузки при запросах;
- корректно показывать пустое состояние.

### Где это реализовано

#### `AlbumsComponent`

Код:

```ts
loading = true;
```

И в шаблоне:

```html
<div *ngIf="loading" class="loading">
  <p>Loading albums...</p>
</div>

<div *ngIf="!loading && albums.length === 0" class="empty-state">
  <p>No albums found.</p>
</div>
```

#### `AlbumDetailComponent`

Код:

```ts
loading = true;
```

И в шаблоне:

```html
<div *ngIf="loading" class="loading">
  <p>Loading album details...</p>
</div>
```

#### `AlbumPhotosComponent`

Код:

```ts
loading = true;
```

И в шаблоне:

```html
<div *ngIf="loading" class="loading">
  <p>Loading photos...</p>
</div>

<div *ngIf="!loading && photos.length === 0" class="empty-state">
  <p>No photos found for this album.</p>
</div>
```

Разбор:

- `loading` помогает показывать пользователю, что данные еще загружаются;
- empty state объясняет ситуацию, если данных нет.

Это хороший UX и соответствует заданию.

---

## 14. Часть задания: стилизация и layout

### Что просилось

Нужно было:

- сделать аккуратные стили;
- использовать scoped styles;
- для фотографий сделать адаптивную сетку.

### Где это реализовано

- `src/styles.css`
- встроенные `styles` внутри каждого компонента

---

### 14.1. Глобальные стили: `src/styles.css`

Здесь находятся:

- базовый reset;
- настройки `body`;
- стили ссылок;
- стили для `button`, `input`, `textarea`, `select`;
- базовая адаптивность.

Пример:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}
```

Это задает общий внешний вид приложения.

### 14.2. Локальные стили компонентов

Каждый компонент содержит собственный массив `styles`.

Например:

- `app.ts` содержит стили навигации;
- `home.component.ts` стилизует главную страницу;
- `albums.component.ts` стилизует список альбомов;
- `album-detail.component.ts` стилизует форму редактирования;
- `album-photos.component.ts` содержит стили сетки фотографий.

Почему это хорошо:

- стили логически лежат рядом с компонентом;
- легче поддерживать код;
- меньше риск путаницы.

---

## 15. Часть задания: README и структура для сдачи

### Что просилось

Нужно было:

- загрузить проект в репозиторий;
- не добавлять `node_modules`;
- приложить `README.md` с инструкцией запуска;
- структура должна быть вида:
  - `lab6/album-browser/...`

### Что есть в проекте

#### `README.md`

В файле описаны:

- название проекта;
- функции приложения;
- структура проекта;
- команды запуска;
- команды сборки;
- стек технологий;
- API;
- описание компонентов.

Это соответствует требованию приложить инструкцию по запуску.

#### `node_modules`

В сдаче эту папку действительно не нужно пушить.  
Для GitHub это обычно решается через `.gitignore`.

---

## 16. Насколько проект соответствует заданию

### Полностью соответствует

- маршрутизация настроена;
- 5 компонентов созданы;
- есть общее меню навигации;
- используется `routerLink` и `routerLinkActive`;
- есть `<router-outlet>`;
- HTTP вынесен в `AlbumService`;
- `HttpClient` не вызывается напрямую в компонентах;
- методы сервиса возвращают `Observable`;
- есть интерфейсы `Album` и `Photo`;
- список альбомов работает;
- страница деталей работает;
- редактирование работает;
- удаление работает;
- показ фотографий работает;
- есть loading states;
- есть empty states;
- стили разделены по компонентам.

### Частично отличается от формулировки

Только один важный момент:

- в `AlbumPhotosComponent` используются случайные изображения через `picsum.photos`, а не `thumbnailUrl` из ответа API.

С точки зрения функциональности экран работает, но если преподаватель будет проверять строго по условию, лучше заменить источник картинки на `photo.thumbnailUrl`.

---

## 17. Почему понадобилось локальное хранение изменений

Это важный момент для объяснения проекта.

JSONPlaceholder ведет себя как тестовый API:

- `PUT` возвращает успешный ответ;
- `DELETE` тоже возвращает успешный ответ;
- но реальные данные на сервере не меняются.

Если бы приложение просто вызывало API и ничего не сохраняло локально, происходило бы следующее:

- пользователь меняет название;
- сервер отвечает "успешно";
- но после повторной загрузки старое название снова возвращается;
- пользователь удаляет альбом;
- сервер отвечает "успешно";
- но после новой загрузки альбом снова появляется.

Поэтому в `album.service.ts` была добавлена локальная логика:

- измененные альбомы хранятся в `localStorage`;
- удаленные альбомы тоже запоминаются;
- при каждом получении списка данные API объединяются с локальными изменениями.

Это позволяет интерфейсу соответствовать условию задания:

> UI should still update locally as if the operation succeeded.

---

## 18. Вывод

Проект в целом решает лабораторную работу правильно.

Основная архитектура выглядит так:

1. `main.ts` запускает приложение.
2. `app.config.ts` подключает роутер и HTTP.
3. `app.routes.ts` задает маршруты.
4. `app.ts` содержит общее меню и `router-outlet`.
5. Компоненты отвечают за интерфейс отдельных страниц.
6. `AlbumService` отвечает за API и локальное сохранение изменений.
7. Модели `Album` и `Photo` задают типы данных.

Если формулировать совсем кратко:

- маршрутизация выполнена;
- сервисный слой выполнен;
- компоненты выполнены;
- CRUD-операции работают;
- UX-часть выполнена;
- типизация присутствует;
- код разделен логично.

Единственное, что можно улучшить для полного совпадения с заданием:

- в `AlbumPhotosComponent` использовать `photo.thumbnailUrl` вместо внешних случайных картинок.

