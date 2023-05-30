/* eslint-disable react/prop-types */


const DeveloperCard = ({
    name,
    games,
    image,
}) => {
  return (

    <li
    className="bg-gray-100 rounded-md p-4 shadow-md hover:shadow-lg transition duration-300 ease-in-out dark:hover:bg-gray-800 dark:bg-gray-700"
    >
        <div
        className='flex flex-col space-y-4' 
        >
            <img 
            src={image} 
            alt={name}
            className="w-full rounded-md h-48 object-cover" 
            />
            <div>
                <h4
                className="text-lg font-medium text-gray-800 dark:text-gray-100"
                >{name}</h4>
                <small>{games} games</small>
            </div>
        </div>
    </li>
  )
}

export default DeveloperCard