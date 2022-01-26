import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Loading from "../components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true),
    [players, setPlayers] = useState([]),
    [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("api/teams")
      .then((res) => res.json())
      .then((teamData) => {
        setPlayers(teamData);
        fetch("api/players")
          .then((res) => res.json())
          .then((playerData) => {
            setTeams(playerData);
            setIsLoading(false);
          });
      });
  }, [players]);

  return (
    <div>
      <Head>
        <title>NBA Players Sample Application</title>
        <meta name="description" content="A sample of players from NBA.com." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-wrap min-h-screen">
        {!isLoading ? (
          players.map((player) => (
            <div className="sm:w-full md:w-1/2 lg:w-1/3" key={player.slug}>
              {Object.keys(player).map((property) => (
                <div className={property} key={property}>
                  {property}
                </div>
              ))}
            </div>
          ))
        ) : isLoading ? (
          <Loading />
        ) : (
          <span className="flex">Failed to fetch data.</span>
        )}
      </main>

      <footer></footer>
    </div>
  );
}
