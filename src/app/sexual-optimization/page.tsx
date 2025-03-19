

import Link from "next/link";
import bar4 from '@/assets/images/bars4.png';
import ReadyToGetStarted from "@/components/ui/ReadyToGetStarted";
import SexualOptimizationFAQ from "@/components/ui/SexualOptimizationFAQ";
import Image from "next/image";

const SexualOptimization = () => {
    return (
        <>
            <section className="all-services-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="all-service-wrap">
                                <Image src={bar4} alt="image" style={{width: "100px"}} />
                                <h6>Sexual <span> Optimization </span> </h6>
                                <p>We&apos;re thrilled to introduce you to the world of sexual optimization - a transformative approach to reclaiming intimacy and<br /> elevating your sexual well-being.</p>
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

            <section className="care-wrap">
                <div className="container" data-aos="fade-up" data-aos-duration="1000">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card sec-toper global-service">
                                <div className="card-body">
                                    <div data-aos="fade-up" data-aos-duration="1000">
                                        <h6>What is Sexual Optimization?</h6>
                                        <p>
                                            Sexual optimization refers to enhancing one&apos;s sexual health and experience through a holistic approach that encompasses physical, emotional, and relational well-being. It involves understanding and addressing the factors that influence sexual function and satisfaction, such as hormonal balance, psychological health, and intimacy in relationships. By focusing on these aspects, sexual optimization aims to improve overall sexual quality of life, ensuring a fulfilling and healthy sexual experience.
                                        </p>
                                    </div>
                                    <br />
                                    <div data-aos="fade-up" data-aos-duration="1000">
                                        <h6>Embracing Sexual Wellness</h6>
                                        <p>
                                            Embracing sexual wellness involves a comprehensive approach that includes nurturing physical health, emotional connection, and open communication. It&apos;s about exploring and understanding your own needs and desires, as well as those of your partner, within a safe and respectful environment. This journey towards sexual wellness should also include educating oneself about sexual health and seeking professional guidance when necessary, to ensure a fulfilling and positive sexual experience.
                                        </p>
                                    </div>
                                    <br />
                                    <div className="mb-4" data-aos="fade-up" data-aos-duration="1000">
                                        <h6>Enhance Your Intimacy</h6>
                                        <p>
                                            Explore a new horizon in sexual wellness with our cutting-edge treatments, designed to enhance your sexual health and experience. Dr. Calvo utilizes the latest in cellular repair, hormonal balance, Platelet-Rich Plasma therapy, and other innovative techniques to potentially improve sexual vitality and enjoyment. Our integrative approach caters to both men and women, offering a path to revitalized pleasure and satisfaction.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="care-wrap ">
                <div className="container" data-aos="fade-up" data-aos-duration="1000">
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="sec-toper benefits-heading">
                                <h5>The Benefits of Sexual Optimization</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row benefits-wrap">
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <h6>Enhanced Passion</h6>
                                        <p>Rediscover the excitement and passion in your intimate relationships as Sexual Optimization reignites the flame.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <h6>Improved Confidence </h6>
                                        <p>Feel empowered and confident in your body, leading to a more positive self-image and increased self-assurance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <h6>Intimate Connection</h6>
                                        <p>Strengthen the emotional bond with your partner through improved communication, intimacy, and shared experiences.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <h6>Peak Performance   </h6>
                                        <p>Experience heightened pleasure and satisfaction, allowing you to achieve your sexual peak.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="care-wrap">
                <SexualOptimizationFAQ />
            </section>

            <section className="care-wrap pt-5">
                <ReadyToGetStarted extraText="Rediscover the joy of intimate connections. Ignite your passion and create lasting memories." btnText="START TODAY" />
            </section>

          

        </>

    );
};

export default SexualOptimization;
