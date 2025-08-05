import './App.css'

import { useState, useEffect } from 'react'

const url = 'http://localhost:3000/products' // URL da API

function App() {
  const [products, setProducts] = useState([])

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // 1 - Resgatando dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url) // Interage com a api

      const data = await res.json()

      setProducts(data)
    }

    fetchData()
  }, [])

  // 2 - Adição de produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(product),
    })
  }

  return (
    <>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
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
