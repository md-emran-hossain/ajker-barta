import React, { useState, useEffect } from 'react';

const Customform = ({ status, message, onValidated }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
  useEffect(() => {
    if(status === "success") clearFields();
  }, [status])

  const clearFields = () => {
    setName('');
    setEmail('');
  }
    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        name &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: name,
           
        });
       
    }
    return (
        <form
            onSubmit={e => handleSubmit(e)}
           
          >
              
              {status === "sending" && (
          <div className="mc__alert mc__alert--sending">
            sending...
          </div>
        )}
        {status === "error" && (
          <div 
            className="mc__alert mc__alert--error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="mc__alert mc__alert--success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        
            <input
              onBlur={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
            />
            <input
              onBlur={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <button
              className="py-2.5 px-6 text-lg bg-red-500 text-white rounded-md w-full mt-2"
              type="submit"
            >
              Subscribe
            </button>
          </form>
    );
};

export default Customform;