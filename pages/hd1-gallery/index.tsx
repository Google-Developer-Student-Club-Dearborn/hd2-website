import dynamic from "next/dynamic"

const Carousel = dynamic(() => import("../../components/Carousel"), {
  ssr: false,
})

export default Carousel
