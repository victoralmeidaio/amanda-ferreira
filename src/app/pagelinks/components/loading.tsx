"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../../../assets/images/amandalogobranco.png';

function Loading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060606]">
                <Image src={Logo} alt="Logo Amanda Ferreira" width={260} height={260} className="animate-pulse" />
            </div>
        );
    }

    return null;
}

export default Loading;