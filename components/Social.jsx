import Link from "next/link";
import {
    FaGithub,
    FaLinkedinIn,
    FaYoutube,
    FaTwitter,
} from "react-icons/fa";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"; // adjust this path if needed

const socials = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedinIn />, path: "" },
    { icon: <FaYoutube />, path: "" },
    { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <TooltipProvider delayDuration={100}>
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Tooltip key={index}>
                    <TooltipTrigger asChild>
                        <Link href={item.path} className={iconStyles}>
                            {item.icon}
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Coming soon</p>
                    </TooltipContent>
                </Tooltip>
            ))}
        </div>
        </TooltipProvider>
    );
};

export default Social;
