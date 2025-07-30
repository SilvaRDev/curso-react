import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(['Matheus', 'Pedro', 'Josias', 'Rafael'])

  const [users] = useState([
    { id: 1, name: 'Matheus', age: 31 },
    { id: 7257462854, name: 'João', age: 19 },
    { id: 37236572, name: 'Rafael', age: 20 },
  ])

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age} anos</li>
        ))}
      </ul>
    </div>
  )
}

export default ListRender
