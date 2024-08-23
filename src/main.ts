import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { GetBooksComponent } from './app/get-books/get-books.component';
import { AddBookComponent } from './app/add-book/add-book.component';
import { SearchBookComponent } from './app/search-book/search-book.component';
import { UpdateBookComponent } from './app/update-book/update-book.component';
import { DeleteBookComponent } from './app/delete-book/delete-book.component';

const routes: Routes = [
  { path: '', redirectTo: '/get-books', pathMatch: 'full' },
  { path: 'get-books', component: GetBooksComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'search-book', component: SearchBookComponent },
  { path: 'update-book', component: UpdateBookComponent },
  { path: 'delete-book', component: DeleteBookComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
}).catch(err => console.error(err));
