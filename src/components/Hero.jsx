import Header from "./Header";

export default function Hero() {
  return (
    <div className="flex flex-col items-center dark-background">
      <Header />
      <HeroContents />
    </div>
  );
}

function HeroContents() {
  return (
    <div className="my-28 grid grid-cols-2 gap-6">
      <HeroText />
      <ImagePlaceholder />
    </div>
  );
}

function HeroText() {
  return (
    <div className="flex flex-col justify-between gap-3 items-start">
      <h1 className="font-extrabold text-4xl">This website is awesome</h1>
      <p>
        This website has some subtext that goes here under the main title. It's
        a smaller font and the color is lower contrast.
      </p>
      <button className="rounded-md bg-[#3882F6] px-7 py-2 font-semibold">Sign up</button>
    </div>
  );
}

function ImagePlaceholder() {
  return (
    <div className="bg-gray-500 flex justify-center items-center">
      <p>this is a placeholder for an image</p>
    </div>
  )
}
