<template>
  <div class="row">
    <!-- Big Chart -->
    <div class="col-md-6">
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
              ></div>
            </div>
          </div>
        </template>
        <div class="chart-area">
          <line-chart
            :labels="lineChart2.labels"
            :chart-data="lineChart2.chartData"
            :extra-options="lineChart2.extraOptions"
            :height="200"
          >
          </line-chart>
        </div>
      </card>
    </div>

    <div class="col-md-6">
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
              ></div>
            </div>
          </div>
        </template>
        <div class="chart-area"></div>
      </card>
    </div>
  </div>
</template>
<script>
import { TabPane, Tabs, Collapse, CollapseItem } from "src/components";
import PieChart from "src/components/Charts/PieChart";
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";
import * as chartConfigs from "@/components/Charts/config";

import StatsCard from "src/components/Cards/StatsCard";
import config from "@/config";

import Card from "../../components/Cards/Card.vue";
import { TimeSelect, DatePicker, Select, Option } from "element-ui";

let bigChartData = [
  [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
  [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
  [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
];
let bigChartLabels = ["Data", "Environmental", "Social", "Governance"];

export default {
  components: {
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect,
    [Option.name]: Option,
    [Select.name]: Select,
    LineChart,
    BarChart,
    StatsCard,
    // TaskList,
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

      lineChart2: {
        chartData: {
          labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: [
            {
              label: "Data",
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.info,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: "#2380f7",
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [80, 100, 70, 80, 120, 80]
            },
            {
              label: "Data",
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: "#2380f7",
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [8, 10, 70, 80, 120, 80]
            }
          ]
        },
        extraOptions: chartConfigs.lineChartOptionsBlue
      }
    };
  },
  computed: {
    bigLineChartCategories() {
      return [
        { name: "GRI", icon: "tim-icons icon-single-02" },
        { name: "SASP", icon: "tim-icons icon-gift-2" }
        // { name: "Sessions", icon: "tim-icons icon-tap-02" }
      ];
    }
  },
  methods: {},
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
