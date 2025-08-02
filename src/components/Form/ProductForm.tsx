import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TextInput, TextArea, Button } from '../UI';

const productSchema = z.object({
  productName: z.string().min(1, 'Product Name is required'),
  description: z.string().optional(),
  price: z.number().min(0, 'Price must be a positive number')
});

interface ProductFormProps {
  onSubmit: (data: { productName: string; description?: string; price: number }) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(productSchema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Product Form">
      <TextInput
        label="Product Name"
        {...register('productName')}
        error={errors.productName?.message}
        aria-invalid={!!errors.productName}
      />
      <TextArea
        label="Description"
        {...register('description')}
        error={errors.description?.message}
        aria-invalid={!!errors.description}
      />
      <TextInput
        label="Price"
        type="number"
        {...register('price', { valueAsNumber: true })}
        error={errors.price?.message}
        aria-invalid={!!errors.price}
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : 'Save Product'}
      </Button>
    </form>
  );
};

export default ProductForm;
