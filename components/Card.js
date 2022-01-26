export default function Card(props) {
  return (
    <div className="w-full p-8 rounded-md shadow-lg" key={props.player.slug}>
      <div className="flex">
        Top
        <img
          className="w-40"
          src={props.teamImage}
          alt={`${props.player.ta} logo`}
        />
      </div>
      <div className="flex text-center border-t-8 border-blue-800 border-solid">
        <div className="flex flex-col justify-center w-1/3 border-r-2 border-gray-400 border-solid align-center p8">
          <div className="p-1">PPG</div>
          <div className="p-1 font-bold">{props.player.pts}</div>
        </div>
        <div className="flex flex-col justify-center w-1/3 border-r-2 border-gray-400 border-solid align-center p8">
          <div className="p-1">PPG</div>
          <div className="p-1 font-bold">{props.player.reb}</div>
        </div>
        <div className="flex flex-col justify-center w-1/3 align-center p8">
          <div className="p-1">PPG</div>
          <div className="p-1 font-bold">{props.player.ast}</div>
        </div>
      </div>
    </div>
  );
}
