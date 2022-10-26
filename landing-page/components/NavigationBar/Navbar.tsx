import React from 'react'
import { NavigationBar } from './NavigationBar'
import { NavigationWidget } from './NavWidget'

export const Navbar: React.FC = () => {
    return (
        <div>
            <NavigationBar />
            <div className="lg:hidden">
                <NavigationWidget />
            </div>
        </div>
    )
}