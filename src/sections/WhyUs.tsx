import { motion } from 'framer-motion'
import images from '../assets/images/images'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Advanced diagnostic devices',
    description: 'Real-time imaging and laboratory analysis for accurate diagnosis on the first visit.',
    image: images.smartDevice,
  },
  {
    title: 'Round-the-clock availability',
    description: 'Reach our physicians any hour of the day or night when your child needs care.',
    image: images.statistics,
  },
  {
    title: 'Doctorate-level training',
    description: 'Board-certified specialists educated at the world\'s leading medical institutions.',
    image: images.doctor2,
  },
]

const WhyUs = () => {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-wide text-gray-900 uppercase">Capabilities</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="mt-4 text-4xl font-display font-medium text-gray-900 tracking-tight sm:text-5xl">
              What sets us apart in pediatric medicine
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We employ the latest diagnostic technology alongside decades of clinical experience.
              Every child receives the same precision care that teaching hospitals provide.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <div className="mb-8 w-full overflow-hidden rounded-2xl bg-gray-100 aspect-[4/2.5]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <dt className="text-2xl font-display font-medium leading-7 text-gray-900">
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto max-w-xs mx-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* Footer Actions */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="w-full sm:w-auto rounded-md border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
            Learn more
          </button>
          <button className="flex items-center text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors gap-1 group">
            Arrow <ArrowLongRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  )
}

export default WhyUs
