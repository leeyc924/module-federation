import dynamic from "next/dynamic";
import Image from "next/image";
const Navbar = dynamic(() => import('remote/Navbar'), { ssr: false, loading: () => <>...loading</>})

export default function Home() {
  return (
    <div>
      hello world
      <Navbar />
    </div>
  );
}
