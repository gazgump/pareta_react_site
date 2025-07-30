import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import FadeIn from '../shared/fadein';
import { useForm } from "react-hook-form";

const Contact = () => {

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
    <FadeIn delay={100} duration={1000}>
     <div className="relative bg-cyan-900 opacity-75 w-full h-[60px] flex items-center justify-center">
          <h1 className="z-2 text-white text-lg text-center lg:text-xl">Contact Us</h1>
      </div>

      <section className="xl:px-20 2xl:px-60">
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-12 lg:col-span-6 bg-white">
              <div className="2xl:container 2xl:mx-auto py-12 px-8">
                
                  
                  <h3 className="text-black font-poppins font-bold text-xl lg:text-2xl mb-6">Innovating Tomorrow's World, Today</h3>
                  <p className='text-black mb-8'>We are powering the transition to electrification with our disruptive, environmentally friendly technologies for electric vehicles and energy storage</p>

                  <ul>
                    <li className='text-black mb-2'>HQ: Caerphilly, Wales</li>
                    <li className='text-black mb-2'>Partnerships/Business Inquiries - XXXXX XXXXXX</li>
                    <li className='text-black mb-2'>Talent/Student Collaboration - XXXXX XXXXXX</li>
                  </ul>

              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 bg-white">
              <div className="2xl:container 2xl:mx-auto py-12 px-8">

                  <h3 className="text-black font-poppins font-bold text-xl lg:text-2xl mb-6">Contact Form</h3>

                  <form
                    ref={form}
                    onSubmit={handleSubmit(handleEmail, handleError)}
                    id="contact-form-container"
                  >
                   <div className="flex flex-col">
                    <>
                      <label className="text-black text-sm mr-4 mb-2">From</label>
                  
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
                      <label className="text-black text-sm mr-4 mb-2">Email</label>
                          
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
                      <label className="text-black text-sm mr-4 mb-2">Message</label>
      
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
                      className="bg-cyan-900 opacity-75 rounded text-white py-3 cursor-pointer"
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

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.912355396568!2d-3.2265611233750766!3d51.588169671831764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e19237e630da9%3A0x610a9f4b05916bf9!2sLeading%20Technology%20Developments!5e0!3m2!1sen!2suk!4v1753874003238!5m2!1sen!2suk" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </FadeIn>
  )
};

export default Contact;