export default function Card(props) {
  return (
    <div className="sm:w-full md:w-1/2 lg:w-1/3 p-8" key={props.slug}>
      <div className="flex">
        Top
        <img src={props.teamImage} />
      </div>
      <div className="flex">BOTTOM</div>
      {Object.keys(props.player).map((property) => (
        <div className={property} key={property}>
          {property}
        </div>
      ))}
    </div>
  );
}
