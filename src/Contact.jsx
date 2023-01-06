import React, { useState } from "react";

const Contact = () => {

const [name,setName]=useState(" ")
const [email,setEmail]=useState(" ")
const [number,setNumber]=useState(" ")
const [message,setMessage]=useState("")
const [allEntry,setAllEntry]=useState([])

const formSubmit=(e)=>{
  e.preventDefault();
  const newEntry={name:name,email:email,number:number,message,message}
  setAllEntry([...allEntry,newEntry]);
  name==" "?alert(`all filed are required`):alert(`${name} your from is successfully completed`);
  
  setName(" ")
  setEmail(" ")
  setNumber(" ")
  setMessage(" ")
  
  }
  
  
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action="" onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="emailAddress" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailAddress"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="name@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phoneNumber"
                  name="number"
                  value={number}
                  onChange={(e)=>setNumber(e.target.value)}
                  placeholder="mobile number"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="messageText" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="messageText"
                  row="3"
                  name="message"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit from
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
