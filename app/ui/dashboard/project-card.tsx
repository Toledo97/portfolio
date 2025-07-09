'use client';

import { Project } from '@/app/lib/definitions';
import { projects } from '@/app/lib/data';
import { mono, inconsolata } from '@/app/ui/fonts';
import Link from 'next/link';

export function ProjectsCardGrid() {
    return (
        <div className="mt-2 flex flex-col gap-3">
            {projects.map((item: Project) => ProjectsCard(item))}
        </div>
    );
}

function ProjectsCard(item: Project) {
    return (
        <div
            className="m-auto w-full overflow-clip rounded p-6 shadow mx-4"
            key={item.title}
        >
            <div className="align-left relative flex flex-col gap-3 pb-3">
                <div className="z-10 flex grid grid-cols-2 flex-row">
                    <h1 className={`${mono.className}  text-left text-xl `}>
                        {item.title}
                    </h1>
                    <h1 className={`${mono.className}  text-right`}>
                        {item.location}
                    </h1>
                </div>
                <div className="z-10 flex grid grid-cols-2 flex-row">
                    <h1 className={`${inconsolata.className}  text-left text-xl`}>
                        {item.url ? <Link className="text-blue-600" href="https://movie-tracker-tau.vercel.app/?table=0&page=1&f=false">{item.subTitle}</Link>: item.subTitle}
                    </h1>
                    <h2 className={`${inconsolata.className}  text-right `}>
                        {item.timeline}
                    </h2>
                </div>
                <ul className="list-disc mx-4">
                    {item.description.map((point: string, idxk: number) => (
                        <li key={idxk} className={`px-5`}>
                            {point}
                        </li>
                    )
                    )}
                </ul>
            </div>
        </div>
    );
}