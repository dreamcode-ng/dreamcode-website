import Head from 'next/head';
import BannerPrincipal from '@/components/UI/Banners/BannerPrincipal';
import Form from '@/components/UI/Form/Form';
import Office from '@/components/Contact/Office'


export default function Great() {

const titleContact = <>Conectamos tu idea con el futuro <span className='m_color'> ¡Estamos listos para escucharte!</span></>

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Great" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main > 
        <BannerPrincipal 
          withLink
          title={titleContact}
          link="Hablemos →"
          subtitle="Envíanos un mensaje para entender cómo podemos alcanzar tus desafíos de negocio y que quisieras que lográramos juntos"/>
        <Office />
        <Form noTitle />
      </main>
    </>
  )
}
