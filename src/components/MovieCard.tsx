export default function MovieCard() {
  const imgBgClassName = `bg-[url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJQzctmOThxScOKcUN_0CPQ70RYPGqU1g3n3gFAWMuuQUDPHVdLd6m-UI0m-GE-oHwNEF8qzn0wdoVl-6BeZFV1WRr-6jXbcFTg4TwLR-HzBC7S9qzUpe4vzMNQj2mTv-dvBW9RookFhKO7XmWzfPGq-blsgVAsHjEuZr1de8v-p9yomrcHJmMgeVcHpcD/w680/images%20-%202023-09-25T190154.730.jpeg)]`;
  return (
    <article className="rounded-md overflow-hidden relative h-[40vh]">
      <div
        className={`absolute top-0 left-0 h-full w-full flex flex-col justify-end  ${imgBgClassName}`}
      >
        <div className="p-3 bg-gradient-to-t from-black to-transparent">
          <h1 className="font-bold text-lg">Hello movie</h1>
          <p className="text-yellow-400 font-semibold">yesterday</p>
        </div>
      </div>
    </article>
  );
}
