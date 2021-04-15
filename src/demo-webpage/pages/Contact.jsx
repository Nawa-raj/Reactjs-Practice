import React, { useState } from "react";

const Contact = () => {
  const [formData, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((olddata) => {
      return {
        ...olddata,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Welcome Mr/Mis "${formData.fullname}" 
      your Contact No. is "${formData.phone}"
      your email is "${formData.email}" 
      and your Message is "${formData.message}"
      Thank you for Submission`
    );
  };

  return (
    <>
      <section>
        <div className="container my-5">
          <div className="row home__page">
            <h1 className="text-center mb-4"> Contact Us </h1>
          </div>
          <div className="row g-3 g-lg-4">
            <div className="col-11 col-md-6 mx-auto">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label label_title"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={formData.fullname}
                    onChange={inputEvent}
                    placeholder="Enter Your Full Name"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label label_title"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={formData.phone}
                    onChange={inputEvent}
                    placeholder="Enter Your Phone Number"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label label_title"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={formData.email}
                    onChange={inputEvent}
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label label_title"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="message"
                    value={formData.message}
                    onChange={inputEvent}
                  />
                </div>
                <button className="primary__btn float-end" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
