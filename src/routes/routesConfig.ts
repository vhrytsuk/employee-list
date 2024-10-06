import React from "react";

import DefaultLayout from "@/layouts/Default";
import { RouteConfig } from "@/types/index";

const Employees = React.lazy(() => import("@/pages/Employees"));

export const routes: RouteConfig[] = [
  {
    path: "/",
    page: Employees,
    layout: DefaultLayout,
  },
  {
    path: "/:username",
    page: Employees,
    layout: DefaultLayout,
  },
];
