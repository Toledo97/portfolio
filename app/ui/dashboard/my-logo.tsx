import { CpuChipIcon } from '@heroicons/react/24/outline';
import { inconsolata } from '@/app/ui/fonts';

export default function MyLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-white`}
    >
      <CpuChipIcon className="h-12 w-12" />
      <p className={`${inconsolata.className} text-[30px] ml-2`}>Toledo</p>
    </div>
  );
}
