import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-taskf',
  standalone: false,
  
  templateUrl: './taskf.component.html',
  styleUrl: './taskf.component.css'
})
export class TaskfComponent  {
}
//   form:FormGroup;
//   states: string[]=[];
//   districts: string[]=[];


//   constructor(private fb: FormBuilder){
//     this.form = this.fb.group({
//       name:['',[Validators.required, Validators.minLength(3)]],
//       gender:['',Validators.required],
//       state:['',Validators.required],
//       district:['',Validators.required],
//     });
   
//   }

//   ngOnInit():void{    
//     this.service.getStates().subscribe((states => {
//       this.states = states.map(state => state.name);
//     });

//     this.form.get('state')?.valueChanges.subscribe((stateName) => {
//       const stateId = this.getStateIdByName(stateName);
//       if(stateId){
//         this.service.getDistricts(stateId).subscribe((districts) => {
//           this.districts = districts.map(district => district.name);
//           this.form.get('district')?.reset();
//         });
//       }   
//     });
//   }
//   private getStateIdByName(stateName: string): number | undefined {
//     const state = this.states.find(s => s.name === stateName);
//     return state ? state.id : undefined;
//   }

  
//   onSubmit(): void{
//     if(this.form.invalid){
//       console.log('form is invalid');
//     } else {
//       console.log('Form submitted');
//       alert('Form submitted successfully');
//     }
      
//   }
// }



