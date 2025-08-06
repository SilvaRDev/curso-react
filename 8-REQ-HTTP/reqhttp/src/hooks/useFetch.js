import { useState, useEffect } from 'react'

// 4 - Custom Hook
export const useFetch = (url) => {
  const [data, setData] = useState(null)

  // 5 - Refatorando POST
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(false)

  // 6 - Loading
  const [loading, setLoading] = useState(false) 
  const [loadingPost, setLoadingPost] = useState(false)

  useEffect(() => {
    const fetchData = async () => {

      // 6 - Loading
      setLoading(true)

      const res = await fetch(url) // Pega os dados presentes na API

      const json = await res.json() // Converte o json para objeto js

      setData(json) // Adiciona os objetos extraídos do fetch.

      setLoading(false)
      setLoadingPost(false)
    }

    fetchData()
  }, [url, callFetch])

  const httpConfig = (data, method) => {
    setConfig({
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    setMethod(method)
  }

  // 5 - Refatorando POST
  useEffect(() => {
    const httpRequest = async () => {
      if (method === 'POST') {
        setLoadingPost(true)

        let fetchOptions = [url, config]

        const res = await fetch(...fetchOptions)

        const json = await res.json()

        setCallFetch(json)
      }
    }

    httpRequest()
  }, [config, method, url])

  return { data, httpConfig, loading, loadingPost } // Retorna o estado atual de data, após o processo de requisição/post e a configuração do cabeçalho HTTP
}
