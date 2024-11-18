import Image from "next/image";

export default async function HeroGrid() {
  const req = await fetch(`${process.env.HOST}/api/v2/movies`, {
    next: { revalidate: 0 },
  });
  const res = await req.json();
  if (!res.success) return <></>;
  const images = (res.data as { imgUrl: string }[])
    .slice(0, 4)
    .map((i) => i.imgUrl);
  return (
    <div className="grid grid-cols-2 gap-4 lg:gap-6 sm:w-[75%] md:max-w-[80%] mx-auto relative">
      <div className="aspect-square hero-card rounded-3xl">
        <Image
          height={300}
          width={300}
          src={images[0]}
          alt="Movee app screenshot home screen"
          className="rounded-2xl object-cover"
        />
      </div>
      <div className="aspect-square hero-card rounded-full">
        <Image
          height={300}
          width={300}
          src={images[1]}
          alt="Movee app screenshot home screen"
          className="rounded-full object-cover"
        />
      </div>
      <div className="aspect-square hero-card rounded-bl-[50%] rounded-tr-[50%]">
        <Image
          height={300}
          width={300}
          src={images[2]}
          alt="Movee app screenshot home screen"
          className="rounded-bl-[50%] rounded-tr-[50%] object-cover"
        />
      </div>
      <div className="aspect-square hero-card rounded-0">
        <Image
          height={300}
          width={300}
          src={images[3]}
          alt="Movee app screenshot home screen"
          className="rounded-0 object-cover"
        />
      </div>
    </div>
  );
}
