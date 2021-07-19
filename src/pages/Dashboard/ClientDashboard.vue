<template>
  <div class="row">
    <!-- Big Chart -->
    <div class="col-md-8">
      <card type="chart">
        <template slot="header">
          <div class="row">
            <div class="col-sm-6" :class="isRTL ? 'text-right' : 'text-left'">
              <!-- <h5 class="card-category">Total shipments</h5> -->
              <h2 class="card-title">Overall Progress</h2>
            </div>
            <div class="col-sm-6 d-flex d-sm-block">
              <div
                class="btn-group btn-group-toggle"
                :class="isRTL ? 'float-left' : 'float-right'"
                data-toggle="buttons"
              >
                <!-- <label
                  v-for="(option, index) in bigLineChartCategories"
                  :key="option.name"
                  class="btn btn-sm btn-primary btn-simple"
                  :class="{ active: bigLineChart.activeIndex === index }"
                  :id="index"
                > -->
                  <!-- <input
                    type="radio"
                    @click="initBigChart(index)"
                    name="options"
                    autocomplete="off"
                    :checked="bigLineChart.activeIndex === index"
                  /> -->

                  <el-select
                  class="select-primary"
                  size="large"
                  :class="{ active: bigLineChart.activeIndex === index }"
                  :id="index"
                  @change="initBigChart()"
                  v-model="selects"
                  placeholder="GRI"
                

                >
                  <el-option
                    v-for="(option, index) in bigLineChartCategories"
                    
                    :checked="bigLineChart.activeIndex === index"
            
                   
                    :key="option.name"
                    :value="index"
                    :label="option.name"
                  >
                  </el-option>
                </el-select>
                  
             
                  <!-- <span class="d-none d-sm-block">{{ option.name }}</span>
                  <span class="d-block d-sm-none">
                    <i :class="option.icon"></i>
                  </span> -->
                <!-- </label> -->
              </div>
            </div>
          </div>
        </template>
        <div class="chart-area">
             <bar-chart
            style="height: 100%"
            ref="bigChart"
           :chart-data="bigLineChart.chartData"
            :gradient-colors="bigLineChart.gradientColors"
            :gradient-stops="bigLineChart.gradientStops"
            :extra-options="bigLineChart.extraOptions"
          >
          </bar-chart>
          <!-- <line-chart
            style="height: 100%"
            ref="bigChart"
            :chart-data="bigLineChart.chartData"
            
            :extra-options="bigLineChart.extraOptions"
          >
          </line-chart> -->
         
        </div>
      </card>
    </div>
    <div class="col-md-4 mr-auto">
        <card  type="chart">
          <!-- <h5 slot="header" class="card-category">Multiple Pie Chart</h5> -->
             <h3 class="card-title">Framework</h3>
             <br>
          <div class="row">
            <div class="col-6">
              <div class="chart-area">
                <pie-chart
                  :chart-data="pieChart2.chartData"
                  :extra-options="pieChart2.extraOptions"
                  :height="120"
                >
                </pie-chart>
              </div>
            </div>

            <div class="col-6">
              <h4 class="card-title">
                <i class="tim-icons  icon-tag text-warning "></i> 130,000
              </h4>
              <p class="category">Feedback from 20.000 users</p>
            </div>
          </div>
        </card>
      </div>

      <div class="col-md-12">
        <card>
          <template slot="header">
            <h5 class="card-category">Latest Upadte</h5>
            <!-- <h3 class="card-title">Horizontal Tabs</h3> -->
          </template>

          <tabs type="primary">
            <tab-pane label="Upadte 1">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. <br /><br />
              Dramatically visualize customer directed convergence without
              revolutionary ROI.
            </tab-pane>

            <tab-pane label="Upadte 2">
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time schemas.
              <br /><br />Dramatically maintain clicks-and-mortar solutions
              without functional solutions.
            </tab-pane>

            <tab-pane label="Upadte 3">
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas. <br /><br />Dynamically innovate
              resource-leveling customer service for state of the art customer
              service.
            </tab-pane>
          </tabs>
        </card>
      </div>
  
   


    

    


   

    

    

   

   
   
  
  </div>
</template>
<script>
import { TabPane, Tabs, Collapse, CollapseItem } from 'src/components';
import PieChart from 'src/components/Charts/PieChart';
//import Calender from "../Calendar/Calendar.vue"
//import CalendarRoute from "../Calendar/CalendarRoute.vue"
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";
import * as chartConfigs from "@/components/Charts/config";
import TaskList from "./TaskList";
//import UserTable from "./UserTable";
//import CountryMapCard from "./CountryMapCard";
import StatsCard from "src/components/Cards/StatsCard";
import config from "@/config";
//import OrgData from "../Org/OrgData.vue";
import Card from '../../components/Cards/Card.vue';
import { TimeSelect, DatePicker, Select, Option } from 'element-ui';

let bigChartData = [
  [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
  [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
  [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
];
let bigChartLabels = [
  "Data",
  "Environmental",
  "Social",
  "Governance",
];
let bigChartDatasetOptions = {
  fill: true,
//   borderColor: config.colors.info,
  backgroundColor: config.colors.info,
  borderWidth: 2,
  borderDash: [],
  borderDashOffset: 0.0,
  pointBackgroundColor: config.colors.info,
  pointBorderColor: "rgba(255,255,255,0)",
  pointHoverBackgroundColor: config.colors.info,
  pointBorderWidth: 20,
  pointHoverRadius: 4,
  pointHoverBorderWidth: 15,
  pointRadius: 4
};

export default {
  components: {
       [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect,
    [Option.name]: Option,
    [Select.name]: Select,
    LineChart,
    BarChart,
    StatsCard,
    TaskList,
    Card,
    PieChart,
     TabPane,
    Tabs,
    Collapse,
    CollapseItem
   
  },
  data() {
    return {
        selects: "",
      statsCards: [
        {
          title: "150GB",
          subTitle: "Number",
          type: "warning",
          icon: "tim-icons icon-chat-33",
          footer: '<i class="tim-icons icon-refresh-01"></i> Update Now'
        },
        {
          title: "+45K",
          subTitle: "Followers",
          type: "primary",
          icon: "tim-icons icon-shape-star",
          footer: '<i class="tim-icons icon-sound-wave"></i></i> Last Research'
        },
        {
          title: "150,000",
          subTitle: "Users",
          type: "info",
          icon: "tim-icons icon-single-02",
          footer: '<i class="tim-icons icon-trophy"></i> Customer feedback'
        },
        {
          title: "23",
          subTitle: "Errors",
          type: "danger",
          icon: "tim-icons icon-molecule-40",
          footer: '<i class="tim-icons icon-watch-time"></i> In the last hours'
        }
      ],
      bigLineChart: {
        activeIndex: 0,
        chartData: {
          datasets: [
            {
              ...bigChartDatasetOptions,
              data: bigChartData[0]
            }
            
          ],
          labels: bigChartLabels
        },
        extraOptions: chartConfigs.barChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: []
      },

    pieChart2: {
        chartData: {
          labels: [1, 2, 3],
          datasets: [
            {
              label: 'Emails',
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: ['#ff8779', '#2a84e9', '#e2e2e2'],
              borderWidth: 0,
              data: [60, 40, 20]
            }
          ]
        },
        extraOptions: chartConfigs.pieChartOptions
      },


      purpleLineChart: {
        extraOptions: chartConfigs.purpleChartOptions,
        chartData: {
          labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: [
            {
              label: "Data",
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: config.colors.primary,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [80, 100, 70, 80, 120, 80]
            }
          ]
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.2, 0]
      },
      greenLineChart: {
        extraOptions: chartConfigs.greenChartOptions,
        chartData: {
          labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
          datasets: [
            {
              label: "My First dataset",
              fill: true,
              borderColor: config.colors.danger,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.danger,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: config.colors.danger,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [90, 27, 60, 12, 80]
            }
          ]
        },
        gradientColors: [
          "rgba(66,134,121,0.15)",
          "rgba(66,134,121,0.0)",
          "rgba(66,134,121,0)"
        ],
        gradientStops: [1, 0.4, 0]
      },
      
    };
  },
  computed: {
    enableRTL() {
      return this.$route.query.enableRTL;
    },
    isRTL() {
      return this.$rtl.isRTL;
    },
    bigLineChartCategories() {
      return [
        { name: "GRI", icon: "tim-icons icon-single-02" },
        { name: "SASP", icon: "tim-icons icon-gift-2" },
        // { name: "Sessions", icon: "tim-icons icon-tap-02" }
      ];
    }
  },
  methods: {
    initBigChart() {

        if(this.selects == ''){
            let chartData = {
          
        datasets: [
          {
            ...bigChartDatasetOptions,
            
             data: bigChartData[0]
          }
        ],
        labels: bigChartLabels
      };
      this.$refs.bigChart.updateGradients(chartData);
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
        }else{
             let chartData = {
          
        datasets: [
          {
            ...bigChartDatasetOptions,
            
            data: bigChartData[this.selects]
          }
        ],
        labels: bigChartLabels
      };
      this.$refs.bigChart.updateGradients(chartData);
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
        }
     
    }
  },
  mounted() {
    this.i18n = this.$i18n;
    if (this.enableRTL) {
      this.i18n.locale = "ar";
      this.$rtl.enableRTL();
    }
    this.initBigChart(0);
  },
  beforeDestroy() {
    if (this.$rtl.isRTL) {
      this.i18n.locale = "en";
      this.$rtl.disableRTL();
    }
  }
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
