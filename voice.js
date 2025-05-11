  document.addEventListener('DOMContentLoaded', function () {
      var micButton = document.getElementById('micButton');
      var searchInput = document.getElementById('searchInput');
      var productList = document.getElementById('productList');
      var products = document.querySelectorAll('.product-card');

      var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

      if (SpeechRecognition) {
        var recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        micButton.addEventListener('click', function () {
          recognition.start();
          micButton.textContent = "🎙️ Listening...";
        });

        recognition.addEventListener('result', function (event) {
          var spokenText = event.results[0][0].transcript;
          console.log("You said:", spokenText);
          searchInput.value = spokenText; // Show in search box

          // Filter products based on spoken text
          filterProducts(spokenText.toLowerCase());
        });

        recognition.addEventListener('end', function () {
          micButton.textContent = "🎤 Speak";
        });

      } else {
        alert("Sorry, your browser does not support Speech Recognition.");
        micButton.disabled = true;
      }

      function filterProducts(query) {
        products.forEach(function (product) {
          var productName = product.querySelector('.product-name').textContent.toLowerCase();
          if (productName.includes(query)) {
            product.style.display = 'inline-block'; // Show matching product
          } else {
            product.style.display = 'none'; // Hide non-matching product
          }
        });
      }
    });