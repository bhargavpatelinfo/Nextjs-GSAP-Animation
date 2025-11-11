"use client"

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import MainCard from '@/components/mainCard'
import SecondCard from '@/components/secondCard'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null!);
  const mainCardRef = useRef<HTMLDivElement>(null!);
  const secondCardRef = useRef<HTMLDivElement>(null!);
  const inputRef = useRef<HTMLInputElement>(null!);
  const violetRef = useRef<HTMLDivElement>(null!);
  const emailBarRef = useRef<HTMLDivElement>(null!);
  const spotifyBarRef = useRef<HTMLDivElement>(null!);
  const linesDecorRef = useRef<HTMLImageElement>(null!);
  const buttonRef = useRef<HTMLButtonElement>(null!);
  const appleMusicRef = useRef<HTMLDivElement>(null!);
  const imageRef = useRef<HTMLDivElement>(null!);
  const coverImageRef = useRef<HTMLDivElement>(null!);
  const secondCardCoverImageRef = useRef<HTMLDivElement>(null!);
  const secondCardDetailsRef = useRef<HTMLDivElement>(null!);
  const spotifyBarDetailRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    gsap.set(violetRef.current, { width: 0, opacity: 0 });
    gsap.set(mainCardRef.current, { opacity: 0, scaleY: 0.01 });
    gsap.set(secondCardRef.current, { opacity: 0, scaleY: 0.01, transformOrigin: "center center" });
    gsap.set(emailBarRef.current, { opacity: 0, scaleX: 0, transformOrigin: "left center" });
    gsap.set(spotifyBarRef.current, { opacity: 0, x: 1, transformOrigin: "right center" });
    gsap.set(linesDecorRef.current, { opacity: 0, x: "10%" });
    gsap.set(spotifyBarDetailRef.current, { opacity: 0, x: 80 });
    gsap.set(appleMusicRef.current, { opacity: 0, scaleY: 0, transformOrigin: "bottom center" });
    gsap.set(buttonRef.current, { opacity: 0 });
    gsap.set(inputRef.current, { opacity: 0, x: 40 });
    gsap.set(imageRef.current, { scaleY: 1, transformOrigin: "top center" });
    gsap.set(coverImageRef.current, { y: 200 });
    gsap.set(secondCardCoverImageRef.current, { y: 250 });
    gsap.set(secondCardDetailsRef.current, { x: 40, opacity: 0 });



    tl.to(violetRef.current, { width: "100%", opacity: 1, duration: 0.5 })
      .to(
        mainCardRef.current,
        { opacity: 1, scaleY: 1, duration: 0.1 },
        "-=0.2"
      )
      .to(coverImageRef.current, {
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5
      }, "-=0.4")
      .to(
        secondCardRef.current,
        { opacity: 1, scaleY: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      .to(
        linesDecorRef.current,
        {
          opacity: 1,
          duration: 1,
          x: "0%",
        },
        "-=0.6"
      )





    // .to(mainCardRef.current.querySelector(".card-content"), {
    //   opacity: 1,
    //   y: 0,
    //   duration: 0.1,
    // })
    // .to(
    //   linesDecorRef.current,
    //   {
    //     opacity: 1,
    //     x: 0,
    //     duration: 0.5,
    //     delay: 0.4,
    //     ease: "linear",
    //   },
    //   "-=0.3"
    // )
    // .to(
    //   secondCardRef.current,
    //   { opacity: 1, scaleY: 1, duration: 0.1 },
    //   "-=0.6"
    // )
    // .to(
    //   emailBarRef.current,
    //   {
    //     opacity: 1,
    //     scaleX: 1,
    //   },

    // )
    // .to(emailBarRef.current, {
    //   scaleX: 1.5,
    //   ease: "power2.out",
    //   onComplete: () => {
    //     gsap.to(emailBarRef.current, {
    //       scaleX: 1,
    //       delay: 0.1,
    //     });
    //   },
    // }, "-=0.4")
    //  .to(
    //   buttonRef.current,
    //   {
    //     opacity: 1,
    //     duration: 0.1,
    //     ease: "power1.out",
    //   },
    //   "showInputs-=0.2"
    // )
    // .to(
    //   [secondCardCoverImageRef.current, secondCardDetailsRef.current],
    //   {
    //     y: 0,
    //     opacity: 1,
    //     x: 0,
    //     duration: 0.5,
    //   },
    //   "-=0.3"
    // )
    // .addLabel("showInputs", "-=0.05")
    // .to(
    //   spotifyBarRef.current,
    //   {
    //     opacity: 1,
    //     scaleX: 1,
    //     ease: "power2.out",
    //   },
    //   "showInputs+=0.1"
    // )
    // .to(
    //   spotifyBarDetailRef.current,
    //   {
    //     opacity: 1,
    //     x: 1,
    //     ease: "power2.out",
    //   },
    //   "showInputs-=0.2"
    // )
    // .to(
    //   inputRef.current,
    //   {
    //     opacity: 1,
    //     x: 1,
    //     duration: 0.1,
    //     ease: "power2.out",
    //   },
    //   "showInputs-=0.3"
    // )

    // .to(
    //   appleMusicRef.current,
    //   {
    //     opacity: 1,
    //     scaleY: 1,
    //     ease: "power2.out",
    //   },
    //   "showInputs+=0.25"
    // )
    // .to(
    //   imageRef.current,
    //   { scaleY: 0, duration: 0.2, ease: "power2.inOut" },
    //   "showInputs+=0.2"
    // )

    // .call(() => {
    //   const content = secondCardRef.current.querySelector(".card-content") as HTMLElement | null;
    //   if (content) {
    //     gsap.to(
    //       content.querySelectorAll("img, .rtl-in, input, .text-xs, .text-lg"),
    //       {
    //         x: 0,
    //         y: 0,
    //         opacity: 1,
    //         duration: 0.8,
    //         stagger: 0.1,
    //       }
    //     );
    //   }
    // });
  },
    { scope: containerRef });

  return (
    <main className="relative overflow-hidden bg-background pb-[50px]">
      <div className="absolute inset-x-0 top-0 h-2 bg-mainBlack" />
      <section className="mx-auto w-[705px] max-w-[90%] py-24 md:py-32">
        <div ref={containerRef} className="relative h-[540px] flex items-start">
          <Image
            alt="vector"
            src="/images/vector.svg"
            width={188}
            height={265}
            className="relative self-start mt-[89px] h-[188px] w-[265px] transition-[transform_0.5s_ease,opacity_0.8s_ease-in-out] "
            ref={linesDecorRef}

          />
          <SecondCard
            secondCardRef={secondCardRef}
            secondCardCoverImageRef={secondCardCoverImageRef}
            secondCardDetailsRef={secondCardDetailsRef}
          />
          <MainCard
            mainCardRef={mainCardRef}
            inputRef={inputRef}
            buttonRef={buttonRef}
            emailBarRef={emailBarRef}
            spotifyBarRef={spotifyBarRef}
            violetRef={violetRef}
            appleMusicRef={appleMusicRef}
            imageRef={imageRef}
            coverImageRef={coverImageRef}
            spotifyBarDetailRef={spotifyBarDetailRef}
          />
        </div>
      </section>
    </main>
  )
}