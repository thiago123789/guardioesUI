import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPratosComponent } from './listar-pratos.component';

describe('ListarPratosComponent', () => {
  let component: ListarPratosComponent;
  let fixture: ComponentFixture<ListarPratosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPratosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
