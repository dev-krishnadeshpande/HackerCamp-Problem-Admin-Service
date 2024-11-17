import { IProblem } from "../interfaces/ProblemInterface";
import { Problem } from "../models/problemModel";

export class ProblemRepository {
  async createProblem(problemData: IProblem) {
    try {
      const { title, description, testCases } = problemData;
      const problem = await Problem.create({ title, description, testCases });

      return problem;
    } catch (error) {
      throw error;
    }
  }
}
