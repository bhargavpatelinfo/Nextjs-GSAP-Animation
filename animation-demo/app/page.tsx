"use client"

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import MainCard from '@/components/mainCard'
import SecondCard from '@/components/secondCard'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null!)
  const mainCardRef = useRef<HTMLDivElement>(null!)
  const secondCardRef = useRef<HTMLDivElement>(null!)
  const inputRef = useRef<HTMLInputElement>(null!)
  const violetRef = useRef<HTMLDivElement>(null!)
  const emailBarRef = useRef<HTMLDivElement>(null!)
  const spotifyBarRef = useRef<HTMLDivElement>(null!)
  const linesDecorRef = useRef<HTMLDivElement>(null!)
  const buttonRef = useRef<HTMLButtonElement>(null!)
  const appleMusicRef = useRef<HTMLDivElement>(null!)
  const imageRef = useRef<HTMLDivElement>(null!)
  const coverImageRef = useRef<HTMLDivElement>(null!)
  const secondCardCoverImageRef = useRef<HTMLDivElement>(null!)
  const secondCardDetailsRef = useRef<HTMLDivElement>(null!)
  const spotifyBarDetailRef = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    gsap.set(violetRef.current, { width: 0, opacity: 0 })
    gsap.set(mainCardRef.current, { opacity: 0, scaleY: 0.2, })
    gsap.set(secondCardRef.current, { opacity: 0, scaleY: 0.2, })
    gsap.set(emailBarRef.current, { opacity: 0, scaleX: 0, transformOrigin: 'left center' })
    gsap.set(spotifyBarRef.current, { opacity: 0, x: 1, transformOrigin: 'right center' })
    gsap.set(linesDecorRef.current, { opacity: 0, scaleX: 0, transformOrigin: 'right center' })
    gsap.set(spotifyBarDetailRef.current, { opacity: 0, x: 80 })
    gsap.set(appleMusicRef.current, { opacity: 0, scaleY: 0, transformOrigin: 'bottom center' })
    gsap.set(buttonRef.current, { opacity: 0 })
    gsap.set(inputRef.current, { opacity: 0, x: 40 })
    gsap.set(imageRef.current, { scaleY: 1, transformOrigin: 'top center' })
    gsap.set(coverImageRef.current, { y: 200 })
    gsap.set(secondCardCoverImageRef.current, { y: 250 })
    gsap.set(secondCardDetailsRef.current, { x: 40, opacity: 0 })

    tl.to(violetRef.current, { width: '100%', opacity: 1, duration: 0.2 })
      .to(mainCardRef.current, { opacity: 1, scaleY: 1, duration: 0.1 }, "+=0.1")
      .to(mainCardRef.current.querySelector('.card-content'), {
        opacity: 1,
        y: 0,
        duration: 0.1
      }, "-=0.2")
      .to(coverImageRef.current, { y: 0 }, "+=0.6")
      .to(emailBarRef.current, {
        opacity: 1,
        scaleX: 0.35,
        duration: 0.3,
        ease: 'power1.out'
      }, 'showEmailBar-=0.5')
      .to(emailBarRef.current, {
        scaleX: 1.5,
        duration: 0.2,
        ease: 'back.out(1.7)',
        onComplete: () => {
          gsap.to(emailBarRef.current, { scaleX: 1, duration: 0.32, delay: 0.5 })
        }
      })
      .addLabel('showInputs', "-=0.05")
      .to(spotifyBarRef.current, {
        opacity: 1,
        scaleX: 1,
        ease: 'power2.out'
      }, 'showInputs+=0.1')
      .to(spotifyBarDetailRef.current, {
        opacity: 1,
        x: 1,
        ease: 'power2.out'
      }, 'showInputs-=0.2')
      .to(inputRef.current, {
        opacity: 1,
        x: 1,
        duration: 0.1,
        ease: 'power2.out'
      }, 'showInputs-=0.3')
      .to(buttonRef.current, {
        opacity: 1,
        duration: 0.1,
        ease: 'power1.out'
      }, 'showInputs+=0.5')
      .to(appleMusicRef.current, {
        opacity: 1,
        scaleY: 1,
        ease: 'power2.out'
      }, 'showInputs+=0.25')
      .to(imageRef.current, { scaleY: 0, duration: 0.2, ease: 'power2.inOut' }, 'showInputs+=0.2')
      .to(secondCardRef.current, { opacity: 1, scaleY: 1, duration: 0.1 }, "-=0.8")
      .to(secondCardCoverImageRef.current, { y: 0, duration: 0.5 }, "-=0.2")
      .to(secondCardDetailsRef.current, { x: 0, opacity: 1, duration: 0.1 }, "-=0.2")
      .to(linesDecorRef.current, {
        opacity: 1,
        scaleX: 1,
        duration: 0.2,
        ease: 'expo.out'
      })
      .call(() => {
        const content = secondCardRef.current.querySelector('.card-content') as HTMLElement | null
        if (content) {
          gsap.to(content.querySelectorAll('img, .rtl-in, input, .text-xs, .text-lg'), {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1
          })
        }
      })
  }, { scope: containerRef })

  return (
    <main className="relative overflow-hidden bg-background pb-[50px]">
      <div className="absolute inset-x-0 top-0 h-2 bg-mainBlack" />
      <section className="mx-auto w-[694px] max-w-[90%] py-24 md:py-32">
        <div ref={containerRef} className="relative h-[540px] flex items-start">
          <Image
            alt="vector"
            src="/images/vector.svg"
            width={188}
            height={265}
            className="relative self-center -mt-20"
            ref={linesDecorRef as any}
            style={{
              transformOrigin: 'right center',
              transform: 'scaleX(0)',
              opacity: 0
            }}
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