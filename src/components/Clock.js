import React from 'react'

export default function Clock(props) {
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
        <div className="city">
          {props.city}
        </div>
        <div className="temp">
            {props.temp}&deg;
        </div>
        </div>
      </div>
    </div>
  </div>

  )
}
