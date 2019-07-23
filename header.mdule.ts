import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  template: '<p>Test Code</p>'
})
export class LazyComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [LazyComponent],
  entryComponents: [LazyComponent]
})
export class LazyModule {
}
