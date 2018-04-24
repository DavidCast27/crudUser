import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserCrudComponent } from './components/user-crud/user-crud.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
	{ path: '',   redirectTo: '/crud', pathMatch: 'full' },
	{ path: 'crud', component: UserCrudComponent },
	{ path: 'users/:id/detail', component: UserDetailComponent },
	{ path: 'users/:id/edit', component: UserEditComponent },
	{ path: 'users/add', component: UserAddComponent },
	{ path: '404', component: NotFoundComponent },
 	{ path: '**', redirectTo: '/404' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
