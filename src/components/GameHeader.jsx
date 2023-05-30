/* eslint-disable react/prop-types */


const GameHeader = ({
  text,
  className=""
}) => {
  return (
    <h3
    className={`text-xl font-bold text-gray-800 uppercase tracking-wider font-flipahaus ${className} dark:text-gray-100`}
    >
      {text}
    </h3>
  )
}

export default GameHeader