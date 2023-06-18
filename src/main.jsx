import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import router from './router/AllRoutes.jsx';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './store/store.js';
//== Styles
import './styles/globals.scss';
import DefaultLayout from './layouts/default.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <Provider store={store}>
        <DefaultLayout>
          <RouterProvider router={router} />
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              className: '',
              duration: 5000,
              style: {
                background: '#f0edf1',
                boxShadow: '13px 13px 20px #cbced1, -13px -13px 20px #e3e3e3',
                color: '#394051',
              },
            }}
          />
        </DefaultLayout>
      </Provider>
    </React.StrictMode>
  </>,
)
