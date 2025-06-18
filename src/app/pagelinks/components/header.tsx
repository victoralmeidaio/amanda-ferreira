import Image from "next/image";
import bannerAmanda from "../../../assets/images/banneramanda.png";

function HeaderComponent() {
    return (
        <header className="sm:max-w-[450px] text-center " >
            <Image  src={bannerAmanda} alt="logo" width={500} />
            <div className="mt-[-150px] z-20">
                <h1>Você está a um passo da <br />VALORIZAÇÃO DO SEU OLHAR!</h1>
                <p>Clique onde deseja e seja redirecionada(o):</p>
            </div>
        </header>
    );
}
export default HeaderComponent;