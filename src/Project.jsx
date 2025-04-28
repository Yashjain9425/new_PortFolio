import { Container, Button } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import P2img1 from './assets/Projects/Project2_1.png';
import P2img2 from './assets/Projects/Project2_2.png';
import P2img3 from './assets/Projects/Project2_3.png';
import P3img1 from './assets/Projects/Project3_1.png';
import P3img2 from './assets/Projects/Project3_2.png';
import P3img3 from './assets/Projects/Project3_3.png';
import P3img4 from './assets/Projects/Project3_4.png';
import P3img5 from './assets/Projects/Project3_5.png';
import P4img1 from './assets/Projects/Project4_1.png';
import P4img2 from './assets/Projects/Project4_2.png';
import P4img3 from './assets/Projects/Project4_3.png';
import P1img1 from './assets/Projects/project1_1.png';
import P1img2 from './assets/Projects/project1_2.png';
import P1img3 from './assets/Projects/project1_3.png';
import ProjectCarousel from './Components/ProjectCarousel';

const ProjectCard = ({ info, index }) => {
    const projectRef = useRef(null);
    const isInView = useInView(projectRef, {
        once: false,
        margin: "-50px"
    });

    return (
        <motion.div
            ref={projectRef}
            className={`project-box ${index % 2 === 1 ? 'reverse' : ''}`}
            initial={{
                x: index % 2 === 0 ? -100 : 100,
                opacity: 0
            }}
            animate={isInView ? {
                x: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    stiffness: 100,
                    duration: 0.5
                }
            } : {
                x: index % 2 === 0 ? -100 : 100,
                opacity: 0
            }}
            whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 400 }
            }}
        >
            <motion.div
                className='project-carousel'
                initial={{ opacity: 0 }}
                animate={isInView ? {
                    opacity: 1,
                    transition: { delay: 0.2 }
                } : { opacity: 0 }}
            >
                <ProjectCarousel images={info.img} />
            </motion.div>
            <motion.div
                className='project-info'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.3 }
                } : {
                    opacity: 0,
                    y: 20
                }}
            >
                <motion.h1 className='mt-0'>{info.heading}</motion.h1>
                <motion.p>{info.description}</motion.p>
                <motion.div className='mb-3 d-flex flex-wrap'>
                    {info.tech.map((tech, ind) => (
                        <motion.div
                            key={ind}
                            className='project-tech'
                            initial={{ opacity: 0 }}
                            animate={isInView ? {
                                opacity: 1,
                                transition: { delay: 0.4 + (ind * 0.1) }
                            } : { opacity: 0 }}
                            whileHover={{
                                scale: 1.1,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                        >
                            {tech}
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? {
                        opacity: 1,
                        transition: { delay: 0.5 }
                    } : { opacity: 0 }}
                >
                    <Button
                        href={info.live}
                        target='_blank'
                        variant='light'
                        className='me-1 me-sm-3 p-btn'
                    >
                        Preview..
                    </Button>
                    <Button
                        href={info.github}
                        target='_blank'
                        variant='light'
                        className='p-btn'
                    >
                        Github Repository
                    </Button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default function Projects() {
    const data = [
        {
            img: [P1img1, P1img2, P1img3],
            heading: "WonderLust: Adventure Showcase Platform",
            live: "https://wonderlust-website-20.onrender.com/",
            github: "https://github.com/Yashjain9425/WonderLust-Website/",
            description: 'Designed and developed a dynamic full-stack website enabling users to share and showcase their travel adventures. The platform allows users to create, update, and delete their travel posts, fostering a vibrant community of travel enthusiasts. Leveraged the MERN stack for efficient data management and real-time updates, ensuring a smooth user experience.',
            tech: ["MongoDb", "Express.Js", "Node.Js", "tawilwind CSS"]
        },
        {
            img: [P2img1, P2img2, P2img3],
            heading: "To Do Master App",
            live: "https://to-do-master-main.vercel.app/",
            github: "https://github.com/Abhay-Bharti/ToDoMaster",
            description: 'The app features functionalities are task creation, updating, and deletion, allowing users to organize their tasks effortlessly.Additionally, it includes user profile creation, updating, and deletion, ensuring users can securely manage their profiles.I created a seamless and user-friendly application that provides a reliable platform for managing both user information and tasks.',
            tech: ["MongoDb", "Express.Js", "Node.Js", "React.Js"]
        },
        {
            img: [P4img1, P4img2, P4img3],
            heading: "Weather Cast",
            github: 'https://github.com/Abhay-Bharti/Weather-cast',
            live: "https://weather-cast-project.vercel.app/",
            description: 'Weather Cast is a sleek and user-friendly weather app that provides real-time weather updates, hourly forecasts, air conditions, and a detailed 7-day forecast. With features like location-based search and key metrics such as real feel, wind speed, chance of rain, and UV index, users can easily plan their day and week ahead with confidence.',
            tech: ["HTML5", "Tailwind CSS", "Javascript", "ReactJs"]
        },
        {
            img: [P3img1, P3img2, P3img3, P3img4, P3img5],
            heading: "Agriter: Agri-Tourism",
            live: "https://abhay-bharti.github.io/Agriter/",
            github: "https://github.com/Abhay-Bharti/Agriter",
            description: 'This project is based on agri-tourism and aims to promote agriculture through a user-friendly platform. It features fully optimized mobile responsiveness, ensuring a seamless experience on all devices. With a concise and clean user interface, navigating the platform is straightforward and efficient. The project leverages Bootstrap and jQuery, providing robust frameworks for building responsive, dynamic, and visually appealing web pages.',
            tech: ["HTML5", "CSS3", "Javascript", "Bootstrap", "JQuery"]
        },
    ]

    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, {
        once: false,
        margin: "-50px"
    });

    return (
        <>
            <Container id='Project'>
                <motion.h1
                    ref={headerRef}
                    className='text-center Contact-heading'
                    initial={{ opacity: 0, y: -20 }}
                    animate={headerInView ? {
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "spring",
                            stiffness: 100
                        }
                    } : {
                        opacity: 0,
                        y: -20
                    }}
                >
                    My Projects
                </motion.h1>
                {data.map((info, index) => (
                    <ProjectCard
                        key={index}
                        info={info}
                        index={index}
                    />
                ))}
            </Container>
        </>
    )
}
