import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ServiceService } from '../../services/service.service';
import { State, District, Post } from '../../models/model';
@Component({
  selector: 'app-form',
  standalone: false,
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  form: FormGroup;
  states: any[] = [];
  districts: any[] = [];

  constructor(private fb: FormBuilder, private formService: ServiceService,private router: Router) {
    this.form = this.fb.group({
      name: [''],
      gender: [''],
      language: [''],
      state: [''],
      district: [''],
    });
  }

  ngOnInit() {
    this.formService.getStates().subscribe((response) => {
      this.states = response.states;
    });

    this.form.get('state')?.valueChanges.subscribe((stateId) => {
      this.formService.getDistricts(stateId).subscribe((response) => {
        this.districts = response.districts;
      });
    });
  }

  onSubmit() {
    const formData = this.form.value;  
    this.formService.createPost(formData).subscribe(
      (response) => {
        alert('Form submitted successfully!');
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }
  
}