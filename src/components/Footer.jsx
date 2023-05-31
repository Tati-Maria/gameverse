import {BsFillSuitHeartFill} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer
    className="border-t-2 border-gray-100 dark:border-gray-800 py-6 px-5 mt-10 rounded-sm"
    >
        <div
        className="flex flex-col space-y-2 text-center"
        >
            <p>
                Made with <BsFillSuitHeartFill className="inline-block text-red-500" /> by <a href="https://www.linkedin.com/in/maria-tati/" rel="noopener noreferrer" target='_blank'>Maria</a>
            </p>
            <p>
                Data provided by <a className='text-blue-500 underline' href="https://rawg.io/apidocs" rel="noopener noreferrer" target='_blank'>RAWG</a>
            </p>
            <p>
                Deployed on <a href="https://www.vercel.com/" rel="noopener noreferrer" target='_blank'>Vercel</a>
            </p>
        </div>
    </footer>
  )
}

export default Footer