var likes = new Firebase('https://hmnia.firebaseIO.com/likes');
var likeArray = [];
var countTimeout;

likes.orderByChild('post').on('value', function(snapshot){
  likeArray = [];

  snapshot.forEach(function(childSnapshot){
    var key = childSnapshot.key();
    var like = childSnapshot.val();
    likeArray.push(like.post);

    clearTimeout(countTimeout);
    countTimeout = setTimeout(function(){
      displayCount(likeArray)
    }, 100);
  });
});

function displayCount(likeArray) {
  for(var i = 0; i < likeArray.length; i++) {
    var postNode = document.querySelector('[data-post='+likeArray[i]+']');
    if(!postNode) {
      var node = document.createElement('LI');
      var textnode = document.createTextNode(likeArray[i].replace(/-/g , ' '));
      node.setAttribute('data-post', likeArray[i]);
      node.setAttribute('data-count', 1);
      node.className += 'stat';
      node.appendChild(textnode);
      document.querySelector('.like-list').appendChild(node);
    } else {
      var currentCount = Number(postNode.getAttribute('data-count'));
      postNode.setAttribute('data-count', currentCount + 1);
    }
  }

  var statClass = document.getElementsByClassName('stat');
  var stats = [];
  for(var i = 0; i < statClass.length; i++) {
    stats.push(statClass[i]);
  }
  stats.sort(function(a, b){
      return a.getAttribute('data-count') - b.getAttribute('data-count');
  });

  stats.reverse();

  for(var i = 0; i < stats.length; i++) {
    document.querySelector('.like-list').appendChild(stats[i]);
  }
}
