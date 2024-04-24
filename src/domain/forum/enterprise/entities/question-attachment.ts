import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface QuestionAttachmentProps {
  attachmentId: UniqueEntityId
  questionId: UniqueEntityId
}

export class QuestionAttachment extends Entity<QuestionAttachmentProps> {
  getQuestionId() {
    return this.props.questionId
  }

  getAttachmentId() {
    return this.props.attachmentId
  }

  static create(props: QuestionAttachmentProps, id?: UniqueEntityId) {
    const attachment = new QuestionAttachment(props, id)

    return attachment
  }
}
