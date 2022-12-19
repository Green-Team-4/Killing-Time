import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        
        <span className="ms-1">&copy; Green Team 4</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Green KILLING TIME</span>
        
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
