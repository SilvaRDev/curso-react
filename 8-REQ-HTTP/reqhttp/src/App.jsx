import './App.css'

import { useState, useEffect } from 'react'

// 4 - Custom Hook
import { useFetch } from './hooks/useFetch'

const url = 'http://localhost:3000/products'

function App() {
  const [products, setProducts] = useState([])

  // 4 - Custom Hook
  const { data: items } = useFetch(url) // Usa o hook que foi criado para exibir os ítens

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // 1 - Resgatando dados
  /* useEffect(() => {
    async function fetchData() {
      const res = await fetch(url) // Busca os dados da API (no caso, os objetos presentes na API)

      const data = await res.json() // converte os dados que vieram da API em um Objeto JS

      setProducts(data) // Atualiza o estado dos produtos com o novo objeto gerado
    }

    fetchData() // Executa o bloco acima
  }, []) */

  // 2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product), // Converte objeto em texto
    })

    // 3 - Carregamento dinâmico
    const addedProduct = await res.json() // Transforma o objeto em json

    setProducts((prevProducts) => [...prevProducts, addedProduct]) // Adiciona por meio de um spread operator o produto adicionado pelo usuário em sua view, sem necessidade de atualização da página

    setName('')
    setPrice('')
  }

  return (
    <>
      <h1>Lista de Produtos</h1>
      <ul>
        {items && items.map((product) => ( // Exibe os ítens que vieram do nosso custom hook
          <li key={product.id}>
            {product.name} | R${product.price}
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </>
  )
}

export default App
