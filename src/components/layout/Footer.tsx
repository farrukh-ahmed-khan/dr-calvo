"use client";
import Link from "next/link";
import footerLogo from "@/assets/images/logo.png";
import Image from "next/image";

const Footer = () => {
    const scrollToSection = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const services = [
        {
            name: 'Human Performance',
            link: '/human-performance'
        },
        {
            name: 'Sexual Optimization',
            link: '/sexual-optimization'
        },
        {
            name: 'Peptide Therapy',
            link: '/peptide-therapy'
        },
        {
            name: 'Mental Health',
            link: '/mental-health'
        },
        {
            name: 'Anti-Aging',
            link: '/anti-aging'
        },
        {
            name: 'Repair and Regenerate',
            link: '/repair-and-regenerate'
        }
    ];

    return (
        <>

            <div className="container footer-style">
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <div>
                            <Link href="/">
                                <Image src={footerLogo} alt="img" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="address">
                            <h6>Contact Us</h6>
                            <div className="mt-3">
                                <Link href="tel:(512) 957-0001"><p> (512) 957-0001 </p></Link>
                                <Link href="mailto:info@texascenterwellness.com"><p> info@texascenterwellness.com </p></Link>
                                <Link href="https://maps.app.goo.gl/LWzKNEgbZ3ES8SPB7" style={{ textDecoration: "none !important" }}>
                                    <p>12812 Hacienda Ridge Austin,<br /> Texas 78738</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div>
                            <h6>General</h6>
                            <ul>
                                <li><button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection("#how-it-works");
                                    }}
                                    style={{ all: "unset", cursor: "pointer", color: "inherit" }}
                                >
                                    How It Works
                                </button>
                                </li>

                                <li><Link href="/meet-dr-calvo">Meet Dr. R. David Calvo</Link></li>
                                <li><Link href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div>
                            <h6>Services</h6>
                            <ul>
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <Link href={service.link}>{service.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div >

            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="copy-right">
                            <h6>Copyright © 2023 <span><Link href="https://payment.texascenterwellness.com/" target="_blank" style={{ color: "#fc8704", textDecoration: "none" }}>Texas Center Wellness</Link></span> | All Rights Reserved</h6>
                            <p>The information available on this website is provided for informational purposes only.
                                This information is not intended to replace a medical consultation where a physician’s
                                judgment may advise you about specific disorders, conditions, and/or treatment options.
                                We hope the information will be useful for you to become more educated about your health care decisions.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;
