import HomeBanner from "@/components/ui/HomeBanner";
import Healthcare from "@/components/ui/HealthCare";
import Work from "@/components/ui/Work";
import DavidCalvo from "@/components/ui/DavidCalvo";
import Faq from "@/components/ui/faq";


export default function Home() {
  return (
    <div className="">

      <section>
        <HomeBanner />
      </section>

      <section >
        <Healthcare />
      </section>

      <section className="care-wrap">
        <Work />
      </section>

       <section className="care-wrap">
        <DavidCalvo />
      </section>

      <section className="care-wrap">
        <Faq />
      </section>




    </div>
  );
}
