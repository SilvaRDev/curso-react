interface Props {
  title: string
  content: string
  commentsQty: number
  tags: string[]

  // 8 - Enum
    category: Category
}

export enum Category {
  JS = 'JavaScript',
  TS = 'TypeScript',
  P = 'Python'
}

const Desctructuring = ({ title, content, commentsQty, tags, category }: Props) => {
  title = 'teste'

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      <div>
        {tags.map(tag => (
          <span>#{tag}&nbsp;</span> 
        ))}
      </div>
      <h2>Categoria: {category}</h2>
    </div>
  )
}

export default Desctructuring
