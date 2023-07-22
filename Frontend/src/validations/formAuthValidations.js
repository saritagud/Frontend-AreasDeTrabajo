class FormsAuthValidations {
  validateText = (text) => text.trim() !== '';
  validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordRegex.test(password)
  }
  validatePasswords = (password, confirmPassword) => password === confirmPassword;
}

export const formsAuthValidations = new FormsAuthValidations();