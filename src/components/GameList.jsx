/* eslint-disable react/prop-types */


const GameList = ({children}) => {
  return (
    <ul
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
    >
        {children}
    </ul>
  )
}

export default GameList