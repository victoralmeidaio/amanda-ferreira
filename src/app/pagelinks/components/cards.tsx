import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { FaCalendarAlt, FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";
import bannercurso from '../../../assets/images/bannercurso.png';
import agendamentos from '../../../assets/images/bg-agendamentos.png';
import location from '../../../assets/images/maps.png';
import NinetyNine from '../../../assets/images/99.svg';
import waze from '../../../assets/images/waze.svg';
import maps from '../../../assets/images/maps.svg';
import avaliation from '../../../assets/images/google.png';
import links from "./constants/linkscontants";







function CardsComponent() {

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
        <div className="max-w-[450px] px-3  mt-2 mb-30 flex flex-col gap-6" >
            <Drawer >
                <DrawerTrigger className="  w-full border-2  cursor-pointer" >
                    <div
                        style={{
                            position: 'relative',
                            backgroundImage: `url(${agendamentos.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            height: '80px',
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            }}
                        />
                        <p className="text-3xl z-20" >Agendar</p>
                    </div>
                </DrawerTrigger>
                <DrawerContent className="max-w-[500px] " >
                    <DrawerHeader>
                        <DrawerTitle>Como deseja agendar?</DrawerTitle>
                    </DrawerHeader>

                    <div className=" grid grid-cols-2 gap-4 px-4 my-6">
                        <Button variant={"outline"} className=" rounded-[0] " onClick={() => window.open(links.agendamentos[0].url, '_blank')}>
                            <FaWhatsapp className="mr-2" /> WhatsApp
                        </Button>
                        <Button variant={"outline"} className=" rounded-[0] " onClick={() => abrirLinkNormal(links.agendamentos[1].url,)}>
                            <FaCalendarAlt className="mr-2" />  Online
                        </Button>
                    </div>


                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <Drawer >
                <DrawerTrigger className="  w-full border-2  cursor-pointer" >
                    <div
                        style={{
                            position: 'relative',
                            backgroundImage: `url(${bannercurso.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            height: '80px',
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            }}
                        />
                        <p className="text-3xl z-20" >Cursos</p>
                    </div>
                </DrawerTrigger>
                <DrawerContent className="max-w-[500px] " >
                    <DrawerHeader>
                        <DrawerTitle>CURSO DESIGN DE SOBRANCLEHAS</DrawerTitle>
                    </DrawerHeader>

                    <div className="   px-4 my-6 flex  flex-col gap-4">
                        <Button variant={"outline"} className=" w-full rounded-[0] " onClick={() => window.open(links.cursos[0].url, '_blank')}>
                            Ver conteúdo do curso
                        </Button>
                        <Button variant={"outline"} className=" w-full rounded-[0] " onClick={() => window.open(links.cursos[1].url, '_blank')}>
                            Tenho interesse
                        </Button>

                    </div>


                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <Drawer >
                <DrawerTrigger className="  w-full border-2  cursor-pointer" >
                    <div
                        style={{
                            position: 'relative',
                            backgroundImage: `url(${location.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            height: '80px',
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            }}
                        />
                        <p className="text-3xl z-20" >Localização</p>
                    </div>
                </DrawerTrigger>
                <DrawerContent className="max-w-[500px] " >
                    <DrawerHeader>
                        <DrawerTitle>Nossa localização</DrawerTitle>
                        <DrawerDescription>
                            Estamos localizados na zona norte de São Paulo Brasilândia<br />
                            Rua Benedito Egídio Barbosa, 41A - Sala 03 - Vila Teresinha - São Paulo, SP
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-8">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.011058975715!2d-46.7005752238554!3d-23.46006557886966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef9fe4b717a79%3A0x6eeb62e5b9970268!2sAmanda%20Ferreira%20Studio%20%7C%20Micropigmenta%C3%A7%C3%A3o%20%7C%20Design%20de%20sobrancelhas%20%7C%20Brown%20Lamination%20%7C%20C%C3%ADlios%20%7C%20Henna%20%7C%20Lash%20Lifting!5e0!3m2!1spt-BR!2sbr!4v1729036174204!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="250"
                            style={{ border: '0', borderRadius: '10px' }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <p className="text-[13px] text-center">Clique onde deseja ser redirecionado</p>
                    <div className="   p-4 my-6 grid grid-cols-3  gap-4">
                        <div
                            onClick={() => window.open(links.endereco[2].url, '_blank')}
                            style={{
                                backgroundImage: `url(${NinetyNine.src})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                height: '50px',
                                overflow: 'hidden',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                filter: 'grayscale(100%)',
                                cursor: 'pointer',
                            }} >
                        </div>

                        <div
                            onClick={() => window.open(links.endereco[1].url, '_blank')}
                            style={{
                                backgroundImage: `url(${waze.src})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                overflow: 'hidden',
                                height: '50px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                filter: 'grayscale(100%)',
                                cursor: 'pointer',
                            }} >
                        </div>
                        <div
                            onClick={() => window.open(links.endereco[0].url, '_blank')}
                            style={{
                                backgroundImage: `url(${maps.src})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                overflow: 'hidden',
                                height: '50px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                filter: 'grayscale(100%)',
                                cursor: 'pointer',
                            }} >
                        </div>
                    </div>


                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <Drawer >
                <DrawerTrigger className="  w-full border-2  cursor-pointer" >
                    <div
                        style={{
                            position: 'relative',
                            backgroundImage: `url(${avaliation.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            height: '80px',
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            }}
                        />
                        <p className="text-3xl z-20" >Avaliações</p>
                    </div>
                </DrawerTrigger>
                <DrawerContent className="max-w-[500px] " >
                    <DrawerHeader>
                        <DrawerTitle>Me avalie no google</DrawerTitle>
                        <DrawerDescription>
                            Ao me avaliar, você me ajuda a crescer e a melhorar cada vez mais! <br />
                            Além de ganhar 5% de desconto!
                        </DrawerDescription>
                    </DrawerHeader>



                    <div className=" grid grid-cols-2 gap-4 px-4 my-6">
                        <Button variant={"outline"} className=" rounded-[0] " onClick={() => window.open(links.avaliation[0].url, '_blank')}>
                           conferir avaliações
                        </Button>
                        <Button variant={"outline"} className=" rounded-[0] " onClick={() => abrirLinkNormal(links.avaliation[1].url,)}>
                           Me avaliar
                        </Button>
                    </div>


                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div >
    );
} export default CardsComponent;
