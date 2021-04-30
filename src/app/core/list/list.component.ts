import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListModel } from 'src/app/shared/model/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  itemList: ListModel[] = [
    { done: false, description: "Lorem ipsum dolor", price: "R$ 12,00" },
    { done: true, description: "Sit amet consectetuer", price: "R$ 16,00" },
    { done: false, description: "Elit sed", price: "R$ 8,00" },
    { done: false, description: "Diam nonummy nibh", price: "R$ 4,00" },
    { done: true, description: "Tincidunt ut", price: "R$ 5,00" },
    { done: true, description: "Laoreet dolore magna", price: "R$ 57,00" },
    { done: true, description: "Erat volutpat", price: "R$ 48,00" },
    { done: true, description: "Ut wisi enim", price: "R$ 6,00" },
    { done: false, description: "Minim veniam", price: "R$ 8,00" },
    { done: false, description: "Quis nostrud exerci", price: "R$ 7,00" },
    { done: false, description: "Ullamcorper suscipit", price: "R$ 19,53" },
    { done: false, description: "Lobortis nisl ut", price: "R$ 19,98" },
    { done: false, description: "Ex ea", price: "R$ 20,42" },
    { done: false, description: "Commodo consequat duis", price: "R$ 20,86" },
    { done: false, description: "Vel eum", price: "R$ 21,30" },
    { done: false, description: "Iriure dolor in", price: "R$ 21,75" },
    { done: false, description: "In vulputate", price: "R$ 22,19" },
    { done: false, description: "Velit esse molestie", price: "R$ 22,63" },
    { done: false, description: "Vel illum", price: "R$ 23,07" },
    { done: false, description: "Dolore eu feugiat", price: "R$ 23,52" },
    { done: false, description: "Facilisis at", price: "R$ 23,96" },
    { done: false, description: "Vero eros et", price: "R$ 24,40" },
    { done: false, description: "Et iusto", price: "R$ 24,84" },
    { done: false, description: "Odio dignissim qui", price: "R$ 25,28" },
    { done: false, description: "Praesent luptatum", price: "R$ 25,73" },
    { done: true, description: "Zzril delenit augue", price: "R$ 26,17" },
    { done: true, description: "Dolore te", price: "R$ 26,61" },
    { done: false, description: "Feugait nulla facilisiepsum", price: "R$ 27,05" },
    { done: false, description: "Non deposit", price: "R$ 27,50" },
    { done: false, description: "Quid pro quo", price: "R$ 27,94" },
    { done: false, description: "Escorol olypian", price: "R$ 28,38" },
    { done: false, description: "Quarrels et gorilla", price: "R$ 28,82" },
    { done: false, description: "Sic ad", price: "R$ 29,27" },
    { done: false, description: "Nauseum souvlaki ignitus", price: "R$ 29,71" },
    { done: false, description: "E pluribus", price: "R$ 30,15" },
    { done: false, description: "Unum defacto lingo", price: "R$ 30,59" },
    { done: false, description: "Igpay atinlay", price: "R$ 31,04" },
    { done: false, description: "Marquee selectus non", price: "R$ 31,48" },
    { done: false, description: "Incongruous feline", price: "R$ 31,92" },
    { done: false, description: "Nolo contendre gratuitous", price: "R$ 32,36" },
    { done: false, description: "Niacin sodium", price: "R$ 32,81" },
    { done: false, description: "Glutimate quote meon", price: "R$ 33,25" },
    { done: false, description: "Estimate et", price: "R$ 33,69" },
    { done: false, description: "Non interruptus stadium", price: "R$ 34,13" },
    { done: false, description: "Tempus fugit", price: "R$ 34,58" },
  ];

  formList = this.fb.group({
    done: [false],
    description: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', [Validators.required, Validators.minLength(3)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('list');

  }

  onSubmit() {
    this.itemList.push(this.formList.value);
    this.eraseForm();
  }

  eraseForm() {
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
    })
  }
}

