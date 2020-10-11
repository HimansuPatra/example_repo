export const inputValidation = {
    emailRequired: 'Please enter your email address',
    validEmail: 'Please enter your valid email address',
    passwordRequired: 'Please enter your password',
    validPassword: 'Password length must be at least 8 characters: 1 Uppercase Character, 1 Lowercase Character, 1 Number and 1 Special Character'
};

export const regexPatterns = {
    numberRegex: new RegExp('^(?!0{5})[0-9_.-]*$'),
    numberValueRegex: new RegExp('^(?!0{5})[0-9.-]*$'),
    zipcodeRegex: new RegExp('^(?![0]{5})[0-9]*$'),
    phoneNumberRegex: new RegExp('^(?![0.-]{10})[0-9.-]*$'),
    textRegex: new RegExp("^[a-zA-Z 0-9\n_.!@#$%^&*'\"\\(\\)\\[\\]\\{\\}\\:\\;\\<\\>\\?\\,=+\\|-]*$"),
    // textRegex: new RegExp("^[a-zA-Z 0-9_.!@#$%^&*'\\(\\)\\[\\]\\{\\}\\:\\;\\<\\>\\?\\,=+\\|-]*$"),
    nameRegex: new RegExp("^[a-zA-Z 0-9_.'-\]*$"),
    emailRegex: new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[\.]+[a-zA-Z0-9]{2,4}$'),
    password: new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
};

export const userApi={
    registerApi:'register'
}
