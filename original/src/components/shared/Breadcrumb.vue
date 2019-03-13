<template>
        <b-container fluid class="bread">
            <b-row>
                <b-col cols="12" sm="2">
                    <b-row>
                        <b-col cols="2" sm="4" class="pr-0">
                           <a href="#">Home</a>
                        </b-col>
                        <b-col cols="1" class="p-0">
                           <p>&#47;</p>
                        </b-col>
                        <b-col cols="7" class="pr-0 text-left">
                           <a href="#" class="category">Sapatos</a> 
                        </b-col>
                    </b-row>  
                </b-col>
            </b-row>
        </b-container fluid>
</template>

<script>
export default {
  name: 'Breadcrumb'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bread {
    margin-top: 10px;
}

a {
    color: #AEB6C1;
    font-size: 12px;
}

.category {
    font-weight: 700;
}

</style>
