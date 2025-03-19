"use client";
import { Accordion } from "react-bootstrap";


const AntiAgingFAQ = () => {


    const accordionData = [
        {
            title: "Nutrition and Supplement Support",
            items: [
                "Our healthcare experts provide comprehensive nutrient and mineral testing to gather data for the purpose of creating a balanced diet and prescribing nutraceuticals rich in antioxidants, vitamins, and minerals, all aimed at combating oxidative stress and supporting vibrant skin and overall health."
            ]
        },
        {
            title: "Hormone Balancing",
            items: [
                "Hormonal imbalances can contribute to the aging process. Our approach aims to optimize hormone levels for improved vitality and well-being through natural modalities, as well as bioidentical hormone therapy."
            ]
        },
        {
            title: "Peptide Therapy",
            items: [
                "Peptide therapy shows potential in addressing various aspects of aging by targeting specific cellular mechanisms and promoting rejuvenation. Please see our Peptide Therapy page HERE"
            ]
        },
        {
            title: "Cellular Rejuvenation",
            items: [
                "Our approach includes examining regenerative therapies, like exosomes and stem cells, which are studied for their potential to aid in cellular repair and renewal. These therapies are part of ongoing research into ways to mitigate the effects of aging."
            ]
        },
        {
            title: "Mind-Body Wellness",
            items: [
                "Techniques like mindfulness, meditation, and yoga promote stress reduction, mental clarity, and emotional balance – essential components of anti-aging."
            ]
        },
        {
            title: "Radio Frequency Microneedling with Exosomes and/or PRP",
            items: [
                "RF Microneedling combines the approaches of microneedling and radio frequency treatments. Microneedling involves creating tiny punctures in the skin, which can stimulate the skin's natural healing process, potentially leading to the production of capillaries, elastin, and collagen. Concurrently, the application of radio frequency energy aims to further encourage the skin's rejuvenation process by heating the underlying layers, which may contribute to skin tightening and enhanced production of collagen and elastin. Additionally, we incorporate exosomes as a supplementary product to potentially support the skin's healing from RF microneedling and to foster the collagen-enhancing effects.",
            ]
        },
        {
            title: "Sleep Optimization",
            items: [
                "Adequate sleep is crucial for cellular repair and hormonal balance. We offer strategies to improve sleep quality and establish healthy sleep patterns."
            ]
        },


    ];



    return (
        <>
            <div className="container care-sec" data-aos="fade-up" data-aos-duration="1000">
                <div className="row">
                    <div className="col-md-12">
                        <h6>
                            <span>Anti-Aging Treatments </span> Available
                        </h6>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="acc-wrap">
                            <Accordion defaultActiveKey="0">
                                {accordionData.map((section, index) => (
                                    <Accordion.Item eventKey={index.toString()} data-aos="fade-up" data-aos-duration="1000" key={index}>
                                        <Accordion.Header>{section.title}</Accordion.Header>
                                        {section.items.map((item, idx) => (
                                            <Accordion.Body className="patient-assessment-body"  key={idx}>
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

export default AntiAgingFAQ;
