# Album Browser - Lab 6

A complete Angular application for browsing, managing, and viewing albums with photos from the JSONPlaceholder API.

## Features

✓ **Routing Structure** - Configured 6 routes with proper navigation
- Root redirects to /home
- Home page with welcome message
- About page with project information
- Albums list view
- Album detail view with edit capabilities
- Album photos grid view

✓ **HTTP Service** - Complete album service with API integration
- getAlbums() - Fetch all albums
- getAlbum(id) - Fetch single album
- getAlbumPhotos(id) - Fetch album photos
- updateAlbum(album) - Edit album title
- deleteAlbum(id) - Remove album from list

✓ **5 Standalone Components**
1. **HomeComponent** - Welcome page with browse button
2. **AboutComponent** - Application information
3. **AlbumsComponent** - Displays all albums with delete functionality
4. **AlbumDetailComponent** - Shows album details with edit capability
5. **AlbumPhotosComponent** - Responsive photo grid display

✓ **Navigation Bar** - Persistent navigation with active link highlighting
- Links: Home, About, Albums
- Active state indication
- Responsive design

✓ **CRUD Operations**
- **Create** - Via API (albums pre-existing)
- **Read** - List all albums, view details, view photos
- **Update** - Edit album titles
- **Delete** - Remove albums from list

## Project Structure

```
album-browser/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── about/
│   │   │   ├── album-detail/
│   │   │   ├── album-photos/
│   │   │   ├── albums/
│   │   │   └── home/
│   │   ├── models/
│   │   │   ├── album.model.ts
│   │   │   └── photo.model.ts
│   │   ├── services/
│   │   │   └── album.service.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   └── app.ts
│   ├── main.ts
│   ├── styles.css
│   └── index.html
├── dist/
├── package.json
├── angular.json
└── README.md
```

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm build
```

The development server will run at `http://localhost:4200`

## Technology Stack

- **Angular** 19+ (Standalone Components)
- **TypeScript** 5.6+
- **RxJS** 7.8+ (Reactive Programming)
- **HttpClient** (API Communication)
- **Angular Router** (Client-side Routing)

## API Integration

This application uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com) API for sample data:
- Albums: `https://jsonplaceholder.typicode.com/albums`
- Photos: `https://jsonplaceholder.typicode.com/albums/{id}/photos`

## Component Details

### HomeComponent
- Static welcome page
- Browse Albums button links to /albums
- Responsive layout

### AboutComponent
- Developer information
- Project description
- Technology stack information
- Data source details

### AlbumsComponent
- Fetches and displays all albums
- Loading indicator while fetching
- Click album to view details
- Delete button removes album from list
- Clickable album titles navigate to detail view

### AlbumDetailComponent
- Route parameter: `:id` for album ID
- Displays album information
- Editable title field
- Save Changes button updates album
- View Photos button navigates to photos
- Back button returns to albums list

### AlbumPhotosComponent
- Route parameter: `:id` for album ID
- Responsive CSS Grid layout
- Photo thumbnails with titles
- Hover effects on photos
- Back button returns to album detail

## Key Features

### Routing
- All routes use Angular Router with standalone components
- routerLink for navigation
- routerLinkActive for active link styling
- Route guards through component-level data loading

### Service Layer
- AlbumService handles all HTTP communication
- Components use service methods, not direct HttpClient
- Observables returned from all methods
- Automatic subscription with ErrorHandling

### Styling
- Component-scoped CSS (no global conflicts)
- Responsive design with media queries
- Accessible color scheme
- Hover effects for interactivity

### UX/DX
- Loading indicators during data fetching
- Empty state messages
- Success messages for updates
- Error handling and logging
- Keyboard-accessible navigation

## Usage Examples

### Browsing Albums
1. Click "Albums" in navigation
2. View list of all albums
3. Click album title to view details

### Editing Albums
1. Navigate to album detail page
2. Modify the title in the input field
3. Click "Save Changes"
4. Success message appears

### Viewing Photos
1. Go to album detail
2. Click "View Photos"
3. Browse responsive photo grid
4. Hover over photos to see titles

### Deleting Albums
1. On albums list
2. Click "Delete" button next to album
3. Album removed from list

## Development

### Adding New Routes
Update `src/app/app.routes.ts` with new routes.

### Extending AlbumService
Add new methods to `src/app/services/album.service.ts` for additional API calls.

### Creating New Components
Use Angular CLI or create standalone components manually following the existing pattern.

## Code Quality

- **TypeScript**: Strict mode enabled, no `any` types
- **Components**: Single responsibility principle
- **Services**: Injectable with root providedIn
- **Styling**: Scoped and organized
- **Naming**: Clear, descriptive names
- **Error Handling**: Try-catch in services, error logging

## Browser Support

Works in all modern browsers supporting ES2022 and Angular 19+

## Additional Notes

- Application uses JSONPlaceholder API (no authentication required)
- No backend database - all data from public API
- Changes via update/delete are local (API doesn't persist changes)
- Photo grid is responsive and mobile-friendly
- All navigation uses client-side routing

## Developer Information

**Student**: Yernazar Altynbekov  
**Course**: Angular Development Lab 6  
**Created**: March 2026

---

For more information about Angular, visit [angular.dev](https://angular.dev)
