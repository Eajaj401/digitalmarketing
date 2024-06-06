import React from "react";
const Footer = () => {
  return (
    <div>
       <footer className="footer p-10 text-base-content font-mono footer-info text-center bg-primary">
        <div className="md:pl-20 pl-4 mx-auto">
          <p className="text-2xl font-semibold text-secondary">Cretive Agency</p>
          <p className="text-xl text-white">Your New Smile Starts Here</p>
          <p className="text-xl text-white">For any Enquiry call</p>
          <p className="text-xl text-white">+91 9547128644</p>
          <p className="text-xl text-white">eajaj401@gmail.com</p>
        </div>
        <div className="mx-auto">
          <span className="footer-title text-2xl text-secondary font-semibold">
            Services
          </span>
          <p className="text-xl text-white">Branding</p>
          <p className="text-xl text-white">Design</p>
          <p className="text-xl text-white">Marketing</p>
          <p className="text-xl text-white">Advertisement</p>
        </div>
        <div className="mx-auto">
          <span className="footer-title text-2xl text-secondary font-semibold">
            Company
          </span>
          <p className="text-xl text-white">Address</p>
          <p className="text-xl text-white">Kalyani,Nadia,741234</p>
          <p className="text-xl text-white">Contact Us</p>
          <p className="text-xl text-white">+91 9547128644</p>
        </div>
        <div className="mx-auto">
          <span className="footer-title text-2xl text-secondary font-semibold">
            Legal
          </span>
          <p className="text-white text-xl">Terms of use</p>
          <p className="text-xl text-white">Privacy policy</p>
          <p className="text-xl text-white">Cookie policy</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
