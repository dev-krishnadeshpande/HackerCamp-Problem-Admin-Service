import { Request, Response } from "express";

import { ProblemRepository } from "../repositories/ProblemRepository";
import { ProblemService } from "../services/ProblemService";

const problemService = new ProblemService(new ProblemRepository());

export const createProblem = async (req: Request, res: Response) => {
  const newProblem = await problemService.createProblem(req.body);
  return res.status(200).json({
    success: true,
    message: "Successfully created a new problem",
    error: "",
    data: newProblem,
  });
};

export const getAll = (_: Request, res: Response) => {
  return res.status(501).json({
    success: false,
    message: "",
    error: "Not Implemented",
    data: {},
  });
};

export const getOne = (_: Request, res: Response) => {
  return res.status(501).json({
    success: false,
    message: "",
    error: "Not Implemented",
    data: {},
  });
};

export const deleteAll = (_: Request, res: Response) => {
  return res.status(501).json({
    success: false,
    message: "",
    error: "Not Implemented",
    data: {},
  });
};

export const deleteOne = (_: Request, res: Response) => {
  return res.status(501).json({
    success: false,
    message: "",
    error: "Not Implemented",
    data: {},
  });
};

export const update = (_: Request, res: Response) => {
  return res.status(501).json({
    success: false,
    message: "",
    error: "Not Implemented",
    data: {},
  });
};
