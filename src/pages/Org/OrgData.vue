<template>
 

      <el-table :data="tableData" height="250" style="width: 100%">
        <el-table-column label="Logo" min-width="50">
                <div
                  slot-scope="{ row }"
                  class="img-container"
                  style="height:50px; width:50px"
                >
                  <img :src="row.org_logo" alt="product image" />
                </div>
              </el-table-column>
        <!-- <el-table-column prop="date" label="Date" width="180">
        </el-table-column> -->
        <el-table-column prop="organisation_name" label="Name">
        </el-table-column>
        <el-table-column prop="website_url" label="Url"> </el-table-column>
      </el-table>
   
</template>

<script>
import { Table, TableColumn, Select, Option, Alert } from "element-ui";
import axios from "axios";

export default {
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
      return {
         url: process.env.VUE_APP_ROOT_API,
        tableData: [],
      }
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

   this.tableData = response.data
    
    // this.tenant = response.data.count.toString();
    // this.framework = response1.data.count.toString();
    console.log(response.data)
    // console.log(typeof this.tenant.toString());
  },

};
</script>
