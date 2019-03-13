<template>
    <div class="fixed-top">
        <b-nav>
            <b-container fluid>
                <b-row class="custom-nav">
                    <img src="../assets/logo.svg" class="mx-auto d-block" alt="original.io logo">
                </b-row>
                <b-row class="nav-itens">
                    <b-col cols="6" md="3" class="order-2 order-md-1">
                        <b-row class="login">
                            <b-col cols="5"><a href="#">Entrar</a></b-col>
                            <b-col cols="7" class="signup"><a href="#">Cadastrar-se</a></b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="12" md="4" offset-md="1" class="order-1 order-md-2 pb-4 pb-md-0">
                        <b-row>
                            <b-col cols="3"><a href="#">Sapatos</a></b-col>
                            <b-col cols="3"><a href="#">Bolsas</a></b-col>
                            <b-col cols="3"><a href="#">Acessórios</a></b-col>
                            <b-col cols="3"><a href="#">Off</a></b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="6" md="3" class="ml-auto order-3">
                        <b-row>
                            <b-col cols="7" sm="6"><input placeholder="Busca"></input></b-col>
                            <b-col cols="5" sm="6">
                                <b-row>
                                    <b-col cols="6" class="pr-0">
                                        <img src="../assets/checkout.svg" class="mx-auto d-block" alt="checkout icon">
                                    </b-col>
                                    <b-col cols="6" class="pl-0">
                                        <p class="text-left">0</p>   
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </b-nav>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.custom-nav {
    margin-top: 26px;
    padding-bottom: 26px;
    border-bottom: 1px solid #CCCCCC;
}

.nav-itens {
    margin-top: 9px;
    border-bottom: 1px solid #CCCCCC;
}

.fixed-top a {
    color: #686868;
}

.login {
    font-size: 12px;
    margin-top: 9px;
}

.signup {
    border-left: 1px solid #686868;
}

input {
    width: 100%;
    border: 0;
    outline: 0;
    border-bottom: 1px solid #c1c1c1;
    background: url(../assets/Union.svg) no-repeat scroll 4px 4px;
    padding-left:30px;
}
</style>
