<template>
  <div class="content">
    <div class="col-md-8 ml-auto mr-auto">
      <h2 class="text-center">Add Data</h2>
      <!-- <p class="text-center">
        With a selection of custom components & and Element UI components, you
        can built beautiful data tables. For more info check
        <a
          href="http://element.eleme.io/#/en-US/component/table"
          target="_blank"
          >Element UI Table</a
        >
      </p> -->
    </div>

    <div class="col-md-12">
      <card>
        <template slot="header">
          <!-- <h5 class="card-category">Latest Upadte</h5> -->
          <h3 class="card-title">Board Member</h3>
        </template>

        <tabs type="primary">
          <tab-pane label="General Data">
           <add-general-data/>
          </tab-pane>

          <tab-pane label="Environmental">
            <add-general-data/>
          </tab-pane>

          <tab-pane label="Social">
           <add-general-data/>
          </tab-pane>

           <tab-pane label="Governance">
           <add-general-data/>
          </tab-pane>

          

         
        </tabs>
      </card>
    </div>

  
    </div>
    </template>
<script>
import { Table, TableColumn, Select, Option, Alert } from "element-ui";
import { BasePagination } from "src/components";
import users from "./users";
import { Tag } from "element-ui";
import Fuse from "fuse.js";
import swal from "sweetalert2";
import { TabPane, Tabs, Collapse, CollapseItem } from 'src/components';
import AddGeneralData from "./AddGeneralData.vue"

export default {
  name: "tags-input",
  components: {
    BasePagination,
    AddGeneralData,
    [Tag.name]: Tag,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
     TabPane,
    Tabs,
    Collapse,
    CollapseItem
  },
  
  data() {
    return {
     
    };
  },
};
</script>
<style>
.pagination-select,
.search-input {
  width: 200px;
}
.swal2-icon-content {
  font-size: inherit !important;
}
</style>
