<template>
        <b-container fluid>
            <b-row>
                <b-col cols="12" sm="9" class="selection-box text-left">
                    <b-row>
                        <b-col cols="12" class="mt-2">
                            <h3>rasteira tira dedo</h3>
                        </b-col>
                        <b-col cols="12">
                            <p class="code">RT 0568 &#124; 03.07.0653</p>
                        </b-col>
                        <b-col cols="12" class="mt-2">
                            <span class="code">RT 0568 &#124;</span>
                            <span class="price">R&#36; 55,20</span>   
                        </b-col>
                        <b-col cols="12">
                            <p class="six-times">Ou 6x de  R&#36; 9,20</p>
                        </b-col>
                        <b-col cols="12" class="mt-3">
                            <span class="code">Cor:</span>
                            <span class="selected-color"> ({{selectedColor}}) </span>
                        </b-col>
                        <b-col cols="12" class="mt-2">
                            <button v-on:click="selectedColor='Fucsia'" class="color-pick color-fucsia mr-2"></button>
                            <button v-on:click="selectedColor='Azul'" class="color-pick color-blue mx-2"></button>
                            <button v-on:click="selectedColor='Marrom'" class="color-pick color-brown mx-2"></button>
                            <button v-on:click="selectedColor='Preto'" class="color-pick color-black ml-2"></button>
                        </b-col>
                        <b-col cols="12" class="mt-3">
                            <b-row>
                                <b-col cols="7">
                                    <span class="code">Tamanho:</span>
                                    <span class="selected-size"> ({{selectedSize}}) </span>  
                                </b-col>
                                <b-col cols="4">
                                    <a href="#" class="guide">Guia de medidas</a>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col cols="12" class="mt-3 size-buttons">
                            <b-row>
                                <b-col cols="1">
                                    <button v-on:click="selectedSize='33'">33</button>  
                                </b-col>
                                <b-col cols="1">
                                    <button v-on:click="selectedSize='34'">34</button>  
                                </b-col>
                                <b-col cols="1">
                                    <button v-on:click="selectedSize='35'">35</button>  
                                </b-col>
                                <b-col cols="1">
                                    <button v-on:click="selectedSize='36'">36</button>  
                                </b-col>
                                <b-col cols="1">
                                    <button v-on:click="selectedSize='37'">37</button>  
                                </b-col>
                                <b-col cols="1">
                                    <button v-on:click="selectedSize='38'">38</button>  
                                </b-col>
                                <b-col cols="1">
                                    <button v-on:click="selectedSize='39'">39</button>  
                                </b-col>
                                <b-col cols="1">
                                    <button v-on:click="selectedSize='40'">40</button>  
                                </b-col>
                                <b-col cols="1">
                                    <button v-on:click="selectedSize='41'">41</button>  
                                </b-col>
                                <b-col cols="1">
                                    <button v-on:click="selectedSize='42'">42</button>  
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col cols="12" class="mt-5">
                            <b-col cols="12" class="pl-0">
                                <button class="add-to-bag">Adicionar à sacola</button>  
                            </b-col>
                        </b-col>
                        <b-col cols="12" class="mt-3 description">
                            <p>Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.</p>
                        </b-col>
                    </b-row>
                </b-col>            
            </b-row>
        </b-container fluid>
</template>

<script>
export default {
  name: 'Selector',
  data () {
    return {
       selectedColor: "Selecione uma cor",
       selectedSize: "Selecione um tamanho"
    }
  },
  methods: {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.selection-box {
    border: 2px solid #D2E1DF;
    box-sizing: border-box;
    border-radius: 3px;
}

h3 {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 26px;
}

.code {
    font-size: 14px;
}

.price {
    padding-left: 15px;
    color: #686868;
    font-size: 20px;
    font-weight: 800;
}

.six-times {
    color: #7F7F7F;
    font-size: 12px;
}

.selected-color  {
   color: #5F75AA;
}

.color-pick {
    max-width: 100%;
    max-height: 100%;
    width: 22px;
    height: 22px;
    border-radius: 25px;
    border: 1px solid white;
}

.color-fucsia {
    background-color: #A9095E;
}

.color-blue {
    background-color: #6B85C1;
}

.color-brown {
    background-color: #A14830;
}

.color-black {
    background-color: black;
}

.color-pick:focus {
    outline: 0;
    -webkit-box-shadow: 0px 0px 0px 5px rgb(224,218,156);
    -moz-box-shadow: 0px 0px 0px 5px rgb(224,218,156);
    box-shadow: 0px 0px 0px 5px rgb(224,218,156);
}

.selected-size {
    color: #5F75AA;
}

.guide {
    font-size: 14px;
    text-decoration-line: underline;
    color: #DE8F75;
}

.size-buttons button{
    border-radius: 50%;
    border: 1px solid white;
    background-color: #EBEBEB;
    font-size: 14px;
    color: #2A5A75;
}

.size-buttons button:focus{
    outline: 0;
    background-color: #E0DA9C;
    font-weight: 800;
}

.add-to-bag {
    width: 100%;
    text-transform: uppercase;
    background: #32917B;
    border-radius: 3px;
    font-size: 18px;
    color: white;
    padding: 15px 0;
    border: 1px solid white;
}

.description p {
    font-size: 14px;
    color: #202020;
    line-height: 29px;
}

</style>
