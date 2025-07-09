'use client';

import { DefaultCard } from '@/app/ui/dashboard/my-cards';
import { Entity } from '@/app/lib/definitions';
import { companies } from '@/app/lib/data';


export default function CompanyCardGrid() {
  return (
    <div className="mt-2 flex flex-col gap-3">
      {companies.map((item: Entity) =>  (
          <div key={item.imageData.alt}>
            {DefaultCard(item.imageData, item.roles, item.location)}
          </div>
        ))}
    </div>
  );
}