<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>
    <sidebar-fixed-toggle-button />
    <side-bar
      :background-color="sidebarBackground"
      :short-title="$t('sidebar.shortTitle')"
      :title="$t('sidebar.title')"
    >
      <template slot-scope="props" slot="links">
        <div v-if="user.user_type == 'admin'">
          <sidebar-item
          :link="{
            name: $t('sidebar.dashboard'),
            icon: 'tim-icons icon-chart-pie-36',
            path: '/dashboard'
          }"
        >
        </sidebar-item>
        </div>

         <div v-if="user.user_type == 'user'">
          <sidebar-item
          :link="{
            name: $t('sidebar.dashboard'),
            icon: 'tim-icons icon-chart-pie-36',
            path: '/userdashboard'
          }"
        >
        </sidebar-item>
        </div>
        
        <div  v-if="user.user_type == 'user'">
<!-- <sidebar-item 
          :link="{ name: $t('sidebar.data'), icon: 'tim-icons icon-image-02' }"
        >
        
        </sidebar-item> -->

          <sidebar-item
            :link="{ name: $t('sidebar.data_status'), icon: 'tim-icons icon-chart-bar-32', path: '/data/datastatus' }"
          ></sidebar-item>
          <sidebar-item
            :link="{ name: $t('sidebar.add_data'), icon: 'tim-icons icon-simple-add', path: '/data/adddata' }"
          ></sidebar-item>
          <sidebar-item
            :link="{ name: $t('sidebar.review_data'), icon: 'tim-icons icon-single-copy-04', path: '/data/review' }"
          ></sidebar-item>
        </div>
        
<div v-if="user.user_type == 'admin'">
  <sidebar-item
          :link="{ name: $t('sidebar.org'), icon: 'tim-icons icon-image-02' }"
        >
          <sidebar-item
            :link="{ name: $t('sidebar.add_org'), path: '/org/organisation' }"
          ></sidebar-item>
         
        </sidebar-item>
</div>

<div v-if="user.user_type == 'admin'">
  <sidebar-item
          :link="{ name: $t('sidebar.user'),path: '/org/adduser', icon: 'fas fa-users' }"
        >
      
         
        </sidebar-item>
</div>
       
      <div v-if="user.user_type == 'user'">

      <sidebar-item
          :link="{
            name: $t('sidebar.Question'),
            icon: 'tim-icons icon-molecule-40',
            path: '/question'
          }"
        ></sidebar-item>

         <sidebar-item
          :link="{
            name: $t('sidebar.goals'),
            icon: 'tim-icons icon-satisfied',
            path: '/goal'
          }"
        ></sidebar-item>
        <sidebar-item
          :link="{
            name: $t('sidebar.reporting'),
            icon: 'tim-icons icon-settings',
            path: '/reporting'
          }"
        ></sidebar-item>
        
        
         <sidebar-item
          :link="{
            name: $t('sidebar.toda'),
            icon: 'tim-icons icon-chart-bar-32',
            path: '/env'
          }"
        ></sidebar-item>

         <sidebar-item
          :link="{
            name: $t('sidebar.stack'),
            icon: 'tim-icons icon-chart-bar-32',
            path: '/env'
          }"
        ></sidebar-item>
        <sidebar-item
          :link="{
            name: $t('sidebar.help'),
            icon: 'tim-icons icon-time-alarm',
            path: '/social'
          }"
        ></sidebar-item>
        </div>
        
      </template>
    </side-bar>
    <!--Share plugin (for demo purposes). You can remove it if don't plan on using it-->
    <sidebar-share :background-color.sync="sidebarBackground"> </sidebar-share>
    <div class="main-panel" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>
      <router-view name="header"></router-view>

      <div
        :class="{ content: !$route.meta.hideContent }"
        @click="toggleSidebar"
      >
        <zoom-center-transition :duration="200" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </zoom-center-transition>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import SidebarShare from './SidebarSharePlugin';
function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}
import axios from "axios";
import DashboardNavbar from './DashboardNavbar.vue';
import ContentFooter from './ContentFooter.vue';
import DashboardContent from './Content.vue';
import SidebarFixedToggleButton from './SidebarFixedToggleButton.vue';
import { SlideYDownTransition, ZoomCenterTransition } from 'vue2-transitions';

export default {

  
  components: {
    DashboardNavbar,
    ContentFooter,
    SidebarFixedToggleButton,
    DashboardContent,
    SlideYDownTransition,
    ZoomCenterTransition,
    SidebarShare
  },
  data() {
    return {
      url: process.env.VUE_APP_ROOT_API,
       user: null,
      sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
    };
  },

   async created() {
    const response1 = await axios.get(this.url + "/auth/self-detail/", {
      headers: {
        Authorization: "Token " + localStorage.getItem("usertoken"),
      },
    });


    this.user = response1.data;
    
    console.log(this.user);
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    // initScrollbar() {
    //   let docClasses = document.body.classList;
    //   let isWindows = navigator.platform.startsWith('Win');
    //   if (isWindows) {
    //     // if we are on windows OS we activate the perfectScrollbar function
    //     initScrollbar('sidebar');
    //     initScrollbar('main-panel');
    //     initScrollbar('sidebar-wrapper');

    //     docClasses.add('perfect-scrollbar-on');
    //   } else {
    //     docClasses.add('perfect-scrollbar-off');
    //   }
    // }
  },
  mounted() {
    this.initScrollbar();
  }
};
</script>
<style lang="scss">
$scaleSize: 0.95;
@keyframes zoomIn95 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  to {
    opacity: 1;
  }
}

.main-panel .zoomIn {
  animation-name: zoomIn95;
}

@keyframes zoomOut95 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}

.main-panel .zoomOut {
  animation-name: zoomOut95;
}
</style>
