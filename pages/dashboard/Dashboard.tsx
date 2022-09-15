import React from 'react';
import PageLayout from '../../components/PageLayout';
import Banner from './components/Banner';
import LatestOffer from './components/LatestOffer';

export default function Dashboard() {
	return (
		<PageLayout>
			<Banner />
			<LatestOffer />
		</PageLayout>
	);
}
