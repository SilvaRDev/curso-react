interface Props {
  title: string
  content: string
  commentsQty: number
  tags: string[]
}

const Desctructuring = ({ title, content, commentsQty, tags }: Props) => {
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
    </div>
  )
}

export default Desctructuring
