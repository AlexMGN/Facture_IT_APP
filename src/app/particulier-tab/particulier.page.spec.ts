import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ParticulierPage } from './particulier.page';

describe('Tab2Page', () => {
  let component: ParticulierPage;
  let fixture: ComponentFixture<ParticulierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParticulierPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ParticulierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
