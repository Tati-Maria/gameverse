/* eslint-disable react/prop-types */
import GameHeader from "./GameHeader";
import { FaUserCircle } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const options = {
  rewind: true,
  width: "100%",
  perPage: 4,
  breakpoints: {
    640: {
      perPage: 1,
    },
    768: {
      perPage: 2,
    },
    1024: {
      perPage: 3,
    },
  },
  gap: "1rem",
};

const GameCreators = ({ creators, name, count }) => {
  return (
    <div className="my-20 py-10 space-y-10">
      <GameHeader text={`${name} Developement Team (${count})`} />
      <Splide options={options}>
        {creators?.length === 0 && (
          <div className="flex justify-center items-center w-full h-96 bg-gray-200 dark:bg-gray-800 rounded-md shadow-md">
            <h2>No screenshots available</h2>
          </div>
        )}
        {creators?.map(creator => (
          <SplideSlide key={creator.id}>
            <div className="flex flex-col space-y-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
              {creator.image ? (
                <figure className="w-full h-64">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    nonce="creators"
                    className="w-full h-full object-cover rounded-lg shadow-md object-top"
                  />
                </figure>
              ) : (
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md flex justify-center items-center">
                  <FaUserCircle size={100} />
                </div>
              )}
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  {creator.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 capitalize">
                  {creator.positions.map(position => (
                    <span key={position.id}>{position.name + " "}</span>
                  ))}
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default GameCreators;
