<template>
  <div class="row">
  
    <div class="col-md-4 col-sm-12">
      <stats-card
        :title="tenant"
        subTitle="organization"
        type="warning"
        icon="tim-icons icon-chat-33"
      >
        <!-- <div slot="footer" v-html="card.footer"></div> -->
        <div slot="footer">
          <center>
            <base-button type="success" size="sm">

            <router-link to="/organisation" style="color: white;"><i class="tim-icons icon-simple-add"></i>Now </router-link>
              
            </base-button>
          </center>
        </div>
      </stats-card>
    </div>

     <div class="col-md-4 col-sm-12">
      <stats-card
        title="453"
        subTitle="Total User"
        type="primary"
        icon="fas fa-user"
      >
        <!-- <div slot="footer" v-html="card.footer"></div> -->
        <div slot="footer">
           <center>
            <base-button type="success" size="sm">
            <router-link to="/adduser" style="color: white;">
            <i class="fas fa-users"></i> Manage</router-link>
              
            </base-button>
          </center>
         
        </div>
      </stats-card>
    </div>

    <div class="col-md-4 col-sm-12">
      <stats-card
        :title="framework"
        subTitle="Framework"
        type="info"
        icon="fas fa-newspaper"
      >
        <!-- <div slot="footer" v-html="card.footer"></div> -->
        <div slot="footer">
          <center>
            <base-button type="success" size="sm">
            <router-link to="/frame" style="color:white">
              <i class="tim-icons icon-simple-add"></i> Add Now
            </router-link>
             
            </base-button>
          </center>
        </div>
      </stats-card>
    </div>

     <div class="col-lg-6">
      <card class="card">
        <h5 slot="header" class="card-title">organization</h5>
        <!-- <div class="table-responsive"><user-table></user-table></div> -->
        <div class="table-responsive"><org-data></org-data></div>

      </card>
    </div>

    


   

    

    

   
    <div class="col-lg-6">
      <card type="tasks" class="tskk">
        <template slot="header">
          <h6 class="title d-inline">Tasks (5)</h6>
          <p class="card-category d-inline">Today</p>
          <base-dropdown
            menu-on-right=""
            tag="div"
            title-classes="btn btn-link btn-icon"
            
          >
            <i slot="title" class="tim-icons icon-settings-gear-63"></i>
            <a class="dropdown-item" href="#pablo"> Action </a>
            <a class="dropdown-item" href="#pablo"> Another action </a>
            <a class="dropdown-item" href="#pablo"> Something else </a>
          </base-dropdown>
        </template>
        
        <div class="table-full-width table-responsive">
          <task-list></task-list>
        </div>
      </card>
    </div>

    <div class="col-lg-12">
      
        <!-- <calender></calender> -->
        <CalendarRoute></CalendarRoute>

    

    </div>
   
   
  </div>
</template>
<script>
import Calender from "../Calendar/Calendar.vue"
import CalendarRoute from "../Calendar/CalendarRoute.vue"


import TaskList from "./TaskList";
import UserTable from "./UserTable";
import CountryMapCard from "./CountryMapCard";
import StatsCard from "src/components/Cards/StatsCard";

import OrgData from "../Org/OrgData.vue";
import Card from '../../components/Cards/Card.vue';
import axios from "axios";



export default {

  
  components: {
   
    StatsCard,
    TaskList,
    CountryMapCard,
    UserTable,
    OrgData,
    Calender,
    Card,
    CalendarRoute
  },
  data() {
    return {
       url: process.env.VUE_APP_ROOT_API,
       tenant:"",
       framework: ""

  
    
       
    
    };
  },


   async created() {
    const response = await axios.get(this.url + "/org/api/tenant",{
      headers: {
        Authorization: "Token " + localStorage.getItem("usertoken"),
      },
    });

     const response1 = await axios.get(this.url + "/frame/api/framework",{
      headers: {
        Authorization: "Token " + localStorage.getItem("usertoken"),
      },
    });


    
    // this.tenant = response.data.count.toString();
     this.framework = response1.data.count.toString();
     var ten = 0;
    for (var i in response.data ){
     
      ten = ten + 1;
    }

    
this.tenant = ten.toString();

    console.log(response1.data)
    // console.log(typeof this.tenant.toString());
  },


  computed: {
   
  },
  methods: {
    


  },
  // mounted() {
  //   this.i18n = this.$i18n;
  //   if (this.enableRTL) {
  //     this.i18n.locale = "ar";
  //     this.$rtl.enableRTL();
  //   }
   
  // },
  // beforeDestroy() {
  //   if (this.$rtl.isRTL) {
  //     this.i18n.locale = "en";
  //     this.$rtl.disableRTL();
  //   }
  // }
};
</script>
<style>
.table-full-width {
    max-height: 270px !important;
    position: relative;
}
.card-tasks {
    height: 341px;
}

</style>
