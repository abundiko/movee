"use client";

import { MovieCardProps } from "@/components/MovieCard";
import { useParams } from "next/navigation";
import { list } from "postcss";
import { useState, useEffect } from "react";

export default function Page() {
  const { movie } = useParams();
  const [details, setDetails] = useState<MovieCardProps&{desc:string}|null>(null);

  useEffect(() => {
    getMovieDetails();
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
        movie != null ?
        <section className="py-10">
        <div className="px-4 md:px-8 lg:px-10 flex flex-wrap items-center">
          <div className="w-full md:w-6/12 p-3">
            <img src={details?.imgUrl} alt="" className="h-60vh w-full rounded-lg"  />
          </div>
          <div className="w-full md:w-6/12 p-3">
            <h1 className="font-bold text-4xl mb-3">{details?.title}</h1>
            <p className="opacity-80 text-lg mb-3">{details?.desc}</p>
            <a href={details?.url} target="_blank" rel="nofollow" className="inline-block px-5 py-2 rounded-lg bg-yellow-600 text-black">Download</a>
          </div>
        </div>
      </section>
      : <p>loading</p>
      }
    </main>
  );
}
