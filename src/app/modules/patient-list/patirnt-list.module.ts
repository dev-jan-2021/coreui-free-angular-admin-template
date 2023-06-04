import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { PatientListRoutingModule } from './patient-list-routing.module';
import { PatientListComponent } from './patient-list.component';

import { TableModule } from '@coreui/angular';
import { ModalModule } from '@coreui/angular';
import {
    AvatarModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FooterModule,
    FormModule,
    GridModule,
    HeaderModule,
    ListGroupModule,
    NavModule,
    ProgressModule,
    SharedModule,
    SidebarModule,
    TabsModule,
    UtilitiesModule
  } from '@coreui/angular';
  


@NgModule({
  imports: [
    PatientListRoutingModule,
    TableModule,
    ModalModule,
    
    
    
    
  ],
  declarations: [PatientListComponent]
})
export class PateintListModule {
}
