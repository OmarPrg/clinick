import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../components/Logo'

const navigation = [
  { name: 'Services', href: '#services', current: false },
  { name: 'Doctors', href: '#doctors', current: false },
  { name: 'Rates', href: '#rates', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex shrink-0 items-center cursor-pointer"
          >
            <Logo className="h-10" />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden sm:flex flex-1 justify-center space-x-8 items-center">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className={classNames(
                  item.current ? 'text-gray-900' : 'text-gray-600 hover:text-primary',
                  'text-sm font-medium transition-colors relative group py-2'
                )}
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </motion.a>
            ))}

          </div>

          {/* Right Button */}
          <div className="hidden sm:flex items-center">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}

              whileTap={{ scale: 0.95 }}
              type="button"
              className="rounded-md bg-primary px-6 py-2.5 text-sm font-bold text-white cursor-pointer  "
            >
              Book
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon aria-hidden="true" className="block size-6" />
              ) : (
                <Bars3Icon aria-hidden="true" className="block size-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden overflow-hidden bg-white border-b border-gray-100 shadow-lg"
          >
            <div className="space-y-1 px-4 pb-4 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-50 text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-primary',
                    'block rounded-md px-3 py-2 text-base font-medium transition-colors'
                  )}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
              >
                More
              </a>
              <div className="mt-4 pb-2">
                <button className="w-full rounded-md bg-primary px-3 py-2 text-base font-medium text-white hover:bg-opacity-90 transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
