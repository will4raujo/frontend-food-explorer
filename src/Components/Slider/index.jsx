import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue'
import { Card } from '../Card'
import { Container } from './styles'
import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { Loading } from '../Loading'

export function Slider({ category }) {
  const [dishes, setDishes] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    api.get(`/dishes/category?c=${category.value}`).then(response => {
      setDishes(response.data.map(dish => {
        setLoading(false)
        return {
          ...dish,
          price: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dish.price),
          image_url: `${api.defaults.baseURL}/files/${dish.image_url}`
        }
      }))
    })
  }, [category])

  const optionsMobile = useMemo(() => ({
    rewind: true,
    gap: 0,
    arrows: false,
    fixedWidth: 230,
    pagination: false,
    perPage: 3,
  }), [])

  const optionsDesktop = useMemo(() => ({
    rewind: true,
    gap: 0,
    pagination: false,
    fixedWidth: 330,
    perPage: 3,
  }), [])

  const [options, setOptions] = useState(() => {
    return window.innerWidth > 768 ? optionsDesktop : optionsMobile
  })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOptions(optionsDesktop)
      } else {
        setOptions(optionsMobile)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [optionsDesktop, optionsMobile])

  return (
    <Container $loading={loading}>
      {loading ? (
        <Loading height={100} width={100} />
      ) : (
        <>
          <h2>{category.label}</h2>
          <Splide hasTrack={false} options={options}>
            <SplideTrack>
              {dishes.map((dish, index) => (
                <SplideSlide key={`dish_${index}`}>
                  <Card
                    dishId={dish.id}
                    onClick={() => navigate(`/dish/${dish.id}`)}
                    image={dish.image_url}
                    title={dish.name}
                    description={dish.description}
                    price={dish.price}
                    favorite={dish.isFavorite}
                  />
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </>
      )}
    </Container>
  )
}