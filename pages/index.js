import { useState, useEffect } from "react";
import Head from "next/head";
import PlayerCard from "../components/PlayerCard";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true),
    [players, setPlayers] = useState([]),
    [teams, setTeams] = useState([]),
    getTeamImage = (teamSlug) => {
      return teams.find((team) => team.ta === teamSlug).logo;
    },
    getTeamColor = (teamSlug) => {
      return teams.find((team) => team.ta === teamSlug).color;
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

      <main className="grid min-h-screen gap-8 p-4 md:p-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {!isLoading ? (
          players.map((player) => (
            <PlayerCard
              player={player}
              key={player.slug}
              teamImage={getTeamImage(player.ta)}
              teamColor={getTeamColor(player.ta)}
            />
          ))
        ) : isLoading ? (
          <div className="text-xl font-bold text-center">Loading...</div>
        ) : (
          <div className="text-xl font-bold text-center">
            Failed to fetch data.
          </div>
        )}
      </main>

      <footer></footer>
    </div>
  );
}
