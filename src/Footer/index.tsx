import './style.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg'
import { ReactComponent as LinkedInIcon } from './linkedin.svg'
import { ReactComponent as InstagramIcon } from './instagram.svg'

function Footer(){
    return (
        <footer className="main-footer">
            App desenvolvido por Ernando Rezende
            <div className="footer-icons">
                <a href="https://www.youtube.com" target="_new">
                    <YouTubeIcon/>
                </a>
                <a href="https://www.linkedin.com/ernandorezende" target="_new">
                    <LinkedInIcon/>
                </a>
                <a href="https://www.instagram.com" target="_new">
                    <InstagramIcon/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;