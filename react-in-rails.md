React in Rails Intro

Monolithic Application:
- One app handles database AND views

in desktop
rails new app-name -d postgresql -T
cd app-name
rails db:create
rails s

bundle add webpacker
bundle add react-rails
rails webpacker:install (choose v5.4.3)
rails webpacker:install:react
yarn add @babel/preset-react
yarn add @rails/activestorage
yarn add @rails/ujs (non get requests for links, popup confirmations)

rails g react:install
rails g react:component App

in app/javascript/components
- treat this folder like src folder

rails g controller Home
rm app/helpers/home_helper.rb (optional file we can delete)

in app/views/home
- create index.html.erb
in that file:
<!-- setup pathway to render App.js -->
<%= react_component 'App' %>

in config/routes.rb
Rails.application.routes.draw do
    root "home#index"
end

in app/views/layouts/application.html.erb
change <%= javascript_importmap_tags %>
to <%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>

Now we can see our App.js page on the rails server!

Giant cursor keyboard shortcut
OPT SHIFT I
CMD <-

bundle add bootstrap
<!-- css not compatible with rails, need scss -->
rename app/assets/stylesheets/application.css to application.scss
yarn add reactstrap

in appliation.scss
@import 'bootstrap'

in app/javascript/components
make folders: assets, components, pages

in pages: AboutUs.js Home.js
in components/components: Navigation.js

yarn add react-router-dom

in App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom
import Navigation from './components/Navigation'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}


in Navigation.js
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <Nav>
        <NavItem>
          <NavLink to='/' className='nav-link'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/about' className='nav-link'>About Us</NavLink>
        </NavItem>
      </Nav>
    </>
  )
}

in config/routes.rb
<!-- if the request is in html, send to react -->
Rails.application.routes.draw do
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end

## Devise
- ruby gem to create user

Authorization & Authentication

Authentication: credentials
Authorization: what you have access to after authentication

bundle add devise
rails g devise:install
rails g devise User
rails db:migrate

add to config/environments/development.rb: config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

<!-- rails g devise:views to customize views for sign in pages -->

<!-- when user logs in, they create a session. token is assigned to the user, which goes with the requests the user makes -->

rails routes -> see all routes

in app/view/home/index.html.erb

<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>

in App.js

const App = (props) => {

  <!-- 
  props is containing this object:
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } 
  -->

  return (
    <BrowserRouter>
      <Navigation {...props} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

in config/initializers/devise.rb
find: config.sign_out_via = :delete
replace :delete with :get

in Navigation.js

const Navigation = (
  {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route,
  } 
) => {
  return (
    <>
      <Nav>
        {logged_in && 
          <NavItem>
            <a href={sign_out_route} className='nav-link'>Sign Out</a>
          </NavItem>
        }
        {!logged_in &&
          <NavItem>
            <a href={sign_in_route} className='nav-link'>Sign In</a>
          </NavItem>
        }
        {!logged_in &&
          <NavItem>
            <a href={new_user_route} className='nav-link'>Sign Up</a>
          </NavItem>
        }
      </Nav>
    </>
  )
}


# External API

- generate api key from website
- make .env file in app on root level

in .env:
REACT_APP_API_KEY = <insert api key here>

make sure .env is in .gitignore

in Gemfile:
gem "dotenv-rails"

$ bundle

in component:
const externalAPI = () => {
  fetch(`https://api.nasa.gov.....key=${apiKey}`)
    .then(response => response.json())
    .then(payload => setNasaData(payload))
    .catch(errors => console.log('errors', errors))
}

make sure api key is not in the code:
assign key to variable:
const apiKey = process.env.REACT_APP_API_KEY