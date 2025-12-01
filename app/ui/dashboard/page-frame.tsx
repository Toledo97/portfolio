import { mono } from '@/app/ui/fonts';
import { BasicPageProps } from '@/app/lib/definitions';

export default function PageFrame({ title, children }: BasicPageProps) {
    return (
        <div className="flex flex-wrap gap-4 align-left">
            <h1 className={`${mono.className} text-3xl`}>{title}</h1>
            {children}
        </div>
    )
}