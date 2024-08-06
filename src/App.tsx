import { MySideSheet } from "./components/SideSheet";
import {
  type Config,
  ConfigProvider,
  SearchInput,
  VStack,
} from "@safetyculture/sc-web-ui/react";
import { localization } from "./lib/localization";
import { maggieDark } from "@safetyculture/sc-web-ui/theme";
import { Library } from "./components/Library";

const uiConfig: Config = {
  localization,
  theme: maggieDark,
};

function App() {
  return (
    <ConfigProvider config={uiConfig}>
      <main>
        <VStack align="flex-end" spacing="s8">
          <MySideSheet />
          <VStack align="center">
            <SearchInput size="lg" style={{ maxWidth: "500px" }} />
          </VStack>
          <Library />
        </VStack>
      </main>
    </ConfigProvider>
  );
}

export default App;
