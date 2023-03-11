# Ruby Blocks and Iterables

# Iteration : process of repeating a code action until a condition is met

# while
    # needs start & end point
    # condition that starts as true and will eventually become false

    # num = 1
    # while num <= 10
    #     p num
    #     num += 1
    # end
    # => 1 2 3 4 5 6 7 8 9 10

# Methods
    # methods can take an anonymous function (block)
    # use keyword 'do' and 'end' (multiple lines)
    # use {} (for one liners)

    # Times
        # executes block certain number of times

        # 8.times do
        #     p 'Hello Hotel'
        # end
        # => "Hello Hotel" 8 times

        # new_num = 5
        # new_num.times do
        #     p 'Hello World'
        # end

    # Each : works on arrays
        # nums = [3,4,5,6]

        # nums.each do |value|
        #     p value * 5
        # end
        # => 15 20 25 30
    
    # Ranges
        # list of values : give start and end point separated by '..'
        # ruby fills in the content between the points

        # 1..10
        # range = 1..10
        # range.each do |value|
        #     p value
        # end

        # a_range = 'a'..'f'
        # a_range.each do |value|
        #     p value
        # end
        # => 'a' 'b' 'c' 'd' 'e' 'f'

        # a_range.to_a
        # => ["a", "b", "c", "d", "e", "f"]

    # Map
        # returns array of the same length of the thing you're acting on

        nums = 1..10
        mapped = nums.map { |value| value * 3}
        # p mapped
        # => [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
        # mapped[3] = 12

        evens = nums.map do |value|
            if value % 2 == 0
                'even'
            else
                value
            end
        end

        # p evens
        # => [1, "even", 3, "even", 5, "even", 7, "even", 9, "even"]

        def even_or_odd(array)
            array.map do |value|
                if value.even?
                    'even'
                else
                    'odd'
                end
            end
        end

        # p even_or_odd(nums)
        # => ["odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd", "even"]

    # Select
        # returns subset as an array as it makes decisions on each item
        # similar to JS .filter()
        # built-in if statement

        def only_evens(array)
            array.select do |value|
                value.even?
            end
        end

        # p only_evens(1..10)
        # => [2, 4, 6, 8, 10]

        nums_ex = 20..0
        arr = nums_ex.select do |value|
            value.even?
        end
        p arr