import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EstoqueinteligenteSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [EstoqueinteligenteSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [EstoqueinteligenteSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EstoqueinteligenteSharedModule {
  static forRoot() {
    return {
      ngModule: EstoqueinteligenteSharedModule
    };
  }
}
