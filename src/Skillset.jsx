import React from "react";
import { Container } from "react-bootstrap";

export default function Skillset() {
  const skills = [
    {
      area: 'Languages',
      tech: [
        {
          name: 'Java',
          url: 'https://icon.icepanel.io/Technology/svg/Java.svg'
        },
        {
          name: 'C++',
          url: 'https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg'
        },
        {
          name: 'Python',
          url: 'https://icon.icepanel.io/Technology/svg/Python.svg'
        },
        {
          name: 'HTML5',
          url: 'https://icon.icepanel.io/Technology/svg/HTML5.svg'
        },
        {
          name: 'CSS3',
          url: 'https://icon.icepanel.io/Technology/svg/CSS3.svg'
        },
        {
          name: 'JavaScript',
          url: 'https://icon.icepanel.io/Technology/svg/JavaScript.svg'
        }
      ]
    },
    {
      area: 'Frameworks',
      tech: [
        {
          name: 'React.Js',
          url: 'https://icon.icepanel.io/Technology/svg/React.svg'
        },
        {
          name: 'Node.Js',
          url: 'https://icon.icepanel.io/Technology/svg/Node.js.svg'
        },
        {
          name: 'Express.Js',
          url: 'https://icon.icepanel.io/Technology/svg/Express.svg',
          theme: true,
        },
        {
          name: 'Bootstrap',
          url: 'https://icon.icepanel.io/Technology/svg/Bootstrap.svg'
        },
        {
          name: 'jQuery',
          url: 'https://icon.icepanel.io/Technology/svg/jQuery.svg'
        }
      ]
    },
    {
      area: 'Tools',
      tech: [
        {
          name: 'Git',
          url: 'https://icon.icepanel.io/Technology/svg/Git.svg'
        },
        {
          name: 'GitHub',
          theme: true,
          url: 'https://icon.icepanel.io/Technology/svg/GitHub.svg'
        },
        {
          name: 'Figma',
          url: 'https://icon.icepanel.io/Technology/svg/Figma.svg'
        },
        {
          name: 'Canva',
          url: 'https://icon.icepanel.io/Technology/svg/Canva.svg'
        },
        {
          name: 'MongoDB',
          url: 'https://icon.icepanel.io/Technology/svg/MongoDB.svg'
        },
        {
          name: 'Postman',
          url: 'https://icon.icepanel.io/Technology/svg/Postman.svg'
        },
        {
          name: 'MySQL',
          url: 'https://icon.icepanel.io/Technology/svg/MySQL.svg'
        },
        {
          name: 'PostgreSQL',
          url: 'https://icon.icepanel.io/Technology/svg/PostgresSQL.svg'
        },
      ]
    }
  ];

  return (
    <Container id="Skills" className="mb-5">
      <h1 className="Contact-heading">SkillSet</h1>
      <div>
        {
          skills.map((skill, index) => (
            <div key={index} className="d-flex m-4 flex-sm-row flex-column align-items-center ">
              <div className="skill-area">
                <h3>{skill.area}</h3>
              </div>
              <div className="d-flex align-items-center justify-content-start flex-wrap gap-2 gap-sm-4 tech-container">
                {
                  skill.tech.map((images, i) => (
                    <div className="d-flex justify-content-center align-items-center flex-column skill-img-box">
                      <div className="skill-img">
                        <img key={i} src={images.url} alt="Failed to load logo" style={images.theme ? { backgroundColor: "white" } : { backgroundColor: "black" }} /></div>
                      <div className="mt-1">{images.name}</div>
                    </div>
                  ))}
              </div>
            </div>
          ))
        }
      </div>
    </Container>
  );
}
