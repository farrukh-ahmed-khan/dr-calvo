import Link from "next/link";
// import myVideo from '@/assets/images/myvideo.mp4'

const HomeBanner = () => {
    return (
        <>
            <div className="banner-sec">
                <video autoPlay
                    loop
                    muted
                    playsInline
                    className="background-video"
                >
                    <source src="/videos/myvideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h6>Embark on Your Journey to<br />
                                <span>Optimal Wellness</span>
                            </h6>
                            <p>Texas Center Wellness stands at the forefront of anti-aging
                                and integrative medicine, pioneering a revolutionary approach to <br /> harnessing the body’s innate ability to heal.</p>
                            <div className="row">
                                <div className="col-lg-4 col-md-3"></div>
                                <div className="col-lg-4 col-md-6 text-center">
                                    <Link href="https://payment.texascenterwellness.com/" target="_blank">
                                        <button>FULFILL YOUR POTENTIAL</button>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeBanner;
