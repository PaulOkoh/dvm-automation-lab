const {Builder,Capabilities,By} = require('selenium-webdriver')

require("chromedriver")

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
  await driver.get('http://127.0.0.1:5501/movieList/')
})

afterAll(async () =>{
  await driver.quit()
})

describe("movieList Tests", ()=> {
  test('it cross off movie, when added movie is clicked ', async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('Avatar')
    await driver.sleep(2000)

    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(2000)

    await driver.findElement(By.xpath('//li/span')).click()
    await driver.sleep(2000)

    expect(await driver.findElement(By.xpath('//span[contains(@class,"checked")]'))).toBeDefined()
    
  })

  test('it should  delete a movie when delete button is clicked', async () => {
    await driver.findElement(By.xpath('//input')).clear()

    await driver.findElement(By.xpath('//input')).sendKeys('Avatar')
    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(2000)

    await driver.findElement(By.xpath('//button[contains(@id,"Avatar")]')).click()
    await driver.sleep(2000)

    await driver.findElement(By.xpath('//li/span'))
    await driver.sleep(2000)

    expect(deletedSpan).value.toBe('')


  })

  // test('it should display a message when movie is deleted', async () => {
  //   await driver.findElement(By.xpath('//button[contains(@id,"Avatar")]')).click()

  //   expect(await driver.findElement(By.id('message')).getText()).toBe('Avatar deleted!')

  // })


})

// const verifyMovie = async(driver,movie) => {
//   await driver.findElement(By.xpath('//input[@placeholder="Add Movie"]')).sendKeys(`${movie}`)

//   await driver.findElement(By.xpath('//button')).click()
// //find movie span
//   const movieText = await driver.findElement(By.xpath('//li/span')).getText()
//   expect(movieText).toBe(movie)

// }