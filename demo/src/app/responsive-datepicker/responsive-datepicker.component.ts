import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'responsive-datepicker',
  templateUrl: './responsive-datepicker.component.html',
  styleUrls: ['./responsive-datepicker.component.scss']
})
export class ResponsiveDatepickerComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selected: [{
        startDate: moment('2015-11-24T00:00Z'),
        endDate: moment('2015-11-26T00:00Z')
      }, Validators.required],
    });
   }

  ngOnInit() {
  }
  submit() {
    console.log(this.form.value)
  }
}
