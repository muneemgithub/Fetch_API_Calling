async function fetchPostsData() {
  try {
          const PostData = await fetch("https://jsonplaceholder.typicode.com/posts");


          const data = await PostData.json();

          console.log(data);
          
          const ul = document.getElementById("posts_lists");

          data.forEach((item) => {
            const li = document.createElement('li');
              li.innerText = `User Id:  ${item.id}, Title: ${item.title}`;
              ul.appendChild(li);
          });


    
  } catch (error) {
    console.log("Error fetching data:", error);
    
  }

}



fetchPostsData();
async function fetchPostsData() {
  try {
          const PostData = await fetch("https://jsonplaceholder.typicode.com/todos");


          const data = await PostData.json();

          console.log(data);
          
          const ul = document.getElementById("todo_list");

          data.forEach((item) => {
            const li = document.createElement('li');
              li.innerText = `User Id:  ${item.id}, Title: ${item.title}`;
              ul.appendChild(li);
          });


    
  } catch (error) {
    console.log("Error fetching data:", error);
    
  }

}

fetchPostsData();