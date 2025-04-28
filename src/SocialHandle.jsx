import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Container } from 'react-bootstrap';

export default function SocialHandle() {

    return (
        <Container className='p-3 social-handle'>
            <div className="d-flex flex-sm-column justify-content-center align-items-center">
                <div className="col">
                    <a href="https://www.linkedin.com/in/yashjain9425/" target='__blank'><LinkedInIcon style={{ fontSize: "40px", color: " #fff" }} /></a>
                </div>
                <div className="col">
                    <a href="mailto:yashjain942546@gmail.com"><EmailIcon style={{ fontSize: "40px", color: " #fff" }} /></a>
                </div>
                <div className="col">
                    <a href="https://github.com/Yashjain9425" target='_blank' ><GitHubIcon style={{ fontSize: "40px", color: " #fff" }}  /></a>
                </div>
                {/* <div className="col">
                    <a href="https://www.instagram.com/abhay_bhartii/" target='_blank' ><InstagramIcon style={{ fontSize: "40px", color: " #fff" }}  /></a>
                </div>
                <div className="col">
                    <a href="https://facebook.com/profile.php?id=100015552886160" target='_blank' ><FacebookIcon style={{ fontSize: "40px", color: " #fff" }} /></a>
                </div> */}
            </div>
        </Container>
    )
}