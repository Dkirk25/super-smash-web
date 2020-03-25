let queries = {};
if(window.location.href.split('?')[1]) {
  let rawQueries = window.location.href.split('?')[1].split('&');

  for(let i = 0; i < rawQueries.length; i++) {
    let tuple = rawQueries[i].split('=');
    queries[tuple[0]] = tuple[1];
  }
}

export default queries;
