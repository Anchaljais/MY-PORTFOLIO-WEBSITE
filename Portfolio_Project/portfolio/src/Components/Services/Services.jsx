// import React from 'react'
// import './Services.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import Services_Data from '../../assets/services_data'
// import arrow_icon from '../../assets/arrow_icon.svg'
// const Services = () => {
//   return (
//     <div className='services'>
//           <div className='services-title'>
//               <h1>Skills & Specializations</h1>
//               <img src={theme_pattern} alt="" />
//           </div>
//           <div className="services-container">
//               {Services_Data.map((service,index) => {
//                   return <div key={index} className="services-format">
//                       <h3>{service.s_no}</h3>
//                       <h2>{service.s_name}</h2>
//                       <p>{service.s_desc}</p>
//                       <div className="services-readmore">
//                           <p>Read More</p>
//                           <img src={arrow_icon} alt="" />
//                       </div>
//                   </div>
//               })}
//           </div>
//     </div>
//   )
// }

// export default Services


import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
    const [expandedIndex, setExpandedIndex] = useState(null); // Tracks which box is expanded
    const [hoveredIndex, setHoveredIndex] = useState(null); // Tracks which box is hovered

    const handleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index); // Toggle expanded state
    };

    return (
        <div id='services' className='services'>
            <div className='services-title'>
                <h1>Skills & Specializations</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="services-container">
                {Services_Data.map((service, index) => {
                    const isExpanded = expandedIndex === index || hoveredIndex === index; // Check if current box is expanded or hovered
                    return (
                        <div
                            key={index}
                            className={`services-format ${isExpanded ? 'expanded' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
                            onMouseLeave={() => setHoveredIndex(null)} // Clear hovered index
                        >
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            {isExpanded && (
                                <div className="services-desc">
                                    {service.s_desc.map((item, idx) => (
                                        <div key={idx} className="skill-item">
                                            <span className="skill-name">{item.skill}</span>
                                            <div className="skill-level-bar">
                                                <div
                                                    className="skill-level-progress"
                                                    style={{ width: `${item.level * 10}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div
                                className="services-readmore"
                                onClick={() => handleReadMore(index)} // Handle click for "Read More"
                            >
                                <p>{isExpanded ? "Show Less" : "Read More"}</p>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;