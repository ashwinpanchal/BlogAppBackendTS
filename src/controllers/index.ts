import { Request, Response } from "express";

import { BlogRepository } from "../repository/index";

const blogRepository = new BlogRepository();

const create = (req: Request, res: Response) => {
  try {
    blogRepository.createBlog(req.body);
    return res.json({
      success: true,
    });
  } catch (error) {
    console.log("Something went wrong in controller");
    throw { error };
  }
};

export const BlogController = { create };
