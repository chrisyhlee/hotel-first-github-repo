# PROMPT
# FUNCTION inp string, palindrome or not
# create fxn called pali_check
# input : string
# output: is or is not a palindrome
# .reverse method
# if string == string.reverse

def pali_check(string)
    if string == string.reverse
        p "#{string} is a palindrome"
    else
        p "#{string} is not a palindrome"
    end
end

pali_check('palindrome')