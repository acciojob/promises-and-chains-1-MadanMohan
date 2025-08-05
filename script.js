 function checkAge() {
      let age = document.getElementById("age").value;

      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age >= 18) {
            resolve("Welcome. You can vote.");
          } else {
            reject("Oh sorry. You aren't old enough.");
          }
        }, 4000); // 4 second delay
      });

      promise
        .then((message) => alert(message))
        .catch((error) => alert(error));
    }