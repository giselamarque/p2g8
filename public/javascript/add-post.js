async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value
    const author = document.querySelector('#post-author').value
    const isbn = document.querySelector("#post-isbn").value
  
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
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);
  