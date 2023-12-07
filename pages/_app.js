import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <div className="flex flex-col min-h-screen">
          <Component {...pageProps} />
        </div>
      </Layout>
    </div>
  );
}

export default MyApp;
