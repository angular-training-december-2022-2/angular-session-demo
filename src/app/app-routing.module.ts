import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorListComponent } from './color-list/color-list.component';
import { DemoParentHeaderComponent } from './demo-parent-header/demo-parent-header.component';
import { DisplayComponent } from './display/display.component';
import { ErrorComponent } from './error/error.component';
import { ParentComponent } from './life-cycle-hooks/parent/parent.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { LoginGuard } from './route-gaurds/login.guard';
import { StudentHttpAddComponent } from './student-http/student-http-add/student-http-add.component';
import { StudentHttpEditComponent } from './student-http/student-http-edit/student-http-edit.component';
import { StudentHttpListComponent } from './student-http/student-http-list/student-http-list.component';
import { StudentHttpViewComponent } from './student-http/student-http-view/student-http-view.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TodoAnimationComponent } from './todo-animation/todo-animation.component';

const routes: Routes = [
  // we configure the route paths for the components here
  // { path: '', component: DisplayComponent },
  
  { path: '', redirectTo: 'display', pathMatch: 'full' },
  { path: 'display', component: DisplayComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'student-list-http', component: StudentHttpListComponent , canActivate: [LoginGuard]},
  { path: 'student-view-http/:studId', component: StudentHttpViewComponent }, // http://localhost:4444/student-view-http/103
  { path: 'student-add-http', component: StudentHttpAddComponent },
  { path: 'student-edit-http/:sId', component: StudentHttpEditComponent },
  { path: 'todo', component: TodoAnimationComponent },
  { path: 'ng-class', component: NgclassComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'demo-header', component: DemoParentHeaderComponent , children: [
    { path: 'observable', component: ObservableDemoComponent },
    { path: 'color', component: ColorListComponent },
  ] },
  { path: '**', component: ErrorComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }