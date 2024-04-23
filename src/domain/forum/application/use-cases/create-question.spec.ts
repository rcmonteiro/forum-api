import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question): Promise<void> => {
    console.log('===>', question)
  },
}
test('should create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'Nova pergunta',
    content: 'Minha dúvida é que ...',
  })

  expect(question).toBeInstanceOf(Question)
  expect(question.content).toEqual('Minha dúvida é que ...')
})
