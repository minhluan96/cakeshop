import React from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import {
	HorizontalCardContainer,
	StyledBoxRight,
	StyledHeading,
	StyledHorizontalBox,
	StyledText,
} from '../styles';

export default function HorizontalCard() {
	return (
		<HorizontalCardContainer>
			<StyledHorizontalBox
				borderWidth="1px"
				height="248px"
				borderRadius="32px"
				overflow="hidden"
				display="flex"
				alignItems="center"
			>
				<Box
					style={{
						width: '100%',
						height: '100%',
						position: 'relative',
					}}
				>
					<Image
						alt="banner"
						layout="fill"
						src="/assets/watch.png"
						objectFit="cover"
						objectPosition="50% 0%"
					/>
				</Box>
				<Box p="6">
					<StyledBoxRight alignItems="baseline">
						<StyledText>Watch</StyledText>
						<div>
							<StyledHeading as="h2">
								Not just stylist
							</StyledHeading>
						</div>
					</StyledBoxRight>
				</Box>
			</StyledHorizontalBox>
		</HorizontalCardContainer>
	);
}
