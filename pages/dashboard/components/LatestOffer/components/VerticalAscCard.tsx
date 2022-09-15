import React from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import {
	BigCardContainer,
	StyledBoxVertical,
	StyledHeading,
	StyledText,
	VerticalAscContainer,
	VerticalBody,
} from '../styles';

export default function VerticalAscCard() {
	return (
		<VerticalAscContainer>
			<VerticalBody>
				<StyledBoxVertical
					height="100%"
					alignItems="center"
					borderWidth="1px"
					borderRadius="32px"
					overflow="hidden"
				>
					<Box
						style={{
							width: '130%',
							height: '40%',
							position: 'relative',
							left: '5%',
						}}
					>
						<Image
							alt="banner"
							layout="fill"
							src="/assets/phones.png"
							objectFit="contain"
						/>
					</Box>
					<Box p="6">
						<Box alignItems="baseline" textAlign="center">
							<StyledText>Phones</StyledText>
							<div>
								<StyledHeading as="h2">
									Your day to day life
								</StyledHeading>
							</div>
						</Box>
					</Box>
				</StyledBoxVertical>
			</VerticalBody>
		</VerticalAscContainer>
	);
}
