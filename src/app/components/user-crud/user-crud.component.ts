import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../user'




@Component({
	selector: 'app-user-crud',
	templateUrl: './user-crud.component.html',
	styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

	public users : Array<User>;
	constructor(
		private userService: UserService
		) { }

	ngOnInit() {
		this.userService.getUsers().subscribe(users =>{
			this.users = users;
		});
	}

	remove(user:User){
		this.userService.deleteUser(user).subscribe(()=>{
			this.users = this.users.filter(u => user.id !== u.id);
		})
	}

}
