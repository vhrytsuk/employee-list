import { Suspense, type FC } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import { Loader } from "@/components/common";
import { routes } from "@/routes/routesConfig";

const AppRoutes: FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map(({ path, page: Page, layout: Layout }) => (
            <Route
              key={path}
              path={path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          ))}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
