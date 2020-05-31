import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParametrePage } from './parametre.page';

describe('ParametrePage', () => {
  let component: ParametrePage;
  let fixture: ComponentFixture<ParametrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParametrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
