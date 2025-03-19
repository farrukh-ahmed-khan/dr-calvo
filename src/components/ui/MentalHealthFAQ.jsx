"use client";
import { Accordion } from "react-bootstrap";
import Link from "next/link";

const MentalHealthFAQ = () => {


    const accordionData = [
        {
            title: "Nutritional Support and Gut Health",
            items: [
                "Dr. Calvo and our experts recognize the gut-brain connection and how a balanced gut microbiome can impact mood and mental health. Dietary changes and supplements may be recommended."
            ]
        },
        {
            title: "Hormone Regulation",
            items: [
                "Hormonal imbalances can contribute to mood and mental health disorders. We look to address hormonal health through natural approaches and/or bioidentical hormone therapy to alleviate symptoms."
            ]
        },
        {
            title: "NAD+",
            items: [
                "NAD+ is an abbreviation for nicotinamide adenine dinucleotide, which serves as a coenzyme present in every living cell. This versatile molecule presents exciting prospects for emerging therapeutic applications, with research suggesting its potential to support mental well-being and address chronic brain-related conditions. Review the studies of the potential advantages associated with NAD+ below:",
                "Supplementation with NAD+ and Its Precursors to Prevent Cognitive Decline across Disease Contexts. [source]",
                "Nicotinamide mononucleotide protects against cognitive impairment and neuronal death. [source]",
                "Role of NAD+ in regulating cellular and metabolic signaling pathways. [source]",
                "NAD+ in DNA repair and mitochondrial maintenance. [source]",
                "Therapeutic potential of NAD-boosting molecules. [source]",
                "NAD+ metabolism, stemness, the immune response, and cancer. [source]",
                "Sobriety and Satiety: Is NAD+ the Answer? [source]"
            ]
        },
        {
            title: "Mind-Body Techniques",
            items: [
                "Techniques such as mindfulness, meditation, yoga, and deep breathing are integrated to reduce stress, anxiety, and depression, and enhance emotional regulation."
            ]
        },
        {
            title: "Peptide Therapy",
            items: [
                "Peptide therapy is being studied for its potential benefits across various health domains, including mental wellness. This innovative approach is part of ongoing research into how peptides might support mental health outcomes. [source]",
                "See our Peptide Therapy page HERE"
            ]
        },
        {
            title: "Ketamine Therapy",
            items: [
                "Ketamine therapy involves the use of the anesthetic drug ketamine for therapeutic purposes, including mental health and some chronic pain conditions. This approach is considered for individuals seeking alternatives after traditional treatments have been ineffective. Ketamine therapy has shown potential in easing symptoms of several specific health issues, these include:",
                "Treatment-Resistant Depression: Ketamine has been researched for its rapid-acting antidepressant effects in individuals who have not responded to conventional antidepressants. [source]",
                "Anxiety Disorders: Preliminary research suggests ketamine may have anxiolytic effects that could benefit individuals with anxiety disorders. [source]",
                "Post-Traumatic Stress Disorder (PTSD): Some evidence supports ketamine's role in reducing symptoms of PTSD, offering a potential treatment avenue for those with this condition. [source]",
                "Multiple Disorders (OCD, SUD, and ED): Early studies suggest ketamine might also have beneficial effects on different disorders and the corresponding symptoms in some patients. [source]"
            ]
        },


    ];



    return (
        <>
            <div className="container care-sec" data-aos="fade-down" data-aos-duration="1000">
                <div className="row">
                    <div className="col-md-12">
                        <h6>
                            <span>Texas Center Wellness Mental Health Treatment </span> Options
                        </h6>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="acc-wrap">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Nutritional Support and Gut Health</Accordion.Header>
                                    <Accordion.Body className="patient-assessment-body">
                                        Dr. Calvo and our experts recognize the gut-brain connection and how a balanced gut microbiome can impact mood and mental health. Dietary changes and supplements may be recommended.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Hormone Regulation</Accordion.Header>
                                    <Accordion.Body className="patient-assessment-body">
                                        Hormonal imbalances can contribute to mood and mental health disorders. We look to address hormonal health through natural approaches and/or bioidentical hormone therapy to alleviate symptoms.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>NAD+</Accordion.Header>
                                    <Accordion.Body className="patient-assessment-body">
                                        NAD+ is an abbreviation for nicotinamide adenine dinucleotide, which serves as a coenzyme present in every living cell. This versatile molecule presents exciting prospects for emerging therapeutic applications, with research suggesting its potential to support mental well-being and address chronic brain-related conditions. Review the studies of the potential advantages associated with NAD+ below:
                                    </Accordion.Body>
                                    <Accordion.Body className="patient-assessment-body">
                                        Supplementation with NAD+ and Its Precursors to Prevent Cognitive Decline across Disease Contexts. <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9370773/">[source]</Link>
                                    </Accordion.Body>
                                    <Accordion.Body className="patient-assessment-body">
                                        NAD+ in Brain Aging and Neurodegenerative Disorders. <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6787556/">[source]</Link>
                                    </Accordion.Body>
                                    <Accordion.Body className="patient-assessment-body">
                                        Nicotinamide mononucleotide protects against cognitive impairment and neuronal death. <Link href="https://pubmed.ncbi.nlm.nih.gov/27130898/">[source]</Link>
                                    </Accordion.Body>
                                    <Accordion.Body className="patient-assessment-body">
                                        Role of NAD+ in regulating cellular and metabolic signaling pathways. <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7973386/">[source]</Link>
                                    </Accordion.Body>
                                    <Accordion.Body className="patient-assessment-body">
                                        NAD+ in DNA repair and mitochondrial maintenance. <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5384578/">[source]</Link>
                                    </Accordion.Body>
                                    <Accordion.Body className="patient-assessment-body">
                                        Therapeutic potential of NAD-boosting molecules. <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6342515/">[source]</Link>
                                    </Accordion.Body>
                                    <Accordion.Body className="patient-assessment-body">
                                        NAD+ metabolism, stemness, the immune response, and cancer. <Link href="https://www.nature.com/articles/s41392-020-00354-w">[source]</Link>
                                    </Accordion.Body>
                                    <Accordion.Body className="patient-assessment-body">
                                        Sobriety and Satiety: Is NAD+ the Answer? <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7278809/">[source]</Link>
                                    </Accordion.Body>

                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Mind-Body Techniques</Accordion.Header>
                                    <Accordion.Body className="patient-assessment-body">
                                        Our approach includes the utilization of peptide therapy, which is being explored for its potential to support blood flow, hormone balance, and tissue health, contributing to sexual wellness. This innovative therapy is part of our strategy to enhance overall sexual function and satisfaction. See our Peptide Therapy page
                                        <Link href="/peptide-therapy" style={{ color: "#fc8704", textDecoration: "none" }} target="_blank"> HERE</Link>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Peptide Therapy</Accordion.Header>
                                    <Accordion.Body className="patient-assessment-body">
                                        Peptide therapy is being studied for its potential benefits across various health domains, including mental wellness.
                                        This innovative approach is part of ongoing research into how peptides might support mental health outcomes.
                                        <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8844085/">[source]</Link>
                                    </Accordion.Body>
                                    <Accordion.Body className="patient-assessment-body">
                                        See our Peptide Therapy page <Link href="/peptide-therapy">HERE</Link>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Ketamine Therapy</Accordion.Header>
                                    <Accordion.Body className="patient-assessment-body">
                                        Ketamine therapy involves the use of the anesthetic drug ketamine for therapeutic purposes, including mental health and some chronic pain conditions. This approach is considered for individuals seeking alternatives after traditional treatments have been ineffective. Ketamine therapy has shown potential in easing symptoms of several specific health issues, these include:
                                    </Accordion.Body>
                                    <Accordion.Body className="patient-assessment-body">
                                        Treatment-Resistant Depression: Ketamine has been researched for its rapid-acting antidepressant effects in individuals who have not responded to conventional antidepressants. <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9635017/">[source]</Link>
                                    </Accordion.Body>

                                    <Accordion.Body className="patient-assessment-body">
                                        Chronic Pain Syndromes: Studies have indicated ketamine's effectiveness in managing chronic pain conditions, such as neuropathic pain, by modulating pain pathways. <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8567802/">[source]</Link>
                                    </Accordion.Body>

                                    <Accordion.Body className="patient-assessment-body">
                                        Anxiety Disorders: Preliminary research suggests ketamine may have anxiolytic effects that could benefit individuals with anxiety disorders.<Link href="https://pubmed.ncbi.nlm.nih.gov/31339086/">[source]</Link>
                                    </Accordion.Body>
                                    <Accordion.Body className="patient-assessment-body">
                                        Post-Traumatic Stress Disorder (PTSD): Some evidence supports ketamine's role in reducing symptoms of PTSD, offering a potential treatment avenue for those with this condition. <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6457782/">[source]</Link>
                                    </Accordion.Body>
                                    <Accordion.Body className="patient-assessment-body">
                                        Multiple Disorders (OCD, SUD, and ED): Early studies suggest ketamine might also have beneficial effects on different disorders and the corresponding symptoms in some patients. <Link href="https://ncbi.nlm.nih.gov/pmc/articles/PMC8301752/">[source]</Link>
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

export default MentalHealthFAQ;
