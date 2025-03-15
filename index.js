document.addEventListener('DOMContentLoaded', () => {
    
    const ramens = [
      { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/img1.jpeg", rating: 5, comment: "Delicious!" },
      { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/img2.jpeg", rating: 4, comment: "Very flavorful!" },
      { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/img3.jpeg", rating: 4, comment: "Spectacularly amazing." }
    ];
  
    function displayRamens() {
      const ramenMenu = document.getElementById('ramen-menu');
      ramenMenu.innerHTML = '';
      ramens.forEach(ramen => {
        const ramenImage = document.createElement('img');
        ramenImage.src = ramen.image;
        ramenImage.alt = ramen.name;
        ramenImage.classList.add('ramen-img');
        ramenImage.addEventListener('click', () => handleClick(ramen));
        ramenMenu.appendChild(ramenImage);
      });
    }
  
    function handleClick(ramen) {
      const ramenName = document.getElementById('ramen-name');
      const ramenRestaurant = document.getElementById('ramen-restaurant');
      const ramenRating = document.getElementById('ramen-rating');
      const ramenComment = document.getElementById('ramen-comment');
  
      ramenName.textContent = ramen.name;
      ramenRestaurant.textContent = `Restaurant: ${ramen.restaurant}`;
      ramenRating.textContent = `Rating: ${ramen.rating}`;
      ramenComment.textContent = `Comment: ${ramen.comment}`;
    }
  
    function addSubmitListener() {
      const ramenForm = document.getElementById('ramen-form');
      ramenForm.addEventListener('submit', (event) => {
        event.preventDefault();
  
        const name = document.getElementById('name').value;
        const restaurant = document.getElementById('restaurant').value;
        const rating = document.getElementById('rating').value;
        const comment = document.getElementById('comment').value;
        const imageUrl = document.getElementById('image').value;
  
        const newRamen = {
          id: ramens.length + 1,
          name,
          restaurant,
          rating: parseInt(rating),
          comment,
          image: imageUrl
        };
  
        ramens.push(newRamen);
        displayRamens();
  
        ramenForm.reset();
      });
    }
    function main() {
      displayRamens();
      addSubmitListener();
    }
  
    function showInitialRamenDetails() {
      handleClick(ramens[0]);
    }
  
    main();
    showInitialRamenDetails();
  });
  