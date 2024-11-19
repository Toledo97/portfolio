'use client';

import {
    EnvelopeIcon,
    LinkIcon,
    UserIcon
} from '@heroicons/react/24/outline';

import { mono, inconsolata } from '@/app/ui/fonts';
import { companies, activities, projects, skillsBundle, certificatesBundle, randomLinks } from '@/app/lib/data'
import { ImageData, Role, Skill, Entity, Project, LinkCardProps, FormProps } from "@/app/lib/definitions";
import BasicModal from '@/app/ui/dashboard/my-modal'

import Image from 'next/image';
import Link from 'next/link';
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';

import React from "react";

const links = [
    { name: 'Email', href: 'mailto:toledojr7@hotmail.com', icon: EnvelopeIcon },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/carlos-a-toledo-jr-10a998156/', icon: LinkIcon },
]

export function ProfileCard() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const MyModal = React.forwardRef(() => <BasicModal />);
    MyModal.displayName = 'Contact Modal'

    return (
            <div className="m-auto w-80 overflow-clip shadow rounded">
                <div className="relative flex pb-3 aspect-square w-full flex-col items-center justify-center">
                <div className="aspect-square overflow-clip rounded-full mt-5 mb-2 mx-3">
                    <Image  
                        alt=""
                        src="/images/me.png" className="h-auto w-auto rounded-full"
                        priority
                        width={190}
                        height={0}/>
                </div>
                    <div className="z-10 flex flex-col items-center justify-center w-full">
                        <h1 className={`${mono.className} inline-block text-2xl`}>Carlos A Toledo Jr</h1>
                        <h2 className={`${inconsolata.className} inline-block text-xl`}>Computer Engineering @ UIUC</h2>
                    </div>
                    <div className='z-10 flex flex-row items-center justify-center mt-2'>
                    <>
                        {links.map((link, idx) => {
                            const MyIcon = link.icon;
                            return (

                            <Tooltip title={link.name} key={idx}>

                            <a
                                key={link.name}
                                target="_blank"
                                href={link.href}
                                className={
                                'flex grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
                                }>
                                <MyIcon className="w-6" />
                            </a>
                            </Tooltip>

                            );
                        })}
                        </>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            >
                            <MyModal/>
                        </Modal>
                    </div>
                </div>
        </div>
    );
}

export function ProjectsCardGrid(){
    return(
        <div className="mt-2 flex flex-col gap-3" >
            {projects.map((item:Project) => {
                return(ProjectsCard(item));
            })}
        </div>
    );
}

function ProjectsCard(item:Project) {
    return(
        <div className="m-auto w-full overflow-clip shadow rounded p-6 "  key={item.title}>
            <div className="relative flex pb-3 flex-col align-left gap-3">
                <div className="z-10 flex flex-row grid grid-cols-2">
                    <h1 className={`${mono.className} text-left text-xl mx-4 `}>{item.title}</h1>  
                    <h1 className={`${mono.className} text-right mx-4`}>{item.location}</h1>

                </div>
                <div className="z-10 flex flex-row grid grid-cols-2">
                    <h1 className={`${inconsolata.className} text-left mx-4 text-xl`}>{item.subTitle}</h1>  
                    <h2 className={`${inconsolata.className} mx-4 text-right `}>{item.timeline}</h2>
                </div>

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
                return(
                    <div key={idxj}>
                        {CompanyCard(item.imageData, item.roles, item.subTitle)}
                    </div>
                );
            })}
        </div>
    );
}  

export function CompanyCardGrid(){
    return(
        <div className="mt-2 flex flex-col gap-3" >
            {companies.map((item:Entity) => {
                return(
                    <div key={item.imageData.alt}>
                        {CompanyCard(item.imageData, item.roles, item.location)}
                    </div>
                    );
            })}
        </div>
    );
}  

function CompanyCard(imageData:ImageData, roles:Role[], location:string){
    return (
        <div className="m-auto w-full overflow-clip shadow rounded p-6 " >
            <div className="relative flex pb-3 flex-col align-left gap-3" >
            <div className="z-10 flex flex-row grid grid-cols-2">
                    <Image
                    alt={imageData.alt}
                    src={`/images/` + imageData.src} 
                    width={imageData.w}
                    height={imageData.h}
                    priority
                    />
                <h1 className={`${mono.className} text-right mx-4`}>{location}</h1>
            </div>
            {roles.map((role:Role, idx:number) => {
                return(
                        <div className="z-10 flex flex-col" key={idx}>
                            <div className="z-10 flex flex-row grid grid-cols-2">
                                <div>
                                    <h1 className={`${mono.className} text-left	text-xl inline-block`}>{role.title}</h1>
                                </div>
                                <div>
                                    <h2 className={`${inconsolata.className} mx-4 text-right `}>{role.timeline}</h2>
                                </div>
                            </div>
                                {role.description.map((point:string, idx:number) => {
                                    return (<li key={`${role.timeline}-${idx}`} className={`px-5`}>{point}</li> ); 
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
            {certificatesBundle.map((item:Skill, idx:number) => {    
                return (
                    <div key={idx}>
                        {CertificateCard(item.title,item.collection)}
                    </div>
                    );
            })}           
        </div>
    );
}

function CertificateCard(title:string, collection:ImageData[]){
    
    return (
        <div className="m-auto w-full shadow rounded p-6 " key={title}>
            <h1 className={`${inconsolata.className} text-left text-2xl`}>{title}</h1>
                <div className="m-auto w-full flex flex-row overflow-x-auto rounded p-6 gap-6">
                    {collection.map((item:ImageData, idx:number) => {
                        return(
                        <div className="relative flex p-3 flex-shrink-0" key={idx}> 
                            <div className="z-10 flex flex-col items-center justify-center flex-wrap">
                                <div className="relative align-right">

                                    {item.verify && 
                                    <a target="_blank"
                                        href={item.verify}>
                                        <Image
                                            src={`/images/verify.png`}
                                            width={30}
                                            height={25}
                                            className='absolute -right-3 -top-3 h-auto w-auto'
                                            alt='verify-icon'
                                            priority
                                        />
                                    </a>}
                                        <Image
                                            alt={item.alt}
                                            src={`/images/certificates/` + item.src} 
                                            width={item.w}
                                            height={item.h}
                                            priority
                                            />
                                </div>
                                {~item.verify && 
                                    <p>{item.msg}</p>
                                    }
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
        skillsBundle.map((item:Skill, idx:number) =>{
            return(
                <div key={idx}>
                    {CardTempl(item.title,item.collection)}
                </div>
            );
        })
    );
    
}

function CardTempl(title:string, images: ImageData[]) {
    return (            
        <div className="m-auto shadow rounded ">
            <h1 className={`${mono.className} mt-3 mx-3`}>{title}</h1>
    
            <div className="relative flex p-3 w-full flex-col">
                <div className=" z-10 flex flex-row flex-wrap items-center justify-center gap-4">
                    <>
                        {images.map((item,idx) => {
                            return (
                                <Tooltip title={item.alt} key={idx}> 
                                <Image
                                alt={item.alt}
                                src={`/images/skill-icons/` + item.src} 
                                priority
                                width={item.w}
                                height={item.h}
                                />
                                </Tooltip>
                            );
                        })
                        }
                    </>
                </div>
            </div>
        </div>
        );
}

export function LinkCard(props: LinkCardProps){
    return (            
        <div className="m-auto overflow-clip shadow p-4 rounded bg-gray-100">
            <h1 className={`${mono.className}  mx-3`}>{props.title}</h1>
    
            <div className="relative flex p-3 w-full flex-col">
                <div className=" z-10 flex flex-col flex-wrap gap-4 flex-wrap">
                    <>
                        {
                            randomLinks.map((item,idx) => {
                                return (<li key={`${item.name}-${idx}`} className={`px-5`}>
                                        <a href={item.link}>
                                            {item.name}
                                        </a>
                                    </li> ); 
                            })
                        }
                    </>
                </div>
            </div>
        </div>
        );
}

