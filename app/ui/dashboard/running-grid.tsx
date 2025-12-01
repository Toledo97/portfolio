'use client';

import {
    running
} from '@/app/lib/data';

import {
    RaceCard
} from '@/app/ui/dashboard/running-card'

import {
    RaceType
} from '@/app/lib/definitions';

export default function RunningGrid() {
    return (
        <div className="mt-2 flex w-full flex-col gap-3">
            {running["races"].map((item: RaceType, idx: number) => (
                <div key={idx}>{RaceCard(item)}</div>
            ))}
        </div>
    );
}