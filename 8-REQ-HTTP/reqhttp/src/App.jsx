import './App.css'

import { useState, useEffect } from 'react'

const url = 'http://localhost:3000/products'

function App() {
  const [products, setProducts] = useState([])

  // 1 - Resgatando dados
  useEffect(() => {
      async function fetchData() {
        const res = await fetch(url) // Busca os dados da url (no caso, os objetos presentes na API)

        const data = await res.json()

        setProducts(data)
      }

      fetchData()
    }, [])

  return (
    <>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} | R${product.price}</li>
        ))}
      </ul>
    </>
  )
}

export default App
