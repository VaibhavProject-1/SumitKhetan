import Image from "next/image";
import Hero from "./HomePage/Hero";
import Story from "./HomePage/Story";
import Upcoming from "./HomePage/Upcoming";
import TabView from "./HomePage/Tabs";
import Difference from "./HomePage/Difference";

export default function Home() {
  return (
    <main className="overflow-hidden bg-black">
    <Hero/>
    <Story/>
    <Upcoming/>
    <TabView/>
    <Difference/>
    </main>
  );
}
