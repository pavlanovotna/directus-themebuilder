import { useEffect, useState } from 'react'
import { SketchPicker } from 'react-color'
import { execSync } from 'child_process'

import { BiStar } from 'react-icons/bi'

import * as shade from '@/resources/shade'

import Footer from '@/components/Footer'
import Splash from '@/components/Splash'
import Content from '@/components/Content'

export default function Index({ git }: any) {
  const [hex, setHex] = useState('#6644FF')
  const [hexText, setHexText] = useState('#6644FF')
  const [content, setContent] = useState('')

  // Interface element states.
  const [showPicker, setShowPicker] = useState<boolean>(false)

  // Stargazers states.
  const [stars, setStars] = useState<number>(0)
  const [stargazers, setStargazers] = useState<any>([])

  // Contributors states.
  const [contributors, setContributors] = useState<any>([])

  // Dynamically change the theme based on the hex.
  const borderHover = {
    in: (obj: any) => obj.style.borderColor = hex,
    out: (obj: any) => obj.style.borderColor = '#d4d4d4'
  }

  useEffect(() => {
    // Ensure hex starts with a "#".
    !hex.startsWith('#') && setHex('#' + hex)

    // Ensures that any given hex color can be seen infront of a white background.
    // -->> Implementation by https://github.com/vanling - Thanks!
    setHexText(shade.contrast(hex, hex, '#000'))

    // Update the css object.
    setContent(shade.wrap(hex))
  }, [hex])

  useEffect(() => {
    // Fetch stars from github repo.
    fetch('https://api.github.com/repos/ThijmenGThN/directus-themebuilder').then((raw: any) => raw.json().then((res: any) => setStars(res.stargazers_count)))
    // Fetch contributors from github repo.
    fetch('https://api.github.com/repos/ThijmenGThN/directus-themebuilder/contributors').then((raw: any) => raw.json().then((res: any) => {
      setContributors(
        res.filter(({ login }: { login: string }) => login != "ThijmenGThN") // Having this project as a repo of mine is enough credit for me :)
      )
    }))
    // Fetch stargazers from github repo.
    fetch('https://api.github.com/repos/ThijmenGThN/directus-themebuilder/stargazers').then((raw: any) => raw.json().then((res: any) => {
      setStargazers(
        res.filter(({ login }: { login: string }) => login != "ThijmenGThN") // Having this project as a repo of mine is enough credit for me :)
          .reverse()
      )
    }))
  }, [])

  return (
    <div className='flex flex-col min-h-screen'>
      <div className="container mx-auto px-5 grow mb-10">
        {/* ----- SECTION: Interface ----- */}
        <Splash hex={hex} />
        <div className='mt-10 flex flex-col gap-2'>
          <p className='font-semibold'>
            Hex Color
          </p>

          <div className='flex gap-2 relative'>
            <div className='border-neutral-300 border-2 rounded-lg hover:cursor-pointer hover:border-violet-500 hover:border-3'
              onClick={() => setShowPicker(!showPicker)}
              onMouseOver={({ target }) => borderHover.in(target)}
              onMouseOut={({ target }) => borderHover.out(target)}
            >
              <div className='m-3 w-9 h-9 rounded pointer-events-none' style={{ backgroundColor: hex }} />
            </div>

            {
              showPicker && (
                <SketchPicker className="absolute z-10 top-16 mt-2"
                  onChange={(color: any) => { setHex(color.hex) }}
                  color={hex}
                />
              )
            }

            <input placeholder='#6644FF' value={hex}
              className="p-4 font-semibold border-2 outline-0 border-neutral-300 rounded-lg w-full hover:border-violet-500 hover:border-3"
              onMouseOver={({ target }) => borderHover.in(target)}
              onMouseOut={({ target }) => borderHover.out(target)}
              onChange={({ target }) => { setHex(target.value.trim()) }} style={{ color: hexText }}
            />

            <a href="https://github.com/ThijmenGThN/directus-themebuilder/stargazers" target="_blank" rel="noreferrer"
              className='bg-white border-neutral-300 border-2 items-center rounded-lg flex gap-3 text-xl px-6 py-4 hover:cursor-pointer hover:border-violet-500 hover:border-3'
              onMouseOver={({ target }) => borderHover.in(target)}
              onMouseOut={({ target }) => borderHover.out(target)}
            >
              <BiStar className='pointer-events-none' />
              <p className='pointer-events-none'>{stars}</p>
            </a>
          </div>
        </div>

        {/* ----- SECTION: Custom CSS ----- */}
        <Content hex={hex} hexText={hexText} content={content} />

        {/* ----- SECTION: Contributors ----- */}
        <div className='mt-10 flex flex-col gap-2'>
          <p className='font-semibold'>Contributors</p>
          <div className='flex flex-wrap gap-2 max-h-[512px] overflow-y-hidden'
            onMouseOver={({ target }) => borderHover.in(target)}
            onMouseOut={({ target }) => borderHover.out(target)}
          >
            {
              contributors.map((gazer: any, index: number) => (
                <a className='flex rounded-lg items-center gap-4 border-2 grow justify-center py-4 px-6 border-neutral-300 hover:border-3'
                  key={index} href={gazer.html_url} target="_blank" rel="noreferrer"
                >
                  <img className='pointer-events-none aspect-square w-10 rounded-full' src={gazer.avatar_url} alt="avatar" />
                  <p className='pointer-events-none font-semibold'>@{gazer.login}</p>
                </a>
              ))
            }
          </div>
        </div>

        {/* ----- SECTION: Stargazers ----- */}
        <div className='mt-10 flex flex-col gap-2 relative'>
          <p className='font-semibold'>Stargazers</p>
          <div className='flex flex-wrap gap-2 max-h-[512px] overflow-y-hidden'
            onMouseOver={({ target }) => borderHover.in(target)}
            onMouseOut={({ target }) => borderHover.out(target)}
          >
            {
              stargazers.map((gazer: any, index: number) => (
                <a className='flex rounded-lg items-center gap-4 border-2 grow justify-center py-4 px-6 border-neutral-300 hover:border-3'
                  key={index} href={gazer.html_url} target="_blank" rel="noreferrer"
                >
                  <img className='pointer-events-none aspect-square w-10 rounded-full' src={gazer.avatar_url} alt="avatar" />
                  <p className='pointer-events-none font-semibold'>@{gazer.login}</p>
                </a>
              ))
            }
          </div>

          <div className='bg-gradient-to-b from-transparent pointer-events-none via-transparent absolute top-0 left-0 to-white h-full w-full' />
        </div>
      </div>

      <Footer git={git} hex={hex} />
    </div >
  )
}

export async function getServerSideProps() {
  return {
    props: {
      git: {
        buildId: execSync('git rev-parse --short HEAD').toString(),
        latestTag: execSync('git describe --abbrev=0 --tags').toString()
      }
    }
  }
}
