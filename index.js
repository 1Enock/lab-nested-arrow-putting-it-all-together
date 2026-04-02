const userInfo = {
  "username" : "user1",
  "password" : "password123"
}
function createLoginTracker(userInfo) {
      let attemptCount = 0;
      const Maxattempts = 3;
      return (passwordAttempt) => {
          attemptCount++;
         if (attemptCount > Maxattempts) {
            return "Account locked"
        }
      
        // The function adds onto the counter

       
         // if the max number of tries has been reached the system refuses to validate the password
        if (passwordAttempt === userInfo.password) {
          return "Login successful"
        } else if (passwordAttempt !== userInfo.password) {
          return "login failed. Attempts left are ${Maxattempts - attemptCount}` "
        } 
      };


}
