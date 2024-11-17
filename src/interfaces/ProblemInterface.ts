export interface IProblem {
  title: string;
  description: string;
  difficulty?: string;
  testCases?: ITestCase[];
  editorial?: string;
}

interface ITestCase {
  input: string;
  output: string;
}
