import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartagePage } from './partage.page';

describe('PartagePage', () => {
  let component: PartagePage;
  let fixture: ComponentFixture<PartagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
