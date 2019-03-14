<template>
  <b-container fluid> 
    <b-row>
        <b-col class="text-center who-saw"> 
            <p>Quem viu viu também</p>
        </b-col> 
    </b-row>
    <b-row class="related-searches mx-auto">
        <b-col cols="12" sm="3"> 
            <b-row>
                <b-col cols="12"> 
                    <img src="../../assets/bolsa.png"> 
                    <a href="#" class="add"> 
                        <font-awesome-icon icon="plus" /> 
                    </a>
                </b-col> 
            </b-row>
            <b-row>
                <b-col cols="4" class="price"> 
                    <p>R&#36; 204,90</P>
                </b-col> 
                <b-col cols="4" class="ml-auto mt-1"> 
                    <b-row>
                        <b-col cols="12">
                            <span class="circle-color fucsia"> </span> 
                            <span class="circle-color blue-cove ml-2"> </span> 
                            <span class="circle-color brown ml-2"> </span> 
                            <span class="circle-color black ml-2"> </span>  
                        </b-col> 
                    </b-row>    
                </b-col> 
            </b-row>
        </b-col> 
        <b-col cols="12" sm="3"> 
            <b-row>
                <b-col cols="12"> 
                   <img src="../../assets/sandaliasfeias.png">  
                   <a href="#" class="add"> 
                        <font-awesome-icon icon="plus" /> 
                    </a>
                </b-col> 
            </b-row>
            <b-row>
                <b-col cols="4" class="price"> 
                    <p>R&#36; 204,90</P>
                </b-col> 
                <b-col cols="4" class="ml-auto mt-1"> 
                    <b-row>
                        <b-col cols="12">
                            <span class="circle-color fucsia"> </span> 
                            <span class="circle-color blue-cove ml-2"> </span> 
                            <span class="circle-color brown ml-2"> </span> 
                            <span class="circle-color black ml-2"> </span> 
                        </b-col> 
                    </b-row>    
                </b-col> 
            </b-row>
        </b-col> 
        <b-col cols="12" sm="3"> 
            <b-row>
                <b-col cols="12"> 
                   <img src="../../assets/sandalias.png">
                   <a href="#" class="add"> 
                        <font-awesome-icon icon="plus" /> 
                    </a>  
                </b-col> 
            </b-row>
            <b-row>
                <b-col cols="4" class="price"> 
                    <p>R&#36; 204,90</P>
                </b-col> 
            </b-row>
        </b-col> 
        <b-col cols="12" sm="3"> 
            <b-row>
                <b-col cols="12"> 
                   <img src="../../assets/bolsas.png"> 
                   <a href="#" class="add"> 
                        <font-awesome-icon icon="plus" /> 
                    </a> 
                </b-col> 
            </b-row>
            <b-row>
                <b-col cols="4" class="price"> 
                    <p>R&#36; 204,90</P>
                </b-col> 
                <b-col cols="4" class="ml-auto mt-1"> 
                    <b-row>
                        <b-col cols="12">
                            <span class="circle-color blue-cove ml-3"> </span> 
                            <span class="circle-color brown ml-2"> </span> 
                            <span class="circle-color black ml-2"> </span>  
                        </b-col> 
                    </b-row>    
                </b-col> 
            </b-row>
        </b-col>    
    </b-row>  
    <b-row>
        <b-col cols="12" sm="2" class="mx-sm-auto">
            <b-row>
                <b-col cols="3">
                    <a href="#" class="pagination"> 
                        <font-awesome-icon icon="chevron-left" /> 
                    </a> 
                </b-col>
                <b-col cols="6" class="text-center mt-1">
                    <p class="pagination-show">1 de 10</p> 
                </b-col>
                <b-col cols="3">
                    <a href="#" class="pagination"> 
                        <font-awesome-icon icon="chevron-right" class="ml-1"/> 
                    </a> 
                </b-col>

            </b-row> 
        </b-col>

    </b-row> 
  </b-container fluid>
</template>

<script>

export default {
  name: 'Related',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.who-saw {
    font-size: 26px;
    text-transform: uppercase;
    color: #DE8F75;
}

.related-searches img{
    width: 100%;
}

.add {
    position: absolute;
    width: 45px;
    height: 45px;
    right: 28px;
    top: 12px;
    background-color:rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    border: 1px solid #DE8F75;
}

.add svg{
    color: #DE8F75;
    margin-top: 30%;
}

.price p{
    font-size: 16px;
    color: #202020;
}

.circle-color {
    width: 13px;
    height: 13px;
    display: inline-flex;
    border-radius: 50%;
}

.fucsia {
    background-color: #A9095E;
}

.blue-cove {
    background-color: #6B85C1;
}

.brown {
    background-color: #A14830;
}

.black {
    background-color: black;
}

.pagination {
    border: 2px solid #2A5A75;
    border-radius: 50%;
    padding: 5px 11px 5px 5px
}

.pagination svg{
    color: #2A5A75;
}

.pgination-show {
    font-size: 14px;
    color: #2A5A75;
}

</style>
