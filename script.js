// ===============================
// POSTS DATA (WRITE FREELY)
// ===============================
let posts = [
  {
    title: "First Hackathon Competition",
    date: "2025-10-26",
    body: `
My first hackathon competition in high school where I secured 3rd place.
The competition theme was education, and I built a website called EduMate using HTML, CSS, JavaScript, and IndexedDB.
EduMate helps students track assignments, manage tasks, and understand what work is completed or pending.
This was my first big competition, so I was extremely nervous and excited at the same time.
During the PPT presentation, I was shaking, but I managed to present confidently.
On result day, I was not expecting to win, but I was very happy when my project secured 3rd place.
<img src="images/medal.jpeg" alt="Medal" class="post-body-image">
<img src="images/certificate.jpeg" alt="Certificate" class="post-body-image">
This experience taught me a lot about teamwork, time management, and the importance of practice. It was
a memorable experience that motivated me to participate in more competitions in the future.
    `,
    category: "competition",
    preview: "images/edumate.png"
  },
  {
    title: "TCP Chat System",
    date: "2025-11-05",
    body: `
I built a TCP-based chat system using C language and socket programming.
This system allows multiple clients to connect to a server and chat in real time over the same local network (LAN).
Through this project, I learned how TCP works and how socket communication is implemented.

How it works:
- One device hosts the server using ./server.exe
- Other devices connect using ./client.exe and the server IP address

The server is run using MSYS2 UCRT64 terminal.

<img src="images/TCP.png" alt="TCP Chat System" class="post-body-image">

This project was made for learning purposes and helped me understand networking deeply.
It was challenging to debug connection issues at first, but eventually everything worked smoothly.
    `,
    category: "projects",
    preview: "images/TCP.png"
  }
];

// ===============================
// DOM ELEMENTS
// ===============================
const postList = document.getElementById("postList");
const postView = document.getElementById("postView");
const blogSearch = document.getElementById("blogSearch");
const postTitle = document.getElementById("postTitle");
const postBody = document.getElementById("postBody");

// ===============================
// RENDER POSTS (NEWEST FIRST)
// ===============================
function renderPosts(filter = "") {
  if (!postList) return;

  postList.innerHTML = "";

  const filteredPosts = posts
    .filter(post => post.title.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (filteredPosts.length === 0) {
    postList.innerHTML = "<div class='no-posts'>No posts found. Try a different search term.</div>";
    return;
  }

  filteredPosts.forEach((post) => {
    const index = posts.indexOf(post);
    const div = document.createElement("div");
    div.className = "post";

    const previewImage = post.preview
      ? `<img src="${post.preview}" class="post-preview" alt="${post.title} preview">`
      : "";

    const previewText = post.body
      .replace(/<[^>]*>/g, "")
      .replace(/\n/g, " ")
      .trim()
      .slice(0, 200) + "...";

    div.innerHTML = `
      ${previewImage}
      <h3>${post.title}</h3>
      <small style="color:#666;">
        ${new Date(post.date).toDateString()} • ${post.category}
      </small>
      <p class="post-preview-text">${previewText}</p>
      <button class="read-more-btn">Read More →</button>
      <div style="clear: both;"></div>
    `;

    div.querySelector(".read-more-btn").onclick = () => openPost(index);
    postList.appendChild(div);
  });

  updateProfileStats();
}

// ===============================
// OPEN SINGLE POST
// ===============================
function openPost(index) {
  if (!postView || !postList) return;

  postList.classList.add("hidden");
  postView.classList.remove("hidden");

  postTitle.innerHTML = `
    ${posts[index].title}
    <div style="font-size:15px; color:#666; margin-top:8px; font-weight:normal;">
       ${new Date(posts[index].date).toDateString()} •  ${posts[index].category}
    </div>
  `;

  // Convert new lines to <br>
  postBody.innerHTML = posts[index].body.replace(/\n/g, "<br>");

  // Scroll to top of post view
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===============================
// BACK BUTTON
// ===============================
function goBack() {
  if (!postView || !postList) return;
  
  postView.classList.add("hidden");
  postList.classList.remove("hidden");
  
  // Scroll to top when going back
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===============================
// SEARCH FUNCTIONALITY
// ===============================
if (blogSearch) {
  blogSearch.addEventListener("input", e => {
    renderPosts(e.target.value);
  });
}

// ===============================
// PROFILE STATS UPDATE
// ===============================
function updateProfileStats() {
  const totalPostsElem = document.querySelector(".profile-info-total-posts");
  const categoriesElem = document.querySelector(".profile-info-categories");

  if (totalPostsElem) {
    totalPostsElem.innerText = `Total posts published: ${posts.length}`;
  }

  if (categoriesElem) {
    const categories = [...new Set(posts.map(p => p.category))];
    categoriesElem.innerText = `Categories / Topics: ${categories.join(", ")}`;
  }
}

// ===============================
// INITIALIZATION
// ===============================
document.addEventListener('DOMContentLoaded', function() {
  renderPosts();
  updateProfileStats();
});

// ===============================
// KEYBOARD SHORTCUTS
// ===============================
document.addEventListener('keydown', function(e) {
  // Press 'Escape' to go back to post list
  if (e.key === 'Escape' && !postView.classList.contains('hidden')) {
    goBack();
  }
});