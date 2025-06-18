import { FaInstagram, FaWhatsapp, FaCalendarAlt, } from 'react-icons/fa'
import { FaPix } from "react-icons/fa6";
import { toast } from 'sonner';
import links from './constants/linkscontants';


const copiarChavePix = () => {
    navigator.clipboard
        .writeText(links.chavePix)
        .then(() => toast.success("Chave Pix copiada com sucesso!"))
        .catch((err) => toast.error(`Falha ao copiar a chave Pix: ${String(err)}`));
};

function NavBottom() {
    const abrirLinkNormal = (url: string) => {
        const formattedUrl = url.startsWith("http") ? url : `https://${url}`;
        const userAgent = navigator.userAgent || navigator.vendor;

        // Função para abrir o link no navegador
        const abrirNoNavegador = () => {
            const openedWindow = window.open(formattedUrl, "_blank");

            // Verifica se a janela foi aberta corretamente
            if (openedWindow) {
                toast.success("Link aberto com sucesso no navegador!");
            } else {
                toast.warning("Não conseguimos abrir o link diretamente. Você pode tentar abrir no navegador.");
            }
        };

        // Tentando abrir no Android com intent
        if (/android/i.test(userAgent)) {
            const openedWindow = window.open(`intent:${formattedUrl}#Intent;package=com.android.chrome;end;`, "_blank");

            // Verifica se a tentativa foi bem-sucedida
            if (!openedWindow) {
                toast.warning("Não conseguimos abrir o link diretamente no seu app. Você pode tentar abrir no navegador.");
                abrirNoNavegador();
            } else {
                toast.success("Link aberto com sucesso no seu app Android!");
            }
        }
        // Tentando abrir no iOS
        else if (/iPad|iPhone|iPod/.test(userAgent)) {
            const openedWindow = window.open(formattedUrl, "_blank");

            // Verifica se a tentativa foi bem-sucedida
            if (!openedWindow) {
                toast.warning("Não conseguimos abrir o link no seu app. Você pode tentar abrir no navegador.");
                abrirNoNavegador();
            } else {
                toast.success("Link aberto com sucesso no seu app iOS!");
            }
        }
        // Caso geral para outros navegadores
        else {
            abrirNoNavegador();
        }

    };
    return (
        <div className="fixed bottom-0 right-[15%] bg-[] z-30 backdrop-blur-[8px] border-y-3 w-full py-4 max-w-[70%] rounded-[90px] mb-10  " >
            <div className="flex justify-around items-center">
                <div className="flex flex-col items-center gap-1"
                    onClick={() => abrirLinkNormal(links.contato[0].url,)}>
                    <FaInstagram size={24} />
                </div>
                <div className="flex flex-col items-center gap-1 "
                    onClick={copiarChavePix}>
                    <FaPix size={24} />
                </div>
                <div className="flex flex-col items-center gap-1 "
                onClick={() => abrirLinkNormal(links.contato[1].url)}>
                    <FaWhatsapp size={24} />
                </div>
                <div className="flex flex-col items-center gap-1 "
                onClick={() => abrirLinkNormal(links.agendamentos[1].url)}>
                    <FaCalendarAlt size={24} />
                </div>
            </div>
        </div>
    )
}

export default NavBottom