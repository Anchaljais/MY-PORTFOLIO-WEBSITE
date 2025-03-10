// import React from 'react'
// import './MyWork.css'
// import theme_pattern from '../../assets/theme_pattern.svg';
// import mywork_data from '../../assets/mywork_data'
// import arrow_icon from '../../assets/arrow_icon.svg';

// const MyWork = () => {
//   return (
//     <div className='mywork'>
//           <div className="mywork-title">
//               <h1>My Latest Work</h1>
//               <img src={theme_pattern} alt="" />
//           </div>
//           <div className="mywork-container">
//               {mywork_data.map((work,index) => {
//                   return <img key={index} src={work.w_img} alt=''></img>
//               })}
//           </div>
//           <div className='mywork-showmore'>
//               <p>Show More</p>
//               <img src={arrow_icon} alt="" />
//           </div>
//     </div>
//   )
// }

// export default MyWork

import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
    const handleShowMore = () => {
        alert("Show more projects coming soon!"); // Replace with actual functionality
    };

    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <div
                        key={index}
                        className="work-item"
                        onClick={() => window.open(work.w_link, "_blank")} // Open GitHub link in new tab
                    >
                        <img src={work.w_img} alt={work.w_name} />
                        <div className="work-overlay">
                            <button className="view-button">View on GitHub</button>
                        </div>
                        <p className="project-name">{work.w_name}</p> {/* Add project name here */}
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default MyWork;