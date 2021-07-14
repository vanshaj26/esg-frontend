<template>
  <div class="fixed-plugin" v-click-outside="closeDropDown">
    <div class="dropdown show-dropdown" :class="{ show: isOpen }">
      <a data-toggle="dropdown" class="settings-icon">
        <i class="fa fa-cog fa-2x" @click="toggleDropDown"> </i>
      </a>
      <ul class="dropdown-menu" :class="{ show: isOpen }">
        <li class="header-title">Sidebar Background</li>
        <li class="adjustments-line">
          <a class="switch-trigger background-color">
            <div class="badge-colors text-center">
              <span
                v-for="item in sidebarColors"
                :key="item.color"
                class="badge filter"
                :class="[`badge-${item.color}`, { active: item.active }]"
                :data-color="item.color"
                @click="changeSidebarBackground(item);"
              ></span>
            </div>
            <div class="clearfix"></div>
          </a>
        </li>

        <li class="header-title">Sidebar Mini</li>
        <li class="adjustments-line">
          <div class="togglebutton switch-sidebar-mini">
            <span class="label-switch">OFF</span>
            <base-switch
              v-model="sidebarMini"
              @input="minimizeSidebar"
            ></base-switch>
            <span class="label-switch label-right">ON</span>
          </div>

          <div class="togglebutton switch-change-color mt-3">
            <span class="label-switch">LIGHT MODE</span>
            <base-switch v-model="darkMode" @input="toggleMode"></base-switch>
            <span class="label-switch label-right">DARK MODE</span>
          </div>
         
        </li>

        <li class="adjustments-line">
           <div class="locale-changer mt-3">
    <el-select v-model="command" @change=" handleCommand()">
      <el-option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</el-option>
    </el-select>
  </div>
        </li>
       
 

      </ul>

      
    </div>
  </div>
</template>
<script>
  import { BaseSwitch } from 'src/components';
   import {Select,Option } from 'element-ui'

  export default {
    name: 'sidebar-share',
    
    components: {
      BaseSwitch,
      [Select.name]: Select,
    [Option.name]: Option,
    },
    props: {
      backgroundColor: String
    },
    data() {
      return {
        langs: ['en', 'de'],
        command:'',
        sidebarMini: true,
        darkMode: true,
        isOpen: false,
        sidebarColors: [
          { color: 'primary', active: false, value: 'primary' },
          { color: 'vue', active: true, value: 'vue' },
          { color: 'info', active: false, value: 'blue' },
          { color: 'success', active: false, value: 'green' },
          { color: 'warning', active: false, value: 'orange' },
          { color: 'danger', active: false, value: 'red' }
        ]
      };
    },
    methods: {
      toggleDropDown() {
        this.isOpen = !this.isOpen;
      },

       handleCommand() {
      if (this.command == "en") {
        this.$i18n.locale = "en";
        localStorage.setItem('lang',"en")
        //  console.log(this.$i18n)
      } else if (this.command == "de") {
        this.$i18n.locale = "de";
          localStorage.setItem('lang',"de")
        // console.log(2)
      } 
    },

      closeDropDown() {
        this.isOpen = false;
      },
      toggleList(list, itemToActivate) {
        list.forEach(listItem => {
          listItem.active = false;
        });
        itemToActivate.active = true;
      },
      changeSidebarBackground(item) {
        this.$emit('update:backgroundColor', item.value);
        this.toggleList(this.sidebarColors, item);
      },
      toggleMode(type) {
        let docClasses = document.body.classList;
        if (type) {
          docClasses.remove('white-content');
        } else {
          docClasses.add('white-content');
        }
      },
      minimizeSidebar() {
        this.$sidebar.toggleMinimize();
      }
    }
  };
</script>
<style scoped lang="scss">
  @import '~@/assets/sass/dashboard/custom/variables';

  .settings-icon {
    cursor: pointer;
  }

  .badge-vue {
    background-color: $vue;
  }
</style>
