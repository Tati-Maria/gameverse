import {BsFillSuitHeartFill} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer
    className="bg-gray-100 dark:bg-gray-900 py-10 px-5 mt-10"
    >
        <div
        className="flex flex-col space-y-2 text-center"
        >
            <p>
                Made with <BsFillSuitHeartFill className="inline-block text-red-500" /> by <a href="https://www.linkedin.com/in/maria-tati/" rel="noopener noreferrer" target='_blank'>Maria</a>
            </p>
            <p>
                Data provided by <a href="https://rawg.io/apidocs" rel="noopener noreferrer" target='_blank'>RAWG</a>
            </p>
            <p>
                Deployed on <a href="https://www.vercel.com/" rel="noopener noreferrer" target='_blank'>Vercel</a>
            </p>
        </div>
    </footer>
  )
}

export default Footer