import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface AnswerAttachmentProps {
  attachmentId: UniqueEntityId
  answerId: UniqueEntityId
}

export class AnswerAttachment extends Entity<AnswerAttachmentProps> {
  answerId() {
    return this.props.answerId
  }

  attachmentId() {
    return this.props.attachmentId
  }

  static create(props: AnswerAttachmentProps, id?: UniqueEntityId) {
    const attachment = new AnswerAttachment(props, id)

    return attachment
  }
}
