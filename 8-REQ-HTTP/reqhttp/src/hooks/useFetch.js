import { useState, useEffect } from 'react'

// 4 - Custom Hook
export const useFetch = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url) // Pega os dados presentes na API

      const json = await res.json() // Converte o json para objeto js

      setData(json) // Adiciona os objetos extraídos do fetch.
    }

    fetchData()
  }, [url])

  return { data } // Retorna o estado atual de data, após o processo de requisição
}
