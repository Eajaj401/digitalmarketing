import React from "react";
import person from '../../../images/clint1.png';
import person1 from '../../../images/clint2.png';
import person2 from '../../../images/clint3.png';

const Reviews = () => {
  return (
    <div className="mt-32 font-sans"> {/* Changed font-mono to font-sans */}
      <h1 className="text-center text-4xl text-primary font-bold">
        Clients <span className="text-green-600">Feedback</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 px-20 lg:grid-cols-3 gap-5 mt-20">
        <div className="card w-11/12 bg-base-100 shadow-xl"> {/* Changed class to className */}
          <div className="card-body"> {/* Changed class to className */}
            <p className="text-justify">We are extremely impressed with the digital marketing services provided. The team's innovative strategies and insightful analytics have significantly boosted our online presence and customer engagement. Their dedication and expertise have made a remarkable difference to our business.</p>
            <div className="card-actions justify-between mt-5 items-center"> {/* Changed class to className */}
              <img
                className="rounded-full w-28 ring ring-secondary ring-offset-base-100 ring-offset-2"
                src={person}
                alt="Pritam Saha"
              />
              <div>
                <h2 className="card-title"> {/* Changed class to className */}
                  Pritam Saha
                </h2>
                <p>CEO, Flymarket</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-11/12 bg-base-100 shadow-xl"> {/* Changed class to className */}
          <div className="card-body"> {/* Changed class to className */}
            <p className="text-justify">The professional and proactive support from this digital marketing team has exceeded our expectations. Their creative solutions and data-driven campaigns have helped us reach a broader audience and enhance our brand visibility. We highly recommend their services to anyone looking to grow their online footprint.</p>
            <div className="card-actions justify-between mt-5 items-center"> {/* Changed class to className */}
              <img
                className="rounded-full w-28 ring ring-secondary ring-offset-base-100 ring-offset-2"
                src={person1}
                alt="Sahi Miraj"
              />
              <div>
                <h2 className="card-title"> {/* Changed class to className */}
                  Sahi Miraj
                </h2>
                <p>CEO, Edutech</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-11/12 bg-base-100 shadow-xl"> {/* Changed class to className */}
          <div className="card-body"> {/* Changed class to className */}
            <p className="text-justify">The comprehensive digital marketing approach offered by this team has been a game changer for us. Their ability to understand our needs and tailor strategies accordingly has led to a noticeable increase in our website traffic and lead generation. We couldn't be happier with the results.</p>
            <div className="card-actions justify-between mt-5 items-center"> {/* Changed class to className */}
              <img
                className="rounded-full w-28 ring ring-secondary ring-offset-base-100 ring-offset-2"
                src={person2}
                alt="Rupam Barman"
              />
              <div>
                <h2 className="card-title"> {/* Changed class to className */}
                  Rupam Barman
                </h2>
                <p>CEO, bookonline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
