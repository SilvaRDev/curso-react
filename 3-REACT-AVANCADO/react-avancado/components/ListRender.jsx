import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(['Matheus', 'Pedro', 'Josias', 'Rafael'])

  const [users, setUsers] = useState([
    { id: 1, name: 'Matheus', age: 31 },
    { id: 2, name: 'João', age: 19 },
    { id: 3, name: 'Rafael', age: 20 },
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUsers) => {
      console.log(prevUsers)
      return prevUsers.filter((user) => randomNumber !== user.id)
    })
  }

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Deletar algum usuário</button>
    </div>
  )
}

export default ListRender
