import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import images from '../assets/images/images'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const doctors = [
  {
    name: 'Dr. Amira Hassan',
    role: 'Pediatric specialist',
    bio: 'PhD from Cairo University, fellowship training at Johns Hopkins Medical Center.',
    image: images.doctor1,
  },
  {
    name: 'Dr. Karim Mansour',
    role: 'General pediatrics',
    bio: 'Doctorate degree from Alexandria University, clinical experience across Middle Eastern hospitals.',
    image: images.doctor2,
  },
  {
    name: 'Dr. Layla Nour',
    role: 'Diagnostic medicine',
    bio: 'MD from Ain Shams University, specialized training in pediatric radiology and laboratory medicine.',
    image: images.femailDoc1,
  },
  {
    name: 'Dr. Sameh Ali',
    role: 'Pediatric Cardiology',
    bio: 'Renowned specialist with over 15 years of experience in treating congenital heart defects.',
    image: images.doctor3,
  },
  {
    name: 'Dr. Hoda Youssef',
    role: 'Pediatric Neurology',
    bio: 'Expert in childhood neurological disorders, committed to providing compassionate care.',
    image: images.doctor4,
  },
]

const OurTeam = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = current.clientWidth / (window.innerWidth < 768 ? 1.2 : 3.2) // Adjust scroll amount based on visible cards
      const newScrollLeft = direction === 'left'
        ? current.scrollLeft - scrollAmount
        : current.scrollLeft + scrollAmount

      current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  // Update active dot on scroll
  const onScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft
      // This is a rough approximation for dots, refined based on actual item visibility usually
      // For simple dots matching carousel position:
      const containerWidth = scrollRef.current.clientWidth
      const totalScroll = scrollRef.current.scrollWidth - containerWidth
      const progress = scrollLeft / totalScroll
      const index = Math.min(Math.round(progress * (doctors.length - 1)), doctors.length - 1)
      setActiveIndex(index)
    }
  }


  return (
    <section id="doctors" className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-wide text-gray-900 uppercase"
          >
            Physicians
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-4xl font-display font-medium text-gray-900 tracking-tight sm:text-5xl"
          >
            Our team
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 max-w-xl"
          >
            Each physician brings international training and board certification to every patient encounter.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-16">
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 hide-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[85%] sm:min-w-[45%] lg:min-w-[30%] snap-start flex flex-col"
              >
                <div className="aspect-[4/4] w-full overflow-hidden rounded-lg bg-gray-100 mb-6">
                  <img src={doctor.image} alt={doctor.name} className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{doctor.name}</h4>
                <p className="text-sm font-medium text-gray-500 mt-1">{doctor.role}</p>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{doctor.bio}</p>

                <div className="flex items-center gap-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.338 16.338H13.6v-4.144c0-.992-.019-2.278-1.387-2.278-1.39 0-1.601 1.086-1.601 2.207v4.215H7.858V8.15h2.654v1.193h.038c.369-.691 1.266-1.42 2.618-1.42 2.8 0 3.318 1.815 3.318 4.175v4.24zM5.005 6.975a1.593 1.593 0 1 1 0-3.186 1.593 1.593 0 0 1 0 3.186zm-1.369 9.363h2.74v-8.19h-2.74v8.19zM18.84 0H1.16C.52 0 0 .524 0 1.166v17.668C0 19.476.52 20 1.16 20h17.68c.64 0 1.16-.524 1.16-1.166V1.166C20 .524 19.48 0 18.84 0z" /></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                    <span className="sr-only">X</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.87856L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7919L13.1334 18H17.7954L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" /></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                    <span className="sr-only">Website</span>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S12 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S7.5 3 7.5 3m4.5-18a9.004 9.004 0 018.716 6.747M12 3a9.004 9.004 0 00-8.716 6.747M20.716 9.747a16.38 16.38 0 01-1.364 4.5M3.284 9.747a16.38 16.38 0 001.364 4.5" /></svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 border-t border-gray-100 pt-8 flex-wrap gap-4">
            {/* Dots */}
            <div className="flex gap-2">
              {doctors.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (scrollRef.current) {
                      const itemWidth = scrollRef.current.scrollWidth / doctors.length
                      scrollRef.current.scrollTo({ left: itemWidth * i, behavior: 'smooth' })
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeDotIndex(i, activeIndex) ? 'bg-gray-800 w-4' : 'bg-gray-300 hover:bg-gray-400'}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => scroll('left')}
                className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors text-gray-600 hover:text-gray-900"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors text-gray-600 hover:text-gray-900"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-dotted border-primary/30">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-display font-medium text-gray-900">Credentials matter</h3>
            <p className="mt-4 text-lg text-gray-600">
              Each physician holds advanced degrees from Egypt's finest universities.
            </p>
            <div className="mt-8">
              <button className="rounded-md border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors">
                View availability
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

function activeDotIndex(current: number, active: number) {
  // Simple logic: we'll just check if it's close enough.
  // For a real carousel, this logic gets complex with variable widths. 
  // We'll trust the calculated activeIndex.
  return current === active
}

export default OurTeam
