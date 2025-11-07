import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMensajes } from './ver-mensajes';

describe('VerMensajes', () => {
  let component: VerMensajes;
  let fixture: ComponentFixture<VerMensajes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerMensajes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerMensajes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
