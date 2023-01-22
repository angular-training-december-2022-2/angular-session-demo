import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { ColorListComponent } from './color-list/color-list.component';
import { ColorItemComponent } from './color-list/color-item/color-item.component';
import { LifecycleChildComponent } from './angular-lifecycle/lifecycle-parent/lifecycle-child/lifecycle-child.component';
import { LifecycleParentComponent } from './angular-lifecycle/lifecycle-parent/lifecycle-parent.component';
import { ChildComponent } from './life-cycle-hooks/parent/child/child.component';
import { ParentComponent } from './life-cycle-hooks/parent/parent.component';
import { TodoAnimationComponent } from './todo-animation/todo-animation.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HoverHighlightDirective } from './custom-directives/hover-highlight.directive';
import { MypercentPipe } from './custom-pipes/mypercent.pipe';
import { FilterListPipe } from './custom-pipes/filter-list.pipe';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { StudentHttpListComponent } from './student-http/student-http-list/student-http-list.component';
import { WeatherComponent } from './weather/weather.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { StudentHttpViewComponent } from './student-http/student-http-view/student-http-view.component';
import { DemoParentHeaderComponent } from './demo-parent-header/demo-parent-header.component';
import { StudentHttpAddComponent } from './student-http/student-http-add/student-http-add.component';
import { StudentHttpEditComponent } from './student-http/student-http-edit/student-http-edit.component';
import { OnlyTextDirective } from './custom-validators/only-text.directive';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ColorListComponent,
    ColorItemComponent,
    LifecycleChildComponent,
    LifecycleParentComponent,
    ParentComponent,
    ChildComponent,
    TodoAnimationComponent,
    NgclassComponent,
    StudentListComponent,
    HoverHighlightDirective,
    MypercentPipe,
    FilterListPipe,
    ObservableDemoComponent,
    StudentHttpListComponent, 
    WeatherComponent, HeaderComponent, FooterComponent, ErrorComponent, StudentHttpViewComponent, DemoParentHeaderComponent, StudentHttpAddComponent, StudentHttpEditComponent, OnlyTextDirective, LoginComponent, LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
