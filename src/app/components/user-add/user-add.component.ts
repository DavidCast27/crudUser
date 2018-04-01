import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'
import { UserService } from '../../services/user/user.service';
import { User } from '../../user'

@Component({
	selector: 'app-user-add',
	templateUrl: './user-add.component.html',
	styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

	public user:User = new User();
	constructor(
		private usersServices:UserService,
		private router: Router 
		) { }

	save(user:User){
		this.usersServices.addUser(user).subscribe(()=>{
			this.router.navigate(['/crud']);
		})
	}
}
