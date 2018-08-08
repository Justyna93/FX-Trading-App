import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelComponent } from './panel.component';
import { SubstrPipe } from '../pipes/substr.pipe';

describe('PanelComponent', () => {
  let panelComponent: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PanelComponent,
        SubstrPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    panelComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be positive gain flag', () => {

    panelComponent.item = {
      pair: "ABC",
      buy: 1.23456,
      sell: 0.12
    }
    panelComponent.item = {
      pair: "ABC",
      buy: 1.25156,
      sell: 0.12
    }

    fixture.detectChanges();
    expect(panelComponent.gain).toBeTruthy()
  });

  it('should be negative gain flag', () => {
    panelComponent.item = {
      pair: "ABC",
      buy: 1.23456,
      sell: 0.12
    }
    panelComponent.item = {
      pair: "ABC",
      buy: 1.21156,
      sell: 0.13
    }
    fixture.detectChanges();
    expect(panelComponent.gain).toBeFalsy()
  });
});
