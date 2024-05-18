fetch("https://coding-week-2024-api.onrender.com/api/data")
  .then(response => response.json())

.then(data => {
    console.log(data);

    function updateElement(id, value) {
      const element = document.getElementById(id);
      if (element) {
        element.innerHTML = value;
      } else {
        console.warn(`Element with ID '${id}' not found.`);
      }
    }

    function updateElementAttribute(id, attribute, value) {
        const element = document.getElementById(id);
        if (element) {
          element[attribute] = value;
        } else {
          console.warn(`Element with ID '${id}' not found.`);
        }
      }
    
    for (let i = 0; i < (data.length)-6; i++) {
      updateElement(`type-${i + 1}`, data[i].type);
      updateElement(`author-${i + 1}`, data[i].author || "Unknown Author");
      
    }
    
      for (let i = 0; i < (data.length); i++) {
        updateElement(`headline-${i + 1}`, data[i].headline);
        updateElement(`date-${i + 1}`, data[i].date);
        updateElementAttribute(`img${i +1}`, 'src', data[i].image);
        updateElement(`content-${i + 1}`, data[i].content);
      }  
      

  })
  .catch(error => console.error("Error fetching data:", error));

  document.addEventListener('DOMContentLoaded', function() {
    // Array of links and popups
    const links = ['link1', 'link2', 'link3', 'link4','link5','link6','link7','link8','link9','link10'];
    const popups = ['popup1', 'popup2', 'popup3', 'popup4','popup5','popup6','popup7','popup8','popup9','popup10'];

    // Add event listeners to links
    links.forEach((linkId, index) => {
        document.getElementById(linkId).addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            document.getElementById(popups[index]).style.display = 'block';
        });
    });

    // Add event listeners to close buttons
    document.querySelectorAll('.close').forEach(button => {
        button.addEventListener('click', function() {
            const popupId = this.getAttribute('data-popup');
            document.getElementById(popupId).style.display = 'none';
        });
    });

    // Close the popup when clicking outside of the popup content
    window.addEventListener('click', function(event) {
        popups.forEach(popupId => {
            if (event.target == document.getElementById(popupId)) {
                document.getElementById(popupId).style.display = 'none';
            }
        });
    });
});
