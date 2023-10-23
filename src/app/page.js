"use client";
import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});
export default function Home() {
  return (
    <div className="flex justify-center text-center items-center flex-col bg-background h-screen pt-4">
      <div>
        <h1 className="text-4xl font-bold text-center">
          Anuvrat Digital Detox
        </h1>
        <h4 className="text-2xl ml-60 font-semibold text-primary text-center">
          Add value to your life
        </h4>
        <p className="max-w-[75ch] my-4 text-lg  mx-auto text-left">
          Small (anu), Vows(vrat) towards Digital Detox. Digital detoxing means
          taking a break from using an electronic device or being online for a
          scheduled amount of time. Stepping away from technology allows you to
          be more present with yourself and your loved ones. It may also relieve
          stress, improve sleep, and deepen your relationship with family and
          friends.
        </p>
        <button className="bg-primary mx-6 text-background py-4 px-6 rounded-md">
          Register Now!
        </button>
        <button className="bg-secondary text-text py-4 px-6 rounded-md">
          About
        </button>
        <h2 className="font-extrabold mt-8 text-3xl text-text">
          Top 3 Pledges!
        </h2>
      </div>
      <GaugeComponent
        id="gauge-component4"
        arc={{
          width: 0.15,
          padding: 0,
      
        }}
        miValue={0}
        maxValue={100000}
        value={5000}
        pointer={{ type: "arrow", elastic: true }}
      />{" "}
    </div>
  );
}
