import { createElement } from 'react'

import styled from 'styled-components'

export const DynamicTypography = styled(({ tag, children, ...props }) =>
  createElement(tag, props, children),
)`
    /* your default css */
`