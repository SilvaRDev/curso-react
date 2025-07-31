const UserDetails = ({ name, occupation, age }) => {
  return (
    <div>
      <h3>
        Detalhes de <strong>{name}</strong>
      </h3>
      <p>
        Profissão: <strong>{occupation}</strong>
      </p>
      <p>
        Idade: <strong>{age} anos</strong>
      </p>
      {age >= 18 ? (
        <p>O usuário pode tirar carta!</p>
      ) : (
        <p>O usuário não pode tirar carta.</p>
      )}
      <hr />
    </div>
  )
}

export default UserDetails
