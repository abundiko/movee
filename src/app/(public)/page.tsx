"use client";

import MovieCard, { MovieCardProps } from "@/components/MovieCard";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [list, setList] = useState<MovieCardProps[]>([]);
  const hasFetched = useRef(false);
  const inputField = useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = useState("");

  const loadMore = async (e: any) => {
    e.target.setAttribute("disabled", "true");
    hasFetched.current = false;
    await getMovies(
      `updated-max=${list[list.length - 1].datetime
        .raw}&max-results=24&start=${list.length}&by-date=false&m=1`
    );
    e.target.removeAttribute("disabled");
  };

  useEffect(
    () => {
      if (!hasFetched.current) getMovies(
        "max-results=24"
      );
    },
    [list, hasFetched, keyword]
  );

  async function getMovies(query = "") {
    const response = await fetch("/api/movies", {
      method: "post",
      body: JSON.stringify({
        query: `${keyword!=""?"q="+keyword+"&":""}${query}`
      })
    });
    const data = await response.json();
    if (data.success && hasFetched.current == false) {
      setList(old => {
        return [...old, ...data.data];
      });
    }
    hasFetched.current = true;
    console.log(data);
  }

  return <main>
      <header className="py-6 px-[10vw] flex justify-between gap-2 max-[500px]:flex-col">
        <h1 className="font-bold text-2xl md:text-4xl">Moviee</h1>
        <div className="flex w-fit max-w-full rounded-3xl border p-1">
          <input ref={inputField} onKeyUp={()=>setKeyword(inputField.current?.value ?? "")} type="text" name="" id="" className="bg-transparent outline-none border-none px-3" placeholder="Search Moviees" />
          <button
          onClick={()=>{
            
            if(keyword.trim() !== ""){
              setList([]);
    hasFetched.current = false;
              getMovies();
            }
          }}
           className="aspect-square inline-flex rounded-full bg-yellow-500 text-black items-center justify-center w-8 md:w-12">
            &gt;
          </button>
        </div>
      </header>
      <section className="py-10">
        <div className="px-4 md:px-8 lg:px-12 flex flex-wrap">
          {list.map((movie, i) =>
            <div key={i} className="w-6/12 md:w-4/12 lg:w-3/12 p-1 sm:p-3">
              <MovieCard {...movie} />
            </div>
          )}
          <div className="w-full my-10 flex justify-center">
            {
              list.length % 24 == 0 &&
              <button onClick={loadMore} className="inline-block px-7 py-2 bg-yellow-500 text-black rounded-lg disabled:opacity-50">
              Load More
            </button>
            }
          </div>
        </div>
      </section>
    </main>;
}
