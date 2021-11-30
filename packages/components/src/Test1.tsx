import React, { FC, memo } from 'react'
import { fn1 } from '@test/utils'

export const Test1: FC = (props) => {
    return (
        <div>{fn1()}</div>
    )
}
