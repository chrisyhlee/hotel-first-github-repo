new rails app on desktop
remote add to github
rails g resource Cat name:string age:integer enjoys:string ...

trello : move to 'Doing' when you are doing the task
- move to 'PR Review' when the task is done and PR is made
- Once approved, move to 'Done'
- After done, github parrot reaction

seeds
- seeding database with 'dummy' information
- replaces the need to go to console and create each entry manually
    example in seeds.rb :
    cats = [
        {
            name: 'Felix',
            age: 2,
            enjoys: 'Long naps on the couch',
            image: 'https://images....'
        }
    ]

    cats.each do |each_cat|
        Cat.create each_cat
        puts "creating cat #{each_cat}"
    end
- rails db:seed

If you add the same cats into cats db:
- rails db:drop
- rails db:create
- rails db:migrate
- rails db:seed

Connecting rails with external app (i.e React)
- CORS: cross origin resource sharing
- Go to app/controllers/application_controller.rb
    - skip_before_action :verify_authenticity_token
- create new file: config/initializers/cors.rb :
    Rails.application.config.middleware.insert_before 0, Rack::Cors do
        allow do
            origins '*'
            resource '*',
                headers: :any,
                methods: [:get, :post, :put, :patch, :delete, :options, :head]
        end
    end
- in Gemfile
    - gem 'rack-cors', :require => 'rack/cors'

rails db:setup
    - runs db:create, db:migrate, db:seed all at once

rails db:reset
    - runs db:drop, db:create, db:migrate, db:seed

7 steps
1. Create new rails app
2. Enable CORS : allows rails to communicate with external app
3. rails g resource ResourceName
4. created, migrated, seeded the database
5. Define the controller actions/endpoints: index, create, update, destroy
6. Test API functionality with spec/request
    - Testing process:
        - Stub the controller action methods/endpoints
        - Create test in spec/requests
        - See good failure
        - Modify controller action
        - See valid pass

    describe "GET /index" do
        it 'returns all data' do
            Cat.create(
                name: 'Kevin',
                age: 9
            )
        
            get '/cats'
            p response
            
            cat = JSON.parse(response.body)
            p 'cat:', cat

            expect(response).to have_http_status(200)
            expect(cat.length).to eq(1)
        end
    end

    describe "POST /create" do
        it "creates a cat" do
            cat_params = {
                cat: {
                    name: 'Kevin',
                    age: 9
                }
            }

            post '/cats', params: cat_params

            expect(response).to have_http_status(200)
            
            cat = Cat.first
            expect(cat.name).to eq('Kevin')
            expect(cat.age).to eq(9)

        end

        it "will not create a cat missing its name" do
            cat_params = {
                cat: {
                    age: 9
                }                
            }

            post '/cats', params: cat_params

            expect(response).to have_http_status(422)

            cat = JSON.parse(response.body)
            p cat
            expect(cat.errors[:name]).to include("can't be blank")
        end
    end

# Adding React

create react app on desktop, remote add github

in react app, create mock data that matches what backend expects to receive

src/components/
src/assets/ 
src/pages/
    => index, show, create, etc.

Add Reactstrap
$ yarn add bootstrap
$ yarn add reactstrap
Add to src/index.js: import 'bootstrap/dist/css/bootstrap.min.css'

in src/pages:
Home.js
CatIndex.js
CatShow.js
CatNew.js
CatEdit.js
NotFound.js

in src/components:
Header.js
Footer.js

make component for each page with proper names ^

in src/mock
make mock data; NEEDS ID
const mockCats = [
    {
        id: 1,
        name: 'Mittens',
        age: 5,
        enjoys: 'sunshine and warmth',
        image: 'www.mittens.com'
    },
    {
        id: 2,
        name: 'Raisins',
        age: 6,
        enjoys: 'being queen of the dogs',
        image: 'www.raisins.com'
    },
    {
        id: 3,
        name: 'Toast',
        age: 3,
        enjoys: 'getting all the attention',
        image: 'www.toast.com'
    }
]
export default cats

in App.js:
import {useState} from 'react'
import mockCats from './mockCats'

const [cats, setCats] = useState(mockCats)

React Router
- 3rd party app that will allow navigation between pages
yarn add react-router-dom
- allows us to import routing components to our app; App.js
Add the BrowserRouter component to index.js :
- import {BrowserRouter} from 'react-router-dom'
    - root.render(
        <BrowserRouter>
        <App />
        </BrowserRouter>
    )
App.js :
- import {Route, Routes} from 'react-router-dom'
- import Header from './components/Header'
- import Footer from './components/Footer'
- Everything we need navigation for, wrap in <Routes></Routes>
    return (
      <>
        <Header />
        <Routes>
          <h1>Cat Tinder Hooray!</h1>
            <Route path='/' element={<Home/>} />
            <Route path='/catedit' element={<CatEdit/>} />
            <Route path='/catindex' element={<CatIndex/>} />
            <Route path='/catnew' element={<CatNew/>} />
            <Route path='/catshow' element={<CatShow/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
      </>
    )

# Testing

in App.test.js :

import {render, screen} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import App from "./App'
import '@testing-library/jest-dom'

describe('<App />'), () => {
    it ('renders a greeting', () => {
        <!-- arrange -->
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
        <!-- instead of console.log; use screen.debug() to see html -->
        screen.debug()
        screen.logTestingPlaygroundURL()
        <!-- act -->
        const greeting = screen.getByText('Welcome to Kevin Tails')
        <!-- assert -->
        expect (greeting).toBeInTheDocument()
    })

    it ('has a heading', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
        const heading = screen.getAllByRole('heading', {
            name: /kevin tails/i
        })
        expect(heading).toBeInTheDocument
    })
}

RTL methods
- getByText(): finds an element by its text value
- getByRole(): finds an element by its attributes

in Header.test.js :

imports...

describe('<Header />', () => {
    it ('has an image', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        <!-- debug -->
        screen.logTestingPlaygroundURL()
        <!-- act -->
        const image = screen.getByRole('img')
        <!-- asset -->
        expect(image).toHaveAttribute('src', 'https://images.unsplash.com/photo')
    })
})

## Read Functionality

in App.js

  return (
    <>
      <Header />
      <Routes>
        <h1>Cat Tinder Hooray!</h1>
          <Route path='/' element={<Home/>} />
          <Route path='/catindex' element={<CatIndex cats={cats} /> } />
          <Route path='/catshow/:id' element={<CatShow cats={cats} /> } />
          <Route path='/catedit' element={<CatEdit/>} />
          <Route path='/catnew' element={<CatNew/>} />
          <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )

in CatIndex.js

import NavLink from 'react-router-dom'

const CatIndex = ({ cats }) => {
  return(
    <>
      <main>
      <!-- cats? means if there are cats, map -->
        {cats?.map((cat, index) => {
          return(
            <h3 key={index}>{cat.name}</h3>
          )
        })}
      </main>
    </>
  )
}

tool for quick wireframing: excalidraw.com

in CatIndex.test.js

import React
import {render, screen} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import CatIndex from './CatIndex'
import mockCats from '../mockCats'

describe("<CatIndex />", () => {
  it("renders without crashing", () => {})
  it("renders cat cards", () => {
    const div = document.createElement("div")
    render(<CatIndex cats={mockCats} />, div)
    mockCats.forEach(cat => {
      const catName = screen.getByText(cat.name)
      expect(catName).toBeInTheDocument()
    })
  })
})

in CatShow.js

import { useParams } from 'react-router-dom'

const CatShow = ({ cats }) => {

  const { id } = useParams()
  <!-- +id changes the string id into number -->
  let selectedCat = cats?.find(cat => cat.id === +id)

  return(
      <main className="cat-show-cards">
      {selectedCat && (
    <>
        <img
          alt={` ${selectedCat.name}'s profile`}
          src={selectedCat.image}
          className="cat-show-img"
        />
        <h3>{selectedCat.enjoys}</h3>
    </>
    )}
      </main>
  )
}

in CatShow.test.js

import React
import {render, screen} from '@testing-library/react'
import {MemoryRouter, Routes, Route} from 'react-router-dom'
import CatShow from './CatShow'
import mockCats from '../mockCats'

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/catshow/1"]}>
      <Routes>
        <Route path='catshow/:id' element={<CatShow cats={mockCats} /> } />
      </Routes>
    </MemoryRouter>
  )
}

describe("<CatShow />", () => {
  it("renders cat cards with enjoys", () => {
    renderShow()
    expect(screen.getByText(mockCats[0].enjoys)).toBeInTheDocument()
    const div = document.createElement("div")
    render(<CatShow cats={mockCats} />, div)
  })
})

# Create Functionality

### in CatNew.js

copy and paste form

const CatNew = ({ createNewCat }) => {

  const [newCat, setNewCat] = useState ({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    <!-- console.log(e.target.name)
    => key
    console.log(e.target.value)
    => value (what is being typed) -->
    setNewCat({...newCat, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createNewCat(newCat)
    navigate("/catindex")
  }

  return(
    <>
      <h1>Add a New Cat</h1>
      <Form>
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="enter a name"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
      </Form>
      <div>
        <Button
          color="Primary"
          name="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </>
  )
}

### in App.js

const createNewCat = (newCatObject) => {

}

<CatNew createNewCat={createNewCat} />

### in CatNew.test.js

describe("<CatNew />", () => {
  render(
    <BrowserRouter>
      <CatNew />
    </BrowserRouter>
  )
  it("can see the title of the page", () => {
    const element = screen.getByText(/new cat/i)
    expect(element).toBeInTheDocument()
  })
})

# Fetching

run both servers (frontend and backend)

controller -> CRUD action
index -> read
create -> create
update -> update
destroy -> delete

create method name as the crud action
  readCats = () = {}

fetch() inside method above ^

fetch("url")
  <!-- converts response to json -->
  .then(response => response.json())
  .then(json => console.log(json))
  <!-- catch errors -->
  .catch(error => console.log("error: ", error))

fetch returns a promise:
- fulfilled: successful request
- rejected: failed request
- pending: waiting on response

## in App.js
remove mock data

  const [cats, setCats] = useState([])

  const readCats = () => {
    fetch("http://localhost:3000/cats")
      .then(response => response.json())
      .then(payload => {
        setCats(payload)
      })
      .catch(error => console.log(error))
  }
  useEffect(() => {readCats()}, [])
  <!-- this hook takes 2 arguments: action to execute & dependency value [] -->

  const createNewCat = (newCatObject) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newCatObject),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(payload => readCats())
      .catch(error => console.log('cat create errors: ', error))
  }


  return (
    <>
      <Header />
      <Routes>
        <h1>Cat Tinder Hooray!</h1>
          <Route path='/' element={<Home/>} />
          <Route path='/catindex' element={<CatIndex cats={cats} /> } />
          <Route path='/catshow/:id' element={<CatShow cats={cats} /> } />
          <Route path='/catedit' element={<CatEdit/>} />
          <Route path='/catnew' element={<CatNew/>} />
          <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
