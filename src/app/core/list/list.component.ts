import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListModel } from 'src/app/shared/model/list.model';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  itemList: ListModel[] = [];

  formList = this.fb.group({
    _id: [''],
    done: [false],
    description: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', [Validators.required, Validators.minLength(3)]],
    owner: ['',[Validators.required]],
  })

  constructor(
    private fb: FormBuilder,
    private listService: ListService) { }

  ngOnInit(): void {
    const owner = JSON.parse(localStorage.getItem('user'))._id;
    this.formList.patchValue({
      owner: owner
    })
    this.listService.loadItems(owner)
    .subscribe(items => {
      this.itemList = items
      });
  }

  onSubmit() {
    const dataItem = this.formList.value;
    if (!dataItem._id) {
      // this.itemList.push(this.formList.value);
      delete dataItem._id;
      this.listService.saveItem(this.formList.value)
        .subscribe(item => {
          console.log(item);
          this.itemList.push(item);
        }, (error => {
          console.warn(error);
        }));
    } else {
      this.listService.updateItem(this.formList.value)
        .subscribe(item => {
          console.log(item);
        });
      this.itemList.find(item => {
        if (item._id === dataItem._id) {
          item.description = dataItem.description;
        }
      })
    }
    this.clearForm();
  }

  clearForm() {
    this.formList.patchValue({
      description: '',
      price: ''
    });
  }

  changeStatus(i, event) {
    this.itemList.find((item, index) => {
      if (i === index) {
        this.itemList[i].done = !event.checked;
      }
    });
  }

  editItemList(i) {
    this.itemList.find((item, index) => {
      if (i === index) {
        this.formList.patchValue(item);
      }
    })
  }

  deleteItemList(i) {
    this.itemList.splice(i, 1);
  }
}

