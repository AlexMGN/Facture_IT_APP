import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasswordSettingPagePage } from './password-setting-page.page';

describe('PasswordSettingPagePage', () => {
  let component: PasswordSettingPagePage;
  let fixture: ComponentFixture<PasswordSettingPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordSettingPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordSettingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
