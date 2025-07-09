'use client';

import {
    certificatesBundle
} from '@/app/lib/data';

import {
    ImageData,
    Skill
} from '@/app/lib/definitions';
import Image from 'next/image';
import { inconsolata } from '@/app/ui/fonts';

export default function CertificateyCardGrid() {
    return (
        <div className="mt-2 flex w-full flex-col gap-3">
            {certificatesBundle.map((item: Skill, idx: number) => (
                <div key={idx}>{CertificateCard(item.title, item.collection)}</div>
            ))}
        </div>
    );
}

function CertificateCard(title: string, collection: ImageData[]) {

    return (
        <div className="m-auto w-full rounded p-6 shadow " key={title}>
            <h1 className={`${inconsolata.className} text-left text-2xl`}>{title}</h1>
            <div className="m-auto flex w-full flex-row gap-6 overflow-x-auto rounded p-6">
                {collection.map((item: ImageData, idx: number) => {
                    const flag = item.verify.length < 20;
                    return (
                        <div className="relative flex flex-shrink-0 p-3" key={idx}>
                            <div className="z-10 flex flex-col flex-wrap items-center justify-center">
                                {flag ? CertificateCardNUM(item) : CertificateCardURL(item)}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function CertificateCardNUM(item: ImageData) {
    return (
        <>
            <div className="align-right relative">

                <Image
                    alt={item.alt}
                    src={`/images/certificates/` + item.src}
                    width={item.w}
                    height={item.h}
                    className="w-full h-full"
                    priority
                />
            </div>

            <p className='w-56 text-center pt-2'>{item.msg}</p>
            <p className='pt-2'>{item.issued}</p>
            <p className='w-56 text-center pt-2'> <b>Certification Number:</b> {item.verify}</p>

        </>
    );
}

function CertificateCardURL(item: ImageData) {
    return (
        <>
            <div className="align-right relative">
                <a target="_blank" href={item.verify}>

                    <Image
                        src={`/images/verify.png`}
                        width={30}
                        height={25}
                        className="absolute -right-3 -top-3 h-auto w-auto"
                        alt="verify-icon"
                        priority
                    />
                </a>
                <Image
                    alt={item.alt}
                    src={`/images/certificates/` + item.src}
                    width={item.w}
                    height={item.h}
                    className="w-full h-full"
                    priority
                />
            </div>

            <p className='pt-2'>{item.issued}</p>
        </>
    );
}