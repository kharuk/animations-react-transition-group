/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom'

import { GlobalScaleStyle } from './transitions/slide'
import { GlobalSlideStyle } from './transitions/scale'

import Transitions from './transitions'
import { Green, Yellow } from './Page'

const Perspective = styled.div`
    width: 100vw;
    height: 100vh;
    perspective: 1200px;
`

export default () => (
    <Route
        render={({ location }) => (
            <Perspective>
                <GlobalScaleStyle />
                <GlobalSlideStyle />
                <Transitions pageKey={location.key} {...location.state}>
                    <Switch location={location}>
                        <Route path='/yellow' component={Yellow} />
                        <Route path='/green' component={Green} />
                        <Redirect from='/' to='/green' />
                    </Switch>
                </Transitions>
            </Perspective>
        )}
    />
)
