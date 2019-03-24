import controller from './users.controller'
import template from './users.html'

export const UsersComponent = {
    bindings: {
        usersList:'<'
    },
    controller,
    template: template
}