import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Question } from '../../enterprise/entities/question'

interface EditQuestionUseCaseRequest {
  authorId: string
  questionId: string
  title: string
  content: string
}

interface EditQuestionUseCaseResponse {
  question: Question
}

export class EditQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    authorId,
    questionId,
    title,
    content,
  }: EditQuestionUseCaseRequest): Promise<EditQuestionUseCaseResponse> {
    const question = await this.questionsRepository.getById(questionId)

    if (!question) {
      throw new Error('Question not found')
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error('Not authorized')
    }

    question.title = title
    question.content = content

    await this.questionsRepository.save(question)

    return {
      question,
    }
  }
}
