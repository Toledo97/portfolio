'use client';

import {
    ImageData,
    RaceType
} from '@/app/lib/definitions';
import Image from 'next/image';
import { inconsolata } from '@/app/ui/fonts';

export function RaceCard(item: RaceType) {

    return (
        <div className="m-auto w-full rounded p-6 shadow " key={item.name}>
            <h1 className={`${inconsolata.className} text-left text-2xl`}>{item.name}</h1>
            <div className="m-auto flex w-full flex-row gap-6 overflow-x-auto rounded p-6">
                { CertificateCardNUM(item) }
                        
            </div>
        </div>
    );
}

function CertificateCardNUM(item: RaceType) {
    return (
        <>
            <div className="align-right relative">

                <Image
                    alt={item.imageData.alt}
                    src={`/images/running/` + item.imageData.src}
                    width={item.imageData.w}
                    height={item.imageData.h}
                    priority
                />
            </div>

            <p className='w-56 text-center pt-2'>{item.date}</p>

        </>
    );
}