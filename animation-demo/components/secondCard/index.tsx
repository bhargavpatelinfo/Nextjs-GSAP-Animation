import Image from "next/image";
import React from "react";

interface SecondCardProps {
  secondCardRef: React.RefObject<HTMLDivElement | null>;
  secondCardCoverImageRef: React.RefObject<HTMLDivElement | null>;
  secondCardDetailsRef: React.RefObject<HTMLDivElement | null>;
}

const streamingServices = [
  { src: "/images/deezer.png", name: "Deezer" },
  { src: "/images/spotify.svg", name: "Spotify" },
  { src: "/images/apple-music.svg", name: "Apple Music" },
  { src: "/images/youTube.svg", name: "Youtube" },
];

const SecondCard: React.FC<SecondCardProps> = ({ secondCardRef, secondCardCoverImageRef, secondCardDetailsRef }) => {
  return (
    <div className="relative -ml-[70px]">
      <div
        ref={secondCardRef}
        className="rounded-[11px] bg-lightWhite 
        overflow-hidden shadow-[8px_14px_31px_0_rgba(0,0,0,0.2)] absolute left-0 top-0 w-full h-full opacity-0
      "
      style={{
                    transform: 'scaleY(0)',
                    transformOrigin: 'center center',

                }}
      />
      <div
        className="card-content pb-[10.85px]"
      >
        <div className="overflow-hidden h-[183.68px] max-w-[196px] w-full rounded-t-[11px] relative">
          <div className="relative rounded-t-[11px] overflow-hidden  w-full h-full" ref={secondCardCoverImageRef} style={{ transform: "translateY(100%)", transformOrigin: "bottom" }}>
            <Image
              src="/images/emmy-meli.png" 
              alt="artist"
              className="w-full h-full rounded-t-[11px]"
              width={207}
              height={192.77}
            />
            <span className="absolute inset-0 bg-linear-to-t from-mainBlack via-mainBlack/50 to-transparent"></span>
            <div className="mt-3 absolute bottom-[28px] left-4">
              <div className="text-[9px] text-background ">Emmy Meli</div>
              <div className="text-[12px]  font-normal font-Outfit text-background">
                I am woman
              </div>
            </div>
          </div>

        </div>
        <div className=" -mt-[30px]" ref={secondCardDetailsRef} style={{ transform: "translateX(100%)", transformOrigin: "right" }}>
          <div className="mt-3 space-y-1.5 sm:space-y-[9.61px] pl-[15px]">
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
                className="rtl-in flex items-center gap-2 bg-lightWhite h-[30px] px-3 rounded-[2px] shadow-[0_1px_5px_0_rgba(0,0,0,0.2)]"
              >
                <Image
                  src={service.src}
                  alt={service.name}
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain object-center vertical-align-middle"
                />
                <div className="flex-1 text-[10px] text-mainBlack">{service.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
