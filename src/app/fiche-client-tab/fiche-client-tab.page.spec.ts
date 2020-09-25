import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FicheClientTabPage } from './fiche-client-tab.page';

describe('FicheClientTabPage', () => {
  let component: FicheClientTabPage;
  let fixture: ComponentFixture<FicheClientTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheClientTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FicheClientTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
