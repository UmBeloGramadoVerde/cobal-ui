import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormDataModel } from 'src/app/pages/form/form.constants';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {
  @Input() teamMember: FormDataModel;

  constructor() { }

  ngOnInit(): void {
  }

}
