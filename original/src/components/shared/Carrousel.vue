<template>
        <b-container fluid>
            <b-row>
                <b-col cols="12" sm="3" class="order-2 order-sm-1">
                    <b-row class="sidebar">
                        <b-col cols="12" sm="12" class="video">
                            <b-row>
                                <b-col sm="12"><h6>vídeo</h6></b-col>
                                <b-col sm="12"><a href="#" class="play"><font-awesome-icon icon="play" /></a></b-col>
                            </b-row>
                        </b-col> 
                        <b-col cols="1" sm="12" class="my-3 chevrons d-none d-sm-block"><a href="#"><font-awesome-icon icon="chevron-up" /></a></b-col>
                        <b-col cols="3" sm="12" class="mb-2"><a href="#"><img src="../../assets/sandalias.png" alt="sandalias"></a></b-col>
                        <b-col cols="3" sm="12" class="mb-2 not-selected"><a href="#"><img src="../../assets/sandalias.png" alt="sandalias"></a></b-col>
                        <b-col cols="3" sm="12" class="mb-2 not-selected"><a href="#"><img src="../../assets/sandalias.png" alt="sandalias"></a></b-col>
                        <b-col cols="3" sm="12" class="mb-2 not-selected"><a href="#"><img src="../../assets/sandalias.png" alt="sandalias"></a></b-col>
                        <b-col cols="1" sm="12" class="my-3 chevrons d-none d-sm-block"><a href="#"><font-awesome-icon icon="chevron-down" /></a></b-col>
                    </b-row>
                </b-col>
                <b-col cols="12" sm="8" class="order-1 order-sm-2">
                    <img src="../../assets/sandalias.png" alt="sandalias">
                </b-col>             
            </b-row>
        </b-container fluid>
</template>

<script>
export default {
  name: 'Carrousel'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h6 {
    font-size: 12px;
    color: #DE8F75;
}

.play {
    color: #5F75AA;
    border: 2px solid #5F75AA;
    border-radius: 25px;
    padding: 4px 7px;
}

.chevrons a {
    font-size: 12px;
    color: #000000;
}

.sidebar img {
    width: 50%;
}

.not-selected img {
    filter:opacity(40%);
}

@media only screen and (max-width: 768px) {
    .sidebar img {
        width: 100%;
    }

    .video {
        margin: 15px 0 25px 0;
    }
}

img {
    max-width: 100%;
}

</style>
