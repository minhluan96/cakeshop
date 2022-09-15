import React from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import {
	StyledBoxVertical,
	StyledHeading,
	StyledText,
	VerticalBody,
	VerticalDescContainer,
} from '../styles';

export default function VerticalDescCard() {
	return (
		<VerticalDescContainer>
			<VerticalBody>
				<StyledBoxVertical
					height="100%"
					alignItems="center"
					borderWidth="1px"
					borderRadius="32px"
					overflow="hidden"
				>
					<Box p="6">
						<Box alignItems="baseline" textAlign="center">
							<StyledText>Tablet</StyledText>
							<div>
								<StyledHeading as="h2">
									Empower your work
								</StyledHeading>
							</div>
						</Box>
					</Box>

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
							src="/assets/ipad_mini.png"
							objectFit="contain"
						/>
					</Box>
				</StyledBoxVertical>
			</VerticalBody>
		</VerticalDescContainer>
	);
}
