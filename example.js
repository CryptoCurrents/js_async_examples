setTimeout(function() {
  // first task
  console.log("First Task Complete!");
  setTimeout(function() {
    // second task
    console.log("Second Task Complete!");
    setTimeout(function() {
      // third task
      console.log("Third Task Complete!");
    }, 2000); 
  }, 2000);
}, 4000);


