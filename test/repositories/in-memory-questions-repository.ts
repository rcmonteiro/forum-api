import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public items: Question[] = []

  async getBySlug(slug: string): Promise<Question | null> {
    const question = this.items.find((item) => item.slug.value === slug)
    return question ?? null
  }

  async getById(id: string): Promise<Question | null> {
    const question = this.items.find((item) => item.id.toString() === id)
    return question ?? null
  }

  async create(question: Question): Promise<void> {
    this.items.push(question)
    return Promise.resolve()
  }

  async save(question: Question): Promise<void> {
    const index = this.items.findIndex((item) => item.id === question.id)
    if (index >= 0) {
      this.items[index] = question
    }
  }

  async delete(id: string): Promise<void> {
    const index = this.items.findIndex((item) => item.id.toString() === id)
    if (index >= 0) {
      this.items.splice(index, 1)
    }
  }
}
