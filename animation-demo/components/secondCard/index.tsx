import Image from "next/image";
import React from "react";

interface SecondCardProps {
  secondCardRef: React.RefObject<HTMLDivElement>;
}

const streamingServices = [
  { src: "/images/deezer.svg", name: "Deezer" },
  { src: "/images/spotify.svg", name: "Spotify" },
  { src: "/images/apple-music.svg", name: "Apple Music" },
  { src: "/images/youTube.svg", name: "Youtube" },
];

const SecondCard: React.FC<SecondCardProps> = ({ secondCardRef }) => {
  return (
    <div
      ref={secondCardRef}
      className="
        md:absolute w-full left-[28%]  md:max-w-full 
        md:w-[196.3px] h-[425.89px] rounded-3xl bg-white 
        overflow-hidden opacity-0 z-10 -mt-[50%] ml-4 em:ml-24 sm:ml-36 md:m-0

      "
      style={{
        transform: "scaleY(0)",
        transformOrigin: "center center",
        transition: "all 0.8s ease",
      }}
    >
      <div
        className="card-content pb-4 opacity-0 "
        style={{ transition: "all 0.8s ease" }}
      >
        {/* Cover Image */}
        <div className="relative overflow-hidden h-[183.68px] max-w-[196px] w-full rounded-t-lg">
          <Image
            src="/images/emmy-meli.png"
            alt="artist"
            className="w-full h-full"
            width={207}
            height={192.77}
          />
          <span className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></span>
          <div className="mt-3 absolute bottom-[15%] left-4">
            <div className="text-[9px] text-white ">Emmy Meli</div>
            <div className="text-[12px]  font-normal font-Outfit text-white">
              I am woman
            </div>
          </div>
        </div>

        {/* Card Details */}
        <div className=" -translate-y-[14%] ">
          {/* Interactive Options */}
          <div className="mt-3 space-y-1.5 sm:space-y-3 translate-x-4 shadow">
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
  );
};

export default SecondCard;
