document.addEventListener("DOMContentLoaded", () => {
    const blogPosts = document.getElementById("blogPosts");
    const addButton = document.getElementById("addButton");
  
    // Data fetching and showing only 10 blogs 
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        const data = response.data;
        const latestBlogs = data.slice(-10).reverse(); // Get the latest 10 blogs and reverse the order
        latestBlogs.forEach(blog => {
          const li = document.createElement("li");
          li.innerHTML = `
            <h3 class="text-lg font-bold">${blog.title}</h3>
            <p>${blog.body}</p>
            <button data-id="${blog.id}" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mt-2">Delete</button>
          `;
          blogPosts.appendChild(li);
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  
    // Handle for add button click event
    addButton.addEventListener("click", () => {
      const titleInput = document.getElementById("titleInput");
      const bodyInput = document.getElementById("bodyInput");
      const title = titleInput.value.trim();
      const body = bodyInput.value.trim();
  
      if (title !== "" && body !== "") {
        // Create new blog object
        const newBlog = {
          title: title,
          body: body,
        };
  
        // Sending POST request to API to add new blog
        axios.post("https://jsonplaceholder.typicode.com/posts", newBlog)
          .then(response => {
            const blog = response.data;
            // Adding new blog to the top of the list
            const li = document.createElement("li");
            li.innerHTML = `
              <h3 class="text-lg font-bold">${blog.title}</h3>
              <p>${blog.body}</p>
              <button data-id="${blog.id}" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mt-2">Delete</button>
            `;
            blogPosts.insertBefore(li, blogPosts.firstChild);
  
            // Limiting the number of blogs displayed to 10
            if (blogPosts.children.length > 10) {
              blogPosts.lastChild.remove();
            }
  
            // Clearing the input fields
            titleInput.value = "";
            bodyInput.value = "";
          })
          .catch(error => {
            console.error("Error adding new blog:", error);
          });
      }
    });
  
    // Handle for delete button click event 
    blogPosts.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        const id = event.target.dataset.id;
  
        // Sending DELETE request to API to delete the blog
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(() => {
            // Removing the blog item from the list
            event.target.parentNode.remove();
          })
          .catch(error => {
            console.error("Error deleting blog:", error);
          });
      }
    });
  });
  