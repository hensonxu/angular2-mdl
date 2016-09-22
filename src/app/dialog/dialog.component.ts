import {
  Component,
  forwardRef,
  Inject,
  ComponentFactoryResolver
} from '@angular/core';
import { flyInOutTrigger } from './../animations/flyInOutTrigger-animation';
import { hostConfig } from './../animations/flyInOutTrigger-animation';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractDemoComponent } from './../abstract-demo.component';
import {
  MdlDialogService,
  ConfirmResult,
  IMdlDialogReference } from '../../components/dialog/index';
import { MdlSnackbarService } from '../../components/snackbar/mdl-snackbar.service';
import { LoginDialogComponent } from './login-dialog.component';
import { Angular2MdlAppComponent } from '../app.component';

@Component({
  moduleId: module.id,
  selector: 'dialog-demo',
  host: hostConfig,
  animations: [
    flyInOutTrigger
  ],
  templateUrl: 'dialog.component.html'
})
export class DialogDemo extends AbstractDemoComponent {

  constructor(
    router: Router,
    route: ActivatedRoute,
    titleService: Title,
    private dialogService: MdlDialogService,
    private snackbarService: MdlSnackbarService,
    @Inject(forwardRef(() => Angular2MdlAppComponent)) private app: Angular2MdlAppComponent,
    private componentFactoryResolver: ComponentFactoryResolver ) {

    super(router, route, titleService);
    snackbarService.setDefaultViewContainerRef(this.app.vcRef);


    dialogService.setDefaultViewContainerRef(this.app.vcRef);
  }

  public showAlert() {
    let result = this.dialogService.alert('This is a simple Alert');
    result.then( () => console.log('alert closed') );
  }

  public showConfirmMessage() {
    let result = this.dialogService.confirm('Would you like a mug of coffee?', 'No', 'Yes');
    result.then( choosedOption => console.log( choosedOption === ConfirmResult.Confirmed ) );
  }

  public showDialogFullWidthAction() {
    let pDialog = this.dialogService.showDialog({
      title: 'Your choice?',
      message: 'Dialog with three actions',
      actions: [
        {
          handler: () => {
              this.snackbarService.showToast('Dialog closed with Button 1');
          },
          text: 'Button 1' ,
          isClosingAction: true
        },
        {
          handler: () => {
            this.snackbarService.showToast('Dialog closed with Button 2');
          },
          text: 'Button 2'
        },
        {
          handler: () => {
            this.snackbarService.showToast('Dialog closed with Button 3');
          },
          text: 'Button 3'
        }
      ],
      fullWidthAction: true,
      isModal: true
    });
    pDialog.then( (dialogReference) => console.log('dialog visible', dialogReference) );
  }

  public showDialog() {

    let pDialog = this.dialogService.showCustomDialog({
      component: LoginDialogComponent,
      isModal: true
    });
    pDialog.then( (dialogReference: IMdlDialogReference) => {
      console.log('dialog visible - will autohide in 10 seconds', dialogReference);
      setTimeout( () => {
        dialogReference.hide();
      }, 10000);
    });
  }
}
