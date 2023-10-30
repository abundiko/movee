import Image from "next/image";
import Link from "next/link";

export type MovieCardProps = {
  title: string;
  url: string;
  imgUrl: string;
  datetime: {
    raw: string;
    string: string;
  };
};

export default function MovieCard({
  title,
  url,
  imgUrl,
  datetime
}: MovieCardProps) {
  return (
    <Link
      href={`/movies/${url
        .split("https://www.fzmovies.ng/")[1]
        .replaceAll("/", "__")}`}
      className="block rounded-md overflow-hidden relative h-[50vh] group"
    >
      <img
        src={imgUrl}
        alt=""
        className="w-full h-full relative object-cover group-hover:scale-110"
      />
      <div
        className={`absolute top-0 left-0 h-full w-full flex flex-col justify-end`}
      >
        <div className="p-3 bg-gradient-to-t from-black to-transparent">
          <h1 className="font-bold text-lg">
            {title}
          </h1>
          <p className="text-yellow-400 font-semibold">
            {datetime.string}
          </p>
        </div>
      </div>
    </Link>
  );
}
