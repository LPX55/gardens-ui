import React, { useCallback, useState } from 'react'

import { GU } from '@1hive/1hive-ui'

import InfoButton from '@assets/InfoButton.svg'

import WelcomeModal from './WelcomeModal'

function WelcomeLoader() {
  const [welcomeClosed, setWelcomeClosed] = useState(
    localStorage.getItem('welcomeClosed') === 'true'
  )

  const handleOnOpen = useCallback(() => {
    setWelcomeClosed(false)
  }, [])

  const handleOnClose = useCallback(() => {
    localStorage.setItem('welcomeClosed', 'true')
    setWelcomeClosed(true)
  }, [])

  return (
    <React.Fragment>
      <WelcomeModal onClose={handleOnClose} visible={!welcomeClosed} />
      <img
        css={`
          display: flex;
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: 2;
          margin: ${3 * GU}px;
          cursor: pointer;
        `}
        src={InfoButton}
        onClick={handleOnOpen}
      />
    </React.Fragment>
  )
}

export default WelcomeLoader
