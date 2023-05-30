/* eslint-disable react/prop-types */

import GameHeader from "./GameHeader"


const GameClip = ({
    clip
}) => {
  return (
    <div
    className="mt-4 w-full"
    >
        <GameHeader text="Game Clip" />
        {clip ? (
            <video
            width={500}
            controls
            >
                <source src={clip} type="video/mp4" />
            </video>
        ) : (
            <div>
                No clip available
            </div>
        )}
    </div>
  )
}

export default GameClip