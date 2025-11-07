import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoVeterinario } from './acceso-veterinario';

describe('AccesoVeterinario', () => {
  let component: AccesoVeterinario;
  let fixture: ComponentFixture<AccesoVeterinario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesoVeterinario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesoVeterinario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
