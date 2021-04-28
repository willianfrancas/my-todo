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
    { description: "Lorem ipsum dolor", price: "R$ 12,00" },
    { description: "Sit amet consectetuer", price: "R$ 16,00" },
    { description: "Elit sed", price: "R$ 8,00" },
    { description: "Diam nonummy nibh", price: "R$ 4,00" },
    { description: "Tincidunt ut", price: "R$ 5,00" },
    { description: "Laoreet dolore magna", price: "R$ 57,00" },
    { description: "Erat volutpat", price: "R$ 48,00" },
    { description: "Ut wisi enim", price: "R$ 6,00" },
    { description: "Minim veniam", price: "R$ 8,00" },
    { description: "Quis nostrud exerci", price: "R$ 7,00" },
    { description: "Ullamcorper suscipit", price: "R$ 19,53" },
    { description: "Lobortis nisl ut", price: "R$ 19,98" },
    { description: "Ex ea", price: "R$ 20,42" },
    { description: "Commodo consequat duis", price: "R$ 20,86" },
    { description: "Vel eum", price: "R$ 21,30" },
    { description: "Iriure dolor in", price: "R$ 21,75" },
    { description: "In vulputate", price: "R$ 22,19" },
    { description: "Velit esse molestie", price: "R$ 22,63" },
    { description: "Vel illum", price: "R$ 23,07" },
    { description: "Dolore eu feugiat", price: "R$ 23,52" },
    { description: "Facilisis at", price: "R$ 23,96" },
    { description: "Vero eros et", price: "R$ 24,40" },
    { description: "Et iusto", price: "R$ 24,84" },
    { description: "Odio dignissim qui", price: "R$ 25,28" },
    { description: "Praesent luptatum", price: "R$ 25,73" },
    { description: "Zzril delenit augue", price: "R$ 26,17" },
    { description: "Dolore te", price: "R$ 26,61" },
    { description: "Feugait nulla facilisiepsum", price: "R$ 27,05" },
    { description: "Non deposit", price: "R$ 27,50" },
    { description: "Quid pro quo", price: "R$ 27,94" },
    { description: "Escorol olypian", price: "R$ 28,38" },
    { description: "Quarrels et gorilla", price: "R$ 28,82" },
    { description: "Sic ad", price: "R$ 29,27" },
    { description: "Nauseum souvlaki ignitus", price: "R$ 29,71" },
    { description: "E pluribus", price: "R$ 30,15" },
    { description: "Unum defacto lingo", price: "R$ 30,59" },
    { description: "Igpay atinlay", price: "R$ 31,04" },
    { description: "Marquee selectus non", price: "R$ 31,48" },
    { description: "Incongruous feline", price: "R$ 31,92" },
    { description: "Nolo contendre gratuitous", price: "R$ 32,36" },
    { description: "Niacin sodium", price: "R$ 32,81" },
    { description: "Glutimate quote meon", price: "R$ 33,25" },
    { description: "Estimate et", price: "R$ 33,69" },
    { description: "Non interruptus stadium", price: "R$ 34,13" },
    { description: "Tempus fugit", price: "R$ 34,58" },
  ];

  formList = this.fb.group({
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
}

