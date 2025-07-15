'use client'

import { Provider } from "react-redux";
import store from "@/redux/store";
import Navbar from '../components/Navbar'
import '../styles/global.css'

export default function RootLayout({children}){
  return (
    <html lang="es">
      <body>
        <Provider store={store}>
          <Navbar/>
            {children}
        </Provider>
      </body>
    </html>
  );
}
