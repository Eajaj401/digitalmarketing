import React from "react";
import CEO from '../../images/ceo.png';  // Adjust the path as necessary
import ContentWriter from '../../images/hossni.png';  // Adjust the path as necessary
import CustomerSupport from '../../images/mars.png';  // Adjust the path as necessary

const OurTeam = () => {
  return (
    <div className="mt-32 font-mono">
      <h1 className="text-center text-4xl text-primary font-bold">
        Our <span className="text-green-600">Team</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 px-20 mx-auto justify-center">
        <div className="card w-full bg-base-100 shadow-xl mx-auto">
          <div className="card-body font-sans"> {/* Changed font style here */}
            <p className="text-justify">
              Eajaj Ahamed, from West Bengal, specialization in web and app development and digital marketing.
            </p>
            <div className="card-actions justify-between mt-5 items-center">
              <img
                className="rounded-full w-28 ring ring-secondary ring-offset-base-100 ring-offset-2"
                src={CEO}
                alt="Eajaj Ahamed"
              />
              <div className="ml-4"> {/* Added margin-left for spacing */}
                <h2 className="text-lg font-bold">Eajaj Ahamed</h2> {/* Improved font styling */}
                <p className="text-sm font-medium">CEO, Creative Agency</p> {/* Improved font styling */}
              </div>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl mx-auto">
          <div className="card-body font-sans"> {/* Changed font style here */}
            <p className="text-justify">
              Hossni Mubarok, from West Bengal, specialization in content writing.
            </p>
            <div className="card-actions justify-between mt-5 items-center">
              <img
                className="rounded-full w-28 ring ring-secondary ring-offset-base-100 ring-offset-2"
                src={ContentWriter}
                alt="Hossni Mubarok"
              />
              <div className="ml-4"> {/* Added margin-left for spacing */}
                <h2 className="text-lg font-bold">Hossni Mubarok</h2> {/* Improved font styling */}
                <p className="text-sm font-medium">Marketing Head</p> {/* Improved font styling */}
              </div>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl mx-auto">
          <div className="card-body font-sans"> {/* Changed font style here */}
            <p className="text-justify">
              Manjit Kumar, from West Bengal, specialization in customer support.
            </p>
            <div className="card-actions justify-between mt-5 items-center">
              <img
                className="rounded-full w-28 ring ring-secondary ring-offset-base-100 ring-offset-2"
                src={CustomerSupport}
                alt="Manjit Kumar"
              />
              <div className="ml-4"> {/* Added margin-left for spacing */}
                <h2 className="text-lg font-bold">Manjit Kumar</h2> {/* Improved font styling */}
                <p className="text-sm font-medium">Marketing advisor</p> {/* Improved font styling */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

