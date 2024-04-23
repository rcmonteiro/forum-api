import { Question } from '@/domain/forum/enterprise/entities/question'
import { makeQuestion } from 'test/factories/make-question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase

describe('Get Question by Slug Use Case (unit tests)', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to get a question by slug', async () => {
    const newQuestion = makeQuestion({
      title: 'Nova pergunta',
    })

    await inMemoryQuestionsRepository.create(newQuestion)

    const { question } = await sut.execute({
      slug: 'nova-pergunta',
    })

    expect(question).toBeInstanceOf(Question)
    expect(question.content).toEqual(newQuestion.content)
    expect(inMemoryQuestionsRepository.items[0].id).toEqual(newQuestion.id)
  })
})
