document.querySelector("form").addEventListener("submit", addMovie);
const message = document.querySelector('#message')

function addMovie(event) {
  event.preventDefault();
  let inputField = document.querySelector('input')

  const movie = document.createElement('li')

  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle)

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteMovie);
  //this will remove all the whitespace from user's input to use as an id, which could then be used as a selector
  const movieId = inputField.value.replace(/\s+/g, '');
  deleteBtn.setAttribute('id', movieId);
  movie.appendChild(deleteBtn);

  const list = document.querySelector("ul");
  list.appendChild(movie);

  inputField.value = ''
}

function deleteMovie(event) {
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    
    revealMessage()

    event.target.parentNode.remove();
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked') === true) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }

    revealMessage()
}

function revealMessage() {
    message.classList.remove('hide')
    
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}

/**
 * const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async ()=> {
    await driver.get('http://127.0.0.1:5501/movieList/%27)
})

afterAll(async ()=> {
    await driver.quit()
})

describe('movie-list tests', ()=> {
    test('should be able to cross off the movie on click', async ()=> {
        let input = await driver.findElement(By.xpath('//input'))

        input.clear()
        input.sendKeys('Avatar')

        let addButton = await driver.findElement(By.xpath('//button'))
        addButton.click()
       await driver.sleep(3000)

        let movieTitle = await driver.findElement(By.xpath('//li/span'))
        // movieTitle.click()
        await driver.findElement(By.xpath('//li/span')).click()
        await driver.sleep(3000)

        expect(await driver.findElement(By.xpath('//span[contains(@class,"checked")]'))).toBeTruthy()
    })
    test('should delete the movie on click', async()=> {
        let input = await driver.findElement(By.xpath('//input'))

        input.clear()
        input.sendKeys('Avatar')

         await driver.findElement(By.xpath('//button')).click()
       await driver.sleep(3000)

       await driver.findElement(By.xpath('//button[contains(@id,"Avatar")]')).click()

       expect(await driver.findElement(By.id('message')).getText()).toBe('Avatar deleted!')

    })
})

 */