import React, { Suspense, lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { LoadingRing, Main } from '@1hive/1hive-ui'

const Home = lazy(() => import('@components/Home'))
const Garden = lazy(() => import('@components/Garden'))
const Profile = lazy(() => import('@components/Profile/Profile'))

const M5_GARDEN = '0x793a4c7ffaabcba9529e0dddb8a49884838c6d20'

export default function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to={`/mumbai/garden/${M5_GARDEN}`} />
      <Suspense
        fallback={
          <Main>
            <LoadingRing />
          </Main>
        }
      >
        <Route path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/:networkType/garden/:gardenAddress" component={Garden} />
      </Suspense>
      <Redirect to={`/mumbai/garden/${M5_GARDEN}`} />
    </Switch>
  )
}
