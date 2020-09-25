import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FactureTabPage } from './facture-tab.page';

describe('FactureTabPage', () => {
  let component: FactureTabPage;
  let fixture: ComponentFixture<FactureTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FactureTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
