<template>
<div id="search">
  <div class="assigned-box">
    <h3>Assigned Experts</h3>
    <div class="wrapper">
      <div v-for="expert in experts" :key="expert.id" v-if="expert.assigned" class="card--assigned">
        <img src="https://via.placeholder.com/48" />
        <p class="name">{{ expert.name }}</p>
        <div class="tooltip" v-on:click="remove(expert)">
          Remove
        </div>

      </div>
    </div>
  </div>
  <div class="search">
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
    <h3 v-if="search.length>0">CANDIDATES</h3>

    <div class="wrapper candidates" v-if="search.length>0">
      <div class="card" v-for="expert in filteredList" :key="expert.id">
        <img src="https://via.placeholder.com/70" />
        <p class="name">{{ expert.name }}</p>
        <p class="workspace">{{expert.company}}</p>
        <p class="comments">{{ expert.comments }} comments</p>
        <button v-if="!expert.assigned" type="button" class="blue-button button" v-on:click="assign(expert)" name="button">ASSIGN</button>
        <button v-if="expert.assigned" type="button" disabled class="grey-button button" name="button">
          <img src="https://via.placeholder.com/14" />
        </button>
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
        name: 'Crairaigfgf Gonzalesonzales',
        company: 'valuer.ai',
        comments: 22,
        startupAssigned: false,
        assigned: true
      }, {
        id: 2,
        name: 'Craig Gonzales',
        company: 'valuer.ai',
        comments: 50,
        startupAssigned: false,
        assigned: false
      }, {
        id: 3,
        name: 'Craig Gonzales',
        company: 'valuer.ai',
        comments: 100,
        startupAssigned: false,
        assigned: false
      }, {
        id: 4,
        name: 'Tim Gonzales',
        company: 'valuer.ai',
        comments: 12,
        startupAssigned: false,
        assigned: false
      }, {
        id: 5,
        name: 'Rozalia Gonzales',
        company: 'valuer.ai',
        comments: 234,
        startupAssigned: false,
        assigned: true
      }, {
        id: 6,
        name: 'Maria Gonzales',
        company: 'valuer.ai',
        comments: 674,
        startupAssigned: false,
        assigned: true
      }, {
        id: 7,
        name: 'Szymon Gonzales',
        company: '',
        startupAssigned: true,
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
        startupAssigned: true,
        assigned: false
      }, {
        id: 10,
        name: 'Sandra Kwiatkowska',
        company: 'valuer.ai',
        comments: 30,
        startupAssigned: true,
        assigned: false
      }, {
        id: 11,
        startupAssigned: false,
        name: 'Max Nowy',
        company: 'nike',
        comments: 220,
        assigned: false
      }, {
        id: 12,
        startupAssigned: false,
        name: 'Tania Milosh',
        company: 'apple',
        comments: 14,
        assigned: false
      }, {
        id: 13,
        startupAssigned: false,
        name: 'Mariusz Kwiatkowski',
        company: 'google',
        comments: 10,
        assigned: false
      }, {
        id: 14,
        startupAssigned: false,
        name: 'Craig Nowak',
        company: 'BMW',
        comments: 2,
        assigned: false
      }, {
        id: 15,
        startupAssigned: false,
        name: 'Craig Kozak',
        company: '',
        comments: 23,
        assigned: false
      }, {
        id: 16,
        startupAssigned: false,
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
          return (expert.name.toLowerCase().includes(this.search.toLowerCase()) && expert.startupAssigned === true);
        }
        return (expert.name.toLowerCase().includes(this.search.toLowerCase()));

      })
    }
  },
  methods: {
    assign: function(expert) {
      expert.assigned = true;
    },
    remove: function(expert) {
      expert.assigned = false;
    }
  }
}
</script>
