"use client";

import MovieCard, { MovieCardProps } from "@/components/MovieCard";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [list, setList] = useState<MovieCardProps[]>([]);
  const fetchCount = useRef(12);

  useEffect(() => {
    // listen for scroll near bottom and fetch more
    function onScroll() {
      const offset = window.scrollY;
      //get body scroll height
      const bodyScrollHeight = document.body.scrollHeight;
      // rest of the code
      if (offset + window.innerHeight >= bodyScrollHeight) {
        getMovies(12);
      }
    }
    window.addEventListener("scroll", onScroll);

    // rest of the code

    getMovies();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  async function getMovies(count = 0) {
    const response = await fetch("/api/movies", {
      method: "post",
      body: JSON.stringify({
        query: `updated-max=2023-10-26T06:47:00-07:00&max-results=12&start=${count}&by-date=false&m=1`
        // query: `max-results=12&by-date=false&start=12&by-date=false`
        // query: `updated-max=2023-10-25T02:38:00-07:00&max-results=12&start=14&by-date=false`
      })
    });
    const data = await response.json();
    if (data.success) {
      if (!list[0] || list[0].title != data.data[0].title)
        setList(old => {
          return [...old, ...data.data];
        });
    }
    console.log(data);
  }

  return (
    <main>
      <section className="py-10">
        <div className="px-4 md:px-8 lg:px-10 flex flex-wrap">
          {list.map((movie, i) =>
            <div key={i} className="w-6/12 md:w-4/12 lg:w-3/12 p-1 sm:p-3">
              <MovieCard {...movie} />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
