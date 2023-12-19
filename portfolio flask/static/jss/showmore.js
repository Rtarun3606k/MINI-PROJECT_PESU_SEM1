function toggleContent() {
  var content = document.querySelector('.content');
  var contentp = document.querySelector('.contparent');
  if (content.style.height) {
    content.style.height = null;
  } else {
    content.style.height = content.scrollHeight + 'px';
  }
}

function showMore() {
  var details = document.querySelector('details');
  details.open = true;
  
}

function toggleDetails() {
  var details = document.getElementById('moreDetails');
  details.open = !details.open;
}

function toggleContent() {
  var container = document.getElementById('contentContainer');
  container.style.display = (container.style.display === 'none') ? 'block' : 'none';
}

  document.body.classList.toggle('see')
  const seemore = document.querySelector('.fixed-button')
  
  document.querySelector('.fixed-button').addEventListener('click',()=>{
    document.body.classList.toggle('see')
    if (document.body.classList.contains('see')) {
        document.querySelector('.fixed-button').textContent ="See more"
      }
      else{
  document.body.classList.remove('see')
  
  document.querySelector('.fixed-button').textContent ="See less"
  }
})