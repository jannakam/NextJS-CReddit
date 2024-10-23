// import { fetchPets } from "@/actions";
// import PetsContainer from "./components/PetsContainer";

async function PostsPage() {
  const posts = await fetchPosts();

  return <PostsContainer pets={pets} />;
}

export default PostsPagae;
