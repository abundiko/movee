"use client";

import MovieCard from "@/components/MovieCard";
import { fetchMovies } from "@/utils/fetchMovies";
import { useState } from "react";

export default function Home() {
  const [list, setList] = useState<object[]>([]);
  async function getMovies() {
    // const data = await fetchMovies("max-results=8");
    // setList(data);
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://fzmovies.ng/search?max-results=8`
    );
    const data = await response.text();
    console.log(data);
  }
  getMovies();
  return (
    <main>
      <section className="py-10">
        <div className="px-4 md:px-8 lg:px-10 flex flex-wrap">
          {list.map((movie, i) =>
            <div key={i} className="w-6/12 md:w-4/12 lg:w-3/12 p-1 sm:p-3">
              <MovieCard />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
