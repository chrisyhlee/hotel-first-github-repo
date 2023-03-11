# Ruby Classes and Objects

# OOP : Object Oriented Programming

1.class
# => Integer
    # Capital letter means it is a class
1.0.class
# => Float

true.class
# => TrueClass
false.class
# => FalseClass

# class Hulu
# end

# p Hulu.new
# => #<Hulu:0x00000001358cfc40>
    # unique instance / object of the Hulu class

# alaska_daily = Hulu.new

# things we want to be able to do:
    # set data : setters
    # get data : getters

# ---------- Setter Method; 2 parameters ------------

# class Hulu
#     def set_show_data(title, run_time)
#         # @variable_name : instance variable; variable that belongs to a class
#         @title = title
#         @run_time = run_time
#     end
# end

# alaska_daily = Hulu.new
# alaska_daily.set_show_data('Alaska Daily')
# p alaska_daily
# => #<Hulu:0x000000012582bdd0 @title="Alaska Daily">

# lego_masters = Hulu.new
# lego_masters.set_show_data('Lego Masters')
# p lego_masters

# alaska_daily = Hulu.new
# alaska_daily.set_show_data('Alaska Daily', '30 minutes')
# p alaska_daily
# => #<Hulu:0x000000013f0ae778 @title="Alaska Daily", @run_time="30 minutes">

# ----- Getter Methods: ---------

# class Hulu
#     def set_show_data(title, run_time)
#         # @variable_name : instance variable; variable that belongs to a class
#         @title = title
#         @run_time = run_time
#     end
#     def get_title
#         @title
#     end
#     def show_info
#         "The show #{@title} is #{@run_time} long"
#     end
# end

# alaska_daily = Hulu.new
# alaska_daily.set_show_data('Alaska Daily', '30 minutes')
# p alaska_daily.get_title
# => "Alaska Daily"
# p alaska_daily.show_info
# => "The show Alaska Daily is 30 minutes long"

# class Hulu
    # initialize is like JS constructor; special method to set up instance variables
    # initialize automatically gets invoked when you use .new
#     def initialize(title, run_time)
        # @variable_name : instance variable; variable that belongs to a class
#         @title = title
#         @run_time = run_time
#     end
#     def get_title
#         @title
#     end
#     def show_info
#         "The show #{@title} is #{@run_time} long"
#     end
# end

# alaska_daily = Hulu.new('Alaska Daily', '30 minutes')
# p alaska_daily.get_title
# => "Alaska Daily"
# p alaska_daily.show_info
# => "The show Alaska Daily is 30 minutes long"

# class Hulu
    # initialize is like JS constructor; special method to set up instance variables
    # initialize automatically gets invoked when you use .new
#     def initialize(title, run_time)
        # @variable_name : instance variable; variable that belongs to a class
#         @title = title
#         @run_time = run_time
#         @watched = false
#     end
#     def get_title
#         @title
#     end
#     def show_info
#         if @watched
#         "You have watched the show #{@title} which is #{@run_time} long"
#         else
#             "You have not watched the show #{@title} which is #{@run_time} long"
#         end
#     end
#     def watched_it
#         @watched = true
#     end
# end

# alaska_daily = Hulu.new('Alaska Daily', '30 minutes')
# p alaska_daily.show_info
# => "You have not watched the show Alaska Daily which is 30 minutes long"
# p alaska_daily
# alaska_daily.watched_it
# p alaska_daily.show_info
# => "You have watched the show Alaska Daily which is 30 minutes long"

# Helper Methods : methods that make more methods
    # helper method in Ruby that will manage getters and setters
        # attr_accessor

class Hulu
    attr_accessor :title, :watched # don't need get_title method anymore
    # initialize is like JS constructor; special method to set up instance variables
    # initialize automatically gets invoked when you use .new
    def initialize(title, run_time)
        # @variable_name : instance variable; variable that belongs to a class
        @title = title
        @run_time = run_time
        @watched = false
    end
    def show_info
        if @watched
        "You have watched the show #{@title} which is #{@run_time} long"
        else
            "You have not watched the show #{@title} which is #{@run_time} long"
        end
    end
    def watched_it
        @watched = true
    end
end

alaska_daily = Hulu.new('Alaska Daily', '30 min')
# p alaska_daily.title
# => "Alaska Daily"
# p alaska_daily.watched
# => false
p alaska_daily.show_info
# => "You have not watched the show Alaska Daily which is 30 min long"
alaska_daily.watched = true
p alaska_daily.show_info
# => "You have watched the show Alaska Daily which is 30 min long"