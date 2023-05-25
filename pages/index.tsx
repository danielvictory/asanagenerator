import { GradientBackgroundCon } from '@/components/Generator/GenElements'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
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
        
      </GradientBackgroundCon>
    </>
  )
}
