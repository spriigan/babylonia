import { Rating } from '@mui/material';
import React from 'react';
import { ProductCardProp } from './product';

const DetailCard = ({ product }: ProductCardProp) => {
  return (
    <div>
      <div className="p-1">
        <div className="md:text-center truncate mx-auto md:w-40">
          <span className="text-xs md:text-sm">{product.title}</span>
        </div>
        {/* price */}
        <div className="flex pl-2 mb-2">
          <span
            className={`mr-2 decoration-double ${
              product.discountPercentage > 0 ? 'line-through' : ''
            }`}
          >
            ${product.price}
          </span>
          <span
            className={`${product.discountPercentage === 0 ? 'hidden' : ''}`}
          >
            $
            {Math.round(
              product.price - product.price * (product.discountPercentage / 100)
            )}
          </span>
        </div>
        <div className="">
          <Rating
            defaultValue={product.rating}
            readOnly
            size="small"
            className="my-auto"
            precision={0.5}
          />
          <span className="md:text-sm text-xs align-top ml-2">
            {product.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
