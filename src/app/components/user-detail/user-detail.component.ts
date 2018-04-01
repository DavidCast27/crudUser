import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../../services/user/user.service';
import { ImageService } from '../../services/image/image.service';
import { User } from '../../user'

@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

	public user:User;
	constructor(
		private route:ActivatedRoute,
		private usersServices:UserService,
		private imageService :ImageService
		) { }

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get('id');
		this.usersServices.getUser(id).subscribe(user=>{
			this.user = user.response;
			this.getImage(this.user.photoName);
		})
	}

	getImage(photoName){
		this.imageService.getImage(photoName).subscribe(image=>{
			console.log(image);
		})
	}

}
