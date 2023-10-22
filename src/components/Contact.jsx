import React, { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { EarthCanvas } from "./canvas"
import { slideIn } from "../utils/motion"


const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    //d1-kzc1oW8-x-IMAU
     //service_510zzy5
     //template_13f4kvs

    emailjs.send(
      'service_510zzy5', 
      'template_13f4kvs',
      {
        from_name: form.name,
        to_name: 'Talha',
        from_email: form.email,
        to_email: 'b421027@iiit-bh.ac.in',
        message: form.message,
      },
      'd1-kzc1oW8-x-IMAU'
      )
      .then(() => {
        setLoading(false)
        alert('Thank you for your message. I will get back to you soon!')
        setForm({
          name: "",
          email: "",
          message: "",
        })
      }, (error) => {
        setLoading(false)
        
        console.log(error)
        alert('Oops! Something went wrong. Please try again.')
      })
        
  } 
       

      
  


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
       <motion.div
         variants={slideIn('left', "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl shadow-xl">
          <p className={styles.sectionSubText}>Get in Touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 mt-12">
              <label className="flex flex-col">
                <span className="text-sm font-medium">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Whats your name?"
                  className="bg-tertiary border-none outlined-none rounded-lg py-4 px-6 text-white mt-2 placeholder:text-secondary font-medium"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Whats your email?"
                  className="bg-tertiary border-none outlined-none rounded-lg py-4 px-6 text-white mt-2 placeholder:text-secondary font-medium"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium">Your Message</span>
                <textarea rows="7"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="bg-tertiary border-none outlined-none rounded-lg py-4 px-6 text-white mt-2 placeholder:text-secondary font-medium"
                />
              </label>

              <button 
                  type='submit'
                  className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>
                   {loading ? "Sending..." : "Send" }
              </button>
          </form>
        </motion.div>

        <motion.div
           variants={slideIn('right', "tween", 0.2, 1)}
           className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas />
        </motion.div>
      
    </div>
  )
}

export default SectionWrapper(Contact, "contact")