import { Link } from "@mui/material";
import { PropsWithChildren } from "react";

interface CustomLinkProps {
    href: string;
}

function CustomLink ({children, href}: PropsWithChildren<CustomLinkProps>) {
    return (
        <Link href={href}>
            {children}
        </Link>
    )
}

export default CustomLink;