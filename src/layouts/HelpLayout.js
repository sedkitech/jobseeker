import React from 'react'
import { Outlet } from 'react-router-dom'
import { Help } from '../pages/help/Help'

export const HelpLayout = () => {
    return (
        <div>
            <Help />

            <main>
                <Outlet />
            </main>
        </div>
    )
}
