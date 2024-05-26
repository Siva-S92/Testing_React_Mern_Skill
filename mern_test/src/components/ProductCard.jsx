import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ProductCard = ({product}) => {
  return (
    <div className='flex flex-col w-[18rem] h-[22rem] px-1 border border-gray-500 rounded-lg'>
        <div className='w-full h-[50%] border-b'>
            <img className='w-full h-full rounded-md object-contain' src={product.thumbnail} alt={product.title} />
        </div>
        <div className='w-full h-[50%] content-center px-2'>
            <p>{product.category}</p>
            <h3 className='text-xl font-semibold'>{product.title}</h3>
            <p className='text-xl font-semibold'>${product.price}</p>
            <p className='flex'>rating: 
                <span className='flex justify-start items-center'>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarBorderIcon />
                </span>
                <span className='pl-5'>{product.rating}</span>
            </p>
        </div>
    </div>
  )
}

export default ProductCard