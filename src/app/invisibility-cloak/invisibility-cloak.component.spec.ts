import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvisibilityCloakComponent } from './invisibility-cloak.component';

describe('InvisibilityCloakComponent', () => {
  let component: InvisibilityCloakComponent;
  let fixture: ComponentFixture<InvisibilityCloakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvisibilityCloakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvisibilityCloakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
