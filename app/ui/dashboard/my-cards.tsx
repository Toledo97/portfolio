'use client';

import {
    EnvelopeIcon,
    LinkIcon,
    UserIcon
} from '@heroicons/react/24/outline';

import { mono, inconsolata } from '@/app/ui/fonts';
import { companies, activities, projects, skillsBundle, certificatesBundle } from '@/app/lib/data'
import { ImageData, Role, Certificate, Entity, Project } from "@/app/lib/definitions";

import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
    { name: 'email', href: 'mailto:ctoledo2@illinois.edu', icon: EnvelopeIcon },
    { name: 'personal', href: '', icon: UserIcon },
    { name: 'linkedIn', href: 'https://www.linkedin.com/in/carlos-a-toledo-jr-10a998156/', icon: LinkIcon },
]

export function ProfileCard() {

    return (
            <div className="m-auto w-80 overflow-clip shadow rounded">
                <div className="relative flex pb-3 aspect-square w-full flex-col items-center justify-center">
                <div className="aspect-square overflow-clip rounded-full mt-5 mb-2 mx-3">
                    <Image  
                        alt=""
                        src="/images/me.png" className=" rounded-full"
                        width={190}
                        height={0}/>
                </div>
                    <div className="z-10 flex flex-col items-center justify-center w-full">
                        <h1 className={`${mono.className} inline-block text-2xl`}>Carlos A Toledo Jr</h1>
                        <h2 className={`${inconsolata.className} inline-block text-xl`}>Computer Engineering @ UIUC</h2>
                    </div>
                    <div className='z-10 flex flex-row items-center justify-center mt-2'>
                    <>
                        {links.map((link) => {
                            const LinkIcon = link.icon;
                            // check for user and open modal on click
                            return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
                                )}>
                                <LinkIcon className="w-6" />
                            </Link>
                            );
                        })}
                        </>
                    </div>
                </div>
        </div>
    );
}

export function ProjectsCardGrid(){
    return(
        <div className="mt-2 flex flex-col gap-3" >
            {projects.map((item:Project, idxj:number) => {
                return(ProjectsCard(item, idxj));
            })}
        </div>
    );
}

function ProjectsCard(item:Project, idxj:number) {
    return(
        <div className="m-auto w-full overflow-clip shadow rounded p-6 "  key={idxj}>
            <div className="relative flex pb-3 flex-col align-left gap-3">
                <div className="z-10 flex flex-row grid grid-cols-2">
                    <h1 className={`${mono.className} text-left text-xl mx-4 `}>{item.title}</h1>  
                    <h1 className={`${mono.className} text-right mx-4`}>{item.location}</h1>

                </div>
                <h1 className={`${inconsolata.className} text-left mx-4 text-xl`}>{item.subTitle}</h1>  

                {item.description.map((point:string, idxk:number) => {
                    return(
                        <li key={idxk} className={`px-5`}>{point}</li> 
                    );
                })}               
            </div>
        </div>
    );
}

export function ActivitiesCardGrid(){
    return(
        <div className="mt-2 flex flex-col gap-3" >
            {activities.map((item:Entity, idxj:number) => {
                return(CompanyCard(item.imageData, item.roles, item.subTitle, idxj));
            })}
        </div>
    );
}  

export function CompanyCardGrid(){
    return(
        <div className="mt-2 flex flex-col gap-3" >
            {companies.map((item:Entity, idxj:number) => {
                return(CompanyCard(item.imageData, item.roles, item.location, idxj));
            })}
        </div>
    );
}  

function CompanyCard(imageData:ImageData, roles:Role[], location:string, idxj:number){
    return (
        <div className="m-auto w-full overflow-clip shadow rounded p-6 "  key={idxj}>
            <div className="relative flex pb-3 flex-col align-left gap-3">
            <div className="z-10 flex flex-row grid grid-cols-2">
                    <Image
                    alt={imageData.alt}
                    src={`/images/` + imageData.src} 
                    width={imageData.w}
                    height={imageData.h}
                    />
                <h1 className={`${mono.className} text-right mx-4`}>{location}</h1>
            </div>
            {roles.map((role:Role, idxk:number) => {
                return(
                    <div className="z-10 flex flex-col" key={idxk}>
                        <div className="z-10 flex flex-row grid grid-cols-2">
                            <div>
                                <h1 className={`${mono.className} text-left	text-xl inline-block`}>{role.title}</h1>
                            </div>
                            <div>
                                <h2 className={`${inconsolata.className} mx-4 text-right `}>{role.timeline}</h2>
                            </div>
                        </div>
                            {role.description.map((point:string,idx:number) => {
                                return (<><li key={idx} className={`px-5`}>{point}</li> </>); 
                            })}
                    </div>
                );
            })}               
            </div>
        </div>
    );
}

export function CertificateyCardGrid(){
    return(
        <div className="mt-2 flex flex-col gap-3 w-full" >  
            {certificatesBundle.map((item:Certificate) => {    
                return (CertificateCard(item.title,item.collection));
            })}           
        </div>
    );
}

function CertificateCard(title:string, collection:ImageData[]){
    
    return (
        <div className="m-auto w-full shadow rounded p-6 ">
            <h1 className={`${inconsolata.className} text-left text-2xl`}>{title}</h1>
                <div className="m-auto w-full flex flex-row overflow-x-auto rounded p-6 gap-6">
                    {collection.map((item) => {
                        return(
                        <div className="relative flex p-3 flex-shrink-0 "> 
                            <div className="z-10 flex flex-col items-center justify-center flex-wrap">
                                <div className="relative align-right">
                                    <Link
                                        key={item.alt}
                                        href={item.verify}>
                                        <Image
                                            src={`/images/verify.png`}
                                            width={30}
                                            height={25}
                                            className='absolute -right-3 -top-3'
                                            alt='verify-icon'
                                        />
                                    </Link>
                                        <Image
                                            key={item.alt}
                                            alt={item.alt}
                                            src={`/images/certificates/` + item.src} 
                                            width={item.w}
                                            height={item.h}/>
                                </div>
                                <p>{item.issued}</p>
                            </div>
                        </div>  
                        );
                    })}
                </div>
        </div>
    );
}

export function SkillCards() {
    return(
        skillsBundle.map((item) =>{
            return(CardTempl(item.title,item.collection));
        })
    );
    
}

function CardTempl(title:string, images: ImageData[]) {
    return (            
        <div className="m-auto overflow-clip shadow rounded ">
            <h1 className={`${mono.className} mt-3 mx-3`}>{title}</h1>
    
            <div className=" relative flex p-3 w-full flex-col items-center justify-center">
                <div className=" z-10 flex flex-row flex-wrap items-center justify-center gap-4 flex-wrap">
                    <>
                        {images.map((item) => {
                            return (
                                <Image
                                key={item.alt}
                                alt={item.alt}
                                src={`/images/skill-icons/` + item.src} 
                                className={clsx(
                                    'flex items-center justify-center rounded-md text-sm font-medium md:flex-none md:justify-start'
                                    )}
                                width={item.w}
                                height={item.h}
                                />
                            );
                        })
                        }
                    </>
                </div>
            </div>
        </div>
        );
}