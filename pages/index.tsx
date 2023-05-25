import Head from 'next/head'
import Image from 'next/image'

// React
import { useState } from 'react'

//Components
import { GradientBackgroundCon, BackgroundImage1, BackgroundImage2, FooterCont, FooterLink, RedSpan } from '@/components/Generator/GenElements'

// Assets
import DandayamanaStandingBowPose from '@/assets/DandayamanaStandingBowPose.png'
import VrksasanaTreePose from '@/assets/VrksasanaTreePose.png'

export default function Home() {

  const [numberOfAsanas, setNumberOfAsanas] = useState(0)

  return (
    <>
      <Head>
        <title>Asana Generator</title>
        <meta name="description" content="Create a random asana to learn on the go!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackgroundCon>

        <BackgroundImage1 src={DandayamanaStandingBowPose}
        height="250"
        alt="Dandayamana or Standing Bow Pose" />

        <BackgroundImage2 src={VrksasanaTreePose}
        height="325"
        alt="Vrksasana or Tree Pose" />

        <FooterCont>
          <>
            Asanas Generated: {numberOfAsanas}
            <br />
            Developed with <RedSpan>❤️</RedSpan> by <FooterLink href="#" target="_blank" rel="noopener noreferrer"> Daniel Victory</FooterLink>
          </>
        </FooterCont>

      </GradientBackgroundCon>
    </>
  )
}
