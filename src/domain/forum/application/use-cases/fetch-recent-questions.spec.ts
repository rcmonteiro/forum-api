import { makeQuestion } from 'test/factories/make-question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { FetchRecenteQuestionsUseCase } from './fetch-recent-questions'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: FetchRecenteQuestionsUseCase

describe('Fetch Recent Questions Use Case (unit tests)', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new FetchRecenteQuestionsUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to fetch recent questions', async () => {
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2024, 3, 20) }),
    )
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2024, 3, 18) }),
    )
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2024, 3, 23) }),
    )

    const { questions } = await sut.execute({
      page: 1,
    })

    expect(questions).toHaveLength(3)
    expect(questions).toEqual([
      expect.objectContaining({
        createdAt: new Date(2024, 3, 23),
      }),
      expect.objectContaining({
        createdAt: new Date(2024, 3, 20),
      }),
      expect.objectContaining({
        createdAt: new Date(2024, 3, 18),
      }),
    ])
  })

  it('should be able to fetch paginated recent questions', async () => {
    for (let i = 0; i < 22; i++) {
      await inMemoryQuestionsRepository.create(makeQuestion())
    }

    const { questions } = await sut.execute({
      page: 2,
    })

    expect(questions).toHaveLength(2)
  })
})
