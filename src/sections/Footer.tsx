import { motion } from 'framer-motion'
import images from '../assets/images/images'

const navigation = [
  { name: 'Book now', href: '#' },
  { name: 'Our team', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Contact us', href: '#' },
  { name: 'Hours', href: '#' },
]

const legal = [
  { name: 'Privacy policy', href: '#' },
  { name: 'Terms of service', href: '#' },
  { name: 'Cookie settings', href: '#' },
]

const socails = [
  { name: 'Facebook', icon: (props: any) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg> },
  { name: 'Instagram', icon: (props: any) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.488 2h-.173zM12.315 3.818h-.158c-2.396 0-2.704.01-3.642.053-.94.044-1.45.205-1.796.34a3.09 3.09 0 00-1.133.738 3.09 3.09 0 00-.738 1.133c-.135.346-.296.856-.34 1.796-.043.938-.053 1.246-.053 3.642v.158c0 2.396.01 2.704.053 3.642.044.94.205 1.45.34 1.796.246.626.547 1.096 1.133 1.682a3.094 3.094 0 001.682 1.133c.346.135.856.296 1.796.34.938.043 1.246.053 3.642.053h.158c2.396 0 2.704-.01 3.642-.053.94-.044 1.45-.205 1.796-.34a3.09 3.09 0 001.133-.738 3.09 3.09 0 00.738-1.133c.135-.346.296-.856.34-1.796.043-.938.053-1.246.053-3.642v-.158c0-2.396-.01-2.704-.053-3.642-.044-.94-.205-1.45-.34-1.796-.246-.626-.547-1.096-1.133-1.682a3.094 3.094 0 00-1.682-1.133c-.346-.135-.856-.296-1.796-.34-.938-.043-1.246-.053-3.642-.053z" clipRule="evenodd" /><path fillRule="evenodd" d="M12.147 7.272a4.875 4.875 0 100 9.75 4.875 4.875 0 000-9.75zm0 8.167a3.292 3.292 0 110-6.584 3.292 3.292 0 010 6.584z" clipRule="evenodd" /><path fillRule="evenodd" d="M17.785 5.032a1.082 1.082 0 100 2.165 1.082 1.082 0 000-2.165z" clipRule="evenodd" /></svg> },
  { name: 'X', icon: (props: any) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" /></svg> },
  { name: 'LinkedIn', icon: (props: any) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg> },
  { name: 'YouTube', icon: (props: any) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" /></svg> },
]

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      {/* CTA Section */}
      <div className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-display font-medium text-gray-900 tracking-tight"
          >
            Your child deserves the best
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Schedule an appointment today and experience the difference that expertise and technology make in pediatric care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="https://wa.me/201117425125?text=Hi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-primary text-white text-sm font-semibold px-6 py-2.5 rounded hover:bg-opacity-90 transition-colors inline-block"
            >
              Book appointment
            </a>
            <a
              href="https://wa.me/201117425125?text=Hi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-white text-gray-900 border border-gray-200 text-sm font-semibold px-6 py-2.5 rounded hover:bg-gray-50 transition-colors inline-block"
            >
              WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Big Image */}
      <div className="w-full h-[300px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src={images.DoctorAndKid}
          alt="Doctor taking care of a child"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Navigation & Legal */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 border-t-[5px] border-primary/20">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="shrink-0">
            <span className="font-['Pacifico',cursive] text-2xl font-bold text-gray-900 italic">
              Logo
            </span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-xs font-bold uppercase text-gray-900 hover:text-primary transition-colors">
                {item.name}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-4">
            {socails.map((item) => (
              <a key={item.name} href="#" className="text-gray-900 hover:text-gray-600">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-100 pt-8 text-xs text-gray-500">
          <p>&copy; {currentYear} Minya Digital Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            {legal.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-gray-900 transition-colors underline decoration-gray-300 underline-offset-2">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
