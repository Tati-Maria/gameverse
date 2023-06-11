/* eslint-disable react/prop-types */
const ExtraDetails = ({
  metracritic,
  esrb_rating,
  added_by_status,
  achievements_count,
  reddit_count,
  twitch_count,
  youtube_count,
}) => {
  return (
    <div className="space-y-2">
      <article>
        <p>
          <span className="font-bold">{reddit_count || 0}</span> Reddit Members
        </p>
        <p>
          <span className="font-bold">{twitch_count || 0}</span> Twitch Viewers
        </p>
        <p>
          <span className="font-bold">{youtube_count || 0}+</span> Youtube
          Subscribers
        </p>
        <p>
          <span className="font-bold">{achievements_count || 0}</span> Achievements
        </p>
        <p>
          <span className="font-bold">{metracritic || 0}</span> Metacritic Score
        </p>
        <p>
          <span className="font-bold">{esrb_rating?.name || 0}</span> ESRB Rating
        </p>
      </article>
      <article>
        <p>
          <span className="font-bold">{added_by_status?.yet || 0}</span> People Want
          to Play
        </p>
        <p>
          <span className="font-bold">{added_by_status?.owned || 0}</span> People Own
          This Game
        </p>
        <p>
          <span className="font-bold">{added_by_status?.beaten || 0}</span> People
          Have Beaten This Game
        </p>
        <p>
          <span className="font-bold">{added_by_status?.dropped || 0}</span> People
          Have Dropped This Game
        </p>
      </article>
    </div>
  );
};

export default ExtraDetails;
