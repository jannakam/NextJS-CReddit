import { redirect } from "next/navigation";
import { fetchPost } from "@/actions";
import PostCards from "@/components/PostCards";


async function PostDetailPage({ params }) {
  const { id } = await params;

  const post = await fetchPost(id);

  // const post = await data.json();

  // const { title, description } = post;

  return (
    <div className="flex flex-col bg-[rgb(14,17,19)] rounded-lg m-10 p-5">
      {/* <div className="flex flex-row justify-between h-10">
        <div className="flex justify-start ">
          <img
            src="https://png.pngtree.com/png-clipart/20220620/original/pngtree-emoji-3d-rendering-smiley-face-png-image_8130171.png"
            width={45}
            height={20}
          ></img>
          <h2 className="mt-3">r/saleeeeeeeem</h2>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-800 rounded-full text-sm font-bold pl-5 pr-5 mt-2">
            join
          </button>
          <button className="m-3 rounded-full ">...</button>
        </div>
      </div>
      <div>
        <h1 className=" font-bold text-xl font-arial ">post title</h1>
        <p>post description</p>
      </div>
      <div className="flex flex-row justify-between ">
        <img src="upvotes.png" alt="" height={200} width={350} />
        <button className="bg-[rgb(42,50,54)] rounded-full text-sm font-bold pl-5 pr-5 h-9 mt-2">
          Comment
        </button>
      </div> */}
      <PostCards post={post} />
    </div>
  );
}

export default PostDetailPage;
