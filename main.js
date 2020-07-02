let coin = {
    state: 0,

    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        this.state = Math.round(Math.random())
        console.log(this.state)
    },
    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        if (this.state) {
            return "Heads"

        }

        return "Tails"

    },

    toHTML: function () {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/

        if (this.state === 1) {

            image.src = "./images/heads.jpg"


        } else {

            image.src = "./images/tails.jpg"
        }


        return image;
    }
};

function display20Flips() {

    let flipsPTag = document.createElement('p')
    for (counter = 0; counter < 20; counter++) {
        coin.flip()
        let result = coin.toString()

        flipsPTag.append(result)
        document.body.appendChild(flipsPTag)

    }

}

display20Flips()

function display20Images() {






    for (let counter = 0; counter < 20; counter++) {
        coin.flip()
        coin.toHTML()
        document.body.append(coin.toHTML())

    }

}

display20Images()
