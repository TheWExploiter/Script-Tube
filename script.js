let videos = [
  {
    title: "Sample Video 1",
    description: "This is a sample description.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    thumbnailUrl: "assets/default-thumbnail.jpg"
  },
  {
    title: "Sample Video 2",
    description: "Another example video.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    thumbnailUrl: "assets/default-thumbnail.jpg"
  }
];

function loadVideos() {
  const container = document.getElementById('videos-container');
  container.innerHTML = '';

  videos.forEach(video => {
    const videoCard = document.createElement('div');
    videoCard.classList.add('video-card');
    videoCard.innerHTML = `
      <img src="${video.thumbnailUrl}" alt="Video Thumbnail">
      <h3>${video.title}</h3>
      <p>${video.description}</p>
      <a href="${video.videoUrl}" target="_blank">Watch</a>
    `;
    container.appendChild(videoCard);
  });
}

function searchVideos() {
  const searchQuery = document.getElementById('search-bar').value.toLowerCase();
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery) || video.description.toLowerCase().includes(searchQuery)
  );
  loadFilteredVideos(filteredVideos);
}

function loadFilteredVideos(filtered) {
  const container = document.getElementById('videos-container');
  container.innerHTML = '';

  filtered.forEach(video => {
    const videoCard = document.createElement('div');
    videoCard.classList.add('video-card');
    videoCard.innerHTML = `
      <img src="${video.thumbnailUrl}" alt="Video Thumbnail">
      <h3>${video.title}</h3>
      <p>${video.description}</p>
      <a href="${video.videoUrl}" target="_blank">Watch</a>
    `;
    container.appendChild(videoCard);
  });
}

document.getElementById('upload-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const videoFile = document.getElementById('video-file').files[0];
  const thumbnail = document.getElementById('thumbnail').files[0];

  if (videoFile) {
    videos.push({
      title,
      description,
      videoUrl: URL.createObjectURL(videoFile),
      thumbnailUrl: thumbnail ? URL.createObjectURL(thumbnail) : "assets/default-thumbnail.jpg"
    });

    loadVideos();
    this.reset();
  }
});

loadVideos();
