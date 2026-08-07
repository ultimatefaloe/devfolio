// localStorage is a web storage API that allows you to store data in the browser. It provides a way to persist data across page reloads and browser sessions. The data stored in localStorage is specific to the domain and can be accessed using JavaScript.
// methods
// getItem(key): Retrieves the value associated with the specified key from localStorage. If the key does not exist, it returns null.
// setItem(key, value): Stores a key-value pair in localStorage. If the key already exists, it updates the value.
// removeItem(key): Removes the specified key and its associated value from localStorage.
// clear(): Clears all key-value pairs from localStorage.


// JSON 
// methods
// JSON.stringify(value): Converts a JavaScript value (object, array, etc.) into a JSON string representation.
// JSON.parse(jsonString): Parses a JSON string and converts it back into a JavaScript value (object, array, etc.).


// interface Post{
//   id: number | string;
//   title: string;
//   body: string;
//   createdAt: string;
//   updatedAt: string;
// }

const KEY = "post:strorage:key";

export const getPost = () => {
  const stringifiedPost  = localStorage.getItem(KEY);
  const post = JSON.parse(stringifiedPost);
  if(!post) return [];
  return post;
}

export const createPost = (post) => {
  const posts = getPost();
  const newPostData = {
    ...post,
    id: posts.length + 1, // new Date().getTime(),
    createdAt: Date.now(),
    updatedAt: null,
  }
  console.log(newPostData)

  const updatedStorage = [...posts, newPostData]
  const stringifiesUpdatedStorage = JSON.stringify(updatedStorage);
  localStorage.setItem(KEY, stringifiesUpdatedStorage);
  return newPostData;
}