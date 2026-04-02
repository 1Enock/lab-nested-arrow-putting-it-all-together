const userInfo = {
  "username" : "user1",
  "password" : "password123"
}
function createLoginTracker(userInfo) {
      let attemptCount = 0;
      const Maxattempts = 3;
      let passwordAttempt = prompt("Enter your password");
      // the user is prompted to input the password
      return (passwordAttempt) => {
        attemptCount++;
        // The function adds onto the counter

        if (attemptCount > Maxattempts) {
            return "Max attempts reached login failure"
        }
         // if the max number of tries has been reached the system refuses to validate the password
        if (passwordAttempt === userInfo.password) {
          return "Login successful"
        } else if (passwordAttempt !== userInfo.password) {
          return "login failed. Attempts left are ${Maxattempts - attemptCount}` "
        } 
      };


}
