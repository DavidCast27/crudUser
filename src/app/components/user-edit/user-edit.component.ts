import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'
import { UserService } from '../../services/user/user.service';
import { User } from '../../user'


@Component({
	selector: 'app-user-edit',
	templateUrl: './user-edit.component.html',
	styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
	public user:User;
	constructor(
		private route:ActivatedRoute,
		private usersServices:UserService,
		private router: Router 
		) { }

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get('id');
		this.usersServices.getUser(id).subscribe(user=>{
			this.user = user.response;
		})
	}

	update(user:User){
		console.log(user);
		this.usersServices.updateUser(user).subscribe(()=>{
			this.router.navigate(['/crud']);
		});

	}

}
