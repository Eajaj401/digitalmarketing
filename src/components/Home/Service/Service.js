import React from "react";
import Grapic from "../../../images/icons/service1.png";
import Web from "../../../images/icons/service2.png";
import Dev from "../../../images/icons/service3.png";
import BrandPromotion from "../../../images/icons/service4.png"; // Adjust the path as necessary
import SEO from "../../../images/icons/service5.png"; 
import SocialMedia from "../../../images/icons/service6.png"; // Adjust the path as necessary

const Service = () => {
  return (
    <div className="mt-36 font-mono">
      <h1 className="text-center text-primary text-4xl font-semibold">
        We Provide awesome <span className="text-green-600">services</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-36 px-20 mx-auto">
        <div className="card w-11/12 md:md-0 md-8md:mt-0 mt-4">
          <figure>
            <img className="w-32" src={Grapic} alt="Web & Mobile design" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-xl font-semibold">
              Web design
            </h2>
            <p className="text-center text-base">
              We craft stunning and amazing web UI, using a well drafted UX to fit your product.</p>
          </div>
        </div>

        <div className="card w-11/12 md:md-0 md-8md:mt-0 mt-4">
          <figure>
            <img className="w-32" src={Web} alt="Web & Mobile design" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-xl font-semibold">
              Mobile application development
            </h2>
            <p className="text-center text-base">
            Expand your digital presence with custom mobile apps. Our mobile app development services cover iOS and Android platforms.</p>
          </div>
        </div>




        <div className="card w-11/12 md:md-0 md-8md:mt-0 mt-4">
          <figure>
            <img className="w-32" src={Dev} alt="Web & Mobile design" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-xl font-semibold">
              SEO
            </h2>
            <p className="text-center text-base">
            Enhance your website’s visibility on search engines like Google and Bing.</p>
          </div>
        </div>



        <div className="card w-11/12 md:md-0 md-8md:mt-0 mt-4">
          <figure>
            <img className="w-32" src={BrandPromotion} alt="Web & Mobile design" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-xl font-semibold">
              Content marketing
            </h2>
            <p className="text-center text-base">
            Build trust and authority with compelling content. Our team crafts high-quality blog posts, articles, infographics and videos.</p>
          </div>
        </div>




        <div className="card w-11/12 md:md-0 md-8md:mt-0 mt-4">
          <figure>
            <img className="w-32" src={SEO} alt="Web & Mobile design" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-xl font-semibold">
            Social Media Marketing
            </h2>
            <p className="text-center text-base">
            Engage and grow your audience on social media platforms like Facebook, Instagram, Twitter, LinkedIn, and more.</p>
          </div>
        </div>




        <div className="card w-11/12 md:md-0 md-8md:mt-0 mt-4">
          <figure>
            <img className="w-32" src={SocialMedia} alt="Web & Mobile design" />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-xl font-semibold">
            Brand Promotion
            </h2>
            <p className="text-center text-base">
            Elevate your brand with strategic promotion. Our brand promotion services include market research.</p>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Service;