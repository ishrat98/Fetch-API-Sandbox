document.getElementById('getText').addEventListener('click', getText);

function getText()  {
//   console.log(12);

fetch('text.txt')
.then(res=> {
   return res.text();
})
.then(data=>    {
    console.log(data);
})

  }


