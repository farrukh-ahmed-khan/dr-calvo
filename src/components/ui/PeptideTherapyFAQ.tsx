"use client";
import { Accordion } from "react-bootstrap";


const PeptideTherapyFAQ = () => {


    const accordionData = [
        {
            title: "Growth Hormone Production",
            items: [
                "Ipamorelin / CJC 1295",
                "Tesamorelin / Ipamorelin",
                "Sermorelin",
                "Sermorelin / Ipamorelin",
                "MK-677 or Ibutamoren",
                "IGF LR3"
            ]
        },
        {
            title: "Healing and Recovery",
            items: [
                "BPC 157",
                "Thymosin Beta 4 or TB500",
                "GHK Cu",
                "PEG - MGF",
                "Pentosan Polysulfate"
            ]
        },
        {
            title: "Weight Loss & Fat Burning",
            items: [
                "Semaglutide",
                "AOD 9604",
                "Mots-C",
                "Ipamorelin / CJC 1295",
                "Sermorelin",
                "Ibutamoren",
                "5-Amino MQ1",
                "Tirzepatide/Pyridoxine"
            ]
        },
        {
            title: "Cognitive Function & Stress Relief",
            items: [
                "Dihexa",
                "Semax",
                "Epitalon",
                "Synapsin w/ GPC"
            ]
        },
        {
            title: "Sexual Function",
            items: [
                "Bremelanotide PT-141",
                "Melanotan",
                "Oxytocin"
            ]
        },
        {
            title: "Skin & Hair",
            items: [
                "GHK Cu",
                "Melanotan",
                "PTD-DBM/ Valproic Acid",
                "GHK-Cu/Argireline/Leuphasyl Cream"
            ]
        },
        {
            title: "Fertility",
            items: [
                "Gonadorelin",
                "Kisspeptin-10",
                "HCG",
                "FSH"
            ]
        },
        {
            title: "Sleep Support",
            items: [
                "DSIP (Delta Sleep-Inducing Peptide)"
            ]
        },
        {
            title: "Immune Support",
            items: [
                "DSIP (Delta Sleep-Inducing Peptide)",
                "Thymosin Alpha 1",
                "Thymulin"
            ]
        }
    ];



    return (
        <>
            <div className="container care-sec">
                <div className="row">
                    <div className="col-md-12">
                        <h6>
                            <span>Peptides </span> Available
                        </h6>
                    </div>
                </div>
                <div className="row mt-4" data-aos="fade-up" data-aos-duration="1000">
                    <div className="col-md-12">
                        <div className="acc-wrap">
                            <Accordion defaultActiveKey="0">
                                {accordionData.map((section, index) => (
                                    <Accordion.Item eventKey={index.toString()} key={index}>
                                        <Accordion.Header>{section.title}</Accordion.Header>
                                        {section.items.map((item, idx) => (
                                            <Accordion.Body className="patient-assessment-body" key={idx}>
                                                {item}
                                            </Accordion.Body>
                                        ))}
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PeptideTherapyFAQ;
