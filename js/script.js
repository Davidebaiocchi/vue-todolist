const app = new Vue(
    {
        el: '#app',
        data: {
            newTodo: "",
            todos: [
                ' Fare i compiti',
                ' Lavare i piatti',
                ' Appuntamento con Isi'
            ]
        },
        methods: {
            addTodo() {
                this.todos.push(this.newTodo);
                this.newTodo = '';
            },
            removeTodo(indice) {
                this.todos.splice(indice,1);
            }
        }
    }
);