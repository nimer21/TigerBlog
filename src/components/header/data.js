import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

export const routes = [
    {
        label: "My Profile",
        icon: FaRegUser,
        href: "/profile",
        color: "#0ea5e9",
    },
    {
        label: "All Posts",
        icon: MdOutlineRateReview,
        href: "/posts",
        color: "#be185d",
    },
    {
        label: "Contact",
        icon: FaRegHeart,
        href: "/contact",
        color: "#c2410c",
    },
    {
        label: "Login",
        icon: FaRegUser,
        href: "/login",
        color: "#10b981",
    },
];
