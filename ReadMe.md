# Blogmate

Blogmate is a comprehensive blogging platform and library designed for modern content creators. It features a responsive design, rich media support, and seamless integration with Vercel hosting.

## Features

*   **Responsive Layout:** Optimized for all devices:
    *   Desktop (>1024px)
    *   Tablet (768px - 1024px)
    *   Mobile (<768px)
    *   Small Mobile (<480px)
*   **Rich Media:** Native support for Video, Audio, YouTube, and Vimeo.
*   **Enhanced UI:** Improved animations and profile section design.
*   **Library Integration:** Includes `blogmate` library.

## Documentation

### Post Data Structures

Blogmate supports various media types defined in the post configuration.

#### Video
```javascript
{
  title: "My Project Demo",
  date: "2026-01-15",
  body: `
    Check out my latest project in action!
    <video src="videos/demo.mp4" class="post-body-video" controls></video>
    This demonstrates all the features I built.
  `,
  category: "demo",
  preview: "videos/demo.mp4",
  videoThumbnail: "images/demo-thumb.jpg", // Optional
  mediaType: "video",
  videoDuration: "3:45" // Optional
}
```

#### Audio
```javascript
{
  title: "Tech Podcast Episode 1",
  date: "2026-01-20",
  body: `
    Listen to my thoughts on web development trends.
    <audio src="audio/podcast.mp3" class="post-body-audio" controls></audio>
  `,
  category: "podcast",
  mediaType: "audio"
}
```

#### Vimeo / Embeds
```javascript
{
  title: "Portfolio Showcase",
  date: "2026-02-01",
  body: `
    My portfolio walkthrough:
    <iframe src="https://player.vimeo.com/video/VIDEO_ID" class="post-body-embed" allowfullscreen></iframe>
  `,
  category: "showcase",
  embedUrl: "https://player.vimeo.com/video/VIDEO_ID",
  mediaType: "embed"
}
```

## Changelog

*   **Design:** Updated design with better animations.
*   **Mobile:** Improved mobile views across 4 breakpoints.
*   **System:** Added video/audio/youtube/vimeo code support.
*   **Domain:** `blogmate.me` purchased on Dec 27, 2025.

## Known Issues

*   **Desktop (1024px):** "More" button closes unexpectedly on mouse move.
*   **Mobile:** Profile picture (pp) error name display issue.

## Hosting Status (Vercel)

*   **Fast Data Transfer:** 267.08 MB / 100 GB
*   **Edge Requests:** 1.3K / 1M
*   **Edge Request CPU Duration:** 0s / 1h
*   **Fluid Provisioned Memory:** 0 / 360 GB-Hrs
