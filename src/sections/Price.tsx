import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  'Physical examination',
  'Preliminary assessment',
  'Written recommendations',
  'Medical report',
  'Follow-up visit',
]

const Price = () => {
  const [isStandard, setIsStandard] = useState(true)

  return (
    <section id="rates" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-wide text-gray-900 uppercase">Rates</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-4xl font-display font-medium text-gray-900 tracking-tight sm:text-5xl"
          >
            Consultation fees
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Clear pricing for every service. We operate Saturday through Thursday, 1 PM to 9 PM.
          </motion.p>
        </div>

        {/* Pricing Toggle/Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <div className="flex items-center rounded-md border border-gray-200 bg-white p-1">
            <button
              onClick={() => setIsStandard(true)}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all ${isStandard ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Standard visit
            </button>
            <button
              onClick={() => setIsStandard(false)}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all ${!isStandard ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Review
            </button>
          </div>
        </motion.div>

        {/* Pricing Card */}
        <div className="mx-auto mt-8 max-w-sm ">
          <motion.div
            className="rounded-3xl border-2 border-gray-100 bg-white p-10 shadow-xl shadow-gray-200/40 hover:border-primary/20 transition-colors duration-300 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xs font-bold leading-7 text-gray-500 uppercase tracking-widest">
              {isStandard ? 'Initial consultation' : 'Follow-up consultation'}
            </h3>
            <p className="mt-4 text-4xl font-display font-medium text-gray-900 tracking-tight">
              {isStandard ? 'Complete medical history' : 'Review and Checkup'}
            </p>

            <ul role="list" className="mt-8 space-y-4 text-left mx-auto max-w-[220px]  ">
              {features.map((feature, idx) => (
                <motion.li
                  key={feature}
                  className="flex gap-x-3 items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                >
                  <CheckIcon className="h-5 w-5 flex-none text-gray-900" aria-hidden="true" />
                  <span className="text-sm leading-6 text-gray-600 font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10">
              <button className="block w-full rounded-xl bg-primary px-3 py-4 text-center text-sm font-bold text-white shadow-sm hover:bg-opacity-90 hover:scale-[1.02] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                {isStandard ? '300 EGP' : '150 EGP'}
              </button>
              <p className="mt-4 text-xs text-center text-gray-400 font-medium">No hidden fees</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Price
