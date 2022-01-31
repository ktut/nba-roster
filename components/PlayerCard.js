export default function PlayerCard(props) {
  return (
    <figure
      className="flex flex-col w-full rounded-md shadow-lg"
      key={props.player.slug}
    >
      <div className="relative flex items-center flex-auto pr-2 overflow-hidden">
        <img
          loading="lazy"
          className="absolute nba-team-background"
          src={props.teamImage}
          alt={`${props.player.ta} logo greyed out`}
        />
        <img
          loading="lazy"
          className="self-end object-cover h-32 nba-player-image"
          src={props.player.headshot}
          alt={`${props.player.ta} logo`}
        />
        <figcaption className="nba-player-figcaption">
          <div className="text-sm text-gray-400">
            #{props.player.num} | {props.player.pos}
          </div>
          <div className="text-xl font-bold">
            {props.player.fn} {props.player.ln}
          </div>
        </figcaption>
        <img
          loading="lazy"
          className="absolute w-10 top-2 right-2"
          src={props.teamImage}
          alt={`${props.player.ta} logo`}
        />
      </div>
      <div
        className={`flex flex-none text-center border-t-8 border-solid`}
        style={{ borderColor: props.teamColor }}
      >
        <div className="flex flex-col justify-center w-1/3 p-3 border-r-2 border-gray-200 border-solid align-center">
          <div className="p-1 pb-0">PPG</div>
          <div className="text-xl font-bold ph-1">{props.player.pts}</div>
        </div>
        <div className="flex flex-col justify-center w-1/3 p-2 border-r-2 border-gray-200 border-solid align-center">
          <div className="p-1 pb-0">RPG</div>
          <div className="text-xl font-bold ph-1">{props.player.reb}</div>
        </div>
        <div className="flex flex-col justify-center w-1/3 p-2 align-center">
          <div className="p-1 pb-0">APG</div>
          <div className="text-xl font-bold ph-1">{props.player.ast}</div>
        </div>
      </div>
    </figure>
  );
}
