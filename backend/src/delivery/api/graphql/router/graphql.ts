import { Router } from 'express'
import { graphqlHTTP } from 'express-graphql'

import { schema } from '../schema/schema'

class GraphqlRouter {
    private router: Router

    constructor() {
        this.router = Router()

        this.router.use('/graphql', graphqlHTTP({
            schema: schema,
            graphiql: true,
            customFormatErrorFn: (error) => {
                return { message: error.message }
            }
        }))
    }

    getRouter(): Router {
        return this.router
    }
}

export {
    GraphqlRouter
}