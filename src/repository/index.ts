import fs from "fs";

import { Blog, blogInterface } from "../models/index";

export class BlogRepository {
  private existing: blogInterface[];

  constructor() {
    try {
      this.existing = JSON.parse(fs.readFileSync("blogs.json", "utf-8"));
    } catch (error) {
      this.existing = [];
    }
  }
  createBlog(data: blogInterface) {
    const blog: blogInterface = new Blog(data);
    this.existing.push(blog);
    try {
      fs.writeFileSync("blogs.json", JSON.stringify(this.existing), "utf-8");
    } catch (error) {
      console.log("Something went wrong at the repository level");
      throw { error };
    }
  }
}
