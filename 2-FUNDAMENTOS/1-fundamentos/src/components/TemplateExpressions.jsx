const TemplateExpressions = () => {
  const name = 'joão da silva'
  const data = {
    age: 19,
    job: 'Programador',
  }

  return (
    <div>
      <h1>Olá, {name}! tudo bem?</h1>
      <p>Você tem {data.age} anos.</p>
      <p>Você é {data.job}!</p>
      <p>O resultado da expressão 3 + 3 é {3 + 3}.</p>
    </div>
  )
}

export default TemplateExpressions
