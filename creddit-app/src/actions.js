"use server";

const baseUrl = "https://api-creddit.eapi.joincoded.com/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const headers = new Headers();
headers.append("Content-Type", "application/json");

// Add a new post
export async function createPost(formData) {
  const post = { ...Object.fromEntries(formData) };

  const response = await fetch(`${baseUrl}`, {
    method: "POST",
    headers,
    body: JSON.stringify(pet),
  });

  const newPost = await response.json();
  revalidatePath("/posts");
  revalidatePath(`/posts/${newPost.id}`, "page");
  redirect(`/posts/${newPost.id}`);
}

export async function deletePost(id) {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });

  revalidatePath("/posts");
  revalidatePath(`/posts/${id}`, "page");
  redirect(`/posts`);
}

export async function fetchPosts() {
  const data = await fetch(baseUrl);
  const posts = await data.json();
  return posts;
}

export async function fetchPost(id) {
  try {
    const data = await fetch(`${baseUrl}/${id}`);
    const posts = await data.json();
    return posts;
  } catch {
    return undefined;
    redirect("/posts");
  }
}
