<template>
  <div >
    <div class="search-wrapper">

     <input type="text" v-model="search" placeholder="Search for Experts"/>
     <img src="https://via.placeholder.com/20"/>
     <button class="blue-button" type="button" name="button">Search</button>
   </div>
   <h3>CANDIDATES</h3>

   <div class="wrapper">
     <div class="card" v-for="expert in filteredList" :key="expert.id">
       <img src="https://via.placeholder.com/35"/>
        <h4>{{ expert.name }}</h4>
        <p><small>{{expert.compoany}}</small></p>
         <p><strong>{{ expert.comments }} comments</strong> </p>
         <button type="button" class="blue-button" name="button">ASSIGN</button>
     </div>
  </div>

 </div>


</template>

<script >
export default{
  name: "Search",
  data(){
    return{
      search: '',
      experts: [
        {
          id: 1,
          name: 'Craig Gonzales',
          compoany: 'valuer.ai',
          comments: 22
        },{
          id: 2,
          name: 'Craig Gonzales',
          compoany: 'valuer.ai',
          comments: 50
        },{
          id: 3,
          name: 'Craig Gonzales',
          compoany: 'valuer.ai',
          comments: 100
        },{
          id: 4,
          name: 'Tim Gonzales',
          compoany: 'valuer.ai',
          comments: 12
        },{
          id: 5,
          name: 'Rozalia Gonzales',
          compoany: 'valuer.ai',
          comments: 234
        },{
          id: 6,
          name: 'Maria Gonzales',
          compoany: 'valuer.ai',
          comments: 674
        },{
          id: 7,
          name: 'Szymon Gonzales',
          compoany: 'valuer.ai',
          comments: 78
        },{
          id: 8,
          name: 'Craig Kacki',
          compoany: 'valuer.ai',
          comments: 43
        },{
          id: 9,
          name: 'Craig Bogusz',
          compoany: 'valuer.ai',
          comments: 65
        },{
          id: 10,
          name: 'Sandra Kwiatkowska',
          compoany: 'valuer.ai',
          comments: 30
        },{
          id: 11,
          name: 'Max Nowy',
          compoany: 'nike',
          comments: 220
        },{
          id: 12,
          name: 'Tania Milosh',
          compoany: 'apple',
          comments: 14
        },{
          id: 13,
          name: 'Mariusz Kwiatkowski',
          compoany: 'google',
          comments: 10
        },{
          id: 14,
          name: 'Craig Nowak',
          compoany: 'BMW',
          comments: 2
        },{
          id: 15,
          name: 'Craig Kozak',
          compoany: 'valuer.ai',
          comments: 23
        },{
          id: 16,
          name: 'Tom Gonzales',
          compoany: 'valuer.ai',
          comments: 10
        }
  ]
    }
  },
  computed: {
    filteredList() {
      return this.experts.filter(expert => {
        return expert.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>
