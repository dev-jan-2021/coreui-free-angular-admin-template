import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { NgScrollbarModule } from 'ngx-scrollbar';


import { environment } from '../environments/environment';

import { getDatabase, provideDatabase } from '@angular/fire/database';
// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import { DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent } from './containers';
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
import {provideFirebaseApp , initializeApp} from'@angular/fire/app';
import {getFirestore,provideFirestore} from '@angular/fire/firestore';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { HeaderComponent } from './modules/main/header/header.component';
import { FooterComponent } from './modules/main/footer/footer.component';
import { MenuSidebarComponent } from './modules/main/menu-sidebar/menu-sidebar.component';
import { MainComponent } from './modules/main/main.component';
import { TestComponent } from './pages/test/test.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './modules/recover-password/recover-password.component';
// import { ModulesComponent } from './modules/modules.component';
// import {ModulesModule} from './modules/modules.module';
const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, HeaderComponent, FooterComponent, MenuSidebarComponent, MainComponent, TestComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    NgScrollbarModule,
provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
provideFirestore(()=>getFirestore()),
    provideDatabase(() => getDatabase()),
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    { provide: APP_BASE_HREF, useValue: '/' },
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
