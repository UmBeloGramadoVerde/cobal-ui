import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { TeamCardComponent } from './shared/team-card/team-card.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TeamComponent,
  },
];

@NgModule({
  declarations: [TeamComponent, TeamCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [TeamComponent],
})
export class TeamModule {}
