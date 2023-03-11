# $ gem install rspec

# Two files
    # file_name.rb
    # file_name_spec.rb

# Process
    # add dependencies for RSpec -> $ gem install rspec
    # to run test -> $ rspec file_name_spec.rb

# RED - GREEN - REFACTOR

# Create test
    # describe 'name of class' + do/end block
    # it 'property or feature you are testing' + do/end block
    # expect

require 'rspec'
require_relative 'rspec_notes.rb'

describe 'FavRecipe' do
    it 'has to be real' do
        expect { FavRecipe.new('Buttermilk Cornbread') }.to_not raise_error
    end
    it 'has a title' do
        cornbread = FavRecipe.new('Buttermilk Cornbread')
        expect(cornbread.title).to be_a(String)
    end
    it 'can be given ingredients or still be searching by default' do
        cornbread = FavRecipe.new('Buttermilk Cornbread')
        expect(cornbread.ingredients).to be_a(String)
        expect(cornbread.ingredients).to eq('still searching')
        hot_water_bread = FavRecipe.new('Hot Water Bread', 'hot water, cornmeal, flour, butter, egg')
        expect(hot_water_bread.ingredients).to be_a(String)
        expect(hot_water_bread.ingredients).to eq('hot water, cornmeal, flour, butter, egg')
    end
    # test verification status
    it 'has a verification status' do
        stove_top = FavRecipe.new('Stove Top Cornbread', 'container of Stove Top, water, egg')
        expect{ stove_top.cooked }.to change{ stove_top.verified }.from(false).to(true)
    end
end
# Failures:

#   1) FavRecipe has to be real
#      Failure/Error: expect { FavRecipe.new }.to_not raise_error

# Finished in 0.00229 seconds (files took 0.0635 seconds to load)
# 2 examples, 0 failures