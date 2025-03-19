
import Link from "next/link";
import bars3 from '../../assets/images/bars3.png';
import Image from "next/image";
import ReadyToGetStarted from "@/components/ui/ReadyToGetStarted";
import MentalHealthFAQ from "@/components/ui/MentalHealthFAQ";


const MentalHealth = () => {
    return (
        <>
            <section className="all-services-section" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="all-service-wrap">
                                <Image src={bars3} alt="image" style={{ width: "100px", }} />
                                <h6>Mental <span> Health </span> </h6>
                                <p>Step into a new era where managing mental health transcends boundaries.</p>
                                <div className="row">
                                    <div className="col-md-5"></div>
                                    <div className="col-md-2">
                                        <Link href="https://payment.texascenterwellness.com/">
                                            <button>SIGN UP TODAY</button>
                                        </Link>
                                    </div>
                                    <div className="col-md-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="care-wrap" >
                <div className="container " data-aos="fade-down" data-aos-duration="1000">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card sec-toper global-service">
                                <div className="card-body">
                                    <div>
                                        <h6>The Texas Center Wellness Approach To Mental Health</h6>
                                        <p>
                                            We recognize the complexity of mental health, which is shaped by various factors, and aim to deliver holistic care that addresses the entire individual. It&apos;s crucial for those facing mental health challenges to collaborate with professional healthcare providers capable of devising a customized, integrative plan suited to their unique circumstances.
                                            <br /> <br />
                                            At Texas Center Wellness, we adopt a holistic and integrative stance towards mental health care, acknowledging the intricate relationship between physical, emotional, and mental well-being. Here&apos;s an overview of our approach to supporting mental health:
                                        </p>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="care-wrap pt-5">
                <div className="container" data-aos="fade-down" data-aos-duration="1000">
                    <div className="row benefits-wrap">
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <h6>Lifestyle Assessment</h6>
                                        <p>Our practitioners take a thorough look at a patient&apos;s physical health, lifestyle, emotional state, and environmental factors to identify potential contributors to mental health concerns.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <h6>Personalized Treatment Plans </h6>
                                        <p>We create individualized treatment plans that address the unique needs and preferences of each patient, acknowledging that mental health challenges are not one-size-fits-all</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <h6>Lifestyle Modification </h6>
                                        <p>We emphasize the importance of a balanced lifestyle, including exercise, nutrition, sleep, and stress management, to support mental well-being.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <h6>Environmental Considerations</h6>
                                        <p>We look to assess environmental factors like exposure to toxins and allergens that might impact mental health and offer strategies for reducing such exposures.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <h6>Support for Chronic Conditions</h6>
                                        <p>We assist patients in managing chronic conditions like pain, autoimmune disorders, and chronic fatigue, which can have profound effects on mental health.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <h6>Long-Term Wellness</h6>
                                        <p>Our focus is on building resilience and equipping patients with tools for ongoing mental well-being, rather than solely treating symptoms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >

            <section className="care-wrap">
                <MentalHealthFAQ />
            </section>

            <section className="care-wrap pt-5">
                <ReadyToGetStarted extraText="Reclaim power over your life." btnText="" />
            </section>



        </>

    );
};

export default MentalHealth;
