import { Question } from '@/domain/forum/enterprise/entities/question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { CreateQuestionUseCase } from './create-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase

describe('Create Question Use Case (unit tests)', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to create a question', async () => {
    const { question } = await sut.execute({
      authorId: '1',
      title: 'Nova pergunta',
      content: 'Minha dúvida é que ...',
    })

    expect(question).toBeInstanceOf(Question)
    expect(question.content).toEqual('Minha dúvida é que ...')
    expect(inMemoryQuestionsRepository.items[0].id).toEqual(question.id)
  })
})
