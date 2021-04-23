<template>
<div>

    <div class="experience">
        <div>
            <img class="experience-img" src="../../assets/travel.jpeg" alt="">
        </div>
        <div class="experience-card">
                    <h2>Share your experience with us</h2>
                    <br>
                    <p>post about your trip’s exerience  how it going and recommend us to Send unlimited free texts and make WiFi calls from a free phone number. Download the free app or sign up online to pick your free phone number.</p>
                    <p>Send unlimited free texts and make WiFi calls from a free phone number. Download the free app or sign up online to pick your free phone number.</p>
                    <button>Share Experience</button>
                   
        </div>
    </div>
   
   <div class="event">
            <div class="event-card">
                <h2>Create trip event & Make new friend</h2>
                <br>
                <p>The journey of a thousand miles begins with a single step or one carefully thought-out itinerary. After sharing experience about a place, you can create an traveling event about your own taste of traveling. </p>
                <p>so you can let anyone in our community, try out something new and get a great experience of traveling. such a great chance to make friends and feeling connected to anyone by trip event.</p>
                <button>Create trip event</button>
            </div>


            <div>
            <img class="event-img" src="../../assets/campingHome.jpeg" alt="">
            </div>

            

   </div>

    <div class="join">
                 <div>
            <img class="join-img" src="../../assets/joinUs.jpeg" alt="">
        </div>
        <div class="join-card">
            <h2>Are you ready for trip?</h2>
            <p>are you really interested in a place? </p>
            <p>Do you want to get a new experience of travelling? </p>
            <p>do you want i make new friends with stranger who have the same taste of travelling?</p>
            <p>Check out our community and find out new experience of travelling with us.</p>
            <button>Join Us</button>
        </div>
    </div>
   
</div>

</template>

<script>
export default {

}
</script>

<style  scoped>
.experience,.event,.join{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 100px;
}
.experience-img{
width: 548px;
height: 647px;

border-radius: 10px;

}
.event-img{
width: 581px;
height: 441px;

border-radius: 10px;
}
.join-img{
width: 704px;
height: 675px;

border-radius: 15px;
}
.experience-card,.event-card,.join-card{
width: 453px;
height: 345px;

box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
border-radius: 15px;
text-align: center;
}

button{
    width: 206px;
height: 34px;
background: #41B3A3;
border-radius: 5px;
color: white;
border-style: none;
}
.experience-card>h2{
        padding: 20px;
}
.experience-card>button,.event-card>button,.join-card>button{
            margin: 50px;

}
.event-card>h2{
    padding: 30px;
}
.join-card>h2{
    padding: 40px;
}
</style>>

