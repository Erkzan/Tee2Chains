Tee2Chains - Calculate the effective length of a discgolf hole!

This is an application called Tee2Chains. Its purpose is to calculate the "effective length" of a discgolf hole.
Effective length is the measured length adjusted for elevation. The effective length gives the player a better idea
of how long the hole is to play. When the basket is higher than the tee, the effective length is longer 
than the measured length and when the basket is lower than the tee, the effective length is shorter than 
the measured length.

I got this idea when me and my cousin were playing a round of discgolf and we arrived at a hole where the basket
was located on a very steep hill. We started to argue about the effective length of the hole.
We then tried to calculate the effective length and I thought that it would be much easier if there were a calculator,
so then I decided that I should build one!

Technologies

Frontend
- React: For building the user interface.
- Firebase Hosting: For deploying and serving the frontend.

Backend
- Node.js: Powers the backend logic for handling calculations.
- Express.js: To set up the server-side logic for the API.
- Google Cloud Functions: For serverless deployment of the backend.

How It Works
1. Input Fields: Users enter the hole’s length and height difference.
2. Validation: The app ensures all inputs are valid (e.g., no negative numbers, height difference cannot exceed length).
3. Backend Calculation: The frontend sends the inputs to a backend API and calculates the effective length based on PDGA guidelines and returns the result.
4. Display: The effective length is displayed on the screen.

Future Improvements

When I made the application, I was looking for public APIs of discgolf courses but couldn't find one.
It would be great to be able to import a course to the application and get all calculations of all the holes immediately.

Try It Out!

Here is the link to the application --> https://tee2chains-e642d.web.app 
