import { uuid } from './utils'

export default {
    name: 'workshop',
    columns: [
        { 
            name: 'todo',
            tasks: [
                {
                    id:  uuid(),
                    name: 'SEO',
                    userAssigned: null,
                    description: ''
                },
                {
                    id:  uuid(),
                    name: 'CSS',
                    userAssigned: null,
                    description: ''
                },
                {
                    id:  uuid(),
                    name: 'HTML',
                    userAssigned: null,
                    description: ''
                },
                {
                    id:  uuid(),
                    name: 'PHP',
                    userAssigned: null,
                    description: ''
                },
            ]
        },
        { 
            name: 'in-progress',
            tasks: [
                {
                    id:  uuid(),
                    name: 'PHP Functional',
                    userAssigned: null,
                    description: ''
                },
                {
                    id:  uuid(),
                    name: 'Laravel Design Patterns',
                    userAssigned: null,
                    description: ''
                },
            ]
        },
        { 
            name: 'done',
            tasks: [
                {
                    id:  uuid(),
                    name: 'Vuex',
                    userAssigned: null,
                    description: ''
                }
            ]
        }
    ]
}