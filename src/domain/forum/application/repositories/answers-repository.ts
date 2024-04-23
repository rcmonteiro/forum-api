import { Answer } from '@/domain/forum/enterprise/entities/answer'

export interface AnswersRepository {
  create(answer: Answer): Promise<void>
  delete(id: string): Promise<void>
  save(answer: Answer): Promise<void>
  findById(id: string): Promise<Answer | null>
}
