import React from 'react';
import { Center, Text, VStack } from '@chakra-ui/react';
import {
	DescriptionWrapper,
	GridTemplateColumn,
	LatestOfferContainer,
} from './styles';
import Heading from '../../../../components/Heading';
import BigCard from './components/BigCard';
import HorizontalCard from './components/HorizontalCard';
import VerticalAscCard from './components/VerticalAscCard';
import VerticalDescCard from './components/VerticalDescCard';

export default function LatestOffer() {
	return (
		<LatestOfferContainer>
			<VStack mb="16">
				<Heading>Shop our latest offers and categories</Heading>
				<DescriptionWrapper>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Scelerisque in est dui, aliquam, tempor. Faucibus morbi
						turpis. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit.
					</Text>
				</DescriptionWrapper>
			</VStack>
			<GridTemplateColumn>
				<BigCard />
				<VerticalAscCard />
				<VerticalDescCard />
				<HorizontalCard />
			</GridTemplateColumn>
		</LatestOfferContainer>
	);
}
