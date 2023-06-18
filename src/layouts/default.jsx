//== Utils
import RequestsContextProvider from "@/contexts/requestsContext/requestsContext";
//== Components
import { RequestsArea } from '../components';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <RequestsContextProvider>
        <RequestsArea />
        {children}
      </RequestsContextProvider>
    </div>
  )
}

export default DefaultLayout;