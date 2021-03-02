import { Component, OnInit } from '@angular/core';
import { mockTeam } from './team.constants';
import { FormDataModel } from '../form/form.constants';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  public mockTeam: FormDataModel[];

  constructor() {}

  ngOnInit(): void {
    this.mockTeam = mockTeam;
  }
}
