<template>
<div>
  <div class="assigned-box" >
    <h3>Assigned Experts</h3>
    <div class="wrapper">
      <div  v-for="expert in experts" :key="expert.id" v-if="expert.assigned" class="card--assigned">
        <img src="https://via.placeholder.com/48" />
        <p class="name"><strong>{{ expert.name }}</strong></p>
        <div class="tooltip" v-on:click="remove(expert)" >
          Remove
        </div>

      </div>
    </div>
  </div>
  <div  class="search">
    <h3>Add new</h3>
    <div class="search-wrapper">
      <img src="https://via.placeholder.com/7" />
      <input type="text" v-model="search" placeholder="Search for Experts" />
    </div>
    <div class="filter">
      <div class="onOff">
        <span>No Startups Assigned</span>
        <input data-index="0" id="cheap" type="checkbox" v-model="startupsAssigned" />
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
        <button v-if="!expert.assigned" type="button" class="blue-button" v-on:click="assign(expert)" name="button">ASSIGN</button>
          <button v-if="expert.assigned" type="button" class="grey-button" name="button">ok</button>
      </div>
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
        comments: 22,
        assigned: true
      }, {
        id: 2,
        name: 'Craig Gonzales',
        company: 'valuer.ai',
        comments: 50,
        assigned: false
      }, {
        id: 3,
        name: 'Craig Gonzales',
        company: 'valuer.ai',
        comments: 100,
        assigned: false
      }, {
        id: 4,
        name: 'Tim Gonzales',
        company: 'valuer.ai',
        comments: 12,
        assigned: false
      }, {
        id: 5,
        name: 'Rozalia Gonzales',
        company: 'valuer.ai',
        comments: 234,
        assigned: true
      }, {
        id: 6,
        name: 'Maria Gonzales',
        company: 'valuer.ai',
        comments: 674,
        assigned: true
      }, {
        id: 7,
        name: 'Szymon Gonzales',
        company: '',
        comments: 78,
        assigned: false
      }, {
        id: 8,
        name: 'Craig Kacki',
        company: 'valuer.ai',
        comments: 43,
        assigned: true
      }, {
        id: 9,
        name: 'Craig Bogusz',
        company: 'valuer.ai',
        comments: 65,
        assigned: false
      }, {
        id: 10,
        name: 'Sandra Kwiatkowska',
        company: 'valuer.ai',
        comments: 30,
        assigned: false
      }, {
        id: 11,
        name: 'Max Nowy',
        company: 'nike',
        comments: 220,
        assigned: false
      }, {
        id: 12,
        name: 'Tania Milosh',
        company: 'apple',
        comments: 14,
        assigned: false
      }, {
        id: 13,
        name: 'Mariusz Kwiatkowski',
        company: 'google',
        comments: 10,
        assigned: false
      }, {
        id: 14,
        name: 'Craig Nowak',
        company: 'BMW',
        comments: 2,
        assigned: false
      }, {
        id: 15,
        name: 'Craig Kozak',
        company: '',
        comments: 23,
        assigned: false
      }, {
        id: 16,
        name: 'Tom Gonzales',
        company: null,
        comments: 10,
        assigned: false
      }]
    }
  },
  computed: {
    filteredList() {
      return this.experts.filter(expert => {
        if (this.startupsAssigned) {
          return (expert.name.toLowerCase().includes(this.search.toLowerCase()) && (expert.company === '' || expert.company === null));
        }
        return (expert.name.toLowerCase().includes(this.search.toLowerCase()));

      })
    }
  },
  methods: {
    assign: function (expert){
      expert.assigned = true;
    },
    remove: function (expert){
      expert.assigned = false;
    }
  }
}
</script>
