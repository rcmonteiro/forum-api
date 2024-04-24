import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Answer Question Use Case (unit tests)', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  it('should be able to answer a question', async () => {
    const result = await sut.execute({
      instructorId: '1',
      questionId: '1',
      content: 'A minha resposta seria ...',
    })
    const answer = result.value?.answer

    expect(answer).toBeInstanceOf(Answer)
    expect(answer?.content).toEqual('A minha resposta seria ...')
    expect(inMemoryAnswersRepository.items[0].id).toEqual(answer?.id)
  })
})
