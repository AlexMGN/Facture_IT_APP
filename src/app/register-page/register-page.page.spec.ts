import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterPagePage } from './register-page.page';

describe('RegisterPagePage', () => {
  let component: RegisterPagePage;
  let fixture: ComponentFixture<RegisterPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
