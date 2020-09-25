import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevisTabPage } from './devis-tab.page';

describe('DevisTabPage', () => {
  let component: DevisTabPage;
  let fixture: ComponentFixture<DevisTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevisTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevisTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
