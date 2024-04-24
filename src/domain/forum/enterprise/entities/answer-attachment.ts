import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface AnswerAttachmentProps {
  attachmentId: UniqueEntityId
  answerId: UniqueEntityId
}

export class AnswerAttachment extends Entity<AnswerAttachmentProps> {
  getAnswerId() {
    return this.props.answerId
  }

  getAttachmentId() {
    return this.props.attachmentId
  }

  static create(props: AnswerAttachmentProps, id?: UniqueEntityId) {
    const attachment = new AnswerAttachment(props, id)

    return attachment
  }
}
