import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
}

@Component({
  selector: 'app-get-books',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add CommonModule and FormsModule to imports
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.css']
})
export class GetBooksComponent implements OnInit {
  books: Book[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getBooks().subscribe(data => {
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

  onUpdateBook(book: Book): void {
    this.router.navigate(['/update-book'], { queryParams: { id: book._id } });
  }

  onDeleteBook(book: Book): void {
    Swal.fire({
      title: `Delete ${book.title}?`,
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:5000/books/${book._id}`).subscribe(() => {
          this.books = this.books.filter(b => b._id !== book._id);
          Swal.fire('Deleted!', `${book.title} has been deleted.`, 'success');
        });
      }
    });
  }
}
