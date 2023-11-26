// Function to create a new medication form container
function createMedicationContainer() {
    const medContainers = document.getElementById('medContainers');
  
    // Create a new container div
    const newContainer = document.createElement('div');
    newContainer.classList.add('container');
  
    // Create a new form for the medication reminder
    const form = document.createElement('form');
    form.classList.add('med-form');
  
    // Medication Name input field
    const medNameLabel = document.createElement('label');
    medNameLabel.setAttribute('for', 'medName');
    medNameLabel.textContent = 'Medication Name:';
    form.appendChild(medNameLabel);
  
    const medNameInput = document.createElement('input');
    medNameInput.setAttribute('type', 'text');
    medNameInput.setAttribute('id', 'medName');
    medNameInput.setAttribute('required', 'true');
    form.appendChild(medNameInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));
  
    // Select Time input field
    const timeLabel = document.createElement('label');
    timeLabel.setAttribute('for', 'time');
    timeLabel.textContent = 'Select Time:';
    form.appendChild(timeLabel);
  
    const timeInput = document.createElement('input');
    timeInput.setAttribute('type', 'time');
    timeInput.setAttribute('id', 'time');
    timeInput.setAttribute('multiple', 'true');
    form.appendChild(timeInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));
  
    // Frequency select field
    const frequencyLabel = document.createElement('label');
    frequencyLabel.setAttribute('for', 'frequency');
    frequencyLabel.textContent = 'Frequency:';
    form.appendChild(frequencyLabel);
  
    const frequencySelect = document.createElement('select');
    frequencySelect.setAttribute('id', 'frequency');
  
    const dailyOption = document.createElement('option');
    dailyOption.setAttribute('value', 'daily');
    dailyOption.textContent = 'Daily';
    frequencySelect.appendChild(dailyOption);
  
    const weeklyOption = document.createElement('option');
    weeklyOption.setAttribute('value', 'weekly');
    weeklyOption.textContent = 'Weekly';
    frequencySelect.appendChild(weeklyOption);
  
    const monthlyOption = document.createElement('option');
    monthlyOption.setAttribute('value', 'monthly');
    monthlyOption.textContent = 'Monthly';
    frequencySelect.appendChild(monthlyOption);
  
    form.appendChild(frequencySelect);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));
  
    // Date input field
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = 'Date:';
    form.appendChild(dateLabel);
  
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'date');
    form.appendChild(dateInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));
  
    // Reminder Sound select field
    const reminderAudioLabel = document.createElement('label');
    reminderAudioLabel.setAttribute('for', 'reminderAudio');
    reminderAudioLabel.textContent = 'Reminder Sound:';
    form.appendChild(reminderAudioLabel);
  
    const reminderAudioSelect = document.createElement('select');
    reminderAudioSelect.setAttribute('id', 'reminderAudio');
  
    const alarm1Option = document.createElement('option');
    alarm1Option.setAttribute('value', 'alarm1.mp3');
    alarm1Option.textContent = 'Alarm 1';
    reminderAudioSelect.appendChild(alarm1Option);
  
    const alarm2Option = document.createElement('option');
    alarm2Option.setAttribute('value', 'alarm2.mp3');
    alarm2Option.textContent = 'Alarm 2';
    reminderAudioSelect.appendChild(alarm2Option);
  
    const alarm3Option = document.createElement('option');
    alarm3Option.setAttribute('value', 'alarm3.mp3');
    alarm3Option.textContent = 'Alarm 3';
    reminderAudioSelect.appendChild(alarm3Option);
  
    form.appendChild(reminderAudioSelect);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));
  
    // Submit button
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Set Reminder');
    form.appendChild(submitButton);
  
    // Append the form to the new container
    newContainer.appendChild(form);
  
    // Insert the new container before the "Add Medication" button
    medContainers.insertBefore(newContainer, document.getElementById('addMedicationBtn'));
  
    // Initialize flatpickr for date selection in the new form
    flatpickr("#date", {
      dateFormat: "Y-m-d"
    });
  
    // Event listener for the new medication form submission
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      // Get form values for this medication block
      const medName = form.querySelector('#medName').value;
      const times = Array.from(form.querySelector('#time').selectedOptions).map(option => option.value);
      const frequency = form.querySelector('#frequency').value;
      const date = form.querySelector('#date').value;
      const audioFile = form.querySelector('#reminderAudio').value;
  
      // Create reminder object for this medication block
      const reminder = {
        medication: medName,
        times: times,
        frequency: frequency,
        date: date,
        audio: audioFile
      };
  
      console.log(reminder);

      console.log('Reminder set for ' + medName);
    });
  }
  
  

  // Event listener for the "Add Medication" button
  document.getElementById('addMedicationBtn').addEventListener('click', function() {
    createMedicationContainer();
  });
  
  // Function to play selected audio
  function playAudio(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.play();
  }

 
  