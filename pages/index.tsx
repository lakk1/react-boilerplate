import { Box } from "@chakra-ui/react";
import Head from "next/head";
import RootLayout from "components/Layout";
import { ReactElement } from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lakki React App</title>
        <meta name="description" content="Decentralize exchange" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 8,
        }}
      >
        Nextjs Boilerplate with Chakra UI
      </Box>
    </div>
  );
}

Home.getLayout = (page: ReactElement) => <RootLayout>{page}</RootLayout>;
