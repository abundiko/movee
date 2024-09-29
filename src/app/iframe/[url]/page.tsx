export default function Home({ params }: { params: { url: string } }) {
  return (
    <iframe
      className="w-screen h-screen"
      src={`https://www.youtube.com/embed/${params.url}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  );
}
