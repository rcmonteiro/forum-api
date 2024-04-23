import { QuestionComment } from '../../enterprise/entities/question-comment'

export interface QuestionCommentsRepository {
  create(questionComment: QuestionComment): Promise<void>
  delete(id: string): Promise<void>
  findById(id: string): Promise<QuestionComment | null>
}
