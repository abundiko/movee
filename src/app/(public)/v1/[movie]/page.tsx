/* eslint-disable @next/next/no-img-element */
"use client";

import { MovieCardProps } from "@/components/MovieCard";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page() {
  const { movie } = useParams();
  const [details, setDetails] = useState<MovieCardProps&{desc:string}|null>(null);

  useEffect(() => {
    getMovieDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getMovieDetails() {
    const realLink = (movie as String).replaceAll("__", "/");
    const fz_url = `https://www.fzmovies.ng/${realLink}`;
    console.log(fz_url);
    
    const response = await fetch("/api/movie-details", {
      method: "post",
      body: JSON.stringify({
        fz_url
      })
    });
    const data = await response.json();
    if (data.success) {
      setDetails(data.data);
    }
    console.log(data);
  }
  return (
    <main>
      {
        details ?
        <section className="py-10">
        <div className="px-4 md:px-8 lg:px-10 flex max-sm:flex-wrap items-center">
          <div className="w-full md:w-6/12 p-3 max-w-[500px] flex-shrink-0">
            <img src={details?.imgUrl} alt="" className="md:max-h-[80vh] m-auto rounded-lg"  />
          </div>
          <div className="w-full p-3">
            <h1 className="font-bold text-4xl mb-3">{details?.title}</h1>
            <p className="opacity-80 text-lg mb-3">{details?.desc}</p>
            <p className="mb-3 p-2 bg-red-300 rounded text-red-950 font-semibold">you will be redirected to download</p>
            <a href={details?.url} target="_blank" rel="nofollow" className="inline-block px-5 py-2 rounded-lg bg-yellow-500 text-black">Download</a>
          </div>
        </div>
      </section>
      : <p className="p-10">loading...</p>
      }
    </main>
  );
}
