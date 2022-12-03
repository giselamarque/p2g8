async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const author = document.querySelector('#post-author').value.trim();
    const isbn = document.querySelector("#post-isbn").value.trim();
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        author,
        isbn
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/user-profile');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.create-post-btn').addEventListener('submit', newFormHandler);
  