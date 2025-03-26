import ReadyToGetStarted from '@/components/ui/ReadyToGetStarted';
import Link from 'next/link';


const Contact = () => {
    return (
        <>
            <div>
                <div>

                    <section className="care-wrap">
                        <div className="container care-sec">
                            <div className="row sec-toper">
                                <div className="col-md-12 mb-4  pt-5">
                                    <div>
                                        <h6>CONTACT US</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="contact-david-page mt-4">
                                        <p>
                                            Phone:
                                            <Link href="tel:(512) 957-0001">(512) 957-0001</Link>
                                        </p>
                                        <p>
                                            Email:
                                            <Link href="mailto:info@texascenterwellness.com">info@texascenterwellness.com</Link> |
                                            <Link href="mailto:refills@texascenterwellness.com">refills@texascenterwellness.com</Link>
                                        </p>
                                        <p>
                                            Address:
                                            12812 Hacienda Ridge Austin, Texas 78738
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="care-wrap pt-5">
                        <ReadyToGetStarted />
                    </section>


                </div>
            </div>
        </>

    );
};

export default Contact;
