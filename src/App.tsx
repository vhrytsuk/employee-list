import { Theme } from "@radix-ui/themes";

import AppRoutes from "@/routes/AppRoutes";
import "@radix-ui/themes/styles.css";

function App() {
  return (
    <Theme accentColor='cyan' radius='full'>
      <AppRoutes />
    </Theme>
  );
}

export default App;
