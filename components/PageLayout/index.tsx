import React, { useState } from 'react'
import {
    PageLayout as AtlassianPageLayout,
    Banner,
    Content,
    Main,
    TopNavigation,
} from '@atlaskit/page-layout'
import Navigation from '../Navigation'
import { StyledContainer } from './styles'

export default function PageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [showBanner] = useState(false)

    return (
        <AtlassianPageLayout>
            {showBanner && (
                <Banner
                    testId="banner"
                    id="banner"
                    skipLinkTitle="Banner"
                    height={60}
                    isFixed={false}
                >
                    <span>Banner</span>
                </Banner>
            )}
            <TopNavigation
                testId="topNavigation"
                id="product-navigation"
                skipLinkTitle="Product Navigation"
                height={60}
                isFixed={false}
            >
                <Navigation />
            </TopNavigation>
            <Content testId="content">
                <Main testId="main" id="main" skipLinkTitle="Main Content">
                    <StyledContainer maxW="7xl" centerContent>
                        {children}
                    </StyledContainer>
                </Main>
            </Content>
        </AtlassianPageLayout>
    )
}
