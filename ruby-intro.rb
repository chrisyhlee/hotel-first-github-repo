# Ruby Intro

my_array = [1, 2, 3, 4, 5]

# puts / p -> equivalent of console.log
# $ ruby file-name.rb

# puts my_array
# => 1 2 3 4 5

# p my_array
# => [1, 2, 3, 4, 5]

# Conditionals & Methods

# methods : functions that belong to objects
#   - allows us to have reusable, dynamic code

# keywords to create a method
    # def
    # end

def hotel_message
    question = 'Aloha, Hotel, do you like to dance?'
    p question
end

# hotel_message
    # => Aloha, Hotel, do you like to dance?

# method with arguments
# create method that takes two strings and returns a statement that shows who is in the dance off
# expected output: 'name1 and name2, show us your footwork.'

def dance_off(name1, name2)
    "#{name1} and #{name2}, show us your footwork."
end

# p dance_off('Moss', 'Bora')
#   => "Moss and Bora, show us your footwork."

# conditional statements
    # every if needs an end

# create method that shares catch phrases from certain WWE wrestlers
    # Expected output if The Rock : 'Can you smell what the Rock is cooking?'
    # Expected output if Stone Cold : 'Handed out whipped contents in a can'
    # Expected output if Junkyard Dog : 'Woof woof'

# Binary : 2 conditions
    # keyword 'if' to begin conditional : takes in a condition, code block is nested underneath
    # every if needs an end
    # else : catch all; no condition, code block is nested underneath

# def catch_phrase(wrestler)
#     if wrestler == 'The Rock'
#         p 'Can you smell what the Rock is cooking?'
#     else
#         p 'Sorry, that wrestler did not register on that smack-talk meter.'
#     end
# end

# catch_phrase 'Stone Cold'

# Multiple outputs
    # elsif : allows more than one if

def catch_phrase(wrestler)
    if wrestler == 'The Rock'
        p 'Can you smell what the Rock is cooking?'
    elsif wrestler == 'Stone Cold'
        p 'Handed out whipped contents in a can'
    elsif wrestler == 'Junkyard Dog'
        p 'Woof woof'
    else
        p 'Sorry, that wrestler did not register on that smack-talk meter.'
    end
end

# catch_phrase 'The Rock'

# User Input
# create a method that asks a user for their name and birth year and returns a customized wrestler name and costume
# Expected Output : Moss, 2001 => "Moss, you will wear a robe and huge glittery glasses in the shape of 2001"
# Expected Output : Torin, 1977 => "Torin, you will wear spandex shorts and tube socks embroidered with 1977"

# getting user inputs
    # gets method : stops the execution of the program and waits for something to be typed in the terminal

    # my_name = gets
        # terminal waits for you to type something
        # typed in 'Chris'
    # p my_name
        # => "Chris\n"
        # \n means new line character that occurs because you have pressed the enter key to input the data from the prompt
        # Recommend printing out a msg to inform user what is expected

        # .chomp method removes any non-string characters (such as \n)
        # p 'Please enter your name'
        # my_name = gets.chomp
        # p my_name
            # => "Chris"

    p 'Please enter your name'
    my_name = gets.chomp
    p my_name

    p 'Please enter your birth year'
    birth_year = gets.chomp.to_i
    p birth_year

    def wrestler(name, year)
        if year >= 2000
            p "#{name}, you will wear a robe and huge glittery glasses in the shape of #{year}"
        else
            p "#{name}, you will wear spandex shorts and tube socks embroidered with #{year}"
        end
    end
    # Need to convert string to integer using .to_i because user inputs are strings as default when using gets. Can use it on line 109 or line 120
    wrestler(my_name, birth_year)

    