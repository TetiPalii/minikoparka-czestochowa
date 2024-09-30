"use client"

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import Stairs from './Stairs';

export default function StairTransition() {
    const pathName = usePathname();
    return <>
        <AnimatePresence mode='wait'>
            <div key={pathName}>
                <div className='h-screen w-screen fixed top-0 left-0 right-0 z-40 pointer-events-none flex'>
                    <Stairs />
                </div>
            </div>
        </AnimatePresence>
    </>
}