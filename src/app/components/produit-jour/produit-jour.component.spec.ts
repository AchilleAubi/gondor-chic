import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitJourComponent } from './produit-jour.component';

describe('ProduitJourComponent', () => {
  let component: ProduitJourComponent;
  let fixture: ComponentFixture<ProduitJourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProduitJourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProduitJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
