import {Builder, By, WebDriver} from 'selenium-webdriver'
import assert from 'assert'


//Describir las pruebas
jest.setTimeout(60000)

describe(
    'Prueba controlada búsqueda atenea',
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
            'Prueba funcionalidad buscar Atenea',
            async ()=>{

                await miNavegador.get('https://agenciaatenea.gov.co/')
                let titulo= await miNavegador.getTitle()
                assert.match(titulo, /Atenea/i) //Mira si un texto cumple una expresión regular--Busca que en algún lado diga atenea, el i hace que no importe si viene en mayúsculas o minúsculas
                await miNavegador.sleep(2000)
               
            }
        )
    }
)


