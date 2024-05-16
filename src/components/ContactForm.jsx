import React, { useContext, useEffect, useState } from "react";
import { data } from "./FilterCard";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const filter= useContext(data);
  useEffect(()=>
  {
    console.log("Filter debug:", filter)
  },[filter])
  
  const notify = () => toast("We Shall Contact you Soon");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    filterSelect: "",
    specifications: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Before send Formdata Debug:",formData);
    try
    {
      const response = await axios.post('https://sheet.best/api/sheets/4f7bae80-7c3e-45c0-bb54-6624b70c4034',formData)
      await notify()
      console.log("Response Debug:",response)
      setFormData({
        name: "",
        phone: "",
        email: "",
        filterSelect: "",
        specifications: "",
      });
    }
    catch(err)
    {
        console.log('Error:',err)
    }   
  };

  return (
    <>
    <ToastContainer position="top-center"/>
    <section
      className="relative z-10 bg-customColor-dark-blue"
      id="contactform"
    >
       
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-8 lg:space-y-12 lg:py-24 lg:px-6">
        <div className="text-center px-6">
          <h2 className="text-xl md:text-3xl text-center my-4 font-extrabold tracking-tight text-white">
            Let us Talk about your Filter {filter}
          </h2>
          <p className="text-sm text-gray-400 mt-3">
            Fill out your details and get your customized filter ready to rock
            and roll
          </p>
        </div>
        <div className="relative z-10 bg-customColor-dark-blue gap-4 p-2 rounded-lg">
          <div className="p-6 rounded-xl">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone No"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="relative flex items-center ">
                  <select
                    id="filterSelect"
                    name="filterSelect"
                    value={formData.filterSelect}
                    onChange={handleChange}
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                    required
                  >
                    <option
                      // disabled
                      selected
                      className="bg-gray-900 text-white"
                    >
                      Choose a Filter
                    </option>
                    <option
                      value="Face Filter"
                      className="bg-gray-900 text-white"
                    >
                      Face Filter
                    </option>
                    <option
                      value="Randomizers filter"
                      className="bg-gray-900 text-white"
                    >
                      Randomizers filter
                    </option>
                    <option
                      value="World Effect Filter"
                      className="bg-gray-900 text-white"
                    >
                      World Effect Filter
                    </option>
                    <option
                      value="Trackers Filter"
                      className="bg-gray-900 text-white"
                    >
                      Trackers Filter
                    </option>
                    <option
                      value="Mini-Games / Quizzes Filters"
                      className="bg-gray-900 text-white"
                    >
                      Mini-Games / Quizzes Filters
                    </option>
                    <option
                      value="Portal Filter"
                      className="bg-gray-900 text-white"
                    >
                      Portal Filter
                    </option>
                  </select>
                </div>
                <div className="relative flex items-center md:col-span-2">
                  <textarea
                    name="specifications"
                    value={formData.specifications}
                    onChange={handleChange}
                    placeholder="Any specifications you want?"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="mt-5 flex items-center relative p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-customColor-brand-blue to-customColor-brand-magenta group-hover:from-customColor-brand-blue group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-800"
                >
                  <span className="relative text-sm md:text-base px-10 md:px-20 py-4 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Send Your Message
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default ContactForm;
