import { IProblem } from "../interfaces/ProblemInterface";
import { ProblemRepository } from "../repositories/ProblemRepository";
import sanitizeMarkdown from "../utils/sanitizeMarkdown";

export class ProblemService {
  problemRepository: ProblemRepository;
  constructor(problemRepository: ProblemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData: IProblem) {
    // Sanitize the markdown for description
    problemData.description = await sanitizeMarkdown(problemData.description);

    const problem = this.problemRepository.createProblem(problemData);

    return problem;
  }
}
