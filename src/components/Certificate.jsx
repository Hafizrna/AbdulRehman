import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { CertificateData } from '../assets/assets'; 
const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(1);
    
    useEffect(() => {
        const updateVisibleCards = () => {
            if (window.innerWidth >= 1280) { // xl breakpoint
                setVisibleCards(3);
            } else if (window.innerWidth >= 768) { // md breakpoint
                setVisibleCards(2);
            } else {
                setVisibleCards(1);
            }
        };
        
        updateVisibleCards();
        window.addEventListener('resize', updateVisibleCards);
        
        return () => {
            window.removeEventListener('resize', updateVisibleCards);
        };
    }, []);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = CertificateData.length - visibleCards;
            return prevIndex >= maxIndex ? maxIndex : prevIndex + 1;
        });
    };
    
    const prevProject = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex <= 0 ? 0 : prevIndex - 1;
        });
    };
    
    // Calculate the width of each slide with margins accounted for
    const getSlideWidthStyle = () => {
        const gapPercentage = visibleCards > 1 ? 2 : 0; // Gap between slides (2% of container)
        const totalGapSpace = gapPercentage * (visibleCards - 1);
        const availableWidth = 100 - totalGapSpace;
        const slideWidth = availableWidth / visibleCards;
        
        return {
            width: `${slideWidth}%`,
            marginRight: visibleCards > 1 ? `${gapPercentage}%` : '0',
        };
    };
    
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="container mx-auto py-4 pb-20 pt-20 px-4 sm:px-6 md:px-20 lg:px-32 w-full bg-gray-100"
                id="Certificate"
            >
                <h1 className="text-2xl sm:text-4xl font-bold text-center mb-2">
                Certifications <span className="underline underline-offset-4 decoration-1 font-light">completed</span>
                </h1>
                <p className="text-center text-gray-500 mb-8 max-w-xs mx-auto">
                Each certificate represents a step forward in my professional journey
                </p>
                
                <div className="flex justify-end items-center mb-8">
                    <button 
                        onClick={prevProject} 
                        className={`p-3 rounded mr-2 transition-colors ${currentIndex === 0 ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
                        aria-label="Previous Project"
                        disabled={currentIndex === 0}
                    >
                        <img src={assets.left_arrow} alt="Previous" />
                    </button>
                    <button 
                        onClick={nextProject} 
                        className={`p-3 rounded transition-colors ${currentIndex >= CertificateData.length - visibleCards ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
                        aria-label="Next Project"
                        disabled={currentIndex >= CertificateData.length - visibleCards}
                    >
                        <img src={assets.right_arrow} alt="Next" />
                    </button>
                </div>
                
                {/* Project slider container */}
                <div className="overflow-hidden">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ 
                            transform: `translateX(-${currentIndex * (100 + (visibleCards > 1 ? 2 : 0)) / visibleCards}%)`,
                        }}
                    >
                        {CertificateData.map((certificate, index) => {
                            const isLastItem = index === CertificateData.length - 1;
                            return (
                                <div 
                                    key={index} 
                                    className="flex-shrink-0"
                                    style={{ 
                                        ...getSlideWidthStyle(),
                                        marginRight: isLastItem ? '0' : getSlideWidthStyle().marginRight
                                    }}
                                >
                                    <div className="relative h-full w-full">
                                        <div className="mb-14 w-full">
                                            <img 
                                                src={certificate.image} 
                                                alt={certificate.title} 
                                                className="w-full h-64 sm:h-72 md:h-80 object-fit rounded" 
                                            />
                                        </div>
                                        <div className="absolute left-0 right-0 bottom-2 flex justify-center">
                                            <div className="inline-block bg-blue-100 w-4/5 px-4 py-2 shadow-md">
                                                <h2 className="text-lg font-semibold text-gray-800 truncate">
                                                    {certificate.title}
                                                </h2>
                                                <p className="text-sm md:text-base">
                                                    {certificate.price} <span className="px-1">|</span> {certificate.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Projects;