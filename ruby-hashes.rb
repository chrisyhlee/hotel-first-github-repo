# Ruby Hashes

# Structure of a hash
    # Hash : unordered collection of unique keys and their values
        # Defining keys and values with hash rocket => or :

        # 1st technique
          disney_inspiration = {
            merida_quote: 'Our fate lives within us. You only have to be brave enough to see it.',

            dumbo_quote: "Don't just fly, soar.",

            rafiki_quote: 'The past can hurt, but the way I see it, you can either run from it or learn from it.'
          }

            # hash rocket not required bc using symbol 'merida_quote:'

        #   p disney_inspiration
          # => {:merida_quote=>"Our fate lives within us. You only have to be brave enough to see it.", :dumbo_quote=>"Don't just fly, soar.", :rafiki_quote=>"The past can hurt, but the way I see it, you can either run from it or learn from it."}
            # output displayed using old syntax
        
          office_space = {
              44 => 'Charlean at the desk',
              'desk' => 'ergonomic, black, standup desk'
          }

        #   p office_space
          # => {44=>"Charlean at the desk", "desk"=>"ergonomic, black, standup desk"}
        
        # 2nd technique : new method
          looney_talk = Hash.new
        #   p looney_talk
          # => {}
        

# Display / create / update / delete content from the hash (CR.U.D.D)
    # Create
          looney_talk[:bugs_bunny] = 'Whatz up, Doc?'
          looney_talk[:road_runner] = 'Meep Meep'
          looney_talk[:sylvester_the_cat] = 'Thuffering Thuccotash!'

        #   p looney_talk
          # => {:bugs_bunny=>"Whatz up, Doc?", :road_runner=>"Meep Meep", :sylvester_the_cat=>"Thuffering Thuccotash!"}
    
    # one value
        # p looney_talk[:road_runner]
        # => "Meep Meep"
        # p disney_inspiration[:merida_quote]
        # => "Our fate lives within us. You only have to be brave enough to see it."
        # p office_space[44]
        # => "Charlean at the desk"
        # p looney_talk.values
        # => ["Whatz up, Doc?", "Meep Meep", "Thuffering Thuccotash!"]

    # Update
        # looney_talk[:sylvester_the_cat] = 'Thuffering Succotash'
        # p looney_talk.values
          # => ["Whatz up, Doc?", "Meep Meep", "Thuffering Succotash"]
    # Delete
        looney_talk.delete(:sylvester_the_cat)
        # p looney_talk.values
        # => ["Whatz up, Doc?", "Meep Meep"]

# Ducktyping : allows methods to be used in Ruby based on behavior instead of Ruby class (data type)
    # Modules : way of grouping like-things with similar properties
        # Enumerable module : iterable group (hashes, arrays, ranges)
    # methods are used based on behavior of method, not data types
        
    # each for iteration
    # looney_talk.each do |key, value|
    #     p "#{key} often says, #{value}"
    # end
    # => "bugs_bunny often says, Whatz up, Doc?" "road_runner often says, Meep Meep"

    # map for transformation
    lt_arr = looney_talk.map do |key, value|
        "#{key} says #{value} 😀"
    end
    # p lt_arr
    # => ["bugs_bunny says Whatz up, Doc? 😀", "road_runner says Meep Meep 😀"]

    # create a method to iterate across the hash
    def character_said hash
        hash.map do |kitty, puppy|
            "#{kitty} says #{puppy}"
        end
    end

    # p character_said(looney_talk)
    # => ["bugs_bunny says Whatz up, Doc?", "road_runner says Meep Meep"]

    # Challenges

# As a developer, I can create a hash called my_phone using the Ruby method .new.
    my_phone = Hash.new

# As a developer, I can add five key:value pairs of app names and their descriptions to my hash.
    my_phone[:notes] = 'notepad on phone'
    my_phone[:messages] = 'send messages to people'
    my_phone[:photos] = 'see saved pictures'
    my_phone[:venmo] = 'send or receive money'
    my_phone[:my_fitness_pal] = 'track food you eat throughout each day'
    p my_phone

# As a developer, I can return a value from my_phone by passing in the name of a key.
# As a developer, I can update two keys in my_phone.
# As a developer, I can update two values in my_phone.
# As a developer, I can delete two key:value pairs from my_phone.
# As a developer, I can use an enumerable method to return information about all of my_phone's applications.