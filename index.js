document.getElementById('contact-form').addEventListener('submit', function (event) {
                event.preventDefault();
                // Simulate sending message (replace with actual sending code)
                setTimeout(function () {
                    document.getElementById('success-message').style.display = 'block';
                    // Clear form fields
                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('message').value = '';
                    // Hide success message after 3 seconds
                    setTimeout(function () {
                        document.getElementById('success-message').style.display = 'none';
                    }, 3000);
                }, 1000); // Simulate sending message for 1 second
            });
     