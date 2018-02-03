import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarItensComponent } from './selecionar-itens.component';

describe('SelecionarItensComponent', () => {
  let component: SelecionarItensComponent;
  let fixture: ComponentFixture<SelecionarItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionarItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
