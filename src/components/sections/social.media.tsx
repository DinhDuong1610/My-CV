import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";

interface IProps {
    youtube: string;
    tiktok: string;
    udemy: string;
    facebook: string;
}
const SocialMedia = (props: IProps) => {
    const { youtube, tiktok, udemy, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={udemy} target='_blank' className="highlight" title="Github Đính Dương">
                <FaGithub size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook Đính Dương">
                <FaFacebook size={30} />
            </a>
            <a href={tiktok} target='_blank' className="highlight" title="Tiktok Đính Dương">
                <FaTiktok size={30} />
            </a>
            <a href={youtube} target='_blank' className="highlight" title="Youtube Đính Dương">
                <SiYoutubeshorts size={30} />
            </a>
        </div>
    )
}

export default SocialMedia;