// Backend API restful
//fastify é um framework semelhante ao express

import Fastify from 'fastify'
import {PrismaClient} from '@prisma/client'
import cors from '@fastify/cors'


 //criando a aplicação
 const app = Fastify()
 const prisma = new PrismaClient()

 app.register(cors)

/*
    Método HTTP: 
    Get => sempre que for buscar informação, 
    Post => uma rota que vai criar alguma coisa, 
    Put => rota para atualizar algum recurso por completo, 
    Patch => quando vai atualizar uma informação específica de um recurso, 
    Delete => quando vou deletar um recurso dentro do backend
*/

//criando a rota
app.get('/', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Beber'
            }
        }
    })

    return habits
})

//escutando a porta
app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running!')
})





