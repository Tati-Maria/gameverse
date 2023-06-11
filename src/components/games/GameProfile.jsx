/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsCardImage } from "react-icons/bs";
import { CiFaceMeh } from "react-icons/ci";
import {
  BsEmojiHeartEyes,
  BsHandThumbsDown,
  BsHandThumbsUp,
} from "react-icons/bs";
import GameHeader from "./GameHeader";
import ExtraDetails from "./ExtraDetails";

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
  esrb_rating,
  added_by_status,
  achievements_count,
  reddit_count,
  twitch_count,
  youtube_count,
  metaCritic,
}) => {
  // add emojis based on ratings
  const emojis = ratings.map(rating => {
    if (rating.title === "exceptional") {
      return (
        <div className="flex space-x-1" key={rating.id}>
          <BsEmojiHeartEyes className="inline-block text-2xl text-yellow-500" />
          <span className="text-xs text-yellow-500">{rating.percent}%</span>
        </div>
      );
    } else if (rating.title === "recommended") {
      return (
        <div className="flex space-x-1" key={rating.id}>
          <BsHandThumbsUp className="inline-block text-2xl text-green-500" />
          <span className="text-green-500 text-xs">{rating.percent}%</span>
        </div>
      );
    } else if (rating.title === "meh") {
      return (
        <div className="flex space-x-1" key={rating.id}>
          <CiFaceMeh
            className="inline-block text-2xl text-gray-500"
            key={rating.id}
          />
          <span className="text-gray-500 text-xs">{rating.percent}%</span>
        </div>
      );
    } else {
      return (
        <div className="flex space-x-1" key={rating.id}>
          <BsHandThumbsDown className="inline-block text-2xl text-red-500" />
          <span className="text-red-500 text-xs">{rating.percent}%</span>
        </div>
      );
    }
  });

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <figure className="w-full h-96 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md relative">
          {background_image ? (
            <img
              src={background_image}
              alt={name}
              className="w-full h-full object-cover rounded-lg shadow-md object-top"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md flex justify-center items-center">
              <BsCardImage size={100} />
            </div>
          )}
        </figure>
        <div>
          <h4 className="text-lg font-semibold text-gray-800 uppercase tracking-wider dark:text-gray-100 font-flipahaus">
            About {name}
          </h4>
          <p>
            {description.slice(0, 500)}...
            {website && (
              <Link
                to={{ pathname: website }}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Read More
              </Link>
            )}
          </p>
          <div className="mt-5 flex flex-col space-y-2">
            <span>Released: {released}</span>
            <span>Playtime: {playtime} hours</span>
            <span>Rating: {rating}</span>
            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <h4>Reactions</h4>
              <div className="flex space-x-2">{emojis}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 lg:grid-cols-3">
        <div>
          <GameHeader
          text="Available On"
          className="mb-2" 
          />
          <ul
          className="space-y-2 list-inside list-disc"
          >
            {platforms?.map((platform) => (
              <li 
              className="capitalize "
              key={platform.platform.id}
              >
                <Link to={`/platforms/${platform.platform.id}`}>
                {platform.platform.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
          <div>
            <GameHeader
            text={genres?.length > 1 ? "Genres" : "Genre"}
            className="mb-2"
            />
            <ul
            className="space-y-2 list-inside list-disc"
            >
              {genres?.map((genre) => (
                <li 
                className="capitalize "
                key={genre.id}>
                  <Link to={`/genres/${genre.id}`}>
                  {genre.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <GameHeader
            text="Stats"
            className="mb-2"
            />
            <ExtraDetails
            metracritic={metaCritic}
            reddit_count={reddit_count}
            twitch_count={twitch_count}
            youtube_count={youtube_count}
            achievements_count={achievements_count}
            added_by_status={added_by_status}
            esrb_rating={esrb_rating} 
            />
          </div>
      </div>
    </div>
  );
};

export default GameProfile;
