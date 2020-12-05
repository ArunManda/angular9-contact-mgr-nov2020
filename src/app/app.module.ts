import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AboutComponent } from './about/about.component';
import { CpbComponent } from './concepts/components/cpb/cpb.component';
import { CebComponent } from './concepts/components/ceb/ceb.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { DemoIfDirective } from './concepts/directives/demo-if.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
import { SignupComponent } from './auth/components/signup/signup.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthInterceptor } from './shared/interceptors/auth-interceptor';
import { ContactsModule } from './contacts/contacts.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LogoutComponent } from './auth/components/logout/logout.component';

// main switching box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    AboutComponent,
    CpbComponent,
    CebComponent,
    ColorizerDirective,
    DemoIfDirective,
    SignupComponent,
    LoginComponent,
    PageNotFoundComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    ContactsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }

  ],
  bootstrap: [AppComponent] // AppModule should bootstrap AppComponent
})
export class AppModule { }
