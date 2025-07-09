'use client';

import { DefaultCard } from '@/app/ui/dashboard/my-cards';
import { Entity } from '@/app/lib/definitions';
import { activities } from '@/app/lib/data';

export default function ActivitiesCardGrid() {
    return (
        <div className="mt-2 flex flex-col gap-3">
            {activities.map((item: Entity, idxj: number) => (
                <div key={idxj}>
                    {DefaultCard(item.imageData, item.roles, item.subTitle)}
                </div>
            ))}
        </div>
    );
}

