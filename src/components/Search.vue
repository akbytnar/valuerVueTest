<template>
<div class="search">
  <div class="search-wrapper">
    <img src="https://via.placeholder.com/7" />
    <input type="text" v-model="search" placeholder="Search for Experts" />
  </div>
  <div class="filter">
    <div class="onOff">
      <span>No Startups Assigned</span>
      <input data-index="0" id="cheap" type="checkbox" v-model="startupsAssigned"/>
      <label for="cheap"></label>
    </div>
  </div>
  <h3>CANDIDATES</h3>

  <div class="wrapper">
    <div class="card" v-for="expert in filteredList" :key="expert.id">
      <img src="https://via.placeholder.com/70" />
      <p class="name"><strong>{{ expert.name }}</strong></p>
      <p><small>{{expert.company}}</small></p>
      <p><strong>{{ expert.comments }} comments</strong> </p>
      <button type="button" class="blue-button" name="button">ASSIGN</button>
    </div>
  </div>


</div>
</template>

<script >
export default {
  name: "Search",
  data() {
    return {
      startupsAssigned: false,
      search: '',
      experts: [{
        id: 1,
        name: 'Craig Gonzales',
        company: 'valuer.ai',
        comments: 22
      }, {
        id: 2,
        name: 'Craig Gonzales',
        company: 'valuer.ai',
        comments: 50
      }, {
        id: 3,
        name: 'Craig Gonzales',
        company: 'valuer.ai',
        comments: 100
      }, {
        id: 4,
        name: 'Tim Gonzales',
        company: 'valuer.ai',
        comments: 12
      }, {
        id: 5,
        name: 'Rozalia Gonzales',
        company: 'valuer.ai',
        comments: 234
      }, {
        id: 6,
        name: 'Maria Gonzales',
        company: 'valuer.ai',
        comments: 674
      }, {
        id: 7,
        name: 'Szymon Gonzales',
        company: '',
        comments: 78
      }, {
        id: 8,
        name: 'Craig Kacki',
        company: 'valuer.ai',
        comments: 43
      }, {
        id: 9,
        name: 'Craig Bogusz',
        company: 'valuer.ai',
        comments: 65
      }, {
        id: 10,
        name: 'Sandra Kwiatkowska',
        company: 'valuer.ai',
        comments: 30
      }, {
        id: 11,
        name: 'Max Nowy',
        company: 'nike',
        comments: 220
      }, {
        id: 12,
        name: 'Tania Milosh',
        company: 'apple',
        comments: 14
      }, {
        id: 13,
        name: 'Mariusz Kwiatkowski',
        company: 'google',
        comments: 10
      }, {
        id: 14,
        name: 'Craig Nowak',
        company: 'BMW',
        comments: 2
      }, {
        id: 15,
        name: 'Craig Kozak',
        company: '',
        comments: 23
      }, {
        id: 16,
        name: 'Tom Gonzales',
        company: null,
        comments: 10
      }]
    }
  },
  computed: {
    filteredList() {
      return this.experts.filter(expert => {
        if(this.startupsAssigned){
          return (expert.name.toLowerCase().includes(this.search.toLowerCase()) && (expert.company === '' || expert.company === null));

        }
        return (expert.name.toLowerCase().includes(this.search.toLowerCase()));

      })
    }
  }
}
</script>
