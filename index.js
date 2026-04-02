


function createLoginTracker(userInfo) {
      let attemptCount = 0;
      const maxAttempts = 3;
      return (passwordAttempt) => {
          attemptCount++;

         if (attemptCount > maxAttempts) {
            return "Account locked due to too many failed login attempts";
        }
      
        // The function adds onto the counter

       
         // if the max number of tries has been reached the system refuses to validate the password
        if (passwordAttempt === userInfo.password) {
          return "Login successful"
        } else if (passwordAttempt !== userInfo.password) {
          return `Attempt ${attemptCount}: Login failed`
        } 
      };


}
module.exports = { createLoginTracker };
