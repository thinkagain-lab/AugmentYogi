import React from "react";

function ContactForm() {
  return (
    <section className="relative z-10 bg-customColor-dark-blue" id="contactform">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-8 lg:space-y-12 lg:py-24 lg:px-6">
        <div className="text-center px-6">
          <h2 className="text-xl md:text-3xl text-center my-4 font-extrabold tracking-tight text-white">
            Get In Touch
          </h2>
          <p className="text-sm text-gray-400 mt-3">
          Fill out your details and get your customised filter ready to rock and roll
          </p>
        </div>
        <div className="relative z-10 bg-customColor-dark-blue gap-4 p-2 rounded-lg">
          <div className="p-6 rounded-xl">
            <form>



              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  />
                
                </div>

                <div className="relative flex items-center">
                  <input
                    type="number"
                    placeholder="Phone No."
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  />
                 
                </div>

                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Email"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  />
                 
                </div>

                <div className="relative flex items-center ">
             

                  <select
                    id="filterselect"
                    name="entry.404389279"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                    required
                  >
                    <option selected className="bg-gray-900 text-white">
                      Choose a Filter
                    </option>
                    <option value="Face Filter" className="bg-gray-900 text-white">
                    Face Filter
                    </option>
                    <option  value="Randomisers filter" className="bg-gray-900 text-white">
                    Randomisers filter
                    </option>
                    <option value="World Effect Filter" className="bg-gray-900 text-white">
                    World Effect Filter
                    </option>
                    <option value="Trackers Filter" className="bg-gray-900 text-white">
                    Trackers Filter
                    </option>
                    <option  value="Mini-Games / Quizzes Filters" className="bg-gray-900 text-white">
                    Mini-Games / Quizzes Filters
                    </option>
                    <option value="Portal Filter" className="bg-gray-900 text-white">
                    Portal Filter
                    </option>
                  </select>
                </div>

                <div className="relative flex items-center md:col-span-2">
                  <textarea
                    placeholder="Write Message"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  ></textarea>
                 
                </div>

              </div>



              <div class="flex justify-center mt-5">
                <button className="mt-5 flex items-center relative p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-customColor-brand-blue to-customColor-brand-magenta group-hover:from-customColor-brand-blue group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-800">
                  <span className="relative text-base px-20 py-4 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Send Message
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
