/* eslint-disable react/prop-types */
import { Splide, SplideSlide } from "@splidejs/react-splide"
import GameHeader from "./GameHeader"


const options = {
    gap: '1rem',
    perPage: 3,
    breakpoints: {
        640: {
            perPage: 1,
        },
        768: {
            perPage: 2,
        },
    },
    arrows: true,
    lazyLoad: 'nearby',
    rewind: true,
    width: '100%',
    height: '100%',
    pagination: true,
}

const GameScreenshots = ({
    screenshots
}) => {

  return (
    <div
    className="mt-20 pt-10 space-y-6"
    >
        <GameHeader 
        text="Game Screenshots"
         />
        <Splide options={options}>
            {screenshots?.length === 0 && (
                <div
                className="flex justify-center items-center w-full h-96 bg-gray-200 dark:bg-gray-800 rounded-md shadow-md"
                >
                    <h2>No screenshots available</h2>
                </div>
            )}
            {screenshots?.map(screenshot => (
                <SplideSlide key={screenshot.id}>
                    <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="rounded-md"
                    />
                </SplideSlide>
            ))}
        </Splide>
    </div>
  )
}

export default GameScreenshots