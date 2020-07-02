<template>
    <ion-row class="dogadjaj">
            <ion-col size='2' class="datum">
                <h3>{{dogadjaj.datum.split('.')[0]}}</h3>
            </ion-col>
            <ion-col size='8'>
                <p>{{dogadjaj.tema}}</p>
            </ion-col>
            <ion-col size='2' class="info" @click="openInfo">
                <p>...</p>
            </ion-col>
      </ion-row>
</template>

<script>
import OpisDogadjaja from './Dogadjaj/OpisDogadjaja'
export default {
    props:['dogadjaj'],
    methods:{
        openInfo(){
            return this.$ionic.modalController
                    .create({
                    component: OpisDogadjaja,
                    cssClass: 'my-custom-class',
                    componentProps: {
                            data: {
                                content: 'New Content',
                            },
                            propsData: {
                                dogadjaj: this.dogadjaj,
                            }
                        }
                    })
                    .then(m => m.present())
                    }
    }

}
</script>

<style scoped>
.dogadjaj{
    background-color: #ecf0f1;
    border-radius: 10px;
    width:100%;
    margin-bottom: 10px;
}
.datum{
   background-color: #bdc3c7; 
}
.info{
    background-color: #e74c3c;
    color: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    }
</style>