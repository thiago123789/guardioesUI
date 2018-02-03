import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPorcoesComponent } from './listagem-porcoes.component';

describe('ListagemPorcoesComponent', () => {
  let component: ListagemPorcoesComponent;
  let fixture: ComponentFixture<ListagemPorcoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemPorcoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPorcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
