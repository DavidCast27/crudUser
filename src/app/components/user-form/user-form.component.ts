import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../../user'

@Component({
	selector: 'app-user-form',
	templateUrl: './user-form.component.html',
	styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{

	@Input() h1Text:string;
	@Input() submitText: string;
	@Input() user:User;
	@Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

	userForm: FormGroup;

	constructor(public fb: FormBuilder) { 
		
	}


	ngOnInit(){
		this.initForm();
		this.userForm.patchValue(this.user);
	}

	initForm(){
		this.userForm = this.fb.group({
			id: (Math.floor(Math.random()*1000000000000)+1) +"",
			name: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			phone: '',
		});
	}

	submit(){
		if(this.userForm.valid){
			this.onSubmit.emit(this.userForm.value);	
		}else{
			alert("Verifique la informacion")
		}
		
	}

}
