import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import CommonModule and FormsModule
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  book = {
    title: '',
    author: '',
    genre: '',
    publishedYear: null
  };

  constructor(private http: HttpClient) {}

  addBook() {
    this.http.post('http://localhost:5000/books', this.book).subscribe(response => {
      console.log('Book added successfully', response);
      Swal.fire('Added!', `${this.book.title} has been added.`, 'success');
      this.book = {
        title: '',
        author: '',
        genre: '',
        publishedYear: null
      };
    });
  }
}
