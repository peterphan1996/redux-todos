// @flow

import React from 'react'
import PropTypes from 'prop-types'

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

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default Link
