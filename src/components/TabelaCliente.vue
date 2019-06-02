<template>
    <div class="row">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Cliente</th>
                    <th scope="col">Produto</th>
                    <th scope="col">Ip</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="c in getCliente" :key="c.ip">
                    <td>{{ c.nome }}</td>
                    <td>{{ c.produto }}</td>
                    <td>{{ c.ip }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        buscaCliente: String,
        clientes: Array
    },
    methods: {
        filterCliente(cliente) {
            return cliente.ip.match(this.buscaCliente);
        }
    },
    computed: {
        getCliente() {
            return this.clientes.filter(this.filterCliente);
        }
    },
}
</script>

<style>

</style>
