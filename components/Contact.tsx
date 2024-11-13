"use client";
import { motion } from "framer-motion";
export const Contact = () => {
  return (
    <section
      id="contact"
      className="overflow-x-clip py-32 text-white max-w-[1200px] mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className=" gap-16"
      >
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-7xl font-bold text-gray-300"
          >
            Get in <span className="text-purple-500">touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl space-y-8"
          >
            <div className="flex gap-2 text-center">
              <p className="text-2xl text-purple-300">Phone</p>
              <a
                href="tel:+999999999"
                className="text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
              >
                +99 (0) 99 999 999
                <span className="text-purple-500">↗</span>
              </a>
            </div>

            <div className="flex gap-2 text-center">
              <p className="text-2xl text-purple-300">Email</p>
              <a
                href="mailto:john.doe.com"
                className="text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
              >
                john.doe.com
                <span className="text-purple-500">↗</span>
              </a>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl text-purple-300">
                Office
                <span className="text-white font-semibold">
                  {" Street 150, 1017EK. Amsterdam. The Netherlands."}
                </span>
              </p>
              <address className="text-2xl not-italic leading-relaxed">
                <span className="text-purple-500">↗</span>
              </address>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
              >
                <iframe
                  width="100%"
                  height="500"
                  loading="lazy"
                  allowFullScreen
                  style={{ border: 0 }}
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=keizersgracht%20520+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps systems</a>
                </iframe>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
