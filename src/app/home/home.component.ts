import {Component} from '@angular/core';
import {BookService, BookSpecific} from "../book.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private bookService: BookService) {
  }

  book_array: BookSpecific[] = this.bookService.getArray();
  err = this.bookService.error;
}
