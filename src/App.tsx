import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Nav, Head, WhyUs, OurTeam, Price, Location, Footer } from './sections/section';
import Logo from './components/Logo';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // 1.5s premium splash delay
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full min-h-screen bg-white overflow-x-hidden">
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        key="splash"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center pointer-events-auto"
                    >
                        {/* Pulsing Logo */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0.8 }}
                            animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.8, 1, 0.8] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                            <Logo className="h-16 w-auto sm:h-20" />
                        </motion.div>

                        {/* Loading text below logo */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 flex items-center justify-center space-x-2"
                        >
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Nav />
            <Head />
            <WhyUs />
            <OurTeam />
            <Price />
            <Location />
            <Footer />
        </div>
    )
}

export default App
