import { useEffect, useState } from 'react'
import { Header } from '../../Components/Header'
import { Container } from './styles'
import { Footer } from '../../Components/Footer'
import { DishItem } from '../../Components/DishItem'
import api from '../../services/api'
import { Loading } from '../../Components/Loading'

export function Favorites() {

  const [dishes, setDishes] = useState([])
  const [loading, setLoading] = useState(true)

  async function handleRemoveItem(id) {
    await api.delete(`/favorites/${id}`)
    setDishes(dishes.filter(dish => dish.id !== id))
  }

  useEffect(() => {
    async function getFavorites() {
      const response = await api.get('/favorites')
      setDishes(response.data.map(dish => {
        setLoading(false)
        return {
          ...dish,
          image_url: `${api.defaults.baseURL}/files/${dish.image_url}`
        }
      }))
    }

    getFavorites()
  }, [])

  return (
    <div>
      <Container>
        <Header />
        <main>
          <h1>Meus favoritos</h1>
          <div>
            {loading && <Loading height={100} width={100} />}
            {(dishes.length === 0 && !loading) ? <p>Nenhum prato como favorito</p> : dishes.map((dish, index) => (
              <DishItem key={index} image={dish.image_url} name={dish.name} handleRemoveItem={() => handleRemoveItem(dish.id)} removeText={'Remover dos favoritos'} />
            ))}
          </div>
        </main>
        <Footer />
      </Container>
    </div>
  )
}