import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProfessionnelPage } from './professionnel.page';

describe('Tab1Page', () => {
  let component: ProfessionnelPage;
  let fixture: ComponentFixture<ProfessionnelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionnelPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfessionnelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
