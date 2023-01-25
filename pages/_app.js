import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";
import "../styles/globals.css";

Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
