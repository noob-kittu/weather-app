import React from 'react'
import Temp from './Temp'
import City from './City'

export default function Clock() {
  return (
    <div className="button button-dial">

    <span className="button-dial-spoke"></span>
    <span className="button-dial-spoke"></span>
    <span className="button-dial-spoke"></span>
    <span className="button-dial-spoke"></span>
    <span className="button-dial-spoke"></span>
    <span className="button-dial-spoke"></span>

    <div className="button-dial-top"></div>
    <div className="button-dial-label">
      <div className="widget">

        <div className="left-panel panel">
            <City/>
            <Temp />
        </div>
      </div>
    </div>
  </div>

  )
}
