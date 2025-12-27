// Posts will be loaded from JSON
let posts = [];

// DOM elements
const postList = document.getElementById("postList");
const postView = document.getElementById("postView");
const blogSearch = document.getElementById("blogSearch");

// Load posts from JSON file
async function loadPosts() {
  try {
    const response = await fetch('posts.json');
    posts = await response.json();
    renderPosts(); // render after loading
    updateProfileStats();
  } catch (err) {
    console.error("Failed to load posts:", err);
  }
}

// Render posts on blog page
function renderPosts(filter = "") {
  if (!postList) return;

  postList.innerHTML = "";
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredPosts.length === 0) {
    postList.innerHTML = '<div class="no-posts">No posts.</div>';
    updateProfileStats();
    return;
  }

  filteredPosts.forEach((post, index) => {
    const div = document.createElement("div");
    div.className = "post";

    const previewHTML = post.preview
      ? `<img src="${post.preview}" alt="Preview" class="post-preview">`
      : "";

    // Multi-line preview using slice and CSS clamp
    const previewText = post.body.replace(/<[^>]+>/g, ""); // strip HTML

    div.innerHTML = `
      ${previewHTML}
      <h3>${post.title}</h3>
      <p class="post-preview-text">${previewText}</p>
      <small>Category: ${post.category}</small>
      <button class="read-more-btn">Read More →</button>
      <div style="clear:both;"></div>
    `;

    div.querySelector(".read-more-btn").onclick = (e) => {
      e.stopPropagation();
      openPost(index);
    };

    postList.appendChild(div);
  });

  updateProfileStats();
}

// Open a single post
function openPost(index) {
  if (!postView || !postList) return;

  postList.classList.add("hidden");
  postView.classList.remove("hidden");

  // Scroll to top of the post view
  postView.scrollTop = 0;

  document.getElementById("postTitle").innerText = posts[index].title;
  document.getElementById("postBody").innerHTML = posts[index].body; // allow images/links
}

// Go back to post list
function goBack() {
  if (!postView || !postList) return;

  postView.classList.add("hidden");
  postList.classList.remove("hidden");
}

// Search functionality
if (blogSearch) {
  blogSearch.addEventListener("input", () => {
    renderPosts(blogSearch.value);
  });
}

// Update profile stats dynamically
function updateProfileStats() {
  const totalPosts = posts.length;
  const categories = [...new Set(posts.map(post => post.category))];

  const totalPostsElem = document.querySelector(".profile-info-total-posts");
  const categoriesElem = document.querySelector(".profile-info-categories");

  if (totalPostsElem) totalPostsElem.innerText = `Total posts published: ${totalPosts}`;
  if (categoriesElem) categoriesElem.innerText = `Categories / Topics: ${categories.join(", ")}`;
}

// Initial load
loadPosts();
