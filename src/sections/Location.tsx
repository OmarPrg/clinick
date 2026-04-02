import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

const locations = [
  {
    title: 'Minya clinic',
    content: '42 Nile Street, Minya, Egypt',
    link: 'Find us',
    active: true,
  },
  {
    title: 'Hours',
    content: 'Saturday through Thursday, 1 PM to 9 PM',
    link: 'Find us',
    active: false,
  },
  {
    title: 'Minya',
    content: '42 Nile Street, Minya, Egypt 61111',
    link: 'Find us',
    active: false,
  },
]

const Location = () => {
  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-bold tracking-wide text-gray-900 uppercase">Visit</h2>
              <p className="mt-2 text-4xl font-display font-medium text-gray-900 tracking-tight sm:text-5xl">
                Locations
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Find us in the heart of Minya with easy access and ample parking for families.
              </p>
            </motion.div>

            <div className="mt-12 space-y-10">
              {locations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className={`pl-6 border-l-2 transition-all duration-300 ${item.active ? 'border-primary' : 'border-transparent hover:border-gray-200'
                    }`}
                >
                  <h3 className="text-xl font-display font-medium text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-base text-gray-600">{item.content}</p>
                  <div className="mt-3 flex items-center gap-2 text-sm font-bold text-gray-900 cursor-pointer hover:text-primary transition-colors">
                    {item.link}
                    {item.title !== 'Hours' && <ArrowUpRightIcon className="h-4 w-4" />}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full min-h-[400px] lg:min-h-[600px] w-full bg-gray-100 rounded-3xl overflow-hidden shadow-lg relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.818392765324!2d30.75058777615965!3d28.09700070992768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145b2501a35111bd%3A0x7aa3e2c3666b8d9!2sMinya%2C%20Qism%20Minya%2C%20El%20Minya%2C%20Menia%20Governorate%2061111!5e0!3m2!1sen!2seg!4v1706600000000!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.1)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Location
