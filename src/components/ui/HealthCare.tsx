import Link from "next/link";
import bar1 from '@/assets/images/bars1.png';
import bar2 from '@/assets/images/bars2.png';
import bar3 from '@/assets/images/bars3.png';
import bar4 from '@/assets/images/bars4.png';
import bar5 from '@/assets/images/bars5.png';
import bar6 from '@/assets/images/bars6.png';
import Image from "next/image";

const Healthcare = () => {
    return (
        <>
        <div className="care-wrap">
            <div className="container care-sec" data-aos="fade-up" data-aos-duration="1000">
                <div className="row sec-toper">
                    <div className="col-md-12">
                        <h6>Personalized Healthcare<br />
                            <span>Tailored to You</span>
                        </h6>
                        <p>
                            Dr. R. David Calvo will collaborate with you to design a custom comprehensive
                            treatment plan, integrating a variety of therapies<br /> such as regenerative medicine,
                            lifestyle modifications, behavioral techniques, and more.
                        </p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4 mb-4">
                        <div className='newsCard news-Slide-up black-box-wrap'>
                            <div>
                                <Image src={bar1} alt="" />
                                <h3>Human Performance</h3>
                            </div>
                            <div className='newsCaption'>
                                <h2 className='newsCaption-title'>Human Performance</h2>
                                <div className='newsCaption-content'>
                                    <ul>
                                        <li> Bioidentical Hormone Therapy</li>
                                        <li>Peptide Therapy</li>
                                        <li>Athletic Performance</li>
                                        <li>Weight Loss</li>
                                        <li>Sexual Health</li>
                                        <li>Tissue Repair</li>
                                        <li>Sleep Quality</li>
                                        <li>Energy Improvement</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4 mb-4">
                        <div className='newsCard news-Slide-up black-box-wrap'>
                            <div>
                                <Image src={bar2} alt="" />
                                <h3>Peptide Therapy</h3>
                            </div>
                            <div className='newsCaption'>
                                <h2 className='newsCaption-title'>Peptide Therapy</h2>
                                <div className='newsCaption-content'>
                                    <ul>
                                        <li>Enhanced Athletic Performance</li>
                                        <li>Neurological Health</li>
                                        <li>Immune System Modulation</li>
                                        <li>Pain Management</li>
                                        <li>Gut Health Improvement</li>
                                        <li>Anti-Aging Benefits</li>
                                        <li>Body Composition Enhancement</li>
                                        <li>Skin and Hair Health</li>
                                        <li>Sexual Health</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="newsCard news-Slide-up black-box-wrap">
                            <div>
                                <Image src={bar3} alt="" /><br />
                                <h3>Mental Health</h3>
                            </div>
                            <div className='newsCaption'>
                                <h2 className='newsCaption-title'>Mental Health</h2>
                                <div className='newsCaption-content'>
                                    <ul>
                                        <li>Ketamine Therapy</li>
                                        <li>General Anxiety</li>
                                        <li>PTSD</li>
                                        <li>NAD+</li>
                                        <li>Hormone Replacement Therapy</li>
                                        <li>Stress Reduction Techniques</li>
                                        <li>Cognitive Enhancement</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="newsCard news-Slide-up black-box-wrap">
                            <div>
                                <Image src={bar4} alt="" /><br />
                                <h3>Sexual Optimization</h3>
                            </div>
                            <div className='newsCaption'>
                                <h2 className='newsCaption-title'>Sexual Optimization</h2>
                                <div className='newsCaption-content'>
                                    <ul>
                                        <li>PRP Injections</li>
                                        <li>ED Improvement</li>
                                        <li>Increased Intimacy</li>
                                        <li>Hormone Optimization</li>
                                        <li>Blood Flow Enhancement</li>
                                        <li>Nutritional Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="newsCard news-Slide-up black-box-wrap">
                            <div>
                                <Image src={bar5} alt="" /><br />
                                <h3>Anti-Aging</h3>
                            </div>
                            <div className='newsCaption'>
                                <h2 className='newsCaption-title'>Anti-Aging</h2>
                                <div className='newsCaption-content'>
                                    <ul>
                                        <li>Bioidentical Hormone Therapy</li>
                                        <li>Peptide Therapy</li>
                                        <li>Nutritional Support</li>
                                        <li>Skin Rejuvenation Treatments</li>
                                        <li>Stem Cells &amp; Exosomes</li>
                                        <li>Non-Surgical Hair Loss Treatments</li>
                                        <li>Non-Surgical Joint and Tissue Repair</li>
                                        <li>Weight Loss</li>
                                        <li>Sexual Health</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="newsCard news-Slide-up black-box-wrap">
                            <div>
                                <Image src={bar6} alt="" /><br />
                                <h3>Repair and Regenerate</h3>
                            </div>
                            <div className='newsCaption'>
                                <h2 className='newsCaption-title'>Repair and Regenerate</h2>
                                <div className='newsCaption-content'>
                                    <ul>
                                        <li>Peptide Therapy</li>
                                        <li>PRP Injections</li>
                                        <li>Stem Cells &amp; Exosomes</li>
                                        <li>Skin Rejuvenation Treatments</li>
                                        <li>Chronic Injury Management</li>
                                        <li>Non-Surgical Joint and Tissue Repair</li>
                                        <li>Improved Quality of Life</li>
                                        <li>Pain Management Therapy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4" data-aos="fade-up" data-aos-duration="1000">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="start-btn">
                            <Link href="https://payment.texascenterwellness.com/">
                                <button>GET STARTED</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Healthcare;



