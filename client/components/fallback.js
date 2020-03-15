import React from 'react'

/**
 * COMPONENT
 */
const Fallback = () => {
  return (
    <div>
      <h1>
        This is the Fallback component that only shows when someone isn't logged
        in but is trying to navigate routes that require login.
      </h1>
    </div>
  )
}

export default Fallback
