import styles from './Dashboard.module.css'

import { Link } from 'react-router-dom'

// Hooks
import { useAuthValue } from '../../context/authContext'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Dashboard = () => {
  const { user } = useAuthValue()
  const uid = user.uid

  // User posts
  const posts = []

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Gerencie seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts.</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div>
          <p>Tem posts</p>
        </div>
      )}
    </div>
  )
}

export default Dashboard
