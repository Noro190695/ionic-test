import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FourPage } from './four.page';

describe('FourPage', () => {
  let component: FourPage;
  let fixture: ComponentFixture<FourPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
