import React from 'react'
import { NavigationBar } from './NavigationBar'
import { NavigationWidget } from './NavWidget'

export const Navbar: React.FC = () => {
    return (
        <div>
            <NavigationBar />
            <div className="md:hidden">
                <NavigationWidget />
            </div>
        </div>
    )
}