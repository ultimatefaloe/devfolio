

// Network request methods
// GET - to get resources from the server
// POST - to create a new resource on the server
// DELETE - to delete a resource from the server
// PUT - to update a resource on the server
// PATCH - to partially update a resource on the server

export async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (!response.ok){
      throw new Error("Error fetching posts");
    }
    const data = await response.json();
    if (!data) {
      return []
    }
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function createPost(post) {
   const newPostData = {
    ...post,
    userId: 1, // Assuming a default userId for demonstration purposes
  }

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPostData),
    });

    if(!response.ok){
      throw new Error("Error creating post");
    }

    const data = await response.json();
    return data;
  } catch (err){
    console.error("Error creating post:", err);
    return null;
  }
}