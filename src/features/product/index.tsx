import React from 'react';
import { useGetProductQuery } from '../../services/product';
import Modal from './modal';
import {
  StyledMain,
  StyledGrid,
  StyledProductImage,
  StyledProductMainInfo,
} from './styles';
import Tabs from './tabs';
import User from './user';
import Map from './map';

type ProductProps = {
  showUser: boolean;
};

const Product = ({ showUser }: ProductProps) => {
  const { data: product, isLoading } = useGetProductQuery();

  if (!product || isLoading) return <p>Loading...</p>;

  return (
    <StyledMain>
      <StyledGrid>
        <section>
          <StyledProductImage imgUrl={product.picture} />
          <StyledProductMainInfo>
            <p className="eyebrow">Product</p>
            <h1>{product.title}</h1>
            <p className="eyebrow">Type</p>
            <h2>{product.type}</h2>
          </StyledProductMainInfo>
          <Tabs
            description={product.description}
            categories={product.categories}
            businessModels={product.businessModels}
            trl={product.trl}
          />
        </section>
        <section>
          {showUser && (
            <User
              image={product.user.image}
              name={product.user.name}
              company={product.company.name}
            />
          )}
          <Map company={product.company.name} />
        </section>
      </StyledGrid>
      <Modal
        categories={product.categories}
        businessModels={product.businessModels}
        trl={product.trl}
      />
    </StyledMain>
  );
};

export default Product;
