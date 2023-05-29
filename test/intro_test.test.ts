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
                assert.equal(titulo, "Web form") //assert define objetos de prueba

                //Hacer referencia a un elemento del DOM

                let miElemento= await miNavegador.findElement(By.name('my-text'))
                await miElemento.sendKeys("Selenium") //Simula el envio de un texto al elemento
                let miBoton= await miNavegador.findElement(By.css('button'))
                await miNavegador.sleep(1000)
                await miBoton.click()//Simula que hizo click en el botón

                let miMensaje= await miNavegador.findElement(By.id('message'))
                let texto= await miMensaje.getText() //Obtiene el texto del elemento
                assert.equal(texto, 'Received!') //Compara lo que se espera y lo que se recibe
                await miNavegador.sleep(2000) //Hace que el navegador espere los milisegundos puestos
               
            }
        )





    }
)


