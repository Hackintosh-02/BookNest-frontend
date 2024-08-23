import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
}

@Component({
  selector: 'app-search-book',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Add CommonModule and FormsModule here
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {
  searchTerm: string = '';
  books: Book[] = [];

  constructor(private http: HttpClient) {}

  searchBooks() {
    this.http.get<Book[]>(`http://localhost:5000/books?search=${this.searchTerm}`).subscribe(data => {
      this.books = data;
    });
  }
}
