import Image from 'next/image'
import React from 'react'

interface SecondCardProps {
  secondCardRef: React.RefObject<HTMLDivElement>
}

const streamingServices = [
  { src: '/images/spotify.svg', name: 'Spotify' },
  { src: '/images/apple.svg', name: 'Apple Music' },
  { src: '/images/spotify.svg', name: 'Spotify' },
  { src: '/images/apple.svg', name: 'Apple Music' },
  { src: '/images/spotify.svg', name: 'Spotify' },
  { src: '/images/apple.svg', name: 'Apple Music' },
]

const SecondCard: React.FC<SecondCardProps> = ({ secondCardRef }) => {
  return (
    <div
      ref={secondCardRef}
      className="
        md:absolute md:left-20 w-full max-w-[190px] sm:max-w-[240px] md:max-w-full 
        md:w-[280px] h-[400px] sm:h-[440px] rounded-3xl bg-white shadow-2xl 
        overflow-hidden opacity-0 z-10 -mt-[50%] ml-4 em:ml-24 sm:ml-36 md:m-0
      "
      style={{
        transform: 'scaleY(0)',
        transformOrigin: 'center center',
        transition: 'all 0.8s ease',
      }}
    >
      <div
        className="card-content pb-4 opacity-0"
        style={{ transition: 'all 0.8s ease' }}
      >
        {/* Cover Image */}
        <div className="relative h-[140px] sm:h-48 w-full overflow-hidden rounded-t-xl">
          <img
            src="https://picsum.photos/id/1041/1200/800"
            alt="cover"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Card Details */}
        <div className="px-4 -mt-[90px] relative z-10">
          <div className="mt-3">
            <div className="text-[10px] sm:text-xs text-white">mxmtoon</div>
            <div className="text-sm sm:text-lg font-semibold">Mona Lisa</div>
          </div>

          {/* Interactive Options */}
          <div className="mt-3 space-y-1.5 sm:space-y-3">
            {/* Email Input */}
            <div className="rtl-in flex items-center gap-2 bg-white h-10 px-3 shadow-[0_.1em_.6em_rgb(0_0_0_/_20%)]">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent outline-none text-[10px] text-black placeholder:text-[10px] placeholder:text-gray-400 w-full"
              />
            </div>

            {/* Streaming Services */}
            {streamingServices.map((service, i) => (
              <div
                key={i}
                className="rtl-in flex items-center gap-2 bg-white h-10 px-3 shadow-[0_.1em_.6em_rgb(0_0_0_/_20%)]"
              >
                <Image
                  src={service.src}
                  alt={service.name}
                  width={18}
                  height={18}
                  className="w-[12px] sm:w-[18px] h-[12px] sm:h-[18px]"
                />
                <div className="text-[10px] text-black">{service.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondCard
