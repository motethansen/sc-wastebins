const brands = [
    {
      iconName: "adobe",
      brandName: "Adobe",
      color: "#ff0000",
      bin: "red"
    },
    {
      iconName: "airbnb",
      brandName: "Airbnb",
      color: "#fd5c63",
      bin: "red"
    },
    {
      iconName: "amazon",
      brandName: "Amazon",
      color: "#333333",
      bin: "red"
    },
    {
      iconName: "android",
      brandName: "Android",
      color: "#a4c639",
      bin: "red"
    },
    {
      iconName: "angellist",
      brandName: "AngelList",
      color: "#000000",
      bin: "red"
    },
    {
      iconName: "angular",
      brandName: "Angular",
      color: "#b52e31",
      bin: "green"
    },
    {
      iconName: "app-store-ios",
      brandName: "App Store",
      color: "#5fc9f8",
      bin: "green"
    },
    {
      iconName: "apple",
      brandName: "Apple",
      color: "#aaaaaa",
      bin: "green"
    },
    {
      iconName: "bitcoin",
      brandName: "Bitcoin",
      color: "#d4af37",
      bin: "green"
    },
    {
      iconName: "blackberry",
      brandName: "BlackBerry",
      color: "#000000",
      bin: "green" 
    },
    {
      iconName: "blogger",
      brandName: "Blogger",
      color: "#f57d00",
      bin: "green" 
    },
    {
      iconName: "bluetooth",
      brandName: "Bluetooth",
      color: "#3b5998",
      bin: "green" 
    },
    {
      iconName: "bootstrap",
      brandName: "Bootstrap",
      color: "#553c7b",
      bin: "green" 
    },
    {
      iconName: "chrome",
      brandName: "Google Chrome",
      color: "#333333",
      bin: "green" 
    },
    {
      iconName: "codepen",
      brandName: "CodePen",
      color: "#111111",
      bin: "green" 
    },
    {
      iconName: "cpanel",
      brandName: "cPanel",
      color: "#ff6c2c",
      bin: "green" 
    },
    {
      iconName: "css3-alt",
      brandName: "CSS3",
      color: "#264de4",
      bin: "green" 
    },
    {
      iconName: "dev",
      brandName: "Dev",
      color: "#111111",
      bin: "green" 
    },
    {
      iconName: "dhl",
      brandName: "DHL",
      color: "#ba0c2f",
      bin: "green" 
    },
    {
      iconName: "digital-ocean",
      brandName: "DigitalOcean",
      color: "#008bcf",
      bin: "yellow" 
    },
    {
      iconName: "discord",
      brandName: "Discord",
      color: "#7289da",
      bin: "yellow" 
    },
    {
      iconName: "docker",
      brandName: "Docker",
      color: "#0db7ed",
      bin: "yellow"  
    },
    {
      iconName: "dribbble",
      brandName: "Dribbble",
      color: "#ea4c89" ,
      bin: "yellow" 
    },
    {
      iconName: "dropbox",
      brandName: "Dropbox",
      color: "#007ee5",
      bin: "yellow"  
    },
    {
      iconName: "drupal",
      brandName: "Drupal",
      color: "#0077c0",
      bin: "yellow"  
    },
    {
      iconName: "ebay",
      brandName: "eBay",
      color: "#333333",
      bin: "yellow"  
    },
    {
      iconName: "edge",
      brandName: "Microsoft Edge",
      color: "#0078d7",
      bin: "yellow"  
    },
    {
      iconName: "ember",
      brandName: "Ember.js",
      color: "#f23819" ,
      bin: "yellow" 
    },
    {
      iconName: "ethereum",
      brandName: "Ethereum",
      color: "#666666",
      bin: "yellow"  
    },
    {
      iconName: "etsy",
      brandName: "Etsy",
      color: "#d5641c",
      bin: "yellow"  
    },
    {
      iconName: "evernote",
      brandName: "Evernote",
      color: "#2dbe60",
      bin: "yellow"  
    },
    {
      iconName: "facebook-square",
      brandName: "Facebook",
      color: "#3b5998",
      bin: "yellow"  
    },
    {
      iconName: "fedex",
      brandName: "FedEx",
      color: "#4d148c",
      bin: "yellow" 
    },
    {
      iconName: "firefox",
      brandName: "Firefox",
      color: "#e66000",
      bin: "yellow"  
    },
    {
      iconName: "font-awesome",
      brandName: "Font Awesome",
      color: "#228ae6",
      bin: "yellow"  
    },
    {
      iconName: "free-code-camp",
      brandName: "freeCodeCamp",
      color: "#006400",
      bin: "yellow"  
    },
    {
      iconName: "git-alt",
      brandName: "Git",
      color: "#f1502f" ,
      bin: "yellow" 
    },
    {
      iconName: "github",
      brandName: "GitHub",
      color: "#333333",
      bin: "yellow"  
    },
    {
      iconName: "google",
      brandName: "Google",
      color: "#333333",
      bin: "yellow"  
    },
    {
      iconName: "google-play",
      brandName: "Google Play",
      color: "#3bccff" ,
      bin: "yellow" 
    },
    {
      iconName: "grunt",
      brandName: "Grunt",
      color: "#fba919",
      bin: "red"  
    },
    {
      iconName: "gulp",
      brandName: "gulp.js",
      color: "#db4446",
      bin: "red"   
    },
    {
      iconName: "html5",
      brandName: "HTML5",
      color: "#e34f26",
      bin: "red"   
    },
    {
      iconName: "imdb",
      brandName: "IMDb",
      color: "#dba506",
      bin: "red"  
    },
    {
      iconName: "instagram",
      brandName: "Instagram",
      color: "#e1306c",
      bin: "red"   
    },
    {
      iconName: "internet-explorer",
      brandName: "Internet Explorer",
      color: "#1ebbee",
      bin: "red"   
    },
    {
      iconName: "itunes",
      brandName: "iTunes",
      color: "#ea4cc0",
      bin: "red"   
    },
    {
      iconName: "java",
      brandName: "Java",
      color: "#5382a1",
      bin: "red"   
    },
    {
      iconName: "js-square",
      brandName: "JavaScript",
      color: "#333333",
      bin: "red"   
    },
    {
      iconName: "jsfiddle",
      brandName: "JSFiddle",
      color: "#333333",
      bin: "red"   
    },
    {
      iconName: "kickstarter",
      brandName: "Kickstarter",
      color: "#2bde73",
      bin: "red"   
    },
    {
      iconName: "laravel",
      brandName: "Laravel",
      color: "#f55247",
      bin: "red"   
    },
    {
      iconName: "less",
      brandName: "Less",
      color: "#00316e",
      bin: "green"   
    },
    {
      iconName: "linkedin",
      brandName: "LinkedIn",
      color: "#0077b5",
      bin: "green"    
    },
    {
      iconName: "linux",
      brandName: "Linux",
      color: "#000000",
      bin: "green"    
    },
    {
      iconName: "mailchimp",
      brandName: "Mailchimp",
      color: "#239ab9" ,
      bin: "green"   
    },
    {
      iconName: "medium",
      brandName: "Medium",
      color: "#00ab6c" ,
      bin: "green"   
    },
    {
      iconName: "meetup",
      brandName: "Meetup",
      color: "#e0393e" ,
      bin: "green"   
    },
    {
      iconName: "microsoft",
      brandName: "Microsoft",
      color: "#111111",
      bin: "green"    
    },
    {
      iconName: "napster",
      brandName: "Napster",
      color: "#111111" ,
      bin: "green"   
    },
    {
      iconName: "node",
      brandName: "Node.js",
      color: "#68a063",
      bin: "green"   
    },
    {
      iconName: "npm",
      brandName: "npm",
      color: "#cc3534" ,
      bin: "green"   
    },
    {
      iconName: "opera",
      brandName: "Opera",
      color: "#cc0f16" ,
      bin: "green"   
    },
    {
      iconName: "patreon",
      brandName: "Patreon",
      color: "#f96854",
      bin: "green"    
    },
    {
      iconName: "paypal",
      brandName: "PayPal",
      color: "#003087",
      bin: "green"    
    },
    {
      iconName: "php",
      brandName: "PHP",
      color: "#8892be",
      bin: "green"    
    },
    {
      iconName: "pinterest",
      brandName: "Pinterest",
      color: "#bd081c" ,
      bin: "green"   
    },
    {
      iconName: "playstation",
      brandName: "PlayStation",
      color: "#003087" ,
      bin: "green"   
    },
    {
      iconName: "product-hunt",
      brandName: "Product Hunt",
      color: "#da552f" ,
      bin: "green"   
    },
    {
      iconName: "python",
      brandName: "Python",
      color: "#4584b6" ,
      bin: "green"   
    },
    {
      iconName: "quora",
      brandName: "Quora",
      color: "#a82400",
      bin: "green"    
    },
    {
      iconName: "react",
      brandName: "React",
      color: "#00d8ff" ,
      bin: "green"   
    },
    {
      iconName: "reddit",
      brandName: "reddit",
      color: "#ff4500" ,
      bin: "green"   
    },
    {
      iconName: "safari",
      brandName: "Safari",
      color: "#0fb5ee" ,
      bin: "green"   
    },
    {
      iconName: "sass",
      brandName: "Sass",
      color: "#cd6799" ,
      bin: "green"   
    },
    {
      iconName: "skype",
      brandName: "Skype",
      color: "#00aff0" ,
      bin: "green"   
    },
    {
      iconName: "slack",
      brandName: "Slack",
      color: "#3eb991",
      bin: "yellow"    
    },
    {
      iconName: "snapchat-square",
      brandName: "Snapchat",
      color: "#fffc00",
      bin: "yellow"    
    },
    {
      iconName: "soundcloud",
      brandName: "SoundCloud",
      color: "#ff8800" ,
      bin: "yellow"   
    },
    {
      iconName: "spotify",
      brandName: "Spotify",
      color: "#1db954" ,
      bin: "yellow"   
    },
    {
      iconName: "squarespace",
      brandName: "Squarespace",
      color: "#222222" ,
      bin: "yellow"   
    },
    {
      iconName: "stack-overflow",
      brandName: "Stack Overflow",
      color: "#f48024",
      bin: "yellow"    
    },
    {
      iconName: "stripe",
      brandName: "Stripe",
      color: "#00afe1",
      bin: "yellow"    
    },
    {
      iconName: "trello",
      brandName: "Trello",
      color: "#0079bf",
      bin: "yellow"    
    },
    {
      iconName: "tripadvisor",
      brandName: "TripAdvisor",
      color: "#00af87",
      bin: "yellow"   
    },
    {
      iconName: "twitch",
      brandName: "Twitch",
      color: "#6441a5" ,
      bin: "yellow"   
    },
    {
      iconName: "twitter",
      brandName: "Twitter",
      color: "#1da1f2",
      bin: "yellow"    
    }
  ];
  let correct = 0;
  let total = 0;
  const totalDraggableItems = 3;
  const totalMatchingPairs = 3; // Should be <= totalDraggableItems
  
  const scoreSection = document.querySelector(".score");
  const correctSpan = scoreSection.querySelector(".correct");
  const totalSpan = scoreSection.querySelector(".total");
  const playAgainBtn = scoreSection.querySelector("#play-again-btn");
  
  const draggableItems = document.querySelector(".draggable-items");
  const matchingPairs = document.querySelector(".matching-pairs");
  let draggableElements;
  let droppableElements;
  
  initiateGame();
  
  function initiateGame() {
    const randomDraggableBrands = generateRandomItemsArray(totalDraggableItems, brands);
    const randomDroppableBrands = totalMatchingPairs<totalDraggableItems ? generateRandomItemsArray(totalMatchingPairs, randomDraggableBrands) : randomDraggableBrands;
    const alphabeticallySortedRandomDroppableBrands = [...randomDroppableBrands].sort((a,b) => a.brandName.toLowerCase().localeCompare(b.brandName.toLowerCase()));
    
    // Create "draggable-items" and append to DOM
    for(let i=0; i<randomDraggableBrands.length; i++) {
      draggableItems.insertAdjacentHTML("beforeend", `
        <i class="fab fa-${randomDraggableBrands[i].iconName} draggable" draggable="true" style="color: ${randomDraggableBrands[i].color};" id="${randomDraggableBrands[i].iconName}"></i>
      `);
    }
    
    // Create "matching-pairs" and append to DOM
    for(let i=0; i<alphabeticallySortedRandomDroppableBrands.length; i++) {
      matchingPairs.insertAdjacentHTML("beforeend", `
        <div class="matching-pair">
          <span class="label">${alphabeticallySortedRandomDroppableBrands[i].brandName}</span>
          <span class="droppable" data-brand="${alphabeticallySortedRandomDroppableBrands[i].iconName}">
             <img src="${alphabeticallySortedRandomDroppableBrands[i].bin}bin.svg" style="width: 6rem;"></img></span>
        </div>
      `);
    }
    
    draggableElements = document.querySelectorAll(".draggable");
    droppableElements = document.querySelectorAll(".droppable");
    
    draggableElements.forEach(elem => {
      elem.addEventListener("dragstart", dragStart);
      // elem.addEventListener("drag", drag);
      // elem.addEventListener("dragend", dragEnd);
    });
    
    droppableElements.forEach(elem => {
      elem.addEventListener("dragenter", dragEnter);
      elem.addEventListener("dragover", dragOver);
      elem.addEventListener("dragleave", dragLeave);
      elem.addEventListener("drop", drop);
    });
  }
  
  // Drag and Drop Functions
  
  //Events fired on the drag target
  
  function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id); // or "text/plain"
  }
  
  //Events fired on the drop target
  
  function dragEnter(event) {
    if(event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
      event.target.classList.add("droppable-hover");
    }
  }
  
  function dragOver(event) {
    if(event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
      event.preventDefault();
    }
  }
  
  function dragLeave(event) {
    if(event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
      event.target.classList.remove("droppable-hover");
    }
  }
  
  function drop(event) {
    event.preventDefault();
    event.target.classList.remove("droppable-hover");
    const draggableElementBrand = event.dataTransfer.getData("text");
    const droppableElementBrand = event.target.getAttribute("data-brand");
    const isCorrectMatching = draggableElementBrand===droppableElementBrand;
    total++;
    if(isCorrectMatching) {
      const draggableElement = document.getElementById(draggableElementBrand);
      event.target.classList.add("dropped");
      draggableElement.classList.add("dragged");
      draggableElement.setAttribute("draggable", "false");
      event.target.innerHTML = `<i class="fab fa-${draggableElementBrand}" style="color: ${draggableElement.style.color};"></i>`;
      correct++;  
    }
    scoreSection.style.opacity = 0;
    setTimeout(() => {
      correctSpan.textContent = correct;
      totalSpan.textContent = total;
      scoreSection.style.opacity = 1;
    }, 200);
    if(correct===Math.min(totalMatchingPairs, totalDraggableItems)) { // Game Over!!
      playAgainBtn.style.display = "block";
      setTimeout(() => {
        playAgainBtn.classList.add("play-again-btn-entrance");
      }, 200);
    }
  }
  
  // Other Event Listeners
  playAgainBtn.addEventListener("click", playAgainBtnClick);
  function playAgainBtnClick() {
    playAgainBtn.classList.remove("play-again-btn-entrance");
    correct = 0;
    total = 0;
    draggableItems.style.opacity = 0;
    matchingPairs.style.opacity = 0;
    setTimeout(() => {
      scoreSection.style.opacity = 0;
    }, 100);
    setTimeout(() => {
      playAgainBtn.style.display = "none";
      while (draggableItems.firstChild) draggableItems.removeChild(draggableItems.firstChild);
      while (matchingPairs.firstChild) matchingPairs.removeChild(matchingPairs.firstChild);
      initiateGame();
      correctSpan.textContent = correct;
      totalSpan.textContent = total;
      draggableItems.style.opacity = 1;
      matchingPairs.style.opacity = 1;
      scoreSection.style.opacity = 1;
    }, 500);
  }
  
  // Auxiliary functions
  function generateRandomItemsArray(n, originalArray) {
    let res = [];
    var red = false;
    var green = false;
    var yellow = false;
    var i = 1; //counter
    let clonedArray = [...originalArray];
    if(n>clonedArray.length) n=clonedArray.length;
    //for(let i=1; i<=n; i++) {
    while (i<=n){
      const randomIndex = Math.floor(Math.random()*clonedArray.length);
      if (clonedArray[randomIndex].bin==="red" && red==false){
        red = true;
        i++;
        res.push(clonedArray[randomIndex]);
        clonedArray.splice(randomIndex, 1);
      }
      if (clonedArray[randomIndex].bin==="green" && green==false){
        green = true;
        i++;
        res.push(clonedArray[randomIndex]);
        clonedArray.splice(randomIndex, 1);
      }
      if (clonedArray[randomIndex].bin==="yellow" && yellow==false){
        yellow = true;
        i++;
        res.push(clonedArray[randomIndex]);
        clonedArray.splice(randomIndex, 1);
      }
    }
    return res;
  }