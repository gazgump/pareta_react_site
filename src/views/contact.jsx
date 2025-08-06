import React, {useRef, useState, useEffect} from "react";
import emailjs from "@emailjs/browser";
import FadeIn from '../shared/fadein';
import { useForm } from "react-hook-form";

const Contact = () => {

  const [data, setData] = useState([]);
  
  const url = 'https://pareta-strapi.fly.dev/api/contact';
    
      useEffect(() => {
  
      fetch(url)
      .then(response => response.json())
      .then(response => {
        setData(response.data);
      })
  
      .catch(error => {
          console.error('Error:', error);
      });
    });

  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // mode: "onChange",
    mode: "onBlur",
  });

  const handleEmail = (data) => console.log(data);

  const handleError = (errors) => console.error(errors);

  const validations = {
    name: {
      required: "name required.",
      minLength: {
        value: 2,
        message: "name should be at-least 2 characters.",
      },
    },
    email: {
      required: "Email is required.",
      pattern: {
        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        message: "Email is not valid.",
      },
    },
    message: {
      required: "message required.",
      minLength: {
        value: 5,
        message: "message must be at least 5 characters long.",
      },
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // if (name && emailAddress && emailMessage) {

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <meta name="title" content={`${data.metaTitle}`} />
      <meta name="description" content={`${data.metaDescription}`} />
      <title>{`${data.metaTitle}`}</title>
      <link rel="canonical" href="https://www.paretainnovations.com/technologies"/>
      <meta property="og:title" content={`${data.metaTitle}`} key="og:title" />
      <meta
        property="og:description"
        content={`${data.metaDescription}`}
        key="og:description"
      />
      <meta name="keywords" content={`${data.keywords}`} />
      <FadeIn delay={100} duration={1000}>
        <div className="relative bg-purple-500 opacity-75 w-full h-auto min-h-[80px] lg:h-[80px] flex items-center justify-center">
          <h1 className="z-2 text-white text-2xl font-bold italic text-center lg:text-4xl">{data.tagline}</h1>
        </div>

        <section className="xl:px-20 2xl:px-60">
            <div className="grid grid-cols-12 gap-0">
              <div className="col-span-12 lg:col-span-6 bg-white">
                <div className="2xl:container 2xl:mx-auto py-12 px-8">
                  
                    
                    <h3 className="text-black font-poppins font-bold text-xl lg:text-3xl mb-6">{data.contactTitle}</h3>
                    <p className='text-black text-xl lg:text-2xl mb-8'>{data.contactBlurb}</p>

                    <ul className="text-xl lg:text-2xl">
                      <div dangerouslySetInnerHTML={{__html: data.address }}></div>
                      <li className='text-black mb-2'>{data.phoneLabel1} {data.phoneNumber1}</li>
                      <li className='text-black mb-2'>{data.phoneLabel2} {data.phoneNumber2}</li>
                      <li className='text-black mb-2'>{data.email}</li>
                    </ul>

                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 bg-white">
                <div className="2xl:container 2xl:mx-auto py-12 px-8">

                    <h3 className="text-black font-poppins font-bold text-xl lg:text-3xl mb-6">Contact Form</h3>

                    <form
                      ref={form}
                      onSubmit={handleSubmit(handleEmail, handleError)}
                      id="contact-form-container"
                    >
                    <div className="flex flex-col">
                      <>
                        <label className="text-black text-lg lg:text-xl mr-4 mb-2">From</label>
                    
                        <input
                          name="name"
                          className="border border-gray-400 rounded text-black p-2 mb-2"
                          type="text"
                          placeholder="Your Name"
                          {...register("name", validations.name)}
                        />
                        <span className="help is-danger">
                          {errors?.name && errors.name.message}
                        </span>
                      </>
                      
                      <>
                        <label className="text-black text-lg lg:text-xl mr-4 mb-2">Email</label>
                            
                        <input
                          name="email"
                          className="border border-gray-400 rounded text-black p-2 mb-2"
                          type="email"
                          placeholder="Email"
                          {...register("email", validations.email)}
                        />
                        <span className="help is-danger">
                          {errors?.email && errors.email.message}
                        </span>
                      </>
                      
                      <>
                        <label className="text-black text-lg lg:text-xl mr-4 mb-2">Message</label>
        
                        <textarea
                          name="message"
                          className="border border-gray-400 rounded text-black p-2 mb-4"
                          placeholder="Enter message..."
                          {...register("message", validations.message)}
                        ></textarea>
                        <span className="help is-danger">
                          {errors?.message && errors.message.message}
                        </span>
                      </>     
                      

                      <button
                        onClick={sendEmail}
                        id="message-button"
                        className="bg-purple-500 opacity-75 rounded text-xl lg:text-2xl text-white py-3 cursor-pointer"
                        type="submit"
                      >
                        Send message
                      </button>

                    </div>
                      
                    </form>
                    
                </div>
              </div>
            </div>
          </section>

          <iframe src={data.mapLink} width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </FadeIn>
    </>
  )
};

export default Contact;