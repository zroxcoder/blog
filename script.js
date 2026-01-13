// ===============================
// POSTS DATA WITH MEDIA SUPPORT
// ===============================
let posts = [
  {
    title: "First Hackathon Competition",
    date: "2025-12-01",
    body: `
    My first hackathon in high school was definitely an experience to remember, especially since I ended up taking home 3rd place! The theme was all about education, and I focused on creating a website called EduMate using HTML, CSS, JavaScript, and IndexedDB. The idea behind EduMate was to help students keep track of their assignments, manage tasks, and know exactly what work was done or still in progress.

    I was a bundle of nerves and excitement before the event—this was my first big competition! During the presentation, I could feel my hands shaking, but somehow I managed to deliver it with confidence. When the results were announced, I was honestly not expecting to win anything, so I was overjoyed when they called my name for 3rd place!

  Here are some keepsakes from that day:
  <img src="images/medal.jpeg" alt="Medal" class="post-body-image">
  <img src="images/certificate.jpeg" alt="Certificate" class="post-body-image">

  This whole experience taught me a lot about working in a team, managing my time effectively, and how crucial practice really is. It was such a memorable moment that it inspired me to seek out more competitions in the future!
    `,
    category: "competition",
    preview: "images/edumates.png",
    mediaType: "image"
  },
  {
    title: "TCP Chat System",
    date: "2025-12-15",
    body: `
    When I was in 10th grade, I have first study C language for first time, and I got little curiosity about C, but in that time I don't have resource to make project in C language,
    I just made some games like number guessing, car rack game and some more in my school computer lab, after that I have started learning C language and I have so much intrest in C language then,
    Like C language was so goated language almost everything made on C language.
    
    Now when I got laptop I have to made something in C language, But I don't know how to make because before that I have just made samll projects.
    One day I have seen one post in X about UDP protocols, I have research about that What that means and got interested in it. After that I have learned about TCP and UDP protocols.
    I got know difference between TCP and UDP protocols and how they work.
    At first I have simple TCP chat system just server and client connect in same network and can send message to each other, but it have lots of bugs and issues and I have to improve it.
    I have used AI, Youtube and Learning from others to make this project.
    After that I have improved this project and make it better verison of its.

    features of this project:
    - create a channel
    - join existing channel
    - real-time messaging using TCP protocols
    - private chat between users
    - admin control
    - private channel 
    - can share files
    - emoji support

    This is amazing project that I have made in my High school, I have finished this project in 2 weeks and I have made it in C language,
    We have to run server on one device and rest of users connect to that server using IP address of server.
    I have used MSYS2 terminal to run server, we can connect from other devices using ./client.exe file to connect to server with the help of CMD pannel,but first we have to make file .exe file using makefile.
    Then share .exe client file with other and host server in MSYS2 terminal and run server and connect to server from other devices but they must be in same network.

    Like this in image:
    <img src="images/TCP.png" alt="TCP Chat System" class="post-body-image">

    I always want to make project in C language once dream to make it , when I was in secondary school.
`,
    category: "projects",
    preview: "images/TCP.png",
    mediaType: "image"
  },
  {
    title: "Web Chat System",
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
In mobile devices, I have faced most problems while making this project UI bugs, voice message recording issues, sidenav bar issues and lots of but any how I have fixed that too and make it mobile reponsive too.
There are lots of problems I have faced this are some, tunnel problems too..

I have made this project because I always want my chat system...
I got to know that I can make any chat system using this tech.
<img src="images/lanchat.png" alt="Lan chat system" class="post-body-image">
I have to improve this project more and make it better verison of its.
    `,
    category: "projects",
    preview: "images/lanchat.png",
    mediaType: "image"
  },

  {
    title: "2025 Moment",
    date: "2025-12-31",
    body: `
   This year is going to be a memorable one for me. A lot of things happened—some good, some bad, and some just normal. Overall, it was a year full of experiences and lessons.
   First of all, I completed my secondary education, and now I am in high school. I enjoyed spending time with my friends and family so much. After finishing my secondary education, I moved to the capital city for my higher studies.
   Initially, I had planned to study +2 in commerce, but I ended up choosing A Levels in non-science subjects. I selected A Levels because I am more interested in practical knowledge and want to study business and economics in depth. I could have studied +2 as well, but my goal is to go to a foreign country for higher education, and A Levels felt like a better path for me.
   After my 10th-grade exams, I had a three-month holiday. I decided to enjoy the break, but after just one week, I came to the capital city. This was the first time I had lived alone without my family. In the beginning, I didn’t know what I would do or how I would manage. However, after some time, I became comfortable here.
   I have always wanted to study outside my hometown, and when I got this chance, it felt like both a good and a bad decision—but mostly a good one. Many good things happened. The bad part was that I became lazy and careless with my work. Until 10th grade, my mom always took care of me and guided me. Suddenly, I had to manage everything on my own. It’s not that I didn’t do my work before, but my mom was always there to supervise me—now she isn’t.
   After that, I prepared for +2 for two weeks, and then I learned about A Levels. I became interested in the course because I wanted a more practical learning approach rather than traditional courses. So, I joined A Levels.
   For the first three months, we had foundation classes, and after that, regular classes started. I made new friends, but on the first day, I was extremely nervous and confused. I kept thinking whether I had made a mistake by choosing A Levels. Later, I realized I was wrong—it turned out to be one of the best decisions I have ever made. I learned many things that I would never have learned if I had chosen +2. +2 is also a good option, but I needed something different.
   After three months, we had a welcome program, and it was an amazing experience. I enjoyed it so much. It was my first time attending such a big event; before that, I had only participated in small school programs.
   When regular classes started, I slowly began making friends. At first, I was very introverted and shy. I didn’t talk to anyone because I felt nervous and didn’t know what to say. Over time, I started enjoying A Levels more and more.
   During the first-term exams, protests started, and our exams were postponed three times. When the exams finally began, I had almost forgotten everything because I thought the first term would be canceled 😭🤣. I failed in one subject.
   After that, many things happened. I participated in a hackathon and won third place. I had a lot of fun this year, and honestly, I don’t even know what else to write. But one thing is clear—this year was a turning point in my life. I learned so many things, not just academically but also personally.
   I hope next year will be even better, and that I can achieve more goals in 2026. I want to work harder and improve myself more than I did this year.
  Thank you, 2025, for all the memories and lessons.
   `,
   category: "momories"
  },

  {
    title: "2026 Goals",
    date: "2026-01-04",
    body: `
    As 2026 begins, I have set clear goals for myself that I am committed to completing this year.
    My main goals for 2026 are:
   -Complete 5 business case studies
   -Achieve 1,000 GitHub contributions
   -Build a complete BlogMate ecosystem
   -Maintain 4 hours of daily study
   -Conduct startup research
   -Write a research paper
   -Complete a self-study network course
   -Upgrade existing projects

   If I miss my 4 hours of study on any day, the time will accumulate, and I will make sure to complete it later. No matter what, I am determined to achieve these goals.

   These are my main goals, and there are more I plan to accomplish along the way.

   All the best to me. See you in 2027 — I hope I can proudly say that I completed my goals for 2026.

    `,
    category:"2026 goals"
  },

  {
    title: "Nosofy",
    date: "2026-01-09",
    body: `
    I have make one project for my hackathon called EduMate. Now I'm thinking to convert into prouductivity web app and later app and rename it too Nosofy.
    I have add new features in it and improve old one, with more better features. Make exist chatbot more better, before chatbot can only answer the normal reponse helping to do what first and show pending tasks.
    Now I have improve it and make it suggestion, tips, helping etc. Add new features like expenses trackers, watch list and improve chat bot to answer it more better, can help user to suggest what they should watch, expenses tips, study tips with resources.
    Add streak days, mission to achive, improve dashboard. I have rename it Nosofy because EduMate means tools for a education, and I have to make it more better and features. so, I have rename it too Nosofy which means The name "Nosofy" appears to be a blend of "nos" and a suffix that suggests action or a state. "Nos" could be derived from the Latin word "nos," meaning "we" or "us," emphasizing collaboration and community, which aligns with the app's focus on sharing and chatting with others. The suffix "-ofy" suggests transformation or the process of making something into a particular state, akin to "amplify" or "modify." Together, "Nosofy" conveys a sense of enhancing collective productivity and interaction, making it fitting for a platform designed to save, share, and discuss projects.
    Planning to add chat system, and games in it for more better learning, shareing, texting, etc. But first I have to make core website of it, 
    I will start working on it after exam, and make it complete docs of it with features plan. I have already make MVP model of it now just making complete Nosofy with core/main fetaures.
    I have 10 days break, and I'm going back home I will work on this project at that time. 
    I will post more about this once I start working on it. 
    `,
    category:"Nosofy update"
  },

  {
    title: "Nosofy - progress",
    date: "2026-01-11",
    body: `
    Just reached home at around morning 6 am, after reaching home I feel happy and little bit exctied to visit home after long time. 
    Nothing much I have done today, after eating lunch and breakfast, I slept for 4-5 hours after wakeing up I have eaten noodles and go outside with friends.
    Enojyable day and after returning back home I have eaten fish after long time, it was my fav, and spend 2 hours with mom and dad after so long time.
    After that I have done some work on nosofy, but still at old EduMate, I haven't made nosofy website still. I'm still working on EduMate code, pretty good working, I have update db code and add expenses, watchlist import/export data working like other and add new features called passwords I will rename it to vault later.
    I have add encryption for storing password secure and leak in db too, it shows in hash in indexddb too. When we export it's data it still in hash form.
    Update code according to hash working function using web crypto and js hashing.
    pretty good improvement in it. 
    I'm working in chat system which I will add in this later.
    For now everything going well hope I will add more things in it soon and starts working on Nosofy from tomorrow.
    `,
    category:"Nosofy update"
  },
  
  {
    title: "Nosofy - progress",
    date: "2026-01-12",
    body:`
    Today was so much busy day, I have lots of works at day time, I was wake up at 11 am my mom have waked up me... after that I have eaten last night fish, then I have gone to buy shoes.
    After coming back I have spend my time sitting at sunlight and at shop, after 5 pm I eat snacks and then again gone for buying clothes. Then eat dinner, after that I have study for while and after that I have work on EduMate add new features cloudhub where user can manage their cloud, emails, other services as single place.
    I have working in this features little bit more chnages and improvement need in it, I will do that as soon as I can, and for now I'm thinking for new features, I don't know next what I should add.
    I'm working on that and first version of Nosofy I have started working on it. I have layout everything for that and little bit research.
    For toady this much only!
    `,
    category : "Nosofy update"
  },

  {
    title: "Nosofy - progress",
    date: "2026-01-12",
    body: `
    Today 12 Jan 2026 I have started my morning again late waking up at 11 am then eat lunch, after that I have study for sometimes sitting at roof. 
    At 1 pm I slept for 3 hours and wake up at 4 pm then I have eaten snacks then wash meat and at 6 pm again some little bit works, then after dinner I have start working In Nosofy I hava make ICO (favicon), then github repo and start working in dashboard.
    Still working in dashboard code, I have changed dashboard function and it's old function makeing it more useful now. I have selected light green and lime green with yellow green(lime)shade as color platter for app, website, and add new things Nosofy academy for providing free courses and learning skills to user.
    Dashboard working will be finished today, I have changed db to v12 and nosofy db.
    Let see what happend next, I'm wokring in it, time was 10 pm now and I'm not sleep anymore let's see how long I can work.
    I'm writing this while making too.
    `,
     category : "Nosofy update"
  },

  {
    title: "Nosofy - progress",
    date: "2026-01-13",
    body:`
    Today 13 Jan 2026, Woke up at 1 pm after my mom wake up me,, last night I slept at 4 am as always then after waking up, I eat lunch and then watch MR Robot series, 
    then after 3-4 pm I slept after eating snacks and wake up at dinner time, then I have eaten my dinner then I watch mobile phone for 2 hours then at 10:40 pm I have starts working at Nosofy, I have work little bit in day time also but not more, I have add new things in Notes features it looks cool now.
    I have add color platter, Now we can select color of card and chnage it, this look so cool, I didn't except this will be so good ! For now this much things enough. For now I have focus on lanuch of Nosofy V1.
    I'm working on that, I'm writting docs along with codign and debugging security checks, working flow, flowchart, algorithm.
    Till now everything going perfect and as I think, let see what happend next.
    For today this much only ! I think I have to share my life things too with this Nosofy, I will share that with other post maybe, I have to write about myself..Thinking to write that too !
    `,
     category : "Nosofy update"
  },
  
];

// ===============================
// DOM ELEMENTS
// ===============================
const postList = document.getElementById("postList");
const postView = document.getElementById("postView");
const blogSearch = document.getElementById("blogSearch");
const postTitle = document.getElementById("postTitle");
const postBody = document.getElementById("postBody");
const videoModal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");

// ===============================
// UTILITY: Get Video Thumbnail
// ===============================
function getVideoThumbnail(videoSrc) {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.src = videoSrc;
    video.crossOrigin = "anonymous";
    video.addEventListener('loadeddata', function() {
      video.currentTime = 1; // Capture at 1 second
    });
    video.addEventListener('seeked', function() {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL());
    });
    video.addEventListener('error', function() {
      resolve(null); // Return null if thumbnail generation fails
    });
  });
}

// ===============================
// UTILITY: Format Duration
// ===============================
function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ===============================
// UTILITY: Detect Media Type
// ===============================
function detectMediaType(url) {
  if (!url) return null;
  
  const videoExts = ['.mp4', '.webm', '.ogg', '.mov'];
  const audioExts = ['.mp3', '.wav', '.ogg', '.m4a'];
  
  // Check for YouTube
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return 'youtube';
  }
  
  // Check for Vimeo
  if (url.includes('vimeo.com')) {
    return 'vimeo';
  }
  
  // Check file extensions
  const lowerUrl = url.toLowerCase();
  if (videoExts.some(ext => lowerUrl.endsWith(ext))) {
    return 'video';
  }
  if (audioExts.some(ext => lowerUrl.endsWith(ext))) {
    return 'audio';
  }
  
  return 'image';
}

// ===============================
// UTILITY: Get Embed URL
// ===============================
function getEmbedUrl(url) {
  // YouTube
  if (url.includes('youtube.com/watch?v=')) {
    const videoId = url.split('v=')[1].split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  // Vimeo
  if (url.includes('vimeo.com/')) {
    const videoId = url.split('vimeo.com/')[1].split('?')[0];
    return `https://player.vimeo.com/video/${videoId}`;
  }
  
  return url;
}

// ===============================
// RENDER POSTS (NEWEST FIRST)
// ===============================
async function renderPosts(filter = "") {
  if (!postList) return;

  postList.innerHTML = "";

  const filteredPosts = posts
    .filter(post => post.title.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (filteredPosts.length === 0) {
    postList.innerHTML = "<div class='no-posts'>No posts found. Try a different search term.</div>";
    return;
  }

  for (const post of filteredPosts) {
    const index = posts.indexOf(post);
    const div = document.createElement("div");
    div.className = "post";

    let mediaPreview = "";
    const mediaType = post.mediaType || detectMediaType(post.preview);

    // Generate appropriate media preview
    if (mediaType === 'video' && post.preview) {
      const thumbnail = post.videoThumbnail || post.preview;
      const duration = post.videoDuration || '';
      
      mediaPreview = `
        <div class="video-preview-wrapper" data-post-index="${index}">
          <video src="${post.preview}" preload="metadata" muted></video>
          <div class="video-play-icon"></div>
          ${duration ? `<div class="video-duration">${duration}</div>` : ''}
        </div>
      `;
    } else if (mediaType === 'audio') {
      mediaPreview = `
        <div class="audio-preview-wrapper">
          <div class="audio-preview-icon">
            <div class="audio-icon">🎵</div>
            <div>
              <strong style="color: #2c4fa3;">Audio Post</strong><br>
              <small style="color: #666;">Click to listen</small>
            </div>
          </div>
        </div>
      `;
    } else if (mediaType === 'youtube' || mediaType === 'vimeo' || post.embedUrl) {
      const embedUrl = post.embedUrl || getEmbedUrl(post.preview);
      mediaPreview = `
        <div class="embed-preview-wrapper">
          <iframe src="${embedUrl}" allowfullscreen loading="lazy"></iframe>
        </div>
      `;
    } else if (post.preview) {
      mediaPreview = `<img src="${post.preview}" class="post-preview" alt="${post.title} preview">`;
    }

    const previewText = post.body
      .replace(/<[^>]*>/g, "")
      .replace(/\n/g, " ")
      .trim()
      .slice(0, 200) + "...";

    div.innerHTML = `
      ${mediaPreview}
      <h3>${post.title}</h3>
      <small style="color:#666;">
        ${new Date(post.date).toDateString()} • ${post.category}
      </small>
      <p class="post-preview-text">${previewText}</p>
      <button class="read-more-btn">Read More →</button>
      <div style="clear: both;"></div>
    `;

    // Add click handler for video preview
    const videoWrapper = div.querySelector('.video-preview-wrapper');
    if (videoWrapper) {
      videoWrapper.addEventListener('click', (e) => {
        e.stopPropagation();
        openVideoModal(post.preview);
      });
    }

    div.querySelector(".read-more-btn").onclick = () => openPost(index);
    postList.appendChild(div);
  }

  updateProfileStats();
}

// ===============================
// OPEN VIDEO MODAL
// ===============================
function openVideoModal(videoSrc) {
  if (!videoModal || !modalVideo) return;
  
  modalVideo.src = videoSrc;
  videoModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevent background scroll
  
  // Play video
  modalVideo.play();
}

// ===============================
// CLOSE VIDEO MODAL
// ===============================
function closeVideoModal() {
  if (!videoModal || !modalVideo) return;
  
  modalVideo.pause();
  modalVideo.src = '';
  videoModal.classList.add('hidden');
  document.body.style.overflow = ''; // Restore scroll
}

// Close modal on overlay click
if (videoModal) {
  videoModal.querySelector('.video-modal-overlay').addEventListener('click', closeVideoModal);
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

  // Convert new lines to <br> and process media tags
  let bodyContent = posts[index].body.replace(/\n/g, "<br>");
  
  // Auto-convert YouTube/Vimeo URLs to embeds
  bodyContent = bodyContent.replace(
    /(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/g,
    '<div class="post-body-embed"><iframe src="https://www.youtube.com/embed/$4" allowfullscreen></iframe></div>'
  );
  
  bodyContent = bodyContent.replace(
    /(https?:\/\/)?(www\.)?vimeo\.com\/([\w-]+)/g,
    '<div class="post-body-embed"><iframe src="https://player.vimeo.com/video/$3" allowfullscreen></iframe></div>'
  );
  
  postBody.innerHTML = bodyContent;

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
  
  // Pause any playing videos/audio in post view
  const videos = postView.querySelectorAll('video');
  const audios = postView.querySelectorAll('audio');
  videos.forEach(v => v.pause());
  audios.forEach(a => a.pause());
  
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
  // Press 'Escape' to go back to post list or close modal
  if (e.key === 'Escape') {
    if (!videoModal.classList.contains('hidden')) {
      closeVideoModal();
    } else if (!postView.classList.contains('hidden')) {
      goBack();
    }
  }
});

// ===============================
// LAZY LOADING FOR VIDEOS
// ===============================
if ('IntersectionObserver' in window) {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        if (video.dataset.src) {
          video.src = video.dataset.src;
          video.removeAttribute('data-src');
        }
        videoObserver.unobserve(video);
      }
    });
  }, {
    rootMargin: '50px'
  });

  // Observe videos when they're added to the DOM
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('video[data-src]').forEach(video => {
      videoObserver.observe(video);
    });
  });
}