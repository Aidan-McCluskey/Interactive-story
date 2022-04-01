restart.addEventListener("click", function () {
    location.reload();
});

restart.style.display = 'none';

x.addEventListener("click", function () {
    createStory(story.opener.text);
    restart.style.display = '';
});
