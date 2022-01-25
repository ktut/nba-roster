import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Loading from "../components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true),
    [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("api/players")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        setIsLoading(false);
      });
  }, [players]);

  return (
    <div>
      <Head>
        <title>NBA Players Sample Application</title>
        <meta name="description" content="A sample of players from NBA.com." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen">
        {players.length > 0 ? (
          players.map((player) => (
            <div className="grid" key={player.slug}>
              Player
              {Object.keys(player).map((key) => (
                <div className={key} key={key}>
                  {key}
                </div>
              ))}
            </div>
          ))
        ) : isLoading ? (
          <Loading />
        ) : (
          <span className="flex">Failed to fetch data.</span>
        )}
        {/* <div>TEST</div>
        <div>TEST</div>
        <div>TEST</div> */}
      </main>

      <footer></footer>
    </div>
  );
}
