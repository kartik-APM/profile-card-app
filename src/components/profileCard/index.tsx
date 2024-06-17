import { FC } from "react";
import '../../styles/global.css'
import { ProfileCardProps } from "./types";
import githubIcon from '../../assets/github-icon.svg'
import linkedinIcon from '../../assets/linkedin-icon.svg'
import instagramIcon from '../../assets/instagram-icon.svg'
import twitterIcon from '../../assets/twitter-icon.svg'

const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { imgSrc, title, subtitle, description } = props || {};

  return (
    <div className="card">
        <img className="profile-pic" src={imgSrc} alt="Profile" />
        <div className="profile-text">
        <h2>{title}</h2>
        <h3 className="profile-subtitle">{subtitle}</h3>
        </div>
        <p>{description}</p>
      <button>Contact me</button>
      <div className="social-icons">
        <a className="social-img" href="https://github.com">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://linkedin.com">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://instagram.com">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://twitter.com">
          <img src={twitterIcon} alt="Twitter" />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
