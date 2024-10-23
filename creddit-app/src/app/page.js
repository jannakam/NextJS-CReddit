import Image from "next/image";
import Header from "@/components/Header";
import PostCards from "@/components/PostCards";
import PostsList from "@/components/PostsList";
// import { fetchPosts } from "@/actions";

// export async function fetchPosts() {
//   const data = await fetch(baseUrl);
//   const posts = await data.json();
//   return posts;
// }

// export async function fetchPost(id) {
//   const data = await fetch(`${baseUrl}/${id}`);
//   let post;
//   try {
//     const post = await data.json();
//   } catch (error) {
//     redirect("/posts");
//   }
//   return post;
// }

async function Home() {
  const posts = await fetchPosts();

  return (
    <div className="flex flex-col">
      {/* <Header /> */}
      {/* <PostCards /> */}
      <PostsList posts={posts}/>
    </div>
  );
}
