import { AnswerRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { AnswerQuestionUseCase } from './answer-question'

const fakeAnswersRepository: AnswerRepository = {
  create: async (answer: Answer): Promise<void> => {
    console.log('===>', answer)
  },
}
test('should create a answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'Nova resposta',
  })

  expect(answer).toBeInstanceOf(Answer)
  expect(answer.content).toEqual('Nova resposta')
})