import React from 'react';

const UI: React.FC = () => {
    return (
        <>
            <div className="pointer-events-none absolute inset-0">
                {/* Scroll Down Hint */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
                    <p className="font-poppins text-sm uppercase tracking-widest text-white/50">Scroll to Explore</p>
                    <div className="w-px h-10 bg-white/30 mx-auto mt-2 animate-pulse"></div>
                </div>

                {/* Section Titles */}
                <div style={{ position: 'absolute', top: '180vh', left: '10vw' }}>
                    <h2 className="text-5xl md:text-7xl font-oswald uppercase tracking-widest neon-orange-text">Projects</h2>
                    <p className="text-white/70 max-w-sm mt-2">Each structure represents a project. Interact with them to learn more about their architecture.</p>
                </div>

                <div style={{ position: 'absolute', top: '360vh', right: '10vw', textAlign: 'right' }}>
                    <h2 className="text-5xl md:text-7xl font-oswald uppercase tracking-widest neon-green-text">Skills</h2>
                    <p className="text-white/70 max-w-sm mt-2 ml-auto">A constellation of competencies, showing the connections and relationships between technologies I master.</p>
                </div>

                <div style={{ position: 'absolute', top: '540vh', left: '10vw' }}>
                    <h2 className="text-5xl md:text-7xl font-oswald uppercase tracking-widest neon-orange-text">Career Path</h2>
                     <p className="text-white/70 max-w-sm mt-2">Interact with a trajectory through my professional history, marking key milestones and roles.</p>
                </div>

                <div style={{
                    position: 'absolute',
                    top: '800vh',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <h2 className="text-5xl md:text-7xl font-oswald uppercase tracking-widest neon-green-text">Contact</h2>
                    <div className="mt-8 pointer-events-auto max-w-lg px-4">
                        <div className="flex flex-row justify-center items-center gap-12 text-lg font-poppins">
                            <a href="mailto:syed.jawwad.raza@example.com" aria-label="Email" className="text-white/80 hover:text-[#00FF7F] transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </a>
                            <a href="tel:+1234567890" aria-label="Phone" className="text-white/80 hover:text-[#00FF7F] transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/syed-jawwad-raza/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#00FF7F] transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default UI;