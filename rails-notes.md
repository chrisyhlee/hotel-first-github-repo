# Ruby on Rails

- framework that uses Ruby
- Rails follows MVC architecture : orgranization / structure of code
    - M : Model
    - V : View
    - C : Controller

- Model is database layer
- View : what the user sees
- Controller : switch board (communicating to database and updating View)

- MVC all together = full stack

# Creating a Rails App
- $ rails new app_name -d postgresql -T
    - -d to drop default database & install postgresql
    - -T to drop default testing suite

# NOTES
- server-side web app framework
- "Convention over Configuration"
- convention around how files are structured
- Rails Magic

## Create Database
- First thing after creating rails app, cd into it, create database
    - $ cd my_app
    - $ rails db:create
- Running rails app
    - $ rails server
    - $ rails s
    - go to browser : localhost:3000

# ACTIVE RECORD
- ORM : object relational mapping
    - translator : takes 2 things that can't normally talk to each other and makes the communication happen
        - Ruby & SQL
- layer around db that allows us to write SQL queries in ruby code

## Model

 - model works with database
 - model class defines the structure of db

$ rails generate model Schedule day:string date:date task:string
    - model name is always PascalCase and singular
    - followed by column name

$ rails db:migrate
    - schema.rb : read only file; representation of db; not actual db

DB now setup, ready to receive data
    - $ rails console OR rails c
    - $ Schedule.all
        - see all data
        - => Schedule Load (0.9ms)  SELECT "schedules".* FROM "schedules"
          => []
    - $ Schedule.create(day:'Thursday', date:'2023-01-12', task:'Whiteboarding')
        =>  TRANSACTION (0.2ms)  BEGIN
            Schedule Create (7.0ms)  INSERT INTO "schedules" ("day", "date", "task", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["day", "Thursday"], ["date", "2023-01-12"], ["task", "Whiteboarding"], ["created_at", "2023-01-12 18:50:34.140195"], ["updated_at", "2023-01-12 18:50:34.140195"]]
            TRANSACTION (0.7ms)  COMMIT                                   
            =>                                                             
            #<Schedule:0x0000000112f8ab48                                   
            id: 1,                                                         
            day: "Thursday",                                               
            date: Thu, 12 Jan 2023,                                        
            task: "Whiteboarding",
            created_at: Thu, 12 Jan 2023 18:50:34.140195000 UTC +00:00,
            updated_at: Thu, 12 Jan 2023 18:50:34.140195000 UTC +00:00> 
    $ Schedule.first
        => gives first instance
    $ Schedule.second
    $ Schedule.last
    $ Schedule.find(<id>)
    $ Schedule.where(task:'Office Hours')
    $ Schedule.find(2).update(task:'Speaker')
    $ Schedule.find(2).destroy

# MIGRATION

DRY : Don't repeat yourself
Convention over configuration

Active Record Migrations

## Setup
    - $ rails new create app_name -d postgresql -T
    - $ cd app_name
    - $ rails db:creare
    - $ rails server

### Files of concern
    - migration files (db -> migrate)
    - model file (app -> models)

### Process
    - generate model
    - generate migration
    - perform CRUD actions

# Model
    - $ rails generate model EventMenu title:string chef:string
    - Model name must be singular
    - MIGRATE
        - $ rails db:migrate
        - $ rails c(onsole)

### CRUD : create, read, update, delete
- CREATE
    - EventMenu.create(title:'Lemon Raspberry Cheesecake', chef:'Cheesecake Factory')
    - EventMenu.create(title:'Sugar Cookies', chef:'Christian')
    - EventMenu.create(title:'Egg Rolls', chef:'Bora')

- UPDATE
    - $ christian = EventMenu.where(chef:'Christian')
    - $ christian.update(title:'Cranberry Ginger Ale')

- DELETE
    - $ charlean = EventMenu.find(1)
    - $ charlean.destroy

# Add to Model -> Migration


# Active Record Associations
- Rails auto assigns IDs for models

- Defining relationships between tables
- Two separate tables; we want to link those two tables together
    - assign foreign key
        - foreign key is the primary key of the other table that you want to connect
        - forign key name : other_table_name_id
    - Cohort table & Student table
        - Student table has column of cohort_id
    - has_many
        - Cohort has many students
    - belongs_to
        - Students belong to a cohort
        - foreign key always lives on the belongs_to side

## Concepts:
- has_many belongs_to relationship
- foreign key connects the two tables
- foreign key lives on belongs_to side
- foreign key data is primary key of table you are connecting

- $ rails db:create
- $ rails g model Cohort name:string year:string
                    ^ make sure model name is singular
- $ rails db:migrate

- $ rails g model Student name:string cohort_id:integer

app -> models
  - cohort.rb
    - has_many :students **PLURAL**
  - student.rb
    - belongs_to :cohort **SINGULAR**

<!-- $ hotel = Cohort.find(1);
$ hotel.students;
$ hotel.students.create(name:'Christian');
$ foxtrot = Cohort.find(2);
$ foxtrot.students.create(name:'Annabella'); -->

## Active Record Validations and Models Specs

- Add RSpec to Rails
    - $ bundle add rspec-rails
    - $ rails g rspec:install
    - $ rails g model Animal name:string amount:integer
    - $ rails db:migrate
    - $ rspec spec/models/animal_spec.rb
        - runs test for file
- in spec/models/animal_spec.rb
```ruby
    RSpec.describe Animal, type: :model do
        it 'is valid with valid attributes' do
            cat = Animal.create(name:'Cat', amount:10)
            expect(cat).to be_valid
        end

    # Testing if an error WILL OCCUR
    # passing test indicates that there is an error for each example, which is good because we want these examples to produce errors
        it 'is not valid without a name' do
            cat = Animal.create(amount:12)
            expect(cat.errors[:name]).to_not be_empty
        end
        it 'is not valid without an amount' do
            cat = Animal.create(name:'Cat')
            expect(cat.errors[:amount]).to_not be_empty
        end
        it 'is not valid if name is outside of 2-20 characters' do
            ox = Animal.create(name:'O', amount:1)
            expect(ox.errors[:name]).to_not be_empty

            long_ox = Animal.create(name: 'Kevin the One-Armed WonderCat', amount:1)
            expect(long_ox.errors[:name]).to_not be_empty
        end
    end
```

- in app -> models -> animal.rb
```ruby
    class Animal < ApplicationRecord
        validates :name, :amount, presence: true
        validates :name, length: { in: 2..20 }
    end
```

# Rails Controllers, Routes, and Views

- Data flow
- Routes
- Controller
- Views

## Data Flow in the request-response cycle
- Web server receives request. It uses routes (url) to find out which controller to use.
    - config/routes.rb
- Controllers coordinate between the route and the views. It tells our app what view to render as the response based on the controller method that gets called by the route.
- Views are what the user sees on the screen. Visual representation of the html content.

## Process
- Generate a controller
    - Add applicable methods
    - Render a view
- Modify routes for each controller method
    - Create a view

## Generate a Controller
    - $ rails g controller Home
    - in app/controllers/home_controller.rb
``` ruby
        class HomeController < ApplicationController
            def aloha
                render html: 'Aloha, Hotel, we are learning about routes, controllers, and views!'
            end
        end
```

## Modify Routes file
    - structure:
        - combination of http verb, path, hashrocket, controller_name, #, method_name
        - 'get' http verb :
            - get '/aloha' => 'home#aloha'
    - in config/routes.rb
```ruby
        Rails.application.routes.draw do
            get '/aloha' => 'home#aloha'
        end
```
localhost:3000/aloha
*To change home page from default rails, use get '/' or root 'home#aloha'*

## Views
  - app/views/home
  - create files with same name as method in the applicable controller with the extension `.html.erb`
    - in app/views/home :
      - create file: aloha.hmtl.erb
    - in aloha.html.erb :
```ruby
      <% @cohort = 'Hotel 2022' %>
      <h2> Aloha, <%= @cohort %>! The aloha method on the home controller delivered this view to the screen. </h2>
```
- in app/controllers/home_controller.rb :
```ruby
    class HomeController < ApplicationController
        def aloha
            @cohort = 'Hotel 2022'
            render 'home/aloha'
        end
    end
```

- for data to not be seen on the screen: <% variable_name %> (line 264, line 271)
- if you want that data to show: <%= variable_name %> (line 265)

$ rail g controller Luau

app/controllers/luau_controller.rb
class LuauController < ApplicationController
    def food
    end

    def beverages
    end

    def entertainment
    end
end

app/views/luau/
- create file food.html.erb
<h2> Here is the food list. </h2>
<ul>
  <li> kalua pork </li>
  <li> sticky rice </li>
  <li> pancit </li>
  <li> spam musubi </li>
  <li> sauteed veggies </li>
  <li> bbq salmon </li>
</ul>

- file: beverages.html.erb
  <div style='color:green'>
    <p>
    The Aloha Queen's favorite drink is coquito.
    <ul>
    🧉🍻
        If you don't like coquito, then we will also provide:
        <li> ginger ale </li>
        <li> diet coke </li>
        <li> water </li>
        <li> sweet tea </li>
    </ul>
    </p>
  </div>

config/routes.rb
get '/food' => 'luau#food'
get '/beverages' => 'luau#beverages'
localhost:3000/food -> list of food

% application.css
% h2, p {
%     text-align: center;
% }

------------------ Rails Params -------------------

- Rails stores data from the url in a params hash

- Two ways to gather params
  - query string
  - use the url in the route

- To see the params hash, place the following code in a controller method
  - render plain: "#{params}"
  - in routes:
    - get '/entertainment' => 'luau#entertainment'

- Using query string
  - /?name=Nicole
    - at the end of url
    - localhost:3000/?name=Nicole
      - Output: {"name"=>"Nicole", "controller"=>"luau", "action"=>"entertainment"}
  - store the value from params hash in an instance variable
    - in luau_controller.rb -> entertainment method:
      - @name = params[:name]
      - @activities = ['hula', 'fire twirling', 'leis', 'climbing palm tree', 'seafaring']
    - in luau/entertainment.html.erb
      - <h2>Thank you <percent= @name percent>, for participating in the birthday luau. These are the departments that still need volunteers.</h2>
        - output: Thank you Nicole, for participating.....
      - <percent @activities.map do |value| percent>
          <percent= value percent>
        <percent end percent>
    - in routes
      - get '/entertainment/:name' => 'luau#entertainment'
        - localhost:3000/entertainment/Nicole
        - localhost:3000/entertainment/Chris
        - now any name will work at the end of entertainment in url

- Links
in desired html.erb file:
<percent= link_to 'name of link', '/pathway' percent>


# RESTful Routes; Full Stack

CRUD to HTTP Verbs to controller actions
Create -> Post -> create
Read -> Get -> index, show, new, edit
Update -> Put Patch -> update
Delete -> Delete -> destroy

Controller Actions
- index : get list of all the things (from database)
- show : details of one thing
- new : form (user fills) to create new thing
- create : add new content
- edit : form (user fills) to update thing
- update : update existing data
- destroy : removing data

CRUD : philosophy
HTTP Verbs : requests
Controller Actions : Methods
*Need all 3 to have full stack app*

- - - - - - - - Full Stack App - - - - - - - - - -

$ rails new book-tracker -d postgresql -T
$ cd book-tracker
$ rails db:create
$ rails g model Book name:string read:string
$ rails g controller Book
$ rails db:migrate

### Index & Show
- a list of all the things
- GET request
- 'read' CRUD action
- controller method
- route
- view

in book_controller.rb
    def index
        @books = Book.all
    end
    def show
        @book = Book.find(params[:id])
    end

in routes
    % as: '' is creating an alias for a path
    get 'books' => 'book#index', as: 'allbooks'
    get 'books/:id' => 'book#show', as: 'book'

in app/views/book/index.html.erb
    <h2>My Reading Tracker</h2>
        <percent @books.each do |b| percent>
            <ul>
                <li>
                    % make link_to url, alias_name_path(id)
                    <percent= link_to b.name, book_path(b) percent>
                </li>
            </ul>
        <percent end percent>

in app/views/book/show.html.erb
<h3><percent= @book.name percent></h2>
<br>
<h3>Have I read it? <percent= @book.read percent></h3>

## New, Create, Destroy
- displays a form
- get request
- read CRUD action
- controller, routes, view

in book_controller.rb
    def index
        @books = Book.all
    end
    def show
        @book = Book.find(params[:id])
    end
    def new
        @book = Book.new
    end
    def create
        @book = Book.create(book_params)
            if @book.valid?
                redirect_to allbooks_path
            end
    end
    def destroy
        @book = Book.find(params[:id])
        if @book.destroy
            redirect_to books_path
        end
    end
    def edit
        @book = Book.find(params[:id])
    end
    def update
        @book = Book.find(params[:id])
        @book.update(book_params)
    end

    private % anything after this private can only be accessed in the scope of this class
        % strong params
        def book_params
          params.require(:book).permit(:name, :read)
        end

in routes
    % as: '' is creating an alias for a path
    get 'books' => 'book#index', as: 'allbooks'
    get 'books/new' => 'book#new'
    % make sure get 'books/new' is above the one using params
    get 'books/:id' => 'book#show', as: 'book'
    post 'books' => 'book#create'
    get 'books/:id/edit' => 'book#edit', as: 'edit_book'
    patch 'books/:id' => 'book#update'
    delete 'books/:id' => 'book#destroy', as: 'delete_book'


in app/views/book/new.html.erb
<h2>Add a new book!</h2>
<%= form_with model: @book do |form| %>
    <%= form.label :name %>
    <%= form.text_field :name %>
    <%= form.label :read %>
    <%= form.text_field :read %>
    <%= form.submit 'Add Book' %>
<% end %>

in app/views/book/show.html.erb
<p><percent= button_to 'Remove a book', delete_book_path, method: :delete percent></p>
<p> erb link_to 'Edit this Book', edit_book_path erb </p>

in app/views/book/edit.html.erb
<h2>
  Edit this Book
</h2>
<%= form_with model: @book, method: :patch do |form| %>
    <%= form.label :name %>
    <%= form.text_field :name %>
    <%= form.label :read %>
    <%= form.text_field :read %>
    <%= form.submit 'Update Book' %>
<% end %>

- - - - - - - - - Rails API - - - - - - - - - - - -

API : delivers data in a json, allows different programs to connect

RESTful routes that deal solely with data: create, update, index, destroy, show

Create a song tracker
- model
- controller
- $ rails g resource Song title:string artist:string
- $ rails routes --expanded

- generating a resource creates a model and controller for Song

- $ rails db:migrate

in SongsController:
def index
    songs = Song.all
    render json: songs
end
def show
    song = Song.find(params[:id])
    render json: song
end
def create
    song = Song.create(song_params)
    if song.valid?
        render json: song
    else
        render json: song.errors
    end
end

private
def song_params
    params.require(:song).permit(:title, :artist)
end

in routes:
resources :songs

in Postman:
    for index:
    GET localhost:3000/songs
    output: array of objects containing our data entries

    for show:
    GET localhost:3000/songs/<id>
    output: object containing the data entry at given id

    for create:
    Body -> raw; switch text to JSON
    POST localhost:3000/songs
        in body:
        {
            'title': 'Love',
            'artist': 'Keyshia Cole'
        }
    output: object with new song data

in ApplicationController
skip_before_action :verify_authenticity_token