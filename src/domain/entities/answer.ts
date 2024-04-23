import { Entity } from '../../core/entities/entity'

interface AnswerProps {
  content: string
  authorId: string
  questionId: string
}

export class Answer extends Entity<AnswerProps> {
  get content(): string {
    return this.props.content
  }
}
