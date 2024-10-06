import {
  type ComponentType,
  type LazyExoticComponent,
  type ReactNode,
} from "react";

export interface RouteConfig {
  path: string;
  page: LazyExoticComponent<ComponentType<object>>;
  layout: React.ComponentType<{ children: ReactNode }>;
}
