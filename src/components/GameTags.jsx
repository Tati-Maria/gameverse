/* eslint-disable react/prop-types */
import GameHeader from "./GameHeader"

const GameTags = ({
    tags
}) => {

    //get the first 10 tags
    tags = tags.slice(0, 10)

  return (
    <div
    className="mt-4 w-full"
    >
        <article
        className="flex items-center justify-between" 
        >
            <GameHeader text="Tags" />
        </article>
        <ul
        className="flex flex-wrap mt-2"
        >
            {tags.map(tag => (
                <li
                className="mr-2 mb-2 px-2 py-1 bg-gray-200 rounded-lg text-sm text-gray-500" 
                key={tag.id}>
                    <span>
                        #{tag.name}
                    </span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default GameTags