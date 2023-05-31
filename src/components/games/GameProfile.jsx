/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import {CiFaceMeh} from "react-icons/ci"
import {BsEmojiHeartEyes,BsHandThumbsDown , BsHandThumbsUp} from "react-icons/bs"
import GameHeader from "./GameHeader"

const GameProfile = ({
    background_image,
    description,
    released,
    rating,
    website,
    platforms,
    genres,
    playtime,
    name,
    ratings,
}) => {

    // add emojis based on ratings
    const emojis = ratings.map(rating => {
        if(rating.title === "exceptional") {
            return (
                <div className="flex space-x-1" key={rating.id}>
                    <BsEmojiHeartEyes className="inline-block text-2xl text-yellow-500" />
                    <span className="text-xs text-yellow-500">
                        {rating.percent}%
                    </span>
                </div>
            )
        } else if(rating.title === "recommended") {
            return (
                <div className="flex space-x-1" key={rating.id}>
                    <BsHandThumbsUp className="inline-block text-2xl text-green-500" />
                    <span
                    className="text-green-500 text-xs"
                    >
                        {rating.percent}%
                    </span>
                </div>
            )
        } else if(rating.title === "meh") {
            return (
                <div
                className="flex space-x-1"
                key={rating.id}
                >
                    <CiFaceMeh className="inline-block text-2xl text-gray-500" key={rating.id} />
                    <span
                    className="text-gray-500 text-xs"
                    >
                        {rating.percent}%
                    </span>
                </div>
            )
        } else {
            return (
                <div
                className="flex space-x-1"
                key={rating.id}
                >
                    <BsHandThumbsDown className="inline-block text-2xl text-red-500" />
                    <span
                    className="text-red-500 text-xs"
                    >
                        {rating.percent}%
                    </span>
                </div>
            )
        }
    })


  return (
    <div
    className="mt-10"
    >
        <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10"
        >
            <img
            src={background_image}
            alt={name}
            className="block w-full h-96 object-cover rounded-lg"
            />
            <div>
                <h4
                className="text-lg font-semibold text-gray-800 uppercase tracking-wider dark:text-gray-100 font-flipahaus"
                >
                    About {name}
                </h4>
                <p>
                    {description.slice(0, 500)}... 
                    <button
                    className="text-blue-500 hover:text-blue-600"
                    onClick={() => window.open(website, "_blank")}
                    >
                        Read More
                    </button>
                </p>
                <div
                className="mt-5 flex flex-col space-y-2"
                >
                    <span>
                        Released: {released}
                    </span>
                    <span>
                        Playtime: {playtime} hours
                    </span>
                    <span>
                        Rating: {rating}
                    </span>
                    <div
                    className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"
                    >
                        <h4>
                            Reactions
                        </h4>
                        <div
                        className="flex space-x-2"
                        >
                            {emojis}
                        </div>
                    </div>
                </div>
            </div>
        </div>
                <div
                className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-10 md:justify-between"
                >
                    <ul>
                    <GameHeader text="Platforms" />
                        {platforms.map(platform => (
                            <li
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2" 
                            key={platform.platform.id}>
                                {platform.platform.name}
                            </li>
                        ))}
                    </ul>
                <div
                className="flex flex-col space-y-2"
                >
                    <GameHeader text="Genres" />
                    <ul>
                        {genres.map(genre => (
                            <li 
                            key={genre.id}
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            >
                                <Link
                                to={`/genres/${genre.slug}`}
                                >
                                    {genre.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
    </div>
  )
}

export default GameProfile