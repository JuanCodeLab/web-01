import Image from "next/image";

export const Logo = () => {
    return (
        <div className="block md:flex items-center gap-x-2">
            <Image
                src="/images/logo.png"
                height="100"
                width="100"
                alt="Logo"
                className="dark:hidden"/>
            <Image
                src="/images/logo-dark.png"
                height="100"
                width="100"
                alt="Logo"
                className="hidden dark:block"/>
        </div>
    )
}
