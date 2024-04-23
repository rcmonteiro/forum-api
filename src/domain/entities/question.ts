import { randomUUID } from 'node:crypto'

interface QuestionProps {
  title: string
  slug: string
  content: string
  authorId: string
}

export class Question {
  public id: string
  public authorId: string
  public title: string
  public slug: string
  public content: string

  constructor(props: QuestionProps, id?: string) {
    this.id = id ?? randomUUID()
    this.authorId = props.authorId
    this.title = props.title
    this.slug = props.slug
    this.content = props.content
  }
}
