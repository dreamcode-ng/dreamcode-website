import OurDreamcoders from '@/components/UI/InfoCardWithImage/InfoCardWithImage'
import Head from 'next/head'



export default function Great() {
  return (
    <>
      <Head>
        <title>Great</title>
        <meta name="description" content="Great" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
      <OurDreamcoders 
            isAbout
            text="Estamos convencidos de que la innovación y el cambio digital definen los negocios, fomentan el desarrollo y reconfiguran el entorno global." 
            title="El futuro nos pertenece, lo estamos construyendo con tecnología que conecta y transforma" /> 
      </main>
    </>
  )
}
