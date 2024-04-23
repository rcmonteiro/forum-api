import { AnswerComment } from '../../enterprise/entities/answer-comment'

export interface AnswerCommentsRepository {
  create(answerComment: AnswerComment): Promise<void>
  delete(id: string): Promise<void>
  findById(id: string): Promise<AnswerComment | null>
}
