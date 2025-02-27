export const checkValidData = (email, password) => {     
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(password);  

    if (!isEmailValid) return "Invalid email format";     
    if (!isPasswordValid) return "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";  
    
    return null; 
};
