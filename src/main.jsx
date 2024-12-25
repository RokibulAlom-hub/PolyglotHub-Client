import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import AuthProvider from "./Authprovider/Authprovider";
import { Themeprovider } from "./Components/Themecontext/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Themeprovider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </Themeprovider>
  </StrictMode>
);
