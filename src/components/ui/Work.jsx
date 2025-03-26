"use client";
import { useEffect } from "react";
import $ from "jquery";
const Work = () => {

    useEffect(() => {
        if ($(".company-timeline-year").length) {
            $(".timeline-date .date").html(function (i, html) {
                const text = (html) || "";

                const chars = $.trim(text).split("");
                const new_html = "<span>" + chars.join("</span> <span>") + "</span>";
                $(this).append(new_html);
                // return new_html;
            });
            // $(".timeline-date .date").html(function (i, html) {
            //     const text = html || "";
            //     const chars = $.trim(text).split("");
            //     const new_html = "<span>" + chars.join("</span> <span>") + "</span>";
            //     return new_html; // Return the modified HTML
            // });

        }

        const handleScroll = () => {
            const timelineList = $(".company-timeline-list");
            const timelineYear = $(".company-timeline-year");

            if (timelineList.length && timelineYear.length) {
                const tar_off = (timelineList.height() ?? 0) + parseInt(timelineList.css("top") ?? "0") - (timelineYear.height() ?? 0);

                $(".company-timeline-block").each(function () {
                    const $this = $(this);
                    const this_off = ($(this).offset()?.top ?? 0) - tar_off;
                    const win_scroll = $(window).scrollTop() ?? 0;

                    if (
                        win_scroll > this_off &&
                        win_scroll < this_off + (timelineYear.height() ?? 0)
                    ) {
                        $this.addClass("active");
                        const curr_index = $this.index();
                        $(".timeline-date")
                            .eq(curr_index)
                            .addClass("animate")
                            .siblings()
                            .removeClass("animate");
                    }
                });
            }
        };


        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="container care-sec" >
                <div className="row sec-toper">
                    <div className="col-md-12">
                        <h6>How It <span>Works</span></h6>
                        <p>
                            Our patient sign-up process is simple and thorough, ensuring a seamless experience for you. <br />
                            With clear instructions and an intuitive form, you can provide all the necessary information quickly<br />
                            and easily, allowing Dr. Calvo to understand your needs and provide personalized care right from the start.
                        </p>
                    </div>
                </div>
            </div>
            <div className="company-timeline" id="company-timeline">
                <div className="container">
                    <div className="company-timeline-wrapper">
                        <div className="company-timeline-list">
                            <div className="timeline-heading">
                            </div>
                            <div className="company-timeline-year">
                                <span className="timeline-date">
                                    <div className="date">STEP.01 </div>
                                    <span className="circle"></span>
                                </span>
                                <span className="timeline-date">
                                    <div className="date"> STEP.02 </div>
                                    <span className="circle"></span>
                                </span>
                                <span className="timeline-date">
                                    <div className="date"> STEP.03 </div>
                                    <span className="circle"></span>
                                </span>
                                <span className="timeline-date">
                                    <div className="date"> STEP.04 </div>
                                    <span className="circle"></span>
                                </span>
                                <span className="timeline-date">
                                    <div className="date"> STEP.05 </div>
                                    <span className="circle"></span>
                                </span>
                            </div>
                        </div>
                        <div className="company-timeline-slider">
                            <div className="company-timeline-block has-media active">
                                <div className="block-inner">
                                    <span className="timeline-date"></span>
                                    <span className="circle"></span>
                                    <div className="image-block">

                                    </div>
                                    <h4>Sign up as a patient.</h4>
                                    <p>
                                        Once you&apos;ve clicked the sign-up button, you&apos;ll be taken to a dedicated page where you can provide us with some essential information. Don&apos;t worry, we&apos;ve designed the form to be simple and straightforward. We&apos;ll ask for your name, contact details, and the reason you&apos;re seeking care. Just follow the instructions and labels for each field, and you&apos;ll be done in no time.
                                    </p>
                                </div>
                            </div>
                            <div className="company-timeline-block active">
                                <div className="block-inner">
                                    <span className="timeline-date"></span>
                                    <span className="circle"></span>
                                    <h4>Virtual Consultation with Dr. Calvo</h4>
                                    <p>
                                        Through a virtual consultation, Dr. Calvo can evaluate your symptoms, provide a diagnosis, recommend appropriate treatment options, and address any concerns or questions you may have, all from the comfort and convenience of your own home. This helps ensure timely access to healthcare and promotes continuity of care, ultimately improving patient outcomes.
                                    </p>
                                </div>
                            </div>
                            <div className="company-timeline-block has-media active">
                                <div className="block-inner">
                                    <span className="timeline-date"></span>
                                    <span className="circle"></span>
                                    <div className="image-block">

                                    </div>
                                    <h4>Get Your Personalized Biomarkers and Diagnostics Outlined</h4>
                                    <p>
                                        Getting your biomarkers completed is important because it provides valuable insights into your health and helps identify potential risk factors or imbalances. By measuring specific biomarkers, such as cholesterol levels, blood pressure, organ health, and hormone levels, Dr. Calvo can assess your overall health, make informed treatment decisions, and develop personalized strategies to optimize your well-being and prevent future health issues.
                                    </p>
                                </div>
                            </div>
                            <div className="company-timeline-block has-media active">
                                <div className="block-inner">
                                    <span className="timeline-date"></span>
                                    <span className="circle"></span>
                                    <div className="image-block">

                                    </div>
                                    <h4>Receive Your Prescriptions and Treatments Right To Your Doorstep</h4>
                                    <p>
                                        Texas Center Wellness offers the convenience of receiving prescriptions directly to your home, eliminating the need for in-person visits to a pharmacy. By leveraging technology and secure online platforms, we can electronically send prescriptions to your preferred pharmacy or even arrange for home delivery, ensuring that you have easy access to the medications you need without leaving your house.
                                    </p>
                                </div>
                            </div>
                            <div className="company-timeline-block active">
                                <div className="block-inner">
                                    <span className="timeline-date"></span>
                                    <span className="circle"></span>
                                    <h4>We&apos;re Here for You</h4>
                                    <p>
                                        Patient care is an ongoing and integral part of your wellness journey even after the completion of the initial treatment plan. Regular follow-up appointments and check-ins allow us to monitor your progress, address any new concerns, and make any necessary adjustments to optimize your health. Our commitment to ongoing patient care ensures that we provide comprehensive support and guidance to help you maintain your well-being and achieve long-term health goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Work;
