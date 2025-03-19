import Link from "next/link";

interface ReadyToGetStartedProps {
    extraText?: string;
    btnText?: string;
}

const ReadyToGetStarted: React.FC<ReadyToGetStartedProps> = ({ extraText, btnText }) => {
    return (
        <>
            <div className="container">
                <div className="row" data-aos="fade-up" data-aos-duration="1000">
                    <div className="col-md-12 mb-5">
                        <div className="card ready">
                            <div className="card-body">
                                <div>
                                    <h6>READY TO GET STARTED?</h6>
                                    <p >{extraText}</p>
                                    <div className="row mt-3">
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4">
                                            <Link href="https://payment.texascenterwellness.com/">
                                                <button>SIGN UP {btnText}</button>
                                            </Link>
                                        </div>
                                        <div className="col-md-4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ReadyToGetStarted;
