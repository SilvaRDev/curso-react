import './App.css'

import { useState, useEffect } from 'react'

const url = 'http://localhost:3000/products' // URL da API

// 4 - Custom Hook
import { useFetch } from './hooks/useFetch'

function App() {
  const [products, setProducts] = useState([])

  // 4 - Custom Hook
  const { data: items } = useFetch(url)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // 1 - Resgatando dados
  /* useEffect(() => {
    async function fetchData() {
      const res = await fetch(url) // Interage com a api

      const data = await res.json()

      setProducts(data)
    }

    fetchData()
  }, []) */

  // 2 - Adição de produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(product),
    })

    // 3 - Carregamento dinâmico
    const addedProduct = await res.json()

    setProducts((prevProducts) => [...prevProducts, addedProduct])

    setName('')
    setPrice('')
  }

  return (
    <>
      <h1>Lista de Produtos</h1>
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R${product.price}
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </>
  )
}

export default App
