import React from 'react'
import '../styles/loader.css'

const Loader = function() {
  return (
    <div class="indicator">
      <svg width="16px" height="12px">
        <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6" />
        <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6" />
      </svg>
    </div>
  )
}

export default Loader
