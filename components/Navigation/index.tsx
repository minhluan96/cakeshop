import React from 'react'
import {
    AtlassianNavigation,
    PrimaryButton,
    PrimaryDropdownButton,
} from '@atlaskit/atlassian-navigation'
import SearchBar from '../SearchBar'
import Settings from '../Settings'

export default function Navigation() {
    return (
        <AtlassianNavigation
            label="site"
            primaryItems={[
                <PrimaryButton>Dashboard</PrimaryButton>,
                <PrimaryDropdownButton>Issues</PrimaryDropdownButton>,
                <PrimaryDropdownButton>Projects</PrimaryDropdownButton>,
                <PrimaryButton>Repositories</PrimaryButton>,
            ]}
            renderProductHome={() => null}
            renderSettings={Settings}
            renderSearch={SearchBar}
        />
    )
}
