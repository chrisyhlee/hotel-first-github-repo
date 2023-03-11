class FavRecipe
    attr_accessor :title, :ingredients, :verified
    def initialize(title, ingredients='still searching')
        @title = title
        @ingredients = ingredients
        @verified = false
    end
    def cooked
        @verified = true
    end
end