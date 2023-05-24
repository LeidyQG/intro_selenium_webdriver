import {Builder, By, WebDriver} from 'selenium-webdriver'
import assert from 'assert'


//Describir las pruebas
jest.setTimeout(60000)

describe(
    'Primer prueba Selenium',
    ()=>{

        //Definir un objeto de la clase webDriver
        let miNavegador:WebDriver

        //beforeAll
        beforeAll(
            async ()=>{
                miNavegador=  await new Builder().forBrowser('chrome').build()
            }
        )

       //afterAll
       afterAll(
        async()=>{
            await miNavegador.quit()
        }
       )

        //Crear las pruebas

        test(
            'Prueba de ejemplo con Selenium',
            async ()=>{
                await miNavegador.get('https://www.selenium.dev/selenium/web/web-form.html')
                let titulo= await miNavegador.getTitle()
                assert.equal(titulo, "Web form")

                //Hacer referencia a un elemento del DOM

                let miElemento= await miNavegador.findElement(By.name('my-text'))
                await miElemento.sendKeys("Selenium")
                let miBoton= await miNavegador.findElement(By.css('button'))
                await miNavegador.sleep(1000)
                await miBoton.click()

                let miMensaje= await miNavegador.findElement(By.id('message'))
                let texto= await miMensaje.getText()
                assert.equal(texto, 'Received!')
                await miNavegador.sleep(2000)
               
            }
        )





    }
)


