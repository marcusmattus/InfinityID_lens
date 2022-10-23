
import 'antd/dist/antd.css';
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'

import '../styles/globals.css'

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})


function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  )
  
}

export default MyApp