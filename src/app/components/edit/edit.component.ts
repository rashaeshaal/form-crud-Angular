import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../../services/service.service';
import { FormGroup } from '@angular/forms';
import { Post, State, District } from '../../models/model';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-edit',
  standalone: false,
  
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  form: FormGroup;
  states: any[] = [];
  districts: any[] = [];
  postId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: [''],
      gender: [''],
      language: [''],
      state: [''],
      district: [''],
    });
  }

  ngOnInit(): void {
    // Fetch post ID from route
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.postId = +id; // Convert to number
        this.loadPostData(this.postId);
      }
    });

    // Load States
    this.service.getStates().subscribe((response) => {
      this.states = response.states;
    });

    // Load Districts on State Change
    this.form.get('state')?.valueChanges.subscribe((stateId) => {
      this.service.getDistricts(stateId).subscribe((response) => {
        this.districts = response.districts;
      });
    });
  }

  // Load post data for editing
  loadPostData(postId: number): void {
    this.service.getPostById(postId).subscribe(
      (post) => {
        this.form.patchValue({
          name: post.name,
          gender: post.gender,
          language: post.language,
          state: post.state_id,
          district: post.district_id,
        });

        // Load districts for the current state
        this.service.getDistricts(post.state_id).subscribe((response) => {
          this.districts = response.districts;
        });
      },
      (error) => {
        console.error('Error loading post data:', error);
      }
    );
  }

  // Submit updated post data
  onSubmit(): void {
    if (this.postId) {
      const formData = this.form.value;
      this.service.updatePost(this.postId, formData).subscribe(
        () => {
          alert('Post updated successfully!');
          this.router.navigate(['/']); // Redirect to post list
        },
        (error) => {
          console.error('Error updating post:', error);
        }
      );
    }
  }
}