import PracticePanel from './components/PracticePanel';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl uppercase">What's the frequency, Benneth?</h1>
      <div className="w-screen outline h-[80vh] my-16 flex flex-col items-center ">
      <PracticePanel />
    </div>
    </div>
  );
}
