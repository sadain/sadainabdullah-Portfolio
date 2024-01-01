import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';

const SocialMedia = () => {
    return (
        <div className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0 z-10'>
            <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
                <div className='flex flex-col gap-4'>
                    <a href="https://github.com/sadain" target="_blank" rel="noreferrer noopener">
                        <span className='w-8 h-8 text-xl text-black inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300'><FiGithub /></span>
                    </a>
                    <a href="https://www.linkedin.com/in/sadainabdullah/" target="_blank" rel="noreferrer noopener">
                        <span className='w-8 h-8 text-xl text-black inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300'><FiLinkedin /></span>
                    </a>
                    <a href="https://www.instagram.com/san_seeker_pi/" target="_blank" rel="noreferrer noopener">
                        <span className='w-8 h-8 text-xl text-black inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300'><FiInstagram /></span>
                    </a>
                    <a href="https://twitter.com/sadain314" target="_blank" rel="noreferrer noopener">
                        <span className='w-8 h-8 text-xl text-black inline-flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300'><FiTwitter /></span>
                    </a>
                </div>
                <div className='w-[2px] h-32 bg-black'></div>
            </div>
        </div>
    )
}

export default SocialMedia;