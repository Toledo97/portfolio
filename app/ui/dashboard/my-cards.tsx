'use client';

import {
  skillsBundle,
} from '@/app/lib/data';
import React from 'react';
import {
  ImageData,
  Role,
  Skill
} from '@/app/lib/definitions';
import Image from 'next/image';
import Tooltip from '@mui/material/Tooltip';
import { mono, inconsolata } from '@/app/ui/fonts';

export function DefaultCard(imageData: ImageData, roles: Role[], location: string) {
  return (
    <div className="m-auto w-full overflow-clip rounded p-6 shadow ">
      <div className="align-left relative flex flex-col gap-3 pb-3">
        <div className="z-10 flex grid grid-cols-2 flex-row">
          <Image
            alt={imageData.alt}
            src={`/images/` + imageData.src}
            width={imageData.w}
            height={imageData.h}
            className="w-auto h-auto"

            priority
          />
          <h1 className={`${mono.className} mx-4 text-right`}>{location}</h1>
        </div>
        {roles.map((role: Role, idx: number) =>
        (
          <div className="z-10 flex flex-col" key={idx}>
            <div className="z-10 flex grid grid-cols-2 flex-row">
              <div>
                <h1
                  className={`${mono.className} inline-block text-left text-xl`}
                >
                  {role.title}
                </h1>
              </div>
              <div>
                <h2 className={`${inconsolata.className} mx-4 text-right `}>
                  {role.timeline}
                </h2>
              </div>
            </div>
            <ul className="list-disc mx-4">
              {role.description.map((point: string, idx: number) =>
              (
                <li key={`${role.timeline}-${idx}`} className={`px-5`}>
                  {point}
                </li>
              )
              )}
            </ul>
          </div>
        )
        )}
      </div>
    </div>
  );
}

export function SkillCards() {
  return skillsBundle.map((item: Skill, idx: number) => {
    return <div key={idx}>{SkillBox(item.title, item.collection)}</div>;
  });
}

function SkillBox(title: string, images: ImageData[]) {
  return (
    <div className="m-auto rounded shadow ">
      <h1 className={`${mono.className} mx-3 mt-3`}>{title}</h1>

      <div className="relative flex w-full flex-col p-3">
        <div className=" z-10 flex flex-row flex-wrap items-center justify-center gap-4">
          <>
            {images.map((item, idx) =>
            (
              <Tooltip title={item.alt} key={idx}>
                <Image
                  alt={item.alt}
                  src={`/images/skill-icons/` + item.src}
                  priority
                  width={item.w}
                  height={item.h}
                />
              </Tooltip>
            )
            )}
          </>
        </div>
      </div>
    </div>
  );
}

