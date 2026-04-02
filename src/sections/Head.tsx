import { motion } from 'framer-motion'

const Head = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[600px]">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 lg:py-24 pr-0 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-display font-medium text-gray-900 leading-[1.1] tracking-tight">
                Modern pediatric care meets <span className="block">advanced</span> technology
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-lg text-gray-600 max-w-lg leading-relaxed"
            >
              Minya Digital Clinic combines doctorate-level expertise with cutting-edge diagnostic equipment to deliver the highest standard of pediatric medicine. Our physicians are board-certified specialists trained at prestigious international institutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-md text-base font-medium transition-all duration-300"
              >
                Book
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white border text-gray-700 border-gray-200 px-6 py-3 rounded-md text-base font-medium hover:bg-gray-50 transition-all duration-300"
              >
                WhatsApp
              </motion.button>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] flex items-center justify-center lg:justify-end py-12 lg:py-0">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-50 rounded-full blur-3xl -z-10"></div>

            <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="h-full w-full"
              >
                <img
                  src="/image.png"
                  alt="Modern Clinic Facility"
                  className="w-full h-full object-cover object-center"
                />
                {/* Gradient overlay for better text readability and premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </motion.div>

              {/* Decorative floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Modern Facility</p>
                    <p className="text-sm text-gray-600">Designed for your comfort</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Head
