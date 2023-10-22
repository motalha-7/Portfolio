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

  const handleChange = (e) => {}

  const handleSubmit = (e) => {}


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