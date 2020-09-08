import { useDispatch } from 'react-redux'
import useInterval from '../lib/useInterval'

import Nav from './nav'
import Clock from './clock'
import Counter from './counter'

export default function Page() {
    const dispatch = useDispatch()
    useInterval(() => {
        dispatch({
            type: "TICK",
            light: true,
            lastUpdate: Date.now()
        })
    }, 1000)

    return (
        <>
        <Nav />
        <Clock />
        <Counter />
        </>
    )
}

