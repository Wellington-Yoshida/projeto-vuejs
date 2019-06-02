<template>
  <div id="app">
    <label>Informe IP do cliente</label>
    <div class="row inputCliente">
      <div class="col-8">
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">Buscar</span>
          </div>
          <input type="text" v-model="buscaCliente" placeholder="informe o IP do cliente" class="form-control">
        </div>
        <tabela-Cliente :buscaCliente="buscaCliente"
                        :clientes="clientes"/>
      </div>
    </div>
  </div>
</template>

<script>
import TabelaCliente from './components/TabelaCliente.vue'
export default {
  name: 'app',
  components: {
    TabelaCliente
  },
  data() {
    return {
      buscaCliente: '',
      clientes: [
        { nome: 'Romero', produto: 'API-Dist', ip: '192.101.102.1' },
        { nome: 'Romero', produto: 'API-Financ', ip: '192.101.102.2' },
        { nome: 'Romero', produto: 'Mule', ip: '192.101.102.3' },
        { nome: 'Romero', produto: 'Redis', ip: '192.101.102.4' },
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.inputCliente{
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
