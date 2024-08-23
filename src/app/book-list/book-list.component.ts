import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
}

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor, FormsModule, HttpClientModule],  // Add FormsModule here
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:5000/books');
  }

  filteredBooks(): Book[] {
    return this.books.filter(book =>
      book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
