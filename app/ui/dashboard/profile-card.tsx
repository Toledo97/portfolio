'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';
import { mono, inconsolata } from '@/app/ui/fonts';
import BasicModal from '@/app/ui/dashboard/my-modal';
import { EnvelopeIcon, LinkIcon, UserIcon } from '@heroicons/react/24/outline';

const links = [
  { name: 'Email', href: 'mailto:toledojr7@hotmail.com', icon: EnvelopeIcon },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/carlos-a-toledo-jr-10a998156/',
    icon: LinkIcon,
  },
];

export default function ProfileCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const MyModal = React.forwardRef(() => <BasicModal />);
  MyModal.displayName = 'Contact Modal';

  return (
    <div className="m-auto w-80 overflow-clip rounded shadow">
      <div className="relative flex aspect-square w-full flex-col items-center justify-center pb-3">
        <div className="mx-3 mb-2 mt-5 aspect-square overflow-clip rounded-full">
          <Image
            alt=""
            src="/images/me.png"
            className="h-auto w-auto rounded-full"
            priority
            width={190}
            height={0}
          />
        </div>
        <div className="z-10 flex w-full flex-col items-center justify-center">
          <h1 className={`${mono.className} inline-block text-2xl`}>
            Carlos A Toledo Jr
          </h1>
          <h2 className={`${inconsolata.className} inline-block text-xl`}>
            Computer Engineering @ UIUC
          </h2>
        </div>
        <div className="z-10 mt-2 flex flex-row items-center justify-center">
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
                    }
                  >
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
            <MyModal />
          </Modal>
        </div>
      </div>
    </div>
  );
}