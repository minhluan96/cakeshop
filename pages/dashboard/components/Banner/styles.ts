import styled from 'styled-components';
import { Heading, Text } from '@chakra-ui/react';

export const BannerBody = styled.div`
	margin-right: auto;
	margin-left: auto;
	background-color: #ccdbe2;
	width: 100%;
	height: 550px;
	border-radius: 32px;

	display: grid;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-webkit-flex-direction: row;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-box-pack: start;
	-webkit-justify-content: flex-start;
	-ms-flex-pack: start;
	justify-content: flex-start;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
	grid-auto-columns: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	-ms-grid-columns: 1fr 1fr;
	grid-template-columns: 1fr 1fr;
	-ms-grid-rows: auto;
	grid-template-rows: auto;
`;

export const BannerContainer = styled.div`
	padding: 2em;
`;

export const LeftTitle = styled.div`
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	width: 120%;
	height: 100%;
	padding-left: 4em;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: start;
	-webkit-align-items: flex-start;
	-ms-flex-align: start;
	align-items: flex-start;
`;

export const StyledHeading = styled(Heading)`
	margin-top: 20px;
	font-size: 58px;
	line-height: 1.2;
	font-weight: 700;
	margin-bottom: 20px;
	width: 90%;
`;

export const Description = styled(Text)`
	width: 80%;
	margin-bottom: 30px;
	font-family: Inter, sans-serif;
	font-size: 16px;
	font-weight: 400;
`;

export const ExploreButton = styled.div`
	a {
		width: 170px;
		height: 50px;
		border-color: #000;
		border-radius: 200px;
		background-color: transparent;
		-webkit-transition: opacity 500ms ease;
		transition: opacity 500ms ease;
		color: #000;
		text-transform: capitalize;

		font-size: 18px;
		font-weight: 500;
		align-items: center;
		border-style: solid;
		border-width: 1px;
		padding: 16px 62px;
	}
`;

export const ImageWrapper = styled.div`
	position: relative;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	width: 100%;
	height: 100%;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: end;
	-webkit-align-items: flex-end;
	-ms-flex-align: end;
	align-items: flex-end;
`;
