<template>
  <ion-page>
        <ion-row >
        <ion-col size='2'>
          <i class="material-icons" style="font-size:30px" @click="$router.push('/home')">arrow_back</i>
        </ion-col>
        <ion-col size='3'></ion-col>
        <ion-col size='2'>
          <img src="http://127.0.0.1:5000/uploads/logo.png">
        </ion-col>
        <ion-col size='5'></ion-col>
      </ion-row>
        <div class="telo">
            <h3>Gde na odmor?</h3>
            <InfoElement naslov='O aplikaciji' :text='about'/>
            <InfoElement naslov='Nacin rada' :text='work'/>
            <InfoElement naslov='Sponzori' :text='sponsor'/>
            <GalerijaSponzora :slike='slike'/>
        </div>
      </ion-page>
      
</template>

<script>
import InfoElement from '../components/Info/InfoElement'
import GalerijaSponzora from '../components/Info/GalerijaSponzora'
export default {
    components:{
        InfoElement,
        GalerijaSponzora
    },
    data(){
        return{
            about:"Turizam u Srbiji je tema koja je svakodnevno prisutna svuda oko nas. Seoski, planinski, banjski, urbani turizam, sve su to grane tupizma pogodne za razvoj u našim predelima. Postavlja se veliko pitanje, zašto se mali broj domaćih turista odlučuje da odmor provede u svojoj državi? Da li je u pitanju niska svest o prirodnim lepotama matične zemlje? Da li je ipak presudna činjenica što Srbija ne izlazi na more? Odgovori na ova pitanja nisu poznati, ali aplikacija „Gde na odmor?“ će kroz svoj rad barem u malom udelu učiniti da se takva slika promeni. Način na koji je implementirana će uticati na svest ljudi da se neprimetno očaraju lepotama krajeva za koje nisu ni slutili da se nalaze baš ovde, u Srbiji. Prelepe slike zalaska sunca, zanimljive informacije, atraktivni turistički objekti, tradicionalna kuhinja i mnoge druge karakteristike za prave hedoniste će biti okidač da utonu u avanturu kojoj će se stalno sa zadovoljstvom vraćati. Ukoliko na to pridodate i mogućnost za osvajanje brojnih poklona, onda je već reč o nečemu višem, o zajednici. Naime, ova mobilna aplikacija je koncipirana tako da posluša zahteve korisnika i da im predstavi on što je za njih u ovom trenutku zanimljivo. Bazira se na onlajn tematskom kvizu održavanom u više zakazanih terminu u toku sedmice. Ovaj ciklus može prerasti u pravu porodičnu aktivnost koje za cilj ima obostranu korist."
            ,
            work:'Aplikacija „Gde na odmor?“ je nastala kao potreba da se što veći broj ljudi informiše, zainteresuje i ostvari prvi kontakt sa prirodnim lepotama Srbije. Kreativna ideja je detaljno definisana, isplanirana i kanalisana u ovaj projekat. Jednostavno osmišljen dizajn i funkcionalnosti zasnovane na novim konceptima u razvoju softvera čine ovu aplikaciju pogodnu svim uzrastima, ali i nazahtevnijim zahtevima korisnika.Centralna funkcionalnost aplikacije „Gde na odmor?“ je tematski kviz koji se odvija više puta u toku jedne radne nedelje, u unapred zakazanom terminu. Svaki kviz poseduje temu i pitanja inspirisana nekom turističkom destinacijom sa prostora Republike Srbije. U ovom kvizu mogu učestvovati svi korisnici koji su posećivali tu destinaciju, ili se nalazili u njenoj blizini. Ovom funkcionalnošću je podstaknut svaki korisnik na aktivnost u korišćenju aplikacije. Ukoliko se ipak nekada zamislite i zaboravite da je ova aplikacija i dalje instalirana na vašem uređaju,tu na scenu stupaju notifikacije izazvane promenama u sadržaju relacione baze podataka.'
            ,
            sponsor:'Sponzore čine turističke organizacije i objekti spremni da se reklamiraju i aktivno učestvuju u radu aplikacije. Na osnovu koičine novca izdvojene za ovu aplikciju određuje nivo sponzorstva. Svaki nivo poseduje gornju i donju novčanu granicu na osnovu koje se segmentiraju sponzori. Postoje tri osnovna tipa, i to Zlatni, Srebrni i Bronzani sponzori'
            ,
            slike:[
                'http://127.0.0.1:5000/uploads/srbija.jpeg',
                'http://127.0.0.1:5000/uploads/zlatibor.jpg',
                'http://127.0.0.1:5000/uploads/selo.png'
            ]
        }
    }
}
</script>

<style scoped >
ion-slides{
    background-color: white;
}
.telo{
    width: 100%;
    /* align-content: center; */
    padding: 5px;
    overflow:scroll;
    font-size: 0.8rem;
    margin-bottom: 10px;
    color: black;
    background-color: white;
}
ion-row{
  background-color: #233f43;
  color: white;
  text-align: center;
}
i{
  padding-top: 5px;
}
img{
  height: 40px;
  padding: 0px;
}
h3{
    text-align: center;

}
</style>