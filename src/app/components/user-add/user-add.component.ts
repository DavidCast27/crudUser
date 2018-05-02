import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'
import { UserService } from '../../services/user/user.service';
import { ImageService } from '../../services/image/image.service';
import { User } from '../../user'

@Component({
	selector: 'app-user-add',
	templateUrl: './user-add.component.html',
	styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

	public user:User = new User();

	public file: File;
	constructor(
		private usersServices:UserService,
		private imageService:ImageService,
		private router: Router 
		) { }

	save(user:User){
		this.updateFile(user);
		// this.usersServices.addUser(user).subscribe((res)=>{
		// 	this.router.navigate(['/crud']);
		// })
	}

	updateFile(user:User){
		this.imageService.fileUpload(user.fileToUpload).subscribe(
			(image)=>
			console.log(image)
			);
	}
}
