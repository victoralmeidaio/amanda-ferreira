import { CodeXml } from "lucide-react";






const Footer = () => {
    return (
        <div className=" bg-black items-center flex flex-col  fixed bottom-0 right-[10%] text-center " >
            <a href="https://www.instagram.com/victorhhuggoo?igsh=cnZvbHAzNnN2dnQ1">
                <p className="text-[12px] py-4 flex items-center gap-4 font-[inter] text-center "  >Desenvolvido por @victorhhuggoo 👽 <CodeXml size={18} /></p>
            </a>
        </div>
    );
}
export default Footer;
