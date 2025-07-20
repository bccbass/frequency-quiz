import Practice from "./components/Practice";
import FreqGame from "./components/FreqGame";

export default function Home() {
  return (
    <div className="w-screen flex flex-col h-fit">
      <h1 className="text-3xl md:text-5xl  font-extralight m-4 text-start"><strong className="font-extrabold">FREQ</strong>uiz</h1>
    <FreqGame />
    </div>
  );
}
