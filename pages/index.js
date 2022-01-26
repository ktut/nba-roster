import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Loading from "../components/Loading";
import Card from "../components/Card";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true),
    [players, setPlayers] = useState([]),
    [teams, setTeams] = useState([]),
    getTeamImage = (teamSlug) => {
      return teams.find((team) => team.ta === teamSlug).logo;
    };

  useEffect(() => {
    fetch("api/teams")
      .then((res) => res.json())
      .then((teamData) => {
        setTeams(teamData);
        fetch("api/players")
          .then((res) => res.json())
          .then((playerData) => {
            setPlayers(playerData);
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

      <main className="grid min-h-screen gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {!isLoading ? (
          players.map((player) => (
            <Card
              player={player}
              key={player.slug}
              teamImage={getTeamImage(player.ta)}
            />
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
