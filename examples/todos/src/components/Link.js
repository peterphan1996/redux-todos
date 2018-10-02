// @flow

import React from 'react'

type LinkType = {
  active: bool,
  children: *,
  onClick: Function
}

const Link = ({ active, children, onClick }: LinkType) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)

export default Link
