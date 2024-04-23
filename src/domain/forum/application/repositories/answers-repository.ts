import { Answer } from '@/domain/forum/enterprise/entities/answer'

export interface AnswerRepository {
  create(answer: Answer): Promise<void>
}
