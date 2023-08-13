import Appbar from '@/components/Appbar';
import { InitUser } from '@/components/InitUser';
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return <RecoilRoot>
      <Appbar />
     <InitUser />
     <Component {...pageProps} />
  </RecoilRoot>;
}
