/* eslint-disable react/prop-types */
import GameHeader from "../GameHeader"

const GenreHeader = ({
    name,
    images,
    count,
}) => {
  return (
    <div
    style={{
      backgroundImage: `url(${images})`,
    }}
    className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
    >
      <div
      className="absolute inset-0 bg-black opacity-50"></div>
      <div
      className="relative z-10 text-center"
      >
        <GameHeader
        text={`
          ${name} (${count} games)
        `}
        className="text-white text-4xl"
        />
      </div>
    </div>
  )
}

export default GenreHeader