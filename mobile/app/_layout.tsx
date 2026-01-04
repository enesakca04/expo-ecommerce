import "../global.css"
import { Stack } from "expo-router";
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://15fc61b129a278e6960b7700061ffa8e@o4510620539617280.ingest.de.sentry.io/4510654356586576',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Enable Logs
  enableLogs: true,

  // Configure Session Replay
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});
import{QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ClerkProvider } from "@clerk/clerk-expo"
import { tokenCache } from '@clerk/clerk-expo/token-cache'

const queryClient = new QueryClient()

export default Sentry.wrap(function RootLayout() {
  return (
    <ClerkProvider tokenCache= {tokenCache}>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{headerShown:false}} />
      </QueryClientProvider>
    </ClerkProvider>
  )
});