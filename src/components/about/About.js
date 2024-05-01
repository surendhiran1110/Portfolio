import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box, Button } from "@mui/material";
import { info } from "../../info/Info";

export default function About({innerRef}) {
    const firstName = info.firstName.toLowerCase();

    // Function to generate about me text
    function aboutMeText() {
        return (
            <>
                <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                    about{firstName} </p>
                <p><span style={{color: info.baseColor}}>about{firstName} <span
                    className={Style.green}>(main)</span> $ </span>
                    {info.bio}
                </p>
            </>
        );
    }

    // Function to generate skills text
    function skillsText() {
        return (
            <>
                <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
                </p>
                <p><span style={{color: info.baseColor}}>skills/tools <span
                    className={Style.green}>(main)</span> $</span> ls</p>
                <p style={{color: info.baseColor}}> Proficient With</p>
                <ul className={Style.skills}>
                    {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
                </ul>
                <p style={{color: info.baseColor}}> Exposed To</p>
                <ul className={Style.skills}>
                    {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
                </ul>
            </>
        );
    }

    // Function to generate miscellaneous text
    function miscText() {
        return (
            <>
                <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                    hobbies/interests</p>
                <p><span style={{color: info.baseColor}}>hobbies/interests <span
                    className={Style.green}>(main)</span> $</span> ls</p>
                <ul>
                    {info.hobbies.map((hobby, index) => (
                        <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                    ))}
                </ul>
            </>
        );
    }

    // Function to handle resume download
    const handleDownloadResume = () => {
        // Replace 'your_resume.pdf' with the actual path to your resume file
        const resumePath = 'https://drive.google.com/file/d/1Q8Q0-Ene7FPp5_M6VikPHdFSaAQdhuwp/view?usp=sharing'; 
        console.log('Resume Path:', resumePath);
        window.open(resumePath, '_blank');
    };

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()} />
            <Terminal text={skillsText()} />
            <Terminal text={miscText()} />
            {/* Button for downloading resume */}
            <Button onClick={handleDownloadResume} variant="contained" color="primary" mt={2}>
                Download Resume
            </Button>
        </Box>
    );
}
