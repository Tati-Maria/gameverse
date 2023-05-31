import { useParams } from 'react-router-dom';
import Loader from '../components/ui/Loader';
import Title from '../components/ui/Title';
import { useGetSingleCreator } from '../actions/getCreator';

const CreatorDetail = () => {
    const {slug} = useParams();
    const {data: creator, isLoading, isError, error} = useGetSingleCreator(slug);
    
    
    if (isLoading) return <Loader />;
    if (isError) return <div>{error.message}</div>
 
  return (
    <div className='space-y-10'>
        <Title title={creator.name} />
        <div className=''>
           <article className='flex items-center flex-col md:flex-row gap-8'>
                <img
                src={creator.image || creator.image_background}
                alt={creator.name}
                className="object-cover h-64 rounded-full"
                />
                <div className='space-y-4'>
                <small
                className="block text-gray-500 dark:text-gray-400 uppercase font-semibold tracking-wider text-sm"
                >
                    {creator.positions[0].name}
                </small>
                <p>
                    {creator.description.split('<p>').join('').split('</p>').join('').split('<h3>').join('').split('</h3>').join('')}
                </p>
                <div>
                   {creator.rating_top && <p>Rating Top: {creator.rating_top}</p>}
                    {creator.games_count && <p>Games Count: {creator.games_count}</p>}
                </div>
                </div>
           </article>
           <div>
                Soon to be added
           </div>
        </div>
    </div>
  )
}

export default CreatorDetail