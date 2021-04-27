import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  formList = this.fb.group({
    description: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', [Validators.required, Validators.minLength(3)]]
  })
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('list');

  }

}
