import "@/app/home.css";
import { FirstSection } from "@/components/home/first-section";
import { SecondSection } from "@/components/home/second-section";
import { ThirdSection } from "@/components/home/third-section";
import { FourthSection } from "@/components/home/fourth-section";
import { FifthSection } from "@/components/home/fifth-section";
import { SixthSection } from "@/components/home/sixth-section";
import { SeventhSection } from "@/components/home/seventh-section";

export default function Home() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
    </div>
  );
}
