import Link from "next/link";
import fullScriptImg from '../../assets/images/full-script-img.png'
import ringImg1 from '../../assets/images/ring1.png'
import ringImg2 from '../../assets/images/ring2.png'
import ringImg3 from '../../assets/images/ring3.png'
import Image from "next/image";


const Fullscripts = () => {
    return (
        <>

            <section className="nut-sec">
                <div className="container-fluid">
                    <div className="row nut-wrap">
                        <div className="col-md-4">
                            <div className="rings-full">
                                <Image src={ringImg3} alt="Image" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <Image src={fullScriptImg} alt="Image" />

                            </div>
                            <Link href="https://us.fullscript.com/welcome/texascenterwellness " target="_blank">  <button>Click here to Register!</button></Link>
                        </div>
                        <div className="col-md-4">
                            <div className="rings-full">
                                <Image src={ringImg1} alt="Image" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-1">
                            <div className="circle-ring">
                                <Image src={ringImg2} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>

    );
};

export default Fullscripts;
