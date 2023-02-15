import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
name:string = 'Clean Code';
author:string = 'Robert C. Martin';
src:string = 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg';

name2:string = 'Pragmatic Programmer';
author2:string = ' David Thomas ';
src2:string = 'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg';

isDisabled: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
