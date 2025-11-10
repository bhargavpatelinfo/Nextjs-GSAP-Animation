"use client"

import LinesDecor from '@/components/common/icon/linesDecorIcon'
import MainCard from '@/components/mainCard'
import SecondCard from '@/components/secondCard'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

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


  useEffect(() => {
    const animateViolet = () => {
      if (!violetRef.current) return
      violetRef.current.style.opacity = '1'
      violetRef.current.style.transition = 'all 0.8s ease'
      violetRef.current.style.width = '100%'
    }

    const showMainCard = () => {
      if (!mainCardRef.current) return
      mainCardRef.current.style.opacity = '1'
      mainCardRef.current.style.transform = 'scaleY(1) rotate(0deg)'
      mainCardRef.current.style.transition = 'transform 0.8s ease, opacity 0.8s ease'
    }

    const revealMainCardContent = () => {
      if (!mainCardRef.current) return
      const content = mainCardRef.current.querySelector('.card-content') as HTMLElement | null
      if (content) {
        content.style.opacity = '1'
        content.style.transform = 'translateY(0)'
        content.style.transition = 'all 0.8s ease'
      }
    }
    const animateButton = () => {
      if (!buttonRef.current) return
      buttonRef.current.style.opacity = '1'
      buttonRef.current.style.transition = 'all 0.8s ease'
    }
    const animateAppleMusic = () => {
      if (!appleMusicRef.current) return
      appleMusicRef.current.style.opacity = '1'
      appleMusicRef.current.style.transform = 'scaleY(1)'
      appleMusicRef.current.style.transition = 'transform 0.8s ease, opacity 0.8s ease'
    }
    const imageAnimation = () => {
      if (!imageRef.current) return
      imageRef.current.style.transform = 'scaleY(0)'
      imageRef.current.style.transition = 'transform 0.8s ease, opacity 0.8s ease'
    }
    const coverImageAnimation = () => {
      if (!coverImageRef.current) return
      coverImageRef.current.style.transform = 'translateY(0)'
      coverImageRef.current.style.transition = 'transform 0.4s  ease'
    }
    const secondCardCoverImageAnimation = () => {
      if (!secondCardCoverImageRef.current) return
      secondCardCoverImageRef.current.style.transform = 'translateY(0)'
      secondCardCoverImageRef.current.style.transition = 'transform 0.9s  ease'
    }

    const showSecondCard = () => {
      if (!secondCardRef.current) return
      secondCardRef.current.style.opacity = '1'
      secondCardRef.current.style.transform = 'scaleY(1) rotate(0deg)'
      secondCardRef.current.style.transition = 'transform 0.4s ease, opacity 0.4s ease'
    }

    const initSecondCardContent = () => {
      if (!secondCardRef.current) return
      const content = secondCardRef.current.querySelector('.card-content') as HTMLElement | null
      if (!content) return
      // init image (from bottom)
      const image = content.querySelector('img') as HTMLElement | null
      if (image) {
        image.style.transform = 'translateY(24px)'
        image.style.opacity = '0'
      }
      // init text groups to come from right
      const textGroups = content.querySelectorAll('.rtl-in, input, .text-xs, .text-lg')
      textGroups.forEach((el) => {
        const elem = el as HTMLElement
        elem.style.transform = 'translateX(40px)'
        elem.style.opacity = '0'
      })
    }

    const revealSecondCardContent = () => {
      if (!secondCardRef.current) return
      const content = secondCardRef.current.querySelector('.card-content') as HTMLElement | null
      if (content) {
        content.style.opacity = '1'
        content.style.transition = 'all 0.8s ease'
        const image = content.querySelector('img') as HTMLElement | null
        const textGroups = content.querySelectorAll('.rtl-in, input, .text-xs, .text-lg')

        if (image) {
          image.style.transform = 'translateY(0)'
          image.style.opacity = '1'
          image.style.transition = 'transform 0.8s ease, opacity 0.5s ease'
        }

        textGroups.forEach((el) => {
          const elem = el as HTMLElement
          elem.style.transform = 'translateX(0)'
          elem.style.opacity = '1'
          elem.style.transition = 'all 0.8s ease'
        })
      }
    }

    const animateEmailBar = () => {
      if (!emailBarRef.current) return
      emailBarRef.current.style.opacity = '1'
      emailBarRef.current.style.transform = 'scaleX(1)'
      emailBarRef.current.style.transition = 'transform 0.7s ease, opacity 0.5s ease'
    }

    const animateInput = () => {
      if (!inputRef.current) return
      inputRef.current.style.opacity = '1'
      inputRef.current.style.transform = 'translateX(0)'
      inputRef.current.style.transition = 'transform 0.5s ease, opacity 0.5s ease'
    }


    const animateSpotifyBar = () => {
      if (!spotifyBarRef.current) return
      spotifyBarRef.current.style.opacity = '1'
      spotifyBarRef.current.style.transform = 'scaleX(1)'
      spotifyBarRef.current.style.transition = 'transform 0.7s ease, opacity 0.5s ease'
    }

    const animateLinesDecor = () => {
      if (!linesDecorRef.current) return
      linesDecorRef.current.style.opacity = '1'
      linesDecorRef.current.style.transform = 'scaleX(1)'
      linesDecorRef.current.style.transition = 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease'
    }

    initSecondCardContent()

    setTimeout(() => {
      animateViolet()

      // After violet expand
      setTimeout(() => {
        showMainCard()


        setTimeout(() => {
          revealMainCardContent()
          coverImageAnimation()
          setTimeout(() => {
            if (emailBarRef.current) {
              const el = emailBarRef.current
              // show small width
              el.style.opacity = '1'
              el.style.transformOrigin = 'left center'
              el.style.transform = 'scaleX(0.35)'
              el.style.transition = 'transform 0.3s ease, opacity 0.25s ease'
              setTimeout(() => {
                // expand directly to 1.5
                el.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                el.style.transform = 'scaleX(1.5)'
                const toFullListener = () => {
                  // after reaching 1.5, show Spotify immediately
                  setTimeout(() => {
                    animateSpotifyBar()
                  }, 50)
                  animateInput()
                  animateButton()
                  animateAppleMusic()
                  imageAnimation()
                  // hold at 1.5 for 2 seconds, then settle to 1
                  setTimeout(() => {
                    el.style.transition = 'transform 0.32s ease'
                    el.style.transform = 'scaleX(1)'
                  }, 500)
                }
                el.addEventListener('transitionend', toFullListener, { once: true })
              }, 100)
            } else {
              // fallback if ref missing
              animateEmailBar()
              setTimeout(() => animateSpotifyBar(), 700)
            }

            // After bars animate, show second card
            setTimeout(() => {
              animateLinesDecor()
              secondCardCoverImageAnimation()
              animateLinesDecor()
              showSecondCard()
              // After second card appears
              setTimeout(() => {
                revealSecondCardContent()
              }, 600)
            }, 500)
          }, 150)
        }, 700)
      }, 800)
    }, 300)
  }, [])

  return (
    <main className="relative overflow-hidden bg-white pb-[50px] ">
      <div className="absolute inset-x-0 top-0 h-2 bg-black" />
      <section className="mx-auto w-[694px] max-w-[90%] py-24 md:py-32">
        <div ref={containerRef} className="relative h-[540px] flex items-start">
          <Image alt='vector' src="/images/vector.svg" width={188} height={265}
            className='relative left-[6%] top-[15%]  self-center'
            //  @ts-ignore
            ref={linesDecorRef}
            style={{
              transform: 'scaleX(0)',
              transformOrigin: 'right center',
              opacity: 0,
              transition: 'transform 0.7s ease, opacity 0.4s ease'
            }} />
          <SecondCard secondCardRef={secondCardRef} secondCardCoverImageRef={secondCardCoverImageRef} secondCardDetailsRef={secondCardDetailsRef}/>
          <MainCard mainCardRef={mainCardRef} inputRef={inputRef} buttonRef={buttonRef} emailBarRef={emailBarRef} spotifyBarRef={spotifyBarRef} violetRef={violetRef} appleMusicRef={appleMusicRef} imageRef={imageRef} coverImageRef={coverImageRef} />

        </div>

      </section>
    </main>

  )
}
