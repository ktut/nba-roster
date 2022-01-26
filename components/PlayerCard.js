export default function PlayerCard(props) {
  return (
    <figure
      className="flex flex-col w-full rounded-md shadow-lg"
      key={props.player.slug}
    >
      <div className="relative flex">
        <img
          className="w-260 h-190"
          src={props.player.headshot}
          alt={`${props.player.ta} logo`}
        />
        <img
          className="absolute w-16 top-8 right-8"
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
