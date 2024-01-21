
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LoginForm from "./components/LoginForm";
import Head from "next/head";



export const metadata = {
  title: "Home Page",
  description: "ext app",
  script:"fjfj"
};

export default async function Home() {
  const session = await getServerSession(authOptions);

  

  if (session) redirect("/dashboard");

  return (
    <>
    <Head>
      <title>sdnjskfk</title>
      <script>dfjlsdflsdjlsldffffffffffffffffffffffffffff</script>
    </Head>
     <main>
      <LoginForm />
    </main>
    </>
   
  );
}