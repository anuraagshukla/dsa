function checkPalindrome(string) {
    const rev = string.split("").reverse().join("");
    return rev === string;
}