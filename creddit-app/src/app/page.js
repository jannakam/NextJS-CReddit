import Image from "next/image";
import Header from "@/components/Header";
import PostCards from "@/components/PostCards";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <PostCards />
    </div>
  );
}
