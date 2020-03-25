const guidelist = document.querySelector('.guides');

const setupguide = (data) => {

  if (data.length) {

    let html = '';
    data.forEach(doc => {
      const guide = doc.data();
      const li = `
    <li>
      <div class="collapsible-header grey lighten-4">${guide.title}</div>
      <div class="collapsible-body white">${guide.content}</div>
    </li>
    `;

      html += li
    })
    guidelist.innerHTML = html;
  }
else
{
 guidelist.innerHTML = "<h1> Login to View </h1>"
}



  
}



// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});