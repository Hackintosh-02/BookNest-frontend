import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import Swal from 'sweetalert2';

interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
}

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add CommonModule and FormsModule to imports
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book: Book | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const bookId = params['id'];
      if (bookId) {
        this.http.get<Book>(`http://localhost:5000/books/${bookId}`).subscribe(data => {
          this.book = data;
        });
      }
    });
  }

  updateBook() {
    if (this.book) {
      this.http.put(`http://localhost:5000/books/${this.book._id}`, this.book).subscribe(response => {
        console.log('Book updated successfully', response);
        Swal.fire('Updated!', `${this.book!.title} has been updated.`, 'success');
      });
    }
  }
}
