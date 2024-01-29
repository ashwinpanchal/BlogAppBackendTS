export interface blogInterface {
  id: number;
  title: string;
  description: string;
}

export class Blog {
  id: number;
  title: string;
  description: string;

  constructor(blogData: { id: number; title: string; description: string }) {
    this.id = blogData.id;
    this.title = blogData.title;
    this.description = blogData.description;
  }
}
