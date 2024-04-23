import { PaginationParams } from '@/core/repositories/pagination-params'
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAnswersRepository implements AnswersRepository {
  public items: Answer[] = []

  async findById(id: string): Promise<Answer | null> {
    const answer = this.items.find((item) => item.id.toString() === id)
    return answer ?? null
  }

  async findManyByQuestionId(
    questionId: string,
    { page }: PaginationParams,
  ): Promise<Answer[]> {
    const answers = this.items
      .filter((item) => item.questionId.toString() === questionId)
      .splice((page - 1) * 20, page * 20)
    return answers
  }

  async create(answer: Answer): Promise<void> {
    this.items.push(answer)
    return Promise.resolve()
  }

  async save(answer: Answer): Promise<void> {
    const index = this.items.findIndex((item) => item.id === answer.id)
    if (index >= 0) {
      this.items[index] = answer
    }
  }

  async delete(id: string): Promise<void> {
    const index = this.items.findIndex((item) => item.id.toString() === id)
    if (index >= 0) {
      this.items.splice(index, 1)
    }
  }
}
