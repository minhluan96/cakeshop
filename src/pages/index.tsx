import BannerCard from '@components/common/bannerCard';
import Container from '@components/ui/container';
import BrandGridBlock from '@containers/brandGridBlock';
import CategoryBlock from '@containers/categoryBlock';
import Layout from '@components/layout/layout';
import BannerWithProducts from '@containers/bannerWithProducts';
import BannerBlock from '@containers/bannerBlock';
import Divider from '@components/ui/divider';
import DownloadApps from '@components/common/downloadApps';
import Support from '@components/common/support';
import Instagram from '@components/common/instagram';
import ProductsFlashSaleBlock from '@containers/productFlashSaleBlock';
import ProductsFeatured from '@containers/productsFeatured';
import BannerSliderBlock from '@containers/bannerSliderBlock';
import ExclusiveBlock from '@containers/exclusiveBlock';
import Subscription from '@components/common/subscription';
import NewArrivalsProductFeed from '@components/product/feeds/newArrivalsProductFeed';
import { homeThreeBanner as banner } from '@framework/static/banner';
import { homeThreeMasonryBanner as masonryBanner } from '@framework/static/banner';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ROUTES } from '@utils/routes';
import { GetStaticProps } from 'next';

export default function Home() {
    return (
        <>
            <BannerBlock data={masonryBanner} />
            <Container>
                <ProductsFlashSaleBlock date={'2023-03-01T01:02:03'} />
            </Container>
            <BannerSliderBlock />
            <Container>
                <CategoryBlock sectionHeading="text-shop-by-category" type="rounded" />
                <ProductsFeatured sectionHeading="text-featured-products" />
                <BannerCard
                    key={`banner--key${banner[0].id}`}
                    banner={banner[0]}
                    href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
                    className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
                />
                <BrandGridBlock sectionHeading="text-top-brands" />
                <BannerCard
                    key={`banner--key${banner[1].id}`}
                    banner={banner[1]}
                    href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
                    className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
                />
                <BannerWithProducts
                    sectionHeading="text-on-selling-products"
                    categorySlug="/search"
                />
                <ExclusiveBlock />
                <NewArrivalsProductFeed />
                <DownloadApps />
                <Support />
                <Instagram />
                <Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" />
            </Container>
            <Divider className="mb-0" />
        </>
    );
}

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, [
                'common',
                'forms',
                'menu',
                'footer',
            ])),
        },
    };
};
