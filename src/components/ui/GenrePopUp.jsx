/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import {useGetAllGenres} from "../../actions/useGetAllGenres"
import Loader from "../ui/Loader"


const GenrePopUp = ({
    open,
    setOpen
}) => {
    
    const {data, isError, isLoading, error} = useGetAllGenres();

    const closeModal = () => {
        setOpen(false)
    }

  return (
    <>
        <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto "
        onClose={closeModal}
        open={open}
        >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                <Dialog.Panel
                as="div"
                className="bg-white dark:bg-gray-800 fixed inset-0 overflow-y-auto h-96 m-auto w-11/12 rounded-md shadow-md p-4"
                >
                    <Dialog.Title as="h3" className="text-xl font-medium leading-6 text-gray-900">
                        Genres
                    </Dialog.Title>
                    <Dialog.Description as="div" className="mt-2">
                        <div className="p-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {isLoading && <Loader />}
                            {isError && <p>{error.message}</p>}
                            {data && data.results.map((genre) => (
                                <Link 
                                to={`/genres/${genre.slug}`} 
                                key={genre.id} 
                                className="bg-indigo-200 p-2 flex items-center gap-4 hover:bg-indigo-400 transition-colors rounded-md">
                                    <img
                                    className='w-8 h-8 rounded-full ring-2 ring-white dark:ring-gray-800'
                                    src={genre.image_background}
                                    />
                                    <h2>
                                        {genre.name}
                                    </h2>
                                </Link>
                            ))}
                        </div>
                    </Dialog.Description>
                </Dialog.Panel>
        </Dialog>
    </>
  )
}

export default GenrePopUp