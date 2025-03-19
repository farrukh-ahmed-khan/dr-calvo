import Image from "next/image";
import david from '../../assets/images/about-img.png'
import Link from "next/link";


const DavidCalvo = () => {
    return (
        <>
            <div className="container">
                <div className="row sec-toper d-flex align-items-center">
                    <div className="col-md-6">
                        <div className="david-img">
                            <Image src={david} alt="" style={{ width: "100%" }} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-david">
                            <h6>Meet Dr. R. David Calvo of <br />
                                <span>Texas Center Wellness</span></h6>
                            <p>Conceptualized from the idea of the holistic integrative effect of using 30+ years
                                of academic and clinic knowledge base to further develop the concepts of Hippocrates;
                                the first physician who charged all physicians with the Hippocratic Oath of “do no harm,
                                and physician heal thyself.”</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <Link href="/meet-dr-calvo">
                                        <button>MEET DR. CALVO</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DavidCalvo;



