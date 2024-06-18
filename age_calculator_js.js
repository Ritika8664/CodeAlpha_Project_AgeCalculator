
    document.getElementById('ageForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const day = parseInt(document.getElementById('day').value);
        const month = parseInt(document.getElementById('month').value);
        const year = parseInt(document.getElementById('year').value);

        if (!day || !month || !year) {
            alert('Please enter a valid date of birth');
            return;
        }

        const dob = new Date(year, month - 1, day);
        const today = new Date();

        let age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();
        const dayDifference = today.getDate() - dob.getDate();

        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            age--;
        }

        document.getElementById('result').textContent = `Your age is ${age} years.`;
    });


