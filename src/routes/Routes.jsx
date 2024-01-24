import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";

import RoomDetails from "../pages/Rooms/RoomDetails/RoomDetails";
import Protected from "./Protected";
import DashboardLayout from "../layouts/DashboardLayout";
import AddRoom from "../pages/dashboard/Host/AddRoom";
import MyListings from "../pages/dashboard/Host/MyListings";
import HostRoute from "./HostRoute";
// import Admin from "../pages/dashboard/Admin/Admin";
import AdminRoutes from "./AdminRoutes";
import ManageUser from "../pages/dashboard/Admin/ManageUser";
import Profile from "../pages/dashboard/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: (
          <Protected>
            <RoomDetails />
          </Protected>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <Protected>
        <DashboardLayout />
      </Protected>
    ),
    children: [
      {
        path: "add-room",
        element: (
          <Protected>
            <HostRoute>
              <AddRoom />
            </HostRoute>
          </Protected>
        ),
      },
      {
        path: "my-listing",
        element: (
          <Protected>
            <HostRoute>
              <MyListings />
            </HostRoute>
          </Protected>
        ),
      },
      {
        path: "manage-user",
        element: (
          <Protected>
            <AdminRoutes>
              <ManageUser />
            </AdminRoutes>
          </Protected>
        ),
      },
      {
        path: "profile",
        element: (
          <Protected>
            <Profile />
          </Protected>
        ),
      },
    ],
  },
]);
export default router;
