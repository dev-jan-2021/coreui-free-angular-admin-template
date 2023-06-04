import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { PatientListRoutingModule } from './patient-list-routing.module';
import { PatientListComponent } from './patient-list.component';
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
  ModalModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TableModule,
  TabsModule,
  UtilitiesModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';



@NgModule({
  imports: [
    PatientListRoutingModule,
    TableModule,
    ModalModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ProgressModule,
    SharedModule,
    ListGroupModule,
    CardModule,
    TabsModule,
    BadgeModule
  ],
  declarations: [PatientListComponent]
})
export class PateintListModule {
}
