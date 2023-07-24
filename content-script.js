
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      // Check if the desired elements have been added to the DOM
      inject();
    }
  }
});

// Options for the observer (observe childList mutations in the entire document)
const observerConfig = { childList: true, subtree: true };
// Start observing the document for changes
observer.observe(document, observerConfig);

function inject(){
  //console.log("Fuck elon")

  const twitterLoading = document.querySelector('div[aria-label="Loading…"]');
  const twitterHome = document.querySelector('a[aria-label="Twitter"]');

  const newImage = document.createElement('img');
  newImage.src =  chrome.runtime.getURL("./logo2.png"); // Replace this with the path to your new image
  newImage.style.width = '32px';
  newImage.style.height = '32px';
  newImage.addEventListener('click', function(event) {
    const linkUrl = "/home";
    window.location.href = linkUrl;
  });

  if(twitterLoading){
    twitterLoading.firstChild.remove()
  }

  if (twitterHome) {
    twitterHome.parentNode.replaceChild(newImage,twitterHome);
  }

}

inject()
