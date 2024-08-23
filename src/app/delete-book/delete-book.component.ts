import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {
  bookId: string = '';

  constructor(private http: HttpClient) {}

  deleteBook() {
    this.http.delete(`http://localhost:5000/books/${this.bookId}`).subscribe(response => {
      console.log('Book deleted successfully', response);
    });
  }
}
