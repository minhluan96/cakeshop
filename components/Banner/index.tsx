import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    BannerContainer,
    Description,
    ExploreButton,
    ImageWrapper,
    LeftTitle,
    StyledHeading,
} from './styles'
import Button from '@atlaskit/button'
import { Text, Heading } from '@chakra-ui/react'

export default function Banner() {
    return (
        <BannerContainer>
            <LeftTitle>
                <StyledHeading>The iPad just got a new purpose!</StyledHeading>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Scelerisque in est dui, aliquam, tempor. Faucibus morbi
                    turpis.
                </Description>
                <ExploreButton>
                    <Link href="/">Explore</Link>
                </ExploreButton>
            </LeftTitle>
            <ImageWrapper>
                <Image
                    alt="banner"
                    layout="fill"
                    src="/assets/banner.png"
                    sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 94vw, (max-width: 1279px) 47vw, (max-width: 1439px) 557px, 647px"
                />
            </ImageWrapper>
        </BannerContainer>
    )
}
