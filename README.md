Tee2Chains - Calculate the effective length of a discgolf hole!

  This is an application called Tee2Chains. Its purpose is to calculate the "effective length" of a discgolf hole.
  Effective length is the measured length adjusted for elevation. The effective length gives the player a better idea
  of how long the hole is to play. When the basket is higher than the tee, the effective length is longer 
  than the measured length and when the basket is lower than the tee, the effective length is shorter than 
  the measured length.
  
  I got this idea when me and my cousin were playing a round of discgolf and we arrived at a hole where the basket
  was located on a very steep hill. We started to argue about how long the effective length of the hole was.
  We then tried to calculate the effective length and I thought that it would be much easier if there was a calculator,
  so then I decided that I should build one!

Technologies

  Frontend
  	•	React: For building the user interface.
  	•	Firebase Hosting: For deploying and serving the frontend.
  
  Backend
  	•	Node.js: Powers the backend logic for handling calculations.
  	•	Express.js: To set up the server-side logic for the API.
  	•	Google Cloud Functions: For serverless deployment of the backend.

 How It Works

  1.	Input: Users enter the hole’s length and height difference.
      The user can also choose the measurment unit(meters and feet) as well if the hole is uphill or downhill
	2.	Validation: The app ensures inputs are valid
	3.	Backend Calculation: The frontend sends the inputs to a backend API hosted on Google Cloud Functions.
	    The backend calculates the effective length based on PDGA guidelines and returns the result.
	4.	Display: The effective length is displayed dynamically on the screen.

Future Improvements

  At the time of making the application I was looking for public APIs of discgolf courses but couldn't find one.
  It would be great to be able import a course to the application and get all calculations of all the holes immediatly.

Try It Out!

  Here is the link to the application --> https://tee2chains-e642d.web.app 
