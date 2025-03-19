"use client"
import Image from "next/image";
import React, { useEffect } from "react";

const SearchProfile = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://ehr.charmtracker.com/js/dirservice_init.js";
    script1.defer = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      var DirectoryServiceConf = {
        "domain_url":"https://ehr.charmtracker.com",
        "static_url" : "https://static.charmtracker.com",
        "dir_service_key" : '314',
        custom_url_pattern:'_profile',
        licensed_state_based_search: 'true',
        hide_hospital_link :'true',
        restrict_followup_patient_to_book_other_provider: true
      };
    `;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div style={{ zoom: '0.9', margin: '0', padding: '0' }}>
      <section>
        <Image
          onClick={() => window.open('https://www.texascenterwellness.com/', '_blank')}
          src="https://cdn.prod.website-files.com/64eec1c208f9896ce4c7a677/64eec1c208f9896ce4c7a6ca_texas-p-500.png"
          style={{ width: '180px', padding: '10px', cursor: 'pointer', mixBlendMode: 'multiply' }}
          alt="Texas Center Wellness"
        />
      </section>
      <section className="wbem-search-banner cmfw">
        <div className="wbem-search-cm-wd" id="searchbar"></div>
      </section>
      <section className="cmfw search-content" >
        {/* align="center" */}
        <div className="cm-wd" id="searchresult"></div>
      </section>
      <style>{`
        .next-btn,.verify-btn,.pay-bill,.confirm,.next,.make-payment,.join-meeting,can-toggle label .can-toggle__switch:a, .telhalth-spinner > div,side-border,.content-details1 .checkboxdiv input:checked ~ .checkdiv{
          background-color: #232e30 !important;
        }
        .wbem_search_bg{
          background-color: #ff7f4d !important;
        }
        .hospital-banner, .wbem-search-banner {
          background-color: #232e30 !important;
        }
         
      `}</style>
    </div>
  );
};

export default SearchProfile;
