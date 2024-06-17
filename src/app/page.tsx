import '../styles/global.css';
import profileImage from '../assets/profile.png';
import ProfileCard from "../components/profileCard";

const data = {
    imgSrc: profileImage,
    title: 'Sarah Dole',
    subtitle: 'Front End Engineer @ Microsoft',
    description: 'I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.',
};

export default function Page() {
    const { imgSrc, title, subtitle, description } = data;
    return (
        <div className="page">
            <ProfileCard
                imgSrc={imgSrc}
                title={title}
                subtitle={subtitle}
                description={description}
            />
        </div>
    )
  }