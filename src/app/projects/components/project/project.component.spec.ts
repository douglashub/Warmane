import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/state';
import { RouterStateService } from 'src/app/state/router-state/router-state.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        StoreModule.forRoot(reducers),
        RouterTestingModule
      ],
      providers: [RouterStateService],
      declarations: [ProjectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});