export class Slug {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * Recebe uma `string` e normaliza ela como um `slug`
   *
   * Exemplo:
   *   - "Olá, mundo!" => "ola-mundo"
   * @param text {string}
   */
  static createFromText(text: string): Slug {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')
    return new Slug(slugText)
  }
}
