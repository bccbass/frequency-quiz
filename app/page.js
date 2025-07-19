import Practice from "./components/Practice";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center h-fit">
      <h1 className="text-3xl uppercase m-4 text-center">What's the frequency, Benneth?</h1>
      <Practice />
    </div>
  );
}
