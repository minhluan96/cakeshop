import React from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import {
	BigCardContainer,
	StyledBoxRight,
	StyledHeading,
	StyledText,
} from '../styles';

export default function BigCard() {
	return (
		<BigCardContainer>
			<Box
				height="500px"
				borderWidth="1px"
				borderRadius="32px"
				overflow="hidden"
			>
				<Box
					style={{
						width: '90%',
						height: '65%',
						position: 'relative',
					}}
				>
					<Image
						alt="banner"
						layout="fill"
						src="/assets/macbook.png"
						objectFit="cover"
						objectPosition="0% 100%"
					/>
				</Box>
				<Box p="6">
					<StyledBoxRight alignItems="baseline">
						<StyledText>Laptops</StyledText>
						<div style={{ width: '50%' }}>
							<StyledHeading as="h2">
								True Laptops Solution
							</StyledHeading>
						</div>
					</StyledBoxRight>
				</Box>
			</Box>
		</BigCardContainer>
	);
}
