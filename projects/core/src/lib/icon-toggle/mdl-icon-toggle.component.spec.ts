import {async, inject, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {Component} from '@angular/core';
import {MdlIconToggleComponent} from './mdl-icon-toggle.component';
import {FormsModule} from '@angular/forms';
import {MdlIconToggleModule} from './mdl-icon-toggle.module';
import {DOCUMENT} from '@angular/common';

@Component({
  // tslint:disable-next-line
  selector: 'test-icon',
  template: `
    <mdl-icon-toggle [disabled]="false" [(ngModel)]="checkboxValue1" mdl-ripple (change)="onChange($event)">
      format_bold
    </mdl-icon-toggle>
  `
})
class MdlTestIconToggleComponent {

  public checkboxValue1 = false;

  public onChange(v: boolean) {
  }
}

describe('Component: MdlIconToggle', () => {

  let doc: HTMLDocument;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MdlIconToggleModule.forRoot()],
      declarations: [MdlTestIconToggleComponent],
    });

  }));

  beforeEach(async(inject([DOCUMENT], (document) => {
    doc = document;
  })));

  it('should add the css class mdl-icon-toggle to the host element', () => {

    const fixture = TestBed.createComponent(MdlTestIconToggleComponent);
    fixture.detectChanges();

    const checkboxEl: HTMLElement = fixture.nativeElement.children.item(0);
    expect(checkboxEl.classList.contains('mdl-icon-toggle')).toBe(true);

  });

  it('should fire a change event if the state changed', async(() => {
    const fixture = TestBed.createComponent(MdlTestIconToggleComponent);
    fixture.detectChanges();

    const instance = fixture.componentInstance;

    spyOn(instance, 'onChange');

    fixture.debugElement.query(By.directive(MdlIconToggleComponent)).nativeElement.click();

    expect(instance.onChange).toHaveBeenCalledWith(true);
  }));

  // the following test, tests implicity that annotation are inherited (@Input @BooleanPorperty is defined in the
  // class MdlCheckboxComponent and not in MdlTestIconToggleComponent
  it('should be possible to disable the icon toggle', async(() => {
    const fixture = TestBed.createComponent(MdlTestIconToggleComponent);
    fixture.detectChanges();

    const instance = fixture.componentInstance;
    const cbDebugElem = fixture.debugElement.query(By.directive(MdlIconToggleComponent));

    cbDebugElem.componentInstance.setDisabledState(true);
    fixture.detectChanges();

    const checkboxEl: HTMLElement = cbDebugElem.nativeElement;
    expect(checkboxEl.classList.contains('is-disabled')).toBe(true, 'should have css is-disabled');

    // should not change on click
    cbDebugElem.nativeElement.click();
    expect(instance.checkboxValue1).toEqual(false);

  }));
});



