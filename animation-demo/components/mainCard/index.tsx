import Image from 'next/image'
import React from 'react'

interface MainCardProps {
    mainCardRef: React.RefObject<HTMLDivElement>
    emailBarRef: React.RefObject<HTMLDivElement>
    spotifyBarRef: React.RefObject<HTMLDivElement>
}

const MainCard = ({ mainCardRef, emailBarRef, spotifyBarRef }: MainCardProps) => {
    return (
        <div
            ref={mainCardRef}
            className="card-content relative md:absolute md:right-40 md:top-8 w-full md:max-w-full  md:w-[207px] h-[480px] em:h-[570px] rounded-3xl bg-white  block opacity-0 z-20 ml-auto mr-8 esm:mr-12 em:mr-20 sm:mr-28 md:m-0 shadow-2xl "
            style={{
                transform: 'scaleY(0)',
                transformOrigin: 'center center',
                transition: 'all 0.8s ease'
            }}
        >
        
                <div className="relative overflow-hidden h-[192.77px] max-w-[207px] w-full rounded-t-xl">
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
                <div className="px-4">
                    <div className="mt-3 space-y-2">
                        <div
                            className="flex items-center justify-between gap-4 bg-gray-100 shadow h-10  pl-3 absolute w-[220px] em:w-[240px] sm:w-[280px] md:w-[352px] top-[32%] em:top-[35%] py-6 em:py-8"
                            ref={emailBarRef}
                            style={{
                                transform: 'scaleX(0)',
                                transformOrigin: 'left center',
                                opacity: 0,
                                transition: 'transform 0.7s ease, opacity 0.5s ease'
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Enter your Email"
                                className="bg-transparent outline-none text-lg text-black placeholder:text-base sm:placeholder:text-xl placeholder:text-gray-400 w-full py-6 em:py-8 block h-full"
                            />
                        </div>
                        <div
                            className="flex items-center gap-4 bg-gray-100 shadow h-10 px-3 absolute   w-[230px]  em:w-[260px] sm:w-[320px] md:w-[400px] top-[45%] em:top-[50%] rounded-sm py-6 em:py-8"
                            ref={spotifyBarRef}
                            style={{
                                transform: 'scaleX(0)',
                                transformOrigin: 'right center',
                                opacity: 0,
                                transition: 'transform 0.7s ease, opacity 0.5s ease'
                            }}
                        >
                            <Image src="/images/spotify.svg" alt="spotify" width={36} height={36} className='w-[24px] sm:w-[36px] h-[24px] h-[36px]' />
                            <div className="text-sm sm:text-base text-black">Follow me on Spotify</div>
                        </div>
                        <div className="flex items-center gap-4 bg-gray-100 shadow h-10 px-3 mt-35 em:mt-48">
                            <Image src="/images/apple.svg" alt="spotify" width={18} height={18} />
                            <div className="text-[10px] text-black">Apple Music</div>
                        </div>
                    </div>

                    <div className="mt-3 overflow-hidden relative rounded-lg">
                        <img
                            src="https://picsum.photos/id/1025/1200/800"
                            alt="video thumb"
                            className="h-32 w-full rounded-lg object-cover"
                            loading="lazy"
                        />
                        <Image
                            src="/images/play.svg"
                            alt="setting"
                            width={24}
                            height={24}
                            className="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
                        <div className="flex items-center gap-3 absolute top-2 left-2">
                            <div className="rounded-full overflow-hidden flex-shrink-0">
                                <Image src="/images/avatar.jpg" alt="channel logo" width={18} height={18} className="rounded-full object-cover" />
                            </div>
                            <div className="text-white text-[10px] font-medium">
                                Father John Misty - Mr. Tillman
                            </div>
                        </div>
                    </div>
                </div>
         
        </div>
    )
}

export default MainCard