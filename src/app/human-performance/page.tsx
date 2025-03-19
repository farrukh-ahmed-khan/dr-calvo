import Link from 'next/link';
import bar3 from '../../assets/images/bars3.png';
import orangeDot from '../../assets/images/dot.png';
import Image from 'next/image';
import HumanPerformanceFAQ from '@/components/ui/HumanPerformanceFAQ';
import ReadyToGetStarted from '@/components/ui/ReadyToGetStarted';


const HumanPerformance = () => {
    return (
        <>
            <section className="all-services-section" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="all-service-wrap">
                                <Image src={bar3} alt="image" style={{ width: "100px" }} />
                                <h6>Human <span> Performance </span> </h6>
                                <p>Are you ready to rediscover vitality, balance, and well-being to unlock your human potential?</p>
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

            <section className="care-wrap ">
                <div className="container " >
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card sec-toper global-service">
                                <div className="card-body">
                                    <div data-aos="fade-up" data-aos-duration="1000">
                                        <h6>Your Journey to Peak Performance Starts Here</h6>
                                        <p>
                                            At Texas Center Wellness, we are committed to helping you unlock your potential and achieve your goals. We understand that every individual is unique, with specific goals, challenges, and aspirations. Our integrative approach is centered around tailoring our services to your individual needs, ensuring that you receive the personalized care you deserve.
                                            <br /> <br />
                                            We combine the best practices from conventional medicine, complementary therapies, and evidence-based alternative treatments to create a comprehensive plan that works for you. Whether you&apos;re an athlete aiming to improve your sports performance, a professional seeking to enhance cognitive function, or simply someone looking to lead a healthier and more fulfilling life, we&apos;re here to support you every step of the way.
                                        </p>
                                    </div>
                                    <br />
                                    <div data-aos="fade-up" data-aos-duration="1000">
                                        <h6>Understanding Hormone Imbalances</h6>
                                        <p>
                                            A hormonal imbalance can significantly impact your overall health, influencing aspects such as your energy, mood, sleep, mental state, body composition, and sexual wellness. Our skilled healthcare team prioritizes understanding your individual hormonal landscape, employing thorough testing for an accurate and personalized diagnosis. This approach ensures that your treatment plan is specifically tailored to meet your unique health requirements.
                                        </p>
                                    </div>
                                    <br />
                                    <div data-aos="fade-up" data-aos-duration="1000">
                                        <h6>Potential Benefits of an Optimal Hormone Profile</h6>
                                        <p>
                                            Bioidentical Hormone Therapy (BHRT) is a treatment used to alleviate symptoms associated with hormonal imbalances in men and women, often related to menopause, andropause, or hypogonadism.
                                             It&apos;s  crucial to understand that BHRT&apos;s effectiveness and safety can vary based on individual health profiles and hormone types used. Always consult healthcare professionals for personalized advice and to explore the potential benefits and risks specific to your health needs.
                                        </p>
                                        <ul>
                                            <li> <Image src={orangeDot} alt="" /><span>Improved Mood and Emotional Well-being:</span> Balanced hormones can contribute to better mood regulation and emotional stability in regards to cognitive impairment and depression. <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5209560/" target="_blank">[source]</Link></li>
                                            <li> <Image src={orangeDot} alt="" /> <span>Enhanced Energy Levels: </span>An optimal hormone profile can lead to increased energy and reduced fatigue. <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6765788/" target="_blank">[source]</Link></li>
                                            <li> <Image src={orangeDot} alt="" /> <span>Increased Muscle Strength and Bone Density: </span>Particularly in the context of aging, optimal hormone levels can support muscle strength and bone health. <Link href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2604138" target="_blank">[source]</Link></li>
                                            <li> <Image src={orangeDot} alt="" /> <span>Improved Metabolic Function:</span> Balanced hormones can contribute to a healthier metabolism, which might aid in weight management. <Link href="https://bmcendocrdisord.biomedcentral.com/articles/10.1186/1472-6823-11-18" target="_blank">[source]</Link></li>
                                            <li> <Image src={orangeDot} alt="" /> <span>Women&apos;s Health Benefits: </span> Some studies suggest that optimal hormone profile can improve memory <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4640930/" target="_blank">[source]</Link> and sexual desire <Link href="https://ncbi.nlm.nih.gov/pmc/articles/PMC8064950/" target="_blank">[source]</Link>.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="care-wrap" >
                <HumanPerformanceFAQ />
            </section>

            <section className="care-wrap pt-5">
                <ReadyToGetStarted extraText="Say goodbye to the rollercoaster of imbalance and welcome a life of optimal well-being." />
            </section>



        </>

    );
};

export default HumanPerformance;
