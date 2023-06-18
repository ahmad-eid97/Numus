//== Modules
import { successToast, errorToast } from "@/utils/toast"
//== Api
import { API } from "@/Api/handlers";
//== Store
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "@/store/Slices/requestsSlice";

export default function useLogic() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const pressCash = async () => {
    if (!products.length) return errorToast('No Items Selected');
    const response = await API.POST('/transaction',
      {
        "amount": products.reduce((total, item) => total += (item.price * item.quantity), 0),
        "cashpointId": "4",
        "currency": "EUR",
        "employeeId": "10045",
        "posStartTime": "2019-03-28T13:32:07.216Z",
        "posTransactionId": "201901230105170104000800000002",
        "sessionId": "007700",
        "storeId": "f232",
        "transactionType": "payment"
      })
    const request = {
      endpoint: 'https://145.131.81.249:8881/transaction',
      data: response.data
    }
    dispatch(addRequest(request))
    successToast('Purchased Successfully');
  }

  return {
    pressCash
  }
}