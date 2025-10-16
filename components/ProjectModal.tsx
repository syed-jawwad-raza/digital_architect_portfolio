import React from 'react';
import { useStore } from '../hooks/useStore';

const ProjectModal: React.FC = () => {
    const { selectedProject, selectProject } = useStore();

    if (!selectedProject) return null;

    return (
        <div 
            className="fixed inset-0 bg-[#0A192F]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => selectProject(null)}
        >
            <div 
                className="bg-[#0A192F] border-2 border-[#FFA500]/50 rounded-lg p-6 max-w-2xl w-full text-white font-poppins shadow-2xl shadow-[#FFA500]/20 animate-fade-in"
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className="text-3xl font-oswald neon-orange-text mb-4 uppercase tracking-wider">{selectedProject.name}</h3>
                <p className="text-lg mb-4 text-white/80">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                    <span className="font-semibold mr-2">Technologies:</span>
                    {selectedProject.technologies.map(tech => (
                        <span key={tech} className="bg-[#00FF7F]/10 text-[#00FF7F] px-3 py-1 text-sm rounded-full">{tech}</span>
                    ))}
                </div>
                <button 
                    onClick={() => selectProject(null)}
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

export default ProjectModal;
