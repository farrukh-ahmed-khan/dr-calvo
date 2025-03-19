"use client";
import Image from "next/image";
import { useEffect } from "react";


declare global {
    interface Window {
        DirectoryServiceConf?: {
            domain_url: string;
            static_url: string;
            dir_service_key: string;
            custom_url_pattern: string;
            licensed_state_based_search: string;
            hide_hospital_link: string;
            restrict_followup_patient_to_book_other_provider: boolean;
        };
    }
}

const DoctorProfile = () => {

    useEffect(() => {
        // Set the DirectoryServiceConf configuration
        if (typeof window === "undefined") return;
        window.DirectoryServiceConf = {
            domain_url: "https://ehr.charmtracker.com",
            static_url: "https://static.charmtracker.com",
            dir_service_key: '314',
            custom_url_pattern: '_profile',
            licensed_state_based_search: 'true',
            hide_hospital_link: 'true',
            restrict_followup_patient_to_book_other_provider: true
        };

        // Load the external script
        const script = document.createElement('script');
        script.src = "https://ehr.charmtracker.com/js/dirservice_init.js";
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div style={{ zoom: 0.9, margin: 0, padding: 0 }}>
            <section>
                <Image
                    onClick={() => window.open('https://www.texascenterwellness.com/', '_blank')}
                    src="https://cdn.prod.website-files.com/64eec1c208f9896ce4c7a677/64eec1c208f9896ce4c7a6ca_texas-p-500.png"
                    style={{ width: '180px', padding: '10px', cursor: 'pointer', mixBlendMode: 'multiply' }}
                    alt="Texas Center Wellness"
                />
            </section>
            <section className="cmfw" id="providerDetails"></section>
        </div>
    );
};

export default DoctorProfile;
