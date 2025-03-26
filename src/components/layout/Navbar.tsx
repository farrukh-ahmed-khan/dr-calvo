"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";
import "@/styles/main.scss"

import Image from "next/image";
import logo from "@/assets/images/logo.png";
// import Button from "../LogoutBtn/Button";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
    const [scrolling, setScrolling] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    const navbardata = [
        { id: 1, title: "HOW IT WORKS", link: "#how-it-works" },
        {
            id: 2,
            title: "SERVICES",
            link: "javascript:void(0);",
            dropdown: [
                { name: "HUMAN PERFORMANCE", link: "/human-performance" },
                { name: "SEXUAL OPTIMIZATION", link: "/sexual-optimization" },
                { name: "PEPTIDE THERAPY", link: "/peptide-therapy" },
                { name: "MENTAL HEALTH", link: "/mental-health" },
                { name: "ANTI-AGING", link: "/anti-aging" },
                { name: "REPAIR & REGENERATE", link: "/repair-and-regenerate" },
            ],
        },
        {
            id: 3,
            title: "SUPPLEMENTS",
            link: "javascript:void(0);",
            dropdown: [
                { name: "NUTRITIONAL FRONTIERS", link: "/nutrional-frontiers" },
                { name: "FULLSCRIPT", link: "/fullscript" }
            ],
        },
        { id: 4, title: "MEET DR. R. DAVID CALVO", link: "/meet-dr-calvo" },
    ];

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("ovr-hiddn");
        // document.body.classList.toggle("overflw");
    };

    const handleDropdown = (id: number, open: boolean) => {
        setDropdownOpen(open ? id : null);
    };

    const handleDropdownClick = (link: string) => {
        if (typeof window === "undefined") return;

        if (link.startsWith("#")) {
            if (pathname === "/") {
                document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
            } else {
                router.push(`/${link}`);
            }
        } else {
            router.push(link);
        }
    };


    useEffect(() => {
        if (typeof window === "undefined") return;
        const hash = window.location.hash;
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) element.scrollIntoView({ behavior: "smooth" });
            }, 200);
        }
    }, [pathname]);

    const isActive = (link: string) => {
        if (link.startsWith("#")) {
            return typeof window !== "undefined" && window.location.hash === link;
        }
        return pathname === link;
    };

    return (
        <div className={`headers-wrapper ${scrolling ? 'header-bg' : ''}`}>
            <div className="upper-header-wrapper">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-8 col-md-8">
                            <div className="logo">
                                <Link href="/">
                                    <Image src={logo} alt="logo" />
                                </Link>
                                <div className={`menu ${menuOpen ? "open" : ""}`}>
                                    <ul>
                                        {navbardata.map((data) => (
                                            <li
                                                key={data.id}
                                                onMouseEnter={() => data.dropdown && handleDropdown(data.id, true)}
                                                onMouseLeave={() => data.dropdown && handleDropdown(data.id, false)}
                                                className={isActive(data.link) ? 'active' : ''}
                                            >
                                                {data.link.startsWith("#") ? (
                                                    <Link href={data.link} onClick={(e) => {
                                                        e.preventDefault();
                                                        handleDropdownClick(data.link);
                                                    }}>{data.title}</Link>
                                                ) : (
                                                    <Link href={data.link}>{data.title}</Link>
                                                )}
                                                {data.dropdown && (
                                                    <span className="arrow">
                                                        <ExpandMoreIcon />
                                                    </span>
                                                )}
                                                {data.dropdown && dropdownOpen === data.id && (
                                                    <ul className="dropdown">
                                                        {data.dropdown.map((item, index) => (
                                                            <li key={index} className={isActive(item.link) ? 'active' : ''}>
                                                                <Link
                                                                    href={item.link}
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        handleDropdownClick(item.link);
                                                                    }}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mobile-view">
                                        <div className="accounts-wrap-cart">
                                            <div className="accounts-wrap">
                                                <Link href="https://payment.texascenterwellness.com/">
                                                    <button className="login-btn">
                                                        <PersonOutlineOutlinedIcon />MAKE AN APPOINTMENT
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="header-info">
                                        <div>
                                            <Link href="tel:(512) 957-0001">(512) 957-0001</Link>
                                        </div>
                                        <div>
                                            <Link href="mailto:info@texascenterwellness.com">info@texascenterwellness.com</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-end apt-btn">
                                        <Link href="https://payment.texascenterwellness.com/">
                                            <button>
                                                MAKE AN APPOINTMENT
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-wrapper">
                <div className="container">
                    <div
                        className={`menu-Bar ${menuOpen ? "open" : ""}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <div className="logo">
                                <Link href="/">
                                    <Image src={logo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={`menu ${menuOpen ? "open" : ""}`}>
                                <ul>
                                    <li onClick={toggleMenu}><Link href="#how-it-works">HOW IT WORKS</Link></li>
                                    <li onClick={toggleMenu}><Link href="/meet-dr-calvo">MEET DR. R. DAVID CALVO</Link></li>

                                    <li onClick={toggleMenu}><Link href="#">SERVICES</Link></li>
                                    <div className="mob-li">
                                        <li onClick={toggleMenu}><Link href="/human-performance">HUMAN PERFORMANCE</Link></li>
                                        <li onClick={toggleMenu}><Link href="/sexual-optimization">SEXUAL OPTIMIZATION</Link></li>
                                        <li onClick={toggleMenu}><Link href="/peptide-therapy">PEPTIDE THERAPY</Link></li>
                                        <li onClick={toggleMenu}><Link href="/mental-health">MENTAL HEALTH</Link></li>
                                        <li onClick={toggleMenu}><Link href="/anti-aging">ANTI-AGING</Link></li>
                                        <li onClick={toggleMenu}><Link href="/repair-and-regenerate">REPAIR & REGENERATE</Link></li>
                                    </div>

                                    <li onClick={toggleMenu}><Link href="#">SUPPLEMENTS</Link></li>
                                    <div className="mob-li">
                                        <li onClick={toggleMenu}><Link href="/nutrional-frontiers">NUTRITIONAL FRONTIERS</Link></li>
                                        <li onClick={toggleMenu}><Link href="/fullscript">FULLSCRIPT</Link></li>
                                    </div>



                                </ul>
                                {/* {navbardata.map((data) => (
                                        <li
                                            key={data.id}
                                            onMouseEnter={() => data.dropdown && handleDropdown(data.id, true)}
                                            onMouseLeave={() => data.dropdown && handleDropdown(data.id, false)}
                                            className={isActive(data.link) ? 'active' : ''}
                                        >
                                            {data.link.startsWith("#") ? (
                                                <a href={data.link} onClick={(e) => {
                                                    e.preventDefault();
                                                    handleDropdownClick(data.link);
                                                }}>{data.title}</a>
                                            ) : (
                                                <Link href={data.link}>{data.title}</Link>
                                            )}
                                            {data.dropdown && (
                                                <span className="arrow">
                                                    <ExpandMoreIcon />
                                                </span>
                                            )}
                                            {data.dropdown && dropdownOpen === data.id && (
                                                <ul className="dropdown">
                                                    {data.dropdown.map((item, index) => (
                                                        <li key={index} className={isActive(item.link) ? 'active' : ''}>
                                                            <a
                                                                href={item.link}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    handleDropdownClick(item.link);
                                                                }}
                                                            >
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))} */}
                                <div className="mobile-view mt-4">
                                    <div className="accounts-wrap-cart">
                                        <div className="accounts-wrap">
                                            <Link href="https://payment.texascenterwellness.com/">
                                                <button className="login-btn">
                                                    <PersonOutlineOutlinedIcon />MAKE AN APPOINTMENT
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
