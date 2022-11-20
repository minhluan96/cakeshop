import SectionHeader from '@components/common/sectionHeader';
import ProductOverlayCard from '@components/product/productOverlayCard';
import { useFeaturedProductsQuery } from '@framework/product/getAllFeaturedProducts';
import Alert from '@components/ui/alert';

interface ProductsProps {
  sectionHeading: string;
  categorySlug?: string;
  className?: string;
  limit?: number;
  variant?: 'left' | 'center' | 'combined';
}

const ProductsFeatured: React.FC<ProductsProps> = ({
  sectionHeading,
  categorySlug,
  className = 'mb-12 md:mb-14 xl:mb-16',
  variant = 'left',
  limit = 5,
}) => {
  const { data, error } = useFeaturedProductsQuery({
    limit: limit,
  });

  return (
    <div className={className}>
      <SectionHeader
        sectionHeading={sectionHeading}
        categorySlug={categorySlug}
      />
      {error ? (
        <Alert message={error?.message} />
      ) : (
        <div className="grid grid-cols-4 grid-rows-2 gap-3 md:gap-5 xl:gap-7">
          {data?.slice(0, limit).map((product, idx: number) => (
            <ProductOverlayCard
              key={`product--key${product.id}`}
              product={product}
              variant={variant}
              index={idx}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsFeatured;
