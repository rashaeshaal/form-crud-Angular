export interface State {
    id: number;
    name: string;
  }
  
  export interface District {
    id: number;
    name: string;
    state: number;
  }
  
  // src/app/models/post.model.ts
export interface Post {
  id: number;
  name: string;
  gender: string;
  language: string;
  state: State; 
  district: District; 
}
