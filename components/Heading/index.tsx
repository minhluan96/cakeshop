import React from 'react';
import { StyledHeading } from './styles';

type HeadingProps = {
	children: string | React.ReactNode;
};

export default function Heading({ children }: HeadingProps) {
	return <StyledHeading>{children}</StyledHeading>;
}
