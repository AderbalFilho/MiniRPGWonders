"use client";
import { useState } from 'react';
import Image from "next/image";
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { Dialog, DialogPanel } from '@headlessui/react';

import Navbar from './subcomponents/Navbar';
import SocialMedia from './subcomponents/SocialMedia';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const productionPrefix = process.env.NODE_ENV === 'production' ? '/MiniRPGWonders/' : '';

  return (
    <header className="flex bg-yellow-200">
      <Navbar productionPrefix={productionPrefix} />
      <div className="flex justify-center m-2 w-full lg:w-[40%]">
        <Image
          src={`${productionPrefix}/minirpgwonders/logo.svg`}
          alt="MiniRPGWonders logo"
          width={50}
          height={50}
          priority
        />
      </div>
      <SocialMedia productionPrefix={productionPrefix} />

      <button onClick={() => setIsOpen(true)} className="flex absolute items-center right-4 top-6 lg:hidden">
        <Bars3Icon className="size-8 text-neutral-950" />
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen h-screen items-center justify-center bg-yellow-200">
          <DialogPanel className="max-w-lg space-y-4 p-12">
            <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
              <XMarkIcon className="size-8 text-neutral-950" />
            </button>
            <Navbar isModal={true} productionPrefix={productionPrefix} />
            <div className="absolute bottom-0 left-0 w-full border-t-1 border-t-yellow-400/70 justify-center items-center px-4 py-6">
              <SocialMedia isModal={true} productionPrefix={productionPrefix} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  )
}
