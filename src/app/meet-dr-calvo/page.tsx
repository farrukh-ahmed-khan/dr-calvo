import Image from 'next/image';
import david from '../../assets/images/about-img.png'
import ReadyToGetStarted from '@/components/ui/ReadyToGetStarted';


const MeetDrCalvo = () => {

    return (
        <>
            <div>
                <div>
                    <section className="care-wrap">
                        <div className="container care-sec">
                            <div className="row sec-toper mt-5">
                                <div className="col-md-6 mb-4">
                                    <div className="david-img">
                                        <Image src={david} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="about-david-page">
                                        <h6>About <span>
                                            Dr. R. David Calvo</span>
                                        </h6>
                                        <p>Born and educated in Texas, Dr. R. David Calvo&apos;s journey began with a strong foundation in science, as he earned an undergraduate degree in Microbiology from the University of Texas at Austin. Driven by a desire to attend medical school, he completed a master&apos;s degree and thesis in Cancer Research in the Department of Nuclear Medicine at the renowned M. D. Anderson Hospital and Tumor Institute. This was done under the oversight of the University of Texas Graduate School of Biomedical Sciences in Houston, TX.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="about-david-page mt-4">
                                        <p>
                                            Subsequently, he earned his medical degree from the University of Texas Medical School in Houston. His commitment to excellence led him to complete a surgical internship, during which he spent two months as a surgical intern
                                            aboard the Life Flight helicopter, and following that, a four-year orthopedic surgery residency at Hermann Hospital and its affiliated hospitals. Here, he honed his surgical skills and developed a profound understanding of
                                            orthopedic medicine.
                                            <br /><br />

                                            Continuously seeking to expand his knowledge and expertise, Dr. Calvo pursued fellowships in two specialized areas. He completed fellowships in Sports Medicine: Arthroscopic & Reconstructive Knee Surgery
                                            at the prestigious Steadman Clinic in California, renowned for its groundbreaking contributions to sports medicine and knee surgery. He also served as a fellow in Reconstructive Artificial Joint Surgery for degenerative
                                            joints at the world-famous Princess Margaret Rose Orthopedic Hospital in Edinburgh, Scotland.
                                            <br /><br />

                                            In 1984, he founded the Texas Center for Sports Medicine and Orthopedic Surgery, along with the Sports Laboratory Systems, a
                                            state-of-the-art rehabilitation and sports medicine facility modeled after the US Olympic Training Center in Springs. Additionally, he established the Texas Sports Science Institute, a biomechanical research facility in
                                            Sugar Land, Texas, aimed at improving performance and preventing injuries in athletes.
                                            <br /><br />
                                            With over 35 years of experience in orthopedic surgery, Dr. Calvo has established himself as a trusted practitioner in the fields of
                                            orthopedic surgery and integrative medicine. Before founding the Texas Center Wellness, he served the orthopedic and sports communities in the Houston metro area for 29 years and, more recently, in the Austin and Central
                                            Texas areas as the chief of orthopedic surgery at Lakeway Hospital in Lakeway, Texas. His dedication to providing exceptional care to athletes at all levels, from amateurs to professionals and non-athletes, has earned him a
                                            reputation as a skilled physician and surgeon.
                                            <br /><br />
                                            Dr. Calvo is a highly accomplished orthopedic surgeon and sports medicine expert. With extensive experience in the field, he has worked with numerous patient-athletes, schools,
                                            organizations, as well as the general public.
                                            <br /><br />
                                            As a team physician for seven high schools in the Houston area, Dr. Calvo has provided exceptional care to young and advanced athletes. He has also collaborated with Houston
                                            Baptist University and Sam Houston State University, ensuring the well-being of collegiate athletes.
                                            <br /><br />
                                            After retiring from his allopathic orthopedic practice seven years ago, Dr. Calvo pursued his continued strong interest in
                                            preventative, regenerative medicine, and anti-aging medicine. His latest passion has evolved into what is now a robust and growing integrative medical practice. He opened Texas Center Wellness in Austin, Texas, and serves a
                                            global population via telemedicine. His enthusiasm for wellness and prevention has led him into the complex fields of stem cells, exosomes, peptides, as well as bio-identical hormones and a range of alternative modalities.
                                            These areas of expertise have attracted individuals from around the world seeking his guidance.

                                            <br /><br />
                                            Dr. Calvo has trained under the world-renowned faculty and mentors of the American Association of Anti-Aging Medicine (A4M), the
                                            Age Management Medicine Group (AMMG), and several other oversight organizations in the fields of regenerative medicine, stem cells, exosomes, platelet-rich plasma, bioidentical hormones, human peptide therapeutics,
                                            nutrition, and integrative medicine. This training has been conducted in conjunction with his past orthopedic practice and now in his concentrated integrative medicine practice. His goal is to bring state-of-the-art modern
                                            products and techniques to his patient population, offering them the best of both allopathic traditional medicine and progressive medical care.
                                            <br /><br />
                                            In addition to his many other accomplishments, he is certified by the National
                                            Board of Physicians and Surgeons as an orthopedic surgeon and physician. He has also been certified by the American Academy of Anti-Aging Medicine in Human Peptide Therapy and serves as an accredited member of the
                                            International Peptide Society. Dr. Calvo maintains an aggressive continuing education schedule to stay abreast of the latest developments across his many areas of expertise.
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

export default MeetDrCalvo;
