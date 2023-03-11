# Ruby Intro

MINASWAN
    - Matz is nice and so we are nice

Matz created Ruby to be human friendly

Dynamic : dynamically typed, you don't have to declare a type when creating a variable (opposite is statically typed)

Interpreted : code is read line by line thru an interpreter (opposite is compiled languages)

Open-Source : code base is available for free and anyone can use it or modify it

Scripting language : making evaluations and executing logical operations; no markup

OOP : Object-orienting-programming language; everything is an object, everything is an instance of a class

    Form : ideal; class
    Implimentation : object

$ ruby -v
    - which version of ruby
$ irb
    - interactive ruby (drop into ruby console)
    - repl : reevaluate print loop
$ exit
    - exit ruby environment

Data Types (each data type is a class; we operate on the object from that class)
- Integer : whole numbers
- Float : partial numbers (2.5)
- String : use single quotes (except when needing punctuation)
- Boolean : relational operators
- No type coersion in Ruby
    - == in Ruby means === in JS
- nil : equivalent to JS null

```ruby
3.0.0 :001 > 7 + 4
 => 11 
3.0.0 :002 > 5 - 3
 => 2 
3.0.0 :003 > 4*3
 => 12 
3.0.0 :004 > 5/2
 => 2 
3.0.0 :005 > 3**3
 => 27 
3.0.0 :006 > 6 % 4
 => 2 
3.0.0 :007 > 5 / 2.0
 => 2.5 
3.0.0 :008 > 5.0 / 2
 => 2.5 
3.0.0 :009'> 'hello
3.0.0 :010 > 'hello'
3.0.0 :011'> 'yo'
3.0.0 :012'> "yo"
3.0.0 :009 > 5==5
 => true 
3.0.0 :010 > 'hello'
 => "hello" 
3.0.0 :011 > 5 != 5
 => false 
3.0.0 :012 > 5 != 4
 => true 
3.0.0 :013 > 5 > 4 && 6 > 5
 => true 
3.0.0 :014 > 5 > 6 && 6 > 5
 => false 
3.0.0 :015 > 5 > 6 || 6 > 5
 => true 
```

Variables
- Ruby uses snake_case
    - everything lower case, separated by underscores
- String Interpolation : uses double quotes, #
    - "Hey there, #{my_name}"
        => "Hey there, Chris"

Methods
- by default are accessors
- use ! at the end to make it permanent
    - my_name.upcase!
        => CHRIS
- can chain methods; will execute in order

```ruby
3.0.0 :026 > my_name.length
 => 5 
3.0.0 :027 > my_name.upcase
 => "CHRIS" 
3.0.0 :028 > my_name.capitalize
 => "Chris" 
3.0.0 :029 > my_name.reverse
 => "sirhC" 
3.0.0 :030 > my_name
             my_name                                                
3.0.0 :030 > my_name
 => "Chris"   
3.0.0 :032 > my_name.reverse
 => "sirhC" 
3.0.0 :033 > my_name.delete('h')
 => "Cris" 
3.0.0 :034 > my_name = 'Chrissy'
 => "Chrissy" 
3.0.0 :035 > my_name.delete('s')
 => "Chriy" 
3.0.0 :036 > my_name.include?('y')
 => true 
3.0.0 :037 > my_name.include?('Y')
 => false 
3.0.0 :038 > my_name.include?('y' && 's')
 => true 
3.0.0 :039 > my_name.include?('y', 's')
```

