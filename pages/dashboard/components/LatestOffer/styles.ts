import styled from 'styled-components';
import { Box, Heading, Text } from '@chakra-ui/react';

export const LatestOfferContainer = styled.div`
	padding: 2em;
`;

export const DescriptionWrapper = styled.div`
	word-break: break-word;
	max-width: 70%;
	text-align: center;
`;

export const GridTemplateColumn = styled.div`
	display: grid;
	grid-auto-columns: 1fr;
	-ms-grid-columns: 1fr 1fr;
	grid-row-gap: 16px;
	grid-column-gap: 16px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	-ms-grid-rows: auto;
	grid-template-rows: auto;
`;

export const StyledText = styled(Text)`
	font-size: 16px;
	font-weight: 400;
`;

export const StyledHeading = styled(Heading)`
	font-size: 32px;
	font-weight: 600;
`;

export const BigCardContainer = styled.div`
	grid-column-start: span 2;
	grid-column-end: span 2;
	grid-row-start: span 1;
	grid-row-end: span 1;
`;

export const HorizontalCardContainer = styled.div`
	grid-column-start: span 2;
	-ms-grid-column-span: 2;
	grid-column-end: span 2;
	grid-row-start: span 1;
	-ms-grid-row-span: 1;
	grid-row-end: span 1;
`;

export const StyledHorizontalBox = styled(Box)`
	padding: 0 16px;
`;

export const VerticalAscContainer = styled.div`
	grid-column-start: span 1;
	-ms-grid-column-span: 1;
	grid-column-end: span 1;
	grid-row-start: span 2;
	-ms-grid-row-span: 2;
	grid-row-end: span 2;
`;

export const VerticalBody = styled.div`
	height: 100%;
	grid-auto-columns: 1fr;
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	grid-template-columns: 2fr 1fr 1fr;
	grid-template-rows: auto;
`;

export const StyledBoxVertical = styled(Box)`
	display: flex;
	height: 100%;
	padding-right: 0em;
	padding-bottom: 0em;
	padding-left: 0em;
	flex-direction: column;
	justify-content: center;
`;

export const VerticalDescContainer = styled.div`
	grid-column-start: span 1;
	grid-column-end: span 1;
	grid-row-start: span 2;
	grid-row-end: span 2;
`;

export const StyledBoxRight = styled(Box)`
	display: flex;
	width: 100%;
	height: auto;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-pack: end;
	-webkit-justify-content: flex-end;
	-ms-flex-pack: end;
	justify-content: flex-end;
	-webkit-box-align: end;
	-webkit-align-items: flex-end;
	-ms-flex-align: end;
	align-items: flex-end;
	text-align: right;
`;
