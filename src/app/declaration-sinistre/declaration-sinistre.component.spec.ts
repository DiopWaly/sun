import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationSinistreComponent } from './declaration-sinistre.component';

describe('DeclarationSinistreComponent', () => {
  let component: DeclarationSinistreComponent;
  let fixture: ComponentFixture<DeclarationSinistreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationSinistreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationSinistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
