"use client";
import { Accordion } from "react-bootstrap";
import Link from "next/link";

const HumanPerformanceFAQ = () => {
    return (
        <>
            <div className="container care-sec">
                <div className="row">
                    <div className="col-md-12">
                        <h6 data-aos="fade-up" data-aos-duration="1000">
                            Human Performance Treatment <span>Options</span>
                        </h6>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="acc-wrap">
                            <Accordion defaultActiveKey="0" data-aos="fade-up" data-aos-duration="1000">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Patient Assessment</Accordion.Header>
                                    <Accordion.Body className="patient-assessment-body">
                                        Our experienced practitioners conduct thorough assessments to understand your current health status, lifestyle, fitness and sleep routine, and overall goals. This allows us to design a personalized
                                        plan that addresses your specific needs.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1" data-aos="fade-up" data-aos-duration="1000" >
                                    <Accordion.Header>Nutritional Guidance</Accordion.Header>
                                    <Accordion.Body className="patient-assessment-body">
                                        Our experts help identify nutrient deficiencies and create a customized plan that provides the essential nutrients to fuel your body and enhance your energy levels.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2" data-aos="fade-up" data-aos-duration="1000">
                                    <Accordion.Header>Bioidentical Hormone Therapy</Accordion.Header>
                                    <Accordion.Body className="patient-assessment-body">
                                        Bioidentical hormones, designed to closely match the hormones your body naturally produces, are derived from natural sources. They aim to offer a more seamless integration within your body’s systems,
                                        potentially resulting in fewer side effects when compared to synthetic hormone alternatives. <Link href="https://pubmed.ncbi.nlm.nih.gov/19179815/" target="_blank">[source]</Link>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3" data-aos="fade-up" data-aos-duration="1000">
                                    <Accordion.Header>Peptide Therapy</Accordion.Header>
                                    <Accordion.Body className="patient-assessment-body">
                                        We use peptide therapy to enhance human performance by targeting specific physiological processes such as muscle growth, tissue repair, hormone regulation, and neurotransmitter balance, ultimately
                                        optimizing factors like muscle strength, endurance, cognitive function,
                                        and overall vitality. Please see our information on Peptide Therapy
                                        <Link href="/peptide-therapy" style={{ color: "#fc8704", textDecoration: "none" }} target="_blank"> HERE</Link>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4" data-aos="fade-up" data-aos-duration="1000">
                                    <Accordion.Header>NAD+</Accordion.Header>
                                    <Accordion.Body className="patient-assessment-body">
                                        NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme found in all living cells and is essential for various biological processes, including energy production, DNA repair, and cellular metabolism. It
                                        plays a critical role in human performance by supporting energy production, enhancing cellular repair and resilience, and influencing various physiological functions.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HumanPerformanceFAQ;
