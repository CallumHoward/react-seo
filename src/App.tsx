import { MySideSheet } from "./components/SideSheet";
import {
  type Config,
  ConfigProvider,
  SearchInput,
  Typography,
  VStack,
} from "@safetyculture/sc-web-ui/react";
import { localization } from "./lib/localization";
import { maggieDark } from "@safetyculture/sc-web-ui/theme";
import { Library } from "./components/Library";
import { useState } from "react";

const uiConfig: Config = {
  localization,
  theme: maggieDark,
};

function App() {
  const [value, setValue] = useState<string>();

  return (
    <ConfigProvider config={uiConfig}>
      <main>
        <VStack align="flex-end" spacing="s8">
          <MySideSheet />
          <VStack align="center">
            <SearchInput
              size="lg"
              style={{ maxWidth: "500px" }}
              onChange={(e) => setValue(e)}
            />
            <Typography variant="bodyMedium">{value}</Typography>
          </VStack>
          <Library />
        </VStack>
      </main>
    </ConfigProvider>
  );
}

export default App;
