import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'control-field-error',
  templateUrl: './control-field-error.component.html',
  styleUrls: ['./control-field-error.component.scss']
})
export class ControlFieldErrorComponent implements OnInit {

  @Input() showError: boolean;
  @Input() msgError: string;

  constructor() { }

  ngOnInit(): void {

  }

}
