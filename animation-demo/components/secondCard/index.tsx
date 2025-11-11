import Image from "next/image";
import React from "react";

interface SecondCardProps {
  secondCardRef: React.RefObject<HTMLDivElement | null>;
  secondCardCoverImageRef: React.RefObject<HTMLDivElement | null>;
  secondCardDetailsRef: React.RefObject<HTMLDivElement | null>;
}

const streamingServices = [
  { src: "/images/deezer.svg", name: "Deezer" },
  { src: "/images/spotify.svg", name: "Spotify" },
  { src: "/images/apple-music.svg", name: "Apple Music" },
  { src: "/images/youTube.svg", name: "Youtube" },
];

const SecondCard: React.FC<SecondCardProps> = ({ secondCardRef, secondCardCoverImageRef, secondCardDetailsRef }) => {
  return (
    <div className="relative -mr-12">
      <div
        ref={secondCardRef}
        className=" rounded-lg bg-lightWhite 
        overflow-hidden shadow absolute left-0 top-0 w-full h-full opacity-0
      "
        style={{
          transform: 'scaleY(0)',
          transformOrigin: 'center center',
          transition: 'all 0.8s ease'
        }}
      />
      <div
        className="card-content pb-4"
      >
        <div className="overflow-hidden h-[183.68px] max-w-[196px] w-full rounded-t-lg relative">
          <div className="relative rounded-t-lg overflow-hidden  w-full h-full" ref={secondCardCoverImageRef} style={{ transform: "translateY(100%)", transformOrigin: "bottom" }}>
            <Image
              src="/images/emmy-meli.png"
              alt="artist"
              className="w-full h-full rounded-t-lg"
              width={207}
              height={192.77}
            />
            <span className="absolute inset-0 bg-linear-to-t from-mainBlack via-mainBlack/50 to-transparent"></span>
            <div className="mt-3 absolute bottom-[20%] left-4">
              <div className="text-[9px] text-background ">Emmy Meli</div>
              <div className="text-[12px]  font-normal font-Outfit text-background">
                I am woman
              </div>
            </div>
          </div>

        </div>
        <div className=" -mt-[14%] " ref={secondCardDetailsRef} style={{ transform: "translateX(100%)", transformOrigin: "right", opacity: "0" }}>
          <div className="mt-3 space-y-1.5 sm:space-y-3 translate-x-4">
            <div className="rtl-in flex items-center gap-2 bg-background h-[30px] px-3 rounded-[2px] shadow-[0_1px_5px_0_rgba(0,0,0,0.2)]">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent outline-none text-[9px] text-mainBlack  placeholder:text-[#878787] w-full"
              />
            </div>

            {streamingServices.map((service, i) => (
              <div
                key={i}
                className="rtl-in flex items-center gap-2 bg-background h-[30px] px-3 rounded-[2px] shadow-[0_1px_5px_0_rgba(0,0,0,0.2)]"
              >
                <Image
                  src={service.src}
                  alt={service.name}
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                <div className="text-[10px] text-mainBlack">{service.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
