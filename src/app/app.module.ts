import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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
    NgclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
