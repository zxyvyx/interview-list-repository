import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hasymi Al Hamdi - Front End Interview</title>
        <meta
          name='description'
          content='Interview Front End React JS - Next JS - Hasymi Al Hamdi'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className='text-2xl font-bold text-teal-500'>
          Interview React JS - Next JS
        </div>
      </main>
    </>
  );
}
