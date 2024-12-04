import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  posts: any[] = [];

  constructor(private service:ServiceService,private router: Router) {}

  ngOnInit(): void {
    this.loadPosts();
  }


  loadPosts() {
    this.service.getPosts().subscribe((response) => {
      this.posts = response.posts;
    });
  }
  onDelete(postId: number): void {
    this.service.deletePost(postId).subscribe(() => {
      this.loadPosts();
    })
  }
  onEdit(postId: number): void {
    this.router.navigate(['/edit', postId]);
   
  }
  onAddNewPost() {
    this.router.navigate(['/form']);
  }
  


}
