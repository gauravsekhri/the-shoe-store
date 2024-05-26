import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import Routes from "./Routes";

function App() {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>
          <Routes />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
