import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TeamCardComponent } from './team-card.component';
import { FormDataModel } from 'src/app/pages/form/form.constants';

describe('TeamCardComponent', () => {
  let component: TeamCardComponent;
  let fixture: ComponentFixture<TeamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamCardComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCardComponent);
    component = fixture.componentInstance;
    component.teamMember = {
      emp_id: '',
      name: '',
      birthdate: '',
      address: '',
      status: '',
      position: '',
      created: '',
      updated: '',
      img: '',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
