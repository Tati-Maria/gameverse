/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/ui/Loader";
import Title from "../components/ui/Title";
import { Menu } from "@headlessui/react";
import { useGetSingleCreator, useGetCreators } from "../actions/getCreator";

const Dropdown = ({ creatorGames }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="btn-blue">See game list</Menu.Button>
      <Menu.Items className="absolute left-0 w-56  bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:divide-gray-700 dark:ring-gray-700 dark:text-gray-300">
        {creatorGames?.length > 0 ? (
          creatorGames.map(game => (
            <Menu.Item key={game.id}>
              {({ active }) => (
                <Link
                  to={`/games/${game.slug}`}
                  className={`${
                    active
                      ? "bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-100"
                      : "text-gray-900 dark:text-gray-100"
                  } group flex items-center w-full px-2 py-2 text-sm`}
                >
                  {game.name}
                </Link>
              )}
            </Menu.Item>
          ))
        ) : (
          <Menu.Item>
            <div className="flex items-center w-full px-2 py-2 text-sm">
              <p className="text-gray-900 dark:text-gray-100">No games found</p>
            </div>
          </Menu.Item>
        )}
      </Menu.Items>
    </Menu>
  );
};

const CreatorDetail = () => {
  const { slug } = useParams();
  const {
    data: creator,
    isLoading,
    isError,
    error,
  } = useGetSingleCreator(slug);
  const { data: creators } = useGetCreators();
  const creatorGames = creators?.results?.find(
    creator => creator.slug === slug
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${creator?.name} | GameVerse`;
  }, [creator?.name]);

  if (isLoading) return <Loader />;
  if (isError) return <div>{error.message}</div>;

  return (
    <div className="space-y-10">
      <Title title={creator.name} />
      <div>
        <article className="flex items-center flex-col md:flex-row gap-8">
          <img
            src={creator.image || creator.image_background}
            alt={creator.name}
            className="object-cover h-64 "
          />
          <div className="space-y-4">
            <small className="block text-gray-500 dark:text-gray-400 uppercase font-semibold tracking-wider text-sm">
              Position: {creator.positions[0].name}
            </small>
            <p>
              {creator.description
                .split("<p>")
                .join("")
                .split("</p>")
                .join("")
                .split("<h3>")
                .join("")
                .split("</h3>")
                .join("")}
            </p>
            <div className="flex flex-col space-y-2">
              {creator.rating_top && <p>Rating Top: {creator.rating_top}</p>}
              {creator.games_count && <p>Games Count: {creator.games_count}</p>}
              <Dropdown creatorGames={creatorGames?.games} />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CreatorDetail;
