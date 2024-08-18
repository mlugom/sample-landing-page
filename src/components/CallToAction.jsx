import Button from "./Button";

export default function CallToAction() {
  return (
    <div>
      <InnerBox />
    </div>
  );
}

function InnerBox() {
  return (
    <div className="blue-background rounded-lg my-20 py-10 px-20 text-white flex justify-between items-center">
      <InnerText />
      <Button className="border-white border-2" />
    </div>
  );
}

function InnerText() {
  return (
    <div>
      <h3 className="font-bold text-lg">Call to action! It's time!</h3>
      <p className="text-sm font-thin">Sign up for our product by clicking that button right over there!</p>
    </div>
  );
}
