import { SetStateAction, useEffect, useState } from "react"
import { config } from "react-spring"
import Carousel from "react-spring-3d-carousel"

function ImageGallery() {
  const [slides, setSlides] = useState([])
  const [goToSlide, setGoToSlide] = useState(0)
  const offsetRadius = 2
  const showNavigation = false

  useEffect(() => {
    fetch("/api/hd1-gallery")
      .then(res => res.json())
      .then(data =>
        setSlides(
          data.images.map((image: Image, index: SetStateAction<number>) => {
            return {
              key: index,
              content: <img src={image.url} alt={image.alt} />,
              onClick: () => setGoToSlide(index),
            }
          })
        )
      )
  }, [])

  return (
    <div className="mx-auto h-[500px] w-4/5">
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={config.slow}
      />
    </div>
  )
}

export default ImageGallery
