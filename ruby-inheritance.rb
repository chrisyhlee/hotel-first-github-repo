# Ruby Inheritance

# Object-oriented programming (OOP)
    # Everything in Ruby is an object
    # Everything is an instance of a class

# irb$ String.methods
# => lists methods that can be used on strings

# initialize method : to declare new instances of Classes with unique data
    # takes as many parameters as we want
    # can use them as we want

class Hulu
    # creates getter and setter method for the instance variables it gets passed
    attr_accessor :title, :run_time, :watched
    # setter method:
    def initialize(title, run_time)
        @title = title
        @run_time = run_time
        @watched = false
    end

    # getter method:
    def get_info
        if @watched
            "You have watched the show #{title}. It is #{run_time} long."
        else
            "You have not watched the show #{title}. It is #{run_time} long."
        end
    end
end

# podcasts, streaming video apps (Youtube), streaming music apps (Spotify)

# inheritance allows classes to have relationships with each other
# put common behaviors into a shared class -> Superclass
# Superclass :
    # Parent Class : has attributes common to all possible children
    # Child class : has attributes specific to the child and NOT the other children
# superclass passes info to the subclasses

# superclass :
class StreamingApp
    attr_accessor :title, :run_time, :consumed_content
    def initialize(title, run_time)
        @title = title
        @run_time = run_time
        @consumed_content = false
    end
    def content_data
        if consumed_content
            "You have consumed the content: #{title}. It is #{run_time} long."
        else
            "You have not consumed the content: #{title}. It is #{run_time} long."
        end
    end
end

# child classes use super()
# initialize method in the child class invokes the super() ; tells parent class it is going to use its initialize method and borrow its parameters/instance variables.

class YouTube < StreamingApp
    def initialize(title_parameter, run_time_parameter, creator_parameter)
        super(title_parameter, run_time_parameter)
        @creator = creator_parameter
    end
end

babish = YouTube.new('How to Make Pigs in a Blanket', '11:15', 'Babish')
# p babish.content_data
# => "You have not consumed the content: How to Make Pigs in a Blanket. It is 11:15 long."

class Spotify < StreamingApp
    def initialize(title, run_time, artist, album)
        super(title, run_time)
        @artist = artist
        @album = album
    end
    def get_song_info
        content_data + " This song was created by #{@artist} and is part of the album #{@album}"
    end
end

oxford_circus = Spotify.new('Oxford Circus', '2:49', 'Frex', 'Oxford Circus')
# p oxford_circus.get_song_info
# => "You have not consumed the content: Oxford Circus. It is 2:49 long. This song was created by Frex and is part of the album Oxford Circus"