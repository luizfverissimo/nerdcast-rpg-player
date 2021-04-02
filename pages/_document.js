import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#333333' />
          <meta name='msapplication-TileColor' content='#2b5797' />
          <meta name='theme-color' content='#333333' />
          <meta
            property='og:title'
            content='NerdCast RPG Player'
          />
          <meta property='og:type' content='article' />
          <meta property='og:url' content='https://nerdcast-rpg-player.vercel.app/' />
          <meta
            property='og:description'
            content='NerdCast RPG Player - Escute todos os nerdCasts de RPG lançado pelo Jovem Nerd.'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
