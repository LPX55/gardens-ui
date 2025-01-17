import React from 'react'
import GlobalErrorHandler from './GlobalErrorHandler'
import { GardensProvider } from './providers/Gardens'
import { ProfileProvider } from './providers/Profile'
import { UserProvider } from './providers/User'
import { WalletProvider } from './providers/Wallet'
import Routes from './routes/Routes'
import { Main } from '@1hive/1hive-ui'
import MainView from '@components/MainView'
import WelcomeLoader from '@components/Welcome/WelcomeLoader'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Main assetsUrl="/aragon-ui/" layout={false} scrollView={false}>
        <WalletProvider>
          <GlobalErrorHandler>
            <ProfileProvider>
              <UserProvider>
                <GardensProvider>
                  <WelcomeLoader />
                  <MainView>
                    <Routes />
                  </MainView>
                </GardensProvider>
              </UserProvider>
            </ProfileProvider>
          </GlobalErrorHandler>
        </WalletProvider>
      </Main>
    </HashRouter>
  )
}

export default App
