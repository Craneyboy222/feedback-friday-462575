import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TextInput, Select, Button } from '../UI';

const orderSchema = z.object({
  customerName: z.string().min(1, 'Customer Name is required'),
  product: z.string().min(1, 'Product selection is required'),
  quantity: z.number().min(1, 'Quantity must be at least 1')
});

interface OrderFormProps {
  onSubmit: (data: { customerName: string; product: string; quantity: number }) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(orderSchema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Order Form">
      <TextInput
        label="Customer Name"
        {...register('customerName')}
        error={errors.customerName?.message}
        aria-invalid={!!errors.customerName}
      />
      <Select
        label="Product"
        {...register('product')}
        error={errors.product?.message}
        aria-invalid={!!errors.product}
      >
        {/* Options would be populated dynamically */}
        <option value="">Select a product</option>
        <option value="Product1">Product 1</option>
        <option value="Product2">Product 2</option>
      </Select>
      <TextInput
        label="Quantity"
        type="number"
        {...register('quantity', { valueAsNumber: true })}
        error={errors.quantity?.message}
        aria-invalid={!!errors.quantity}
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Placing Order...' : 'Place Order'}
      </Button>
    </form>
  );
};

export default OrderForm;
