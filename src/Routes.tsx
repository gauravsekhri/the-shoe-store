import React from "react";
import { Products } from "./components/products";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { LoginForm } from "./components/auth/LoginForm";
import { SignupForm } from "./components/auth/SignupForm";
import { AuthScreen } from "./components/auth";
import { DashboardLayout } from "./components/dashboard";
import { Summary } from "./components/dashboard/Summary";
import { AllProducts } from "./components/dashboard/AllProducts";
import { SettingsLayout } from "./components/settings";
import { UserCart } from "./components/usercart";
import { WebRoutes } from "./enums/WebRoutes";
import { AllOrders } from "./components/dashboard/AllOrders";
import MyProfile from "./components/settings/MyProfile";
import MyTransactions from "./components/settings/MyTransactions";
import ChangePassword from "./components/settings/ChangePassword";
import Support from "./components/settings/Support";
import MyAddress from "./components/settings/MyAddress";
import AddProduct from "./components/dashboard/AllProducts/AddProduct";
import SingleProduct from "./components/products/SingleProduct";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthScreen />,
      children: [
        {
          path: "",
          element: <Navigate to={WebRoutes.LOGIN} />,
        },
        {
          path: WebRoutes.LOGIN,
          element: <LoginForm />,
        },
        {
          path: WebRoutes.SIGNUP,
          element: <SignupForm />,
        },
      ],
    },
    {
      path: WebRoutes.HOME,
      element: <Products />,
    },
    {
      path: WebRoutes.SINGLE_PRODUCT,
      element: <SingleProduct />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "",
          element: <Navigate to={WebRoutes.DASH_SUMMARY} />,
        },
        {
          path: WebRoutes.DASH_SUMMARY,
          element: <Summary />,
        },
        {
          path: WebRoutes.DASH_PRODUCTS,
          element: <AllProducts />,
        },
        {
          path: WebRoutes.DASH_ADD_PRODUCT,
          element: <AddProduct />,
        },
        {
          path: WebRoutes.DASH_ORDERS,
          element: <AllOrders />,
        },
      ],
    },
    {
      path: "cart",
      element: <UserCart />,
    },
    {
      path: WebRoutes.SETTINGS,
      element: <SettingsLayout />,
      children: [
        {
          path: "",
          element: <Navigate to={WebRoutes.MY_PROFILE} />,
        },
        {
          path: WebRoutes.MY_PROFILE,
          element: <MyProfile />,
        },
        {
          path: WebRoutes.MY_TRANSACTIONS,
          element: <MyTransactions />,
        },
        {
          path: WebRoutes.CHANGE_PW,
          element: <ChangePassword />,
        },
        {
          path: WebRoutes.HELP_SUPPORT,
          element: <Support />,
        },
        {
          path: WebRoutes.MY_Address,
          element: <MyAddress />,
        },
      ],
    },
    {
      path: "*",
      element: <>Not Found</>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
