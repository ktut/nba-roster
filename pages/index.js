import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

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
              <div className="pid"></div>
              <div className="tid"></div>
              <div className="ln"></div>
              <div className="fn"></div>
              <div className="num"></div>
              <div className="pos"></div>
              <div className="pts"></div>
              <div className="reb"></div>
              <div className="ast"></div>
              <div className="stl"></div>
              <div className="headshot"></div>
            </div>
          ))
        ) : isLoading ? (
          <span className="flex">Loading</span>
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
