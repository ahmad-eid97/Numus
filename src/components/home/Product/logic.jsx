//== Redux
import { useDispatch } from 'react-redux';
import { addProduct } from '@/store/Slices/productsSlice';

export function useLogic() {
  const dispatch = useDispatch();

  const addNewProduct = (product) => {
    const addedProduct = {
      ...product,
      quantity: 1
    }
    dispatch(addProduct(addedProduct));
  }

  return {
    addNewProduct
  }
}