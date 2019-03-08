import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { A11yModule } from '@angular/cdk/a11y';
import { SelectComponent } from '../select.component';
import {
  ButtonModule,
  IconModule,
  ListModule,
  ListItemModule
} from 'src/lib/public_api';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectComponent ],
      imports: [
        ButtonModule,
        IconModule,
        PortalModule,
        ListModule,
        ListItemModule,
        OverlayModule,
        A11yModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
