
"use client";
import { Accordion } from "react-bootstrap";
import Link from "next/link";

const SexualOptimizationFAQ = () => {
    return (
        <>
            <div className="container care-sec" data-aos="fade-up" data-aos-duration="1000">
                <div className="row">
                    <div className="col-md-12">
                        <h6>
                            <span>Sexual Optimization Treatment</span> Options
                        </h6>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="acc-wrap">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Lifestyle Modification</Accordion.Header>
                                    <Accordion.Body className="patient-assessment-body">
                                        Our medical experts emphasize lifestyle changes, including regular exercise, healthy diet, stress management, and adequate sleep to improve overall vitality and sexual well-being.Our medical experts emphasize lifestyle changes, including regular exercise, healthy diet, stress management, and adequate sleep to improve overall vitality and sexual well-being.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Hormonal Balance</Accordion.Header>
                                    <Accordion.Body className="patient-assessment-body">
                                        Our approach centers on enhancing hormonal balance using natural methods and bioidentical hormone therapy, potentially improving sexual function and wellness. This method is grounded in the understanding that hormonal equilibrium is key to sexual health. [source]
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Nutritional Support and Supplements</Accordion.Header>
                                    <Accordion.Body className="patient-assessment-body">
                                        Dr. Calvo and the team focus on nutritional support for sexual wellness, and may suggest certain nutrients, vitamins, and minerals that potentially might play a role in enhancing your sexual health.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Peptide Therapy</Accordion.Header>
                                    <Accordion.Body className="patient-assessment-body">
                                        Our approach includes the utilization of peptide therapy, which is being explored for its potential to support blood flow, hormone balance, and tissue health, contributing to sexual wellness. This innovative therapy is part of our strategy to enhance overall sexual function and satisfaction. See our Peptide Therapy page
                                        <Link href="/peptide-therapy" style={{ color: "#fc8704", textDecoration: "none" }} target="_blank"> HERE</Link>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>PRP Injections</Accordion.Header>
                                    <Accordion.Body className="patient-assessment-body">
                                        PRP stands for Platelet-Rich Plasma, and PRP injections involve the extraction and use of a concentrated form of plasma from your own blood to promote tissue repair and healing. We incorporate regenerative techniques like platelet-rich plasma (PRP) therapy to promote tissue repair and regeneration to enhance sexual function.
                                        PRP therapy is being explored for its potential to support sexual wellness in men and women. <span> </span>
                                        <Link href="/http://harmhealth.com/" target="_blank"> [men source]</Link>
                                        <span> </span>
                                        <Link href="/https://pubmed.ncbi.nlm.nih.gov/38001920/" target="_blank">  [women source]</Link>

                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>ED Medication</Accordion.Header>
                                    <Accordion.Body className="patient-assessment-body">
                                        Our team also explores the use of FDA-approved medications, such as tadalafil or sildenafil, as potential options for enhancing blood flow and addressing erectile dysfunction. These medications are considered as part of a comprehensive treatment plan tailored to individual needs.
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

export default SexualOptimizationFAQ;
