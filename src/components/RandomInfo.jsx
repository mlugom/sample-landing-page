export default function RandomInfo() {
  return (
    <div className="text-center m-10">
      <h2 className="font-bold text-3xl">Some random information.</h2>
      <ImageIlustrationsSection />
    </div>
  );
}

function ImageIlustrationsSection() {
  const illustrations = [];
  for (let i = 0; i < 4; i++) {
    illustrations.push(<ImageIllustration key={i} />);
  }

  return (
    <div className="flex justify-between gap-3 mt-10 mb-32">
      {illustrations.map((illustration) => illustration)}
    </div>
  );
}

function ImageIllustration() {
  return (
    <div className="text-center w-40">
      <BlueRoundedSquare />
      <p className="text-gray-700">
        this is some subtext under an illustration or image
      </p>
    </div>
  );
}

function BlueRoundedSquare() {
  return <div className="blue-border border-4 rounded-xl w-40 h-40 my-2"></div>;
}
