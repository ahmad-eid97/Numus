// NEXT STUFF
import { createContext, useState } from "react";

export const RequestsContext = createContext(null);

const RequestsContextProvider = ({ children }) => {
  const [openRequests, setOpenRequests] = useState(false);

  return (
    <RequestsContext.Provider value={{ openRequests, setOpenRequests }}>
      {children}
    </RequestsContext.Provider>
  )
}

export default RequestsContextProvider;
