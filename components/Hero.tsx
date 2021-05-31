import { ReactNode } from 'react'
import setClassNames from 'classnames'
import Image from 'next/image'
import { Container } from './Container'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useCycle } from 'framer-motion'

interface Props {
  children: ReactNode
  className?: string
}

const Hero = ({ children, className }: Props) => {
  const [photos, setPhotos] = useState([''])

  const fetchPhotos = async () => {
    const photoUrl = 'https://picsum.photos/v2/list?limit=10'

    await axios
      .get(photoUrl)
      .then((res) => {
        return res
      })
      .then((data) => {
        const dataSet = data.data
        console.log(dataSet)
        setPhotos(dataSet)
      })
  }

  useEffect(() => {
    fetchPhotos()
  }, [])

  // cycle between photos
  const photosUrl = photos.map((photo: any) => photo.download_url)
  //const photosAuthor = photos.map((photo: any) => photo.author)

  const [currentScene, setCurrentScene] = useCycle(
    photosUrl[0],
    photosUrl[0 + 1]
  )

  useEffect(() => {
    const timeOut = setTimeout(setCurrentScene, 5000)
    return () => {
      clearTimeout(timeOut)
    }
  }, [currentScene, setCurrentScene])

  //const photoAuthor = currentScene.map(photo => photo.author)

  console.log('url', photosUrl[0])

  return (
    <header
      className={setClassNames(
        'relative min-h-screen w-screen max-w-full',
        className && className
      )}
    >
      {/* <Image src={photosUrl[0]} alt='carousel' layout="fill" /> */}
      {/* <Carousel src={currentScene ? currentScene : photosUrl[0]} alt='carousel' /> */}
      <Container>
        <div>{children}</div>
      </Container>
    </header>
  )
}

export default Hero
