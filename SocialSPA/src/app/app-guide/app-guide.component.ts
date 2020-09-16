import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './app-guide.component.html',
  styleUrls: ['./app-guide.component.scss']
})
export class AppGuideComponent implements OnInit {

  @Output() backToHome = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  emitToParent(): void {
    this.backToHome.emit(false);
  }
}
