"use client"
import Image from "next/image"
import SecondCard from "../../secondCard"
import MainCard from "../../mainCard"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"

export const HomeHeroSection = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const mainCardRef = useRef<HTMLDivElement | null>(null);
    const secondCardRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const violetRef = useRef<HTMLDivElement | null>(null);
    const emailBarRef = useRef<HTMLDivElement | null>(null);
    const spotifyBarRef = useRef<HTMLDivElement | null>(null);
    const linesDecorRef = useRef<HTMLImageElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const appleMusicRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);
    const coverImageRef = useRef<HTMLDivElement | null>(null);
    const secondCardCoverImageRef = useRef<HTMLDivElement | null>(null);
    const secondCardDetailsRef = useRef<HTMLDivElement | null>(null);
    const spotifyBarDetailRef = useRef<HTMLDivElement | null>(null);
    const orangeBackgroundRef = useRef<HTMLDivElement | null>(null);


    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        gsap.set(violetRef.current, { width: 0, opacity: 0 });
        gsap.set(mainCardRef.current, { opacity: 0, scaleY: 0.2 });
        gsap.set(secondCardRef.current, { opacity: 0, scaleY: 0.2 });
        gsap.set(emailBarRef.current, { opacity: 0, scaleX: 0, transformOrigin: "left" });
        gsap.set(spotifyBarRef.current, { opacity: 0, x: 1, transformOrigin: "right" });
        gsap.set(linesDecorRef.current, { opacity: 0, x: "100%", transformOrigin: "right center" });
        gsap.set(spotifyBarDetailRef.current, { opacity: 0, x: 80 });
        gsap.set(appleMusicRef.current, { opacity: 0, scaleY: 0, transformOrigin: "bottom center" });
        gsap.set(buttonRef.current, { opacity: 0 });
        gsap.set(inputRef.current, { opacity: 0, x: 40 });
        gsap.set(imageRef.current, { scaleY: 1, transformOrigin: "top center" });
        gsap.set(coverImageRef.current, { y: 200 });
        gsap.set(secondCardCoverImageRef.current, { y: 250 });
        gsap.set(secondCardDetailsRef.current, { x: 40, opacity: 0 });
        gsap.set(orangeBackgroundRef.current, { opacity: 0 });
        gsap.to(coverImageRef.current, {
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.8
        });
        tl.to(violetRef.current, { width: "100%", opacity: 1, duration: 0.5 })
            .to(
                mainCardRef.current,
                { opacity: 1, scaleY: 1, duration: 0.1 },
                "-=0.2"
            )
            .to((mainCardRef.current as HTMLElement).querySelector(".card-content"), {
                opacity: 1,
                y: 0,
                duration: 0.1,
            })
            .to(
                linesDecorRef.current,
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    delay: 0.4,
                    ease: "power2.out",
                },
                "-=0.3"
            )
            .to(
                secondCardRef.current,
                { opacity: 1, scaleY: 1, duration: 0.4 },
                "-=0.6"
            )
            .addLabel("syncEmailAndCover")
            .to(
                emailBarRef.current,
                {
                    opacity: 1,
                    scaleX: 1,
                    duration: 0.3,
                },
                "syncEmailAndCover"
            )
            .to(
                secondCardCoverImageRef.current,
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out",
                },
                "syncEmailAndCover"
            )
            .to(
                secondCardDetailsRef.current,
                {
                    y: 0,
                    opacity: 1,
                    x: 0,
                    duration: 0.3,
                },
                "syncEmailAndCover+=0.3"
            )

            .to(emailBarRef.current, {
                scaleX: 1.5,
                duration: 0.1,
                onComplete: () => {
                    gsap.to(emailBarRef.current, {
                        scaleX: 1,
                    });
                },
            }, "syncEmailAndCover+=0.2")
            .to(
                buttonRef.current,
                {
                    opacity: 1,
                    ease: "power1.out",
                }, "syncEmailAndCover+=0.5")
            .to(
                spotifyBarRef.current,
                {
                    opacity: 1,
                    scaleX: 1,
                    duration: 0.8,
                    ease: "power2.out",
                }, "syncEmailAndCover+=0.5")
            .to(
                spotifyBarDetailRef.current,
                {
                    opacity: 1,
                    x: 1,
                    duration: 1,
                    ease: "power2.out",
                }, "syncEmailAndCover-=0.5")
            .to(
                inputRef.current,
                {
                    opacity: 1,
                    x: 1,
                    duration: 0.5,
                    ease: "power2.out",
                }
                , "syncEmailAndCover+=0.5")
            .to(
                appleMusicRef.current,
                {
                    opacity: 1,
                    scaleY: 1,
                    duration: 0.2,
                    ease: "power2.out",
                }
                , "syncEmailAndCover+=0.6")
            .to(
                imageRef.current,
                { scaleY: 0, duration: 0.4, ease: "power2.inOut" },
                "syncEmailAndCover+=0.4")
            .to(
                orangeBackgroundRef.current,
                { opacity: 1, duration: 0.4, ease: "power2.inOut" },
                "syncEmailAndCover+=0.8")
            .call(() => {
                const content = (secondCardRef.current as HTMLElement).querySelector(".card-content") as HTMLElement | null;
                if (content) {
                    gsap.to(
                        content.querySelectorAll("img, .rtl-in, input, .text-xs, .text-lg"),
                        {
                            x: 0,
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            stagger: 0.1,
                        }
                    );
                }
            });
    },
        { scope: containerRef });

    return (
        <section className="relative overflow-hidden bg-background pb-[50px]">
            <div className="mx-auto sm:w-[705px] sm:ax-w-[90%] py-12 em:py-24 md:py-32">
                <div ref={containerRef} className="relative h-[540px] flex items-start z-10">
                    <Image
                        alt="vector"
                        src="/images/vector.svg"
                        width={188}
                        height={265}
                        className="relative self-end order-1 sm:-order-1 sm:self-start mb-0 lsm:-mb-[80px] sm:mb-0 -ml-28 lsm:-ml-[160px] sm:ml-0 sm:mt-[89px] h-[190px] lsm:h-[265px] sm:h-[130px] md:h-[188px] w-[130px] md:w-[265px] transition-[transform_0.5s_ease,opacity_0.8s_ease-in-out]  sm:translate-x-full opacity-0"
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

                    <div ref={orangeBackgroundRef} className="w-[175px] h-[175px] opacity-0 bg-linear-[219deg] from-[rgba(255,82,98,1)] to-[rgba(255,82,98,0)]   blur-lg absolute bottom-[100px] left-[140px] md:left-[250px] -z-10 rotate-45 sm:block hidden"></div>
                </div>

            </div>
        </section>
    )
}