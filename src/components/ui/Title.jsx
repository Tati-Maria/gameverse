/* eslint-disable react/prop-types */


const Title = ({
    title
}) => {
  return (
    <h2
    className="text-2xl font-flipahaus space-x-2 font-bold text-gray-800 uppercase tracking-wider dark:text-gray-100"
    >
        {title}
    </h2>
  )
}

export default Title