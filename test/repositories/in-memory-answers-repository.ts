import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAnswersRepository implements AnswersRepository {
  public items: Answer[] = []

  async getById(id: string): Promise<Answer | null> {
    const answer = this.items.find((item) => item.id.toString() === id)
    return answer ?? null
  }

  async create(answer: Answer): Promise<void> {
    this.items.push(answer)
    return Promise.resolve()
  }

  async delete(id: string): Promise<void> {
    const index = this.items.findIndex((item) => item.id.toString() === id)
    if (index >= 0) {
      this.items.splice(index, 1)
    }
  }
}
