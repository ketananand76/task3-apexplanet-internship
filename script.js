
const questions = [
    { question: "What does HTML stand for?", answer: "HyperText Markup Language" },
    { question: "What language is used for styling?", answer: "CSS" },
    { question: "Which language is used for web apps?", answer: "JavaScript" }
  ];
  
  let currentQuestion = 0;
  const questionContainer = document.getElementById('question-container');
  const nextBtn = document.getElementById('next-btn');
  
  function showQuestion() {
    if(currentQuestion < questions.length){
      questionContainer.innerHTML = `
        <h3>${questions[currentQuestion].question}</h3>
        <input type="text" id="user-answer" placeholder="Your answer...">
      `;
    } else {
      questionContainer.innerHTML = `<h3>Quiz Completed!</h3>`;
      nextBtn.style.display = 'none';
    }
  }
  
  nextBtn.addEventListener('click', () => {
    const userAnswer = document.getElementById('user-answer').value;
    if(userAnswer.trim().toLowerCase() === questions[currentQuestion].answer.toLowerCase()){
      alert("Correct!");
    } else {
      alert("Oops! Correct Answer: " + questions[currentQuestion].answer);
    }
    currentQuestion++;
    showQuestion();
  });
  
  showQuestion();
  

  const images = [
    'assets/1.jpg',
    'assets/2.jpg',
    'assets/3.jpg'
  ];
  let currentImg = 0;
  let carouselInterval;
  
  
  function showImage() {
    const img = document.getElementById('carousel-img');
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = images[currentImg];
      img.style.opacity = 1;
    }, 300);
  }
  
  
  function nextImage() {
    currentImg = (currentImg + 1) % images.length;
    showImage();
  }
  
  function prevImage() {
    currentImg = (currentImg - 1 + images.length) % images.length;
    showImage();
  }
  
  
  function startCarousel() {
    carouselInterval = setInterval(nextImage, 3000); // change image every 3 seconds
  }
  
  
  function stopCarousel() {
    clearInterval(carouselInterval);
  }
  
  document.getElementById('carousel-img').addEventListener('mouseover', stopCarousel);
  document.getElementById('carousel-img').addEventListener('mouseout', startCarousel);
  
  
  showImage();
  startCarousel();
  
  
  
  function fetchJoke(){
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => {
        document.getElementById('joke').innerText = `${data.setup} - ${data.punchline}`;
      })
      .catch(error => {
        document.getElementById('joke').innerText = "Failed to load joke!";
      });
  }
  