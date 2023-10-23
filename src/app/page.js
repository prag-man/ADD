import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center flex-col bg-background h-screen pt- text-center">
        <h1 className="text-4xl font-bold text-center">Anuvrat Digital Detox</h1>
        <h4 className="text-2xl ml-60 font-semibold text-primary text-center">
          Add value to your life
        </h4>
        <p className="max-w-[75ch] my-4 text-lg px-40 text-center">
          Small (anu), Vows(vrat) towards Digital Detox. Digital detoxing means
          taking a break from using an electronic device or being online for a
          scheduled amount of time. Stepping away from technology allows you to
          be more present with yourself and your loved ones. It may also relieve
          stress, improve sleep, and deepen your relationship with family and
          friends.
        </p>
        <button className="bg-primary m-4 text-background py-4 px-6 rounded-md">Register Now!</button>
        <button className="bg-secondary text-text py-4 px-6 rounded-md">About</button>

    </div>
  );
}
