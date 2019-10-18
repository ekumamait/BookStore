import Favorites from '../models/favorites';

const Favorites = {
    /**
     * Post A book
     * @param {object} req 
     * @param {object} res
     * @returns {object} Favorite object 
     */

    async PostFavorite (req,res) {
        Favorites.create()
        .then(() => {
            Favorites.create({
                Id: 1,
                the_comment: "second comment posted"
            })
        })
    }

}

export default Favorites;