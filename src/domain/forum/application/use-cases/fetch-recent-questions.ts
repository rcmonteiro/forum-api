import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

interface FetchRecenteQuestionsUseCaseRequest {
  page: number
}

interface FetchRecenteQuestionsUseCaseResponse {
  questions: Question[]
}

export class FetchRecenteQuestionsUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    page,
  }: FetchRecenteQuestionsUseCaseRequest): Promise<FetchRecenteQuestionsUseCaseResponse> {
    const questions = await this.questionsRepository.findManyRecent({ page })

    return { questions }
  }
}
