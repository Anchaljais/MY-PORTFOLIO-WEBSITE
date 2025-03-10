// const Services_Data = [
//     {
//         s_no:"01",
//         s_name:"Web Development",
//         s_desc:"HTML, CSS, JavaScript, React, Bootstrap, etc"
//     },
//     {
//         s_no:"02",
//         s_name:"Programming Languages",
//         s_desc:"Web development is the process of building, programming..."
//     },
//     {
//         s_no:"03",
//         s_name:"Data Science & Machine Learning",
//         s_desc:"Web development is the process of building, programming..."
//     },
//     {
//         s_no:"04",
//         s_name:"Soft Skills",
//         s_desc:"Web development is the process of building, programming..."
//     },
//     {
//         s_no:"05",
//         s_name:"Digital marketing",
//         s_desc:"Web development is the process of building, programming..."
//     },
//     {
//         s_no:"06",
//         s_name:"Content writing",
//         s_desc:"Web development is the process of building, programming..."
//     },
// ]
 
// export default Services_Data;

const Services_Data = [
    {
        s_no: "01",
        s_name: "Web Development",
        s_desc: [
            { skill: "HTML", level: 9 },
            { skill: "CSS", level: 8 },
            { skill: "JavaScript", level: 9 },
            { skill: "React", level: 8 },
            { skill: "Bootstrap", level: 7 },
            { skill: "Mongodb", level: 7 },
            { skill: "Express.js", level: 6 }
        ]
    },
    {
        s_no: "02",
        s_name: "Programming Languages",
        s_desc: [
            { skill: "Python", level: 9 },
            { skill: "Java", level: 8 },
            { skill: "R", level: 7 },
        ]
    },
    {
        s_no: "03",
        s_name: "Data Science & Machine Learning",
        s_desc: [
            { skill: "Predictive Analysis", level: 9 },
            { skill: "Big Data Anaylysic", level: 7 },
            { skill: "Tableau", level: 7 },
            { skill: "Power Bi", level: 8 },
            { skill: "AIML", level: 8 },

        ]
    },
    {
        s_no: "04",
        s_name: "Soft Skills",
        s_desc: [
            { skill: "Communication", level: 9 },
            { skill: "Teamwork", level: 9 },
            { skill: "Problem Solving", level: 8 },
            { skill: "Time Management", level: 8 },
            { skill: "Leadership", level: 9 }
        ]
    },
    {
        s_no: "05",
        s_name: "Tools and Technologies",
        s_desc: [
            { skill: "VS-Code", level: 9 },
            { skill: "Github", level: 8 },
            { skill: "Jupyter Notebook", level: 6 },
            { skill: "Vite", level: 9 },
            { skill: "PostMan", level: 7 }
        ]
    },
    {
        s_no: "06",
        s_name: "Content Writing",
        s_desc: [
            { skill: "Blog Writing", level: 9 },
            { skill: "Technical Writing", level: 6 },
            { skill: "Content writing", level: 8 },
            { skill: "Creative Writing", level: 9 },
            { skill: "Editing", level: 5 }
        ]
    },
];

export default Services_Data;