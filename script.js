// ===============================
// POSTS DATA (WRITE FREELY)
// ===============================
let posts = [
  {
    title: "First Hackathon Competition",
    date: "2025-12-01",
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
    date: "2025-12-15",
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
  },

  {
    title: "web chat system",
    date: "2025-12-29",
    body: `
    I developed a web-based chat system using Node.js, Express, and socket.io as backend technologies, with HTML, CSS, and JS for the frontend.
    This chat system allows multiple users to join chat rooms and communicate in real time over the internet.
    features:
    - create a chat room
    - join existing chat rooms
    - real-time messaging using websockets
    - private chat between users

    Through this project, I learned how to set up a Node.js sever, handle websocket connections with socket.io, and manage multiple clients.
    I have used cloudflare tunnel to host the server on my local machine and make it accessible over the internet.
    It was a fun project that helped me understand web development and real-time communication better.
    I have used CSS for styling the chat interface to make it user-friendly.
    I have add GIF support for chat messages to make the chat more lively and fun with custom emojis and user can add their own gifs link too.
    Additionally, I have add voice message support using Web Audio to allow users to send and receive Voice messages in the chat, enhancing the communication experience, but
    I am still working on it to improve the quality and usability, now it support 192kbps audio recording and playback.
    I have add profile pictures for users to personalize their chat experience, and users can upload their own profile pictures.
    Main problem I faced during development was handling multiple clients and ensuring smooth real-time messaging. At start, there were some delays and message loss, but after optimizing the socket handling I have resolved these issues.
    Still there are some delays in message delivery when many users are connected, and when server starts getting high traffic, I am working on improving that. currently the server runs on my Local machine, so it has its limitations.
    I'm planning to deploy the server on my own server bulit with better hardware to handle more users and impove performance.
    I have add file sharing support to allow users to share images, videos, and documents in the chat.
    I make this project with the last project (TCP chat system in C) in mind, so I have used similar concepts of socket programming and client-server architecture, but implemented it using web technologies for better accessibility and user experience.
    I have to improve this project further by adding more features like message reactions, typing indicators, and better UI/UX design, I'm happy with the current UI/UX which I like so much, I have add glass UI design to make it look modern and sleek.

    Now problem I have faced making this project are lots of bugs in socket handling, message delivery delays, and ensuring smooth real-time communication.
    I have add calling feature too using WebRTC to allow users to make voice and video calls within the chat system, but later I have removed it due to performance issues on my local server, it was causing high CPU usage and Lag during calls and sometimes dropped the calls too.
    I will try to add it again When I deploy the server on better hardware.
    In mobile devices, I g have faced most problems while making this project UI bugs, voice message recording issues, sidenav bar issues and lots of but any how I have fixed that too and make it mobile reponsive too.
    There are lots of problems I have faced this are some, tunnel problems too..

    I have made this project because I always want my chat system...
    I got to know that I can make any chat system using this tech.
    <img src="images/lanchat.png" alt="Lan chat system" class="post-body-image">
    I have to improve this project more and make it better verison of its.
    `,
    category: "projects",
    preview: "images/lanchat.png"
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