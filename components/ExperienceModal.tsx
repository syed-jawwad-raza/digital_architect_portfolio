import React from 'react';
import { useStore } from '../hooks/useStore';

const ExperienceModal: React.FC = () => {
    const { selectedExperience, selectExperience } = useStore();

    if (!selectedExperience) return null;

    return (
        <div 
            className="fixed inset-0 bg-[#0A192F]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => selectExperience(null)}
        >
            <div 
                className="bg-[#0A192F] border-2 border-[#FFA500]/50 rounded-lg p-6 max-w-2xl w-full text-white font-poppins shadow-2xl shadow-[#FFA500]/20 animate-fade-in"
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className="text-3xl font-oswald neon-orange-text mb-2 uppercase tracking-wider">{selectedExperience.role}</h3>
                <p className="text-xl font-semibold text-white/90 mb-4">{selectedExperience.company} | <span className="text-white/70 font-normal">{selectedExperience.period}</span></p>
                <p className="text-lg mb-4 text-white/80">{selectedExperience.description}</p>

                <button 
                    onClick={() => selectExperience(null)}
                    className="mt-6 bg-transparent border border-[#FFA500] text-[#FFA500] px-4 py-2 rounded-lg hover:bg-[#FFA500] hover:text-[#0A192F] transition-colors duration-300 font-semibold"
                >
                    Close
                </button>
            </div>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default ExperienceModal;