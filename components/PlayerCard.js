export default function PlayerCard(props) {
  return (
    <figure
      className="flex flex-col w-full rounded-md shadow-lg"
      key={props.player.slug}
    >
      <div className="relative flex items-center">
        <img
          className="h-auto w-160"
          src={props.player.headshot}
          alt={`${props.player.ta} logo`}
        />
        <figcaption>
          <div className="text-sm">
            #{props.player.num} | {props.player.pos}
          </div>
          <div className="text-xl font-bold">
            {props.player.fn} {props.player.ln}
          </div>
        </figcaption>
        <img
          className="absolute w-10 top-2 right-2"
          src={props.teamImage}
          alt={`${props.player.ta} logo`}
        />
      </div>
      <div className="flex text-center border-t-8 border-blue-800 border-solid">
        <div className="flex flex-col justify-center w-1/3 p-2 border-r-2 border-gray-400 border-solid align-center">
          <div className="p-1">PPG</div>
          <div className="p-1 font-bold">{props.player.pts}</div>
        </div>
        <div className="flex flex-col justify-center w-1/3 p-2 border-r-2 border-gray-400 border-solid align-center">
          <div className="p-1">PPG</div>
          <div className="p-1 font-bold">{props.player.reb}</div>
        </div>
        <div className="flex flex-col justify-center w-1/3 p-2 align-center">
          <div className="p-1">PPG</div>
          <div className="p-1 font-bold">{props.player.ast}</div>
        </div>
      </div>
    </figure>
  );
}
