import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;
  payload;
  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
  ) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  submit() {
    this.payload = {
      ...this.bookForm.value,
    };
    console.log(this.payload);
    this.bookService.saveUserBook(this.payload).subscribe(
      data => {
        // this.toaster.showSuccess('Book saved in successfully');
        console.log(this.payload);
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      err => {
        // this.toaster.showError('Oops there is an error, please retry!');
      },
    );
  }
}
