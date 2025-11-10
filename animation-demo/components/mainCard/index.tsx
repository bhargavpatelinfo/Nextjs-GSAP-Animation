import Image from 'next/image'
import React from 'react'

interface MainCardProps {
    mainCardRef: React.RefObject<HTMLDivElement>
    emailBarRef: React.RefObject<HTMLDivElement>
    spotifyBarRef: React.RefObject<HTMLDivElement>
    violetRef: React.RefObject<HTMLDivElement>
    inputRef: React.RefObject<HTMLInputElement>
    buttonRef: React.RefObject<HTMLButtonElement>
    appleMusicRef: React.RefObject<HTMLDivElement>
    imageRef: React.RefObject<HTMLDivElement>
    coverImageRef: React.RefObject<HTMLDivElement>
}

const MainCard = ({ mainCardRef, emailBarRef, spotifyBarRef, violetRef, inputRef, buttonRef, appleMusicRef, imageRef, coverImageRef }: MainCardProps) => {
    return (    
        <div className='w-[259.5px] relative'>
            <div
                ref={mainCardRef}
                className="card-content relative mt-6 w-full md:max-w-full  md:w-[206px]  rounded-3xl bg-white  block opacity-0 z-20  shadow-2xl "
                style={{
                    transform: 'scaleY(0)',
                    transformOrigin: 'center center',
                    transition: 'all 0.8s ease'
                }}
            >
<div className='relative overflow-hidden h-[192.77px] max-w-[207px] w-full rounded-t-xl'>
                <div className="relative w-full h-full"  ref={coverImageRef} style={{transform: "translateY(100%)", transformOrigin: "bottom" }}>
                    <Image
                        src="/images/sofi-tukker-image.png"
                        alt="artist"
                        className="w-full h-full"
                        width={207}
                        height={192.77}
                        
                    />
                    <span className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent'></span>
                    <div className="mt-3 absolute bottom-4 left-4">
                        <div className="text-[13px] text-white uppercase">Sofi Tukker</div>
                        <div className="text-[10px]  font-normal font-Outfit text-white">welcome to our bio link</div>
                    </div>
                </div>
    
</div>
                <div className="px-4 pb-4">
                    <div className="mt-3 space-y-3">
                        <div className='relative h-16 w-[257px]'>
                            <div
                                className="flex items-center justify-between gap-4 bg-white shadow-[10px_15px_40px_0_rgba(0,0,0,0.2)] rounded-l-[4px] h-full absolute top-0 left-0 right-0 z-10"
                                ref={emailBarRef}
                                style={{
                                    transform: 'scaleX(0)',
                                    transformOrigin: 'left center',
                                    opacity: 0,
                                    transition: 'transform 0.7s ease, opacity 0.5s ease'
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="absolute inset-0 bg-transparent outline-none text-base text-black  placeholder:text-[#878787] w-full block h-full px-4 z-20"
                                ref={inputRef}
                                style={{
                                    transform: "translateX(-20px)",
                                    transformOrigin: "left right",
                                    opacity: 0,
                                    transition: "transform 0.7s ease, opacity 0.5s ease",
                                }}
                            />
                            <button ref={buttonRef} style={{
                                opacity: 0
                            }} className="absolute left-full top-0 bg-black outline-none text-base text-white px-4 block h-full capitalize w-[110px] rounded-r-[4px] cursor-pointer">subscribe</button>
                        </div>
                        <div
                            className="flex items-center gap-8 bg-white  shadow-[10px_15px_40px_0_rgba(0,0,0,0.2)]  px-3  h-16   md:w-[367px]  rounded z-10 relative"
                            ref={spotifyBarRef}
                            style={{
                                transform: 'scaleX(0)',
                                transformOrigin: 'right center',
                                opacity: 0,
                                transition: 'transform 0.7s ease, opacity 0.5s ease'
                            }}
                        >
                            <Image src="/images/spotify.svg" alt="spotify" width={34} height={34} className='w-[24px] sm:w-[36px] h-[24px] h-[36px]' />
                            <div className="text-base text-black">Follow me on Spotify</div>
                        </div>
                        <div className="flex items-center gap-4 shadow-[0_1px_5px_0_rgba(0,0,0,0.2)] rounded-[2.72px] bg-[#f7f7f7] h-10 px-3 mt-4 relative z-20" ref={appleMusicRef} style={{ transform: 'scaleY(0)', transformOrigin: 'bottom', opacity: 0 }}>
                            <Image src="/images/apple.svg" alt="spotify" width={20} height={20} />
                            <div className="text-[10px] text-black">Follow us on apple music</div>
                        </div>
                    </div>

                    <div className="mt-3 overflow-hidden relative " >

                        <Image
                            src="/images/video.png"
                            alt="setting"
                            width={694}
                            height={549}
                            className="h-full w-full object-cover rounded-lg cursor-pointer"
                        />

                        <div className="absolute inset-0 w-full h-full bg-white " ref={imageRef} style={{
                            transform: 'scaleY(1)',
                            transformOrigin: 'top',
                        }}></div>
                    </div>
                </div>

            </div>
            <div
                ref={violetRef}
                className="absolute   left-[13.5px] top-30 w-[246px] h-[285px] bg-violet-500 block opacity-0  md:m-0"
                style={{
                    width: '0px',
                    overflow: 'hidden',
                    transformOrigin: 'left center'
                }}
            />

        </div>
    )
}

export default MainCard